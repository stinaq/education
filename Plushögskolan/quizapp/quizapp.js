(function (window, $) {
    "use strict";

    var buildQuestionMarkup = function (questionItem) {
        return [
            '<div>',
                '<p>',
                    questionItem.question,
                '</p>',
                '<ul>',
                    '<li>',
                        questionItem.a,
                    '</li>',
                    '<li>',
                        questionItem.b,
                    '</li>',
                    '<li>',
                        questionItem.c,
                    '</li>',
                    '<li>',
                        questionItem.d,
                    '</li>',
                '</ul>',
            '</div>'
        ].join('');
    };

    var renderQuestion = function (markup) {
        var quizWrapper = $('#quiz-wrapper');
        quizWrapper.html(markup);
    };

    var success = function (data) {
        var finishedMarkup = '';
        $.each(data, function(index, element) {
            finishedMarkup += buildQuestionMarkup(element);
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
    getData();
})(window, jQuery);