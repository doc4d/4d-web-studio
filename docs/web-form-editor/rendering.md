---
id: rendering
title: Rendering Webforms
---

4D Projects have embedded rendering engines that allow you to run you webforms on the server and access their rendered version in the supported browsers.

Each webform has its own URL on the web server, and the rendering engine communicates with the 4D Web Server using REST Requests.

## Configuration

The following options must be set:

* The **Settings** > **Expose as REST server** option must be activated 
* The web server of the 4D project must be running

> You can configure The web server's IP and HTTP/HTTPS ports in **Settings** > 
**Configuration**.

For more information on server configuration, see [Server Configuration](https://developer.4d.com/docs/en/REST/configuration.html) on developer.4d.com.

## Rendering webforms using the 4D Webstudio IDE

When you click on the **Render** button, a new browser tab opens at the following address:

```
IP:port/$lib/renderer/?w=WebFormName
```

> When the rendering is launched from 4D WebStudio's IDE, the rendering is done on the HTTP port by default (if enabled), otherwise it runs on the HTTPS port.

## Rendering webforms using 4D Server

When deploying a 4D Web Server using 4D Server only, you can access rendered webforms by typing their address in your browser:

```
IP:port/$lib/renderer/?w=WebFormName
```

## Exposed and unexposed data sources 

The renderer applies the REST resource restrictions defined in the project. Unexposed data sources are not rendered in the browser.

> Since the WebStudio IDE runs on the WebAdmin Web Server, those unexposed data sources are visible (but greyed out) in the Web Studio IDE.
