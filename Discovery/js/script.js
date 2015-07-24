

function randomizeYoutubeVideo() {

    var videos = [
    'JC2egrdAVYs',
    '8AoRmlAZVTs',
    'HOfll06X16c',
    'bJeG-GGH114'
    ];
    
    var index = Math.floor(Math.random() * videos.length);
    var html='<div id="video"><iframe width="560" height="315"   src="https://www.youtube.com/embed/' + videos[index] + '?autoplay=0" frameborder="0" allowfullscreen></iframe></div>';
    
    // we need to append the text inside the html variable in the page
    $('#videoPlayer').append(html);

}

function randomizeSongs(){
    var music = [
    'ANDREW GOLD - SPOOKY SCARY SKELETONS',
    'MIKA - ONE FOOT BOY',
    'SAINT PEPSI - ANGELS',
    'SAINT PEPSI - CHERRY PEPSI',
    'SAINT PEPSI - HIT VIBES'
    ];
    
    var orange = Math.floor(Math.random() * music.length);

    var song = document.getElementById("song");
    song.setAttribute("src", "songs/" + music[orange] + ".mp3");
    
    var songName = document.getElementById("songName");
    $('#songName').append(music[orange])
    
    
    // $('#musicPlayer').append(grape);

}

$(document).ready(function() {
    randomizeYoutubeVideo();
    randomizeSongs();
});


if ("geolocation" in navigator) {
  $('.js-geolocation').show(); 
} else {
  $('.js-geolocation').hide();
}

$('.js-geolocation').on('click', function() {
  navigator.geolocation.getCurrentPosition(function(position) {
    loadWeather(position.coords.latitude+','+position.coords.longitude); 
  });
});

$(document).ready(function() {
  loadWeather('Seattle',''); 
});

function loadWeather(location, woeid) {
  $.simpleWeather({
    location: location,
    woeid: woeid,
    unit: 'f',
    success: function(weather) {
      html = '<ul><h3><i class="icon-'+weather.code+'"></i> '+weather.temp+'&#176;'+weather.units.temp+'</h3>';
      html += '<li>'+weather.city+', '+weather.region+'</li>';
      html += '<li class="currently">'+weather.currently+'</li>';
      html += '<li>'+weather.alt.temp+'&#176;C</li></ul>';  
      
      $("#weather").html(html);
    },
    error: function(error) {
      $("#weather").html('<p>'+error+'</p>');
    }
  });
}