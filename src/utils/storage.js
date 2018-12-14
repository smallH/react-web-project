// 存储localStorage
export const setLocalStorage = (name, content) => {
	if(!name) return;
	if(typeof content !== 'string') {
		content = JSON.stringify(content);
	}
	window.localStorage.setItem(name, content);
};

// 获取localStorage
export const getLocalStorage = name => {
	if(!name) return;
	try {
		let value = window.localStorage.getItem(name);
		if(value) {
			return value;
		} else {
			return '';
		}
	} catch(e) {
		return '';
	}
};

// 删除localStorage
export const removeLocalStorage = name => {
	if(!name) return;
	window.localStorage.removeItem(name);
};