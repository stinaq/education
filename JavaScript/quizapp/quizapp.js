(function (window, $) {
  "use strict";
  var quizData = [];

  var buildQuestionMarkup = function (questionItem, index) {
    return [
      '<div class="question-wrapper" id="', index, '">',
        '<p>',
          questionItem.question,
        '</p>',
        '<div>',
          '<div>',
            '<input type="checkbox" value="A">',
            questionItem.a,
        '</div>',
        '<div>',
            '<input type="checkbox" value="B">',
            questionItem.b,
        '</div>',
        '<div>',
            '<input type="checkbox" value="C">',
            questionItem.c,
        '</div>',
        '<div>',
          '<input type="checkbox" value="D">',
            questionItem.d,
        '</div>',
      '</div>',
      '<div>',
        '<input type="submit" value="Check my answer">',
      '</div>',
    '</div>'
    ].join('');
  };

  var checkAnswer = function (index, answers) {
    alert('Your answer was ' + answers + ' and the correct answers were ' + quizData[index].answer);
  };

  var addEvents = function (quizWrapper) {
    quizWrapper.on('click', 'input[type=submit]', function (event) {
      var questionElement = window.bla = $(event.currentTarget).parents('.question-wrapper');
      var questionIndex = questionElement.attr('id');
      var answers = $.map(questionElement.find('input[type=checkbox]:checked'), function (inputElement, key) {
        return $(inputElement).val();
      });
      checkAnswer(questionIndex, answers);
    });
  };

  var renderQuestion = function (markup) {
    var quizWrapper = $('#quiz-wrapper');
    quizWrapper.html(markup);
    addEvents(quizWrapper);
  };

  var success = function (data) {
    var finishedMarkup = '';
    quizData = data;
    $.each(quizData, function(index, element) {
        finishedMarkup += buildQuestionMarkup(element, index);
    });
    renderQuestion(finishedMarkup);
  };

  var getData = function() {
    $.ajax({
      url: 'data.json',
      success: success,
      error: console.log,
      dataType: 'json'
    });
  };

  var initialize = function () {
    getData();
  };

  initialize();
    
})(window, jQuery);