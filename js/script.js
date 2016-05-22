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
	});
	//var product_location_map = $("#find_product_location").geocomplete("map");	//Get the map for any more operation
});