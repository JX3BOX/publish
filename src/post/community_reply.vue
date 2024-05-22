<template>
    <div class="m-publish-box" v-loading="loading">
        <publish-header name="论坛回帖"> </publish-header>

        <el-form label-position="left" label-width="80px">
            <!-- 正文 -->
            <div class="m-publish-content">
                <el-divider content-position="left">回帖内容</el-divider>
                <Tinymce v-model="data.content" :attachmentEnable="true" :resourceEnable="true" />
            </div>

            <!-- 按钮 -->
            <div class="m-publish-buttons">
                <el-button type="primary" @click="onSubmit" :disabled="processing"
                    >更 &nbsp;&nbsp; 新</el-button
                >
            </div>
        </el-form>
    </div>
</template>

<script>
import Tinymce from "@jx3box/jx3box-editor/src/Tinymce";
import publish_header from "@/components/publish_header.vue";
import { getMyReply, updateMyReply } from "@/service/community.js";
import { pick } from "lodash";
export default {
    name: "community_reply",
    components: {
        Tinymce,
        "publish-header": publish_header,
    },
    computed: {
        id: function () {
            return this.$route.params.id;
        },
    },
    data() {
        return {
            data: {
                content: "",
            },
            loading: false,
            processing: false,
        };
    },
    watch: {
        id: {
            immediate: true,
            handler: function (newval) {
                if (newval) {
                    this.loadData();
                }
            },
        },
    },
    methods: {
        loadData() {
            this.loading = true;
            getMyReply(this.id)
                .then((res) => {
                    this.data = res.data.data;
                })
                .finally(() => {
                    this.loading = false;
                });
        },
        onSubmit() {
            this.processing = true;
            const data = pick(this.data, ["content"]);
            updateMyReply(this.id, data)
                .then(() => {
                    this.$message({
                        message: "更新回帖成功",
                        type: "success",
                    });
                    setTimeout(() => {
                        location.href = `/community/${this.data?.topic_id}`;
                    }, 500);
                })
                .finally(() => {
                    this.processing = false;
                });
        }
    },
};
</script>

<style lang=""></style>
