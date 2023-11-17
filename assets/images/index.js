var today = moment().format("dddd M/ D / YYYY");

$('.fav').on('click', function () {
    $('.fiveDay').html(``)
    $('.fiveDay').addClass('box')
})

var getweather = (city) => {
    var requestUrl = '  var requestUrl = `https://api.openweathermap.org/data/2.5/forecast?&q=${city}&units=imperial&cnt=&appid=4ab8fb0f640052a7c1fc096698340e94';
    fetch(requestUrl)
}