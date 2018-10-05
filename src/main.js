import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import UserObject from './UserObject.js';
import { findExpirationDate, findAge, findBirthdays } from './functions.js';

$(document).ready(function() {
  $('form').submit(function(event) {
    event.preventDefault();
    // Grab Inputs
    let dobInput = $("#dob").val();
    let expInput = $("#expectancyInput").val();

    // Calculate Age and create usable variables
    let jsDob = new Date(dobInput);
    let foundAge = findAge(dobInput);
    console.log(foundAge)
    let userInfo = new UserObject(foundAge, expInput);
    // Determine the date on earth of when the user will die
    let expirationDate = findExpirationDate(userInfo.earthLife);
    console.log(userInfo);
    let birthdays = findBirthdays(jsDob);

    // Outputs
    $('#earth-age').text(userInfo.earthAge);
    $('#mercury-age').text(userInfo.mercuryAge);
    $('#venus-age').text(userInfo.venusAge);
    $('#mars-age').text(userInfo.marsAge);
    $('#jupiter-age').text(userInfo.jupiterAge);

    birthdays.forEach(function(date, index) {
      console.log(index);
      $('#bd'+ index).text(date);
    });

    if ( userInfo.earthLife > 0 ) {
      $('#expirationDate').text(expirationDate);
      $('#earth-life').text(userInfo.earthLife + " Terran years to meat-suit termination.");
      $('#mercury-life').text(userInfo.mercuryLife + " Mercurial years to meat-suit termination.");
      $('#venus-life').text(userInfo.venusLife + " Venusian years to meat-suit termination.");
      $('#mars-life').text(userInfo.marsLife + " Martian years to meat-suit termination.");
      $('#jupiter-life').text(userInfo.jupiterLife + " Jovian years to meat-suit termination.");
    } else if ( userInfo.earthLife < 0 ) {
      $('#expirationDate').text(expirationDate);
      $('#earth-life').text(Math.abs(userInfo.earthLife) + " Terran years have passed beyond your scheduled termination.");
      $('#mercury-life').text(Math.abs(userInfo.mercuryLife) + " Mercurial years have passed beyond your scheduled termination.");
      $('#venus-life').text(Math.abs(userInfo.venusLife) + " Venusian years have passed beyond your scheduled termination.");
      $('#mars-life').text(Math.abs(userInfo.marsLife) + " Martian years have passed beyond your scheduled termination.");
      $('#jupiter-life').text(Math.abs(userInfo.jupiterLife) + " Jovian years have passed beyond your scheduled termination.");
    } else if ( userInfo.earthLife === 0 ) {
      $('.timeLeftList span').text("Are you OK?? You may have just died!");
      $('#expirationDate').text(new Date);
    } else {
      console.log("ERROR: Unusual Branch Hit");
    }
  });
});
