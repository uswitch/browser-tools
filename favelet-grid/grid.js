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
	gridContainer.style.position = 'fixed';
	gridContainer.style.left = '0';
	gridContainer.style.top = '0';
	gridContainer.style.zIndex = '999999';
	gridContainer.style.display = 'block';
	gridContainer.style.width = '100%';
	gridContainer.style.height = '100%';
	gridContainer.style.margin = '0';
	gridContainer.style.padding = '0';
	gridContainer.style.pointerEvents = 'none';
	gridContainer.innerHTML = '<div id="uswitch-grid-overlay" class="twelve-col" style="height:100% !important;"><div class="one-col" style="height:auto !important;min-height:100% !important;padding:20px 0 !important;color:#c00 !important;background:rgba(255,0,0,0.1) !important;border:1px solid rgba(255,0,0,0.3) !important;text-align:center !important;box-sizing:border-box !important;pointer-events:none !important;">1</div><div class="one-col" style="height:auto !important;min-height:100% !important;padding:20px 0 !important;color:#c00 !important;background:rgba(255,0,0,0.1) !important;border:1px solid rgba(255,0,0,0.3) !important;text-align:center !important;box-sizing:border-box !important;pointer-events:none !important;">2</div><div class="one-col" style="height:auto !important;min-height:100% !important;padding:20px 0 !important;color:#c00 !important;background:rgba(255,0,0,0.1) !important;border:1px solid rgba(255,0,0,0.3) !important;text-align:center !important;box-sizing:border-box !important;pointer-events:none !important;">3</div><div class="one-col" style="height:auto !important;min-height:100% !important;padding:20px 0 !important;color:#c00 !important;background:rgba(255,0,0,0.1) !important;border:1px solid rgba(255,0,0,0.3) !important;text-align:center !important;box-sizing:border-box !important;pointer-events:none !important;">4</div><div class="one-col" style="height:auto !important;min-height:100% !important;padding:20px 0 !important;color:#c00 !important;background:rgba(255,0,0,0.1) !important;border:1px solid rgba(255,0,0,0.3) !important;text-align:center !important;box-sizing:border-box !important;pointer-events:none !important;">5</div><div class="one-col" style="height:auto !important;min-height:100% !important;padding:20px 0 !important;color:#c00 !important;background:rgba(255,0,0,0.1) !important;border:1px solid rgba(255,0,0,0.3) !important;text-align:center !important;box-sizing:border-box !important;pointer-events:none !important;">6</div><div class="one-col" style="height:auto !important;min-height:100% !important;padding:20px 0 !important;color:#c00 !important;background:rgba(255,0,0,0.1) !important;border:1px solid rgba(255,0,0,0.3) !important;text-align:center !important;box-sizing:border-box !important;pointer-events:none !important;">7</div><div class="one-col" style="height:auto !important;min-height:100% !important;padding:20px 0 !important;color:#c00 !important;background:rgba(255,0,0,0.1) !important;border:1px solid rgba(255,0,0,0.3) !important;text-align:center !important;box-sizing:border-box !important;pointer-events:none !important;">8</div><div class="one-col" style="height:auto !important;min-height:100% !important;padding:20px 0 !important;color:#c00 !important;background:rgba(255,0,0,0.1) !important;border:1px solid rgba(255,0,0,0.3) !important;text-align:center !important;box-sizing:border-box !important;pointer-events:none !important;">9</div><div class="one-col" style="height:auto !important;min-height:100% !important;padding:20px 0 !important;color:#c00 !important;background:rgba(255,0,0,0.1) !important;border:1px solid rgba(255,0,0,0.3) !important;text-align:center !important;box-sizing:border-box !important;pointer-events:none !important;">10</div><div class="one-col" style="height:auto !important;min-height:100% !important;padding:20px 0 !important;color:#c00 !important;background:rgba(255,0,0,0.1) !important;border:1px solid rgba(255,0,0,0.3) !important;text-align:center !important;box-sizing:border-box !important;pointer-events:none !important;">11</div><div class="one-col edge" style="height:auto !important;min-height:100% !important;padding:20px 0 !important;color:#c00 !important;background:rgba(255,0,0,0.1) !important;border:1px solid rgba(255,0,0,0.3) !important;text-align:center !important;box-sizing:border-box !important;pointer-events:none !important;">12</div></div>';
	gridContainer.innerHTML += '<div id="uswitch-grid-dashboard" style="position:fixed;right:20px;bottom:20px;padding:5px 10px;color:#fff;background:rgba(255,0,0,0.8);font-weight:bold;">[unknown uSwitch style]</div>';
	
	document.body.appendChild(gridContainer);

}

function uSwitchGridClose () {

	document.body.removeChild( document.getElementById( 'uswitch-grid-container' ) );
	
	uSwitchGridObj.running = false;
	
}

// Run the whole thing

uSwitchGridInit();