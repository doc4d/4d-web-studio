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

`IP:port/$lib/renderer/?w=WebFormName`

> When the rendering is launched from 4D WebStudio's IDE, the rendering is done on the HTTP port by default (if enabled), otherwise it runs on the HTTPS port.

## Rendering webforms using 4D Server

When deploying a 4D Web Server using 4D Server only, you can access rendered webforms in your browser at the following address:

`IP:port/$lib/renderer/?w=WebFormName`

## Exposed and unexposed data sources 

The renderer engine applies the REST resource restrictions defined in your 4D project's database. This means that only exposed data sources are rendered in the browser. 
