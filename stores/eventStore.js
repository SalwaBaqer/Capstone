// import instance from './instance'
import { makeAutoObservable } from "mobx";

class EventStore {
  events = [
    {
      name: "drink coffee",
      label: "Fun",
      date: "3-1-2021",
      image: "",
      IsPrivate: "true",
      tag: "null",
    },
    {
      name: "running",
      label: "exercise",
      date: "1-1-2021",
      image: "",
      IsPrivate: "false",
      tag: "null",
    },
  ];

  constructor() {
    makeAutoObservable(this);
  }
} //end class

const eventStore = new EventStore();

export default eventStore;
