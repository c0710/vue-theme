<template>
    <div class="top-bar">
        <div class="btn"
             v-for="item in themeList"
             :key="item"
             @click="changeTheme(item)">
          {{item}}
        </div>
    </div>
</template>

<script>
export default {
    name: 'TopBar',
    data () {
        return {
            // 可选主题
            themeList: ['theme1', 'theme2', 'theme3']
        }
    },
    methods: {
        changeTheme (data) {
            this.$changeTheme(data)
        }
    }
}
</script>

<style lang="less" scoped>
  .top-bar {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    background-color: #e4e4e4;
    .btn {
      height: 30px;
      padding: 0 10px;
      line-height: 30px;
      box-sizing: border-box;
      text-align: center;
      border: 1px solid #ccc;
      background-color: #42b983;
      margin: 0 20px;
      cursor: pointer;
      color: #fff;
    }
  }
</style>
