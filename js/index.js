let timer = 0, timeEl = null, dateEl = null

window.onload = function () {
  timeEl = document.querySelector('.time')
  dateEl = document.querySelector('.date')
  setDate()
  setTime()
  timer = setInterval(() => {
    setTime()
  }, 1000)

}

function setTime() {
  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();
  if (h === 0 && m === 0 && s === 0) {
    setDate()
  }
  timeEl.innerText = `${h > 9 ? h : "0" + h}:${m > 9 ? m : "0" + m}:${s > 9 ? s : "0" + s
    }`
}

function setDate() {
  let y = new Date().getFullYear();
  let m = new Date().getMonth() + 1;
  let d = new Date().getDate();
  dateEl.innerText = `${y}-${m > 9 ? m : "0" + m}-${d > 9 ? d : "0" + d}`;
}


window.addEventListener('unload', () => {
  clearInterval(timer)
})

window.addEventListener('error', () => {
  clearInterval(timer)
})