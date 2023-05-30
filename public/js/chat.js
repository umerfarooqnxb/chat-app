const socket = io()

socket.on("countUpdated", (count) => {
    console.log("Count has been updated successfully", count)
})

const plusBtn = document.getElementById('increment')
plusBtn.addEventListener('click',()=>{
   socket.emit("incremented")
})