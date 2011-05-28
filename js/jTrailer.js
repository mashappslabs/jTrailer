/**
 * jTrailer - jQuery Plugin
 * youtube trailer search utility
 *
 * Copyright (c) 2011 Ady Ngom
 * Examples and documentation at: http://mashappslabs.com/jtrailer/
 * 
 * Version: 1.0 (05/28/2011)
 * Requires: jQuery v1.6+
 * 
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
**/
(function($) {
	$.extend({
		jTrailer: function(title, num, func) {
			if(title == null){
				return;
			}
			var title = $.trim(title).replace(/\s+/gi,'-');
			var max_items = num ? num : 1;
			var turl = "http://gdata.youtube.com/feeds/api/videos?q="+title+"-trailer&max-results="+num+"&alt=json";
			
			$.getJSON(turl, function(data) {
				if(typeof func == "function") {
					func.call(this, data.feed);	
				}
				else {
					return false;
				}
			});
		}
	})
})(jQuery);