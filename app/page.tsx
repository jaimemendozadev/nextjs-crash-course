'use client';
import {useState, useEffect} from 'react';
import { Banner } from "@/components/banner";
import { generateFakeData } from "@/utils/_mockData";

export default function Home() {


  const [currentTodo, setTodo] = useState("First todo");



  console.log("currentTodo in component ", currentTodo);
  console.log('\n');

  const handleChange = (evt) => {
    console.log("evt.target.value ", evt.target.value);
    setTodo(evt.target.value);
  }


  
  return (
    <div>
      <form onSubmit={evt => evt.preventDefault()}>
        <input type="text" value={currentTodo} onChange={handleChange} />
      </form>
    </div>
  );
}




/*
 Lecture TODOs:

 [] Explain Components
   [] Explain how to import/export Components

 [] Explain useState Hook
 
 [] Explain useEffect Hook
 
 [] Demo making API Call in useEffect
 
 [] Demo making API Call and saving fetched data use useState Hook

 [] Display rendering a Form
    [] Add onChange handler function to Form
    [] Add onSubmit handler function to Form

*/





/********************************** 
 *
 **********************************
 


 Import/Exporting React Components
 https://react.dev/learn/importing-and-exporting-components


*/
  

