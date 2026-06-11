import React, { useState } from 'react';

const App = () => {
  const [title, setTitle] = useState('');
  const [detail, setDetail] = useState('');
  const [task, setTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();

    const copyTask = [...task];
    copyTask.push({ title, detail });
    setTask(copyTask);

    setTitle('');
    setDetail('');
  };
  const deleteNote=(idx)=>{
      const copyTask=[...task]
      copyTask.splice(idx,1)
      setTask(copyTask)
  }

  return (
    <div className="flex flex-col lg:flex-row h-screen overflow-hidden bg-[#111827]">

      {/* Add Notes Section */}
      <div className="w-full lg:w-1/2 p-10 bg-[#1F2937]">
        <h1 className="text-3xl font-bold mb-6 text-gray-100">
          Add Notes
        </h1>

        <form
          onSubmit={submitHandler}
          className="flex flex-col gap-4"
        >
          <input
            type="text"
            placeholder="Enter Notes Heading"
            className="px-5 py-3 font-medium w-full border border-gray-600 bg-[#374151] text-white rounded-xl outline-none placeholder:text-gray-400"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />

          <textarea
            placeholder="Write Details"
            className="px-5 py-3 font-medium h-32 w-full border border-gray-600 bg-[#374151] text-white rounded-xl outline-none placeholder:text-gray-400"
            value={detail}
            onChange={(e) => {
              setDetail(e.target.value);
            }}
          />

          <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-3 font-medium rounded-xl cursor-pointer active:scale-95">
            Add Note
          </button>
        </form>
      </div>

      {/* Your Notes Section */}
      <div className="w-full lg:w-1/2 p-10 lg:border-l border-gray-700 overflow-y-auto">
        <h1 className="text-3xl font-bold mb-6 text-gray-100">
          Your Notes
        </h1>

        <div className="flex gap-10 flex-wrap">
          {task.map((elem, idx) => {
            return (
              <div
                key={idx}
                className="w-56 min-h-52 bg-cover bg-center bg-no-repeat p-6"
                style={{
                  backgroundImage:
                    "url('https://static.vecteezy.com/system/resources/previews/037/152/709/non_2x/sticky-note-paper-background-free-png.png')",
                }}
              >
                <h3 className="text-black text-xl font-bold ">
                  {elem.title}
                </h3>

                <p className="text-black mt-4 text-sm ">
                  {elem.detail}
                </p>

                <button onClick={()=>{
                  deleteNote(idx)
                }} className="bg-red-600 hover:bg-red-700 mt-20 px-3 py-1 text-white rounded-xl active:scale-95 cursor-pointer">
                  Delete
                </button>
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
};

export default App;