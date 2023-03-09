import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
const Contactlisting = () => {
    const[managerData,setManagerData]=useState(null)
    const navigate=useNavigate();
    const LoadDetails=(id)=>{
        navigate("/manager/detail/"+id)
    }

    const LoadDelete=(id)=>{
        if(window.confirm("Do you want to delete?")){
            axios.delete("http://localhost:8000/manager/"+id)
        .then((res)=>{
            alert("Deleted Successfully");
            window.location.reload();
        }).catch((err)=>{
            console.log(err.message);
        })
        }
    }

    const LoadUpdate=(id)=>{
        navigate("/manager/edit/"+id)
    }

    useEffect(() => {
      axios.get("http://localhost:8000/manager")
      .then((res)=>{
        // console.log(res.data)
        setManagerData(res.data)
      })
      .catch((err)=>{
        console.log(err.message)
      })
    }, [])
    
    return (
        <div className="container">
            <div className="card">
                <div className="card-title">
                    <h2>Managers List</h2>
                </div>
                <div className="card-body">
                <div className="divbtn">
                    <Link to="manager/create" className="btn btn-success">ADD NEW</Link>
                </div>
                    <table className="table table-bordered">
                        <thead className="bg-dark text-white">
                            <tr>
                                <td>ID</td>
                                <td>NAME</td>
                                <td>EMAIL</td>
                                <td>PHONE</td>
                                <td>ACTION</td>
                            </tr>
                        </thead>
                        <tbody>
                        { managerData &&
                            managerData.map((e)=>{
                            return <tr key={e.id}>
                            <td>{e.id}</td>
                            <td>{e.name}</td>
                            <td>{e.email}</td>
                            <td>{e.phone}</td>
                            <td>
                                <a onClick={()=>{LoadUpdate(e.id)}} className="btn btn-success">Update</a>
                                <a onClick={()=>{LoadDelete(e.id)}} className="btn btn-danger">Delete</a>
                                <a onClick={()=>{LoadDetails(e.id)}} className="btn btn-primary">Details</a>
                            </td>
                            </tr>
                        }) }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Contactlisting;