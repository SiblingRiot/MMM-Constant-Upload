/* global Module */

/* Magic Mirror
 * Module: MMM-Constant-Upload
 *
 * By Sibling Riot
 * MIT Licensed.
 */

Module.register("MMM-Constant-Upload", {
	defaults: {
		updateInterval: 10000,
		retryDelay: 5000
	},

  start: function() {
    console.log(`Starting ${this.name} module`);
    this.sendSocketNotification('START_SHELL');
  },

  // handle incoming socket notifications from the node helper
  socketNotificationReceived: function(notification, payload) {
    if (notification === 'SHELL_OUTPUT') {
      // handle the shell output here
    }
  }
});
