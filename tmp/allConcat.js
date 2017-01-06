var Doctor = require('./../js/doctor.js').doctorModule;

$(document).ready(function() {
  var currentDoctorObject = new Doctor();
  $('.showDoctors').hide();

  $('#findDoctor').submit(function(event) {
    event.preventDefault();
    $('.showDoctors').empty();

    var medicalIssue = $('#medicalIssue').val();
    $('#medicalIssue').val("");

    currentDoctorObject.getDoctors(medicalIssue);

    $('.showDoctors').show();
  });
});
