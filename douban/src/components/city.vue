<template>
	<div class="cityWrap">
		<div class="top">
			<div class="topleft">
				<span>当前城市:</span>&emsp;
				<span class="place">北京</span>
				<img src="../assets/images/ic_arrow_gray_small.png"/>
			</div>
			<div class="fenge"></div>
			<div class="topright">
				<span>类型</span>&emsp;
				<span>时间</span>&emsp;
				<span>地点</span>
				<img src="../assets/images/ic_arrow_gray_small.png"/>
			</div>
		</div>

		<Navfilm title="热门活动" num="18"></Navfilm>

		<Remenhuadong></Remenhuadong>
	</div>
</template>

<script>
	import Navfilm from './nav_film.vue'
	import Remenhuadong from './city/remenhuadong.vue'
	export default{
		components:{
			Navfilm,
			Remenhuadong
		}
	}
</script>

<style>
.top{width:100%;height:40px;padding:10px;box-sizing:border-box;text-align:left;font-size:14px;position: relative;color:#999;}
.top .topleft{float:left;width:48%;position: relative;}
.top .topleft img{width:20px;height:20px;position: absolute;right:-9px;top:50%;transform:translateY(-50%);}
.top .topleft .place{color:#18F30F;}
.top .topright{float:right;width:48%;position: relative;}
.top .topright img{width:20px;height:20px;position: absolute;right:-9px;top:50%;transform:translateY(-50%);}
.top .fenge{width:1px;height:20px;background:#999;position: absolute;
top:50%;left:50%;transform:translate(-50%,-50%);}
</style>