function switchForm(formType) {
    document.getElementById('form-aumentoDeQuadro').style.display = formType === 'aumentoDeQuadro' ? 'block' : 'none';
    document.getElementById('form-vaga').style.display = formType === 'vaga' ? 'block' : 'none';
}

function exportData(formType) {
    const form = document.getElementById(`form-${formType}`);
    const inputs = form.getElementsByTagName('input');
    let output = [];

    for (let input of inputs) {
        output.push(input.value || '');
    }

    alert(output.join(';'));
}

function importData(formType) {
    const importInput = document.getElementById(`import-input-${formType}`).value;
    const data = importInput.split(';');
    const form = document.getElementById(`form-${formType}`);
    const inputs = form.getElementsByTagName('input');

    for (let i = 0; i < data.length; i++) {
        if (inputs[i]) {
            inputs[i].value = data[i];
        }
    }
}
