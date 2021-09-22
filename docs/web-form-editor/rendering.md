---
id: rendering
title: Rendering Webforms
---

You can render your webforms to web pages to explore your application from your browser.

## Configuration

The rendering engine communicates with the 4D Web Server using REST Requests.

The following options must be set: 

* The **Settings** > **Expose as REST server** option must be activated 
* The web server of the 4D project must be running. 

> You can configure The web server's IP and HTTP/HTTPS ports in **Settings** > 
**Configuration**.

For more information on server configuration, see [Server Configuration](https://developer.4d.com/docs/en/REST/configuration.html) on developer.4d.com.

## Rendering webforms 

Each webform has its own URL on the web server. 

### Rendering webforms using the 4D Webstudio IDE

When you click on the **Render** button, a new browser tab opens at the following address:

 IP:port/$lib/renderer/?w=WebFormName

> If the rendering is launched from 4D WebStudio's IDE, the rendering is done on the HTTP port first (if enabled), otherwise it runs on the HTTPS port.

### Rendering webforms using 4D Server

When deploying a project using 4D Server, you can access rendered webforms without using 4D WebStudio's IDE, by typing the following address in your browser:

 IP:port/$lib/renderer/?w=WebFormName

## Exposed and unexposed datasources 

The renderer applies the REST resource restrictions defined in the project. Unexposed datasources are not rendered. 

Those unexposed datasources are visible (but greyed out) in the Web Studio IDE
