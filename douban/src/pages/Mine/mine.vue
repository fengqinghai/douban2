<template>
	<div>
		<myHeader txt="我的">
			<img src="../../assets/images/ic_settings.png" class="rightImg" slot="right"/>
		</myHeader>
		<Cell txt="提醒">
			<img src="../../assets/images/ic_mine_notification.png" slot="left" class="cell-img"/>
			<img src="../../assets/images/ic_arrow_gray_small.png" slot="right" class="cell-right-img"/>
		</Cell>
	</div>
</template>

<script>
import myHeader from '../../components/header.vue'
import Cell from '../../components/cell.vue'
export default{
	components:{
		myHeader,
		Cell
	}
}
</script>

<style>
	
</style>