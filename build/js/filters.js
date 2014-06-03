define(['angular','moment', 'app'], function (angular, app) {
	'use strict';

	angular.module('calendarFilters', [])
		.filter('momentfromnow', function() {
	    return function(dateString, formatIn) {
	        return (dateString == undefined)?undefined:moment(dateString, formatIn).fromNow();
	        //2013-04-26T17:00:00.000+02:00
	    };
	  }).filter('momentcalendar', function() {
	    return function(dateString, formatIn) {
	    	
    	moment.lang('en', {
		    calendar : {
		        lastDay : '[Yesterday at] LT',
		        sameDay : '[Today at] LT',
		        nextDay : '[Tomorrow at] LT',
		        lastWeek : '[last] dddd [at] LT',
		        nextWeek : 'dddd [at] LT',
		        sameElse : 'L [at] LT'
		    }
		});
        return (dateString == undefined)?undefined:moment(dateString, formatIn).calendar();
    };
  }).filter('getId', function() {
    return function(url) {
        return (url == undefined)?undefined:url.split("/")[url.split("/").length - 1];
    };
  }).filter('breakline', function() {
    return function(html) {    	
        return (html != undefined)?html.replace(/\n/gi,'<br/>'):undefined;
    };
  }).filter('to_text', function() {
    return function(html) {    
    	if(html == undefined){
    		return undefined;
    	}
    	
    	var tmp = document.createElement("DIV");
	   	tmp.innerHTML = html;
	   	return tmp.textContent || tmp.innerText || "";
    };
  }).filter('length', function() {
    return function(text) {    	
        return (text != undefined)?text.length:undefined;
    };
  }).filter('getImage', function(){
  	return function(content){
  		//return (content == undefined)?undefined: $('<div/>').html(content).find("img:first").attr("src");
  		
  		if(content == undefined){
  			return undefined;
  		}
  		
  		var regex = /<img[^>]+src="([^">]+)"/i; 
    	var tmp = content.match(regex);
    	if(tmp.length>1){
    		return tmp[1];
    	}
  	};
  }).filter('text2AlphaNum', function(){
  	return function(title){
  		if(title == undefined){ return undefined;}
  		else if(title.replace(/ /ig,"_").replace(/[^a-zA-Z_\-0-9]+/g,'')!= ""){
  			return title.replace(/ /ig,"_").replace(/[^a-zA-Z_\-0-9]+/g,'');
  		}else{
  			return "event";
  		}
  	};
  }).filter('getUrl', function(){
  	return function(entry){
  		return (entry == undefined)?undefined:location.href;
  	};
  }).filter('getUrlEncode', function(){
  	return function(entry){
  		return (entry == undefined)?undefined:encodeURIComponent(location.href);
  	};
  }).filter('encode', function(){
  	return function(entry){
  		return (entry == undefined)?undefined:encodeURIComponent(entry);
  	};
  }).filter('getTwitterName', ['$sce', function($sce){
  	//http://www.simonwhatley.co.uk/examples/twitter/prototype/
  	return function(entry){
  		if(entry != undefined && entry.match(/[@]+[A-Za-z0-9-_]+/g) != null){
  			var username = entry.match(/[@]+[A-Za-z0-9-_]+/g)[0].replace("@","");
  			return $sce.trustAsHtml('<a href="https://twitter.com/'+username
  					+'" class="btn btn-default twitter-btn" target="_blank"><i class="fa fa-twitter"></i> @'+username+'</a>');
  		}
  		

  	};
  }]).filter('getTitleWithoutTwitterName', ['$sce', function($sce){
  	//http://www.simonwhatley.co.uk/examples/twitter/prototype/
  	return function(entry){
  		if(entry != undefined){
  			if(entry.match(/[@]+[A-Za-z0-9-_]+/g) != null){
  				return entry.replace(entry.match(/[@]+[A-Za-z0-9-_]+/g)[0], "");
  			}
  			return entry;
  		}
  		

  	};
  }]).filter('to_trusted', ['$sce', function($sce){
        return function(text) {
        	if(text != undefined){
        		return $sce.trustAsHtml(text);
        	}
        };
    }]).filter('to_trusted_and_breakline', ['$sce', function($sce){
        return function(text) {
        	if(text != undefined){
        		return $sce.trustAsHtml(text.replace(/\n/gi,'<br/>'));
        	}
        };
    }]);
    
});