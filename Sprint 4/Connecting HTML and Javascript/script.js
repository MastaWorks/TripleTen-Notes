const reservationButton = document.querySelector(".reservation__button");
const reservationModal = document.querySelector("#reservation-modal");
const reservationCloseBtn = reservationModal.querySelector(".modal__close-btn");
const reservationForm = reservationModal.querySelector(".modal__form");
const reservationNameInput = reservationModal.querySelector("#name-input");
const reservationCountInput = reservationModal.querySelector("#count-input");
const reservationDateInput = reservationModal.querySelector("#datetime-input");
const reservationEmailInput = reservationModal.querySelector("#email-input");


const confirmationModal = document.querySelector("#confirmation-modal");
const confirmationCloseBtn = confirmationModal.querySelector(".modal__close-btn");
const confirmationTextEl = confirmationModal.querySelector(".modal__text");

function openModal(modal){
  modal.classList.add("modal_is-opened");
}

function closeModal(modal)
{
  modal.classList.remove("modal_is-opened)");
}

confirmationCloseBtn.addEventListener("click", function () {
  closeModal(confirmationModal);
});

reservationButton.addEventListener("click", function () {
  openModal(reservationModal)
});

reservationCloseBtn.addEventListener("click", function () {
  closeModal(reservationModal);
});

reservationForm.addEventListener("submit", function (evt) {
  evt.preventDefault();
  openModal(confirmationModal);
  closeModal(reservationModal);

  const inputValues = {
    name: reservationNameInput.value,
    count: reservationCountInput.value,
    date: reservationDateInput.value,
    email: reservationEmailInput.value,
  };

  confirmationTextEl.textContent = getConfirmationMessage(inputValues);

  evt.target.reset();
});

function formatDateTime(dateTimeStr) {
  const date = new Date(dateTimeStr);
  const month = date.toLocaleString("en-US", { month: "short" });
  const day = date.getDate();
  const time = date.toLocaleString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });
  return `${month} ${day} at ${time}`;
}

function getConfirmationMessage(values) {
  let firstName = values.name.split(" ")[0];
  return `Hi, ${firstName}! Your reservation for ${values.count} has been made for ${formatDateTime(values.date)}. A confirmation email has been sent to ${values.email}.`;
}
