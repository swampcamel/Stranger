import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
// import UserAge from './AgeConverter.js';

$(document).ready(function() {
  $('form').submit(function(event) {
    event.preventDefault();
    const userAge = $("form input").val();
    console.log(userAge);
  })
});
