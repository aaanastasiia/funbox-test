const cards = document.querySelectorAll('.main__items-card');
const ellipse = document.querySelectorAll('.card-cat__weight');
const text = document.querySelectorAll('.card-cat__subtitle');
const link = document.querySelectorAll('.note-text__link');
const notes = document.querySelectorAll('.note-text');
const notesDefault = document.getElementById('note-text').innerHTML;
let defaultCard;
let selectedCard;
let disableCard;

function cardClick () {
    [].forEach.call(cards, function (card, i) {
        card.addEventListener('click', function() {
            defaultCard = card.dataset.value;
            selectedCard = card.dataset.value;
            disableCard = card.dataset.value;
            if (defaultCard == "default") {
                card.classList.add("item-selected");
                ellipse[i].classList.add("ellipse-selected");
                card.dataset.value = "selected";
                card.addEventListener("mouseout", function () {
                    text[i].textContent = "Котэ не одобряет?";
                    text[i].style.color = "#e8568d";
                });
                card.addEventListener("mouseover", function () {
                    text[i].textContent = "Сказочное заморское яство";
                    text[i].style.color = "#7e7e7e";
                });
                notes[i].textContent = notes[i].dataset.valueSelected;
            }
            if (defaultCard == "selected") {
                card.classList.remove('item-selected');
                ellipse[i].classList.remove("ellipse-selected");
                ellipse[i].classList.add('ellipse-disable');
                card.classList.add('disable');
                card.dataset.value = "disable";
                card.addEventListener("mouseout", function () {
                    text[i].textContent = "Сказочное заморское яство";
                    text[i].style.color = "#7e7e7e";
                });
                notes[i].textContent = notes[i].dataset.valueDisable;
                notes[i].classList.add('notes-disable');
            }
            if (defaultCard == "disable") {
                card.classList.remove('disable');
                notes[i].classList.remove('notes-disable');
                ellipse[i].classList.remove('ellipse-disable');
                card.dataset.value = "default";
                notes[i].innerHTML = notesDefault;
            }
        })
    });
}

function buyClick () {
    [].forEach.call(notes, function (note, i) {
        note.addEventListener('click', function() {
            cards[i].classList.add("item-selected");
                ellipse[i].classList.add("ellipse-selected");
                cards[i].dataset.value = "selected";
                cards[i].addEventListener("mouseout", function () {
                    text[i].textContent = "Котэ не одобряет?";
                    text[i].style.color = "#e8568d";
                });
                cards[i].addEventListener("mouseover", function () {
                    text[i].textContent = "Сказочное заморское яство";
                    text[i].style.color = "#7e7e7e";
                });
                nnote.textContent = note.dataset.valueSelected;
            })
        });
};

buyClick();
cardClick();

