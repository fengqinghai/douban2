<template>
	<div class="itemWrap" @click="fn">
		<span v-show="bol"><slot name="activeImg"></slot></span>
		<span v-show="!bol"><slot name="normalImg"></slot></span>
		<span :class="{active:bol}">{{ txt }}</span>
	</div>
</template>

<script>
export default{
	props:["txt","mark","sel"],
	computed:{
		bol:function(){
			if(this.mark==this.sel){
				return true;
			}
			return false;
		}
	},
	methods:{
		fn:function(){
			this.$emit("change",this.mark);
			this.$router.push('/'+this.mark);
		}
	}
}
</script>

<style>
.itemWrap{width:20%;float: left;}
.itemWrap img{width:40px;height:40px;display: block;margin:0 auto;}
.itemWrap span{font-size:12px;color:#666;}
.itemWrap .active{color:#42bd56;}
</style>