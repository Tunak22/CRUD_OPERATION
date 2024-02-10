/*import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const Read = () => {
  const[employees, setEmployees] = useState([])
  const {Id} = useParams();
  useEffect(()=>{
    axios.get('http://localhost:3001/read/',+Id)
    .then(res=>{
      console.log(res)
      setEmployees(res.employees);
    })
    .catch(err=>console.log(err))
  },[Id]);
  

  return (
   
  )
}

export default Read */

import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {  Link, useParams } from 'react-router-dom'

const Read = () => {
  
  const {Id} = useParams();
  const[employees, setEmployees] = useState([])
  useEffect(()=>{
    axios.get('http://localhost:3000/read/'+Id)
    .then(res=>{
      console.log(res)
      setEmployees(res.data[0]);
      })
    .catch(err=>console.log(err))
  },[]);

  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
    <div className='w-50 bg-white rounded p-3'>
      <h2>Employees detail</h2>
      <div className='p-3'>
      <h3>ID Number:{employees.id}</h3>
      <h3>Name:{employees.name}</h3>
      <h3>Employee Code:{employees.employee_code}</h3>
      <h3>Monthly Salary:{employees.salary}</h3>
      </div>
    <Link to={'/'} className='btn btn-primary m-2 '>Back</Link>
    <Link to={`/update/${employees.id}`} className='btn btn-success'>Edit</Link>
    </div>
  </div>
  )
}

export default Read 