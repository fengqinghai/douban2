<template>
	<div class="citydemo">
		<span class="img"><slot name="img"></slot></span>
		<p>{{ name }}</p>
		<span class="time">{{ time }}</span>

	</div>
</template>

<script>
	export default{
		props:["name","time"],
	}
</script>

<style>

	.citydemo{width:100px;padding:8px 0px 8px 8px;box-sizing:border-box;float: left;text-align:left;}
	.citydemo img{width:80px;height:100px;border-radius:8px;}
	.citydemo .img{overflow: hidden;display:inline-block;}
	.citydemo p{color:black;text-overflow:-o-ellipsis-lastline;overflow: hidden;text-overflow:ellipsis;display: -webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;font-size:14px;font-weight:1000;height:38px;}
	.citydemo .time{font-size:12px;color:#999;}
</style>