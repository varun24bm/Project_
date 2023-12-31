import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Marks=()=>{
    // const [Students,setStudents]=useState([]);
    const [state,setstate]=useState({});
    const API=" http://localhost:3001/Students";
    const {id}=useParams();
    useEffect(()=>{
        axios.get(`${API}/${id}`)
        .then(res=>{
            if(res.data){
                setstate(res.data);
            }
        })
        .catch(err=>console.log(err));
    },[]);
    const handler=(event)=>{
        const {name,value}=event.target;
        setstate({...state,[name]:value});
    }
    return(
        <>
        <h2>Students Marks Sections</h2><br/>
        <p> To  check the students marks click on marks in students tab</p>
       
        <h1>Student Name : {state?.name}</h1>
        <div className="row">
            <p className="fw-10"><b>Kannada : </b> {state?.kannada}</p>
            <p className="fw-10"><b>English : </b> {state?.english}</p>
            <p className="fw-10"><b>Maths : </b> {state?.maths}</p>
            <p className="fw-10"><b>Science : </b> {state?.science}</p>
            <p className="fw-10"><b>Social : </b> {state?.social}</p>
        </div>
        
        </>
    )
}
export default Marks;