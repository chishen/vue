<template>
  <div class="input-title">
    <span class="default"></span>
    <span><slot></slot></span>
  </div>
</template>

<script>
    export default {
        name: "InputTitle",
        props: {
        },
        computed: {
        },
        methods: {
        }
    }
</script>

<style scoped lang="less">
  @import '~less-vars';
  .default{
    position: relative;
    top: -2px;
    margin-right: 4px;
    width: 6px;
    height: 6px;
    display: inline-block;
    border-radius: 50%;
    background: @color;
  }
</style>
