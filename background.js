var isFirstTime = true

chrome.tabs.onUpdated.addListener(function () {
    chrome.tabs.getSelected(tab => {  // 現在のタブを取得
        let url = tab.url.toString()
        let sites = ["https://www.youtube.com/"]

        sites.forEach(function (value) {
            if (url.startsWith(value)) {
                if (isFirstTime) {
                    window.alert("仕事しろやん")
                    isFirstTime = false
                }
            } else {
                isFirstTime = true
            }
        })
    });
})