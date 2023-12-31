import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const Addteachers=()=>{
    const API="http://localhost:3002/Teacher";
    const navigate=useNavigate();
    const [state, setstate]=useState({name:'', class:''});
    const handler=(event)=>{
        const {name,value}=event.target;
        setstate({...state,[name]:value});
    }
    const postData=(event)=>{
        event.preventDefault();
        console.log(state);
        axios.post(API,state)
        .then(res=>{
            if(res.data){
                alert("Teacher added");
                navigate('/teacher');
            }
        })
        .catch(err=>console.log(err))
    }
    return(
        <>
        <h2> Add Teachers</h2>
        <form onSubmit={postData}>
                <div className="form-group">
                    <label>Name</label>
                    <input type="text" name="name" className="form-control" onChange={handler} />
                </div>
                <div className="form-group">
                    <label>class</label>
                    <input type="text" name="class" className="form-control" onChange={handler} />
                </div>
                <div className="form-group">
                    <label>Subject</label>
                    <input type="text" name="subject" className="form-control" onChange={handler} />
                </div>
                <div className="form-group">
                    <label>contact no</label>
                    <input type="text" name="contact" className="form-control" onChange={handler} />
                </div>
                <div className="form-group">
                    <label>Address</label>
                    <input type="text" name="Address" className="form-control" onChange={handler} />
                </div>
                <input type="submit" value="Add" className="btn btn-success" />
            </form>
        </>
    )
}
export default Addteachers;