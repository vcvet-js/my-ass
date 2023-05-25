function ask(quetion,yes,no) {
    if (confirm(quetion)) yes()
    else no();
}

function showNormChel() {
    alert('Ну бывай тогда,друже..')
}

function showAlert () {
    alert('ГДЕ СУКА БОЕПРИПАСЫ???') 
}

ask('ШОЙГУ?ГЕРАСИМОВ?',showAlert,showNormChel);

