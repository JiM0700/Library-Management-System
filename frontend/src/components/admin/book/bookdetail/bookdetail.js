import React, { useEffect, useState } from "react";
import './bookdetail.css';
import { Link, useParams } from "react-router-dom";
import axios from "axios";

export function BookDetails(){

    const[detail,setDetail] = useState([])
    var {s_no} = useParams()
    useEffect(()=>{
        axios.get("http://localhost:3012/getbook/"+s_no)
        .then(res=>setDetail(res.data))
    })

    return(
        <>
        <div className="p-3">
            <Link to="/admin/book"><p>Back to Books</p></Link>
        </div>
        {
            detail.map((value,index)=>(
                <div className=" p-5">
                <div key={value.s_no} className="">
                    
                    <table className="m-auto table">
                        <tbody>
                            <tr className="border">
                                <th>Book Id</th>
                                <td className="text-center">{value.id}</td>
                            </tr>
                            <tr className="border">
                                <th>Book Title</th>
                                <td className="text-center">{value.book_title}</td>
                            </tr>
                            <tr className="border">
                                <th>Book Author</th>
                                <td className="text-center">{value.author}</td>
                            </tr>
                            <tr className="border">
                                <th>Available Stock</th>
                                <td className="text-center">{value.stock}</td>
                            </tr>
                            <tr className="border">
                                <th>Added Date</th>
                                <td className="text-center">{value.added_date}</td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="text-center m-3">
                        <button className="btn btn-primary col-3"> <Link className="text-light" to={`/admin/book/${value.s_no}`}> Edit </Link> </button>
                    </div>
                </div>
                </div>
            ))
        }
        </>
    );
}