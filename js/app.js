document.addEventListener('DOMContentLoaded', () => {
  const newItemForm = document.querySelector('#new-item-form');
  newItemForm.addEventListener('submit', handleNewItemFormSubmit);

  const deleteAllButton = document.querySelector('#delete-all');
  deleteAllButton.addEventListener('click', handleDeleteAllClick)
});

const handleNewItemFormSubmit = function (event) {
  event.preventDefault();

  const footballerListItem = createFootballerItem(event.target);
  const footballerList = document.querySelector('#footballer-list');
  footballerList.appendChild(footballerListItem);

  event.target.reset();
};

const createFootballerItem = function (form) {
  const footballerListItem = document.createElement('li');
  footballerListItem.classList.add('footballer-list-item');

  const firstName = document.createElement('h2');
  firstName.textContent = form.first_name.value;
  footballerListItem.appendChild(firstName);
  console.log(form.first_name.value);

  const lastName = document.createElement('h2');
  lastName.textContent = form.last_name.value;
  footballListItem.appendChild(lastName);

  const age = document.createElement('h4');
  age.textContent = form.age.value;
  footballListItem.appendChild(age);

  const position = document.createElement('h3');
  position.textContent = form.position.value;
  footballListItem.appendChild(position);

  const team = document.createElement('h3');
  team.textContent = form.team.value;
  footballerListItem.appendChild(team);

  return footballListItem;
};

const handleDeleteAllClick = function (event) {
  const footballerList = document.querySelector('#footballer-list');
  footballerList.innerHTML = '';
}
