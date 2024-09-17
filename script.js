const modal = document.querySelector('.modal');
const modalButton = document.querySelector('.modal-button')

function toggleModal() {
    modalButton.addEventListener('click', () => {
        modal.classList.toggle('open')
    })
}

document.addEventListener("DOMContentLoaded", toggleModal);