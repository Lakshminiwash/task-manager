import React from 'react'
import Data from './Data';

const Pending = ({allTask,setAlltask,setAdd,seteditTask}) => {
  const arr = allTask
  return (
     <div className="w-full h-65 overflow-y-auto">
     
      {arr.map((elem,id) => {
         if(elem.completed !== true){
          return(
            <Data key={id} setAdd={setAdd} seteditTask={seteditTask} allTask={allTask} setAlltask={setAlltask} id={id} elem={elem}/>
          )
        }
      })}
    </div>
  );
};

export default Pending