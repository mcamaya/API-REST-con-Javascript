const API_URL = 'https://api.thecatapi.com/v1/images/search?limit=4&page=3&api_key=live_OcV8p3ZtnYwXmjpVEPwg9ZycNNluEisF5r86MFkSMBf0bMMhfNmD9iz3T7r5KDtL';
const API_URL_FAV = 'https://api.thecatapi.com/v1/favourites?limit=2&api_key=live_OcV8p3ZtnYwXmjpVEPwg9ZycNNluEisF5r86MFkSMBf0bMMhfNmD9iz3T7r5KDtL';
const spanError = document.querySelector('#error');

/* fetch(API_URL)
    .then(res => res.json())
    .then(data => {
        const img = document.querySelector('img');
        img.src = data[0].url;
    }) */

//mostrar gatitos
async function fetchGatitos() {
    const res = await fetch(API_URL);
    const data = await res.json();
    console.log('fetch Gatitos'); 
    console.log(res);
    console.log(data);

    if(res.status >= 300){
        spanError.innerHTML = 'Ha ocurrido un error: ' + res.status + data.message;
    } else {
        const img1 = document.querySelector('#img1');
        const img2 = document.querySelector('#img2');
        const img3 = document.querySelector('#img3');
        const img4 = document.querySelector('#img4');
        img1.src = data[0].url;
        img2.src = data[1].url;
        img3.src = data[2].url;
        img4.src = data[3].url;
}
} 

//cargar gatitos fav
async function loadFavorites(){
    const response = await fetch(API_URL_FAV);
    const data = await response.json(); 
    console.log('favoritos');
    console.log(data);


}

//añadir gatitos fav
async function saveFavoriteMichis(){
    const res = await fetch(API_URL_FAV, {
        method : 'POST',
        headers: {
            'Content-Type': 'application/json'

        },
        body: JSON.stringify({
            image_id: "12"
        })
    });
    const data = await res.json();
    if(res.status >= 300){
        spanError.innerHTML = 'Ha ocurrido un error: ' + res.status + data.message;
    }
    console.log('Save');
    console.log(res);

}


fetchGatitos();
loadFavorites();
const btnReload = document.querySelector('#btn');
btnReload.addEventListener('click', fetchGatitos);