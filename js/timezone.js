  var tz = jstz.determine();
  var url = window.location.origin + '/civicrm/event/ical' + window.location.search + '&timezone=' + tz.name();
  window.location.replace(url);