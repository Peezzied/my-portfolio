const country = document.querySelector('.country')
country.style.setProperty('--pos-r', 50 + 'px')
country.addEventListener('mousedown', (e)=>{
    let x = e.clientX - e.target.offsetLeft
    let y = e.clientY - e.target.offsetTop
    let pos = e.target.getBoundingClientRect();
    console.log(x, y, pos)
    e.target.style.setProperty('--pos-x', x + 'px')
    e.target.style.setProperty('--pos-y', y + 'px')
})

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}