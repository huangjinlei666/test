<template>
  <div>
      <TypeNav></TypeNav>
      <ListContainer></ListContainer>
      <Recommend></Recommend>
      <Rank></Rank>
      <Like></Like>
      <Floor v-for="(floor,index) in floorList" :key="floor.id" :list='floor'></Floor>
      <Brand></Brand>
      <!-- <button @click="add">点我加一</button>
      <span>仓库数据{{count}}</span>
      <button>点我减一</button> -->
  </div>
</template>

<script>
import ListContainer from '@/pages/Home/ListContainer'
import Recommend from '@/pages/Home/Recommend'
import Rank from '@/pages/Home/Rank'
import Like from '@/pages/Home/Like'
import Floor from '@/pages/Home/Floor'
import Brand from '@/pages/Home/Brand'
import {mapState} from 'vuex';
// import {mapState} from 'vuex'
export default {
    name:'',
    components:{
      ListContainer,Recommend,Rank,Like,Floor,Brand
    },
    computed:{
        ...mapState({
          floorList:(state)=>state.home.floorList,
        })
    },
    // computed:{
    //   ...mapState(['count'])
    // },
    // methods: {
    //   add(){
    //     this.$store.dispatch('add')
    //   }
    // },
    
    //getFloorList派发action在home中
    mounted() {
      //派发action，获取floor组件的数据
      this.$store.dispatch('getFloorList'); 
    },
}
</script>

<style>

</style>