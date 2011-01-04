TimeObserver
================
This Class allows you to create a site observer that fires a callback when a certain time has passed. This is usful for applications that need to fire reminders.


How to use
----------

Usage is fairly simple - 

    #JS
    var to = new TimeObserver;
    
    var time = 6000 + +new Date();
    
    to.addTime(time,function(){
        alert('time is near!');
    });
    
    to.start();
    
   
For more info read the docs