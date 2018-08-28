<template>
	<div class="navWrap">
		<h4>{{ title }}</h4>
		<div>
			<span>全部&emsp;{{ num }}</span>&emsp;
			<img src="../assets/images/ic_arrow_gray_small.png"/>
		</div>
		
	</div>
</template>

<script>
export default{
	props:["title","num"]
}
</script>

<style>
.navWrap{height:40px;width:100%;position:relative;line-height: 40px;
	box-sizing:border-box;}
.navWrap h4{position: absolute;left:10px;}
.navWrap div{position: absolute;right:10px;}
.navWrap div span{font-size:14px;font-weight:800;}
.navWrap div img{width:20px;height:20px;position:absolute;
right:-7px;top:10px;}
</style>