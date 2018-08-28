<template>
	<div class="tvdemo">
		<slot name="img"></slot>
		<br>
		<p class="tvname">{{ tvname }}</p>

	</div>
</template>

<script>
	export default{
		props:["tvname"]
	}
</script>

<style>
	.tvdemo{width:100px;padding:10px 0px 10px 10px;box-sizing:border-box;text-align:left;font-size:12px;color:black;}
	.tvdemo img{width:80px;border-radius:5px;height:100px;display:block;margin:0 auto;}
	.tvdemo .tvname:before{content:"";display:inline-block;vertical-align: middle;width:12px;height:12px;background:url('../../../static/films/bofang.png');background-size:cover;margin-right:5px;}
	.tvdemo .tvname{width:100%;height:30px;line-height:30px;overflow: hidden;text-overflow:ellipsis;white-space: nowrap;}
</style>