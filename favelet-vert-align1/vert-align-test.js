/* 

uStyle test to see what happens to a page formatting if we toggle inputs/buttons between vertical-align:middle/baseline
Craig Morey @pixelthing

*/

function uSwitchVertAlignTestInit () {

  // store the normal values for later
  if ( typeof(uSwitchVertAlignTestMiddle) == 'undefined' || uSwitchVertAlignTestMiddle === false ) {
    uSwitchVertAlignTestMiddle = true;
    $('.us-btn,.us-form-input').css('vertical-align','middle');
  } else {
    $('.us-btn,.us-form-input').css('vertical-align','baseline');
    uSwitchVertAlignTestMiddle = false;
  }

}

// Run the whole thing

uSwitchVertAlignTestInit();