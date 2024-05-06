<template>
    <div class="m-publish-box p-community" v-loading="loading">
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
                <!-- 客户端 -->
                <publish-client v-model="post.client" :showMobile="true"></publish-client>
                <!-- 类型 -->
                <publish-category v-model="post.category" :options="tags"></publish-category>
            </div>

            <!-- 正文 -->
            <div class="m-publish-content">
                <el-divider content-position="left">正文</el-divider>
                <Tinymce
                    v-model="post.content"
                    :attachmentEnable="true"
                    :resourceEnable="true"
                    v-show="!post.post_mode || post.post_mode == 'tinymce'"
                />
            </div>

            <!-- 附加 -->

            <div class="m-publish-append">
                <el-divider content-position="left">小册</el-divider>
                <publish-collection v-model="post.collection_id" :defaultCollapse="post.collection_collapse">
                </publish-collection>
            </div>

            <!-- 附图 -->
            <div class="m-publish-extraimg" v-show="extraImages.length">
                <el-divider content-position="left">附图</el-divider>
                <div class="u-imgs">
                    <div
                        :class="`u-imgs-item ${post.banner_img === item && 'active'}`"
                        v-for="(item, i) in extraImages"
                        :key="i"
                        @click="setBannerIndex(item)"
                    >
                        <el-image :src="item" fit="cover" style="width: 148px; height: 148px" />
                        <div class="u-mark">封面</div>
                    </div>
                </div>
            </div>

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
import publish_category from "@/components/publish_category.vue";
import publish_client from "@/components/publish_client.vue";

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
        "publish-category": publish_category,
        "publish-client": publish_client,
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
                category: "",
                // 标题
                title: "",
                // 内容
                content: "",

                // 海报
                banner_img: "",
                // 小册id
                collection_id: "",
            },

            // 选项
            community_types,
            tags: [],
            buckets: [],
        };
    },
    computed: {
        extraImages() {
            const imgs = this.getImgSrc(this.post.content);

            return [...new Set(imgs)];
        },

        id: function () {
            return ~~this.post.id;
        },
        data: function () {
            return {
                ...this.post,
                category: this.post.category,
                collection_id: this.post.collection_id || undefined,
                extra_images: this.extraImages,
                introduction: this.getIntroduction(this.post.content),
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
        getIntroduction(str) {
            // 使用正则表达式匹配HTML标签并将其替换为空字符串
            const withoutTags = str.replace(/<[^>]*>|\n|&nbsp;| &nbsp;/g, "");

            // 获取前100个字符，如果字符串长度小于200，则获取全部字符
            return withoutTags.slice(0, 200);
        },
        setBannerIndex(img) {
            this.post.banner_img = img;
        },
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
                    ...data,
                    title: data.title,
                    content: data.content,
                    collection_id: data.collection_id,
                    banner_img: data.banner_img,
                };
            });
        },
        // 发布
        publish: function () {
            this.loading = true;
            if (this.data.id) {
                update(this.data.id, this.data)
                    .then((res) => {
                        this.$message({
                            message: "更新成功",
                            type: "success",
                        });
                        // 跳转
                        setTimeout(() => {
                            location.href = `/community/${this.post.id || res.data.data.id}`;
                        }, 500);
                    })
                    .finally(() => {
                        this.loading = false;
                    });
            } else {
                push(this.data)
                    .then((res) => {
                        this.$message({
                            message: "发布成功",
                            type: "success",
                        });
                        // 跳转
                        setTimeout(() => {
                            location.href = `/community/${this.post.id || res.data.data.id}`;
                        }, 500);
                    })
                    .finally(() => {
                        this.loading = false;
                    });
            }

            // t
        },
        getImgSrc: function (htmlString) {
            // 创建一个正则表达式来匹配没有class属性的<img>标签，并且捕获src属性的值
            const imgSrcRegex = /<img\s+(?![^>]*\bclass\b)[^>]*src="([^"]*)"/g;
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
                    this.post.category = data[0];
                }
                this.tags = [...data];
            });
        },
    },
    watch: {
        extraImages() {
            if (this.extraImages.length) {
                //  初始化banner_img
                console.log("this.post.banner_img", this.post.banner_img);
                if (!this.post.banner_img) {
                    this.post.banner_img = this.extraImages[0];
                } else {
                    const findData = this.extraImages.find((item) => item === this.post.banner_img);
                    if (!findData) {
                        this.post.banner_img = this.extraImages[0];
                    }
                }
            } else {
                console.log("this.post.banner_img", this.post.banner_img);
                // 附图被清空 banner_img 也要去掉
                this.post.banner_img = "";
            }
        },
    },
};
</script>

<style lang="less">
.m-publish-extraimg {
    .u-imgs {
        display: flex;
        overflow-x: auto;
        gap: 8px;
    }
    .u-imgs-item {
        min-width: 148px;
        overflow: hidden;
        border-radius: 6px;
        box-sizing: border-box;
        height: 148px;
        cursor: pointer;
        position: relative;
        border: 2px solid transparent;
        transition: 0.35s;
        background-color: @bg-light;
        &:hover {
            border-color: #0366d6;
        }
        &.active {
            border-color: #0366d6;
            .u-mark {
                display: block;
            }
        }
        img {
            width: 100%;
        }
        .u-mark {
            display: none;
            position: absolute;
            top: 2px;
            right: 2px;
            padding: 4px 8px;
            font-size: 12px;
            background-color: #0366d6;
            color: white;
            border-radius: 4px;
        }
    }
}
</style>
