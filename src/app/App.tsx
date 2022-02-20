import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggle } from "../store/actions/notification.action";
import Notification from "./components/Notification";

function App() {
  const [status, setStatus] = useState(true);
  const [newElement, setNewElement] = useState(false);
  const dispatch = useDispatch()

  setInterval(() => setNewElement(true), 2000);

  const state = useSelector((state:any) => state)
  console.log(state)
  useEffect(() => {
    dispatch(toggle(true));
  },[])

  const handleClose = () => {
    dispatch(toggle(false))
  };
  return (
    <div className="App">
      <Notification
        variant="warning"
        content="This is an error message!"
        open={status}
        onClose={() => setStatus(!status)}
        closeTime={3000}
      />
      {newElement && (
        <Notification
          variant="danger"
          content="This is an error message!"
          open={state.open}
          onClose={handleClose}
          closeTime = {4000}
        />
       )}
    </div>
  );
}

export default App;
