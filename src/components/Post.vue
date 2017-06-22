<template>
  <article class="post">
    <div class="title">{{ title }}</div>
    <div class="author">By {{ author }}</div>
  </article>
</template>

<script>
export default {
  props: ['title', 'author'],
}
</script>

<style lang="stylus" scoped>
.post {
  margin: 24px;
  padding: 12px 24px 18px;
  box-shadow: 0 3px 10px rgba(black, .2);
  border-radius: 3px;
}

.title {
  font-size: 1.5em;
}
</style>
