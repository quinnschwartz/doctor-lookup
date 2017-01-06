var apiKey = require('./../.env').apiKey;


Doctor = function(medicalIssue) {
  this.medicalIssue = medicalIssue;
};


Doctor.prototype.getDoctors = function(medicalIssue) {
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+ medicalIssue+'&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=10&user_key=' + apiKey).then(function(result) {
     $('.showDoctors').text(result.data.forEach(function(data) {
       $('.showDoctors').append("<li>" + "<span>Name:</span>" + " " + data.profile.bio + "</li>");
      console.log(result);
     }));
  })
   .fail(function(error){
    //  $('.showDoctors').text(error.responseJSON.message);
      console.log("fail");
    });
};



exports.doctorModule = Doctor;
