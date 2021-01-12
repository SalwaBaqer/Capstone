//mobx
import { makeAutoObservable } from "mobx";

//instance
import instance from "./instance";

//store
import authStore from "./authStore";

class FriendStore {
  friends = [];

  constructor() {
    makeAutoObservable(this);
  } //end constructor

  //add friend
  SendFriendReq = async (user2Id) => {
    try {
      const response = await instance.post(`/friend/sendRequest/${user2Id}`);
      this.friends.push(response.data);
    } catch (error) {
      console.error("friendStore --> SendFriendReq", error);
    }
  }; //end add friend
} //end class

const friendStore = new FriendStore();

export default friendStore;
