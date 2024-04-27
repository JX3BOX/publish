import { $next } from "@jx3box/jx3box-common/js/https";

const API_PREFIX = `/api/next2`;
// 发布
function push(params) {
    return $next().post(`${API_PREFIX}/community/discussion/topic`, params);
}

function update(id, params) {
    return $next().put(`${API_PREFIX}/community/discussion/my/topic/item/${id}`, params);
}

function getMyList(params) {
    return $next().get(`${API_PREFIX}/community/discussion/my/topic/list`, { params });
}
function del(id) {
    return $next().delete(`${API_PREFIX}/community/discussion/my/topic/item/${id}`);
}

function pull(id) {
    return $next().get(`${API_PREFIX}/community/discussion/my/topic/item/${id}`);
}
export { push, getMyList, del, pull, update };
