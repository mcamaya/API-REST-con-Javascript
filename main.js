const API_URL = 'https://api.thecatapi.com/v1/images/search?limit=4&page=3&api_key=live_OcV8p3ZtnYwXmjpVEPwg9ZycNNluEisF5r86MFkSMBf0bMMhfNmD9iz3T7r5KDtL';

/* fetch(API_URL)
    .then(res => res.json())
    .then(data => {
        const img = document.querySelector('img');
        img.src = data[0].url;
    }) */

async function fetchGatitos() {
    const response = await fetch(API_URL);
    const data = await response.json(); 
    console.log(data);
    const img1 = document.querySelector('#img1');
    const img2 = document.querySelector('#img2');
    const img3 = document.querySelector('#img3');
    const img4 = document.querySelector('#img4');
    img1.src = data[0].url;
    img2.src = data[1].url;
    img3.src = data[2].url;
    img4.src = data[3].url;
}
fetchGatitos();
const btnReload = document.querySelector('#btn');
btnReload.addEventListener('click', fetchGatitos);