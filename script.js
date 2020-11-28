const loader = document.querySelector('.loader');
const hamburger = document.querySelector('.hamburger');
const side_nav = document.querySelector('.side-nav');
const overlay = document.querySelector('.overlay');
const dateOutput = document.querySelector('.date');
const time = document.querySelector('.time');
const query = document.querySelector('#query');
const query_form = document.querySelector('#weather_query_form');
const temp = document.querySelector('.temp h1');
const condition = document.querySelector('.temp p');
const humidy = document.querySelector('.humid');
const pressure = document.querySelector('.pressure');
const wrapper = document.querySelector('.wrapper');


window.addEventListener('load', () => {

   setTimeout(()=>{
    loader.style.display = "none"
   },700)


    hamburger.addEventListener('click', () => {
        side_nav.classList.toggle('active');
        overlay.classList.toggle('active')
    })

    overlay.addEventListener('click', () => {
        side_nav.classList.toggle('active');
        overlay.classList.toggle('active')
    })

    dateOutput.innerHTML =
        `
<p class="day"> ${dd}
<strong>${da}, ${mm} <span class="yy"> ${yy}</span></strong>
</p>
`
    setInterval(() => {
        let h = new Date().getHours();
        let m = new Date().getMinutes();
        let s = new Date().getSeconds();
        time.innerHTML = `
        <strong>${h} : ${m} : ${s}</strong>
        `
    }, 10);








    query_form.addEventListener('submit', (e) => {
        e.preventDefault();

        /*----------------------
        ---------------
        -------------*/
        fetch('http://api.openweathermap.org/data/2.5/weather?q=' + query.value + '&units=metric&appid=9cf934ea494bae788bf295d91572e588', {
                method: 'get'
            }).then(res => {
                return res.json()
            })
            .then(data => {
                console.log('Weather Loaded')

                temp.innerText = Math.round(data.main.temp) + '°';
                condition.innerText = data.weather[0].description;
                humidy.innerText = `Humidity: ${data.main.humidity}`
                pressure.innerText = `Pressure: ${data.main.pressure}`

            })

            .catch(err => {
                setTimeout(() => {
                    alert('An Error Occured')
                }, 5000);
            })


    })



});

if(navigator.serviceWorker){
    console.log('Service Worker Registering')
    navigator.serviceWorker.register('./script.js').then(()=>{
        console.log('Service Worker Registered')
    }).catch((err)=>{
        console.log(console.log(err))
    })
}
else{
    console.log('Your Browser Does not Support Service Worker')
}


// if(navigator.geolocation){
// navigator.geolocation.watchPosition(showPosition,error)
   
// }else{
//     console.log(false)
// }
// function showPosition(position){
//   alert(position.coords.latitude);
//     document.body.innerHtml=position.coords.latitude ;
// }
// showPosition ;
// function error(err){
//     err.code=err.PERMISSION_DENIED ;
//     if(err.code=== err.PERMISSION_DENIED){
        
// console.log('Access Denied')
//     }

// }