import axios from 'axios'
import React, { useState } from 'react'


    const Search = () =>{
        const [data, setData] = useState(
    
            {
                "uname": ""
    
            }
    
        )
        const [result, setResult] = useState([])
    
    
        const inputHandler = (event) => {
            setData({ ...data, [event.target.name]: event.target.value })
        }
    
        const readValue = () => {
            console.log(data)
            axios.post("http://localhost:8008/search",data).then(
              (response)=>{
                setResult(response.data)
              }
            ).catch().finally()
     
        }
    
        const deleteuser=(id)=>{
            let input={"_id":id}
            axios.post("http://localhost:8008/delete",input).then(
                (response)=>{
                    console.log(response.data)
                    if (response.data.status=="success") {
                        alert("Successfully Deleted")
                    } else {
                        alert("Error")
                    }
    
                }
            ).catch().finally()
        }
  return (
 <div>
    <Navbar/><br></br>
    <br></br><h3><u><center>Search User</center></u></h3><br></br>
    <div className="container">
        <div className="row">
            <div className="col col-12 col-sm-12-col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div className="row g-3">
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">User Name</label>
                        <input type="text" className="form-control" name='uname' value={data.uname} onChange={inputHandler} />
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <center><button className="btn btn-success" onClick={readValue}>Search</button></center>
                    </div>
                </div>
            </div>
        </div>
    </div><br></br>
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
        <table class="table table-dark table-striped-columns">
                
                    <thead>
                        <tr>
                            <th scope="col">User Name</th>
                            <th scope="col">Mobile</th>
                            <th scope="col">Category</th>
                            <th scope="col">Date</th>
                            <th scope="col">Time</th>
                            <th scope="col">Specialist</th>
                            <th></th>
                            
                            
                        </tr>
                    </thead>
                    <tbody>
                       {result.map(
                        (value,index)=>{
                            return <tr>
                            <td>{value.uname}</td>
                            <td>{value.mob}</td>
                            <td>{value.category}</td>
                            <td>{value.date}</td>
                            <td>{value.time}</td>
                            <td>{value.specialist}</td>
                           
                            <td><button className="btn btn-danger" onClick={()=>{deleteuser(value._id)}}>Delete</button></td>
                        </tr>
                        }
                       )}
                        
                    </tbody>
                </table>
           
        </div>
    </div>
    </div>
  )
}

export default Search
