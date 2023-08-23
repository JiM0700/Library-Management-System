import React, { useState } from "react";
import "./addbook.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export function AddBook(){

    const navigate = useNavigate()
    const [newBook,setNewBook]=useState({
        id:"",
        book_title:"",
        author:"",
        stock:"",
        is_active:""
    })

    const handlenewbookvalue = (e) =>{
        setNewBook(prev=>({...prev,[e.target.name]:e.target.value}))
    }

    const handleaddbook = async e =>{
        e.preventDefault();
        try{
            await axios.post("http://localhost:3012/addbook", newBook)            
            navigate("/admin/book")
        } catch(err) {
            alert(err);
        }
    }
    console.log(AddBook);
    return(
        <>
            <div>
                <div className="p-3">
                    <Link to="/admin/book"><p>Back to Books</p></Link>
                </div>
                <div className="d-flex">
                    <div className="col-12">
                        <h2 className="text-center">Add Book</h2>
                       <form>
                            <table className="addBookTable m-auto">
                                <tr>
                                    <td><label>Enter Book ID</label></td>
                                    <td><input type="text" name="id" className="form-control" onChange={handlenewbookvalue} placeholder="#"></input></td>
                                </tr>
                                <tr>
                                    <td><label>Enter Book Title</label></td>
                                    <td><input type="text" name="book_title" className="form-control" onChange={handlenewbookvalue} placeholder="#"></input></td>
                                </tr>
                                <tr>
                                    <td><label>Author</label></td>
                                    <td><input type="text" name="author" className="form-control" onChange={handlenewbookvalue} placeholder="#"></input></td>
                                </tr>
                                <tr>
                                    <td><label>Stock</label></td>
                                    <td><input type="number" name="stock" className="form-control" onChange={handlenewbookvalue} placeholder="#"></input> </td> 
                                   
                                </tr>
                                <tr>
                                    <td><label>Availability</label></td>
                                    <td>
                                        <select name="is_active" onChange={handlenewbookvalue} className="form-control">    
                                            <option value="">-Select One-</option>
                                            <option value="In-Stock">In-Stock</option>
                                            <option value="Out-of-Stock">Out-of-Stock</option>
                                        </select> 
                                    </td>        
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>
                                        <button className="btn btn-primary" onClick={handleaddbook}>Add Book</button>
                                    </td>
                                </tr>
                            </table>
                       </form>
                    </div>
                </div>
            </div>
        </>
    );
}