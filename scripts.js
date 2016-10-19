var websiteTitle = document.querySelector('userTitle');
var websiteURL = document.querySelector('userWebsite');
var enterButton = getElementById('Enter');


enterButton.addEventListener('click', function() {
websiteTitle.innerText = 'Title';
websiteURL.innerText = 'URL';

$('#mainTwo').append(`<ul>
  <h2>${websiteTitle}</h2>
  <input class="user-input" type="letters"
  name="name" placeholder="websiteURL">
  <br>
  <button id="Read" type="button" >Read</button>
  <br>
  <button id="Delete" type="button" >Delete</button>
  </ul>`)




})
