$(function() {
  var clock = $('#clock');
  setInterval(function () {
    theTime = moment().format('MMMM Do YYYY, h:mm:ss a');
    clock.text(theTime);
  }, 1000)
});