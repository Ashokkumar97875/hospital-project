import React, { useEffect, useState } from 'react';
import './prescriptionrecord.css';
import { Link, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeartPulse } from '@fortawesome/free-solid-svg-icons';
import profilephtoto from '../assets/person6.jpg';
import axios from 'axios';

export function Prescriptionrecord() {

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

    var { id } = useParams()
    console.log(id);
    const[datas,setDatas]=useState([])
    const [prescriptionNo, setprescriptionNo] = useState('');
    const [patientName, setpatientName] = useState('');
    const [doctorName, setdoctorName] = useState('');
    const [hospitalName, sethospitalName] = useState();
    const [hospitalLocation, sethospitalLocation] = useState();
    const [doctorPhone, setdoctorPhone] = useState('');
    const [disease, setdisease] = useState('');
    const [treatment, settreatment] = useState('');
    const [tablet, settablet] = useState('');
    const [syrup, setsyrup] = useState('');
    const [advice, setadvice] = useState('');
    const[Visiteddate,setVisiteddate] = useState('');
    useEffect(() => {
        fetch("http://localhost:3005/getallform/"+id)
            .then(data => data.json())
            .then(res=>setDatas(res))
            console.log(datas)
            // console.log(datas)
            // console.log(res)
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
                <div className='profile_border'>
                    <div>
                        <img src={profilephtoto} class="img-thumbnail img_size" alt="..." />
                    </div>
                    <div>
                        <h1>{fname}{lname}</h1>
                        <h1>{phone}</h1>
                        <h1>{gender}</h1>
                        <h1>{age}</h1>
                    </div>
                </div>
                <div className='main_border'>
                    <table>
                        <tr>

                        </tr>
                    </table>
                    <table class="table font_size">
                        <thead>
                            <tr>

                                <th scope="col">Prescription No</th>
                                <th scope="col">Patient Name</th>
                                <th scope="col">Doctor Name</th>
                                <th scope="col">Hospital Name</th>
                                <th scope="col">hospital Location</th>
                                <th scope="col">Doctor Phone</th>
                                <th scope="col">Disease</th>
                                <th scope="col">Treatment</th>
                                <th scope="col">Tablet</th>
                                <th scope="col">Syrup</th>
                                <th scope="col">Advice</th>
                                <th scope="col">Visited date</th>
                            </tr>
                        </thead>
                        {
                            datas.map((value,index)=>(
                                <>
                                
                                <tbody>
                                    <tr>
                                        {/* <td scope="row"></td> */}
                                        <td>{value.prescription_no}</td>
                                        <td>{value.patient_name}</td>
                                        <td>{value.doctor_name}</td>
                                        <td>{value.hospital_name}</td>
                                        <td>{value.hospital_location}</td>
                                        <td>{value.doctor_phone}</td>
                                        <td>{value.disease}</td>
                                        <td>{value.treatment}</td>
                                        <td>{value.tablet}</td>
                                        <td>{value.syrup}</td>
                                        <td>{value.descr_advice}</td>
                                        <td>{value.created_date}</td>
                                    </tr>   
                                </tbody>
                                </>
                            ))
                        }
                    </table>
                </div>
            </section>
        </>
    );
}