const { Router } = require('express');
const assert = require("assert")
const multer = require('multer');
const path = require('path');
const User = require('./../models/information');
const Skills = require('./../models/dash-skills');
const Exper = require('./../models/dash-exper');
const Service = require('./../models/dash-service');
const Contact = require('./../models/dash-contact');



// ===multer file==//

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './public/upload');
  },
  filename: (req, file, cb) => {
    const randomNumber = Math.round(Math.random() * 1e9);
    const uniqueSuffix = `${Date.now()}-${randomNumber}`;
    cb(null, `${uniqueSuffix}-${file.originalname}`);
  },
});

const upload = multer({
  fileFilter: (req, { fieldname, mimetype, originalname }, cb) => {
    const isProfile = fieldname == 'user_image' && mimetype == 'image/jpeg';
    const isCV = fieldname == 'cv_file' && mimetype == 'application/pdf';

    if (isProfile) cb(null, true);
    else if (isCV) cb(null, true);
    else cb(new Error(`Sorry  The type of ${originalname} not support.`), false);
  },
  storage,
});

// ==routing==//
const router = Router();




/* GET index page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: ' User porfilo ',
  });
});
router.get('/index', function(req, res, next) {
  res.render('index', {
    title: ' User porfilo ',
  });
});
// Skills page
router.get('/dash-Skill', function(req, res, next) {
  Skills.find().then((result)=>{
    console.log(result);
    res.render('dash-skills', { skills:result});
  })
  });
// exper page
router.get('/dash-Exper', function(req, res, next) {
  Exper.find().then((result)=>{
    res.render('dash-exper', { exper:result});
    
    console.log(result);
    
  })
  });
// Service page
router.get('/dash-Service', function(req, res, next) {
  Service.find().then((result)=>{
    res.render('dash-service', { Service:result});
  console.log(result);
  })
  });

  // contact page
router.get('/dash-contact', function(req, res, next) {
  Contact.find().then((result)=>{
    res.render('dash-contact', { Contact:result});
  console.log(result);
  })
  });
// user operation
const userFilesHandler = upload.fields([
]);
//find
router.get('/dashboard', (req, res, next)=>{
  User.find().then((result) =>{
    res.render('dashboard', { data: result})
  })
})
//Add new skill to the view in the data tables section
router.post('/addskills', function(req, res, next) {
     
  var skillDetails = new Skills({
    categotry:req.body.categotry,
    skill_name: req.body.skill_name,
    progress_percent: req.body.progress_percent,
  });
   
  skillDetails.save();
        
console.log("skill was add")
res.redirect('/dash-Skill');

});

// Edit Skills
router.post('/Edit_skills', function(req, res, next){
  
  var item = {
    categotry:req.body.categotry,
    skill_name: req.body.skill_name,
   
    progress_percent: req.body.progress_percent,
  };
  var id = req.body.id;
  Skills.updateMany({"_id": id}, {$set: item}, item, function(err, result){
   
    console.log("item updated");
    console.log(item);
  })
  res.redirect('/dash-Skill');
});
//Delete skill item

router.get('/delete_skill/:id',function(req,res,next){
  Skills.deleteOne({"_id":req.params.id},function(err,result){
    console.log("item deleted");
  })
  res.redirect('/dash-Skill');

});

////////// add exper
router.post('/addexper', function(req, res, next) {
     
  var experDetails = new Exper({
    experince_name: req.body.experince_name,
    place:req.body.place,
    details:req.body.details,
    year: req.body.year,
  });
  experDetails.save();
console.log("experince was add")
res.redirect('/dash-Exper');

});

// Edit exper
router.post('/Edit_exper', function(req, res, next){
  var item = {
    experince_name: req.body.experince_name,
    place:req.body.place,
    details:req.body.details,
    year: req.body.year,
  };
  var id = req.body.id;
  Exper.updateMany({"_id": id}, {$set: item}, item, function(err, result){
   
    console.log("item updated");
    console.log(item);
  })
  res.redirect('/dash-Exper');
});

////////// add service
router.post('/addservice', function(req, res, next) {
     try{
      var serviceDetails = new Service({
        service_name: req.body.service_name,
        details:req.body.details,
      });
      
      serviceDetails.save();
    console.log("Service was add")
    res.redirect('/dash-Service');
     }catch{

     }
});

// Edit sevice
router.post('/Edit_service', function(req, res, next){
  var item = {
    service_name: req.body.service_name,
    details:req.body.details,
  };
  var id = req.body.id;
  Service.updateMany({"_id": id}, {$set: item}, item, function(err, result){
   
    console.log("item updated");
    console.log(item);
  })
  res.redirect('/dash-Service');
});



////////// add contact
router.post('/addcontact', function(req, res, next) {
     
  var contactDetails = new Contact({
   icon: req.body.icon,
   contact_name:req.body.contact_name,
   link:req.body.link,
  });
  contactDetails.save();
console.log("Contact was add")
res.redirect('/dash-contact');

});

// Edit Contact
router.post('/Edit_contact', function(req, res, next){
  var item = {
    icon: req.body.icon,
    contact_name:req.body.contact_name,
    link:req.body.link,
  };
  var id = req.body.id;
  Contact.updateMany({"_id": id}, {$set: item}, item, function(err, result){
   
    console.log("item updated");
    console.log(item);
  })
  res.redirect('/dash-contact');
});
router.get('*', function(req, res, next) {
  res.render('404', {
    title: ' Error not found ',
  });
});
module.exports = router;

