/*!
 Linphone Web - Web plugin of Linphone an audio/video SIP phone
 Copyright (c) 2013 Belledonne Communications
 All rights reserved.
 

 Authors:
 - Yann Diorcet <diorcet.yann@gmail.com>
 
 */

/*globals jQuery,linphone*/

linphone.ui.popup.error = {
	init: function(base) {
		linphone.ui.popup.error.uiInit(base);
	},
	uiInit: function(base) {
	},
	translate: function(base) {
		
	},
	
	/**/
	show: function(base, error_id, args) {
		// Create error message
		var content;
		if(typeof error_id === 'undefined' || error_id === null) {
			content = jQuery("<div />").text(args).html();
		} else {
			content = jQuery.i18n.skeleton(error_id, args);
		}
		
		//Remove older error popup
		var element =  linphone.ui.popup.error.getErrorPopup(base, content);
		if(element !== null){
			element.remove();
		}
		
		// Generate error popup
		var list = base.find('> .content .popup');
		var errorPopup = linphone.ui.template(base, 'popup.error', {
			content: content
		});
		errorPopup.data('errorPopup',content);
		errorPopup.find('.button').click(linphone.ui.exceptionHandler(base, function(event) {
			var target = jQuery(event.target ? event.target : event.srcElement);
			
			// Close itself
			linphone.ui.popup.error.hide(base, errorPopup);
		}));
		
		// Append to DOM
		list.append(errorPopup);
		errorPopup.show();
		linphone.ui.popup.update(base);
	},
	hide: function(base, errorPopup) {
		errorPopup.remove();
		linphone.ui.popup.update(base);
	},
	getErrorPopup: function(base,content){
		var data = base.find('> .content .popup > .error').each(function (index, object) {
			var jobject = jQuery(object);
			var contentData=jobject.data('errorPopup');
			if(content === contentData){
				return jobject;
			}
		});
		return data;
	}
};
