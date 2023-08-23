import React from "react";
import './adminhome.css'
import { Link } from "react-router-dom";

export function AdminHome(){
    return(
        <>
            <div className="p-3">
                <h3>Welcome Admin,</h3>
            </div>
             <div className="col-12 m-auto text-center d-flex adminHomeDiv">
                <div className="m-3 m-auto adminHomeInnerDiv">
                    <Link to="/admin/book"><button className="btn btn-outline-primary adminHomeButton btn-lg m-2">Books</button></Link>
                    <Link to="/admin/user"><button className="btn btn-outline-primary adminHomeButton btn-lg m-2">Users</button></Link>
                </div>
            </div>
            <div className="text-end p-3">
                <button className="btn btn-outline-primary"><Link to={"/"}>Logout</Link></button>
            </div>
        </>
    );
}