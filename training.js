let cardio = localStorage.getItem('cardio');
let abdomen = localStorage.getItem('abdomen');
let arm = localStorage.getItem('arm');
let back = localStorage.getItem('back');
let leg = localStorage.getItem('leg');
//dias da semana
let sunday = false;
let monday = false;
let tuesday = false;
let wednesday = false;
let thursday = false;
let friday = false;
let saturday = false;

switch (cardio) {
    case 'sunday':
        fetch('../muscle-group/cardio.html')
            .then(response => response.text())
            .then(data => {
                document.getElementById('sunday').innerHTML = data;
            })
            .catch(error => console.error('Erro ao carregar conteúdo:', error));
            sunday = true;
        break;
    case 'monday':
        fetch('../muscle-group/cardio.html')
            .then(response => response.text())
            .then(data => {
                document.getElementById('monday').innerHTML = data;
            })
            .catch(error => console.error('Erro ao carregar conteúdo:', error));
            monday = true;
        break;
    case 'tuesday':
        fetch('../muscle-group/cardio.html')
            .then(response => response.text())
            .then(data => {
                document.getElementById('tuesday').innerHTML = data;
            })
            .catch(error => console.error('Erro ao carregar conteúdo:', error));
            tuesday = true;
        break;
    case 'wednesday':
        fetch('../muscle-group/cardio.html')
            .then(response => response.text())
            .then(data => {
                document.getElementById('wednesday').innerHTML = data;
            })
            .catch(error => console.error('Erro ao carregar conteúdo:', error));
            wednesday = true;
        break;
    case 'thursday':
        fetch('../muscle-group/cardio.html')
            .then(response => response.text())
            .then(data => {
                document.getElementById('thursday').innerHTML = data;
            })
            .catch(error => console.error('Erro ao carregar conteúdo:', error));
            thursday = true;
        break;
    case 'friday':
        fetch('../muscle-group/cardio.html')
            .then(response => response.text())
            .then(data => {
                document.getElementById('friday').innerHTML = data;
            })
            .catch(error => console.error('Erro ao carregar conteúdo:', error));
            friday = true;
        break;
    case 'saturday':
        fetch('../muscle-group/cardio.html')
            .then(response => response.text())
            .then(data => {
                document.getElementById('saturday').innerHTML = data;
            })
            .catch(error => console.error('Erro ao carregar conteúdo:', error));
            saturday = true;
        break;
}

switch (abdomen) {
    case 'sunday':
        fetch('../muscle-group/abdomen.html')
            .then(response => response.text())
            .then(data => {
                document.getElementById('sunday').innerHTML = data;
            })
            .catch(error => console.error('Erro ao carregar conteúdo:', error));
            sunday = true;
        break;
    case 'monday':
        fetch('../muscle-group/abdomen.html')
            .then(response => response.text())
            .then(data => {
                document.getElementById('monday').innerHTML = data;
            })
            .catch(error => console.error('Erro ao carregar conteúdo:', error));
            monday = true;
        break;
    case 'tuesday':
        fetch('../muscle-group/abdomen.html')
            .then(response => response.text())
            .then(data => {
                document.getElementById('tuesday').innerHTML = data;
            })
            .catch(error => console.error('Erro ao carregar conteúdo:', error));
            tuesday = true;
        break;
    case 'wednesday':
        fetch('../muscle-group/abdomen.html')
            .then(response => response.text())
            .then(data => {
                document.getElementById('wednesday').innerHTML = data;
            })
            .catch(error => console.error('Erro ao carregar conteúdo:', error));
            wednesday = true;
        break;
    case 'thursday':
        fetch('../muscle-group/abdomen.html')
            .then(response => response.text())
            .then(data => {
                document.getElementById('thursday').innerHTML = data;
            })
            .catch(error => console.error('Erro ao carregar conteúdo:', error));
            thursday = true;
        break;
    case 'friday':
        fetch('../muscle-group/abdomen.html')
            .then(response => response.text())
            .then(data => {
                document.getElementById('friday').innerHTML = data;
            })
            .catch(error => console.error('Erro ao carregar conteúdo:', error));
            friday = true;
        break;
    case 'saturday':
        fetch('../muscle-group/abdomen.html')
            .then(response => response.text())
            .then(data => {
                document.getElementById('saturday').innerHTML = data;
            })
            .catch(error => console.error('Erro ao carregar conteúdo:', error));
            saturday = true;
        break;
}

switch (arm) {
    case 'sunday':
        fetch('../muscle-group/arm.html')
            .then(response => response.text())
            .then(data => {
                document.getElementById('sunday').innerHTML = data;
            })
            .catch(error => console.error('Erro ao carregar conteúdo:', error));
            sunday = true;

        break;
    case 'monday':
        fetch('../muscle-group/arm.html')
            .then(response => response.text())
            .then(data => {
                document.getElementById('monday').innerHTML = data;
            })
            .catch(error => console.error('Erro ao carregar conteúdo:', error));
            monday = true;
        break;
    case 'tuesday':
        fetch('../muscle-group/arm.html')
            .then(response => response.text())
            .then(data => {
                document.getElementById('tuesday').innerHTML = data;
            })
            .catch(error => console.error('Erro ao carregar conteúdo:', error));
            tuesday = true;
        break;
    case 'wednesday':
        fetch('../muscle-group/arm.html')
            .then(response => response.text())
            .then(data => {
                document.getElementById('wednesday').innerHTML = data;
            })
            .catch(error => console.error('Erro ao carregar conteúdo:', error));
            wednesday = true;
        break;
    case 'thursday':
        fetch('../muscle-group/arm.html')
            .then(response => response.text())
            .then(data => {
                document.getElementById('thursday').innerHTML = data;
            })
            .catch(error => console.error('Erro ao carregar conteúdo:', error));
            thursday = true;
        break;
    case 'friday':
        fetch('../muscle-group/arm.html')
            .then(response => response.text())
            .then(data => {
                document.getElementById('friday').innerHTML = data;
            })
            .catch(error => console.error('Erro ao carregar conteúdo:', error));
            friday = true;
        break;
    case 'saturday':
        fetch('../muscle-group/arm.html')
            .then(response => response.text())
            .then(data => {
                document.getElementById('saturday').innerHTML = data;
            })
            .catch(error => console.error('Erro ao carregar conteúdo:', error));
            saturday = true;
        break;
}

switch (back) {
    case 'sunday':
        fetch('../muscle-group/back.html')
            .then(response => response.text())
            .then(data => {
                document.getElementById('sunday').innerHTML = data;
            })
            .catch(error => console.error('Erro ao carregar conteúdo:', error));
            sunday = true;
        break;
    case 'monday':
        fetch('../muscle-group/back.html')
            .then(response => response.text())
            .then(data => {
                document.getElementById('monday').innerHTML = data;
            })
            .catch(error => console.error('Erro ao carregar conteúdo:', error));
            monday = true;
            break;
    case 'tuesday':
        fetch('../muscle-group/back.html')
            .then(response => response.text())
            .then(data => {
                document.getElementById('tuesday').innerHTML = data;
            })
            .catch(error => console.error('Erro ao carregar conteúdo:', error));
            tuesday = true;
        break;
    case 'wednesday':
        fetch('../muscle-group/back.html')
            .then(response => response.text())
            .then(data => {
                document.getElementById('wednesday').innerHTML = data;
            })
            .catch(error => console.error('Erro ao carregar conteúdo:', error));
            wednesday = true;
        break;
    case 'thursday':
        fetch('../muscle-group/back.html')
            .then(response => response.text())
            .then(data => {
                document.getElementById('thursday').innerHTML = data;
            })
            .catch(error => console.error('Erro ao carregar conteúdo:', error));
            thursday = true;
        break;
    case 'friday':
        fetch('../muscle-group/back.html')
            .then(response => response.text())
            .then(data => {
                document.getElementById('friday').innerHTML = data;
            })
            .catch(error => console.error('Erro ao carregar conteúdo:', error));
            friday = true;
        break;
    case 'saturday':
        fetch('../muscle-group/back.html')
            .then(response => response.text())
            .then(data => {
                document.getElementById('saturday').innerHTML = data;
            })
            .catch(error => console.error('Erro ao carregar conteúdo:', error));
            saturday = true;
        break;
}

switch (leg) {
    case 'sunday':
        fetch('../muscle-group/leg.html')
            .then(response => response.text())
            .then(data => {
                document.getElementById('sunday').innerHTML = data;
            })
            .catch(error => console.error('Erro ao carregar conteúdo:', error));
            sunday = true;

        break;
    case 'monday':
        fetch('../muscle-group/leg.html')
            .then(response => response.text())
            .then(data => {
                document.getElementById('monday').innerHTML = data;
            })
            .catch(error => console.error('Erro ao carregar conteúdo:', error));
            monday = true;

        break;
    case 'tuesday':
        fetch('../muscle-group/leg.html')
            .then(response => response.text())
            .then(data => {
                document.getElementById('tuesday').innerHTML = data;
            })
            .catch(error => console.error('Erro ao carregar conteúdo:', error));
            tuesday = true;
        break;
    case 'wednesday':
        fetch('../muscle-group/leg.html')
            .then(response => response.text())
            .then(data => {
                document.getElementById('wednesday').innerHTML = data;
            })
            .catch(error => console.error('Erro ao carregar conteúdo:', error));
            wednesday = true;
                    break;
    case 'thursday':
        fetch('../muscle-group/leg.html')
            .then(response => response.text())
            .then(data => {
                document.getElementById('thursday').innerHTML = data;
            })
            .catch(error => console.error('Erro ao carregar conteúdo:', error));
            thursday = true;
        break;
    case 'friday':
        fetch('../muscle-group/leg.html')
            .then(response => response.text())
            .then(data => {
                document.getElementById('friday').innerHTML = data;
            })
            .catch(error => console.error('Erro ao carregar conteúdo:', error));
            friday = true;
        break;
    case 'saturday':
        fetch('../muscle-group/leg.html')
            .then(response => response.text())
            .then(data => {
                document.getElementById('saturday').innerHTML = data;
            })
            .catch(error => console.error('Erro ao carregar conteúdo:', error));
            saturday = true;
        break;
}

//dias da semana sem treino
switch (sunday) {
    case false :
        fetch('../muscle-group/no-training.html')
            .then(response => response.text())
            .then(data => {
                document.getElementById('sunday').innerHTML = data;
            })
            .catch(error => console.error('Erro ao carregar conteúdo:', error));
        break;
}

switch (monday) {
    case false :
        fetch('../muscle-group/no-training.html')
            .then(response => response.text())
            .then(data => {
                document.getElementById('monday').innerHTML = data;
            })
            .catch(error => console.error('Erro ao carregar conteúdo:', error));
        break;
}
switch (tuesday) {
    case false :
        fetch('../muscle-group/no-training.html')
            .then(response => response.text())
            .then(data => {
                document.getElementById('tuesday').innerHTML = data;
            })
            .catch(error => console.error('Erro ao carregar conteúdo:', error));
        break;
}
switch (wednesday) {
    case false :
        fetch('../muscle-group/no-training.html')
            .then(response => response.text())
            .then(data => {
                document.getElementById('wednesday').innerHTML = data;
            })
            .catch(error => console.error('Erro ao carregar conteúdo:', error));
        break;
}
switch (thursday) {
    case false :
        fetch('../muscle-group/no-training.html')
            .then(response => response.text())
            .then(data => {
                document.getElementById('thursday').innerHTML = data;
            })
            .catch(error => console.error('Erro ao carregar conteúdo:', error));
        break;
}
switch (friday) {
    case false :
        fetch('../muscle-group/no-training.html')
            .then(response => response.text())
            .then(data => {
                document.getElementById('friday').innerHTML = data;
            })
            .catch(error => console.error('Erro ao carregar conteúdo:', error));
        break;
}
switch (saturday) {
    case false :
        fetch('../muscle-group/no-training.html')
            .then(response => response.text())
            .then(data => {
                document.getElementById('saturday').innerHTML = data;
            })
            .catch(error => console.error('Erro ao carregar conteúdo:', error));
        break;
}

