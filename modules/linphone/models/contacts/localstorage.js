/**
 * Contacts engine using localstorage
 */
/*globals linphone,PersistentStorage */

linphone.models.contacts.localStorage = {
	/*
	 * Object
	 */
	object: {
	},
	
	/* 
	 * Engine
	 */
	engine: function(name, debug) {
		var dbname = name + ' Contacts';
		
		// Get data from local storage or init
		this.ps = new PersistentStorage(dbname, {
			list: []
		}, 10000, debug);
		this.data = this.ps.config;
	}
};


//
// List
//

linphone.models.contacts.localStorage.engine.prototype.count = function() {
	return this.data.list.length;
};
 
linphone.models.contacts.localStorage.engine.prototype.list = function(filters) {
	return this.data.list;
};


//
// CRUD
//
 
linphone.models.contacts.localStorage.engine.prototype.read = function(id) {
};

linphone.models.contacts.localStorage.engine.prototype.create = function(object) {
};
 
linphone.models.contacts.localStorage.engine.prototype.update = function(id, object) {
};

linphone.models.contacts.localStorage.engine.prototype.remove = function(id) {
};