function showTrigger(){
	$('#trigger').show();
	$( "#trigger" ).dialog({
		resizable: false,
		height: 'auto',
		width: 'auto',
		position: { my: "left top", at: "left+20 top+20"},
		modal: true
		});
	
};
function configTrigger(){
	$('#map-canvas').hide();
	$('#show-text').hide();
	var t=$('#trigger-select option:selected').val();
	if (t == 'time') showTimeTrigger();
	if (t == 'geofence') showGeoTrigger();
	if (t == 'custom') showCustomTrigger();
};
function showCustomTrigger(){
	$('#show-text').html('Specify Activity: <input id="trigger-custom"/>');
	$('#show-text').show();
};
function showTimeTrigger(){
	$('#show-text').html('Exact Time: <input id="trigger-exact-time"/>'
	+'<br/>'
	+'Epoch Time: <input id="trigger-epoch-time"/>');
	$('#show-text').show();
};
function showGeoTrigger(){
	displayInfo(distanceWidget);
	$('#show-text').show();
	$('#map-canvas').show();
	google.maps.event.trigger(map, 'resize');
	map.setCenter(distanceWidget.get('position'));
	
};

