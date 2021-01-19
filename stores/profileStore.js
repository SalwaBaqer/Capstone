//Libraries
import { makeAutoObservable, runInAction } from "mobx";

//Stores
import instance from "./instance";

class ProfileStore {
  userProfile = null;
  profiles = [];
  loading = true;

  constructor() {
    makeAutoObservable(this);
  }

  getProfileById = async (userId) => {
    try {
      const response = await instance.get(`/profiles/${userId}`);
      runInAction(() => {
        this.profiles = response.data;
        this.loading = false;
      });
    } catch (error) {
      console.error("Profilestore -> getProfileById -> error", error);
    }
  };

  updateProfile = async (updatedProfile) => {
    try {
      const formData = new FormData();
      for (const key in updatedProfile)
        formData.append(key, updatedProfile[key]);
      await instance.put("/profiles", formData);
      const profile = this.userProfile;
      for (const key in profile) profile[key] = updatedProfile[key];
    } catch (error) {
      console.error("ProfileStore -> updateProfile -> error", error);
    }
  };
}

const profileStore = new ProfileStore();

export default profileStore;
