import React from 'react'
import { useContext,createContext ,useState} from 'react'
import { ContextList } from './ContextList'


const Task = ({task}) => {
    const {removeUser,findItem}=useContext(ContextList);
  return (
    <div className='mt-4'>
    <h1>{task.title}</h1>
    <button onClick={()=>removeUser(task.id)}>delete</button>
    <button onClick={()=>findItem(task.id)}>Edit</button>
    </div>
  )
}

export default Task