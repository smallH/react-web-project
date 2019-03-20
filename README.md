# RARC(react+axios+redux+cssmodules)前端框架
## 介绍
该框架是一套用于构建用户界面的渐进式前端框架，框架目录结构采用了区别于传统react项目按照类型分类的目录结构，它提倡将相关的reducer，action，actionType和creaters写在一个文件里面，这样，管理相同状态的依赖都在同一个文件中，无论哪个容器组件需要这部分状态，只需要引入管理这个状态的模块文件即可。使用注意：
- API接口采用的是restful接口风格
- 网络请求使用的是 axios 模块，开发者可个性化需求改用 Fetch。
- 样式引用使用的是 cssmodules 模块，开发者可个性化需求改用 styles嵌入式写法。
