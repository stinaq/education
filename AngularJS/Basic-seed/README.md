Angular seed
============

A basic setup of AngularJS, with Bower and Grunt.

Setup Windows:
-----
__Install Node__  

Easiest way to do this is by using Chocolatey.  
If you don't have Chocolatey, run the following in cmd:  
```@powershell -NoProfile -ExecutionPolicy unrestricted -Command "iex ((new-object net.webclient).DownloadString('https://chocolatey.org/install.ps1'))" && SET PATH=%PATH%;%systemdrive%\chocolatey\bin ```

And then:  
```cinst nodejs.install ```

__Install Grunt taskrunner and Bower__  
``` npm install -g grunt-cli bower ```

__Download project from GitHub__  
Go to [the project](https://github.com/stinaq/education) and download zip, or clone if you have a GitHub account  
Open cmd and travel to the project, and in to AngularJS/Basic-seed

__Install dependencies__  
run:  
```npm install
bower install ```

__Start server__
```grunt serve```
