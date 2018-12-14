// 模拟JSON数据
let Mock = require('mockjs');
let Random = Mock.Random;

let content = function() {
	let data = [];
	let length = 10;

	for(let i = 0; i < length; i++) {
		let item = new Object();
		item.id = Random.word(32);
		item.name = Random.cword(2, 4);
		item.sex = Random.boolean() ? "男" : "女";
		item.age = Random.integer(18, 30);
		data.push(item);
	}
	return data;
}

module.exports = content;