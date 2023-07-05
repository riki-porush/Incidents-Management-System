
import React from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '../App';


export default function Exampple() {

  const counter = useSelector((myStore:RootState) => myStore.counterSlice.counter)

  return (
    <div className='container'>
      <h2>Counter:{counter}</h2>
      <button>Add 1</button>
    </div>
  )
}
