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

### Projects 

4D Web Studio only works with 4D projects (binary databases are not supported).

## Enabling access to 4D Web Studio

4D Web Studio is served by the [WebAdmin web server](https://developer.4d.com/docs/en/Admin/webAdmin.html) and displays data handled by the [4D web server](https://developer.4d.com/docs/en/WebServer/webServer.html). By default, access to the studio is not granted. 

To enable access to the studio, the **Enable access to the web studio** option must be activated in two places:
* in the Web Administration settings
* in the 4D web server's settings

### On the WebAdmin web server
To enable access to the studio on the [WebAdmin web server](https://developer.4d.com/docs/en/Admin/webAdmin.html), go to **File** > **Web Administration** > **Settings...** and check **Enable access to the web studio**.

:::note

This setting applies to the 4D application (4D or 4D Server) on the host machine. All projects opened with that 4D application take this setting into account.

:::

### On the 4D web server

In order for the studio to access the data of a 4D project handled by the [4D web server](https://developer.4d.com/docs/en/WebServer/webServer.html), the **Enable access to the web studio** option must be enabled on the web server's configuration page.

To do this, in your 4D application, go to **Settings** > **Web** > **Web Features** and check **Enable access to the web studio**.

:::note 

Just like other user settings, **Enable access to the web studio** can be externalized and customized. See [User settings](https://doc.4d.com/4Dv19R2/4D/19-R2/User-settings.300-5516428.en.html) for more information.

:::


## Activating authentication

Authentication on the WebAdmin web server is granted using an access key. For more details, see [Access key](https://developer.4d.com/docs/en/Admin/webAdmin.html#access-key).

## Opening the web studio

The web studio page is available when the [WebAdmin web server is running](https://developer.4d.com/docs/en/Admin/webAdmin.html#starting-the-webadmin-web-server) and [authentication is activated](#activating-authentication). 

There are two ways to access the web studio:

*	from your 4D single-user application, go to **Design** > **Web Studio...**. 
 
 	If the WebAdmin web server is already running, depending on your web server configuration, your default browser opens at `IPaddress:HTTPPort/studio` or `IPaddress:HTTPSPort/studio`. Otherwise, you will be prompted if you want to start the WebAdmin web server first.

*	on a browser, with the WebAdmin web server running (launched from 4D or 4D Server), enter the following address:
 	
	`IPaddress:HTTPPort/studio`
		
	or:
	
	`IPaddress:HTTPSPort/studio`

	For example, after launching a local web server on port 7080, type this address in your browser: 

	`localhost:7080/studio`

	You will then be prompted to enter the [access key](https://developer.4d.com/docs/en/Admin/webAdmin.html#access-key) to access the studio.
