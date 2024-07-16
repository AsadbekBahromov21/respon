

const API__URL = "https://jsonplaceholder.typicode.com"
const wrapper = document.querySelector(".wrapper")
const loading = document.querySelector(".loading")
async function fetchUser(api) {
    let reponse = await fetch(`${api}/users`)
    reponse
        .json()
        .then((res) => createCard(res))
        .catch((arr) => console.log(arr))
        .finally(()=>{
            loading.style.display = "none";
            setTimeout(() => {
                $('.wrapper').slick({
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    autoplay: true,
                    autoplaySpeed: 2000,
                   arrows: true,
                   prevArrow: "<button type=\"button\" class=\"arrow\"><</button>",
                   nextArrow: "<button type=\"button\" class=\"arrow\">></button>"
                  });
            }, 100);
        })
}
fetchUser(API__URL)
const IMAGES = [
"./images/asad.jpg",
"https://fastly.picsum.photos/id/241/1920/1080.jpg?hmac=cxO1TMVgyQ7lrsGd1el1cnl5I7sn58YvT-RkWhXlf5I",
"./images/asad.jpg",
"https://fastly.picsum.photos/id/120/1920/1080.jpg?hmac=dfwy7esXr1Dy8-sHwJpVxr9hf7ZayVTqGRH7Dd_K6qY",
"https://fastly.picsum.photos/id/700/1920/1080.jpg?hmac=uAAHPbclWBwPVbXmxVO23Ic9GWPv9GMkRfQWLyVNb_0",
"https://fastly.picsum.photos/id/10/1920/1080.jpg?hmac=Hs_xUcCc7BNrD6fseq1fdN2AC_uSWaywG7V7uh_6fTY",
"./images/asad.jpg",
"https://fastly.picsum.photos/id/701/1920/1080.jpg?hmac=aOgw62OQbbvOkmdC-V0SnFEpkgmCahs3GFaPow3wCqs",
"https://fastly.picsum.photos/id/185/1920/1080.jpg?hmac=4T2W-ljFffBR88Hvj4fedQiNK1zLWIHjerHXzhVbZY4",
"https://fastly.picsum.photos/id/983/1920/1080.jpg?hmac=0e6mGVExwBwR99HO41EOLY3IvTI7oReDnVE2cfg1vHw",
]
function createCard(data) {
    data.forEach((users, index) => {
        console.log(index);
        let card = document.createElement("div")
        card.classList.add("card")
        card.innerHTML = `
        
         <div class="card__image item">
          <img src= ${IMAGES[index]} alt="">
       
          <div class="info">
          <h3>${users.name}</h3>
              <p>${users.username}</p>
              <p>${users.email}</p>
              <p class="title">${users.address.street}</p>
              <p class="title">${users.address.suite}</p>
              <p class="title">${users.address.city}</p>
              <p class="title">${users.address.zipcode}</p>
          </div>
          </div>
          `
          const task = wrapper.appendChild(card)

          })
      }
       


            
                 
           































// console.log(1);
// function foo(){
//     console.log("foo");
// }
// foo()
// setTimeout(()=>{
//     console.log("setTimeout");
// },0)
// async function add (){
//     let data = await [10, 20, 30]
//     console.log("dfv");
//     return data
// }
// add()
// console.log(2);