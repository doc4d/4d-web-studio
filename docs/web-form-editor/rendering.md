---
id: rendering
title: Rendering Webforms
---

At runtime, Webforms are generated and interpreted by a built-in renderer engine. No additional Javascript or React code is required. 

Each Webform has its own URL on the [4D web server](https://developer.4d.com/docs/en/WebServer/webServer.html), and the rendering engine communicates with the web server using REST Requests.

## Configuration

To enable Webform rendering, the following options must be set:

* The **Settings** > **Expose as REST server** option must be activated 
* The [4D web server](https://developer.4d.com/docs/en/WebServer/webServer.html) must be running

> You can configure The web server's IP and HTTP/HTTPS ports in **Settings** > 
**Configuration**.

For more information on server configuration, see [Server Configuration](https://developer.4d.com/docs/en/REST/configuration.html) on developer.4d.com/docs.

## Rendering Webforms using the 4D WebStudio IDE

When you click on the **Render** button, a new browser tab opens at the following address:

`IP:port/$lib/renderer/?w=WebFormName`

> When the rendering is launched from 4D WebStudio's IDE, the HTTP port is used by default if enabled, otherwise the HTTPS port is used.

## Rendering Webforms using 4D Server

When deploying a 4D web server using 4D Server only, you can access the rendered 
Webforms in the supported browsers, at the following address:

`IP:port/$lib/renderer/?w=WebFormName`

## Exposed and non-exposed data sources 

The renderer engine applies the REST resource restrictions defined in your 4D project's database. This means that only exposed data sources are rendered in the browser. 
