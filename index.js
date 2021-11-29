const packageJson = require('./package')
const id = packageJson.name.replace(/[-@/]/g, '_')
const {name, description} = packageJson
import getdevices from "IO_search.js"
var MCP23017 = require('node-mcp23017');

//get config from server part


//get all availibe devices
var availabledevices = getdevices()


//combine config with availible devices

// throw an errer if a device is configurated but not reachable

//config all devices with default settings, for each availible device:
for (var adress in availabledevices) { 
  if (availabledevices[adress].state)
    eval( " var mcp = new MCP23017\
            ({address: 0x20, //default: 0x20\
            device: '/dev/i2c-1',\
            debug: false\
            });"   
)
    for (var i = 0; i < 16; i++) {
    (i<=7) ? mcp.pinMode(i, mcp.INPUT) : mcp.pinMode(i, mcp.OUTPUT)
    }
  }
// get config from props, wenn vorher in App Api geschrieben?
// get config from api before


// combine availible devices with config if already done and actual state



module.exports = function (app) {
  const onStop = []
  let state = 'initial state'

  function start(configuration) {
    //use config with state to map to the deltas
  }

  function stop() {
    //stop all running services
  }

  const schema = {}



  function registerWithRouter(router) {
    router.get('/doit', (req, res, next) => {
      app.debug('Handling request', req)
      res.json({
        message: 'Got it!',
        state, 
        timestamp: new Date().toISOString()
      })
    })
  }

  return {
    id,
    name,
    description,
    start,
    stop,
    schema,
    registerWithRouter
  }
}
