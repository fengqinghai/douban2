<template>
	<div class="cellWrap" :class="{hot:hot}">
		<slot name="left"></slot>
		<span>{{ txt }}</span>
		<slot name="right"></slot>
	</div>
</template>

<script>
	export default{
		props:{
			txt:{
				type:String,
				default:""
			},
			hot1:{
				default:false
			}
		},
		computed:{
			hot:function(){
				if(this.hot1=="true"){
					return true;
				}else if(this.hot1=="false"){
					return false;
				}
			}
		}
	}
</script>

<style>
.cellWrap{width:100%;height:40px;position: relative;border-bottom:1px solid lightgray;line-height:40px;padding-left:15px;text-align:left;box-sizing:border-box;}
.cellWrap img{width:25px;height:25px;position:relative;top:6px;right:8px;}
.cellWrap .cell-right-img{position: absolute;top:6px;right:8px;}
.hot{border-bottom:none;}
.hot:after{content:"";width:5px;height:20px;background:orange;position:absolute;left:0;top:8px;}
</style>
