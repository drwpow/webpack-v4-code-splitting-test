# Weback 4 Beta Code-splitting Test

## Instructions:

1. `yarn`, `yarn start`, and load up `localhost:8080`
1. Click on Page 1, 2, or 3
1. React router will navigate to `/page/x`
1. From that page, webpack will try and load chunk at `/page/x.js` rather than `/x.js`

### Error

```
main.js:109 Uncaught (in promise) Error: Loading chunk 1 failed.
(error: http://localhost:8080/page/1.js)
    at HTMLScriptElement.onScriptComplete (main.js:109)
```

_Note: the patched webpack-dev-server version is due to a temporary bug (https://github.com/webpack/webpack-dev-server/pull/1243). This doesn’t affect the dynamic import issue stated._
