---
id: rendering
title: Rendering Webforms
---
## Overview

4D Web Studio does not generate HTML code directly. When you drop components on the canvas, when you map datasources to components, or when you configure an event, 4D Web Studio places your work in a JSON file. This JSON file, the webform, cannot directly be opened in a web browser. It is “rendered” either when you preview it in the webstudio, or when you choose to render it in a dedicated browser tab.

At runtime, webforms are generated and interpreted by a built-in renderer engine.

Each webform has its own URL on the [4D web server](https://developer.4d.com/docs/en/WebServer/webServer.html), and the rendering engine communicates with the web server using REST Requests.

The following diagram describes how data flows to and from the studio:

![workflow-diagram](img/workflow.png)

4D developers configure their environment by enabling access to the web studio: 
* The 4D WebAdmin web server provides a secured web access to 4D Web Studio and allows previewing webforms inside the studio.
* The 4D web server allows accessing data stored in your 4D applications through REST requests. REST requests provide direct access to any database operation such as adding, reading, editing, ordering, or searching data. The renderer engine uses [REST requests](https://developer.4d.com/docs/en/REST/gettingStarted.html) to communicate with the Web Server.
* Once the servers are running, 4D developers can access 4D Web Studio and create webforms. The data handled in these webforms is stored in a json file. 
* The webforms are deployed with the application, and the end user renders them in their browser. Note that the project database must be [exposed as REST resource](https://developer.4d.com/docs/en/REST/configuration.html#starting-the-rest-server) to allow webform rendering. 

## Licence

To render webforms, you need an available REST licence, as rendering a webform opens a session on the project database's main web server.
## Configuration

To enable webform rendering, the following options must be set:

* The **Settings** > **Expose as REST server** option must be activated 
* The [4D web server](https://developer.4d.com/docs/en/WebServer/webServer.html) must be running

> You can configure The web server's IP and HTTP/HTTPS ports in **Settings** > 
**Configuration**.

For more information on server configuration, see [Server Configuration](https://developer.4d.com/docs/en/REST/configuration.html) on developer.4d.com/docs.

## Rendering webforms from the 4D Web Studio IDE

When you click on the **Render** button, a new browser tab opens at the following address:

`IP:port/$lib/renderer/?w=WebFormName`

> When the rendering is launched from 4D WebStudio's IDE, the HTTP port is used by default if enabled, otherwise the HTTPS port is used.

## Rendering webforms from 4D Server

When deploying a 4D web server using 4D Server, you can also access the rendered 
webforms in the supported browsers, at the following address:

`IP:port/$lib/renderer/?w=WebFormName`

## Exposed and non-exposed data sources 

The renderer engine applies the REST resource restrictions defined in your 4D project's database. This means that only exposed data sources are rendered in the browser. 
