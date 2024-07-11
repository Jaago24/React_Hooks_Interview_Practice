import React, {useContext} from 'react'
// import ContextD from "./ContextD";
import { UserContext, AgeContext } from './ContextApp'

export default function ContextC() {

    const user = useContext(UserContext);
    const age = useContext(AgeContext);

  return (
    <div>
        {/* <ContextD/> */}
        <h2>{user} is {age} years old.</h2>
    </div>
  )
}
