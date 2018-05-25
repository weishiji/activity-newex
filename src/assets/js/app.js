import $ from 'jquery';
import whatInput from 'what-input';
import './lib//jQuery.countdown.min';
import './lib/jquery.fullPage';

window.$ = $;

import Foundation from 'foundation-sites';
import line from './line';
// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
//import './lib/foundation-explicit-pieces';

$(document).foundation();

line();

$("#time-start")
  .countdown("2018/06/15", function(event) {
    $(this).html(
      //event.strftime('%D %H:%M:%S')
      event.strftime(''
                + '<span>%D</span> :'
                + '<span>%H</span> :'
                + '<span>%M</span> :'
                + '<span>%S</span>'
                )
    );
  });
  $('#footer-time').countdown("2018/06/15", function(event) {
    $(this).html(
      event.strftime(''
                + '<span>%D</span> :'
                + '<span>%H</span> :'
                + '<span>%M</span> :'
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