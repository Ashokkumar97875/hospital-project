import React, { useEffect, useState } from "react";
import './patientpage.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeartPulse } from '@fortawesome/free-solid-svg-icons';
import { Link, useParams } from "react-router-dom";
import patientimage from '../assets/patientimage.gif';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import patientprofile from '../assets/person6.jpg';

export function Patientpage(){

    var {id} = useParams()
    const[fname,setfname] = useState('');
    const[lname,setlname] = useState('');
    const[roll,setroll] = useState('');
    const[phone,setphone] = useState( );
    const[ID,setID] = useState('');
    const[address,setaddress] = useState('');
    const[dob,setdob] = useState('');
    const[email,setemail] = useState('');
    const[profile,setprofile] = useState('');
    useEffect(()=>{
        fetch("http://localhost:3005/getone/"+id)
        .then(data=>data.json())
        .then((res)=>{
            setfname(res[0].first_name)
            setlname(res[0].last_name)
            setroll(res[0].roll)
            setphone(res[0].phone)
            setID(res[0].id)
            setaddress(res[0].address)
            setdob(res[0].dob.slice(0, 10))
            setemail(res[0].email)
            setprofile(res[0].profilephoto)

    })
    },[])

    return(
        <>
             <header className='header'>
                    <a href='#' className='logo'><FontAwesomeIcon icon={faHeartPulse} className='i' />medcare</a>

                    <nav className='navbar'>
                        <a href='#profile'>profile</a>
                        <Link to ={`/prescriptionrecord/${id}`}>Pescription Record</Link>
                    </nav>
                </header>

                <section className='home row col' id='profile'>
                    <div className='image'>
                        <img src={patientimage} />
                        
                    </div>

                    <div className='content'>
                   
                    <img src={patientprofile} class="img-thumbnail img_siz rounded-5" alt="..."/>
                        <table>
                            <tr>
                                <th><h1>Welcome back </h1></th>&#160; &#160;
                                <th><h2>{fname}{lname}</h2></th>
                                </tr><br/><br/>
                                <tr>
                                <th><span>User ID &#160;:</span></th>&#160; &#160;
                                <th>{ID}</th>
                                </tr>
                                <tr>
                                <th><span>dob &#160;:</span></th>&#160; &#160;
                                <th>{dob}</th>
                                </tr>
                                <tr>
                                <th><span>Phone No &#160;:</span></th>&#160; &#160;
                                <th>{phone}</th>
                                </tr>
                                <tr>
                                <th><span>Roll No &#160;:</span></th>&#160; &#160;
                                <th>{roll}</th>
                                </tr>
                                <tr>
                                <th><span>address &#160;:</span></th>&#160; &#160;
                                <th>{address}</th>
                                </tr>
                                <tr>
                                <th><span>Email &#160;:</span></th>&#160; &#160;
                                <th>{email}</th>
                            </tr>
                        </table>
                        <a href='#' className='btn'>Contact us<FontAwesomeIcon icon={faArrowRight} /></a>
                    </div>
                </section>
              
        </>
    );
}