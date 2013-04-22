/* 

uSwitch grid overlay favelet 
Craig Morey @pixelthing
A browser favelet to use on a uSwitch web page to overlay the grid as defined by the current uSwitch stylesheet

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
	gridContainer.innerHTML = '<div id="uswitch-grid-overlay" style="position:absolute !important;left:0 !important;top:0 !important;width:100% !important;height:auto !important;min-height:100% !important;"><div class="twelve-col" style="height:auto !important;min-height:100% !important;"><div class="one-col" style="height:auto !important;min-height:100% !important;padding:20px 0 !important;color:#c00 !important;background:rgba(255,0,0,0.3) !important;border:1px solid rgba(255,0,0,0.5) !important;text-align:center !important;box-sizing:border-box !important;pointer-events:none !important;">1</div><div class="one-col" style="height:auto !important;min-height:100% !important;padding:20px 0 !important;color:#c00 !important;background:rgba(255,0,0,0.3) !important;border:1px solid rgba(255,0,0,0.5) !important;text-align:center !important;box-sizing:border-box !important;pointer-events:none !important;">2</div><div class="one-col" style="height:auto !important;min-height:100% !important;padding:20px 0 !important;color:#c00 !important;background:rgba(255,0,0,0.3) !important;border:1px solid rgba(255,0,0,0.5) !important;text-align:center !important;box-sizing:border-box !important;pointer-events:none !important;">3</div><div class="one-col" style="height:auto !important;min-height:100% !important;padding:20px 0 !important;color:#c00 !important;background:rgba(255,0,0,0.3) !important;border:1px solid rgba(255,0,0,0.5) !important;text-align:center !important;box-sizing:border-box !important;pointer-events:none !important;">4</div><div class="one-col" style="height:auto !important;min-height:100% !important;padding:20px 0 !important;color:#c00 !important;background:rgba(255,0,0,0.3) !important;border:1px solid rgba(255,0,0,0.5) !important;text-align:center !important;box-sizing:border-box !important;pointer-events:none !important;">5</div><div class="one-col" style="height:auto !important;min-height:100% !important;padding:20px 0 !important;color:#c00 !important;background:rgba(255,0,0,0.3) !important;border:1px solid rgba(255,0,0,0.5) !important;text-align:center !important;box-sizing:border-box !important;pointer-events:none !important;">6</div><div class="one-col" style="height:auto !important;min-height:100% !important;padding:20px 0 !important;color:#c00 !important;background:rgba(255,0,0,0.3) !important;border:1px solid rgba(255,0,0,0.5) !important;text-align:center !important;box-sizing:border-box !important;pointer-events:none !important;">7</div><div class="one-col" style="height:auto !important;min-height:100% !important;padding:20px 0 !important;color:#c00 !important;background:rgba(255,0,0,0.3) !important;border:1px solid rgba(255,0,0,0.5) !important;text-align:center !important;box-sizing:border-box !important;pointer-events:none !important;">8</div><div class="one-col" style="height:auto !important;min-height:100% !important;padding:20px 0 !important;color:#c00 !important;background:rgba(255,0,0,0.3) !important;border:1px solid rgba(255,0,0,0.5) !important;text-align:center !important;box-sizing:border-box !important;pointer-events:none !important;">9</div><div class="one-col" style="height:auto !important;min-height:100% !important;padding:20px 0 !important;color:#c00 !important;background:rgba(255,0,0,0.3) !important;border:1px solid rgba(255,0,0,0.5) !important;text-align:center !important;box-sizing:border-box !important;pointer-events:none !important;">10</div><div class="one-col" style="height:auto !important;min-height:100% !important;padding:20px 0 !important;color:#c00 !important;background:rgba(255,0,0,0.3) !important;border:1px solid rgba(255,0,0,0.5) !important;text-align:center !important;box-sizing:border-box !important;pointer-events:none !important;">11</div><div class="one-col edge" style="height:auto !important;min-height:100% !important;padding:20px 0 !important;color:#c00 !important;background:rgba(255,0,0,0.3) !important;border:1px solid rgba(255,0,0,0.5) !important;text-align:center !important;box-sizing:border-box !important;pointer-events:none !important;">12</div></div></div><div id="uswitch-grid-dashboard" style="position:fixed;right:20px;bottom:20px;padding:5px 10px;color:#fff;background:rgba(255,0,0,0.8);font-weight:bold;">[unknown uSwitch style]</div>';
	
	document.body.appendChild(gridContainer);

}

function uSwitchGridClose () {

	document.body.removeChild( document.getElementById( 'uswitch-grid-container' ) );
	
	uSwitchGridObj.running = false;
	
}

// Run the whole thing

uSwitchGridInit();