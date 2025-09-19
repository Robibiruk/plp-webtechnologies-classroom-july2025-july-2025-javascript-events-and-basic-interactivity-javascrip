var btn = document.getElementById('clickButton');
var mainbody = document.querySelector("body");
var sidebarr = document.getElementById('sidebar');
var tooglebutton = document.getElementById('hamicon');
var btnIncreaseFont = document.getElementById('btn-increase');
var btnDecreaseFont = document.getElementById('btn-decrease');
var navitems = document.getElementById('items');
var paragraphItem = document.getElementsByTagName('p');
var h2tagitem = document.getElementsByTagName('h2');
var contactcontainer =document.getElementById('contact-container');
var contactform = document.getElementById('contact-form');
var inputs = contactform.querySelectorAll('input');
var textareas = contactform.querySelectorAll('textarea');
var greet = document.getElementById('greet');
var defaultbutton = document.getElementById('default');
var btn2 = document.getElementById('btn');
var namee = document.getElementById('name');
var emaill = document.getElementById('email');
var messagee = document.getElementById('message');
var glow = document.getElementById('letter-btn');


// function onBtnClick(){
//     mainbody.style.backgroundColor = "rgb(" + Math.floor(Math.random() * 255) +", "+ Math.floor(Math.random() * 255) +", "+ Math.floor(Math.random() * 255) +")"
//     btn.style.backgroundColor = "white"
// }

// Dark and light toogle button

var isWhite = true;

btn.addEventListener('click', function(){
    document.body.classList.toggle('dark-mode');
    if (isWhite) {
        mainbody.style.backgroundColor = 'white';
        btn.classList.remove('fa-duotone', 'fa-solid', 'fa-sun')
        btn.classList.add('fa-solid', 'fa-moon')
        btn.style.color = 'black';
        tooglebutton.style.color = 'black';
        navitems.style.color = 'black';
        btn.style.cursor = 'pointer';

        for (let i = 0; i < inputs.length; i++) {
            inputs[i].style.backgroundColor = 'rgb(49, 50, 51)';
            inputs[i].style.color = 'white';
        }
        for (let i = 0; i < textareas.length; i++) {
            textareas[i].style.backgroundColor = 'rgb(49, 50, 51)';
            textareas[i].style.color = 'white';
        }

        document.body.insertAdjacentHTML('beforeend', `
            <style id="form-placeholder-style">
                #contact-form input::placeholder,
                #contact-form textarea::placeholder {
                    color: white !important;
                    opacity: 1;
                }
            </style>
        `);

        for (let i = 0; i < h2tagitem.length; i++) {
    h2tagitem[i].style.color = 'black';
}
        for (let i = 0; i < paragraphItem.length; i++) {
    paragraphItem[i].style.color = 'black';
}
        
    } else {
        mainbody.style.backgroundColor = 'rgb(49, 50, 51)';
        btn.classList.remove('fa-solid', 'fa-moon')
        btn.classList.add('fa-duotone', 'fa-solid', 'fa-sun')
        btn.style.color = 'white';
        tooglebutton.style.color = 'white';
        navitems.style.color = 'white';
        btn.style.cursor = 'pointer';

        for (let i = 0; i < inputs.length; i++) {
            inputs[i].style.backgroundColor = 'white';
            inputs[i].style.color = 'rgb(49, 50, 51)';
        }
        for (let i = 0; i < textareas.length; i++) {
            textareas[i].style.backgroundColor = 'white';
            textareas[i].style.color = 'rgb(49, 50, 51)';
        }
        // Change placeholder color to black
        var styleTag = document.getElementById('form-placeholder-style');
        if (styleTag) styleTag.remove();
        document.body.insertAdjacentHTML('beforeend', `
            <style id="form-placeholder-style">
                #contact-form input::placeholder,
                #contact-form textarea::placeholder {
                    color: black !important;
                    opacity: 1;
                }
            </style>
        `);

        for (let i = 0; i < h2tagitem.length; i++) {
    h2tagitem[i].style.color = 'white';
}
        for (let i = 0; i < paragraphItem.length; i++) {
    paragraphItem[i].style.color = 'white';
}
    }
    isWhite = !isWhite;
});

// Nav bar hide and show eventlistener while onclick

tooglebutton.addEventListener('click', function(){
    if(sidebarr.classList.contains('hide')){
        sidebarr.classList.remove('hide');
        sidebarr.classList.add('show');
        tooglebutton.classList.remove('fas', 'fa-bars');
        tooglebutton.classList.add('fa-solid', 'fa-xmark');
    } else{
        sidebarr.classList.add('hide');
        sidebarr.classList.remove('show');
        tooglebutton.classList.add('fas', 'fa-bars');
        tooglebutton.classList.remove('fa-solid', 'fa-xmark');
    }

})

// Font increase and decrease button

// var initialfontSize = (window.getComputedStyle(greet).fontSize);
// var newfontSize = parseInt(initialfontSize.substr(0, (initialfontSize.length - 2)));


// function increaseFont(){
//     if (newfontSize >= 70) return;{
//         newfontSize += 2
//         greet.style.fontSize = newfontSize + 'px';
//         return;
//     }
// }

// function decreaseFont(){
//     if (newfontSize <= 12) return;{
//         newfontSize -= 2
//         greet.style.fontSize = newfontSize + 'px';
//         return;
//     }
// }

// function defaultchange() {
//     newfontSize = parseInt(initialfontSize.substr(0, (initialfontSize.length - 2)));
//     greet.style.fontSize = newfontSize + 'px';
// }

// btnIncreaseFont.addEventListener('click', increaseFont)
// btnDecreaseFont.addEventListener('click', decreaseFont)
// defaultbutton.addEventListener('click', defaultchange)


// contact form event listener
namee.addEventListener('input', function(event){
    var currentvalue = event.target.value;
    currentvalue = currentvalue.toUpperCase();
    // console.log(currentvalue);
    namee.value = currentvalue;
})

// namee.addEventListener('focus', function(){
//     console.log('Elemet Focused')
// })

// namee.addEventListener('blur', function(){
//     console.log('Element blured')
// })

// Form validation feedback

function getDefaultInputBg() {
    // check if body has dark-mode class
    return document.body.classList.contains('dark-mode') ? 'rgb(49,50,51)' : 'white';
}

// Name validation
namee.addEventListener('input', function() {
    const nameValid = /^[A-Za-z\s]*$/.test(namee.value.trim());
    if (!nameValid) {
        namee.style.backgroundColor = 'lightcoral';
    } else {
        namee.style.backgroundColor = getDefaultInputBg();
    }
});

// Email validation
emaill.addEventListener('input', function() {
    if (!emaill.value.includes('@')) {
        emaill.style.backgroundColor = 'lightcoral';
    } else {
        emaill.style.backgroundColor = getDefaultInputBg();
    }
});

// On form submit
contactform.addEventListener('submit', function(e){
    e.preventDefault(); // prevent page reload

    let nameValid = /^[A-Za-z\s]+$/.test(namee.value.trim());
    let emailValid = emaill.value.includes('@');
    let messageValid = messagee.value.trim().length > 0; // any non-empty message

    if(!nameValid || !emailValid || !messageValid){
        alert("Please fix the highlighted fields before submitting!");
    } else {
        alert("Form submitted successfully!");
        contactform.reset();
    }
});


// Keyboard sound game and glow effect
document.body.addEventListener('keydown', function(e){
    var keyCode = e.keyCode;
    if(keyCode === 65){
        var audio = new Audio('assets/clap.wav');
        audio.play();
        }
});

document.body.addEventListener('keydown', function(e){
    var keyCode = e.keyCode;
    if(keyCode === 83){
        var audiohi = new Audio('assets/hihat.wav');
        audiohi.play();
        }
});

document.body.addEventListener('keydown', function(e){
    var keyCode = e.keyCode;
    if(keyCode === 68){
        var audioki = new Audio('assets/kick.wav');
        audioki.play();
        }
});

document.body.addEventListener('keydown', function(e){
    var keyCode = e.keyCode;
    if(keyCode === 70){
        var audioop = new Audio('assets/openhat.wav');
        audioop.play();
        }
});
document.body.addEventListener('keydown', function(e){
    var keyCode = e.keyCode;
    if(keyCode === 71){
        var audiobo = new Audio('assets/boom.wav');
        audiobo.play();
        }
});
document.body.addEventListener('keydown', function(e){
    var keyCode = e.keyCode;
    if(keyCode === 72){
        var audiori = new Audio('assets/ride.wav');
        audiori.play();
        }
});
document.body.addEventListener('keydown', function(e){
    var keyCode = e.keyCode;
    if(keyCode === 74){
        var audiosn = new Audio('assets/snare.wav');
        audiosn.play();
        }
});
document.body.addEventListener('keydown', function(e){
    var keyCode = e.keyCode;
    if(keyCode === 75){
        var audioto = new Audio('assets/tom.wav');
        audioto.play();
        }
});
document.body.addEventListener('keydown', function(e){
    var keyCode = e.keyCode;
    if(keyCode === 76){
        var audioti = new Audio('assets/tink.wav');
        audioti.play();
        }
});

document.body.addEventListener('keydown', function(e) {
    var keyCodes = [65, 83, 68, 70, 71, 72, 74, 75, 76]; // A–L keys
    if (keyCodes.includes(e.keyCode)) {
        var button = document.querySelector(`.letter-btn[data-key="${e.keyCode}"]`);
        if (!button) return;

        button.classList.add('glow-border');
        setTimeout(() => {
            button.classList.remove('glow-border');
        }, 150);
    }
});