// const pool= require("../../config/databse");

const { createUser,getlocation,gethomepage,getspecialist,getdoctors,checkreg,gettocken,createbooking,liveview,getprofile,gethospital,login,addhospital,hospitalapprovel,addocotr,getapprovel,addtimeintervel,getslots,cancelbooking,addfund,getreghospital,getkeepedtime,getbookinghistory,getoffday,canceldate,deletetimeshedule,addleavedate,regdoctor,updatetstaus,catchAsyncErrors,updateprofile }=require("./user.controller");
const router=require("express").Router();
const path=require("path");
const multer=require("multer");




const storage=multer.diskStorage({
    destination:'./upload/hospitalimages',
    filename:(req,file,cb)=>{
       return cb(null,`${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})
const upload=multer({
    storage:storage,
    //filteration if it wanted
    // limits:{
    //     fileSize:1000000
    // }
})

const storage2=multer.diskStorage({
    destination:'./upload/docotrimages',
    filename:(req,file,cb)=>{
       return cb(null,`${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})
const upload2=multer({
    storage:storage2,
    //filteration if it wanted
    // limits:{
    //     fileSize:1000000
    // }
})


const storage3=multer.diskStorage({
    destination:'./upload/images',
    filename:(req,file,cb)=>{
       return cb(null,`${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})
const upload3=multer({
    storage:storage3,
    //filteration if it wanted
    // limits:{
    //     fileSize:1000000
    // }
})


router.post("/registration",createUser);
router.get("/getlocation",getlocation);
router.post("/gethomepage",gethomepage);
router.get("/getspecialist",getspecialist);
router.post("/getdoctors",getdoctors);
router.post("/checkreg",checkreg);
router.post("/gettocken",gettocken);
router.post("/createbooking",createbooking);
router.post("/liveview",liveview);
router.post("/getprofile",getprofile);
router.get("/gethospital",gethospital);

router.post("/login",login);
router.post("/addhospital",upload.single('image'),addhospital);
router.post("/addocotr",upload2.single('image'),addocotr);
router.post("/hospitalapprovel",hospitalapprovel);
router.post("/getaprrovel",getapprovel);

router.post("/addtimeintervel",addtimeintervel);
router.post("/getslots",getslots);

router.post("/cancelbooking",cancelbooking);
router.post("/addfund",addfund);

router.post("/getreghospital",getreghospital);
router.post("/getkeepedtime",getkeepedtime);

router.post("/getbookinghistory",getbookinghistory);
router.post("/getoffday",getoffday);
router.post("/canceldate",canceldate);
router.post("/deletetimeshedule",deletetimeshedule);

router.post("/addleavedate",addleavedate);

router.post("/regdoctor",regdoctor);
router.post("/updatetstaus",updatetstaus);
router.post("/activation",catchAsyncErrors);

router.post("/updateprofile",upload3.single('image'),updateprofile);

module.exports=router;