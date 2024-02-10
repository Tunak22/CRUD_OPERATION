import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


const Home = () => {
   
    const[data, setData] = useState([])
    useEffect(()=>{
        axios.get('http://localhost:3000/')
        .then(res => setData(res.data))
        .catch(err => console.log(err))
    },[])

    const handleDelete = (Id)=>{
        axios.delete('http://localhost:3000/delete/'+Id)
        .then(res=>{
            window.location.reload();
        })
        .catch(err=>console.log(err))
    }
  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'> 
    <div className='w-50 bg-white rounded p-3'>
        <h2>Employee Salary List</h2>
        <div className='d-flex justify-content-end'>
            <Link to="/create" className='btn btn-success'>Create+</Link>
        </div>
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Employee code</th>
                    <th>Salary</th>
                    <th>Action</th>
                </tr>
                
            </thead>
            <tbody>
                {data.map((employees, index)=>{
                    return <tr key={index}>
                        <td>{employees.id}</td>
                        <td>{employees.name}</td>
                        <td>{employees.employee_code}</td>
                        <td>{employees.salary}</td>
                        <td className='flex-1'>
                            <Link to={`/read/${employees.id}`} className='btn btn-sm btn-info'>Read</Link>
                            <Link to={`/update/${employees.id}`} className='btn btn-sm btn-primary mx-2'>Edit</Link>
                            <button onClick={()=>handleDelete(employees.id)} className='btn btn-sm btn-danger'>Delete</button>
                        </td>
                    </tr>
                })}
            </tbody>
        </table>
    </div>
    </div>
  )
}

export default Home