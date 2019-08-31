document.addEventListener("DOMContentLoaded", () => {

	const keys = document.querySelectorAll(".key")
	keys.forEach(key => key.addEventListener("transitionend", removeTransition))

  document.addEventListener("keydown", e => {
    whichKey(e)
  })

  function whichKey(e) {
  	let key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
  	if (key == null)
  		return
    let audio = document.querySelector("audio")
    audio.currentTime = 0
    audio.play()
  	key.classList.add("playing")
  	console.log(key)
  }

  function removeTransition(e) {
  	this.classList.remove("playing")
  }


})
