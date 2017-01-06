(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.apiKey = "37b10bbad98da730809df5f1f92d836d";

},{}],2:[function(require,module,exports){
var apiKey = require('./../.env').apiKey;


Doctor = function(medicalIssue) {
  this.medicalIssue = medicalIssue;
};


Doctor.prototype.getDoctors = function(medicalIssue) {
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+ medicalIssue+'&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=' + apiKey).then(function(result) {
     $('.showDoctors').text(result.data.forEach(function(data) {
       $('.showDoctors').append("<li>" + "<span>" + data.profile.first_name + " " + data.profile.middle_name + " " + data.profile.last_name + " " + data.profile.title + "</span>" + " " + data.profile.bio + "</li>");
      console.log(result);
     }));
  })
   .fail(function(error){
    //  $('.showDoctors').text(error.responseJSON.message);
      console.log("fail");
    });
};



exports.doctorModule = Doctor;

},{"./../.env":1}],3:[function(require,module,exports){
var Doctor = require('./../js/doctor.js').doctorModule;

$(document).ready(function() {
  var currentDoctorObject = new Doctor();
  $('.showDoctors').hide();
  $('#recommend').hide();
  $('#findDoctor').submit(function(event) {
    event.preventDefault();
    $('.showDoctors').empty();

    var medicalIssue = $('#medicalIssue').val();
    $('#medicalIssue').val("");

    currentDoctorObject.getDoctors(medicalIssue);

    $('#recommend').show();
    $('.showDoctors').show();
  });
});

},{"./../js/doctor.js":2}]},{},[3]);
