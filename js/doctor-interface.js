var Doctor = require('./../js/doctor.js').doctorModule;

$(document).ready(function() {
  var currentDoctorObject = new Doctor();
  $('#findDoctor').submit(function() {
    event.preventDefault();

    var medicalIssue = $('#medicalIssue').val();
    $('#medicalIssue').val("");

    currentDoctorObject.getDoctors(medicalIssue);

  });
});
