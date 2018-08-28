<template>
	<div class="filmDemoWrap">
		<span class="img"><slot name="img"></slot></span>
		<p>{{ filmName }}</p>

	</div>
</template>

<script>
	export default{
		props:["filmName"],
	}
</script>

<style>

	.filmDemoWrap{width:100px;padding:8px 0px 8px 8px;box-sizing:border-box;float: left;text-align: center;}
	.filmDemoWrap img{width:80px;height:100px;border-radius:8px;}
	.filmDemoWrap .img{overflow: hidden;display:inline-block;}
	.filmDemoWrap p{overflow: hidden;white-space:nowrap;text-overflow:ellipsis;font-size:14px;color:black;}
</style>