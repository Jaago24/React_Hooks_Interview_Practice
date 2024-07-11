import React, { useState, useCallback } from "react";
import Title from "./Title";
import Count from "./Count";
import Button from "./Button";

export default function UseCallback() {
  const [age, setAge] = useState(20);
  const [salary, setSalary] = useState(50000);

  const handleAge = useCallback(() => {
    setAge((prevAge) => prevAge + 1);
  }, [age]);

  const handleSalary = useCallback(() => {
    setSalary((prevSalary) => prevSalary + 1000);
  }, [salary]);

/**const handleAge = () => {
    setAge((prevAge) => prevAge + 1);
  };

  const handleSalary = () => {
    setSalary((prevSalary) => prevSalary + 1000);
  };*/

  return (
    <div className="container">
      <Title />
      <Count text={"Age"} count={age} />
      <Button handleClick={handleAge}>Increment Age</Button>
      <Count text={"Salary"} count={salary} />
      <Button handleClick={handleSalary}>Increment Salary</Button>
    </div>
  );
}
