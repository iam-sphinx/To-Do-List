import React from "react";
import {AiOutlinePlusCircle} from 'react-icons/ai'
import {BsTrash} from 'react-icons/bs'
function App() {
  const [text,setText] = React.useState('')
  const [items, setItems] = React.useState([]);
  const [flag, setFlag] = React.useState(false);

  const handleAdd = ()=>{
    if(text === '')
    return 
    const temp = [...items,text];
    setItems(temp);
    setFlag(true);
  }

  const handleDelete =()=>{
    const temp1 = [...items];
    temp1.pop();
    setItems(temp1);
  }
  return (
    <div className='min-h-screen bg-gradient-to-b from-[#392D69] to-[#B57BEE]'>
    <div className="flex justify-center">
      <h1 className='text-5xl font-bold font-signature text-white py-6'>To Do List</h1>
    </div>
    <div className="flex justify-center items-center">
    <div className=" text-black ">
    <input className='w-[400px] h-[50px] bg-[#ADA2FF] rounded-lg border-2 border-solid border-black placeholder:text-white placeholder:px-[145px]' onChange={(e)=>{setText(e.target.value)}} value={text} placeholder="enter a todo item"></input>
    </div>

    <AiOutlinePlusCircle className='text-white h-[45px] w-[45px] 'onClick={handleAdd}/>
    </div>
    <div>
    <ul className="my-8">
    {items.map((item)=>(
      <div className="flex justify-center items-center">
      <li className="flex justify-center items-center text-white bg-gray-400 w-[400px] h-[50px] cursor-pointer rounded-lg mr-14 mb-1 shadow-2xl border-2 border-black"><h1 className="pl-6">{item}</h1></li>
      </div>
    ))}
    </ul>
    </div>
    <div className="flex justify-center items-center">
    { flag && <BsTrash className="text-white h-10 w-10" onClick={handleDelete}/>}
    </div>
    </div>
  );
}

export default App;
