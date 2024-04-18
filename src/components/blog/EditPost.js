import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../Navbar";
import { useSelector } from "react-redux";

function EditPost() {
    var user = useSelector(store => store.auth.user);
    const token = user?.token;
    const {postId} = useParams();
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [expiry_date, setExpiry_date] = useState('');
    let navigate = useNavigate();
    useEffect(()=>{
        axios.get('https://medicalstore.mashupstack.com/api/medicine/'+postId, {
            headers: { 'Authorization': "Bearer " + token }
        }).then(response=>{
            setTitle(response.data.name);
            setContent(response.data.company);
        })
    },[postId, token]);
    function updatePost(){
        axios.post('https://medicalstore.mashupstack.com/api/medicine/'+postId,{
            name: title,
            company: content,
            expiry_date: expiry_date
        }, {
            headers: { 'Authorization': "Bearer " + token }
        }).then(response=>{
            alert(response.data.message)
        })
        navigate('/blog/posts');
    }
    return <div>
        <Navbar/>
        <div className="container">
            <div className="row">
                <div className="col-8 offset-2">
                    <h1 className="text-center">Edit Post</h1>
                    <div className="form-group">
                        <label>Medicine Name:</label>
                        <input 
                        type="text" 
                        className="form-control" 
                        value={title} 
                        onChange={(event)=>{setTitle(event.target.value)}}
                        />
                    </div>
                    <div className="form-group">
                        <label>Company:</label>
                        <textarea 
                        className="form-control" 
                        value={content} 
                        onChange={(event)=>{setContent(event.target.value)}}
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
                    <div className="form-group">
                        <button className="btn btn-primary float-right" onClick={updatePost}>Submit</button>
                    </div>                    
                </div>
            </div>
        </div>
    </div>
}

export default EditPost;