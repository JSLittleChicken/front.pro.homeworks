document.body.innerHTML = `
    <div class='protocol-block'>
        <input id='input' type='text' />
        <button id='http'>Do HTTP</button>
        <button id='https'>Do HTTPS</button>
    </div>
`;

const input = document.getElementById('input');
const httpButton = document.getElementById('http');
const httpsButton = document.getElementById('https');

function AddProtocol(pType) {
    val = input.value.toString()

    if (!val) {
        console.log('empty string!!!');
        return
    }
    let url;
    try {
        url = new URL(val);
        url.protocol = pType;
    } catch {
        url = new URL(`${pType}://${val}`);
    }
    console.log(`making ${pType} >>>`, url.href)
}

httpButton.addEventListener('click', () => {AddProtocol('http')});
httpsButton.addEventListener('click', () => {AddProtocol('https')})