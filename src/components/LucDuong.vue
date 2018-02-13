<template>
<p v-if="name">
  Hello {{name}}
</p>
<p v-else>
  Welcome to Luc Duong component
</p>
</template>

<script>
export default {
  data() {
    return {
      name: ""
    };
  },

  created() {
    this.name = "Luc Duong";
  }
};
</script>

<style scoped>
p {
  color: #017eba;
  font-weight: bold;
}
</style>
