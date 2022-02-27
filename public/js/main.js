// const
var navMenu = document.getElementById("nav_menu"),
     navToggle = document.getElementById("nav_toggle"),
     navClose = document.getElementById("nav_close");

if(navToggle){
        nav_toggle.addEventListener("click",()=>{
        navMenu.classList.add("show_menu");
        navToggle.classList.remove("nav_toggle");
        });
     }

if(navClose){
    navClose.addEventListener("click", ()=>{
        navMenu.classList.remove("show_menu");
    });
}


//  menu actice and Remove menu
var navLink = document.querySelectorAll(".nav__link");

function linkAction(){
    //Active link
    navLink.forEach(n => n.classList.remove("active"));
    this.classList.add("active");
    //Remove menu mobile
    const navMenu = document.getElementById("nav-menu");
    navMenu.classList.remove("show_menu");
}
navLink.forEach(n => n.addEventListener("click", linkAction));


// skills open and close
var skillsContent = document.getElementsByClassName("skills_content"),
    skillsHeader = document.querySelectorAll(".skills_header");

    function toggleSkills(){
        let itemClass = this.parentNode.className;

        for(i=0; i < skillsContent.length;i++){
            skillsContent[i].className = "skills_content skills_close";
        }
        if(itemClass==="skills_content skills_close"){
            this.parentNode.className = "skills_content skills_open";
        }
    }
skillsHeader.forEach((el) =>{
el.addEventListener("click",toggleSkills);
});


// scrollUp

function scrollUp(){
    var scrollUp = document.getElementById("scroll-up");
    if(this.scrollY >= 560) scrollUp.classList.add("show-scroll");
    else scrollUp.classList.remove("show-scroll");
}
window.addEventListener("scroll",scrollUp);

// dark model

const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'fa-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'fa-moon' : 'fa-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'fa-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

// gallery
const filterItem = document.querySelector(".items");
const filterImg = document.querySelectorAll(".gallery .image");

window.onload = ()=>{ 
  filterItem.onclick = (selectedItem)=>{
    if(selectedItem.target.classList.contains("item")){ 
      filterItem.querySelector(".active").classList.remove("active");
      selectedItem.target.classList.add("active"); 
      let filterName = selectedItem.target.getAttribute("data-name"); 
      filterImg.forEach((image) => {
        let filterImges = image.getAttribute("data-name"); 
        if((filterImges == filterName) || (filterName == "all")){
            image.classList.remove("hide"); 
            image.classList.add("show"); 
          }else{
            image.classList.add("hide"); 
            image.classList.remove("show"); 
          }
        });
      }
    }

}




// form validation


var usrName = document.getElementById("usrname");
var mes_text = document.getElementById("txt1");
var submit = document.getElementById("submit");
//name

var Name_input=function(){
  console.log("here the name ");
  
    if(usrName.value.length < 3){
      document.getElementById("error").innerHTML="less 3";
      return false;
    }
    else if(usrName.value.length > 10  ){
      document.getElementById("error").innerHTML="more 10";
      return false;
    }
    else if(usrName.value.length >= 3 && usrName.value.length < 11  ){
      document.getElementById("error").innerHTML="ok";
    
      return true;
    }
    else{
     document.getElementById("error").innerHTML="ERROR";
     return false;
    }
}


let x = document.getElementById("email");
  // email
var email_input=function(){

  
  var atpos = x.value.indexOf("@");
  
  var dotpos = x.value.lastIndexOf(".");
  
  if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.value.length) {
  document.getElementById("error2").innerHTML="Enter valid e-mail address";
  return false;
  }else{
    document.getElementById("error2").innerHTML="True";
    return true;
  }
}
 //name
 var txtarea_input=function(){
    
    if(mes_text.value == "" || mes_text.value== null) {
         document.getElementById("error3").innerHTML="empty textarea";
         return false;
      }
      else if(mes_text.value.length < 20  ){
        document.getElementById("error3").innerHTML="more 20";
        return false;
      }
      else{
       document.getElementById("error3").innerHTML="true";
       
       return true;
      }
}


submit.addEventListener("click",(e)=>{
    e.preventDefault();
   console.log('test');
  //  Name_input();
  //  email_input();
  //  txtarea_input();
 console.log(Name_input());
 console.log(email_input());
 console.log(txtarea_input());
 
   
   if(Name_input() && 
   email_input()&&
   txtarea_input()){
     console.log('true');
     
    usrName.value='';
    x.value='';
    mes_text.value='';
     return true;
   }else{
     return false;
   }
}
)
