import React, { useEffect, useState } from 'react';
import './pharamacyform.css';
import { Link, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeartPulse } from '@fortawesome/free-solid-svg-icons';
import { Prescription } from '../prescriptionpage/prescription';
import axios from 'axios';

export function Pharamacyform() {

    let date = new Date();
    date.setDate(date.getDate());
    let displaydate =  date.getDate();
    let displaymonth = date.getMonth()+1;
    let displayyear = date.getFullYear();
    let startDate = (displayyear+'-'+displaymonth+'-'+displaydate);
    console.log(startDate)

    var { id } = useParams()
    const [patient_id, setpatient_id] = useState('');
    useEffect(() => {
        fetch("http://localhost:3005/getid/" + id)
            .then(data => data.json())
            .then((res) => {
                setpatient_id(res[0].patient_id)
                

            })
    }, [])


    function handlePrescription(event) {
        event.preventDefault()
        var Treament_date = document.getElementById('Treament_date').value;
        var patientid = document.getElementById("id").value;

        var logindetails = {
            Treament_date:Treament_date,
            patientid: patientid
        }
        if (patientid === '') {
            alert("enter the username")
        } else {
            axios.post("http://localhost:3005/prescriptionform", logindetails)
                .then((res) => {
                    if(res.data.status==="success"){
                        alert("Ready to show")
                    
                        // window.location.href = `/doctorpage/${id}`
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

    var { id } = useParams()
    const [tabletlist, settablet] = useState('');
    const [syruplist, setsyrup] = useState('');
    
    useEffect(() => {
        fetch("http://localhost:3005/gettable/" + id)
            .then(data => data.json())
            .then((res) => {
                settablet(res[0].tablet)
                setsyrup(res[0].syrup)
                

            })
    }, [])


    return (
        <>
            <header className='headerp'>
                <a href='#' className='logo'><FontAwesomeIcon icon={faHeartPulse} className='i' />medcare</a>

                <nav className='navbar'>
                    <Link to='/'>Home</Link>
                    <Link to='/loginpage'>Login</Link>
                </nav>
            </header>

            <section>
                <div className='container1'>
                    <div className='heading_col'>
                        <a href='#' className='logo'><FontAwesomeIcon icon={faHeartPulse} className='i' />medcare</a>
                        <form className='form-row1' onSubmit={handlePrescription}>
                        <input type="hidden" id='id' value={patient_id} required />
                            <div class="input-data1">
                                <input type="text" id='Treament_date' value={startDate} required />
                                <div class="underline"></div>
                            </div>
                            <div class="form-row submit-btn">
                                <div class="input-data1">
                                    <div class="inner"></div>
                                    <input type="submit" value="submit" />
                                </div>
                            </div>

                        </form>
                    </div>
                    <div className='form-row1 justify-content-between row'>
                        <div>
                            <h1>Tablet</h1>
                            <div className='tablet_border'>
                                {/* <h1>{tabletlist}</h1> */}
                                <ul>
                                    <li>{tabletlist}</li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            <h1>Syrup</h1>
                            <div className='tablet_border'>
                                {/* <h1>{syruplist}</h1> */}
                                <ul>
                                    <li>{syruplist}</li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            <h1>Add </h1>
                            <div className='tablet_border'>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}