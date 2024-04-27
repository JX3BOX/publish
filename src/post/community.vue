<template>
    <div class="m-publish-box" v-loading="loading">
        <!-- 头部 -->
        <publish-header name="魔盒论坛">
            <publish-revision :enable="true" :post-id="id"></publish-revision>
        </publish-header>

        <el-form label-position="left" label-width="80px">
            <!-- 标题 -->
            <publish-title v-model="post.title"></publish-title>

            <!-- 信息 -->
            <div class="m-publish-info">
                <el-divider content-position="left">信息</el-divider>

                <!-- 类型 -->
                <publish-subtype v-model="post.category" :options="community_types"></publish-subtype>

                <el-form-item label="标签">
                    <el-radio-group v-model="post.sub_category">
                        <el-radio v-for="item in tags" :key="item" :label="item">{{ item }}</el-radio>
                    </el-radio-group>
                </el-form-item>
            </div>

            <!-- 正文 -->
            <div class="m-publish-content">
                <el-divider content-position="left">正文</el-divider>
                <Tinymce
                    v-model="post.content"
                    :attachmentEnable="true"
                    :resourceEnable="true"
                />
            </div>

            <!-- 附加 -->

            <div class="m-publish-append">
                <el-divider content-position="left">小册</el-divider>
                <publish-collection v-model="post.collection_id" :defaultCollapse="post.collection_collapse">
                </publish-collection>
            </div>

            <!-- 附图 -->
            <div class="m-publish-extraimg"></div>

            <div class="m-publish-doc">
                <el-checkbox v-model="hasRead" :true-label="1" :false-label="0"
                    >我已阅读并了解<a href="/notice/119" @click.stop target="_blank">《创作发布规范》</a></el-checkbox
                >
            </div>

            <!-- 按钮 -->
            <div class="m-publish-buttons">
                <template>
                    <el-button type="primary" @click="publish('publish', true)" :disabled="processing || !hasRead"
                        >发 &nbsp;&nbsp; 布</el-button
                    >
                    <!-- <el-button type="plain" @click="publish('draft', false)" :disabled="processing || !hasRead"
                        >保存为草稿</el-button
                    > -->
                </template>
            </div>
        </el-form>
    </div>
</template>

<script>
// 公共模块
import community_types from "@/assets/data/community.json";

import User from "@jx3box/jx3box-common/js/user.js";

import { push, pull, update } from "@/service/community.js";

// 本地模块
import Tinymce from "@jx3box/jx3box-editor/src/Tinymce";

import publish_header from "@/components/publish_header.vue";
import publish_title from "@/components/publish_title.vue";
import publish_collection from "@/components/publish_collection";

import publish_revision from "@/components/publish_revision.vue";
import publish_subtype from "@/components/publish_subtype";

// 数据逻辑
import { getTopicBucket } from "@/service/cms.js";
import { cmsMetaMixin } from "@/utils/cmsMetaMixin";
import { atAuthorMixin } from "@/utils/atAuthorMixin";

export default {
    name: "bbs",
    mixins: [cmsMetaMixin, atAuthorMixin],
    components: {
        Tinymce,
        "publish-header": publish_header,
        "publish-title": publish_title,
        "publish-collection": publish_collection,
        "publish-revision": publish_revision,
        "publish-subtype": publish_subtype,
    },
    data: function () {
        return {
            // 加载状态
            loading: false,
            // 发布状态
            processing: false,

            // 内容
            post: {
                // 文章ID
                id: "",

                // 分类
                category: "讨论",
                // 小册id
                collection_id: "",
                // 客户端
                client : 'std',

                // 标题
                title: "",
                // 内容
                content: "",

                // 海报
                banner_img: "",

            },

            // 选项
            community_types,
            tags: [],
            buckets: [],
        };
    },

    computed: {
        id: function () {
            return ~~this.post.id;
        },
        data: function () {
            const imgs = this.getImgSrc(this.post.content);
            return {
                ...this.post,
                collection_id: this.post.collection_id || undefined,
                extra_images: imgs,
            };
        },
        isSuperAuthor() {
            return User.isSuperAuthor();
        },
    },
    mounted() {
        this.getTopicBucket();
        const id = this.$route.params.id;
        if (id) {
            this.post.id = id;
            this.loadCommentConfig("community", id);
        }
    },
    methods: {
        // 初始化
        init: function () {
            // 尝试加载
            sessionStorage.removeItem("atAuthor");
            // return this.loadData().then(() => {
            //     this.autoSave();
            // });
            const id = this.$route.params.id;
            if (!id) return;
            pull(id).then((res) => {
                const data = res.data.data;
                this.post = {
                    ...this.post,
                    title: data.title,
                    content: data.content,
                    collection_id: data.collection_id,
                    banner_img: data.banner_img,
                };
            });
        },
        // 发布
        publish: function () {
            if (this.data.id) {
                update(this.data.id, this.data).then((res) => {
                    this.$message({
                        message: "更新成功",
                        type: "success",
                    });
                    // 跳转
                    setTimeout(() => {
                        location.href = `/community/${res.data.data.id}`;
                    }, 500);
                });
            } else {
                push(this.data).then((res) => {
                    this.$message({
                        message: "发布成功",
                        type: "success",
                    });
                    // 跳转
                    setTimeout(() => {
                        location.href = `/community/${res.data.data.id}`;
                    }, 500);
                });
            }

            // t
        },
        getImgSrc: function (htmlString) {
            // 创建一个正则表达式来匹配<img>标签，并且捕获src属性的值
            const imgSrcRegex = /<img\s+[^>]*src="([^"]*)"/g;
            let matches;
            const imgSrcs = [];

            // 使用正则表达式全局匹配HTML字符串中的所有<img>标签
            while ((matches = imgSrcRegex.exec(htmlString)) !== null) {
                // matches[1] 是正则表达式中捕获组的内容，即src的值
                imgSrcs.push(matches[1]);
            }

            return imgSrcs;
        },

        getTopicBucket() {
            getTopicBucket({ type: "community" }).then((res) => {
                const data = res.data.data?.map((item) => item.name) || [];
                if (data[0]) {
                    this.post.sub_category = data[0];
                }
                this.tags = [...data];
            });
        },
    },
};
</script>
