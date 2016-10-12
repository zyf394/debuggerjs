# debuggerjs

a small debugger for web in Native App

## Why we need debuggerjs?
As we known, when developing something in App, we always can't get the error message if something wrong has happened. 
Meanwhile, if we have a tool showing the errors in the App web view, that would help us a lot to debug.
So this is what I've done.

## start 

    npm install debuggerjs
    
## usage

    var debug = require('debuggerjs'); 
    
    or use es6
    
    import debug from 'debuggerjs';
        
## API

#### debug.init(options)
use debug.init(options) to listen all javascript code running error.

    import debug from 'debuggerjs';
    debug.init(options);

**options** 

| key | value | default |
| --- | --- | --- |
| needShow | Boolean. Show errors on your device or not | true |
| needReport | Boolean. Report errors to your server or not | false |
| method | String. The way you send the error to server | 'post' |
| url | String. The url you send the error to server | '' |


#### debuger.log(error)
or you can use debug.log() to log errors manually. The only param could be a Error object or a String.

    var script = document.createElement('script');
        script.src = '/somethingBad.js';
        script.onerror = function (error) {
            debug.log(error);
            debug.log('write whatever you want to show');
        };
        
    document.body.appendChild(script);
    
