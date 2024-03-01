
import React,{  Component,useState } from 'react'
import { useNavigate } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';
 function CreateEmployeeComponent()
 {
    let navigate=useNavigate();

    const[employee,setEmployee]=useState({
      firstName:"",
      lastName:"",
      email:""

    })

    const handleClick=(e)=>
    {
      const name=e.target.name;
      const value=e.target.value;
      setEmployee({... employee,[name]:value});
    }

    const saveHandler=(e)=>
    {
      e.preventDefault();
      console.log("employee =>"+JSON.stringify(employee));
      EmployeeService.createEmployee(employee).then(res=>
        {
          navigate("/employees");
        })
    }

    const cancelHandler=()=>
    {
      navigate("/employees");
    }
    
  return (
    <div className='container mt-5'>
       <div className='row'>
            <div className="card col-md-6 offset-md-3 offset-md-3">
              <h3 className='text-center'>Add Employee</h3>
              <div className="card-body"></div>
              <form>

              <label className='my-3'>First Name:</label>
              <input type="text" name="firstName" id="firstName" 
              autocomplete="off" className='form-control'
              value={employee.firstName} onChange={handleClick}/>

              <label className='my-3'>Last Name:</label>
              <input type="text" name="lastName" id="lastName"
              autocomplete="off" className='form-control'
              value={employee.lastName} onChange={handleClick}/>

              <label className='my-3'>Email:</label>
              <input type="text" name="email" id="email"
              autocomplete="off" className='form-control'
              value={employee.email} onChange={handleClick}/>

                  <button className='btn btn-success mt-3' onClick={saveHandler}>save</button>
                  <button className='btn btn-danger mt-3 ms-3' onClick={cancelHandler} style={{marginLeft:"10px"}}>cancel</button>
              </form>
      
    </div>
    </div>
    </div>
  )
}

export default CreateEmployeeComponent


