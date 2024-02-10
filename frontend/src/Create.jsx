import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Create = () => {
    const[values, setValues] = useState({
        name:'',
        employee_code:'',
        salary:''
    })

    const navigate = useNavigate();
    const handleSubmit = (e)=>{
        e.preventDefault();
        axios.post('http://localhost:3000/employees', values)
        .then(res=>{
            console.log(res)
            navigate('/')
        })
        .catch(err=> console.log(err))
    }
  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
        <div className='w-50 bg-white rounded p-3'>
            <form onSubmit={handleSubmit}>
                <h2>Add Employee</h2>
                <div className='mb-2'>
                <label htmlFor='name'>Name</label>
                <input type='text' className='form-control' placeholder='Enter name' 
                onChange={e=>setValues({...values, name:e.target.value})}></input>
                </div>
                <div className='mb-2'>
                <label htmlFor='employee-code'>Employee code</label>
                <input type='string' className='form-control' placeholder='Enter employee code'
                onChange={e=>setValues({...values, employee_code:e.target.value})}></input>
                </div>
                <div className='mb-2'>
                <label htmlFor='salary'>Salary</label>
                <input type='number' className='form-control' placeholder='Enter monthly salary'
                onChange={e=>setValues({...values, salary:e.target.value})}></input>
                </div>
                <button className='btn btn-success'>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default Create