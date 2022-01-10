---
id: function-method
title: Class functions and methods
---

You use events in conjunction with class functions (and methods) to manage the information inside your web application.

### ORDA Classes

The flow of data in the studio is handled through data model classes that allow you to manage your business logic. See [ORDA classes](https://developer.4d.com/docs/en/ORDA/ordaClasses.html) for more information.

### 4D classes

Some classes available only in the studio allow you to set the behavior of your components. They are instantiated using 4D commands.

For example, to display or hide a component when an event occurs, you can use the [4D.WebFormItem class functions](API/WebFormItemClass.md).

### Using project methods

We recommend using class functions over methods, but you can still use your project methods as REST functions in the studio.

To be used in 4D Web Studio, project methods must be defined as Datastore, Dataclass, Entity or Entity selection class functions. 

To check if a method is available as REST function: 
1. In the Explorer of your 4D application, **right-click a project method** > **Edit Properties...** to open the Method Properties dialog. 
2. Check that the **REST Server** option is checked.

Selecting **Scope** > **Catalog** designates the project method as a function of the Datastore class. No table (dataclass) is assigned in this case.



