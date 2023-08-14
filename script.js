
// -----------------ABOUT ME---------------

let tablinks = document.getElementsByClassName("tab-links");
let tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

// -----------------SIDE MENU BAR FOR SMALLER SCREEN--------------
var sidemenu = document.getElementById("sidemenu");

function openmenu(){
    sidemenu.style.right = "0";
}
function closemenu(){
    sidemenu.style.right = "-180px";
}


// ------------------------FOR STORING THE CONTACT FORM DATA------------
const scriptURL = 'https://script.google.com/macros/s/AKfycbw8Hiyh5e9noawznKGdtn77jOD8wMHw3NApnC_TsipC5lEJyw310M8utswSvC0VvZ_c/exec'
    const form = document.forms['submit-to-google-sheet']

    const msg = document.getElementById('msg');
    form.addEventListener('submit', e => {
        e.preventDefault()
        fetch(scriptURL, { method: 'POST', body: new FormData(form)})
            .then(response => {
                msg.innerHTML = "Message Sent Successfully!!"
                setTimeout(function(){
                    msg.innerHTML = " ";
                },10000)
                form.reset()
            })
            .catch(error => console.error('Error!', error.message))
    })