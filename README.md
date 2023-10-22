# serverless-webpack-offline-reload

Webpack compilations will clear the handler cache in serverless-offline

This is an alternative to the offline option `--reloadHandler` which will reload the handler on every request.
Instead this will let the handler be cached between runs but updated on each new compilation.

## Install

```
npm install --save-dev serverless-webpack-offline-reload
```

## Usage

### Serverless configuration

Add it to your list of plugins

serverless.yaml:

```yaml
plugins:
  - serverless-offline
  - serverless-webpack
  - serverless-webpack-offline-reload
