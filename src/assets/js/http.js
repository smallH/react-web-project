import axios from 'axios';

/**
 * Get
 * {String} url：地址
 * {String} query：参数
 */
export const _get = ({url, query}) => {
	return axios({
		method: 'get',
		url,
		params: { ...query}
	}).then((res) => {
		if(res.status >= 200 && res.status < 300) {
			return res.data
		}
		return Promise.reject(res)
	}, (err) => {
		return Promise.reject(err.message || err.data);
	});
};

/**
 * Post
 * {String} url：地址
 * {String} body：参数
 */
export const _post = ({url, body}) => {
	return axios({
		method: 'post',
		url,
		data: { ...body}
	}).then((res) => {
		if(res.status >= 200 && res.status < 300) {
			return res.data
		}
		return Promise.reject(res);
	}, (err) => {
		return Promise.reject(err.message || err.data);
	});
};

/**
 * Delete
 * {String} url：地址
 * {String} body：参数
 */
export const _delete = ({url, body}) => {
	return axios({
		method: 'delete',
		url,
		data: { ...body}
	}).then((res) => {
		if(res.status >= 200 && res.status < 300) {
			return res.data
		}
		return Promise.reject(res);
	}, (err) => {
		return Promise.reject(err.message || err.data);
	});
};

/**
 * Put
 * 用于更新操作时，需传递包含sql记录的全部字段的对象，否则缺少的属性该字段将在数据库置空。
 * {String} url：地址
 * {String} body：参数
 */
export const _put = ({url, body}) => {
	return axios({
		method: 'put',
		url,
		data: { ...body}
	}).then((res) => {
		if(res.status >= 200 && res.status < 300) {
			return res.data
		}
		return Promise.reject(res);
	}, (err) => {
		return Promise.reject(err.message || err.data);
	});
};

/**
 * Patch
 * 用于更新操作时，需传递包含sql记录的部分字段的对象且只更新该部分字段内容。
 * {String} url：地址
 * {String} body：参数
 */
export const _patch = ({url, body}) => {
	return axios({
		method: 'patch',
		url,
		data: { ...body}
	}).then((res) => {
		if(res.status >= 200 && res.status < 300) {
			return res.data
		}
		return Promise.reject(res);
	}, (err) => {
		return Promise.reject(err.message || err.data);
	});
};