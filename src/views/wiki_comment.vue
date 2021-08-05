<template>
    <div class="m-dashboard m-dashboard-work m-dashboard-wiki" v-loading="loading">

        <div class="m-dashboard-work-header">
            <h2 class="u-title">百科评论</h2>
        </div>

        <el-input
            class="m-dashboard-work-search u-source-search"
            placeholder="请输入搜索内容"
            v-model="achievement_comment.keyword"
            @change="search_comment"
        >
            <template slot="prepend">关键词</template>
            <el-button
                slot="append"
                icon="el-icon-search"
                @click="search_comment"
            ></el-button>
        </el-input>

        <div class="m-dashboard-box">
            <ul
                class="m-dashboard-box-list"
                v-if="
                    achievement_comment.data &&
                        achievement_comment.data.length
                "
            >
                <li
                    v-for="(comment, key) in achievement_comment.data"
                    :key="key"
                >
                    <span
                        class="u-tab"
                        v-text="getTypeLabel(comment.type)"
                    ></span>
                    <a
                        class="u-title"
                        target="_blank"
                        :href="comment.link"
                        >{{ comment.title || "无标题" }}</a
                    >
                    <span
                        v-if="comment.checked == 0"
                        class="u-mark pending"
                        >⌛ 等待审核</span
                    >
                    <span v-if="comment.checked == 1" class="u-mark"
                        >✔ 审核通过</span
                    >
                    <span
                        v-if="comment.checked == 2"
                        class="u-mark reject"
                        >❌ 审核驳回</span
                    >
                    <div class="u-desc">
                        <span class="u-content"
                            ><i class="el-icon-s-comment"></i>
                            {{ comment.content }}</span
                        >
                        <time class="u-desc-subitem"
                            ><i class="el-icon-finished"></i> 发布 :
                            {{
                                new Date(comment.created * 1000)
                                    | dateFormat
                            }}</time
                        >
                        <time class="u-desc-subitem"
                            ><i class="el-icon-refresh"></i> 更新 :
                            {{
                                new Date(comment.updated * 1000)
                                    | dateFormat
                            }}</time
                        >
                    </div>

                    <el-button-group class="u-action">
                        <el-button
                            size="mini"
                            icon="el-icon-delete"
                            title="删除"
                            @click="comment_del(comment)"
                        ></el-button>
                    </el-button-group>
                </li>
            </ul>
            <el-alert
                v-else
                class="m-dashboard-box-null"
                title="没有找到相关条目"
                type="info"
                center
                show-icon
            >
            </el-alert>
            <el-pagination
                class="m-dashboard-box-pages"
                background
                :total="achievement_comment.total"
                hide-on-single-page
                layout="total, prev, pager, next, jumper"
                :current-page="comment_page"
                :page-size="length"
                @current-change="comment_page_change"
            >
            </el-pagination>
        </div>
    </div>
</template>

<script>
import { getTypeLabel } from "@jx3box/jx3box-common/js/utils";
import { __wikiType } from "@jx3box/jx3box-common/data/jx3box.json";
import dateFormat from "@/utils/dateFormat";
import {
    get_comments,
    remove_comment,
} from "@/service/wiki";
export default {
    name: "wiki",
    props: [],
    data: function() {
        return {
            loading:false,

            active_name: this.$route.query.type
                ? this.$route.query.type
                : "wiki_post",
            achievement_comment: {
                data: null,
                total: 0,
                keyword: null,
            },
            comment_page: 1,
            length: 10,
        };
    },
    methods: {
        getTypeLabel: function(val) {
            return val ? __wikiType[val] : "未知";
        },
        comment_page_change(i = 1) {
            this.comment_page = i;
            this.loading = true
            get_comments({
                keyword: this.achievement_comment.keyword,
                page: i,
                limit: this.length,
            }).then(
                (data) => {
                    data = data.data;
                    this.achievement_comment.data =
                        data.code === 200 ? data.data.data : false;
                    this.achievement_comment.total =
                        data.code === 200 ? data.data.total : 0;
                },
                () => {
                    this.achievement_comment.data = false;
                }
            ).finally(() => {
                this.loading = false
            })
        },
        search_comment() {
            this.comment_page_change(1);
        },
        post_edit(type, post) {
            switch (type) {
                case "achievement":
                    this.$message("即将开放");
                    break;
            }
        },
        comment_del(comment) {
            this.$alert("确定要删除吗？", "确认信息", {
                confirmButtonText: "确定",
                callback: (action) => {
                    remove_comment(comment.id).then(
                        (data) => {
                            data = data.data;
                            if (data.code === 200) {
                                this.$notify({
                                    title: "删除成功",
                                    type: "success",
                                });
                                this.comment_page_change(this.post_page);
                            } else {
                                this.$notify({
                                    title: "删除失败",
                                    type: "error",
                                });
                            }
                        },
                        () => {
                            this.$notify({ title: "删除失败", type: "error" });
                        }
                    );
                },
            });
        },
    },
    filters: {
        dateFormat: function(val) {
            return dateFormat(new Date(val));
        },
    },
    watch: {
        $route: {
            immediate: true,
            handler() {
                if (this.$route.query.keyword) {
                    this.achievement_comment.keyword = this.$route.query.keyword;

                    // 置空输入框ID
                    this.$nextTick(() => {
                        let input_doms = document.querySelectorAll(
                            ".u-source-search input"
                        );
                        for (let i = 0; i < input_doms.length; i++)
                            input_doms[i].value = "";
                    });
                } else {
                    this.achievement_comment.keyword = "";
                }

                // 列表获取
                this.comment_page_change();
            },
        },
    },
};
</script>

<style scoped lang="less">
@import "../assets/css/wiki.less";
</style>