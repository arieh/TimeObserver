/*
---
description: A function for adding timed events based on a known time

license: MIT-style

authors:
- Arieh Glazer

provides: [TimeObserver]

...
*/
/*!
Copyright (c) 2009 Arieh Glazer

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE 
*/

(function(){

/* For non Moo usages */
if (!Class){
    var Class = function(params){
        function F(){};
        F.prototype = params;
        return F;
    }
}

var TimeObserver = this.TimeObserver = new Class({
    on : false
    , handles: {}
    , stack: {}
    , start: function() {
        var current = +new Date(), k;
        for (k in this.stack){
            if (this.stack.hasOwnProperty(k) && k > current) this.handles[k] = setTimeout(this.stack[k],k-current); 
        }
        this.on = true;
    }
    , stop: function() {
        var k;
        for (k in this.handles){
            clearTimeout(this.handles[k]);
            delete this.handle[k];
        }
        this.on = false;
    }
    , addTime: function(time, cb) {
        time = +time;
        this.stack[time] = cb;
        if (this.on && +new Date() > time)  this.handles[time] = setTimeout(this.stack[time], time - +new Date() )
    }
    , removeTime : function(time){
        if (this.stack[time]) delete this.stack[time];
        if (this.handles[time]){
            clearTimeout(this.handles[time]);
            delete this.handle[time];
        }
    }
});

}).apply(window);