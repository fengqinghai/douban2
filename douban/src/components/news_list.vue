<template>
	<div class="listWrap">
		<div class="left">
			<h4><slot name="title"></slot></h4>
			<slot name="desc"></slot>
			<div class="sep"></div>
			<p class="author">作者:{{ author }}</p>
		</div>

		<img :src="url"/>
	</div>
</template>

<script>
	export default{
		props:["author","url"]
	}
</script>

<style>
	.listWrap{padding:20px;box-sizing:border-box;text-align:left;
		border-bottom:1px solid #eee;}
	.listWrap h4{font-size:16px;}
	.listWrap:after{content:"";display: block;clear:both;}
	.listWrap img{width:80px;float:right;height:80px;}
	.listWrap .left{float: left;width:65%;}
	.listWrap p{margin:5px 0;color:#999;font-size:14px;}
	.listWrap .author{font-size: 12px;color:#ccc;}
	.listWrap .sep{width:20px;height:1px;background:#eee;}
</style>