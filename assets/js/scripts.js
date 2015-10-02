// Initialise JQuery SHOUTcast
$.SHOUTcast({
  host: 'starlightcomic.ddns.net',
  port: 8000,
  interval: 5000,
  if(this.onAir()){
    $('#songtitle').text(this.get('songtitle'));
  } else {
    $('#songtitle').text(this.get('songtitle','Off Air'));
  }
}).startStats();
