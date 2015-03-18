var req     = require('browser-jsonp');
var rivets  = require('rivets');
var moment  = require('moment');

var groupEventsURL = 'https://api.meetup.com/2/events?offset=0&format=json&limited_events=False&group_urlname=Code-Kuma&photo-host=public&page=20&fields=&order=time&desc=false&status=upcoming&sig_id=14309803&sig=719ee74a8f25dee4b4fda7add4021ab667d732c4';

var DATA = {};

req({
    url: groupEventsURL,
    success: function(data) { 
        DATA.nextEvent = data.results[0];
        DATA.nextEvent.time = moment(DATA.nextEvent.time).format('MMMM Do YYYY, h:mm a');
        rivets.bind(document.body, DATA);
    }
});
