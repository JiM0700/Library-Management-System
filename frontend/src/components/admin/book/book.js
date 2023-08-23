import React, { useEffect, useState } from "react";
import './book.css';
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from "react-router-dom";

export function Book(){

    const [getAll,setGetAll] = useState([])
    useEffect(()=>{
        const getAllBook = async() => {
            try{
                const response = await axios.get("http://localhost:3012/getallbook")
                setGetAll(response.data)
                console.log(response);
            } catch(err) {
                console.log(err);
            }
        }
        getAllBook()
    },[])
    
    return(
        <>
        <div className="bookMainDiv m-3 d-flex">
            <div className="col-2 p-2 text-center">
                <button className="btn btn-primary"> <Link to='/admin/book/addbook'  className="text-light"> Add Book </Link></button>
            </div>
            <div className="col-10">
            <table className="bookTable text-center ">
                <thead>
                <tr>
                    <th>Id</th>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Stock</th>
                    <th>Availability</th>
                    <th>Manage</th>
                </tr>
                </thead>
                
        { getAll.map((value,index) => (
                    <tbody key={value.s_no}>
                    <tr className="book_table_body">

                        <td>{value.id}</td>
                        <td> <Link to={`/admin/book/detail/${value.s_no}`}>{value.book_title}</Link> </td>
                        <td>{value.author}</td>
                        <td>{value.stock}</td>
                        <td>{value.is_active}</td>
                        <td> <Link to={`/admin/book/${value.s_no}`}> <FontAwesomeIcon icon="fa-regular fa-pen-to-square" size="sm"/> </Link></td>
                    </tr>
                    </tbody>
                ))
            }   
            </table>
            </div>
        </div>
        </>
    );
}