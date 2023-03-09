import React, { useState, useEffect } from 'react'
import { useParams ,Link} from 'react-router-dom'
import axios from 'axios';

export default function ManagerDetails() {

    const { mid } = useParams();

    const [mdata, setMdata] = useState({})

    useEffect(() => {
        axios.get("http://localhost:8000/manager/" + mid)
            .then((res) => {
                // console.log(res.data)
                setMdata(res.data)
            })
            .catch((err) => {
                console.log(err.message)
            })

    }, [])

    return (
        <div>
            <div className="card">
                <div className="card-title">
                    <h2>Managers Details</h2>
                </div>
                <div className="card-body" style={{ textAlign: 'left' }}>
                    {mdata &&
                        <><h1>Managers name is : {mdata.name}</h1>
                        <h3>Contact Details</h3>
                            <h4>Email id : {mdata.email}</h4>
                            <h4>Phone Number: {mdata.phone}</h4></>
                    }
                </div>
                <div>
                    <Link to="/" className='btn btn-danger' style={{float:"right"}}>Back</Link>
                </div>
            </div>
        </div>
    )
}
