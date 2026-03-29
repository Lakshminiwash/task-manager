import React, {} from "react";
import Data from "./Data";

const Alldata = ({allTask,setAlltask,setAdd,seteditTask,Datalength}) => {
  const arr = allTask
  Datalength(arr.length)
  return (
    <div className="w-full h-65 overflow-y-auto">
      {arr.map((elem,id) => (
        <Data key={id} setAdd={setAdd} seteditTask={seteditTask} allTask={allTask} setAlltask={setAlltask} id={id} elem={elem}/>
      ))}
    </div>
  );
};

export default Alldata;
