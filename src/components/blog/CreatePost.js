
import { useSelector } from "react-redux";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar";


function CreatePost() {
    const [name, setName] = useState('');
    const [company, setCompany] = useState('');
    const [expiry_date, setExpiry_date] = useState('');
    var navigate = useNavigate();
    var user = useSelector(store => store.auth.user);
    var token = user?.token;

    function addPost() {
        axios.post('https://medicalstore.mashupstack.com/api/medicine', {
            name: name,
            company: company,
            expiry_date: expiry_date
        }, {
            headers: { 'Authorization': "Bearer " + token }
        }).then(response => {
            navigate('/blog/posts');
        });
    }

    return (
        <div>
            <Navbar></Navbar>
            <div className="container">
                <div className="row">
                    <div className="col-8 offset-2">
                        <h1 className="text-center">Add Medicines</h1>
                        <div className="form-group">
                            <label>Medicine Name:</label>
                            <input
                                type="text"
                                className="form-control"
                                value={name}
                                onChange={(event) => { setName(event.target.value) }}
                            />
                        </div>
                        <div className="form-group">
                            <label>Company:</label>
                            <textarea
                                className="form-control"
                                value={company}
                                onChange={(event) => { setCompany(event.target.value) }}
                            />
                        </div>
                        <div className="form-group">
                            <label>Expiry date:</label>
                            <input
                                type="date"
                                className="form-control"
                                value={expiry_date}
                                onChange={(event) => {
                                    setExpiry_date(event.target.value);
                                }}
                            />
                        </div>
                        <div className="form-group"><br />
                            <button
                                className="btn btn-primary mx-auto d-block"
                                onClick={addPost}
                                style={{ width: '200px', height: '50px' }}
                            >
                                Submit
                            </button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

// Wrap CreatePost with checkAuth
export default CreatePost;
