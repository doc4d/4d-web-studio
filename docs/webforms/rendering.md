---
id: rendering
title: Rendering Webforms
---
## Overview

4D Web Studio does not generate HTML code directly. When you drop components on the canvas, when you map datasources to components, or when you configure an event, 4D Web Studio places your work in a JSON file. This JSON file, the webform, cannot directly be opened in a web browser. It is “rendered” either when you preview it in the webstudio, or when you choose to render it in a dedicated browser tab.

At runtime, webforms are generated and interpreted by a built-in renderer engine.

Each webform has its own URL on the [4D web server](https://developer.4d.com/docs/en/WebServer/webServer.html)

The following diagram describes how data flows to and from the studio:

![workflow-diagram](img/workflow.png)


* The 4D WebAdmin web server provides a secured web access to 4D Web Studio and allows previewing webforms inside the studio.
* The renderer uses [REST requests](https://developer.4d.com/docs/en/REST/gettingStarted.html) to communicate with the main 4D web server.
* The webforms are deployed with the application, and end users render them in their browsers. Note that the database must be [exposed as REST resource](https://developer.4d.com/docs/en/REST/configuration.html#starting-the-rest-server) to allow webform rendering. 
## License

To render webforms, you must have an available REST license, as rendering a webform opens a session on the project database's main web server.

## Configuration

The following options must be set:

* The project's **Settings** > **Expose as REST server** option must be activated 
* The [4D web server](https://developer.4d.com/docs/en/WebServer/webServer.html) must be running

> You can configure The web server's IP and HTTP/HTTPS ports in **Settings** > **Configuration**.

When rendering webforms, the renderer tries to connect to the HTTP port if enabled, otherwise the HTTPS port is used. It is the same connection pattern as for the [WebAdmin web server](https://developer.4d.com/docs/en/Admin/webAdmin.html#accept-http-connections-on-localhost).

For more information on REST server configuration, see [Server Configuration](https://developer.4d.com/docs/en/REST/configuration.html) on developer.4d.com.

## Rendering webforms 

Webforms can be rendered from the 4D Web Studio IDE, or directly from a browser window. 
### From the 4D Web Studio IDE

To open a browser tab and render a webform, click the **Render** button :

![render-button](img/render-button.png)

A tab will open at `IP:port/$lib/renderer/?w=WebFormName`.

:::note

The button is displayed only when the [configuration options](#configuration) are activated.

:::

### From a browser window

Webforms can be rendered directly from a browser window, by typing the following address:

`IP:port/$lib/renderer/?w=WebFormName`

## Exposed and non-exposed datasources 

The renderer engine applies the REST resource restrictions defined in your 4D project's database. This means that only exposed datasources are rendered in the browser. 
