import axios from 'axios'
import React, { useState } from 'react'

const AddAppoin = () => {
    {
        const [data, setData] = useState({
            "uname": "",
            "mob": "",
            "category": "",
            "date": "",
            "time": "",
            "specialist": ""
        })
        const inputHandler = (event) => {
            setData({ ...data, [event.target.name]: event.target.value })
        }

        const readValue = () => {
            console.log(data)


            axios.post("http://localhost:8008/add", data).then(
                (response) => {
                    console.log(response.data)
                    if (response.data.status == "success") {
                        alert("success")
                    } else {
                        alert(Error)
                    }
                }
            )

        }

        return (
            <div>
               <br></br>

                <div className="container">
                    <h2 align="center">ADD APPOINMENT</h2>
                    <div className="row">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <div className="row g-3">
                                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                    <label htmlFor="" className="form-label">User Name</label>
                                    <input type="text" className="form-control" name='uname' value={data.uname} onChange={inputHandler} />
                                </div>
                                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                    <label htmlFor="" className="form-label">Mobile</label>
                                    <input type="text" className="form-control" name='mob' value={data.mob} onChange={inputHandler} />
                                </div>
                                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                    <label htmlFor="" className="form-label">Category</label>
                                    <input type="text" className="form-control" name='category' value={data.category} onChange={inputHandler} />
                                </div>
                                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                    <label htmlFor="" className="form-label">Select Date</label>
                                    <input type="date" className="form-control" name="date" value={data.date} onChange={inputHandler} />
                                </div>

                                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                    <label htmlFor="" className="form-label">Time</label>
                                    <select name="time" className="form-control" value={data.time} onChange={inputHandler}>
                                        <option value="-Select-">-Select-</option>
                                        <option value="9am-10am">9am-10am</option>
                                        <option value="10am-11am">10am-11am</option>
                                        <option value="11am-12pm">11am-12pm</option>
                                        <option value="12pm-1pm">12pm-1pm</option>
                                        <option value="1pm-2pm">1pm-2pm</option>
                                        <option value="2pm-3pm">2pm-3pm</option>
                                        <option value="3pm-4pm">3pm-4pm</option>
                                        <option value="5pm-6pm">5pm-6pm</option>
                                    </select>
                                </div>

                                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                    <label htmlFor="" className="form-label">Specialist</label>
                                    <select name="specialist" className="form-control" value={data.specialist} onChange={inputHandler}>
                                        <option value="-Select-">-Select-</option>
                                        <option value="Ferit">Ferit</option>
                                        <option value="Marcus">Marcus</option>
                                        <option value="Seyran">Seyran</option>
                                        <option value="Margerette">Margerette</option>
                                        <option value="Juliana">Juliana</option>
                                        <option value="Xander">Xander</option>
                                        <option value="Madison">Madison</option>
                                        <option value="Nicholas">Nicholas</option>
                                    </select>
                                </div>

                                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 colxl-6 col-xxl-6">
                                    <button className="btn btn-success" onClick={readValue}>REGISTER </button><br></br>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        )
    }
}
export default AddAppoin