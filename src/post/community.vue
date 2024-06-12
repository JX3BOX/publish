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
                <!-- <publish-client v-model="post.client" :showMobile="true"></publish-client> -->
                <!-- 类型 -->
                <publish-category v-model="post.category" :options="tags"></publish-category>
            </div>

            <div class="m-publish-info m-publish-extraimg">
                <el-divider content-position="left">装备魔卡</el-divider>
                <div class="u-imgs u-skin-imgs" v-if="skins.length">
                    <div
                        @click="setSkin(item)"
                        :class="`u-imgs-item u-skin ${post.decoration_id === item.id && 'active'}`"
                        v-for="(item, i) in skins"
                        :key="i"
                        title="点击使用卡片皮肤，再次点击取消选择"
                    >
                        <el-image :src="item.url" fit="fill" />
                        <div class="u-mark">已选择</div>
                        <div class="u-amount">剩余数量：{{ item.amount }}</div>
                    </div>
                </div>
                <el-button type="primary" @click="goShopping" v-else>前往购买</el-button>
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
                        title="点击设置封面"
                    >
                        <el-image :src="item" fit="cover" style="width: 148px; height: 148px" />
                        <div class="u-mark">封面</div>
                    </div>
                </div>
            </div>

            <div class="m-publish-other">
                <publish-banner v-model="post.banner_img"></publish-banner>
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
import { __imgPath } from "@jx3box/jx3box-common/data/jx3box.json";
// 公共模块
import community_types from "@/assets/data/community.json";

import { push, pull, update } from "@/service/community.js";

// 本地模块
import Tinymce from "@jx3box/jx3box-editor/src/Tinymce";

import publish_header from "@/components/publish_header.vue";
import publish_title from "@/components/publish_title.vue";
import publish_collection from "@/components/publish_collection";
import publish_revision from "@/components/publish_revision.vue";
import publish_category from "@/components/publish_category.vue";
// import publish_client from "@/components/publish_client.vue";
import publish_banner from "@/components/publish_banner";

// 数据逻辑
import { getTopicBucket } from "@/service/cms.js";
import { cmsMetaMixin } from "@/utils/cmsMetaMixin";
import { atAuthorMixin } from "@/utils/atAuthorMixin";
import { getDecoration } from "@jx3box/jx3box-common-ui/service/cms";

export default {
    name: "community",
    mixins: [cmsMetaMixin, atAuthorMixin],
    components: {
        Tinymce,
        "publish-header": publish_header,
        "publish-title": publish_title,
        "publish-collection": publish_collection,
        "publish-revision": publish_revision,
        "publish-category": publish_category,
        // "publish-client": publish_client,
        "publish-banner": publish_banner,
    },
    data: function () {
        return {
            skins: [],
            // 加载状态
            loading: false,
            // 发布状态
            processing: false,

            // 内容
            post: {
                // 文章ID
                id: "",
                client: "all",
                // 皮肤id
                decoration_id: "",
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
                decoration_id: this.post.decoration_id || undefined,
                extra_images: this.extraImages,
                introduction: this.getIntroduction(this.post.content),
            };
        },
    },
    mounted() {
        this.getDecoration();
        this.getTopicBucket();
        const id = this.$route.params.id;
        if (id) {
            this.post.id = id;
            this.loadCommentConfig("community", id);
        }

        this.post.client = "all";
    },
    methods: {
        goShopping(e) {
            window.open("/vip/mall/list?category=virtual&sub_category=palu", "_blank");
            e.preventDefault();
            e.stopPropagation();
        },
        setSkin(data) {
            if (data.amount <= 0) {
                this.$message({
                    message: "该皮肤已经被使用完了",
                    type: "warning",
                });
                return;
            }
            if (this.post.decoration_id == data.id) {
                this.post.decoration_id = "";
            } else {
                this.post.decoration_id = data.id;
            }
        },
        getDecoration() {
            getDecoration({ type: "palu" })
                .then((res) => {
                    const list = res.data.data || [];
                    const skins = list.filter((item) => item.amount > 0);
                    this.skins = skins.map((item) => {
                        return {
                            val: item.val,
                            id: item.id,
                            amount: item.amount,
                            url: __imgPath + `decoration/palu/${item.val}.png`,
                        };
                    });
                })
                .catch(() => {
                    this.skins = [];
                });
        },
        getIntroduction(str) {
            // 使用正则表达式匹配HTML标签并将其替换为空字符串
            const withoutTags = str.replace(/<[^>]*>|\n|&nbsp;| &nbsp;/g, "");

            // 获取前100个字符，如果字符串长度小于200，则获取全部字符
            return withoutTags.slice(0, 200);
        },
        setBannerIndex(img) {
            // 设置封面
            if (this.post.banner_img === img) {
                this.post.banner_img = "";
            } else {
                this.post.banner_img = img;
            }
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
        extraImages: {
            deep: true,
            handler() {
                if (this.extraImages.length) {
                    if (!this.post.banner_img) {
                        this.post.banner_img = this.extraImages[0];
                    } else {
                        const findData = this.extraImages.find((item) => item === this.post.banner_img);
                        if (!findData) {
                            this.post.banner_img = this.extraImages[0];
                        }
                    }
                } else {
                    // 附图被清空 banner_img 也要去掉
                    this.post.banner_img = "";
                }
            },
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
    .u-skin-imgs {
        overflow-x: scroll;
        padding-bottom: 20px;
        .u-imgs-item {
            position: relative;
            min-width: 160px;
            height: 50px;
            box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
            .el-image {
                width: 100%;
                height: 100%;
            }
            .u-mark {
                left: 2px;
                right: initial !important;
            }
        }
        .u-amount {
            font-size: 14px;
            position: absolute;
            right: 4px;
            bottom: 4px;
        }
    }
}
</style>
