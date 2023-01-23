const botaoTrailer = document.querySelector('.botao-trailer');
const modal = document.querySelector('.modal');
const botaoFecharModal = document.querySelector('.fechar-modal')
const video = document.getElementById('video'); 
const linkDoVideo = video.src

console.log('mostrar o document', document);
document.querySelector('.botao-trailer');
botaoTrailer.addEventListener('click', () => {
    modal.classList.add('aberto');
    video.setAttribute('src', linkDoVideo)

})
document.querySelector('.fechar-modal');
botaoFecharModal.addEventListener('click', 
() => {
    modal.classList.remove('aberto');
    video.setAttribute('src', '')
}
)
console.log(video.src)

