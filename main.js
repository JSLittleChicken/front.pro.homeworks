function getBrowserInfo() {
    let browser = identifyBrowser();
    let info = "Browsers name: " + browser.name + "<br>";
    info += "Browsers version: " + browser.version + "<br>";
    return info;
}


function identifyBrowser() {
    let agentUser = window.navigator.userAgent,
        nameBrowser,
        versionBrowser;

    // Chrome
    if (agentUser.indexOf("Chrome") != -1) {
        nameBrowser = "Google Chrome";
        versionBrowser = agentUser.substring(agentUser.indexOf("Chrome") + 7);
    }
    // Firefox
    else if (agentUser.indexOf("Firefox") != -1) {
        nameBrowser = "Mozilla Firefox";
        versionBrowser = agentUser.substring(agentUser.indexOf("Firefox") + 8);
    }
    // Safari
    else if (agentUser.indexOf("Safari") != -1) {
        nameBrowser = "Safari";
        versionBrowser = agentUser.substring(agentUser.indexOf("Version") + 8);
    }
    // Internet Explorer
    else if (agentUser.indexOf("MSIE") != -1) {
        nameBrowser = "Internet Explorer";
        versionBrowser = agentUser.substring(agentUser.indexOf("MSIE") + 5);
    }
    // others
    else {
        nameBrowser = "anonymus";
        versionBrowser = "N/A";
    }

    if (versionBrowser.indexOf(";") != -1) {
        versionBrowser = versionBrowser.substring(0, versionBrowser.indexOf(";"));
    }

    return {
        name: nameBrowser,
        version: versionBrowser
    };
}

document.getElementById("browser-info").innerHTML = getBrowserInfo();

function getParametersURL() {
    let urlParams = new URLSearchParams(window.location.search);
    return urlParams.getAll('devices');
}

function checkCheckboxes() {
    let parameters = getParametersURL()
    if (parameters.length > 0) {
        let checkboxes = []
        document.querySelectorAll('[type=checkbox]').forEach((x) => { checkboxes.push(x.id) })
        parameters[0].split(",").forEach(function (parameter) {
            let checkbox = document.getElementById(parameter + 'Checkbox');
            checkbox.checked = true;
            checkboxes.splice(checkboxes.indexOf(checkbox.id), 1);
        });
        checkboxes.forEach((x) => { document.getElementById(x).checked = false });
    } else {
        document.querySelectorAll('[type=checkbox]').forEach((checkbox) => { checkbox.checked = false })
        console.log('uncheck all')
    }
}

var checkboxes = document.querySelectorAll('input[type="checkbox"]');
checkboxes.forEach(function (checkbox) {
    checkbox.addEventListener('change', function () {
        let selectedDevices = [];
        checkboxes.forEach(function (cb) {
            if (cb.checked) {
                selectedDevices.push(cb.value);
            }
        });
        let queryString = selectedDevices.length > 0 ? '?devices=' + selectedDevices.join(',') : window.location.href.split('?')[0]
            ;
        history.pushState(null, null, queryString);
        console.log('fire onchange')
    });
});

checkCheckboxes();
window.addEventListener(
    'popstate', () => {
        Promise.resolve().then(
            () => {
                checkCheckboxes();
            }
        );
    }
);