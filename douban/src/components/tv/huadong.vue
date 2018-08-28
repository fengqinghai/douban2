<template>
	<div class="huadong">
		<div class="huadongWrap">
			<Tvdemo tvname="延禧攻略">
				<img src="../../../static/tv/yanxi.jpg" slot="img"/>
			</Tvdemo>
			<Tvdemo tvname="香蜜沉沉烬如霜">
				<img src="../../../static/tv/xiangmi.jpg" slot="img"/>
			</Tvdemo>
			<Tvdemo tvname="随性所欲">
				<img src="../../../static/tv/suixing.jpg" slot="img"/>
			</Tvdemo>
			<Tvdemo tvname="天盛长歌">
				<img src="../../../static/tv/tiansheng.jpg" slot="img"/>
			</Tvdemo>
			<Tvdemo tvname="扶摇">
				<img src="../../../static/tv/fuyao.jpg" slot="img"/>
			</Tvdemo>
			<Tvdemo tvname="工作细胞">
				<img src="../../../static/tv/gongzuo.jpg" slot="img"/>
			</Tvdemo>
			<Tvdemo tvname="梅尔罗斯">
				<img src="../../../static/tv/meier.jpg" slot="img"/>
			</Tvdemo>
			<Tvdemo tvname="名妹">
				<img src="../../../static/tv/mingmei.jpg" slot="img"/>
			</Tvdemo>
			<Tvdemo tvname="疯人院">
				<img src="../../../static/tv/fengren.jpg" slot="img"/>
			</Tvdemo>
			<Tvdemo tvname="天赋异禀">
				<img src="../../../static/tv/tianfu.jpg" slot="img"/>
			</Tvdemo>
		</div>
		

	</div>
</template>

<script>
import Tvdemo from './tv_demo.vue'
	export default{
		components:{
			Tvdemo
		}
	}
</script>

<style>
	.huadong{width:100%;overflow:scroll;}
	.huadong .huadongWrap{width:350%;}
	.huadong:after{content:"";display:block;clear:both;}
	.huadong .tvdemo{float: left;}
</style>