import React from 'react'

const Signup = () => {
  return (
    <div>
         <div className="container">
            <br></br><br></br>
            <h1 align="center"><u>ACCOUNT REGISTRATION</u></h1><br></br><br></br><br></br><br></br>
            
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 colxl-12 col-xxl-12">
                    <div className="row g-3">
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label"></label>
                            <input type="text" className="form-control" placeholder='enter your username'/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label"></label>
                            <input type="text" className="form-control"placeholder='email' />
                        </div>
                       
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label"></label>
                            <input type="text" className="form-control"placeholder=' phone no'/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label"></label>
                            <select name="gender" id="" className="form-control">
                            <option value="-Select Gender-">-Select Gender-</option>
                                <option value="male">male</option>
                                <option value="female">female</option>
                                <option value="other">other</option>
                            </select>
                            
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label"></label>
                            <input type="password" className="form-control" placeholder='password'/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label"></label>
                            <input type="password" className="form-control" placeholder='confirmpassword' />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <button className="btn btn-success">SUBMIT</button>
                    </div>
                        
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Signup