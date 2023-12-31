import axios from "axios";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Teacher=()=>{
    const [Teacher,setTeacher]=useState([]);
    const API=" http://localhost:3002/Teacher";
    useEffect(()=>{
        axios.get(API)
        .then(res=>{
            console.log(res.data);
            setTeacher(res.data);
        })
        .catch(err=>console.log(err));
    },[]);
    const deltec=(id)=>{
        if(window.confirm("do you want to delete"))
        {
            axios.delete(`${API}/${id}`)
            .then(res=>{
                if(res.data){
                    alert("Teacher deleted")
                    let data=Teacher.filter(tec=> tec.id!=id);
                    setTeacher(data);
                }
            })
            .catch(err=>console.log(err));
        }
    }
    return(
        <>
        <h2> Teachers Sections</h2>
        <Link to="/addteacher" className="btn btn-primary">Add Teacher</Link><hr />
        <div className="row">
            {Teacher.map(tec=>
                <div key={tec.id} className="col-sm-4"> 
                      <div className="card" style={{width:'18rem'}}>
                            <div className="card-body">
                                <h5 className="card-title"><b>Teacher Name :</b> {tec.name}</h5>
                                <p className="card-text"><b>Class Incharge :</b> {tec.class}</p>
                                <p className="card-text"><b>Teaching subject :</b> {tec.subject}</p>
                                <p className="card-text"><b>Contact No :</b> {tec.contact_no}</p>
                                <p className="card-text"><b>Address :</b> {tec.Address}</p>
                                <button className="btn btn-danger" onClick={()=>deltec(tec.id)}>Delete</button>
                                <Link to={`/editteacher/${tec.id}`} className="btn btn-primary m-1">Edit</Link>
                            </div>
                       </div>  
                </div>
                
            )}
        </div>
        </>
    )
}
export default Teacher;