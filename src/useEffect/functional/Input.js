import React,{useState} from 'react'

export default function Input() {
    
    const [userName, setUserName] = useState("");
   


    const handleChange = (e) => {
        setUserName(e.target.value);
      };
  


  return (
    <div>
          <input type="text" value={userName} onChange={handleChange} />
        </div>
  )
}
