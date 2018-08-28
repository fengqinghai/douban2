<template>
	<div class="tvWrap">
		<Functionarea title1="豆瓣榜单" title2="分类" title3="豆瓣猜" title4="播出时间表"></Functionarea>
		<Navfilm title="热播新剧" num="209"></Navfilm>
		<div class="nav2">
			<span  @click="nowmark=1">
				<router-link to="/audio/tv/zhonghe" :class="{aactive:nowmark==1}">综合</router-link>
			</span>
			<span @click="nowmark=2">
				<router-link  :class="{aactive:nowmark==2}" to="/audio/tv/guochan">国产剧</router-link>
			</span>
			<span @click="nowmark=3">
				<router-link  :class="{aactive:nowmark==3}" to="/audio/tv/yingmei">英美剧</router-link>
			</span>
			<span @click="nowmark=4">
				<router-link  :class="{aactive:nowmark==4}" to="/audio/tv/riju">日剧</router-link>
			</span>
			<span @click="nowmark=5">
				<router-link  :class="{aactive:nowmark==5}" to="/audio/tv/hanju">韩剧</router-link>
			</span>
			
			
		</div>
		<div class="view">
			<router-view></router-view>
		</div>
		<Navfilm title="频道" num="7"></Navfilm>
		<Guanzhu juming="泰剧" num="15833">
			<img src="../../static/tv/taiju.jpg" slot="img"/>
		</Guanzhu>
		<Guanzhu juming="日剧" num="71681">
			<img src="../../static/tv/riju.jpg" slot="img"/>
		</Guanzhu>
		<Guanzhu juming="韩剧" num="45415">
			<img src="../../static/tv/hanju.jpg" slot="img"/>
		</Guanzhu>
	</div>
</template>

<script>
	import Navfilm from './nav_film.vue'
	import Functionarea from './functionArea.vue'
	import Guanzhu from './guanzhu.vue'


	export default {

		components:{
			Functionarea,
			Navfilm,
			Guanzhu
		},
		data:function(){
			return {
				nowmark:1
			}
		}


	}

</script>


<style>
	.tvWrap{width:100%;position:absolute;top:78px;bottom:64px;left:0;
		overflow: scroll;}
	.nav2{overflow: hidden;height:40px;line-height:40px;}
	.nav2 a{display:inline-block;float:left;color:#999;font-size:12px;text-decoration:none;padding:0 10px;box-sizing:border-box;}
	.nav2 .aactive{font-weight:1000;color:#000;}
</style>