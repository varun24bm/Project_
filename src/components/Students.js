import axios from "axios";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Students=()=>{
    const [Students,setStudents]=useState([]);
    const API=" http://localhost:3001/Students";
    useEffect(()=>{
        axios.get(API)
        .then(res=>{
            console.log(res.data);
            setStudents(res.data);
        })
        .catch(err=>console.log(err));
    },[]);
    const delstu=(id)=>{
        if(window.confirm("do you want to delete"))
        {
            axios.delete(`${API}/${id}`)
            .then(res=>{
                if(res.data){
                    alert("student deleted")
                    let data=Students.filter(stu=> stu.id!=id);
                    setStudents(data);
                }
            })
            .catch(err=>console.log(err));
        }
    }
    return(
        <>
        <h1>Students details</h1>
        <Link to="/addstudents" className="btn btn-primary">Add Students</Link><hr />
        <div className="row">
            {Students.map(stu=>
                <div key={stu.id} className="col-sm-4"> 
                      <div className="card" style={{width:'18rem'}}>
                            <div className="card-body">
                                <h5 className="card-title">Student Name : {stu.name}</h5>
                                <p className="card-text"><b>Class :</b> {stu.class}</p>
                                <p className="card-text"><b>Father Name : </b>{stu.father_name}</p>
                                <p className="card-text"><b>Mother Name : </b>{stu.mother_name}</p>
                                <p className="card-text"><b>Address :</b> {stu.address}</p>
                                <p className="card-text"><b>Contact No :</b> {stu.contact_no}</p>
                                <button className="btn btn-danger" onClick={()=>delstu(stu.id)}>Delete</button>
                                <Link to={`/editstudents/${stu.id}`} className="btn btn-primary m-1">Edit</Link>
                                <Link to={`/marks/${stu.id}`} className="btn btn-primary">Marks</Link>
                            </div>
                       </div>  
                </div>
                
            )}
        </div>
        </>
    )
}
export default Students;