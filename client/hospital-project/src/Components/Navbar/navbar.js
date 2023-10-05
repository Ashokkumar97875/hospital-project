import React from 'react';
import './navbar.css';
// import hospitallogo from '../assets/hospitalLogo.png';
import 'bootstrap/dist/css/bootstrap.css';
import register from '../assets/Register.gif';
import homeimage from '../assets/homeimage.gif';
import aboutus from '../assets/about_us.gif';
import person1 from '../assets/person1.webp'
import person2 from '../assets/person2.jpg'
import person3 from '../assets/person3.jpg'
import person4 from '../assets/person4.jpg'
import person5 from '../assets/person5.jpg'
import person6 from '../assets/person6.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faHeartPulse, faSquarePollVertical, faXmark } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faUserDoctor } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faNotesMedical } from '@fortawesome/free-solid-svg-icons';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { faPersonChalkboard } from '@fortawesome/free-solid-svg-icons';
import { Loginpage } from '../loginPage/loginpage';
import axios from "axios";
import { Link } from 'react-router-dom';


export function NavbarPage() {
    // let menu = document.querySelectorAll('#menu-btn');
    // let navbar = document.querySelectorAll('navbar');

    // function menu_items() {
    //     document.getElementById("navbar").classList.toggle(active);
    //   }

    // window.onscroll = () =>{
    //     menu.classList.remove('Xmark');
    //     navbar.classList.remove('active');
    // }
    function handleregister(event) {
        event.preventDefault()

   
    var fname = document.getElementById('fname').value;
    var lname = document.getElementById('lname').value;
    var gender = document.getElementById("gender").value;
    var age = document.getElementById("age").value;
    var dob = document.getElementById('dob').value;
    var phoneNo = document.getElementById("phoneNo").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var roll = document.getElementById("roll").value;
    var address = document.getElementById("address").value;
    var profile = document.getElementById('profile').value;
    

    var userdetails = {
        firstName:fname,
        lastName:lname,
        gender:gender,
        age:age,
        dob:dob,
        phone:phoneNo,
        roll:roll,
        address:address,
        email:email,
        password:password,
        profile:profile
    }

    // let Vemail = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/;
    // var passw=  /^[A-Za-z]\w{7,14}$/;

    // if (fname==='' && lname==" " && age == " " && dob == " " && phoneNo == " " && email.test(Vemail) && password.match(passw)) {
        if(fname === ''){
        alert("Enter The Fields")
    } else {
      
         axios.post("http://localhost:3005/register", userdetails)
            .then((res) => {
                if (res.data.status === "error") {
                    alert("Data Are Not Inserted")
                } else if (res.data.status === "success"){
                    alert("Registration Successfully")
                   
                }
            })

            document.getElementById('fname').value="";
            document.getElementById('lname').value="";
            document.getElementById("gender").value="";
            document.getElementById("age").value="";  
            document.getElementById('dob').value="";
            document.getElementById("phoneNo").value="";
            document.getElementById("email").value="";
            document.getElementById("password").value="";
            document.getElementById("roll").value="";
            document.getElementById("address").value="";
            document.getElementById('profile').value="";
        
    }



    }
    return (
        <>
            <html>
                {/* <div className='contact_navbar '>
                <p>commonhospital@gmail.com</p>
                <p>9838383833</p>
           </div> */}
                <header className='header'>
                    <a href='#' className='logo'><FontAwesomeIcon icon={faHeartPulse} className='i' />medcare</a>

                    <nav className='navbar'>
                        <a href='#home'>Home</a>
                        <a href='#services'>Services</a>
                        <a href='#about'>About</a>
                        <a href='#network'>Network</a>
                        <a href='#review'>Review</a>
                        <a href='#Signup'>Sign Up</a>
                        <Link to='/loginpage'>Login</Link>
                    </nav>
                    <div><button  id="menu-btn"><FontAwesomeIcon icon={faBars}/></button></div>
                    {/* <div><button  id="menu-btn" onClick={menu_items}><FontAwesomeIcon icon={faBars}/></button></div> */}
                    {/* <div id="menu-btn" onClick={menu_items}><FontAwesomeIcon icon={faBars} /><FontAwesomeIcon icon={faXmark} className='Xmark'/></div> */}
                </header>


                <section className='home row col' id='home'>
                    <div className='image'>
                        <img src={homeimage} />
                    </div>

                    <div className='content'>
                        <h3>stay safe, stay healthy</h3>
                        <p>securily Sharing information about the healthcare and show the essential data to the other person. 
                        </p>
                        <a href='#' className='btn'>Contact us<FontAwesomeIcon icon={faArrowRight} /></a>
                    </div>
                </section>

                <section id='network'>
                    <h1 className='heading'>our <span>network</span></h1>
                    <div className='icons-container'>
                        <div className='icons'>
                            <FontAwesomeIcon icon={faUserDoctor} className='i' />
                            <h3>140+</h3>
                            <p>Doctor</p>
                        </div>

                        <div className='icons'>
                            <FontAwesomeIcon icon={faUser} className='i' />
                            <h3>1040+</h3>
                            <p>Patient</p>
                        </div>

                        <div className='icons'>
                            <FontAwesomeIcon icon={faNotesMedical} className='i' />
                            <h3>80+</h3>
                            <p>Pharamacy</p>
                        </div>
                    </div>
                </section>

                <section className='services' id='services'>
                    <h1 className='heading'>our <span>services</span></h1>
                    <div className='box-container'>
                        <div className='box'>
                            <FontAwesomeIcon icon={faNotesMedical} className='i' />
                            <h3>Free storage</h3>
                            <p>Secure Sharing and Privacy Preserving of Personal health Record in Website</p>
                            <a href='#' className='btn'>learn more <span><FontAwesomeIcon icon={faChevronRight} /></span></a>
                        </div>

                        <div className='box'>
                            <FontAwesomeIcon icon={faPaperPlane} className='i' />
                            <h3>fast message</h3>
                            <p>All the information are stored in database about the patient and fastly transfar the information</p>
                            <a href='#' className='btn'>learn more <span><FontAwesomeIcon icon={faChevronRight} /></span></a>
                        </div>

                        <div className='box'>
                            <FontAwesomeIcon icon={faPersonChalkboard} className='i' />
                            <h3>Sensitive information</h3>
                            <p>All information of the patient stored security and show the essential information to the another people</p>
                            <a href='#' className='btn'>learn more <span><FontAwesomeIcon icon={faChevronRight} /></span></a>
                        </div>

                        <div className='box'>
                            <FontAwesomeIcon icon={faSquarePollVertical} className='i' />
                            <h3>Storage old hospital record</h3>
                            <p>Store the health test record from the old hospital and it will be in database and retieve it any times</p>
                            <a href='#' className='btn'>learn more <span><FontAwesomeIcon icon={faChevronRight} /></span></a>
                        </div>
                    </div>
                </section>

                <section className='about' id='about'>
                    <h1 className='heading'><span>about</span>us</h1>
                    <div className='row'>
                        <div className='image'>
                            <img src={aboutus} />
                        </div>
                        <div className='content'>
                            <h3>We take care of your healthy information</h3>
                            <p>This common hospital platform and anybady can access and use. we have three type of user doctor, patient, pharamacy owner. We show patient information to the doctor and the doctor can edit on the page and storage in database. Pharamacy person see only the table, sycrap, etc. we can not show the all details to the pharamacy owner. And we store the old hospital record and any time you use it.</p>
                            <p>We are together make paperless India and safe</p>
                            <a href='#' className='btn'>learn more <span><FontAwesomeIcon icon={faChevronRight} /></span></a>
                        </div>
                    </div>
                </section>

                <section className='review' id='review'>
                    <h1 className='heading'>people <span>review</span> </h1>
                    <div className='box-container'>
                        <div className='box'>
                            <img src={person1} />
                            <h3>john deo</h3>
                            <p>This website is real usefull store the information in secure manner</p>
                        </div>
                        <div className='box'>
                            <img src={person2} />
                            <h3>Ashok kumar</h3>
                            <p>This website is real usefull store the information in secure manner</p>
                        </div>
                        <div className='box'>
                            <img src={person3} />
                            <h3>Subash Chandra Bose</h3>
                            <p>This website is real usefull store the information in secure manner</p>
                        </div>
                        <div className='box'>
                            <img src={person4} />
                            <h3>Jerwin solman</h3>
                            <p>This website is real usefull store the information in secure manner</p>
                        </div>
                        <div className='box'>
                            <img src={person5} />
                            <h3>Harini</h3>
                            <p>This website is real usefull store the information in secure manner</p>
                        </div>
                        <div className='box'>
                            <img src={person6} />
                            <h3>Amudhavan</h3>
                            <p>This website is real usefull store the information in secure manner</p>
                        </div>
                    </div>
                </section>

                <section className='Signup' id='Signup'>
                    <h1 className='heading'><span>Sign up</span>now</h1>
                    <div className='row'>
                        <div className='image'>
                            <img src={register} />
                        </div>
                        <form onSubmit={handleregister}>
                            <h3>Join us</h3>
                            <input type='text' id='fname' placeholder='your first name' className='box' />
                            <input type='text' id='lname' placeholder='your last name' className='box' />
                            <select className='box' id='gender'>
                                <option>Select your gender</option>
                                <option>Male</option>
                                <option>Female</option>
                            </select>
                            <input type='text' id='age' placeholder='your age' className='box' />
                            <input type='date' id='dob' className='box' />
                            <input type='phone' id='phoneNo' placeholder='your phone number' className='box' />
                            <input type='email' id='email' placeholder='your email id' className='box' />
                            <input type='password' id='password' placeholder='your password' className='box' />
                            <select className='box' id='roll'>
                                <option>Select your roll</option>
                                <option>Doctor</option>
                                <option>Patient</option>
                                <option>Pharamacy</option>
                            </select>
                            <textarea placeholder='your address' id='address' className='box'></textarea>
                            <input type='file' id='profile' className='box'/>

                            <button type='submit' className='btn btn-primary'>Register</button>
                        </form>
                    </div>
                </section>

                {/* <section className='footer'>
                    <div className='box-container'>
                        <div className='box'>
                            <h3>Quick links</h3>
                            <a href='#'></a>
                        </div>
                    </div>
                </section> */}

            </html>





        </>
    );
}