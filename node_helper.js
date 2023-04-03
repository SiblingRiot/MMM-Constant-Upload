/* Magic Mirror
 * Node Helper: MMM-Constant-Upload
 *
 * By Sibling Riot
 * MIT Licensed.
 */

const NodeHelper = require('node_helper');
const { spawn } = require('child_process');

module.exports = NodeHelper.create({
  start: function() {
    console.log('Starting MMM-Compliment-Sender');

    this.child = spawn('sh', ['/home/pi/MagicMirror/Connections/upload.sh'], {
      detached: true,
      stdio: 'ignore',
    });

    this.child.unref();
  },

  stop: function() {
    console.log('Stopping MMM-Compliment-Sender');

    process.kill(-this.child.pid);
  },

  socketNotificationReceived: function(notification) {
    if (notification === 'START_SCRIPT') {
      this.start();
    } else if (notification === 'STOP_SCRIPT') {
      this.stop();
    }
  },
});
