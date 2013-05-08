function showTrigger(){
	$('#trigger').jqmShow();
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
	$('#show-text').html('<label for="trigger-exact">Exact Time:</label>'
	+'<input id="trigger-exact"/>'
	+'<br/>'
	+'<label for="trigger-epoch">Epoch Time:</label>'
	+'<input id="trigger-epoch"/>');
	$('#show-text').show();
};
function showGeoTrigger(){
	displayInfo(distanceWidget);
	$('#show-text').show();
	$('#map-canvas').show();
	$('#map-canvas').height(screen.height*0.5);
	google.maps.event.trigger(map, 'resize');
	map.setCenter(distanceWidget.get('position'));
	
};
function setTrigger(){
       var sel = $('#trigger-select').val();
       var value = $('#show-text').text();
       if (sel == 'time')
               $('#property_Trigger').val(sel
                       +' exact '
                       +$('#trigger-exact').val()
                       +' epoch '
                       +$('#trigger-epoch').val()
                       );
       else
               $('#property_Trigger').val(sel + ' ' +value);
};

