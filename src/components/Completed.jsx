import React, { } from 'react'
import Data from './Data';

const Completed = ({allTask,setAlltask,setAdd,seteditTask}) => {
   const arr = allTask.filter(task => task.completed === true);
   
 
  
      return (
    <div className="w-full h-65 overflow-y-auto">

      {arr.map((elem,id)=>(
        <Data
          key={id}
          setAdd={setAdd}
          seteditTask={seteditTask}
          allTask={allTask}
          setAlltask={setAlltask}
          id={id}
          elem={elem}
        />
      ))}

    </div>
  );
};

export default Completed