<template>
  <div class="detail-goods-param-div">
    <div class="split-line"></div>
    <div class="detail-goods-param">
      <table class="param-rule-table">
        <tr class="rule-tr" v-for="(table,index) in tableParams" :key="index" >
          <td class="rule-td"
              v-for="(td,indey) in table"
              :key="indey" :class="{lastTd: index==tableParams.length - 1}" >{{td}}</td>
        </tr>
      </table>
      <table>
        <tr  class="rule-tr" v-for="(set,index) in paramInfoSet" :key="index">
          <td  class="rule-td" width="90px">{{set.key}}</td>
          <td  class="rule-td" style="color: #eb4868">{{set.value}}</td>
        </tr>
      </table>
    </div>
  </div>

</template>

<script>
  export default {
    name: "DetailGoodsParam",
    props: {
      tableParams: {
        type: Array,
        default(){
          return []
        }
      },
      paramInfoSet:{
        type: Array,
        default() {
          return []
        }
      }
    }
  }
</script>

<style scoped>
  .detail-goods-param-div {
    padding-bottom: 20px;
    border-bottom: 5px solid #f2f5f8;
  }
  .split-line {
    padding-top: 15px;
    border-bottom: 5px solid #f2f5f8;
  }
  .detail-goods-param {
    width: calc(100% - 40px);
    font-size: 14px;
    padding-top: 20px;
    margin-left: 20px;
  }
 .param-rule-table {
   width: 100%;
 }
  .rule-tr {
    height: 50px;
    color: #666;
  }
  .rule-td {
    border-bottom: 1px solid rgba(100,100,100,.1);
  }

  .lastTd {
    border-bottom: 3px solid rgba(100,100,100,.1);
  }
</style>
