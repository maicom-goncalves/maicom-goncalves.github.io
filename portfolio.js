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
    const imagesfour= document.querySelectorAll('.carousel-imagesfour img');
    const totalImagesfour = imagesfour.length;
    
    function showNextImagefour() {
        indexfour = (indexfour + 1) % totalImagesfour;
        let offset = -indexfour * 100;
        document.querySelector('.carousel-imagesfour').style.transform = `translateX(${offset}%)`;
    }
    
    setInterval(showNextImagefour, 4000);