const qrCodeDiv = document.getElementById('qrcode')

const inputText = document.querySelector('.text')

const btn = document.querySelector('.btn')

const makeQrCode = () => {
    const inputElem = inputText.value

    qrCodeDiv.innerHTML = '';

    if (inputElem.trim() !== '') {
        var qrCode = new QRCode(qrCodeDiv, {
            text: inputElem,
            width: 120,
            height: 120
        })
    }
    else {
        qrCodeDiv.innerHTML = '';
    }

    if(qrCode == undefined ){
         qrCodeDiv.innerHTML = ' Qr Code will show here'
    }
}

btn.addEventListener('click', makeQrCode)

makeQrCode()