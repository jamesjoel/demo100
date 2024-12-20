import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { sendMsg } from '../redux/ChatSlice';

const User2 = () => {

  let allMsg = useSelector(state=>state.ChatSlice);

  let dispatch = useDispatch();
  let [txt, setTxt] = useState("");


  let send = ()=>{
      let obj = {
          sender : 2, 
          msg : txt,
          rec : 1
      }

      dispatch(sendMsg(obj));
      setTxt("");
  }

return (
  <div className="container">
      <div className="row">
          <div className="col-md-8 offset-md-2">
              <div className="card m-3">
                  <div className="card-header bg-dark">
                      <h4 className='text-light'>Chat Box : User1</h4>
                  </div>
                  <div  className="card-body bg-secondary" style={{height : "350px", overflow : "auto", display : "flex", alignItems : "flex-end"}}>
                  <ul style={{ listStyle : "none", margin : "0px", padding : "0px", width : "100%"}}>
                      
                      {
                          allMsg.map((item, index)=>{
                              return(
                                  <li style={{textAlign :  item.sender == 2 ? 'right' : 'left', margin : "5px" }} >
                                          <span style={{backgroundColor : item.sender == 2 ? 'green' : 'red', padding : "5px", borderRadius : "5px"}}>
                                          {item.msg}
                                          </span>
                                  </li>
                              )
                          })
                      }
                      
                      
                      
                  </ul>

                  </div>
                  <div className="card-footer">
                  <div className="input-group mb-3">
                      <input value={txt} onChange={(e)=>setTxt(e.target.value)} type="text" className="form-control" placeholder="Type Your Message Here ..."  />
                      <button className="btn btn-primary" onClick={send} type="button" id="button-addon2">Send</button>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
)
}

export default User2