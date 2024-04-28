var second = 0;
var minute = 0;
var hour = 0;
var d = new Date();

setInterval(
    function(){
        d = new Date();
        second = d.getSeconds()*6;
        minute = d.getMinutes()*6;
        hour = d.getHours()*30;
        document.getElementById("second-hand").style.transform = "rotate(" + second + "deg)";
        document.getElementById("minute-hand").style.transform = "rotate(" + minute + "deg)";
        document.getElementById("hour-hand").style.transform = "rotate(" + hour + "deg)";
    }, 1000
);
const time = document.getElementById('time');
const date = document.getElementById('date');

const monthNames = ["January", "February", "March",
                    "April", "May", "June", "July",
                    "August", "September", "October",
                    "November", "December"];

const interval = setInterval(() =>{
    
    const local = new Date();
    
    let day = local.getDate(),
        month = local.getMonth(),
        year = local.getFullYear();

    time.innerHTML = local.toLocaleTimeString();
    date.innerHTML = `${day} ${monthNames[month]} ${year}`;

}, 1000);

//Creating the constant for the object btn
const boton = document.querySelector('#btn');
//Some variables for CSS Style
var pagina = document.body;
//Calling an Event.
boton.addEventListener('click', function () {
    if(pagina.style.background == "white"){
        console.log("If_Part");
        pagina.style.background = "linear-gradient(180deg, rgb(0, 0, 0) 0%, rgb(0, 0, 10) 71%, rgb(0, 0, 30) 100%)";
        time.style.color = "rgb(230, 230, 230)";
        date.style.color = "rgb(255, 227, 185)";
    }else{
        pagina.style.background = "white";
        time.style.color = "rgb(0,0,100)";
        date.style.color = "rgb(0,0,51)";
    }
});