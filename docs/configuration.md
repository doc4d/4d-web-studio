---
id: configuration
title: Configuration
---
## Requirements

### Browser 

The web studio supports the following web browsers:

- Chrome
- Edge
- FireFox

The recommended resolution is 1920x1080.
## Enabling access to 4D Web Studio

By default, access to the web studio is not granted. You need to enable access to it on the project database level and on the `WebAdmin` web server level.

1. To enable access to the web studio on the database level, you need to check the option on the [web server configuration page](../WebServer/webServerAdmin.md#enable-access-to-the-web-studio). 

	To do this, go to **Settings** > **Web** > **Web features** and check **Enable access to the web studio**.

2.  To enable access to the web studio on the [`WebAdmin` web server](../Admin/webAdmin.md), go to **File** > **Web Administration** > **Settings...** and check **Enable access to the web studio**.

:::note Reminder

The WebAdmin settings apply to the 4D application that is currently running. For the new settings to be taken into account, you'll need to restart the `WebAdmin` web server. 

:::


## Activating authentication

Authentication on the `WebAdmin` web server is granted using an access key. For more details, see [Access key](../Admin/webAdmin.md#access-key).

## Opening the web studio

The web studio page is available when the [`WebAdmin` web server is running](../Admin/webAdmin.md#starting-the-webadmin-web-server) and [authentication is activated](#activating-authentication). 

There are two ways to access the web studio:

*	from your 4D single-user application, go to **Design** > **Web Studio...**. 
 
 	If the `WebAdmin` web server is already running, depending on your web server configuration, your default browser opens at `IPaddress:HTTPPort/studio` or `IPaddress:HTTPSPort/studio`. Otherwise, you will be prompted if you want to start the `WebAdmin` web server first.

*	on a browser, with the `WebAdmin` web server running (launched from 4D or 4D Server), enter the following address:
 	
		IPaddress:HTTPPort/studio
		
	or:
	
		IPaddress:HTTPSPort/studio

	For example, after launching a local web server on port 7080, type this address in your browser: 

		localhost:7080/studio

	You will then be prompted to enter the [access key](../Admin/webAdmin.md#access-key) to open a WebAdmin session on the server.
