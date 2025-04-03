browser.runtime.onMessage.addListener((message) => {
    if (message.command === 'fillInputFields') {
        var inputs = scrapeInputFields();
        inputs.searchBar.value = message.data;
        inputs.submitButton.click();
    }
});

function scrapeInputFields() {
    const inputs = document.querySelectorAll('input, textarea, select');
    var data = {
        "searchBar": inputs[0],
        "submitButton": inputs[1],
    }

    return data;
}