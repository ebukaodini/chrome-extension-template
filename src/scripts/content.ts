const button = document.createElement('button')!
button.style.position = 'fixed'
button.style.top = '0'
button.style.left = '0'
button.innerText = 'Send Message'
document.body.append(button)

button.onclick = async function () {
  await chrome.runtime.sendMessage({
    message: 'Hi Background 👋🏽',
  })
}

chrome.runtime.onMessage.addListener(async ({ message }) => {
  console.log(`background: ${message}`)
})
