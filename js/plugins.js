// Avoid `console` errors in browsers that lack a console.
(function() {
  var method;
  var noop = function () {};
  var methods = [
    'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
    'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
    'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
    'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
  ];
  var length = methods.length;
  var console = (window.console = window.console || {});

  while (length--) {
    method = methods[length];

    // Only stub undefined methods.
    if (!console[method]) {
      console[method] = noop;
    }
  }
}());

// Place any jQuery/helper plugins in here.
var zt = new ZingTouch.Region(document.body);

const tap = new ZingTouch.Pan();
tap.start = function (inputs) {
  var target = inputs[0].current.originalEvent.target.parentElement;
  target.classList.add('hover');
  console.log('Class: Tap, Function: start, Line 30 target(): '
  , target);
  navigator.vibrate([500]);
  console.log('start(): '
    , inputs);
};
tap.end = function (inputs) {
  var target = inputs[0].current.originalEvent.target.parentElement;
  navigator.vibrate([500]);
  target.classList.remove('hover');
  console.log('end(): '
    , inputs);
};

var pickupButton = document.getElementById('pickupButton');
zt.bind(pickupButton, tap, function(e){
  console.log('pickup');
}, false);

var catButton = document.getElementById('catButton');
zt.bind(catButton, tap, function(e){
  console.log('cat');
}, false);

var dogButton = document.getElementById('dogButton');
zt.bind(dogButton, tap, function(e){
  console.log('dog');
}, false);

var carrotButton = document.getElementById('carrotButton');
zt.bind(carrotButton, tap, function(e){
  console.log('carrot');
}, false);


