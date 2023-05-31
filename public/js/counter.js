const socket = io()
socket.on("countUpdated", (count) => {
    const counter = document.getElementById('count').innerHTML = `<span> ${count}</span>`
    // counter.innerHTML(`Counter Application: ${count}`)
})

const plusBtn = document.getElementById('increment')
plusBtn.addEventListener('click', () => {
    socket.emit("increment")
})

const minusBtn = document.getElementById('decrement').addEventListener('click',()=>{
    socket.emit("decrement")
})