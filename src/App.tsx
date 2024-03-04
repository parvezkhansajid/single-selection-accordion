import { useState } from "react";
import data from "./data";

const App = () => {
  const [selected, setSelected] = useState<null | Number>(null);
  const handleSelection = (currntId: number) => {
    setSelected(selected === currntId ? null : currntId);
  };

  return (
    <div className="flex flex-col gap-20 justify-center items-center w-full min-h-screen">
      <h1 className="text-3xl font-bold ">Single Selection Accrodion</h1>

      <div className="accordion container mx-auto flex flex-col gap-4">
        {data && data.length > 0 ? (
          data.map((item, key) => (
            <div className="item px-8 py-4 rounded-lg  bg-teal-200">
              <div
                onClick={() => handleSelection(item.id)}
                className="title p-2 cursor-pointer font-semibold text-lg flex justify-between items-center"
              >
                <h3>{item.question}</h3>
                {selected === item.id ? <span>-</span> : <span>+</span>}
              </div>

              {selected === item.id ? (
                <p className="content ps-4">{item.answer}</p>
              ) : null}
            </div>
          ))
        ) : (
          <p>No Data Found!</p>
        )}
      </div>
    </div>
  );
};

export default App;
