import React from 'react';
import './pharamacypin.css';
import generate from '../assets/generte.gif';
import { Link } from 'react-router-dom';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeartPulse } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

export function Pharamacypingenerte() {

    function handlelogin(event) {
        event.preventDefault()
        var id = document.getElementById("pinnum").value;

        var logindetails = {
            id:id
        }
        if (id === '') {
            alert("enter the username")
        } else {
            axios.post("http://localhost:3005/pin", logindetails)
                .then((res) => {
                    if(res.data.status==="success"){
                    var roll = res.data.roll
                    var id = res.data.id
                    if (roll === "Doctor") {
                        // window.location.href = `/doctorpage/${id}`
                        alert("patient pin number is invalid")
                    } else if (roll === 'Patient') {
                        window.location.href = `/pharamacyform/${id}`
                    } else if (roll === 'Pharamacy') {
                        // window.location.href = `/pharamacypage/${id}`
                        alert("patient pin number is invalid")
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
        <header className='header'>
                    <a href='#' className='logo'><FontAwesomeIcon icon={faHeartPulse} className='i' />medcare</a>

                    <nav className='navbar'>
                        <Link to='/'>Home</Link>
                        <Link to='/loginpage'>Login</Link>
                    </nav>
                    </header>
       

                <section className='home row col' id='profile'>
                    <div className='image'>
                        <img src={generate} />
                        {/* <img src={profile}/> */}
                    </div>

                    <div className='content'>
                        <h3>Enter your patient security pin</h3>
                        <form onSubmit={handlelogin}>
                        <table>
                            
                            <tr>
                               
                    <th><input type='text' id='pinnum' className='box_size' placeholder='your pin'/></th>
                    <th><button type='submit' className='btn btn-primary'>GET INTOs<FontAwesomeIcon icon={faArrowRight} /></button></th> 
                            </tr>
                            
                        </table>
                        </form>
                        {/* <Link to='/genertpin' className='btn'>Contact us<FontAwesomeIcon icon={faArrowRight} /></Link> */}
                    </div>
                </section>
        </>
    );
}