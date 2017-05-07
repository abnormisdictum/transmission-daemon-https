# transmission-daemon-https
An Https proxy in NodeJS, so that you can control the transmission-daemon using SSL.
##Steps:
1. First Stop transmission-daemon
>service transmission-daemon stop
2. Edit the settings.json file for transmission-daemon (In my case, debian, it's /var/lib/transmission-daemon/info/settings.json, but you can change it depending on your distro)
>nano /var/lib/transmission-daemon/info/settings.json
3. Change the line:
>"rpc-bind-address": "0.0.0.0"
>to
>"rcp-bind-address": "127.0.0.1"
>this will prevent anyone other than localhost requests from talking to transmission-daemon without HTTPS.
4. Clone this repository in the location of your choosing
