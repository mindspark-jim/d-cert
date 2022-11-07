alert('ANOTHER new version of the script');
$(document).ready(function(){

    var routeDiv = $('.mile-route-details-route').first();
    $('#Report').remove();
    var report = '<ul id="Report">';
    report += '<li>Route: '+routeDiv.data('route')+'</li>';
    report += '<li>Mile Sequence: '+routeDiv.data('mile-sequence')+'</li>';
    report += '<li>Category: '+routeDiv.data('category')+'</li>';
    report += '<li>Min Minutes: '+routeDiv.data('min-minutes')+'</li>';
    report += '<li>Max Minutes: '+routeDiv.data('max-minutes')+'</li>';
    report += '<li>Video: '+$('#mile-video source').attr('src')+'</li>';
    var menus = $('#mile-question select');
    if (menus.length > 0) {
        report += '<li><strong>Questions</strong>';
        report += '<ol>';
        $('#mile-question select').each(function(menuIndex, menu){
            report += '<li>';
            report += '<strong>question-admin-label:</strong> ' + $(menu).data('question-admin-label');
            report += '<br>';
            report += '<strong>answer-set-admin-label: </strong>' + $(menu).data('answer-set-admin-label');
            report += '<br>';
            report += '</li>';
            report += '<br>';
            report += '</li>';
        });
    report += '</ol>';
    }A
    report += '</ul>';
    $('body').append(report);
});
