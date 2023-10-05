// const variable = require("package_name");

const express = require("express")
const cors = require("cors")
const bodyparser = require("body-parser")
const mysql = require("mysql")
const crypto=require("crypto")
const multer = require('multer')
const path = require ("path");


var storeex = express()
storeex.use(cors())
storeex.use(bodyparser.json())
storeex.use(express.json())
storeex.use(bodyparser.urlencoded({ extended: true }))
storeex.use(express.static('public'))
 
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null,'public/image')
    },
    filename: (req, file, cb) =>{
    cb(null, file.fieldname + "_" + Date.now() + path.extname(file.originalname));
    }
})

const upload = multer({
    storage: storage
})
let localdb = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Ashok978750$",
    database: "hospital_project"
})
localdb.connect((error) => {
    if (error) {
        console.log(error)
    } else {
        console.log("db connected")
    }
})

// const storage = multer.memoryStorage();
// const upload = multer({ storage: storage });





// var randomstring = require("randomstring");
// let rand = "DO"+randomstring.generate(7);

// console.log(rand);

// let startDate = new Date();
// startDate.setDate(startDate.getDate());
// let displaydate = startDate.getDate();
// let displaymonth = startDate.getMonth() + 1;
// let displayyear = startDate.getFullYear();
// let todaydate = displaydate + '/' + displaymonth + '/' + displayyear;
// console.log(todaydate)

storeex.get('/getAll', (request, response) => {
    const selectquery = 'select * from users_list'
    localdb.query(selectquery, (error, result) => {
        if (error) {
            response.send(error);
        } else {
            response.send(result)
        }
    })
})

storeex.post('/register', upload.single('profile'),(req,res)=>{
   
    let sno=crypto.randomUUID().substring(0, 5);
    let dates=new Date();
    var cdate=dates.toISOString().substring(0,10)

    // const image = req.file.filename;

    // const imagepath = 'localhost:3005/public/image'

    let{firstName,lastName,gender,age,dob,phone,roll,address,email,password,profile}=req.body
    console.log(profile);
    let insertQuery=`insert into  hospital_registration(id,first_name,last_name,gender,age,dob,phone,roll,address,email,password,profilephoto,created_by,updated_by,created_date,updated_date,is_active)values('${sno}',?,?,?,?,?,?,?,?,?,?,?,'${sno}','${sno}','${cdate}','${cdate}',1) `
    localdb.query(insertQuery,[firstName,lastName,gender,age,dob,phone,roll,address,email,password,profile],(error,result)=>{
        if(error){
            res.send({"status":"error"})
            console.log(error)
        }else{
            res.send({"status":"success"})
        }

    })
})

storeex.post('/login', (request,response)=>{
    let{email, password} = request.body;
    let loginquery = 'select * from hospital_registration where email=?'
    localdb.query(loginquery,[email],(error, result)=>{
        if(error){
            response.send({"status":"error"})
        } else if(result.length>0){
            let dbemail = result[0].email;
            let dbpassword = result[0].password;
            let id=result[0].id;
            let roll=result[0].roll;
            if(dbemail===email && dbpassword===password){
                response.send({"status":"success","id":id,"roll":roll})
            } else{
                response.send({"status":"invalid"})
            }
        } else{
            response.send({"status":"empty_set"})
        }
    })
})

storeex.post('/prescriptionform', (request,response)=>{
    let{Treament_date, patientid} = request.body;
    let loginquery = 'select * from prescription where patient_id=?'
    localdb.query(loginquery,[patientid],(error, result)=>{
        if(error){
            response.send({"status":"error"})
        } else if(result.length>0){
            let dbpatientid = result[0].patient_id;
            let dbcreatedby = result[0].created_by;
            if(dbpatientid===patientid){
                response.send({"status":"success","patient_id":dbpatientid,"created_by":dbcreatedby})
            } else{
                response.send({"status":"invalid"})
            }
        } else{
            response.send({"status":"empty_set"})
        }
    })
})

storeex.post('/pin', (request,response)=>{
    let{id} = request.body;
    let loginquery = 'select * from hospital_registration where id=?'
    localdb.query(loginquery,[id],(error, result)=>{
        if(error){
            response.send({"status":"error"})
        } else if(result.length>0){
            // let dbemail = result[0].email;
            // let dbpassword = result[0].password;
            let dbid=result[0].id;
            let dbroll=result[0].roll;
            if(dbid === id){
                response.send({"status":"success","id":dbid,"roll":dbroll})
            } else{
                response.send({"status":"invalid"})
            }
        } else{
            response.send({"status":"empty_set"})
        }
    })
})

storeex.get('/getone/:id', (request, response)=>{
    let {id} = request.params
    let getonequerry = 'select * from hospital_project.hospital_registration where id=?'
    localdb.query(getonequerry,[id], (error,result)=>{
        if(error){
            response.send({"status":"error"})
            console.log(error)
        }
        else{
            response.send(result)
            console.log(result)
        }
    })
})

storeex.get('/getid/:id', (request, response)=>{
    let {id} = request.params
    let getonequerry = 'select * from hospital_project.prescription where patient_id=?'
    localdb.query(getonequerry,[id], (error,result)=>{
        if(error){
            response.send({"status":"error"})
            console.log(error)
        }
        else{
            response.send(result)
            console.log(result)
        }
    })
})

storeex.get('/gettable/:id', (request, response)=>{
    let{id} = request.params;
    let getonequerry = 'select * from hospital_project.prescription where patient_id=?'
    localdb.query(getonequerry,[id], (error,result)=>{
        if(error){
            response.send({"status":"error"})
            console.log(error)
        }
        else{
            response.send(result)
            console.log(result)
        }
    })
})

storeex.post('/prescription',(req,res)=>{
   
    let sno=crypto.randomUUID().substring(0, 5);
    let dates=new Date();
    var cdate=dates.toISOString().slice(0,10)

    let{patientid,patientname,patientweight,age,patienttemp,gender,doctorname,hospitalname,hospitaladdress,doctorphone,disease,treatment,tablet,syrup,advice}=req.body
    let insertQuery=`insert into  prescription(prescription_no,patient_id,patient_name,patient_weight,patient_age,patient_temperature,gender,doctor_name,hospital_name,hospital_location,doctor_phone,disease,treatment,tablet,syrup,descr_advice,created_by,updated_by,created_date,updated_date)values('${sno}',?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,'${sno}','${sno}','${cdate}','${cdate}') `
    localdb.query(insertQuery,[patientid,patientname,patientweight,age,patienttemp,gender,doctorname,hospitalname,hospitaladdress,doctorphone,disease,treatment,tablet,syrup,advice],(error,result)=>{
        if(error){
            res.send({"status":"error"})
            console.log(error)
        }else{
            res.send({"status":"success"})
        }

    })
})

storeex.get('/getallform/:id', (request, response)=>{
    let {id} = request.params;
    console.log(id)
    let getonequerry = 'select * from hospital_project.prescription where patient_id = ?'
    localdb.query(getonequerry,[id], (error,result)=>{
        if(error){
            response.send({"status":"error"})
            console.log(error)
        }
        else{
            response.send(result)
            console.log(result)
        }
    })
})

storeex.listen(3005, () => {
    console.log("your port is running in 3005")
})

// storeex.get('/getallform', (request, response) => {
//     let{id} = request.params;
//     const selectquery = 'select * from users_list where patient_id=?'
//     localdb.query(selectquery, [id], (error, result) => {
//         if (error) {
//             response.send(error);
//         } else {
//             response.send(result)
//         }
//     })
// })


