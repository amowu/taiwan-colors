<style scoped>
  .ui.cards {
    justify-content: center;
  }
</style>

<script>
  import Clipboard from 'clipboard'
  import ColorCard from '../components/ColorCard'

  const clipboard = new Clipboard('.ui.card')

  export default {
    ready () {
      clipboard.on('success', function (e) {
        console.info('Text:', e.text)
        e.clearSelection()
      })
      clipboard.on('error', function (e) {
      })
    },
    beforeDestroy () {
      clipboard.destroy()
    },
    components: {
      ColorCard
    },
    vuex: {
      getters: {
        colors: state => state.colors
      }
    }
  }
</script>

<template>
  <div>
    <div class="ui link cards">
      <color-card
        v-for="color in colors.entities"
        :name="color.name"
        :hex="color.hex"
        :data-clipboard-text="color.hex">
      </color-card>
    </div>
  </div>
</template>
