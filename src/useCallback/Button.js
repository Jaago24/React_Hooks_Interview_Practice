import React, { Children } from 'react'

function Button({handleClick, children}) {
    {console.log("Rendering button " + children)}
  return (
    <div>
        <button onClick={handleClick}>{children}</button> 
        {/*children will render the HTML Text inside the tag we specify in the UseCallback component*/}
    </div>
  )
}

export default React.memo(Button) //memoize the Button component to avoid unnecessary re-rendering when props remain the same
