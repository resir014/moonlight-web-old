/*
 * Script to generate a random splash text every refresh.
 */
(function() {
  var splash = [
    "Like memes? Join MOONLIGHT!",
    "Home of the dankest memes and the angriest sergals.",
    "Better a hole in your moon, than a moon in your hole.",
    "Where were you, when STARLIGHT is kill?",
    "Held together with duct tape.",
    "We cook on ion drives.",
    "Very vaporwave, much cloudy.",
    "We excel at crashing into asteroids.",
    "We welcome everyone (even sergals!)",
    "The dark side of STARLIGHT.",
    "Playing nothing but Wolfgun since 2015.",
    "Powered by Winamp.",
    "リサフランク420 / 現代のコンピュー",
    "Nothing but vaporwave and Wolfgun.",
    "God is dead, we have killed him with vaporwave.",
    "Sergals. That is all."
  ];
  var rand = splash[Math.floor(Math.random() * splash.length)];
  document.getElementById("splash").innerText = rand;
})();
