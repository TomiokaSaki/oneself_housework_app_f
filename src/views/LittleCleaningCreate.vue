<template>
  <div class="main">
    <Header />
    <div class="container">
      <form>
        <div class="spot">
          <label for="spot">spot</label>
          <input type="text" id="spot">
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import Header from "./Header";
export default {
  props: ["id"],
  
  components: {
    Header
  },
}
</script>