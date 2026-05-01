import React from "react";
import { useState } from "react";
import { X } from 'lucide-react';



const App = () => {
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(title,detail);

    settitle('');
    setdetail('');

    const copytask = [...task];
    console.log(task);

    copytask.push({title,detail});
    settask(copytask);
    console.log(copytask);

    
  };


  const deletenote=(idx)=>
  {
    console.log('delete');
    const copyTask=[...task];
    copyTask.splice(idx,1);

    settask(copyTask);

  }

const [title, settitle] = useState('');
const [detail, setdetail] = useState('');

const [task, settask] = useState([]);

  return (
    <div className=" lg:flex h-screen  bg-black text-white">
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="flex flex-col lg:w-1/2  items-start p-10 gap-4 "
      >
        <h1 className="text-3xl font-bold">Note Taking App</h1>

        {/* first input */}
        <input
          type="text"
          placeholder="Enter your notes Heading"
          className="px-5 py-2 w-full border-2 outline-none rounded"
          value={title}
          onChange={(e)=>
          {
            
            settitle(e.target.value);
          }
          }
        />

        <textarea
          placeholder="Enter your notes here"
          className="px-5 py-2 w-full h-40 flex  font-medium items-start flex-row border-2 outline-none rounded"
          value={detail}
          onChange={(e)=>
          {
            
           
            setdetail(e.target.value);
          }
          }


        >

        </textarea>





        <button className="bg-white w-full text-black py-2 px-5 rounded ">
          Add notes
        </button>
      </form>
      <div className=" lg:w-1/2 bg-gray-900 p-10 lg:border-l-2">
        <h1 className="text-3xl font-bold">Your Notes</h1>
        <div className=" flex flex-wrap gap-5 max-h-100 mt-5 overflow-auto">
        
        {task.map(function(item,idx) {
          return (
            <div key={idx} className=" relative h-52 w-40 rounded-2xl bg-cover bg-[url('https://imgs.search.brave.com/8xs9UMYDSr2iI46yMHeuZICZtCOLDdlX24dzwLkcMTg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wbmdp/bWcuY29tL3VwbG9h/ZHMvc3RpY2t5X25v/dGUvc21hbGwvc3Rp/Y2t5X25vdGVfUE5H/MTg5MjcucG5n')] p-4">
              <h2  onClick={() => deletenote(idx)} className="absolute top-5 right-5 bg-red-500 text-xs ">
                <X strokeWidth={2.5} />
              </h2>
              <h2 className="text-xl font-bold text-black">{item.title}</h2>
              <p className="text-gray-700">{item.detail}</p>
            </div>
          );
        })}
        </div>
      </div>
    </div>
  );
};

export default App;
