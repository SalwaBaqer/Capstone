//mobx
import { makeAutoObservable } from "mobx";

//instance
import instance from "./instance";

class FriendStore {
  friends = [];

  constructor() {
    makeAutoObservable(this);
  } //end constructor

  //send friend request
  SendFriendReq = async (user2Id) => {
    try {
      const response = await instance.post(`/friend/sendRequest/${user2Id}`);
      this.friends.push(response.data);
    } catch (error) {
      console.error("friendStore --> SendFriendReq", error);
    }
  }; //end send friend request

  //withdraw friend request
  WithdrawFriendReq = async (user2Id) => {
    try {
      const response = await instance.put(`/friend/withdrawRequest/${user2Id}`);
      this.friends.push(response.data);
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

export default friendStore;
