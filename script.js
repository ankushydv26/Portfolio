// import firebase from "./firbase/firebase"

let theme = localStorage.getItem('theme')

if (theme == null){
    setTheme('light')
}else{
    setTheme(theme)
}

let themeDots = document.getElementsByClassName("theme-dot");

for(var i = 0; i < themeDots.length; i++){
    themeDots[i].addEventListener('click' , function(){
        let mode = this.dataset.mode;
        // console.log('click' , mode)
        setTheme(mode)
    })
}


function setTheme(mode){
    if(mode == 'light'){
        document.getElementById('theme-style').href = 'index.css'
    }
    if(mode == 'blue'){
        document.getElementById('theme-style').href = 'blue.css'
    }
    if(mode == 'green'){
        document.getElementById('theme-style').href = 'green.css'
    }
    if(mode == 'purple'){
        document.getElementById('theme-style').href = 'purple.css'
    }
    if(mode == 'gsky'){
        document.getElementById('theme-style').href = 'gsky.css'
    }
    localStorage.setItem('theme' , mode)

}

const text  ="Something something Nothing nothing!!!!! :smile:";

var i = 0;
var txt = 'Hi , My name is Ankush Kumar ';
var speed = 100;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
typeWriter()


//firebase for contact me forum



var firebaseConfig = {
    apiKey: "AIzaSyCfAcbYhDnw01oNYdrqR3azI1upC5yCeDQ",
    authDomain: "message-from-job.firebaseapp.com",
    projectId: "message-from-job",
    storageBucket: "message-from-job.appspot.com",
    messagingSenderId: "619482372606",
    appId: "1:619482372606:web:53a838c4cdfb72a7d908af",
    measurementId: "G-PL5FQPLDPK"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//   firebase.analytics();
document.getElementById("contact").addEventListener("submit", submitForum);

//Reference  message collection

var msgRef = firebase.database().ref('messageFromJob');

function submitForum(e){
    e.preventDefault();
    // var name = getInputVal("name")
    // var subject = getInputVal("subject")
    // var email = getInputVal("email")
    // var message = getInputVal("message")
    // var date = new Date()
    let name = document.getElementById('name').value;
    let CompanyName = document.getElementById('company').value;
    let email = document.getElementById('email').value;
    let message  = document.getElementById('message').value;


    // console.log()
    saveFeed(name, CompanyName ,email,message)

    document.querySelector(".alert").style.display= 'block';
    setTimeout(() => {
        document.querySelector(".alert").style.display= 'none';

    }, 3000);
    
    document.getElementById('contact').reset()
}
function saveFeed(name, CompanyName, email , message){
    var newMsg = msgRef.push()
    newMsg.set({
        name: name,
        CompanyName: CompanyName,
        email:email,
        message: message,
        // date:new Date()
    })
}

// function getInputVal(id){
//   return  document.getElementById(id).value;
// }
