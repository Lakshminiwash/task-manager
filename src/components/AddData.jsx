import React, { useState } from "react";

const AddData = ({ setAdd,addTask,defaultTask }) => {
    
    const [inputData, setInputData] = useState(defaultTask?.text || "")

  function addedData(e) {
    e.preventDefault();
    addTask({text:inputData,completed:defaultTask?.completed ?? false})
    setAdd(false);
  }
  return (
    <div>
      <form onSubmit={addedData}>
        <div className="w-[50%] h-[40%] bg-purple-400 flex flex-col justify-start gap-7 border-2 py-6 px-8 border-black rounded-2xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <h1 className="text-4xl underline font-semibold text-center">
            Enter Your Task
          </h1>
          <input
            value={inputData}
            onChange={(e)=>{setInputData(e.target.value)}}
            required
            className="w-full text-2xl pl-3 border-2 py-2 border-black rounded "
            type="text"
          />
          <button className="self-end bg-green-600 cursor-pointer text-xl w-fit px-4 py-1 rounded-2xl border-2 border-black">
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddData;
