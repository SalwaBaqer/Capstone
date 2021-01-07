//Libraries
import { makeAutoObservable } from "mobx";

//Stores
import instance from "./instance";

class ProfileStore {
  profiles = [];
  profile = null;
  loading = true;

  constructor() {
    makeAutoObservable(this);
  }

  getProfileById = async (userId) => {
    try {
      const response = await instance.get(`/profiles/${userId}`);
      this.profile = response.data;
      this.loading = false;
    } catch (error) {
      console.error("Profilestore -> fetchProfiles -> error", error);
    }
  };
}

const profileStore = new ProfileStore();

export default profileStore;
