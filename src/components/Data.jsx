import React, {  } from 'react'

const Data = ({elem,allTask,id,setAlltask,setAdd,seteditTask}) => {

  function checkHandler(e) {
    const updated = [...allTask]
    updated[id].completed = e.target.checked;
    setAlltask(updated)
  }
  function editHandler(idx) {
    setAdd(true)
    seteditTask(idx)
  }
  function deleteHandler() {
  if (!Array.isArray(allTask)) return;

  let totalTask = [...allTask];
  totalTask.splice(id, 1);
  setAlltask(totalTask);
}
  return (
        <div className="flex items-center justify-between px-5 w-full border-b-1 border-gray-400 py-3">
          <div className="flex items-center gap-8">
            <input
              className="w-6 cursor-pointer accent-green-600 h-6"
              type="checkbox"
              checked = {elem?.completed || false}
              onChange={checkHandler}
            />
            <h2 className="text-2xl">[ {elem.text} ]</h2>
          </div>
          <div className="flex gap-8 ">
            <button onClick={()=>{
              editHandler(id)
            }}> <i className="ri-pencil-line cursor-pointer text-blue-500 text-2xl"></i></button>
            <button onClick={deleteHandler}><i className="ri-delete-bin-line cursor-pointer text-red-500 text-2xl"></i></button>
          </div>
    </div>
  )
}

export default Data