import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import UserObject from './UserObject.js';

$(document).ready(function() {
  $('form').submit(function(event) {
    event.preventDefault();
    let ageInput = $("#ageInput").val();
    let expectancyInput = $("#expectancyInput").val();
    let userInfo = new UserObject(ageInput, expectancyInput);

    $('#earth-age').text(userInfo.earthAge);
    $('#mercury-age').text(userInfo.mercuryAge);
    $('#venus-age').text(userInfo.venusAge);
    $('#mars-age').text(userInfo.marsAge);
    $('#jupiter-age').text(userInfo.jupiterAge);

    if ( userInfo.earthLife > 0 ) {
      $('#earth-life').text(userInfo.earthLife + " Terran years to meat-suit termination.");
      $('#mercury-life').text(userInfo.mercuryLife + " Mercurial years to meat-suit termination.");
      $('#venus-life').text(userInfo.venusLife + " Venusian years to meat-suit termination.");
      $('#mars-life').text(userInfo.marsLife + " Martian years to meat-suit termination.");
      $('#jupiter-life').text(userInfo.jupiterLife + " Jovian years to meat-suit termination.");
    } else if ( userInfo.earthLife < 0 ) {
      $('#earth-life').text(Math.abs(userInfo.earthLife) + " Terran years have passed beyond your scheduled termination.");
      $('#mercury-life').text(Math.abs(userInfo.mercuryLife) + " Mercurial years have passed beyond your scheduled termination.");
      $('#venus-life').text(Math.abs(userInfo.venusLife) + " Venusian years have passed beyond your scheduled termination.");
      $('#mars-life').text(Math.abs(userInfo.marsLife) + " Martian years have passed beyond your scheduled termination.");
      $('#jupiter-life').text(Math.abs(userInfo.jupiterLife) + " Jovian years have passed beyond your scheduled termination.");
    } else if ( userInfo.earthLife === 0 ) {
      $('.timeLeftList span').text("Are you OK?? You may have just died!");
    } else {
      console.log("ERROR: Unusual Branch Hit");
    }
  });
});
