/* global Module */

/* Magic Mirror
 * Module: MMM-Constant-Upload
 *
 * By Sibling Riot
 * MIT Licensed.
 */

Module.register('MMM-Constant-Upload', {
  start: function() {
    this.sendSocketNotification('START_SCRIPT');
  },

  stop: function() {
    this.sendSocketNotification('STOP_SCRIPT');
  },
});
