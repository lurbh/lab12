import { useLocation } from "react-router-dom"

export default function SubmittedForm(){

    const location = useLocation();
    let fullName = location.state.fullName;
    let email = location.state.email;
    let message = location.state.message;

    return (
        <>
            <h1>Form Submitted</h1>
            <h3>Thank you for submnitting your feedback</h3>
            <h4>Your Name: {fullName}</h4>
            <h4>Your Email: {email}</h4>
            <p>{message}</p>
        </>
    )
}