import { makeAutoObservable } from "mobx";
import instance from "./instance";
import decode from "jwt-decode";
import AsyncStorage from "@react-native-community/async-storage";

class AuthStore {
  user = null;
  users = [];

  constructor() {
    makeAutoObservable(this);
  }

  fetchUsernames = async () => {
    try {
      const res = await instance.get("/");
      this.users = res.data;
      this.loading = false;
    } catch (error) {
      console.log("authStore -> fetchUsernames ->", error);
    }
  };

  setUser = async (token) => {
    await AsyncStorage.setItem("myToken", token);
    instance.defaults.headers.common.Authorization = `Bearer ${token}`;
    this.user = decode(token);
  };

  getUserbyId = (userId) => this.users.find((user) => user.id === userId);


  signup = async (userData) => {
    try {
      const res = await instance.post("/signup", userData);
      this.setUser(res.data.token);
      console.log("AuthStore -> signup -> res.data.token", res.data.token);
    } catch (error) {
      console.log("AuthStore -> signup -> error", error);
    }
  };

  signin = async (userData) => {
    try {
      const res = await instance.post("/signin", userData);
      this.setUser(res.data.token);
      console.log("AuthStore -> signin -> res.data.token", res.data.token);
    } catch (error) {
      console.log("AuthStore -> signin -> error", error);
    }
  };

  signout = async () => {
    await AsyncStorage.removeItem("myToken");
    delete instance.defaults.headers.common.Authorization;
    this.user = null;
    console.log("AuthStore -> signout");
  };

  checkForToken = async () => {
    const token = await AsyncStorage.getItem("myToken");
    if (token) {
      const decodedToken = decode(token);
      console.log(decodedToken);
      if (Date.now() < decodedToken.exp) {
        this.setUser(token);
      } else {
        this.signout();
      }
    }
  };
}

const authStore = new AuthStore();
authStore.checkForToken();
authStore.fetchUsernames();

export default authStore;
