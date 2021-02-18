<template>
  <div class="header-wrap">
    <div class="home-icon">
      <img src="../assets/home-icon.png" alt="" @click="$router.push('/')">
    </div>
    <div class="cleaning-icon">
      <img src="../assets/cleaning-icon.png" alt="" @click="$router.push('/little_cleaning')">
    </div>
    <div class="stock-icon">
      <img src="../assets/stock-icon.png" alt="" @click="$router.push('/stock_management')">
    </div>
  </div>
</template>

<style scoped>
.header-wrap {
  background: #70B2DE 125px;
  display: flex;
  justify-content: space-evenly;
}
.home-icon img, .cleaning-icon img, .stock-icon img {
  width: 60px;
  cursor: pointer;
}
</style>