//mobx
import { makeAutoObservable } from "mobx";
import authStore from "./authStore";

//instance
import instance from "./instance";

class FriendStore {
  friends = [];
  loading = true;

  constructor() {
    makeAutoObservable(this);
  } //end constructor

  //fetch friends
  fetchFriends = async () => {
    try {
      const response = await instance.get(`/friend`);
      this.friends = response.data;
      this.loading = false;
    } catch (error) {
      console.error("friendStore --> FetchFriends", error);
    }
  }; //end fetch friends

  //send friend request
  SendFriendReq = async (user2Id) => {
    try {
      const response = await instance.post(`/friend/sendRequest/${user2Id}`);
      this.friends.push(response.data);
      console.log("send req ", this.friends);
    } catch (error) {
      console.error("friendStore --> SendFriendReq", error);
    }
  }; //end send friend request

  //withdraw friend request
  WithdrawFriendReq = async (user2Id) => {
    try {
      const response = await instance.put(`/friend/withdrawRequest/${user2Id}`);
      console.log("user2Id", user2Id, " authStore id", authStore.user.id);
      this.friends = this.friends.filter(
        (friend) =>
          friend.user2Id === user2Id && friend.actionUser === authStore.user.id
      );
      console.log("friends withdraw", this.friends);
    } catch (error) {
      console.error("friendStore --> SendFriendReq", error);
    }
  }; //end withdraw friend request

  //accept incoming requests
  AcceptFriendReq = async () => {
    try {
    } catch (error) {
      console.error("friendStore --> AcceptFriendReq", error);
    }
  }; //end accept incoming requests

  //decline incoming requests
  DeclineFriendReq = async () => {
    try {
    } catch (error) {
      console.error("friendStore --> DeclineFriendReq", error);
    }
  }; //end decline incoming requests

  //delete firend
  DeleteFriend = async () => {
    try {
    } catch (error) {
      console.error("friendStore --> DeleteFriend", error);
    }
  }; //end delete firend

  //block user
  BlockUser = async () => {
    try {
    } catch (error) {
      console.error("friendStore --> BlockUser", error);
    }
  }; //end block user
} //end class

const friendStore = new FriendStore();
friendStore.fetchFriends();
export default friendStore;
