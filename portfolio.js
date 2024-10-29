/*var time = new Date();
    console.log(time.getDate() + "/" + (time.getMonth()+1) + "/" + time.getFullYear());

    var dataAtual=time.getDate() + "/" + (time.getMonth()+1) + "/" + time.getFullYear();

    document.getElementById("demo").innerHTML = dataAtual; */


var root = document.querySelector(':root');
var btn = document.querySelector('.darkmode');

btn.addEventListener('click', function () {
    root.classList.toggle('light');
    root.classList.toggle('dark');
});
//botão selecionavel
const options = document.querySelectorAll('.nav');

options.forEach(option => {
    option.addEventListener('click', () => {
        // Remove a classe 'selected' de todos os botões
        options.forEach(otherOption => {
            otherOption.classList.remove('selected');
        });

        // Adiciona a classe 'selected' ao botão clicado
        option.classList.add('selected');
    });
});

//slides em Carrocel

let index = 0;
const images = document.querySelectorAll('.carousel-images img');
const totalImages = images.length;

function showNextImage() {
    index = (index + 1) % totalImages;
    let offset = -index * 100;
    document.querySelector('.carousel-images').style.transform = `translateX(${offset}%)`;
}

setInterval(showNextImage, 3000);


let indextwo = 0;
const imagestwo = document.querySelectorAll('.carousel-imagestwo img');
const totalImagestwo = imagestwo.length;

function showNextImagetwo() {
    indextwo = (indextwo + 1) % totalImagestwo;
    let offset = -indextwo * 100;
    document.querySelector('.carousel-imagestwo').style.transform = `translateX(${offset}%)`;
}

setInterval(showNextImagetwo, 3000);


let indexthree = 0;
const imagesthree = document.querySelectorAll('.carousel-imagesthree img');
const totalImagesthree = imagestwo.length;

function showNextImagethree() {
    indexthree = (indexthree + 1) % totalImagesthree;
    let offset = -indexthree * 100;
    document.querySelector('.carousel-imagesthree').style.transform = `translateX(${offset}%)`;
}

setInterval(showNextImagethree, 3000);

let indexfour = 0;
const imagesfour = document.querySelectorAll('.carousel-imagesfour img');
const totalImagesfour = imagesfour.length;

function showNextImagefour() {
    indexfour = (indexfour + 1) % totalImagesfour;
    let offset = -indexfour * 100;
    document.querySelector('.carousel-imagesfour').style.transform = `translateX(${offset}%)`;
}

setInterval(showNextImagefour, 4000);


 function copiarTexto() {
            
            var texto = document.getElementById("texto-a-copiar");

            
            var temp = document.createElement("textarea");
            document.body.appendChild(temp);
            temp.value = texto.textContent;
            temp.select();
            document.execCommand("copy");
            document.body.removeChild(temp);

            alternarVisibilidade();
        }
        function alternarVisibilidade() {
            const elementoOculto = document.querySelector('.copitwo');
            const elementoVisivel = document.querySelector('.copicone');
        
            // Mostrar o elemento oculto por 5 segundos
            elementoOculto.classList.remove('copitwo');
            elementoOculto.classList.add('copicone');
        
            elementoVisivel.classList.remove('copicone');
            elementoVisivel.classList.add('copitwo');
        
            setTimeout(() => {
                // Voltar ao estado inicial após 5 segundos
                elementoOculto.classList.add('copitwo');
                elementoOculto.classList.remove('copicone');
        
                elementoVisivel.classList.add('copicone');
                elementoVisivel.classList.remove('copitwo');
            }, 5000); 
        }
        
       