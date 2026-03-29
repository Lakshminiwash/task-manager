import { useEffect, useState } from "react";
import Alldata from "./Alldata";
import Pending from "./Pending";
import Completed from "./Completed";
import { NavLink, Route, Routes, useLocation, useNavigate } from "react-router-dom";
import AddData from "./AddData";

const Box = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname !== "/") {
      navigate("/", { replace: true });
    }
  },[]);

  const [add, setAdd] = useState(false)
  function addData() {
    setAdd(true)
  }

  let data = JSON.parse(localStorage.getItem("alltask"))
  const [task, setTask] = useState(data)
  localStorage.setItem("alltask", JSON.stringify(task))


  const [editTask, seteditTask] = useState(null)
  function addTask(val) {
    if (editTask !== null) {
      let updated = [...task]
      updated[editTask] = val
      setTask(updated)
      seteditTask(null);
    } else {
      let oldTask = [...task]
      oldTask.push(val)
      setTask(oldTask)
    }
  }

    const [dataLength, setDataLength] = useState(null)
    function alldatalength(length) {
      setDataLength(length)
    }

    const completedCount = task.filter(t => t.completed).length;

  return (
    <div className="w-[70vw] px-12 py-9 rounded-2xl h-[80vh] relative bg-white blur-none">
      <div className="flex items-center gap-5">
        <h1 className="font-bold text-4xl">My Tasks</h1>
        <p className="bg-gray-300 px-3 py-1 rounded-2xl">({completedCount?completedCount:"0"}/{dataLength})</p>
      </div>
      <div className="w-full flex items-center mt-12 justify-between">
        <h2 className="text-3xl font-semibold">Click on the <span className="text-blue-600 font-bold">PLUS</span> icon for add your task</h2>
        <button onClick={addData}><i className="bg-blue-600 text-2xl px-4 py-4 cursor-pointer
         rounded-full ri-add-large-line"></i></button>
        {add && <AddData setAdd={setAdd} defaultTask={task[editTask]} addTask={addTask} />}
      </div>
      <div className="mt-12 flex gap-6">
        <NavLink
          className={({ isActive }) =>
            `text-xl cursor-pointer ${isActive ? "bg-gray-400 px-3 py-1 rounded-md" : ""}`
          }
          end
          to="/"
        >
          [ All ]
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `text-xl cursor-pointer ${isActive ? "bg-gray-400 px-3 py-1 rounded-md" : ""}`
          }
          to="/pending"
        >
          [ Pending ]
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `text-xl cursor-pointer ${isActive ? "bg-gray-400 px-3 py-1 rounded-md" : ""}`
          }
          to="/completed"
        >
          [ Completed ]
        </NavLink>
      </div>
      <hr className="mt-5" />
      <div className="flex mt-8">
        <Routes>
          <Route path="/" element={<Alldata allTask={task} Datalength={alldatalength} seteditTask={seteditTask} setAdd={setAdd} setAlltask={setTask} />} />
          <Route path="/pending" element={<Pending allTask={task} seteditTask={seteditTask} setAdd={setAdd} setAlltask={setTask} />} />
          <Route path="/completed" element={<Completed allTask={task} seteditTask={seteditTask} setAdd={setAdd} setAlltask={setTask} />} />
        </Routes>
      </div>
    </div>
  );
};

export default Box;
