<template>
	<div>
		<myHeader txt="书影音">
			<img src="../../assets/images/ic_actionbar_search_icon.png" class="leftImg" slot="left"/>
			<img src="../../assets/images/ic_chat_green.png" class="rightImg" slot="right"/>
		</myHeader>
		<div class="nav">
			<span :class="{active:nowIndex==0}" @click="nowIndex=0">
				<router-link to='/audio/film' >电影</router-link>
			</span>
			<span :class="{active:nowIndex==1}" @click="nowIndex=1">
				<router-link to='/audio/read' >读书</router-link>
			</span>
			<span :class="{active:nowIndex==2}" @click="nowIndex=2">
				<router-link to='/audio/tv' >电视</router-link>
			</span>
			<span :class="{active:nowIndex==3}" @click="nowIndex=3">
				<router-link to='/audio/city' >同城</router-link>
			</span>
			<span :class="{active:nowIndex==4}" @click="nowIndex=4">
				<router-link to='/audio/music'>音乐</router-link>
			</span>
			
		</div>
		<div class="show">
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
import myHeader from '../../components/header.vue'
import Intresting from '../../components/intresting.vue'
export default {
	components:{
		myHeader

	},
	data:function(){
		return {
			nowIndex:0
		}
	}
}
</script>

<style>
.nav{height:30px;border-bottom:1px solid #eee;line-height: 30px;}
.nav span a{display: block;width:20%;float:left;color:#999;font-size:12px;text-decoration:none;}
.nav .active a{border-bottom:2px solid green;}
.show{margin-top:2px;width:100%;}

</style>
