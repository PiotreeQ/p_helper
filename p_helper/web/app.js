const helperWrapper = $('.main-wrapper');

const showHelper = ((data) => {
    helperWrapper.empty();
    let newHelper = ``;
    for (let i in data) {
        let newKeys = ``;
        for (let j in data[i].keys) {
            let key = data[i].keys[j];
            newKeys = newKeys + `<div class="key-wrapper"><span>${key}</span></div>`
        }
        newHelper = newHelper + `
        <div class="help-wrapper">
            ${newKeys}
            <span>${data[i].label}</span>
        </div>`
    }
    helperWrapper.html(newHelper);
    helperWrapper.animate({
        right: '1rem',
        opacity: '1.0'
    }, 700);
})

const hideHelper = (() => {
    helperWrapper.animate({
        right: '-40rem',
        opacity: '0.0'
    }, 700);
})

window.addEventListener("message", (event) => {
    const data = event.data;
    switch (data.action) {
        case 'showHelper':
            showHelper(data.info);
            break;
        case 'hideHelper':
            hideHelper();
            break;
    }
})