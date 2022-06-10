# Timezone for Event ICalendar.

Downloads the icalendar file as per timezone detected on user's device. It leverages the [jsTimezoneDetect](https://github.com/pellepim/jstimezonedetect) library (included with the extension) for automatic detection and setting of a user's timezone via javascript. This timezone is used in the ical file.

This was specifically developed for online events where if the user clicks on the ical link downloads and sets the time on their calendar as per the timezone. So the calendar is setup with the exact 'local' time of attending the event(eg webinar).

The extension is licensed under [AGPL-3.0](LICENSE.txt).

## Requirements

* PHP v7.0+
* CiviCRM

## Installation (Web UI)

This extension has not yet been published for installation via the web UI.

## Installation (CLI, Zip)

Sysadmins and developers may download the `.zip` file for this extension and
install it with the command-line tool [cv](https://github.com/civicrm/cv).

```bash
cd <extension-dir>
cv dl nz.co.fuzion.icaltimezone@https://github.com/fuzionnz/nz.co.fuzion.icaltimezone/archive/master.zip
```

## Installation (CLI, Git)

Sysadmins and developers may clone the [Git](https://en.wikipedia.org/wiki/Git) repo for this extension and
install it with the command-line tool [cv](https://github.com/civicrm/cv).

```bash
git clone https://github.com/fuzionnz/nz.co.fuzion.icaltimezone.git
cv en icaltimezone
```

## Usage

- Download and install the extension.
- That's it. The ical file downloaded from `/civicrm/event/ical?reset=1&id=<event_id>` will be downloaded and will display the time based on the timezone set on the user's device.
