import React from "react";

// mobx
import { observer } from "mobx-react";

//stores
import eventStore from "../../stores/eventStore";

//components
import Item from "./Item";

const List = () => {
  const mylist = eventStore.events.map((event) => <Item event={event} />);
  console.log(mylist);

  return <>{mylist}</>;
};

export default observer(List);
