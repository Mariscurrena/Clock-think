//-----------------------------------------  ANALOG CLOCK
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


//-----------------------------------------  DIGITAL CLOCK
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


//-----------------------------------------  PHRASE EXTRACTOR
var arrayData = new Array();
var archivoTxt = new XMLHttpRequest();
//Choosing a random file
var n_file = Math.floor(Math.random() * 4) + 1;
var fileRuta = "phrase" + n_file + ".txt";
/////////////////////////////////////////////////////////7
const phrase = document.getElementById('phrase');

archivoTxt.open("GET",fileRuta,false);
archivoTxt.send(null);
var txt = archivoTxt.responseText;
phrase.innerHTML = `${txt}`;
console.log(txt);