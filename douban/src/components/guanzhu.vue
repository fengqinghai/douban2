<template>
	<div class="guanzhu">
		<div class="left">
			<div class="img">
				<slot name="img"></slot>
			</div>
			<div class="imgright">
				<p>{{ juming }}</p>
				<span>{{ num }}人关注</span>
			</div>
		</div>
		<div class="right">
			+关注
		</div>
	</div>
</template>

<script>
	export default{
		props:["juming","num"]
	}
</script>

<style>
.guanzhu{width:100%;padding:10px;box-sizing:border-box;height:80px;position: relative;}

.guanzhu .left{float: left;}
.guanzhu .left:after{content:"";display: block;clear:both;}
.guanzhu .left .img{width:60px;height:60px;float: left;}
.guanzhu .left .imgright{float: left;margin-left:10px;text-align: left;padding-top:10px;box-sizing:border-box;}
.guanzhu .left .imgright p{font-weight:800;}
.guanzhu .left .imgright span{font-size:12px;color:#999;}
.guanzhu .left img{width:60px;height:60px;border-radius:10px;}
.guanzhu .right{position: absolute;right:10px;top:50%;transform:translateY(-50%);padding:5px 10px; border:2px solid green;border-radius:5px;font-size:14px;color:green;font-weight:800;}

</style>