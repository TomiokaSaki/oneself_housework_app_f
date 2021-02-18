<template>
  <div class="main">
    <div id="header"></div>
    <div id="icon">
      <img src="../assets/Home-iconB.png" alt="">
      <h1 class="login">LogIn</h1>
    </div>
    <div id="form">
      <ul>
        <li class="id">
          <label for="ID">ID:</label>
          <input type="email" />
        </li>
        <li class="password">
          <label for="Password">Password:</label>
          <input type="password" />
        </li>
      </ul>
    </div>
    <div id="signup">
      <h1 @click="$router.push('/signup')">SignUp</h1>
    </div>
  </div>
</template>

<script>

</script>

<style scoped>
.main {
  background: #F9F8E4;
  min-height: 100vh;
}
#header {
  width: 100%;
  height: 100px;
  background: #70B2DE;
}
#icon {
  text-align: center;
}
#icon img{
  width: 70px;
}
h1, label {
  color: #5C6063;
  font-size: 2rem;
}
input {
  width: 100%;
  max-width: 40vw;
  height: 3rem;
  max-height: 3vw;
  border-color: #5C6063;
  border-radius: 0.7vw;
  background: #F9F8E4;
  position: absolute;
  right: 0;
  
}
#form {
  position: relative;
  max-width: 90%;
  margin-top: 5%;
}
label {
  margin: 15%;
  vertical-align: middle;
}
.id {
  margin: 2vw 0;
}

#signup {
  text-align: center;
  margin-top: 70px;
}

#signup h1 {
  text-decoration: underline;
  cursor: pointer;
}

@media screen and (max-width: 768px) {

}

@media screen and (max-width: 480px) {
  #header {
    height: 15vw;
  }
  #icon img{
    width: 15vw;
  }
  h1 {
    font-size: 6vw;
  }
  label {
    font-size: 6vw;
  }
  #form {
    margin-top: 15%;
  }
  .id {
    margin: 5vw 0;
  }
}
</style>