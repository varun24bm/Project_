import axios from "axios";
import { useState} from "react";
import { useNavigate } from "react-router-dom";
const Addstudents=()=>{
    const API="http://localhost:3001/Students";
    const navigate=useNavigate();
    const [state, setstate]=useState({name:'', class:'',kannada:''});
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
                alert("student added");
                navigate('/students');
            }
        })
        .catch(err=>console.log(err))
    }
    return(
        <>
        <h2> Add Students</h2>
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
                    <label>Father Name</label>
                    <input type="text" name="father_name" className="form-control" onChange={handler} />
                </div>
                <div className="form-group">
                    <label>Mother Name</label>
                    <input type="text" name="mother_name" className="form-control" onChange={handler} />
                </div>
                <div className="form-group">
                    <label>Address</label>
                    <input type="text" name="address" className="form-control" onChange={handler} />
                </div>
                <div className="form-group">
                    <label>Contact no</label>
                    <input type="text" name="contact_no" className="form-control" onChange={handler} />
                </div>
                <h3>Add Students Marks</h3>
                <div className="form-group">
                    <label>kannada</label>
                    <input type="text" name="kannada" className="form-control" onChange={handler} />
                </div>
                <div className="form-group">
                    <label>english</label>
                    <input type="text" name="english" className="form-control" onChange={handler} />
                </div>
                <div className="form-group">
                    <label>maths</label>
                    <input type="text" name="maths" className="form-control" onChange={handler} />
                </div>
                <div className="form-group">
                    <label>science</label>
                    <input type="text" name="science" className="form-control" onChange={handler} />
                </div>
                <div className="form-group">
                    <label>social</label>
                    <input type="text" name="social" className="form-control" onChange={handler} />
                </div>
                <input type="submit" value="Add" className="btn btn-success" />
            </form>
        </>
    )
}
export default Addstudents;