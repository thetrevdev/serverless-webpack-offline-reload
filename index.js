class ServerlessWebpackOfflineReloadPlugin {
  constructor(serverless) {
    this.serverless = serverless;

    this.hooks = {
      'webpack:compile:watch:compile': this.offlineReload.bind(this)
    };
  }

  offlineReload (){
    this.serverless.pluginManager.spawn('offline:functionsUpdated');
  }

}

module.exports = ServerlessWebpackOfflineReloadPlugin;
