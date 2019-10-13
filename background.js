window.onload = function () {
    chrome.tabs.getSelected(window.id, function (tab) {
        //tab.urlに開いているタブのURLが入っている
        var url = document.createTextNode(tab.url);
        if (url.startWith("https://youtube.com/")) {
            window.alert("仕事しろ！")
        }
    });
}