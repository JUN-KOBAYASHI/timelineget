window.onload = function() {

	submit.addEventListener('click', function() {

var getMonthDays = function(year, month) {
  return new Date(year, month, 0).getDate();
};

console.log('----');

var yyyy = document.getElementById( "yyyy" ).value ;
var tgmm = document.getElementById( "mm" ).value ;
//  var yyyy = 2018
  var today_date = new Date();
  var now_date = new Date(today_date.getFullYear(), today_date.getMonth()+1, today_date.getDate());

loop_label:

//  for (var i=1; i<=12; ++i) {
  for (var i=tgmm; i<=tgmm; ++i) {

//    console.log(yyyy + '/' + i + ':', getMonthDays(yyyy, i), 'days');

    daysall = getMonthDays(yyyy, i)

    for (var j=1; j<=daysall; ++j) {
        var mm = i - 1
        var target_date = new Date(yyyy, i , j);
		    // console.log('now: ' + now_date + ' | ' + 'target: ' + target_date)

        if (now_date.getTime() <= target_date.getTime()) {
             break loop_label;
        }

		open('https://www.google.com/maps/timeline/kml?authuser=0&pb=!1m8!1m3!1i'  + yyyy + '!2i' + mm + '!3i' + j +'!2m3!1i' + yyyy + '!2i' + mm + '!3i' + j)
//        console.log('https://www.google.com/maps/timeline/kml?authuser=0&pb=!1m8!1m3!1i'  + yyyy + '!2i' + mm + '!3i' + j +'!2m3!1i' + yyyy + '!2i' + mm + '!3i' + j)

    }

  }

	});
}
