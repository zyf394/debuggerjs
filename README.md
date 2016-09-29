# debuggerjs

a small debugger for web in Native App

## Why we need debuggerjs?
As we known, when developing something in App, we always can't get the error message if something wrong has happened. 
Meanwhile, if we have a tool showing the errors in the App web view, that would help us a lot to debug.
So this is what I've done.

## start 

    npm install debuggerjs
    
## usage

    var debuger = require('debuggerjs'); // It is named as debuger in case of mixed with 'debugger' keyword.
    
    or use es6
    
    import {debuger} from 'debuggerjs';
        
## API

#### debuger.init()
use debuger.init() to listen all javascript code running error.

    import {debuger} from 'debuggerjs';
    debugger.init();
    
#### debuger.log(error)
or you can use debuger.log() to log errors manually. The only param could be a Error object or a String.

    var script = document.createElement('script');
        script.src = '/somethingBad.js';
        script.onerror = function (error) {
            debuger.log(error);
            debuger.log('write whatever you want to show');
        };
        
    document.body.appendChild(script);
    
