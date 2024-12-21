import React from 'react'
import { useSelector } from 'react-redux'

const ListUser = () => {
    let user = useSelector(state=>state.UserSlice);
  return (
    <div className="row">
        <div className="col-md-12">
            <table className='table table-dark'>
                <thead>
                    <tr>
                        <th>S.No.</th>
                        <th>Name</th>
                        <th>Age</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        user.map((item, index)=><tr key={item._id}>
                                <td>{index+1}</td>
                                <td>{item.name}</td>
                                <td>{item.age}</td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default ListUser