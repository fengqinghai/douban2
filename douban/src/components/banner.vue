<template>
<div class="swiper-box" >
	<swiper class="swiper" :options="swiperOption" ref="mySwiper">
			<!-- 可以写多个sweiper-slide 里面直接加上img图片 -->
			<!-- 用v-for循环时  -->
			<swiper-slide v-for="item in listImg">
				<img :src="item.url"/>
			</swiper-slide>
			
		
		<div class="swiper-pagination" slot="pagination"></div>
		<!-- <div class="swiper-button-prev" slot="button-prev"></div>
    	<div class="swiper-button-next" slot="button-next"></div> -->
    	
	</swiper>
</div>
</template>

<script>
	import {swiper,swiperSlide} from 'vue-awesome-swiper'
	import '../assets/swiper/swiper.min.css'
	//可以将图片引入static文件夹里面  直接把路径放在数组内即可
	//如果不放在static文件夹内，vue会解析不到图片路径
	import img1 from '../assets/images/banner/01.jpg'
	import img2 from '../assets/images/banner/02.jpg'
	import img3 from '../assets/images/banner/03.jpg'
	export default {
		data(){
			return {
				listImg:[
					//{url:'../../static/banner/01.jpg'},
					//{url:'../../static/banner/02.jpg'},
					//{url:'../../static/banner/03.jpg'},
					{url:img1},
					{url:img2},
					{url:img3},
				],
				swiperOption:{
					notNextTick:true,
					pagination:{
						el:'.swiper-pagination',
						clickable:true
					},
					autoplay:{
						disableOnInteraction:false,
						delay:3000
					},
					loop:true,//循环播放 false是两端没有图片
					paginationClickable:true,//和loop 结合形成无缝连滚
					//prevButton:'.swiper-button-prev',
					//nextButton:'.swiper-button-next',
				}
			}
		},
		components:{
			swiper,
			swiperSlide
		},
	
	}
</script>

<style>
.swiper-container .swiper-slide{width:100%;}
.swiper-container .swiper-slide img{width:100%;height:100px;}
</style>