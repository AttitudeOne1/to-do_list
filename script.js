const newTaskButtonClose = document.querySelector('.new-task-button-close');
const newTaskButtonOpen = document.querySelector('.new-task-button-open');
const newTaskSectionClose = document.querySelector('.close');
const newTaskSectionOpen = document.querySelector('.open');
const checkedButtons = document.querySelectorAll('.check-button');
const filterButtons = document.querySelectorAll('.filter-button');
const cardItems = document.querySelectorAll('.card-item');
const cardList = document.querySelector('.card-list');
const buttonComplete = document.getElementById('completed');

let cardIds = [];
let cardCompleteIds = [];

newTaskButtonClose.onclick = function () {
    newTaskSectionClose.classList.add('invisible');
    newTaskSectionOpen.classList.remove('invisible');
}

newTaskButtonOpen.onclick = function () {
    newTaskSectionClose.classList.remove('invisible');
    newTaskSectionOpen.classList.add('invisible');
}

cardItems.forEach((item, index) => {
    const uniqueId = 'card-' + (index + 1);
    item.id = uniqueId;
    cardIds.push(item.id);
});

//Завершённые
checkedButtons.forEach((button) => {

    button.onclick = function (evt) {
        button.classList.toggle('checked');
        const card = button.closest('.card-item');
        const isDone = card.classList.toggle('done');

        if (isDone && !cardCompleteIds.includes(card.id)) {
            cardCompleteIds.push(card.id);
        } else {
            const index = cardCompleteIds.indexOf(card.id);
            if (index !== -1) {
                cardCompleteIds.splice(index, 1);
            }
        }
    }
});

//Удаление карточки
cardList.addEventListener('click', function (evt) {
    const deleteButton = evt.target.closest('.delete-button');
    if (deleteButton) {
        const cardToRemove = deleteButton.closest('.card-item');
        if (cardToRemove) {
            cardToRemove.remove();
            cardIds.splice(cardIds.indexOf(cardToRemove.id), 1);
        }
    }

    if (cardIds.length < 1) {
        const text = document.createElement('p');
        text.textContent = 'Список задач пуст';
        text.classList.add('empty-text');
        cardList.append(text);
    }

});

filterButtons.forEach((button) => {
    button.onclick = function () {
        filterButtons.forEach(btn => btn.classList.remove('selected'));
        this.classList.add('selected');
    };
});

buttonComplete.addEventListener('click', function () {
    console.log(cardCompleteIds);

    // cardItems.filter((card) => console.log(card))
})