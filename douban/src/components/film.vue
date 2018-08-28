<template>
	<div class="filmWrap">
		<FunctionArea title1="豆瓣榜单" title2="分类" title3="豆瓣猜" title4="8月观影指南"></FunctionArea>
		<Navfilm title="影院热映" num="34"></Navfilm>
		<div class="hot1">
			<div class="hotWrap">
				<Filmdemo filmName="一出好戏">
					<img src="../../static/films/yichuhaoxi.jpg" slot="img"/>
				</Filmdemo>
				<Filmdemo filmName="复仇者联盟3">
					<img src="../../static/films/fuchouzhe.jpg" slot="img"/>
				</Filmdemo>
				<Filmdemo filmName="巨齿鲨">
					<img src="../../static/films/juchisha.jpg" slot="img"/>
				</Filmdemo>
				<Filmdemo filmName="快把我哥带走">
					<img src="../../static/films/kuaibagedaizhou.jpg" slot="img"/>
				</Filmdemo>
				<Filmdemo filmName="欧洲攻略">
					<img src="../../static/films/ouzhougonglue.jpg" slot="img"/>
				</Filmdemo>
				<Filmdemo filmName="我是传奇">
					<img src="../../static/films/woshichuanqi.jpg" slot="img"/>
				</Filmdemo>
				<Filmdemo filmName="小偷家族">
					<img src="../../static/films/xiaotoujiazhu.jpg" slot="img"/>
				</Filmdemo>
				<Filmdemo filmName="西虹市首富">
					<img src="../../static/films/xihongshi.jpg" slot="img"/>
				</Filmdemo>
				<Filmdemo filmName="幸福路上">
					<img src="../../static/films/xingfulushang.jpg" slot="img"/>
				</Filmdemo>
				<Filmdemo filmName="致命警告">
					<img src="../../static/films/zhimingjinggao.jpg" slot="img"/>
				</Filmdemo>
				
			</div>
			
		</div>
		<Navfilm title="豆瓣热门" num="311"></Navfilm>
		<div class="hot1">
			<div class="hotWrap">
				<Filmdemo filmName="我是传奇" >
					<img src="../../static/films/woshichuanqi.jpg" slot="img"/>
				</Filmdemo>
				<Filmdemo filmName="小偷家族">
					<img src="../../static/films/xiaotoujiazhu.jpg" slot="img"/>
				</Filmdemo>
				<Filmdemo filmName="西虹市首富">
					<img src="../../static/films/xihongshi.jpg" slot="img"/>
				</Filmdemo>
				
				<Filmdemo filmName="致命警告">
					<img src="../../static/films/zhimingjinggao.jpg" slot="img"/>
				</Filmdemo>
				<Filmdemo filmName="幸福路上">
					<img src="../../static/films/xingfulushang.jpg" slot="img"/>
				</Filmdemo>
				
				<Filmdemo filmName="复仇者联盟3">
					<img src="../../static/films/fuchouzhe.jpg" slot="img"/>
				</Filmdemo>
				<Filmdemo filmName="巨齿鲨">
					<img src="../../static/films/juchisha.jpg" slot="img"/>
				</Filmdemo>
				<Filmdemo filmName="快把我哥带走">
					<img src="../../static/films/kuaibagedaizhou.jpg" slot="img"/>
				</Filmdemo>
				<Filmdemo filmName="欧洲攻略">
					<img src="../../static/films/ouzhougonglue.jpg" slot="img"/>
				</Filmdemo>
				<Filmdemo filmName="一出好戏" >
					<img src="../../static/films/yichuhaoxi.jpg" slot="img"/>
				</Filmdemo>
				
				
			</div>
			
		</div>
		<Navfilm title="你可能感兴趣" num="974"></Navfilm>
		<Intresting years="2018" info="2018/中国大陆/喜剧/爱情/悬疑/朱佳梦 陈静 王晋 丁小雄/曹云金 岳云鹏 孙悦" name="故事贩卖机" lastdiv="你可能感兴趣" bol="true">
			<img src="../../static/films/gushifanmaiji.jpg" slot="img"/>
		</Intresting>
		<Intresting years="2017" info="2017/香港/中国大陆/动作/犯罪/悬疑/张颂文，谭卓，顾宝明，董晴，荣梓杉" name="追龙" lastdiv="你可能感兴趣" bol="true">
			<img src="../../static/films/zhuilong.jpg" slot="img"/>
		</Intresting>
		<Intresting years="2017" info="2017/中国大陆/喜剧/爱情/悬疑/朱佳梦 陈静 王晋 丁小雄/曹云金 岳云鹏 孙悦" name="西小河的夏天" lastdiv="你可能感兴趣" bol="true">
			<img src="../../static/films/xixiaohe.jpg" slot="img"/>
		</Intresting>
	</div>
</template>

<script>
import Navfilm from './nav_film.vue'
import Filmdemo from './film_demo.vue'
import Intresting from '../components/intresting.vue'
import FunctionArea from '../components/functionArea.vue'
export default{
components:{
	Navfilm,
	Filmdemo,
	Intresting,
	FunctionArea 

}

}
</script>

<style>
	.filmWrap{text-align:center;position:absolute;top:78px;bottom:64px;left:0;width:100%;overflow: scroll;}
	.filmWrap h1{}
	.hot1{width:100%;overflow:scroll;}
	
	.hot1 .hotWrap{width:500%;}
	
</style>