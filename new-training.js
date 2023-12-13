let selectedDay;

function updateCardio(element) {
    selectedDay = element.value;
    switch (selectedDay) {
        case 'sunday':
            localStorage.setItem('cardio', 'sunday');
            break;
        case 'monday':
            localStorage.setItem('cardio', 'monday');
            break;
        case 'tuesday':
            localStorage.setItem('cardio', 'tuesday');
            break;
        case 'wednesday':
            localStorage.setItem('cardio', 'wednesday');
            break;
        case 'thursday':
            localStorage.setItem('cardio', 'thursday');
            break;
        case 'friday':
            localStorage.setItem('cardio', 'friday');
            break;
        case 'saturday':
            localStorage.setItem('cardio', 'saturday');
            break;
        default:
            break;
    }
}


function updateAbdomen(element) {
    selectedDay = element.value;

    switch (selectedDay) {
        case 'sunday':
            localStorage.setItem('abdomen', 'sunday');
            break;
        case 'monday':
            localStorage.setItem('abdomen', 'monday');
            break;
        case 'tuesday':
            localStorage.setItem('abdomen', 'tuesday');
            break;
        case 'wednesday':
            localStorage.setItem('abdomen', 'wednesday');
            break;
        case 'thursday':
            localStorage.setItem('abdomen', 'thursday');
            break;
        case 'friday':
            localStorage.setItem('abdomen', 'friday');
            break;
        case 'saturday':
            localStorage.setItem('abdomen', 'saturday');
            break;
        default:
            break;
    }

}

function updateArm(element) {
    selectedDay = element.value;

    switch (selectedDay) {
        case 'sunday':
            localStorage.setItem('arm', 'sunday');
            break;
        case 'monday':
            localStorage.setItem('arm', 'monday');
            break;
        case 'tuesday':
            localStorage.setItem('arm', 'tuesday');
            break;
        case 'wednesday':
            localStorage.setItem('arm', 'wednesday');
            break;
        case 'thursday':
            localStorage.setItem('arm', 'thursday');
            break;
        case 'friday':
            localStorage.setItem('arm', 'friday');
            break;
        case 'saturday':
            localStorage.setItem('arm', 'saturday');
            break;
        default:
            break;
    }

}

function updateBack(element) {
    selectedDay = element.value;
    switch (selectedDay) {
        case 'sunday':
            localStorage.setItem('back', 'sunday');
            break;
        case 'monday':
            localStorage.setItem('back', 'monday');
            break;
        case 'tuesday':
            localStorage.setItem('back', 'tuesday');
            break;
        case 'wednesday':
            localStorage.setItem('back', 'wednesday');
            break;
        case 'thursday':
            localStorage.setItem('back', 'thursday');
            break;
        case 'friday':
            localStorage.setItem('back', 'friday');
            break;
        case 'saturday':
            localStorage.setItem('back', 'saturday');
            break;
        default:
            break;
    }
}

function updateLeg(element) {
    selectedDay = element.value;
    switch (selectedDay) {
        case 'sunday':
            localStorage.setItem('leg', 'sunday');
            break;
        case 'monday':
            localStorage.setItem('leg', 'monday');
            break;
        case 'tuesday':
            localStorage.setItem('leg', 'tuesday');
            break;
        case 'wednesday':
            localStorage.setItem('leg', 'wednesday');
            break;
        case 'thursday':
            localStorage.setItem('leg', 'thursday');
            break;
        case 'friday':
            localStorage.setItem('leg', 'friday');
            break;
        case 'saturday':
            localStorage.setItem('leg', 'saturday');
            break;
        default:
            break;
    }
}

document.getElementById('start-training-btn').addEventListener('click', function () {
    window.location.href = '../training/training.html';
});