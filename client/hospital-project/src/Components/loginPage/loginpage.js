import React from 'react';
import './loginpage.css';
import loginpage from '../assets/loginpage.gif';
import axios from "axios";
 
export function Loginpage(){

    function handlelogin(event) {
        event.preventDefault()
        var email = document.getElementById("email").value;
        var password = document.getElementById("password").value;

        var logindetails = {
            email:email,
            password: password,
        }
        if (email === '') {
            alert("enter the username")
        }
        else if (password === "") {
            alert('enter the password')
        } else {
            axios.post("http://localhost:3005/login", logindetails)
                .then((res) => {
                    if(res.data.status==="success"){
                    var roll = res.data.roll
                    var id = res.data.id
                    if (roll === "Doctor") {
                        window.location.href = `/doctorpage/${id}`
                    } else if (roll === 'Patient') {
                        window.location.href = `/patientpage/${id}`
                    } else if (roll === 'Pharamacy') {
                        window.location.href = `/pharamacypage/${id}`
                    }
                } else if(res.data.status==='invalid') {
                    alert("your password invalid")
                }
                else if(res.data.status==="empty_set"){
                    alert("your username or password invalid")
                } else if(res.data.status==='error'){
                    alert("contact admin")
                }
                })
                
        }
    }

    return (
        <>
             <section className='Signup' id='Signup'>
                    <h1 className='heading'><span>Login up</span>now</h1>
                    <div className='row'>
                        <div className='image'>
                            <img src={loginpage} />
                        </div>
                        <form onSubmit={handlelogin}>
                            <h3 className='heading'>Join us</h3>
                            <input type='email' id='email' placeholder='your email id' className='box' />
                            <input type='password' id='password' placeholder='your password' className='box' />
                            <button type='submit' className='btn btn-primary'>Register</button>
                        </form>
                    </div>
                </section>
                    
        </>
    );
}