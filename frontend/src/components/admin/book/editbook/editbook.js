import React, { useEffect, useState } from "react";
import './editbook.css';
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

export function EditBook(){

    const navigate = useNavigate()
    var {s_no}=useParams()
    const[details,setDetails]=useState([])
    useEffect(()=>{
        axios.get("http://localhost:3012/getbook/"+s_no)
        .then(res=>setDetails(res.data))
    })

    const [edit,setEdit]=useState({
        id:"",
        book_title:"",
        author:"",
        stock:"",
        is_active:""
    })
    const handlenewbookvalue = (e) =>{
        setEdit(prev=>({...prev,[e.target.name]:e.target.value}))
    }
    
    const handleSubmit = async (event) =>{ 
        event.preventDefault();
       
        try{
            await axios.put("http://localhost:3012/editbook/"+s_no)
            .then(navigate("/admin/book"))
            
        } catch (error) {
            alert(error)
        }
        
    }

    const handleDelete = (s_no) =>{
        axios.delete('http://localhost:3012/deletebook/'+s_no)
        navigate("/admin/book")
    }

    return(
        <>
        {
            details.map((value,index)=>(

                <div key={value.s_no}>
            <div className="p-3">
                <Link to="/admin/book"><p>Back to Books</p></Link>
            </div>
            <div className="d-flex">
                    <div className="col-12">
                    <h2 className="text-center">Edit Book</h2>
                       <form>
                            <table className="editBookTable m-auto">
                                <tr>
                                    <td><label>Enter Book ID</label></td>
                                    <td><input type="text" name="id" id="id" onChange={handlenewbookvalue} className="form-control" placeholder={value.id} ></input></td>
                                </tr>
                                <tr>
                                    <td><label>Enter Book Title</label></td>
                                    <td><input type="text" name="book_title" onChange={handlenewbookvalue} id="book_title" className="form-control" placeholder={value.book_title} ></input></td>
                                </tr>
                                <tr>
                                    <td><label>Author</label></td>
                                    <td><input type="text" name="author" onChange={handlenewbookvalue} id="author" className="form-control" placeholder={value.author} ></input></td>
                                </tr>
                                <tr>
                                    <td><label>Stock</label></td>
                                    <td><input type="number" name="stock" onChange={handlenewbookvalue} id="stock" className="form-control" placeholder={value.stock} ></input> </td> 
                                </tr>
                                <tr>
                                    <td><label>Availability</label></td>
                                    <td>
                                        <select name="is_active" id="is_active" onChange={handlenewbookvalue} className="form-control">    
                                            <option value="">-Select One-</option>
                                            <option value="In-Stock">In-Stock</option>
                                            <option value="Out-of-Stock">Out-of-Stock</option>
                                        </select> 
                                    </td>
                                </tr>
                            </table>
                       <br/>
                        <div className="text-center">
                            <button onSubmit={handleSubmit} type="submit"className="btn btn-primary m-2 col-2">Save</button>
                            <button onClick={()=> handleDelete(value.s_no)} className="btn btn-danger m-2 col-2">Delete Book</button>
                        </div>
                       </form>
                    </div>
                </div>
        </div>
    ))
}
        </>
    );
}