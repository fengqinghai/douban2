<template>
	<div>
		<myHeader bol="true">
			<img src="../../assets/images/ic_chat_white.png" class="rightImg" slot="right"/>
			<div slot="search" class="search">
				<input type="text" placeholder="影视 图书 唱片 小组等" />
				<img src="../../assets/images/ic_group_search_small.png" class="searchImg"/>
				<img src="../../assets/images/ic_scan_gray.png" class="scanImg"/>
			</div>

		</myHeader>
		<div class="content">
			<Banner></Banner>

			<Cell txt="热点" hot1="true"></Cell>
			<List v-for="item in arr" :author="item.target.author.name"
			 :url="item.target.cover_url">
				<span slot="title">{{item.title}}</span>
				<p slot="desc">{{ item.target.desc }}</p>
			</List>
		</div>
		
	</div>
</template>

<script>
import myHeader from '../../components/header.vue'
import Banner from '../../components/banner.vue'
import Cell from '../../components/cell.vue'
import axios from 'axios'
import List from '../../components/news_list.vue'
export default{
	data:function(){
		return{
			arr:[]
		}
	},
	components:{
		myHeader,
		Banner,
		Cell,
		List
	},
	methods:{
		fn:function(){
			var self=this;
			axios.get('../../../static/data/homeData.json').then(function(res){
					var data=res.data.recommend_feeds;
					
					self.arr=data;
					console.log(self.arr)
			})
		}
	},
	mounted(){
		this.fn();
	}

}
</script>

<style>
	.content{width: 100%;position:absolute;top:44px;bottom:64px;left:0;overflow: scroll;}
</style>