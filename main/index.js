const country = document.querySelector('.country')
country.addEventListener('click', (e)=>{
    let x = e.clientX - e.target.offsetLeft
    let y = e.clientY - e.target.offsetTop
    
})

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}