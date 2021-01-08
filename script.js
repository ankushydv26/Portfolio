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