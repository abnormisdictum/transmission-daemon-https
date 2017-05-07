# transmission-daemon-https
An Https proxy in NodeJS, so that you can control the transmission-daemon using SSL.
##Steps:
1. First Stop transmission-daemon
```
service transmission-daemon stop
```
2. Edit the settings.json file for transmission-daemon (In my case, debian, it's /var/lib/transmission-daemon/info/settings.json, but you can change it depending on your distro)
`nano /var/lib/transmission-daemon/info/settings.json`
3. Change the line:
```
"rpc-bind-address": "0.0.0.0"
```
to
```
"rcp-bind-address": "127.0.0.1"
```
This will prevent anyone other than localhost requests from talking to transmission-daemon without HTTPS.
4. Clone this repository in the location of your choosing
```
git clone https://github.com/abnormisdictum/transmission-daemon-https.git
cd transmission-daemon-https
```
5. Install dependencies
```
npm install
```
6. Create the RSA keys and certificate, selfsigned if necessary
```
openssl req -x509 -newkey rsa:4096 -keyout <your_name_for_your_key>.pem -out <your_name_for_your_cert>.pem -days 365
```
7. Edit the config.js file to suite the your settings, the options are as follows
 -server: Properties for the HTTPS server that will act as your proxy
  +keyFile: loacation of the key.pem file you just created
  +certFile: loacation of the cert.pem file you just created.
  +port: Port nuumber that you want your https server to listen on.
 -daemon: settings for your transmission-daemon.
  +host: ip address of your daemon. If you have followed step 1-3, it should be kept as the default localhost.
  +port: the port the transmission-daemon is listening on.

8. run the program
```
node index.js
```

##Optional: Running proxy in the background.
In case you would like the proxy server to run in the background continuously, you can use pm2. PM2 is better than forever in many ways. But the syntax for both is pretty much the same.
1. install pm2 globally
```
npm install -g pm2
```
2. Make sure you are in the transmissin-daemon-https directory when you run the following command
```
pm2 start index.js
```

And thats about all there is to it.
