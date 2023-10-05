// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NavbarPage } from './Components/Navbar/navbar';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import { Loginpage } from './Components/loginPage/loginpage';
import { Menupage } from './Components/menubar/menu';
import { Patientpage } from './Components/patientpage/patient';
import { Doctordetails } from './Components/Doctorpage/doctor';
import { Pharamacypage } from './Components/Pharamacy/pharamacy';
import { Genertpin } from './Components/patientvisit/generatingpin';
import { Prescription } from './Components/prescriptionpage/prescription';
import { Pharamacyform } from './Components/pharamacyprescform/pharamacyform';
import { Pharamacypingenerte } from './Components/pharamacygenerte/pharamacypingen';
import { Prescriptionrecord } from './Components/prescriptionrecord/prescriptionrecord';
// import '../src/Components/desgin.css';

function App() {
  return (
    <>
     {/* <Prescription/> */}
     {/* <Patientpage/> */}
    {/* <NavbarPage/> */}
   
    {/* Loginpage */}
   {/* <Doctordetails/>  */}
   {/* <Genertpin/> */}
  
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<NavbarPage/>}/>
          <Route path='/loginpage' element={[<Loginpage/>, <Menupage/>]} />
          <Route path='/patientpage/:id' element={<Patientpage/>}/>
          <Route path='/doctorpage/:id' element={<Doctordetails/>}/>
          <Route path='/pharamacypage/:id' element={<Pharamacypage/>}/>
          <Route path='/genertpin' element={<Genertpin/>}/>
          <Route path='/pharamacypin' element={<Pharamacypingenerte/>}/>
          <Route path='/prescription/:id' element={<Prescription/>}/>
          <Route path='/pharamacyform/:id' element={<Pharamacyform/>}/>
          <Route path='/prescriptionrecord/:id' element={<Prescriptionrecord/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
