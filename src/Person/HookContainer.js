import React, { useState } from "react";
import { Button } from "reactstrap";
import Login from "../login/Login";
import IntervalHookContainer from "./IntervalHookContainer";

export const HookContainer = () => {
  const [display, setDisplay] = useState(false);

  return (
    <div className="text-center">
      <Button
        className="text-center bg-success"
        onClick={() => {
          setDisplay(!display);
        }}
      >
        login
      </Button>
      {display && <IntervalHookContainer></IntervalHookContainer>}
    </div>
  );
};
