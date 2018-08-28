<template>
	<div>
		<h1>test</h1>
	项目结构分析：

	项目入口：index.html(div#app)

	全局vue组件：App.vue(template:div#app)

	通过相同id的div，index.html与Appvue关联在了一起（具体怎么关联起来的，不需要关心）

	App.vue中 写入公共部分(tabbar+router-view)

	如何控制router-view的显示的内容呢？
	router文件夹下index.js：配置路由的文件
	先导入组件  import 自定义名字首字母大写 from "路径（同级文件前也要加./）"
	然后将组件应用到routes中，进行路径分配
	routes:[]

	豆瓣app共有5个页面
	都放在src文件下的pages文件夹下  这是自己创建的文件夹

					Home-->home.vue
					Audio-->audio.vue
					Broadcast-->broadcast.vue
					Group-->group.vue
					Mine-->mine.vue

	5个页面又分别由不同的小组件组装而成
	这些小组件，我们可以将他们存放在components文件下，也可以存放在pages的目录中
	</div>
</template>

<script>
	
</script>

<style>
	
</style>