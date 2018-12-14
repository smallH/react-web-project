/**
 * json-server 模拟后端数据请求
 * */
let mockGetJson = require('./router/mockGetJson')();

module.exports = function() {
	let data = {
		mockGetJson
	};
	return data;
};