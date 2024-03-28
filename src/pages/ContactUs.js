import { useState } from "react";
import { useNavigate } from "react-router-dom"

export default function ContactUs(){
    const navigate = useNavigate();
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    function submitForm(){
        navigate('/submitform', {
            state: {
                "fullName" : fullName,
                "email" : email,
                "message" : message
            }
        });
    }

    return (
        <>
            <h1>Contact Us</h1>
            <div>
                <label>Full Name: </label>
                <input  type="text" 
                        name="fullName"
                        value={fullName}
                        onChange={(e) =>setFullName(e.target.value)}/>
            </div>
            <div>
                <label>Email: </label>
                <input  type="text" 
                        name="email"
                        value={email}
                        onChange={(e) =>setEmail(e.target.value)}/>
            </div>
            <div>
                <label>Message: </label>
                <textarea   name="message"
                            value={message}
                            onChange={(e) =>setMessage(e.target.value)}/>
            </div>
            <input type="submit" onClick={submitForm}></input>
        </>
    )
}