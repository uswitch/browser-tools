/* 

uSwitch jQuery 1.9 migration test 
Craig Morey @pixelthing
A browser favelet that shows what version of jQuery the current page uses and carry out some basic tests to check what obstacles are in the way of migrating to jQuery 1.9

*/

function uSwitchJq19Init () {

  // check for jQuery
  if (!jQuery) { 
    alert('jQuery is not loaded');
    return;
  }
  
  var uSwitchJq19Obj = {};
  var jqVersion = $().jquery;

  // create dummy object
	var testNode = document.createElement("a");
	
	

	// if we're running, use click to remove everything
	if ( uSwitchJq19Obj.running == true ) {
		uSwitchJq19Close();
		return;
	}
	
	// show that the grid is on
	uSwitchJq19Obj.running = true;
	
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
	gridContainer.innerHTML += '<div id="uswitch-grid-dashboard" style="position:fixed;right:20px;bottom:20px;padding:5px 10px;color:#fff;background:rgba(255,0,0,0.8);font-weight:bold;">jQuery v' + jqVersion + '</div>';
	
	document.body.appendChild(gridContainer);

}

function uSwitchJq19Close () {

	document.body.removeChild( document.getElementById( 'uswitch-grid-container' ) );
	
	uSwitchJq19Obj.running = false;
	
}

// Run the whole thing

uSwitchJq19Init();