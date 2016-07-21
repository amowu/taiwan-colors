<style lang="less">
  & { @import "~semantic-ui-less/definitions/globals/reset"; }
  & { @import "~semantic-ui-less/definitions/globals/site"; }
  & { @import "~semantic-ui-less/definitions/elements/icon"; }
  & { @import "~semantic-ui-less/definitions/views/card"; }
  & { @import "~semantic-ui-less/definitions/modules/dimmer"; }
</style>

<script>
  import store from './core/store'

  export default {
    store
  }
</script>

<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
