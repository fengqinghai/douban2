<template>
	<div class="bookdemo">
		<div class="left">
			<slot name="img"></slot>
		</div>
		<div class="right">
			<p class="bookname">{{ bookname }}</p>
			<p class="author">{{ count }}人想看/{{ author }}</p>
			<div class="info">{{ info }}</div>
		</div>
	</div>
</template>

<script>
	export default{
		props:["bookname","count","author","info"]
	}
</script>

<style>
	.bookdemo{width:300px;}
	.bookdemo .left{float: left;width:100px;padding:10px;box-sizing:border-box;}
	.bookdemo .right{float:left;width:200px;text-align:left;
		padding-top:10px;}
	.bookdemo .left img{width:80px;height:100px;border-radius:5px;}
	.bookdemo .right .bookname{font-size:18px;font-weight:800px;color:black;}
	.bookdemo .right .author{overflow: hidden;white-space:nowrap;text-overflow:ellipsis;color:#999;font-size:14px;line-height:200%;}
	.bookdemo .right .info{padding:5px;box-sizing:border-box;background:#E6E6E6;border-radius:5px;font-size:14px;overflow: hidden;text-overflow:-o-ellipsis-lastline;text-overflow:ellipsis;display: -webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;}
</style>