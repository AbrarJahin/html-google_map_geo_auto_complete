$(function()
{
	$("#find_product_location").geocomplete(
	{
		map			: "#product_location",
		mapOptions	:
		{
			mapTypeId : 'roadmap',		//roadmap, satellite,hybrid, terrain,
			scrollwheel	: true,
			zoom: 10,
			center : new google.maps.LatLng(37.42152681633113, -119.27327880000001),
		},
		markerOptions:
		{
			draggable: true
		},
	})
		.bind("geocode:result", function(event, result)
		{
			console.log('Success');
			console.log(result.formatted_address);
			console.log( result.geometry.location.lat() );
			console.log( result.geometry.location.lng() );
			console.log(result);
		})
		.bind("geocode:error", function(event, status)
		{
			console.log('Error');
			console.log(status);
		})
		.bind("geocode:multiple", function(event, results)
		{
			console.log('Multiple');
			console.log(results.length);
			console.log(results);
		});
	//var product_location_map = $("#find_product_location").geocomplete("map");	//Get the map for any more operation
});