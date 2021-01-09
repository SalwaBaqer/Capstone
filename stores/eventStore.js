// import instance from './instance'
import { makeAutoObservable } from "mobx";

class EventStore {
  events = [
    {
      id: 1,
      name: "drink coffee",
      label: "Fun",
      date: "3-1-2021",
      image: "",
      IsPrivate: "true",
      tag: "null",
    },
    {
      id: 2,
      name: "running",
      label: "exercise",
      date: "1-1-2021",
      image: "",
      IsPrivate: "false",
      tag: "null",
    },
  ];
  loading = true;

  constructor() {
    makeAutoObservable(this);
  }

  //fetch events no integration
  fetchEvents = async () => {
    try {
      const response = await instance.get("/events");
      this.events = response.data;
      this.loading = false;
    } catch (error) {
      console.error("eventStore --> fetchEvents", error);
    }
  }; //end fetch events

  //add event no integration
  addEvent = async (newEvent) => {
    try {
      const response = await instance.post("/events", newEvent);
      this.events.push(response.data);
    } catch (error) {
      console.error("eventStore --> addevent", error);
    }
  }; //end add event

  //delete event no integration
  deleteEvent = async (eventId) => {
    try {
      // const response = await instance.delete(`/events/${eventId}`); //check with moh the route in the be recieve an event why??
      this.events = this.events.filter((event) => event.id != eventId);
    } catch (error) {
      console.error("eventStore --> deleteevent", error);
    }
  }; //end delete event

  //edit event no integration
  editEvent = async (updatedEvent) => {
    try {
      const response = await instance.delete(
        `/events/${updatedEvent.id}`,
        updatedEvent
      );
      const event = this.events.find((event) => event.id === updatedEvent.id);
      for (const key in event) event[key] = updatedEvent[key];
    } catch (error) {
      console.error("eventStore --> editevent", error);
    }
  }; //end edit event
} //end class

const eventStore = new EventStore();
// eventStore.fetchEvents(); uncomment after merging the BE
export default eventStore;
