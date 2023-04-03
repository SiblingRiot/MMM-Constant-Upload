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
    console.log(`Starting ${this.name} module`);

    // replace '/path/to/shell/file.sh' with the actual path to your shell file
    const shellProcess = spawn('sh', ['/home/pi/MagicMirror/Connections/upload.sh']);

    // when the shell process outputs data, broadcast it to the client
    shellProcess.stdout.on('data', (data) => {
      this.sendSocketNotification('SHELL_OUTPUT', data.toString());
    });

    // when the shell process encounters an error, log it to the console
    shellProcess.on('error', (error) => {
      console.error(`Shell error: ${error}`);
    });

    // when the shell process exits, log the exit code to the console
    shellProcess.on('exit', (code) => {
      console.log(`Shell process exited with code ${code}`);
    });
  },

  // handle incoming socket notifications from the client
  socketNotificationReceived: function(notification, payload) {
    // handle any custom logic here
  }
});
