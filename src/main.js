import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import UserObject from './UserObject.js';

$(document).ready(function() {
  $('form').submit(function(event) {
    event.preventDefault();
    let ageInput = $("form input").val();
    let userInfo = new UserObject(ageInput);

    $('#earth-age').text(userInfo.earthAge);
    $('#mercury-age').text(userInfo.mercuryAge);
    $('#venus-age').text(userInfo.venusAge);
    $('#mars-age').text(userInfo.marsAge);
    $('#jupiter-age').text(userInfo.jupiterAge);
    $('#earth-life').text(userInfo.earthLife + " Terran years to meat-suit termination.");
    $('#mercury-life').text(userInfo.mercuryLife + " Mercurial years to meat-suit termination.");
    $('#venus-life').text(userInfo.venusLife + " Venusian years to meat-suit termination.");
    $('#mars-life').text(userInfo.marsLife + " Martian years to meat-suit termination.");
    $('#jupiter-life').text(userInfo.jupiterLife + " Jovian years to meat-suit termination.");
  });
});
