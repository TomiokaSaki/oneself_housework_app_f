<template>
  <div class="main">
    <div id="header"></div>
    <div id="icon">
      <img src="../assets/Home-iconB.png" alt="">
      <h1 class="signup">SingUp</h1>
    </div>
    <div id="form">
      <ul>
        <li class="id">
          <label for="ID">ID:</label>
          <input type="email" v-model="email" />
        </li>
        <li class="password">
          <label for="Password">Password:</label>
          <input type="password" v-model="password" />
        </li>
      </ul>
    </div>
    <div class="signup_btn">
      <button @click="auth">SignUp</button>
    </div>
    <div id="login">
      <h1 @click="$router.push('/')">LogIn</h1>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
    data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    auth() {
      axios
        .post("https://intense-castle-74582.herokuapp.com/api/register", {
          email: this.email,
          password: this.password
        })
        .then(response => {
          console.log(response);
          this.$router.replace("/");
        })
        .catch(error => {
          alert(error);
        });
    }
  }
}
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
  color: #5C6063;
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
.signup_btn {
  text-align: center;
  margin: 50px 0;
}
button {
  color: #F9F8E4;
  font-size: 1.5rem;
  background: #70B2DE;
  border: none;
  border-radius: 1rem;
  width: 10rem;
  height: 3rem;
  margin: 0 auto;
  cursor: pointer;
}
#login {
  text-align: center;
  margin-top: 70px;
}

#login h1 {
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