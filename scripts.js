document.addEventListener("DOMContentLoaded", () => {
  document.addEventListener("keydown", e => {
    let audio = document.querySelector("audio")
    audio.currentTime = 0
    audio.play()
    console.log(e)
  })
})
