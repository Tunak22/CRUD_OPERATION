import axios from "axios";
import { useEffect, useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom"



const Update  = () => {

    const {Id} = useParams();
    
  
    useEffect(()=>{
    axios.get('http://localhost:3000/read/'+Id)
    .then(res=>{
      console.log(res)
      setValues({...values, name:res.data[0].name, employee_code:res.data[0].employee_code, salary:res.data[0].salary})
      })
    .catch(err=>console.log(err))
  },[]);
    const[values, setValues] = useState({
        name:'',
        employee_code:'',
        salary:''
    });

    const handleUpdate = (event)=>{
        event.preventDefault();
        axios.put('http://localhost:3000/update/'+Id, values)
        .then(res=> { 
            console.log(res)
            Navigate('/')

        }).catch(err=>console.log(err))
    }
  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
        <div className='w-50 bg-white rounded p-3'>
            <form onSubmit={handleUpdate}>
                <h2>Update Existing Employee</h2>
                <div className='mb-2'>
                <label htmlFor='name'>Name</label>
                <input type='text' className='form-control' placeholder='Enter name' value={values.name}
                onChange={e=>setValues({...values, name:e.target.value})}></input>
                </div>
                <div className='mb-2'>
                <label htmlFor='employee-code'>Employee code</label>
                <input type='string' className='form-control' placeholder='Enter employee code' value={values.employee_code}
                onChange={e=>setValues({...values, employee_code:e.target.value})}></input>
                </div>
                <div className='mb-2'>
                <label htmlFor='salary'>Salary</label>
                <input type='number' className='form-control' placeholder='Enter monthly salary' value={values.salary}
                onChange={e=>setValues({...values, salary:e.target.value})}></input>
                </div>
                <Link to={'/'} className='btn btn-success'>Update</Link>
            </form>
        </div>
    </div>
  )
}

export default Update 