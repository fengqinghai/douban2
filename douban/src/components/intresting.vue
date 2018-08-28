<template>
	<div class="intresting">
		<div class="left">
			<slot name="img"></slot>
		</div>
		<div class="right">
			<div class="top">
				<img class="imgFirst" src="../../static/films/bofang.png" v-show="bol"/>
				<span class="name">{{ name }}</span>
				<span class="years">{{"("+years+")"}}</span>
				<img class="imgLast" src="../../static/films/shenglue.png"/>
			</div>
			<br>
			<p class="info">{{ info }}</p>
			<div class="lastdiv" >
				{{lastdiv}}
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		props:["years","info","name","lastdiv","bol"]
	}
</script>

<style>
	.intresting{text-align: left;padding:0px 10px 10px 10px;
		border-bottom:1px solid #999;box-sizing:border-box;}
	.intresting:after{content:"";display: block;clear:both;}
	.intresting .left{width:30%;float: left;overflow: hidden;
		padding:10px 10px 10px 0px;box-sizing:border-box;}
	.intresting .right{width:70%;float: left;overflow: hidden;}
	.intresting .left img{width:80px;border-radius:8px;}
	.intresting .right .top{font-size:14px;position:relative;text-align:left;height:20px;line-height: 20px;box-sizing:border-box;}
	.intresting .right .top img{width:14px;height:14px;}
	.intresting .right .top .imgFirst{vertical-align:-2px;}
	.intresting .right .top .imgLast{width:20px;position: absolute;top:3px;right:0;}
	.intresting .right .top .name{color:black;font-weight:1000;}
	.intresting .right .top .years{font-weight:800;color:#999;}
	.intresting .right .info{width:100%;height:40px;font-size:14px;line-height:140%;overflow: hidden;text-overflow:-o-ellipsis-lastline;text-overflow:ellipsis;display: -webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;color:#999;}
	.intresting .right .lastdiv{width: 100%;height:30px;
		background:lightgray;line-height: 30px;font-size:14px;color:#999;padding-left:8px;box-sizing:border-box;border-radius:5px;} 
</style>