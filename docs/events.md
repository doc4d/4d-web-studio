---
id: events
title: Events, methods and class functions
---

## Events

Events are usually used as a means of triggering certain behaviors. They are used in conjuction with methods and class functions. 

For example, if the user clicks a button on a webpage, you can choose how to react.
Events can also be triggered when a datasource is updated. 

![alt-text](img/events.png)

In 4D WebStudio, events are used to execute code on the 4D server. There's no need to write additional Javascript code.

Events are executed in the defined order, and you can map class functions to several events or one event to several class functions.

## 4D class functions and project methods

4D class functions allow you to set the behavior of your components.

For example, to display or hide a component when an event occurs, you can use the [4D.WebFormItem class functions](../API/web-form-editor/WebFormItemClass.md)

### Using project methods

We recommend using class functions over methods, but you can still use your project methods as REST functions in 4D Web Studio.

To be used in 4D Web Studio, project methods must be defined as Datastore, Dataclass, Entity or Entity selection class functions. 

To check if a method is available as REST function: 
1. In the Explorer of your 4D application, **right-click a project method** > **Edit Properties...** to open the Method Properties dialog. 
2. Check that the **REST Server** option is checked.

Selecting **Scope** > **Catalog** designates the project method as a function of the Datastore class. No table (dataclass) is assigned in this case.