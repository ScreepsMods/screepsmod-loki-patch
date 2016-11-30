module.exports = function(config){
  if(config.storage) require('./storage')(config)
}