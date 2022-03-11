import { useState } from "react"
import axios  from "axios"
import { useEffect } from "react";
import { FormTable } from "./FormTable";

export const Form = () => {

    const [data,setData] = useState({

        name : "",
        age : "",
        address : "",
        department : "",
        salary : "",
        status : "",
     
    });

    const [result,setResult] = useState([])

    useEffect( () =>{getData()},[]) 

    const getData = () =>{
        axios.get("http://localhost:2025/employees").then( (res) =>{
            setResult(res.data)
        })
    }

    const HandleChange = (e) => {

        const {id,value} = e.target 

        setData({...data , [id] : value});   
    }
    //console.log(data);

    const HandleSubmit = (e) => {
        e.preventDefault();

        axios.post("http://localhost:2025/employees",data).then( () =>{getData()})
        
    }

    return(
       
        <div className="formDiv">
             <form id="form" onSubmit={HandleSubmit}>

        <input id="name" type="text" placeholder="enter your username" onChange={HandleChange}/>

        <input id="age" type="number" placeholder="enter your age" onChange={HandleChange}/>

        <input id="address" type="text" placeholder="enter your address" onChange={HandleChange}/>

        <select name="Department" id="department" onChange={HandleChange}>
            <option value="">---</option>
            <option value="tech">Technical Department</option>
            <option value="manage">Management Department</option>
            <option value="opr">Operation Department</option>
        </select>

        <input id="salary" type="number" placeholder="enter your salary" onChange={HandleChange}/>

        <label>Married</label>
        <input type="checkbox" id="status" value="married" onChange={HandleChange}/>

        <label>Unmarried</label>
        <input type="checkbox" id="status" value="unmarried" onChange={HandleChange}/>

        <input type="submit" value= "submit" id="submit"/>
        </form>

        <div>

        <FormTable result={result}/>

        </div>

</div>

)        }