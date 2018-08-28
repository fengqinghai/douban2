<template>
	<div class="huati">
		<span class="title">{{ title }}</span>&emsp;
		<span>{{ count }}k人浏览</span>
	</div>
</template>

<script>
	export default{
		props:["title","count"]
	}
</script>

<style>
	.huati{width:100%;padding:10px;box-sizing:border-box;line-height: 180%;text-align:left;font-size:12px;color:#999;}
	.huati .title:before{content:"";width:16px;height:16px;display:inline-block;vertical-align:middle;margin-right:10px;background:url('../../static/films/huati.png');background-size:cover;}
	.huati .title{color:black;}
</style>