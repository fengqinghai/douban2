<template>
	<div :class="{headerWrap:true,green:bol}">
		<span>{{ txt }}</span>
		<slot name="left"></slot>
		<slot name="right"></slot>
		<slot name="search"></slot>
		
		
	</div>
</template>

<script>
export default {
	props:["txt","bol"]
}
</script>

<style>
.headerWrap{
	width:100%;height:44px;border-bottom:1px solid #ccc;
	background: #f7f7f7;line-height: 44px;position: relative;
}
.headerWrap img{width:25px;height:25px;position: absolute;}
.headerWrap .rightImg{top:10px;right:10px;}
.headerWrap .leftImg{top:12px;right:50px;}
.green{background:#48bd5a;}
.headerWrap .search input{width:70%;text-indent:2.5em;height:30px;
border-radius:10px;position: absolute;left:50%;top:50%;transform:translate(-50%,-50%);border:none;}
.headerWrap .search img{position: absolute;width:16px;height:16px;
top:50%;transform:translateY(-50%);}
.headerWrap .search .searchImg{left:16%;}
.headerWrap .search .scanImg{right:17%;}
</style>