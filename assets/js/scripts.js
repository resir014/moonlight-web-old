// Icecast stream details thingy. (Thanks @puckipedia!)

var previousSongs = [];
var currentSong = '';

function sum(item, predicate) {
  var total = 0;
  for (var i in item)
    total += predicate(item[i], i);
  return total;
}

$(function() {
  $("#quality").change(function() {
    var new_url = $("#quality").val();
    $("#stream")[0].src = new_url;
  });
  if ($("#currentlisteners").length == 0)
    return; // not on status page
  setInterval(function() {
    $.getJSON('http://moonlightradio.ddns.net:8000/status-json.xsl', function(data) {
      var stream_data = data.icestats.source[0];
      if (!('artist' in stream_data))
        stream_data.artist = '';
      else
        stream_data.artist += ' - ';
      if (!('title' in stream_data))
        stream_data.title = '<unknown>';
      var current_song = stream_data.artist + stream_data.title;
      if (current_song != currentSong) {
        previousSongs.unshift(current_song);
        if (previousSongs.length > 10)
          previousSongs = previousSongs.slice(0, 10);
        $('#songtitle').html(current_song);
        var last_played = $('#played').empty();
          for (var song_i in previousSongs)
        $('<li />').html(previousSongs[song_i]).appendTo(last_played);
        currentSong = current_song;
      }
        $('#currentlisteners').text(
        sum(data.icestats.source, function(a) {return a.listeners; })
      );
      $('#maxlisteners').text(
        sum(data.icestats.source, function(a) { return a.listener_peak; })
      );
    });
  }, 1000);
});
