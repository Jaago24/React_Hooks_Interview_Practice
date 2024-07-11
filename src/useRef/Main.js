/*useRef() is to access the DOM Nodes for the html elements*/

import React, { useEffect, useRef } from "react";

export default function Main() {
  const inputRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
    textRef.current.style.color = "Red";
  }, []);

  return (
    <div>
      <h1 ref={textRef}>Hi, this is Jagadish Gollapalli</h1>
      <input type="text" ref={inputRef} />
    </div>
  );
}
