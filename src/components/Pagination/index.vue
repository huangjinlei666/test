<template>
  <div class="pagination">
    <button :disabled="pageNo == 1" @click="$emit('getpageNo', pageNo - 1)">
      上一页
    </button>
    <button
      v-if="startNumAndEndNum.start > 1"
      @click="$emit('getpageNo', 1)"
      :class="{ active: pageNo == 1 }"
    >
      1
    </button>
    <button v-if="startNumAndEndNum.start > 2">···</button>

    <button
      v-for="(page, index) in startNumAndEndNum.end"
      :key="index"
      v-if="page >= startNumAndEndNum.start"
      @click="$emit('getpageNo', page)"
      :class="{ active: pageNo == page }"
    >
      {{ page }}
    </button>

    <button v-if="startNumAndEndNum.end < totalPage - 1">···</button>
    <button
      v-if="startNumAndEndNum.end < totalPage"
      @click="$emit('getpageNo', totalPage)"
      :class="{ active: pageNo == totalPage }"
    >
      {{ totalPage }}
    </button>
    <button
      :disabled="pageNo == totalPage"
      @click="$emit('getpageNo', pageNo + 1)"
    >
      下一页
    </button>

    <button style="margin-left: 30px">共 {{ total }}条</button>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  //   父组件传递给子组件的数据，当前第几页，每页多少数据，一共多少数据，连续页码数
  props: ["pageNo", "pageSize", "total", "continues"],
  computed: {
    //   计算一共多少页
    totalPage() {
      // 向上取整
      return Math.ceil(this.total / this.pageSize);
    },
    // 计算出连续页码的起始与结束数据
    startNumAndEndNum() {
      const { continues, totalPage, pageNo } = this;
      let start = 0;
      let end = 0;
      //   不正常现象
      if (continues > totalPage) {
        start = 1;
        end = totalPage;
        //   正常现象
      } else {
        start = pageNo - parseInt(continues / 2);
        end = pageNo + parseInt(continues / 2);
        //   start出现小于1纠正
        if (start < 1) {
          start = 1;
          end = continues;
        }
        // end大于totalPage
        if (end > totalPage) {
          (end = totalPage), (start = totalPage - continues + 1);
        }
      }
      return { start, end };
    },
  },
};
</script>

<style lang="less" scoped>
.pagination {
  text-align: center;
  button {
    margin: 0 5px;
    background-color: #f4f4f5;
    color: #606266;
    outline: none;
    border-radius: 2px;
    padding: 0 4px;
    vertical-align: top;
    display: inline-block;
    font-size: 13px;
    min-width: 35.5px;
    height: 28px;
    line-height: 28px;
    cursor: pointer;
    box-sizing: border-box;
    text-align: center;
    border: 0;

    &[disabled] {
      color: #c0c4cc;
      cursor: not-allowed;
    }

    &.active {
      cursor: not-allowed;
      background-color: green;
      color: #fff;
    }
  }
}
</style>