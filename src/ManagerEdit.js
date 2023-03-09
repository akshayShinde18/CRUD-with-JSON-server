import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from "axios";
export default function ManagerEdit() {

    const { mid } = useParams();

    // const [mdata, setMdata] = useState({})

    useEffect(() => {
        axios.get("http://localhost:8000/manager/" + mid)
            .then((res) => {
                // console.log(res.data)
                // setMdata(res.data)
                setId(res.data.id)
                setName(res.data.name)
                setEmail(res.data.email)
                setPhone(res.data.phone)
            })
            .catch((err) => {
                console.log(err.message)
            })

    }, [])

    const[id,setId]=useState(" ");
    const[name,setName]=useState(" ");
    const[email,setEmail]=useState(" ");
    const[phone,setPhone]=useState(" ");
    const[active,setActive]=useState(true);
    const navigate=useNavigate();

    const handleSubmit=(e)=>{
        e.preventDefault();
        const managerData={id,name,email,phone,active};
        

        axios.put("http://localhost:8000/manager/"+mid,managerData)
        .then((res)=>{
            alert("Saves Successfully");
            navigate("/");
        }).catch((err)=>{
            console.log(err.message);
        })

    }

  return (
    <div>
            <div className='row'>
                <div className='offset-lg-3 col-lg-6'>
                    <form className='container' onSubmit={handleSubmit}>
                        <div className='card' style={{ "textAlign": "left" }}>
                            <div className='card-title'>
                                <h1>Update Page</h1>
                            </div>
                            <div className='card-body'>
                                <div className='row'>
                                    <div className='col-lg-12'>
                                        <div className='form-group'>
                                            <label>ID</label>
                                            <input value={id}  className='form-control'></input>
                                        </div>
                                    </div>
                                    <div className='col-lg-12'>
                                        <div className='form-group'>
                                            <label>Name</label>
                                            <input required value={name} onChange={e=>setName(e.target.value)} className='form-control'></input>
                                        </div>
                                    </div>
                                    <div className='col-lg-12'>
                                        <div className='form-group'>
                                            <label>Email</label>
                                            <input value={email} onChange={e=>setEmail(e.target.value)}className='form-control'></input>
                                        </div>
                                    </div>
                                    <div className='col-lg-12'>
                                        <div className='form-group'>
                                            <label>Phone</label>
                                            <input value={phone} onChange={e=>setPhone(e.target.value)}className='form-control'></input>
                                        </div>
                                    </div>
                                    <div className='col-lg-12'>
                                        <div className='form-check'>
                                            <input type="checkbox" className='form-check-input'></input>
                                            <label checked={active} onChange={e=>setActive(e.target.checked)} className='form-check-label'>Is Active</label>
                                        </div>
                                    </div>
                                    <div className='col-lg-12'>
                                        <div className='form-group'>
                                            <button className='btn btn-success' type='submit'>Save</button>
                                            <Link to="/" className='btn btn-danger'>Back</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </form>

                </div>
            </div>
        </div>
  )
}
