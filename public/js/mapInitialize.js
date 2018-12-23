;(function($){
	//set default properties
	var defaults = {
		id: "map-canvas",
		latitude: 24.759933,
		longitude: 90.399491,
		zoom: 8,
		mapType: "road",
		wheel: true,
		icon: "red",
		title: "Mymensingh Zilla School, Mymensingh, Dhaka Division, Bangladesh",
		content: "Mymensingh Zilla School",
		styleType: "off",
		animation: "none",
		//water style start here
		waterColor: "#00aeef",
		//natural landscape style
		landscapeHue: "#e6dcab",
		background: "#CFCFCF"
	};
	
	//initialize the constructor
	function MapInit(element, options){
		var widget = this;
		widget.element = element;
		widget.config = $.extend({}, defaults, options);
		
		//call the prototype
		widget.init();
	}
	
	//initialize the prototype
	MapInit.prototype.init = function(){
		//create map object
		var currentLocation = new google.maps.LatLng(this.config.latitude, this.config.longitude);
		
		//map-type array
		var type = {
			"road": google.maps.MapTypeId.ROADMAP,
			"satellite": google.maps.MapTypeId.SATELLITE,
			"hybrid": google.maps.MapTypeId.HYBRID,
			"terrain": google.maps.MapTypeId.TERRAIN
		};
		
		//map icon animation array
		var animate = {
			"bounce": google.maps.Animation.BOUNCE,
			"drop": google.maps.Animation.DROP
		};
		
		//document.getElementById() function alternative
		var myId = $("#" + this.config.id)[0];
		
		//set map styles
		var styles = [  
			{   //water style
				featureType: 'water',  
				elementType: 'geometry.fill',  
				stylers: [  
					{ hue: "#FF0000" }, //indicates the basic color
					{ color: this.config.waterColor }, //sets the color of the feature
					{ lightness: -20 }, //-100 to 100
					{ saturation: 20 }, //-100 to 100
					{ gamma: 1.5 }, //0.01 to 10.0
					{ invert_lightness: false }, //true, false
					{ weight: 0 } //an integer value, greater than or equal to zero
				]  
			},{ //natural landscape style
				featureType: 'landscape.natural',  
				elementType: 'all',  
				stylers: [  
					{ hue: this.config.landscapeHue },  
					{ saturation: 0 },
					{ lightness: 1 }  
				]  
			},{ //poi style
				featureType: 'poi',  
				elementType: 'geometry',  
				stylers: [  
					{ hue: '#ff0000' },  
					{ lightness: 10 }
				]  
			},{ //geometry road style
				featureType: 'road',  
				elementType: 'geometry',  
				stylers: [  
					{ hue: '#dda000' },  
					{ lightness: 14 }  
				]  
			},{ //local road style  
				featureType: 'road.local',  
				elementType: 'all',  
				stylers: [  
					{ hue: '#ffd7a6' },  
					{ saturation: 100 },  
					{ lightness: -12 }  
				]  
			},{ //poi school style
				featureType: 'poi.school',
				elementType: 'geometry',
				stylers: [
					{ visibility: 'on' },
					{ hue: '#fff700' },
					{ lightness: -15 },
					{ saturation: 99 }
				]
			}
		]; 
		
		
		if(this.config.styleType == "off"){
			//set map options
			var mapOptions = {
				zoom: this.config.zoom,
				center: currentLocation,
				mapTypeId: type[this.config.mapType],
				scrollwheel: this.config.wheel,
				backgroundColor: this.config.background,
				disableDefaultUI: false,
				disableDoubleClickZoom: true,
				draggable: false,
				//draggableCursor: 'url(../icons/green.png), auto;',
				//heading: 10,
				//maxZoom: 100,
				//minZoom: 100
			};
			
			//send the map option
			var map = new google.maps.Map(myId, mapOptions);
			
			//establish the map style
			var styledMapType = new google.maps.StyledMapType(styles, { name: 'Styled' });  
			map.mapTypes.set('Styled', styledMapType);
		}else if(this.config.styleType == "on"){
			//set map options
			var mapOptions = {
				zoom: this.config.zoom,
				center: currentLocation,
				mapTypeId: type[this.config.mapType],
				scrollwheel: this.config.wheel,
				//map style
				mapTypeControlOptions: {  
					mapTypeIds: ['Styled']
				},
				mapTypeId: 'Styled'
			};
			
			//send the map opject
			var map = new google.maps.Map(myId, mapOptions);
			
			//establish the map style
			var styledMapType = new google.maps.StyledMapType(styles, { name: 'Styled' });  
			map.mapTypes.set('Styled', styledMapType);
		}else{
			$("<h3 />", {
				text: "Given invalid property '" + this.config.styleType + "'. Please select 'on' or 'off' property."
			}).appendTo($("#" + this.config.id));
		}
		console.log(this.config.styleType);
		
		if(this.config.animation == "off"){
			//set map marker
			var marker = new google.maps.Marker({
				position: currentLocation,
				map: map,
				title: this.config.title,
				icon: "icons/" + this.config.icon + ".png"
			});
		}else{
			//set map marker
			var marker = new google.maps.Marker({
				position: currentLocation,
				map: map,
				title: this.config.title,
				animation: animate[this.config.animation],
				icon: "icons/" + this.config.icon + ".png"
			});
		}
		
		//establish the marker object
		marker.setMap(map);
		
		//set information window object
		var infowindow = new google.maps.InfoWindow({
			content: "<div class='infowindow'>"+ this.config.content +"</div>"
		});
		
		//establish information window object
		infowindow.open(map, marker);
		
		console.log(type[this.config.mapType]);
	}
	
	//create main function
	$.fn.mapInitialize = function(options){
		//call the constructor
		new MapInit(this.first(), options);
		
		//return current element for chaining
		return this;
	}
}(jQuery));
