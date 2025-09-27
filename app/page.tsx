// @ts-nocheck
'use client';
import {useState, useEffect} from 'react'
import { Banner } from "@/components/banner";
import { FakeTodo } from '@/components/faketodo';
import { generateFakeData } from "@/utils/_mockData";




export default function Home() {

 const [ todo, updateTodo ] = useState("Enter a todo");
 const [userTodos, updateUserTodos] = useState([]);




 console.log('todo is ', todo);


 console.log('userTodos ', userTodos);


//  function oldSchoolOnChange(evt) {
//   const input = evt.target.value;

//   updateTodo(input);
//  }



  //JS Closures & Scope
 const onChange = (evt) => {

  const input = evt.target.value;

  updateTodo(input);

 }

 const onSubmit = async (evt) => {
  evt.preventDefault();

  console.log("my current captured TODO IS ", todo);
  
 } 


 useEffect(() => {

  async function makeFakeAPICall() {
    const fakeData = generateFakeData();

    updateUserTodos(fakeData);

  }

  makeFakeAPICall()


 }, [])






 
  // When maping and rendering components, USE THE 'KEY' ATTRIBUTE
  
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input onChange={onChange} className="border p-4" type="text" value={todo} />
      </form>

      
      {userTodos.map(data => {
        return <FakeTodo key={data.id} id={data.id} date={data.data} todo={data.todo} />
      })}

    </div>
  );
}

// <FakeTodo id={} date="date" todo="todo" />

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
  

