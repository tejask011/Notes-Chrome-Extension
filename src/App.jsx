import React from "react";
import { useState } from "react";
import { X } from 'lucide-react';



const App = () => {
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(title, detail);

    settitle('');
    setdetail('');

    const copytask = [...task];
    console.log(task);

    copytask.push({ title, detail });
    settask(copytask);
    console.log(copytask);


  };


  const deletenote = (idx) => {
    console.log('delete');
    const copyTask = [...task];
    copyTask.splice(idx, 1);

    settask(copyTask);

  }

  const [title, settitle] = useState('');
  const [detail, setdetail] = useState('');

  const [task, settask] = useState([]);

  return (
    <div className="flex flex-row h-screen bg-black text-white" style={{ width: '700px', minHeight: '400px', maxHeight: '500px', overflow: 'hidden' }}>
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="flex flex-col w-1/2 items-start p-5 gap-3"
      >
        <h1 className="text-xl font-bold">Note Taking App</h1>

        {/* first input */}
        <input
          type="text"
          placeholder="Enter your notes Heading"
          className="px-3 py-2 w-full border-2 outline-none rounded text-sm"
          value={title}
          onChange={(e) => settitle(e.target.value)}
        />

        <textarea
          placeholder="Enter your notes here"
          className="px-3 py-2 w-full font-medium border-2 outline-none rounded text-sm"
          style={{ height: '160px', resize: 'none' }}
          value={detail}
          onChange={(e) => setdetail(e.target.value)}
        />

        <button className="bg-white w-full text-black py-2 px-5 rounded text-sm">
          Add notes
        </button>
      </form>
      <div className="w-1/2 bg-gray-900 p-5 border-l-2 border-gray-700 overflow-auto">
        <h1 className="text-xl font-bold">Your Notes</h1>
        <div className="flex flex-wrap gap-3 mt-3">

          {task.map(function (item, idx) {
            return (
              <div key={idx} className="relative h-44 w-36 rounded-2xl bg-cover bg-[url('https://imgs.search.brave.com/8xs9UMYDSr2iI46yMHeuZICZtCOLDdlX24dzwLkcMTg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wbmdp/bWcuY29tL3VwbG9h/ZHMvc3RpY2t5X25v/dGUvc21hbGwvc3Rp/Y2t5X25vdGVfUE5H/MTg5MjcucG5n')] p-3">
                <h2 onClick={() => deletenote(idx)} className="absolute top-3 right-3 bg-red-500 text-xs cursor-pointer">
                  <X strokeWidth={2.5} />
                </h2>
                <h2 className="text-base font-bold text-black">{item.title}</h2>
                <p className="text-gray-700 text-xs">{item.detail}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
