<template>
  <div class="main">
    <Header />
    <div id="newCleaningListW">
      <input type="text" name="spot" id="spot" v-model="newSpot" />
      <button @click="insertCleaningListW">新規作成</button>
    </div>
    <table>
      <tr v-for="item in cleaningWLists" :key="item.id">
        <td><input type="text" v-model="item.spot" /></td>
        <td>
          <button @click="updateCleaningListW(item.id, item.spot)">
            Edit
          </button>
        </td>
        <td>
          <button @click="deleteCleaningListW(item.id)">Delete</button>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import Header from "../components/Header";

import axios from "axios";

export default {
  data() {
    return {
      newSpot: "",
      cleaningWLists: [],
    };
  },
  methods: {
    async getCleaningListW() {
      const resData = await axios.get("http://127.0.0.1:8000/api/littlecleaningw/");
      this.cleaningWLists = resData.data.data;
    },
    async insertCleaningListW() {
      const sendData = {
        spot: this.newSpot,
      };
      await axios.post("http://127.0.0.1:8000/api/littlecleaningw/", sendData);
      await this.getCleaningListW();
    },
    async updateCleaningw(id, spot) {
      const sendData = {
        spot: spot
      };
      await axios.put("http://127.0.0.1:8000/api/littlecleaningw/" + id, sendData);
      await this.getCleaningListW();
    },
    async deleteCleaningw(id) {
      await axios.delete("http://127.0.0.1:8000/api/littlecleaningw/" + id);
      await this.getCleaningListW();
    },
  },
  created() {
    this.getCleaningListW();
  },
  components: {
    Header
  },
};
</script>

<style scoped>
.main {
  background: #FFFFFF;
  min-height: 100vh;
}
input {
  color: black;
}
.table {
  color: black;
}
</style>