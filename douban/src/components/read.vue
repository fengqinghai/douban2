<template>
	<div class="filmWrap">
		<FunctionArea title1="豆瓣榜单" title2="分类" title3="豆瓣猜" title4="豆瓣书单"></FunctionArea>
		<Navfilm title="新书速递" num="43"></Navfilm>
		<div class="huodong">
			<div class="huadongWrap">
				<Bookdemo bookname="铁道之旅" count="2199" author="[德]沃尔夫冈.西佛尔布" info="《铁道之旅》是一部由[德]沃尔夫冈·希弗尔布施所著书籍，上海人民出版社出版发行。">
					<img src="../../static/films/tiedao.jpg" slot="img"/>
				</Bookdemo>
				<Bookdemo bookname="扫地出门" count="1632" author=" [美]马修·德斯蒙德" info="《扫地出门》聚焦愈演愈烈的住房危机。来自美国底层的真实故事，也是我们亲历的现实——社会学人沉寂数年卧底贫困社区，用掷地有声的访谈资料和田野笔记">
					<img src="../../static/films/guyuan.jpg" slot="img"/>
				</Bookdemo>
				<Bookdemo bookname="故园风雨后" count="1173" author="朱里安·杰拉德" info="《故园风雨后》是由朱里安·杰拉德执导，马修·古迪、本·威士肖、安娜·玛德蕾等主演的电影，于2008年7月25日在美国上映。">
					<img src="../../static/films/saodi.jpg" slot="img"/>
				</Bookdemo>
			</div>
		</div>

		<Navfilm title="话题推荐" num="306"></Navfilm>

		<Huati title="最有气势的一句诗词" count="12.4"></Huati>
		<Huati title="你是如何对学术感到幻灭的？" count="53.5"></Huati>
		<Huati title="你最喜欢的一句宋词是?" count="6.4"></Huati>
		<Huati title="你的哲学阅读脉络" count="17.8"></Huati>
		<Huati title="2018上海书展" count="8.0"></Huati>

		<Navfilm title="你可能感兴趣" num="506"></Navfilm>

		<Intresting name="查令十字街84号" years="2015" lastdiv="来自豆瓣读书TOP 250榜单" info="作者：海莲·汉芙，译者：陈建铭；被誉为“爱书人圣经”的书信集">
			<img src="../../static/book/chaling.jpg" slot="img"/>
		</Intresting>
		<Intresting name="巨流河" years="2010" lastdiv="来自豆瓣读书TOP 250榜单" info="巨流河,在清代被称为巨流河;哑口海位于台湾南端,是鹅銮鼻灯塔下的一泓湾流。这本书写的是一个并未远去的时代,关于两代人从巨流河到哑口海的故事。">
			<img src="../../static/book/juliuhe.jpg" slot="img"/>
		</Intresting>
		<Intresting name="羊脂球" years="1871" lastdiv="来自豆瓣读书TOP 250榜单" info="羊脂球》是法国作家莫泊桑创作的中篇小说。《羊脂球》是他的成名作，也是他的代表作之一。">
			<img src="../../static/book/yangzhiqiu.jpg" slot="img"/>
		</Intresting>
		<Intresting name="伊豆的舞女" years="1926" lastdiv="来自豆瓣读书TOP 250榜单" info="《伊豆的舞女》是川端康成早期的代表作和成名作，也是一篇杰出的中篇小说。1926年1月至2月间由“文艺时代”发表。">
			<img src="../../static/book/yidou.jpg" slot="img"/>
		</Intresting>
		<Intresting name="目送" years="1987" lastdiv="来自豆瓣读书TOP 250榜单" info="《目送》是作家龙应台继《孩子你慢慢来》《亲爱的安德烈》后，龙应台再推出思考“生死大问”的作品，是一本感悟性的人生之书。">
			<img src="../../static/book/musong.jpg" slot="img"/>
		</Intresting>
	</div>
</template>

<script>
import FunctionArea from '../components/functionArea.vue'
import Navfilm from './nav_film.vue'
import Bookdemo from './bookdemo.vue'
import Huati from './huati.vue'
import Intresting from '../components/intresting.vue'

	export default {
		components:{
			FunctionArea,
			Navfilm,
			Bookdemo,
			Huati,
			Intresting
		}
	}
</script>

<style>
.filmWrap{position: absolute;top:78px;bottom:64px;left:0;width:100%;overflow: scroll;}
.huodong{width:100%;overflow: scroll;}
.huodong .huadongWrap{width:300%;}
.huodong .huadongWrap .bookdemo{float: left;}

</style>