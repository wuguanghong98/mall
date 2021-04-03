<template>
  <div class="tabControl">
    <div v-for="(title,index) in titles" class="tabControl_item">
      <span :class="{active: currentIndex1 == index}" @click="tabControlClick(index)">{{title}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TabControl",
    computed:{
      currentIndex1(){
        return this.currentIndex
      }
    },
    props: {
      currentIndex: {
        type: Number,
        default: 0
      },
      titles: {
        type: Array,
        default(){
          return []
        }
      }
    },
    methods:{
      tabControlClick(index){
        this.currentIndex = index
        this.$emit('tabControlClick',index)
      }
    },

  }
</script>

<style scoped>
  .tabControl{
    display: flex;
    text-align: center;
    height: 40px;
    line-height: 40px;
    background-color: var(--color-background);
  }
  .tabControl_item{
    flex: 1;
  }

  .tabControl_item span{
    padding: 5px;
  }

  .active{
    color: var(--color-high-text);
    border-bottom: 3px solid var(--color-tint);
  }
</style>
