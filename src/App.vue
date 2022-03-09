<template>
  <div id="app">
    <Header></Header>
    我是根组件
    <router-view></router-view>
    <!-- home,search显示footer，login,register隐藏footer -->
    <!-- <Footer v-show="$route.path=='/home'||$route.path=='/search'"></Footer> -->
    <Footer v-show="$route.meta.show"></Footer>
  </div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";
export default {
  name: "",
  components: {
    Header,
    Footer,
  },
  mounted() {
    //通知vuex发请求，存储到仓库,
    this.$store.dispatch("categoryList");
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
