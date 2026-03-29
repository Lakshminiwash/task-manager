import React from "react";
import Box from "./components/Box";

const App = () => {
  return (
    <div>
      <div
        className="w-full relative h-screen bg-cover bg-center blur-2xl"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1761839262867-af53d08b0eb5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNXx8fGVufDB8fHx8fA%3D%3D')",
        }}
      ></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <Box />
      </div>
    </div>
  );
};

export default App;
