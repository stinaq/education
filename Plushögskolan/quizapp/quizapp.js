(function (window, $) {
    "use strict";

    var buildQuestionMarkup = function (question) {
        return [
            '<div>',
                '<p>',
                    question.question,
                '</p>',
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