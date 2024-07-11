import React from "react";

function Count({ text, count }) {
    {console.log("Rendering text " + text)}
  return (
    <>
      <div className="age">
        {text} - {count}
      </div>
    </>
  );
}

export default React.memo(Count);
