import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { AddData } from '../redux/UserSlice'

const AddUser = () => {
  let dispatch = useDispatch();
  let [userFrm, setUserFrm] = useState({
    name : "",
    age : ""
  })

  let save = ()=>{
    dispatch(AddData(userFrm));
  }

  return (
    <div className="row">
        <div className="col-md-6 offset-md-3 border border-1 p-2 border-dark">
            <div className='my-2'>
                <label>Name</label>
                <input type='text' value={userFrm.name} onChange={(e)=>setUserFrm({...userFrm, name : e.target.value})} className='form-control' />
            </div>
            <div className='my-2'>
                <label>Age</label>
                <input type='text' value={userFrm.age} onChange={(e)=>setUserFrm({...userFrm, age : e.target.value})} className='form-control' />
            </div>
            <br />
            <button onClick={save} className='btn btn-success'>Add</button>
        </div>
    </div>
  )
}

export default AddUser