let antes = document.querySelector('.antes');
let depois = document.querySelector('.depois');
let imagem = document.querySelector('.galeria');
let artigo = document.querySelector('.artigo');
let info = document.querySelector('.info');
let job = document.querySelector('.job');
let contador = 0;


antes.addEventListener('click', slide)
depois.addEventListener('click', slide)

function slide() {
    if (contador === 0) {
        imagem.src = "image/image-john.jpg";

        artigo.innerHTML = "“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer.”"
        info.innerHTML = "John Tarkpor"
        job.innerHTML = "Junior Front-end Developer"
        contador++;
    } else if (contador === 1) {
        imagem.src = "image/image-tanya.jpg";
        artigo.innerHTML = "“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”"
        info.innerHTML = "Tanya Sinclair"
        job.innerHTML = "UX Engineer"
        contador--;
    }
}