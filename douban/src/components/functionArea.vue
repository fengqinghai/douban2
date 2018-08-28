<template>
	<div class="functionAreaWrap">
		<div>
			<img src="../../static/films/bangdan.png"/>
			<span>{{title1}}</span>
		</div>
		<div>
			<img src="../../static/films/fenlei.png"/>
			<span>{{title2}}</span>
		</div>
		<div>
			<img src="../../static/films/jingcai.png"/>
			<span>{{title3}}</span>
		</div>
		<div>
			<img src="../../static/films/dianying.png"/>
			<span>{{title4}}</span>
		</div>
	</div>
</template>

<script>
	export default{
		props:["title1","title2","title3","title4"]
	}
</script>

<style>
	.functionAreaWrap{width:100%;text-align: center;
		padding:10px 0;}
	.functionAreaWrap:after{content:"";display:block;clear:both;}
	.functionAreaWrap div{width:25%;float:left;}
	.functionAreaWrap div img{display: block;margin:0 auto 10px;width:35px;}
	.functionAreaWrap div span{font-size:12px;color:#999;}
</style>