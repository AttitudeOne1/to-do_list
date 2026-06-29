const newTaskButtonClose = document.querySelector('.new-task-button-close');
const newTaskButtonOpen = document.querySelector('.new-task-button-open');
const newTaskSectionClose = document.querySelector('.close');
const newTaskSectionOpen = document.querySelector('.open');
const checkedButtons = document.querySelectorAll('.check-button');
const cardItems = document.querySelectorAll('.card-item');

newTaskButtonClose.onclick = function () {
    newTaskSectionClose.classList.add('invisible');
    newTaskSectionOpen.classList.remove('invisible');
}

newTaskButtonOpen.onclick = function () {
    newTaskSectionClose.classList.remove('invisible');
    newTaskSectionOpen.classList.add('invisible');
}

// cardItems.forEach((item, index) => {
//     const uniqueId = 'card-' + (index + 1);
//     item.id = uniqueId;

//     // checkedButtons.forEach((button) => {
//     //     button.onclick = function () {
//     //         button.classList.toggle('checked');
//     //         item.classList.toggle('done');
//     //     }
//     // })

// });

checkedButtons.forEach((button) => {
    
    button.onclick = function () {
        button.classList.toggle('checked');
        // item.classList.toggle('done');
    }
})