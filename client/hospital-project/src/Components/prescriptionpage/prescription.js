import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './prescriptionpage.css';
import profilept from '../assets/person3.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeartPulse } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';


export function Prescription() {

    var { id } = useParams()
    const [fname, setfname] = useState('');
    const [lname, setlname] = useState('');
    const [roll, setroll] = useState('');
    const [phone, setphone] = useState();
    const [age, setage] = useState();
    const [gender, setgender] = useState('');
    const [ID, setID] = useState('');
    const [address, setaddress] = useState('');
    const [dob, setdob] = useState('');
    const [email, setemail] = useState('');
    const [profile, setprofile] = useState('');
    useEffect(() => {
        fetch("http://localhost:3005/getone/" + id)
            .then(data => data.json())
            .then((res) => {
                setfname(res[0].first_name)
                setlname(res[0].last_name)
                setroll(res[0].roll)
                setphone(res[0].phone)
                setID(res[0].id)
                setaddress(res[0].address)
                setdob(res[0].dob.slice(0, 10))
                setemail(res[0].email)
                setprofile(res[0].profilephoto)
                setage(res[0].age)
                setgender(res[0].gender)

            })
    }, [])


    function handleform(event) {
        event.preventDefault()

    var patientid = document.getElementById("patientid").value;
    var patientfname = document.getElementById('patientfname').value;
    var patientlname = document.getElementById('patientlname').value;
    let patientname = patientfname + patientlname;
    var age = document.getElementById("age").value;
    var gender = document.getElementById("gender").value;
    var doctorname = document.getElementById('doctorname').value;
    var hospitalname = document.getElementById("hospitalname").value;
    var hospitaladdress = document.getElementById("hospitaladdress").value;
    var doctorphone = document.getElementById("doctorphone").value;
    var patientweight = document.getElementById("patientweight").value;
    var patienttemp = document.getElementById("patienttemp").value;
    var disease = document.getElementById('disease').value;
    var treatment = document.getElementById("treatment").value;
    var tablet = document.getElementById("tablet").value;
    var syrup = document.getElementById('syrup').value;
    var advice = document.getElementById('advice').value;


    var userdetails = {
        patientid:patientid,
        patientname:patientname,
        patientweight:patientweight,
        age:age,
        patienttemp:patienttemp,
        gender:gender,
        doctorname:doctorname,
        hospitalname:hospitalname,
        hospitaladdress:hospitaladdress,
        doctorphone:doctorphone,
        disease:disease,
        treatment:treatment,
        tablet:tablet,
        syrup:syrup,
        advice:advice
    }


        if(doctorname === ''){
        alert("Enter The Fields")
    } else {

         axios.post("http://localhost:3005/prescription", userdetails)
            .then((res) => {
                if (res.data.status === "error") {
                    alert("Data Are Not Inserted")
                } else if (res.data.status === "success"){
                    alert("Registration Successfully")

                }
            })

    }

    }

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
                <div>
                    <div><h1 className='fheading_size header_mar'> <span>Medicial Prescription</span> Form</h1></div>
                </div>
            </section>
            <section className='form' id='home'>
                <div className='patient_form'>
                    <h1> <span>Patient </span> Details</h1>
                    <div className='img_size'>
                        <img src={profilept} class="img-thumbnail rounded-5" alt="..." />
                    </div>
                    <br />
                    <h1>{fname}{lname}</h1>
                    <h2> roll :{roll}</h2>
                    <h2>ph : {phone}</h2>
                    <h2>age :{age}</h2>
                    <h2>gender : {gender}</h2>
                    <h2>Date of Birth : {dob}</h2>
                    <h2>address : {address}</h2>

                </div>
                <div class="container">

                    <a href='#' className='logo'><FontAwesomeIcon icon={faHeartPulse} className='i' />medcare</a>

                    <form onSubmit={handleform}>
                        {/* <div class="form-row"> */}
                            {/* <div class="input-data"> */}
                            <input type="hidden" id='patientid' value={ID} required />
                            {/* <div class="underline"></div> */}
                            {/* <label for="">Patient ID</label> */}
                            {/* </div> */}
                            {/* <div class="input-data"> */}
                            <input type="hidden" id='patientfname' value={fname} required />
                            {/* <div class="underline"></div> */}
                            {/* <label for="">Patient Fname</label> */}
                            {/* </div> */}
                            {/* <div class="input-data"> */}
                            <input type="hidden" id='patientlname' value={lname} required />
                            {/* <div class="underline"></div> */}
                            {/* <label for="">Patient Lname</label> */}
                            {/* </div> */}
                        {/* </div> */}
                        {/* <div class="form-row hidden_box">
                            <div class="input-data "> */}
                        <input type="hidden" id='age' value={age} required />
                        {/* <div class="underline"></div> */}
                        {/* <label for="">Patient age</label> */}
                        {/* </div> */}
                        {/* <div class="input-data"> */}
                        <input type="hidden" id='gender' value={gender} required />
                        {/* <div class="underline"></div> */}
                        {/* <label for="">Patient gender</label> */}
                        {/* </div> */}
                        {/* </div> */}
                        <div class="form-row">
                            <div class="input-data">
                                <input type="text" id='doctorname' required />
                                <div class="underline"></div>
                                <label for="">Doctor Name</label>
                            </div>
                            <div class="input-data">
                                <input type="text" id='hospitalname' required />
                                <div class="underline"></div>
                                <label for="">hospital Name</label>
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="input-data">
                                <input type="text" id='hospitaladdress' required />
                                <div class="underline"></div>
                                <label for="">Hospital address</label>
                            </div>
                            <div class="input-data">
                                <input type="phone" id='doctorphone' required />
                                <div class="underline"></div>
                                <label for="">Doctor phoneNo</label>
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="input-data">
                                <input type="text" id='patientweight' required />
                                <div class="underline"></div>
                                <label for="">Patient Weight</label>
                            </div>
                            <div class="input-data">
                                <input type="text" id='patienttemp' required />
                                <div class="underline"></div>
                                <label for="">Patient Temperature</label>
                            </div>
                        </div>
                        <div>
                            <h1 className='heading_size'>Prescription<span>Form</span></h1>
                        </div>
                        <div class="form-row">
                            <div class="input-data">
                                <input type="text" id='disease' required />
                                <div class="underline"></div>
                                <label for="">Disease</label>
                            </div>
                            <div class="input-data">
                                <input type="text" id='treatment' required />
                                <div class="underline"></div>
                                <label for="">Treatment</label>
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="input-data textarea">
                                <textarea rows="8" id='tablet' cols="80" required></textarea>
                                <br />
                                <div class="underline"></div>
                                <label for="">Tablet list</label>
                                <br />
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="input-data textarea">
                                <textarea rows="8" id='syrup' cols="80" required></textarea>
                                <br />
                                <div class="underline"></div>
                                <label for="">Syrup</label>
                                <br />
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="input-data textarea">
                                <textarea rows="8" id='advice' cols="80" required></textarea>
                                <br />
                                <div class="underline"></div>
                                <label for="">Advice</label>
                                <br />
                            </div>
                        </div>
                        <div class="form-row submit-btn">
                            <div class="input-data">
                                <div class="inner"></div>
                                <input type="submit" value="submit" />
                            </div>
                        </div>
                    </form>
                </div>


            </section>
        </>
    );
}