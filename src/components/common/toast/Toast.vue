<template>
  <div v-show="isShow" class="toast">
    {{message}}
  </div>
</template>

<script>
  export default {
    name: "Toast",
    data() {
      return {
        message: 'toast组件信息',
        isShow: false
      }
    },
    methods: {
      show(message, time = 2000){
        this.isShow = true
        this.message = message
        setTimeout(() => {
          this.isShow = false
        },time)
      }
    }
  }
</script>

<style scoped>
  .toast {
    position: fixed;
    transform: translate(-50%, -50%);
    margin-top: 10px;
    top: 40%;
    left: 50%;
    background: rgba(0,0,0,.7);
    padding: 10px 9px;
    color: #fff;
    border-radius: 6px;
    z-index: 1000;
  }
</style>
