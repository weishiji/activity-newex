import $ from 'jquery';
import whatInput from 'what-input';
import './lib//jQuery.countdown.min';
import './lib/lodash.min';
// import './lib/jquery.fullPage';

window.$ = $;

import Foundation from 'foundation-sites';
import line from './line';

line();
$(document).foundation();
const resizeImage = () => {
  const leftLen = $(window).width() > 1800 ? 0 : ($(window).width() - 1800) / 2
  $('.star-image')
    .css('left', leftLen)
    .css('visibility', 'visible');
}
$(window).resize(() => {
  resizeImage();
})
resizeImage();
// var labels = ['weeks', 'days', 'hours', 'minutes', 'seconds'],
//   nextYear = '2018/06/15',
//   template = _.template($('#main-example-template').html()),
//   currDate = '00:00:00:00:00',
//   nextDate = '00:00:00:00:00',
//   parser = /([0-9]{2})/gi,
//   $example = $('#main-example');
// // Parse countdown string to an object
// function strfobj(str) {
//   var parsed = str.match(parser),
//     obj = {};
//   labels.forEach(function (label, i) {
//     obj[label] = parsed[i]
//   });
//   return obj;
// }
// // Return the time components that diffs
// function diff(obj1, obj2) {
//   var diff = [];
//   labels.forEach(function (key) {
//     if (obj1[key] !== obj2[key]) {
//       diff.push(key);
//     }
//   });
//   return diff;
// }
// // Build the layout
// var initData = strfobj(currDate);
// labels.forEach(function (label, i) {
//   $example.append(template({
//     curr: initData[label],
//     next: initData[label],
//     label: label
//   }));
// });
// // Starts the countdown
// $example.countdown(nextYear, function (event) {
//   var newDate = event.strftime('%w:%d:%H:%M:%S'),
//     data;
//   if (newDate !== nextDate) {
//     currDate = nextDate;
//     nextDate = newDate;
//     // Setup the data
//     data = {
//       'curr': strfobj(currDate),
//       'next': strfobj(nextDate)
//     };
//     // Apply the new values to each node that changed
//     diff(data.curr, data.next).forEach(function (label) {
//       var selector = '.%s'.replace(/%s/, label),
//         $node = $example.find(selector);
//       // Update the node
//       $node.removeClass('flip');
//       $node.find('.curr').text(data.curr[label]);
//       $node.find('.next').text(data.next[label]);
//       // Wait for a repaint to then flip
//       _.delay(function ($node) {
//         $node.addClass('flip');
//       }, 50, $node);
//     });
//   }
// });

const countdonwTime = "2018/06/20";

$("#main-example")
  .countdown(countdonwTime, function(event) {
    $(this).html(
      event.strftime(''
                + '<span>%D</span><strong>:</strong>'
                + '<span>%H</span><strong>:</strong>'
                + '<span>%M</span><strong>:</strong>'
                + '<span>%S</span>'
                )
    );
  });
  $('#footer-time').countdown(countdonwTime, function(event) {
    $(this).html(
      event.strftime(''
                + '<span>%D</span><strong>:</strong>'
                + '<span>%H</span><strong>:</strong>'
                + '<span>%M</span><strong>:</strong>'
                + '<span>%S</span>'
                )
    );
  });

  // $('#fullpage').fullpage({
  //   css3: true,
  //   scrollOverflow: true,
  //   autoScrolling: false,
  //   fitToSection: false,
  //   verticalCentered: false,
  // });