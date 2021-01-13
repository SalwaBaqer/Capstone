import instance from "./instance";
import { makeAutoObservable, runInAction } from "mobx";

class EventStore {
  events = [];
  loading = true;

  constructor() {
    makeAutoObservable(this);
  }

  //fetch events
  fetchEvents = async () => {
    try {
      const response = await instance.get("/events");
      this.events = response.data;
      this.loading = false;
    } catch (error) {
      console.error("eventStore --> fetchEvents", error);
    }
  }; //end fetch events

  //add event
  addEvent = async (newEvent) => {
    try {
      const formData = new FormData();
      for (const key in newEvent) formData.append(key, newEvent[key]);
      const response = await instance.post("/events", formData);
      this.events.push(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("eventStore --> addevent", error);
    }
  }; //end add event

  //delete event
  deleteEvent = async (eventId) => {
    try {
      // console.log(eventId);
      const response = await instance.delete(`/events/${eventId}`);
      this.events = this.events.filter((event) => event.id !== eventId);
      this.fetchEvents();
    } catch (error) {
      console.error("eventStore --> deleteevent", error);
    }
  }; //end delete event

  //edit event
  editEvent = async (updatedEvent) => {
    try {
      const response = await instance.put(
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
eventStore.fetchEvents();
export default eventStore;
