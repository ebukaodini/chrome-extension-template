chrome.runtime.onInstalled.addListener(function () {
  chrome.action.onClicked.addListener(async (tab) => {
    await chrome.tabs.sendMessage(tab?.id!, {
      message: 'Hello Browser 👋🏽',
    })
  })

  chrome.runtime.onMessage.addListener(async ({ message }) => {
    console.log(`browser: ${message}`)
  })
})
