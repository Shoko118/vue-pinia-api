import { defineStore } from "pinia";

export const useApiStore = defineStore({
  id: "apiStore",
  state: () => ({
    users: [],
  }),
  getters: {
    getUsers(state) {
      return state.users;
    },
  },
  actions: {
    async fetchUsers() {
      try {
        const api = "https://jsonplaceholder.typicode.com/users";
        // wait until the request is complete
        let resp = await fetch(api);
        console.log("THE RESPONSE", resp.ok, "THE RESPONE STATUS", resp.status);
        // waits until the request completes..
        let data = await resp.json();
        console.log("THE DATA", data);
        this.users = data;
      } catch (err) {
        console.log(err);
      }
    },
  },
});
