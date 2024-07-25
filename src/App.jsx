import React, { useState } from 'react'
import Form from './components/forms/Form'
import TodoList from './components/todo/TodoList'
import toast, { Toaster } from 'react-hot-toast';
import {v1 as uuid} from "uuid"

const App = () => {

  

  let [state,setState]=useState({
    items:[],
    id:uuid(),
    course:"",
    trainer:""

  });


  let handleChange=(e)=>{
    let {name,value}=e.target;
    setState({...state,[name]:value});
    //setState({...state,[item]:e.target.value});
  }

  //===============submit ==================
  let handleSubmit=(e)=>{
    e.preventDefault();
    toast.success('Successfully created!');
    try {
      
      let newItem={
        id:state.id,
        course:state.course,
        trainer:state.trainer
      }
      let updatedItem=[...state.items,newItem];
     // console.log(...state.items);
      //console.log(updatedItem);
      setState({
        items:updatedItem,
        id:uuid(),
        course:"",
        trainer:""
      }); 
      //console.log(state);
      //setState({});
     
      
    } catch (error) {
      console.log(error);
    }finally{
     // window.location.assign("");
      // setState({
      //   items:"",
      //   id:uuid(),
      //   course:"",
      //   trainer:""
      // })
    }

  }
  //================== delete=================================
  let handleDelete=id=>{
    let filterItem=state.items.filter(item=> item.id!==id);
    setState({items:filterItem});
    toast.success('Deleted Successfully !');
  }

  //================== upadate=================================

  let handleUpdate=(id)=>{
    let editContent=state.items.filter(item=> item.id!==id);
    let selectedItem=state.items.find(item=> item.id===id);
    // console.log(selectedItem);
    setState({
      items:editContent,
      course:selectedItem.course,
      trainer:selectedItem.trainer,
      id:id
    });
    toast.success('Updated Successfully !');
  }

  return (
    <section id="mainBlock">
            <article>
                 <header>
                     
                      <Toaster></Toaster>
                     <h1>Todo App</h1>
                 </header>

                 <main>
                       <Form course={state.course} trainer={state.trainer} handleChange={handleChange} handleSubmit={handleSubmit}  ></Form>
                       <TodoList items={state.items} handleDelete={handleDelete} handleUpdate={handleUpdate}></TodoList>
                 </main>
            </article>
    </section>
  )
}

export default App