<style scoped>
  .ui.card > .image {
    height: 250px;
  }
  .ui.card:hover > .image > .dimmed.dimmable:not(body) {
    height: 100%;
  }
</style>

<script>
  export default {
    props: {
      name: String,
      hex: String
    }
  }
</script>

<template>
  <div class="ui card">
    <div class="image"
      :style="{ 'background-color': hex }">
      <div class="ui dimmable dimmed">
        <div class="ui simple dimmer">
          <div class="content">
            <div class="center">
              <h2 class="ui inverted icon header">
                <i class="copy icon"></i>
                複製 {{ hex }}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="content">
      <div class="header">{{ name }}</div>
      <div class="meta">{{ hex }}</div>
    </div>
  </div>
</template>
