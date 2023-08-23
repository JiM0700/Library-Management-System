import React from "react";
import './adminnav.css';
import { Link } from "react-router-dom";


export function AdminNav() {
    return (
        <div className="adminMainDiv">
            <div className="adminTopDiv bg-dark-subtle d-flex">
                <div className="col-12 p-2 m-auto border text-center">
                    <Link to="/admin"><button className="btn btn-dark col-2 m-2">Home</button></Link>
                    <Link to="/admin/book"><button className="btn btn-dark col-2 m-2">Books</button></Link>
                    <Link to="/admin/user"><button className="btn btn-dark col-2 m-2">Users</button></Link>
                    <Link to="/"><button className="btn btn-dark col-2 m-2">LogOut</button></Link>

                </div>
            </div>
        </div>
    );
}