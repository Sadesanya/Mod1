const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

menu.addEventListener('click', function(){
    console.log('clicked menu')
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active')
});

let pics = document.getElementsByClassName('random__button');
Array.from(pics).forEach((create) => 
   create.addEventListener('click', grab));



/// Fetching API
async function grab() { 
    const URL = "https://giphy.p.rapidapi.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC&limit=25&rating=pg-13"
    fetch (URL, {
	method: "GET",
	headers: {
		"x-rapidapi-host": "giphy.p.rapidapi.com",
		"x-rapidapi-key": "4573b522d9msh5a7ae28e904f647p143faajsn1ebf342cca94"
	}
})
.then((response) => response.json()) 

.then((data2) => {console.log(data2)
    let img1 = document.getElementsByClassName('random__image')[0]
    img1.innerHTML = '';
    console.log(img1)
    let random = Math.trunc(Math.random()* 25 + 1)
    console.log(random)
    let pic = `<img src="` + data2.data[random].user.avatar_url + `">` 
    let holder = document.createElement('div')
    holder.innerHTML = pic
    holder.id = 'holder'
    img1.appendChild(holder)

})


.catch(err => console.error(err))
}