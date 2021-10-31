<template>
  <div v-if="item.frontmatter.pic">
    <img :src="item.frontmatter.pic" alt="abc">
  </div>
</template>

<script>
export default {
  name: 'NotePic',
  props: ['item']
}
</script>

<style lang="stylus" scoped>
img
  width: 100%;
  background-size: contain;
  background-repeat: no-repeat;
  border-radius: $borderRadius;
  box-shadow: var(--box-shadow);
</style> 