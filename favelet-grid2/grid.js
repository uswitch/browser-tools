/* 

uStyle grid overlay favelet 
Craig Morey @pixelthing
A browser favelet to use on a uStyle web page to overlay the grid as defined by the current uSwitch stylesheet

*/

function uSwitchGridInit () {
  

	// store the normal values for later
	if ( typeof(uSwitchGridObj) == 'undefined' ) {
		uSwitchGridObj = {}
	}

	// if we're running, use click to remove everything
	if ( uSwitchGridObj.running == true ) {
		uSwitchGridClose();
		return;
	}
	
	// show that the grid is on
	uSwitchGridObj.running = true;
	
	// set up the grid
  var gridContainer = document.createElement("div");
  gridContainer.id = 'uswitch-grid-container';
	gridContainer.innerHTML = "\
  <div style='position:fixed !important;left: 0 !important;top: 0 !important;z-index:999999 !important;width:100% !important;height:100% !important;margin:0 !important;padding:0 !important;pointer-events:none'>\
    <div id='uswitch-grid-column' class='us-container' style='height:100%;'>\
      <div id='uswitch-grid-overlay' style='height:100% !important;margin:0 -15px !important;'>\
        <div class='us-col-1' style='height:100% !important;min-height:100% !important;padding:0 !important;color:#c00 !important;background:rgba(255,0,0,0.1) !important;text-align:center !important;box-sizing:border-box !important;pointer-events:none !important;'><div style='height:100% !important;margin:0 15px;padding: 20px 0;background:rgba(255,0,0,0.1) !important;'>01</div></div>\
        <div class='us-col-1' style='height:100% !important;min-height:100% !important;padding:0 !important;color:#00c !important;background:rgba(0,0,255,0.1) !important;text-align:center !important;box-sizing:border-box !important;pointer-events:none !important;'><div style='height:100% !important;margin:0 15px;padding: 20px 0;background:rgba(0,0,255,0.1) !important;'>02</div></div>\
        <div class='us-col-1' style='height:100% !important;min-height:100% !important;padding:0 !important;color:#c00 !important;background:rgba(255,0,0,0.1) !important;text-align:center !important;box-sizing:border-box !important;pointer-events:none !important;'><div style='height:100% !important;margin:0 15px;padding: 20px 0;background:rgba(255,0,0,0.1) !important;'>03</div></div>\
        <div class='us-col-1' style='height:100% !important;min-height:100% !important;padding:0 !important;color:#00c !important;background:rgba(0,0,255,0.1) !important;text-align:center !important;box-sizing:border-box !important;pointer-events:none !important;'><div style='height:100% !important;margin:0 15px;padding: 20px 0;background:rgba(0,0,255,0.1) !important;'>04</div></div>\
        <div class='us-col-1' style='height:100% !important;min-height:100% !important;padding:0 !important;color:#c00 !important;background:rgba(255,0,0,0.1) !important;text-align:center !important;box-sizing:border-box !important;pointer-events:none !important;'><div style='height:100% !important;margin:0 15px;padding: 20px 0;background:rgba(255,0,0,0.1) !important;'>05</div></div>\
        <div class='us-col-1' style='height:100% !important;min-height:100% !important;padding:0 !important;color:#00c !important;background:rgba(0,0,255,0.1) !important;text-align:center !important;box-sizing:border-box !important;pointer-events:none !important;'><div style='height:100% !important;margin:0 15px;padding: 20px 0;background:rgba(0,0,255,0.1) !important;'>06</div></div>\
        <div class='us-col-1' style='height:100% !important;min-height:100% !important;padding:0 !important;color:#c00 !important;background:rgba(255,0,0,0.1) !important;text-align:center !important;box-sizing:border-box !important;pointer-events:none !important;'><div style='height:100% !important;margin:0 15px;padding: 20px 0;background:rgba(255,0,0,0.1) !important;'>07</div></div>\
        <div class='us-col-1' style='height:100% !important;min-height:100% !important;padding:0 !important;color:#00c !important;background:rgba(0,0,255,0.1) !important;text-align:center !important;box-sizing:border-box !important;pointer-events:none !important;'><div style='height:100% !important;margin:0 15px;padding: 20px 0;background:rgba(0,0,255,0.1) !important;'>08</div></div>\
        <div class='us-col-1' style='height:100% !important;min-height:100% !important;padding:0 !important;color:#c00 !important;background:rgba(255,0,0,0.1) !important;text-align:center !important;box-sizing:border-box !important;pointer-events:none !important;'><div style='height:100% !important;margin:0 15px;padding: 20px 0;background:rgba(255,0,0,0.1) !important;'>09</div></div>\
        <div class='us-col-1' style='height:100% !important;min-height:100% !important;padding:0 !important;color:#00c !important;background:rgba(0,0,255,0.1) !important;text-align:center !important;box-sizing:border-box !important;pointer-events:none !important;'><div style='height:100% !important;margin:0 15px;padding: 20px 0;background:rgba(0,0,255,0.1) !important;'>10</div></div>\
        <div class='us-col-1' style='height:100% !important;min-height:100% !important;padding:0 !important;color:#c00 !important;background:rgba(255,0,0,0.1) !important;text-align:center !important;box-sizing:border-box !important;pointer-events:none !important;'><div style='height:100% !important;margin:0 15px;padding: 20px 0;background:rgba(255,0,0,0.1) !important;'>11</div></div>\
        <div class='us-col-1' style='height:100% !important;min-height:100% !important;padding:0 !important;color:#00c !important;background:rgba(0,0,255,0.1) !important;text-align:center !important;box-sizing:border-box !important;pointer-events:none !important;'><div style='height:100% !important;margin:0 15px;padding: 20px 0;background:rgba(0,0,255,0.1) !important;'>12</div></div>\
      </div>\
    </div>\
  </div>";
  document.body.appendChild(gridContainer);

}

function uSwitchGridClose () {

	document.body.removeChild( document.getElementById( 'uswitch-grid-container' ) );
	
	uSwitchGridObj.running = false;
	
}

// Run the whole thing

uSwitchGridInit();