let images = [
    'img/pexels-alex-azabache-3290068.jpg',
    'img/pexels-alexandr-podvalny-1007657.jpg',
    'img/pexels-ali-garcia-6620131.jpg',
    'img/pexels-david-bartus-586687.jpg',
    'img/pexels-dimitry-anikin-5043948.jpg',
    'img/pexels-elena-zhuravleva-1457812.jpg',
    'img/pexels-errin-casano-2356045.jpg',
    'img/pexels-francesco-ungaro-2325446.jpg',
    'img/pexels-how-far-from-home-7026306.jpg',
    'img/pexels-jess-loiterton-4319752.jpg',
    'img/pexels-jonathan-schmer-2364401.jpg',
    'img/pexels-michael-block-3225528.jpg',
    'img/pexels-pierre-blaché-2901209.jpg',
    'img/pexels-quang-nguyen-vinh-2178175.jpg',
    'img/pexels-rachel-claire-4825701.jpg',
];

function render() {
    let content = document.getElementById('content');
    content.innerHTML = '';

    for (let i = 0; i < images.length; i++) {

        content.innerHTML += `
            <img src="${images[i]}" class="photos" onclick="openImage(${i})">
            `;
    }
}

function openImage(i) {
    document.getElementById('fullscreen').classList.remove('d-none');

    content.innerHTML = `
        <div class="bg">
            <div id="slider-container" class="slider-container">
                <img class="slider-image" src="${images[i]}">
            </div>

            <img onclick="closefullscreen()" class="close" src="img/close-window-48.png">
            <img onclick="previmg(${i})" class="arrowleft" src="img/arrow-121-48.png">
            <img onclick="nextimg(${i})" class="arrowright" src="img/arrow-121-48.png">
        </div>
    `;
}

function closefullscreen() {
    document.getElementById('fullscreen').classList.add('d-none');
    render();
}

function previmg(i) {
    if (i > 0) {
        i--;
    } else {
        i = images.length - 1;
    }
    openImage(i);
}

function nextimg(i) {
    if (i < images.length - 1) {
        i++;
    } else {
        i = 0;
    }
    openImage(i);
}