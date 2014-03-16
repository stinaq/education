(function (window, $) {
    "use strict";

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
                    '<input type="submit" value="Check">',
                '</div>',
            '</div>'
        ].join('');
    };

    var addEvents = function (quizWrapper) {
        quizWrapper.on('click', 'input[type=submit]', function () {
            console.log('i was clicked');
        });
    };

    var renderQuestion = function (markup) {
        var quizWrapper = $('#quiz-wrapper');
        quizWrapper.html(markup);
        addEvents(quizWrapper);
    };

    var success = function (data) {
        var finishedMarkup = '';
        $.each(data, function(index, element) {
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