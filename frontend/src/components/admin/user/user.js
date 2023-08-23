import React, { useEffect, useState } from "react";
import './user.css'
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export function User() {

    const [getUser, setGetUser] = useState([])
    useEffect(() => {
        const getAllUser = async () => {
            try {
                const response = await axios.get("http://localhost:3012/getalluser")
                setGetUser(response.data)
                console.log(response);
            } catch (err) {
                console.log(err);
            }
        }
        getAllUser()
    }, [])


    return (
        <>
            <div className="d-flex m-3">
                <div className="col-2 p-2"></div>
                <div className="userMainDiv col-10">
                    <table className=" userTable text-center">
                        <thead>
                            <tr>
                                <th>S.No</th>
                                <th>Name</th>
                                <th>EmailID</th>
                                <th>Password</th>
                                <th>Created Time</th>
                                <th>Active Status</th>
                                <th>Manage</th>
                            </tr>
                        </thead>

                        {getUser.map((value, index) => (
                            <tbody key={value.s_no}>
                                <tr className="user_table_body">

                                    <td>{value.s_no}</td>
                                    <td>{value.username}</td>
                                    <td>{value.email}</td>
                                    <td>{value.password}</td>
                                    <td>{value.create_time}</td>
                                    <td>{value.is_active}</td>
                                    <td><FontAwesomeIcon icon="fa-regular fa-pen-to-square" size="sm" /></td>
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