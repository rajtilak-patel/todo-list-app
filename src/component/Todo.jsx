import { useEffect } from "react";
// import { useState } from "react";
import Pagination from "./Pagination";
import {TodoInput} from "./TodoInput";
import {TodoList} from "./TodoList";
import React from "react";

const Todo = () => {
    const [todos,setTodos] = React.useState([]);
    const [page, setPage] = React.useState(1);
    const [ todoqty, setTodoqty] = React.useState(1);
    const [loading ,setLoading] = React.useState(false);

    useEffect(()=>{
        const pagafetch = async () =>{
            let res = await fetch(` http://localhost:3000/todos`);
            let data = await res.json();
            setTodoqty(data.length);
            
        }
        pagafetch();
    },[])

    const fetchData = ()=>{
        
        setLoading(true);

        fetch(` http://localhost:3000/todos?_page=${page}&_limit=4`).then((res)=>{
            res.json().then((data)=>{
                setTodos([...data]);
            })
        }).catch((err)=>{
            console.log(err);
        }).finally(()=>{
            setLoading(false);
        })

    }

    useEffect(()=>{
        fetchData();

        // eslint-disable-next-line
       },[page])

   const handleAddTodo=(text)=>{
      const new_todo = {
        title:text,
        status:false
      };
    //   setTodos([...todos,new_todo]);
    fetch(`http://localhost:3000/todos`,{
      method: 'POST',
      body: JSON.stringify(new_todo),
      headers:{
        'Content-type' : 'application/json'
      }
    }).then((res)=>{

    }).catch((err)=>{
      console.log(err);
    }).finally(()=>{
      fetchData();
      setTodoqty(todoqty+1)
    })
  };

  const handleToggle = async(todo) =>{
        await fetch(` http://localhost:3000/todos/${todo.id}`,{
            method:"PATCH",
            body: JSON.stringify({
                status: !todo.status,
            }),
            headers:{
                'Content-type' :'application/json'
            },
        })

        fetchData();
  }

  const handleDelete = (id) =>{
          fetch(` http://localhost:3000/todos/${id}`,{
            method:"DELETE"
          })

          fetchData();
          setTodoqty(todoqty-1);
  }
  const pageChange = (val) =>{
      setPage(page+val)
  }

  return (
    loading ? <h1>Loading...</h1> :
    <div>
       <TodoInput handleAddTodo = {handleAddTodo}/>
       <TodoList todos={todos} handleToggle={handleToggle} handleDelete={handleDelete}
       />
 
        <Pagination  page={page} pageChange = {pageChange} todoqty = {todoqty}/>
       
    </div>
  );
};

export default Todo;
