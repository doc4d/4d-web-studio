---
id: events
title: Events, methods and class functions
---

## Events

Events are usually used as a means of triggering certain behaviors. They are used in conjunction with methods and class functions. 

For example, if the user clicks a button on a webpage, you can choose how to react.
Events can also be triggered [when a datasource is updated](#from-a-datasource). 

With 4D Web Studio, events are used to execute code on the 4D server. No additional Javascript is needed.

## Configuring an event

To configure an event, you must first select a component or a datasource.

The configuration panel displays the events compatible with the element selected:

![event-datasource-event](img/event-datasource-event.png)

Click a "+" button in the list to attach the corresponding event to the component or datasource.

You can then add parameters and point at a datasource to update.

You can map one class function to several events, or one event to several class functions.

Events are executed in their defined order.

## Triggering an event

### From a component

You can trigger an event when certain actions happen. For example, when the **Webform** component loads, or when the end user clicks a button. 

#### Example: Creating a search feature using the `onChange` event

The objective is to update a list of students displayed in a **Matrix** component according to what the end-user types in an input area.

In the image below: 
* The **Input** element is bound to the local datasource `search` (of type Text)
* The **Matrix** component displays a list of students based on the `students` datasource, which is an entity selection

![search](img/search-component.png)

To display results corresponding to the text typed in the **Input** component, we need a `search` function that performs a query:

```4d
exposed Function search($search : Text)->$result : cs.StudentsSelection
	
$search:="@"+$search+"@"
	
$result:=This.query("firstname = :1 or lastname = :1"; $search)   
```

An **onChange** event calls the `search` function and passes the text typed in the **Input** element as a parameter. This updates the `students` datasource:

![search](img/search-event.png)

Now everytime the text changes inside the **Input** element, a query is sent and the list of students displayed in the **Matrix** component is updated.

###  From a datasource

You can attach an event to a datasource to perform an action when the datasource is updated.

The following table groups the available datasource events: 

|Event|Trigger|
|---|---|
|onChange|<ul><li>A local datasource is updated</li><li>An entity selection reference changes in the web browser</li><li>An entity is added to the entity selection</li></ul>|
|onError|<ul><li>The session has expired</li><li>The session cookie has expired</li></ul>|

### Example 

In the image below: 

* The **Datatable** component displays a list of employees, based on an entity selection (the `employees` datasource is attached).
* The button slices the `employees` entity selection to keep only the first three entities.
* The **Text** component contains a local datasource of type Text, called *result*.

![event-datasource](img/event-datasource.png)

When the button is clicked, the `employees` datasource is updated, triggering the `onChange` event. This calls `displayValue` to update *result*:

![event-datasource-event](img/event-datasource-event.png)

The `displayValue` function returns text according to the number of entities: 

```4d 
exposed function displayValue() -> $result : Text
$result:="The table now displays " + String(This.length) + " entries"
```

Here's what you obtain after the button is clicked:

![event-datasource-result](img/event-datasource-result.png)

## Class functions and project methods

You use events in conjunction with class functions to manage the information inside your web application.

### ORDA Classes

The flow of data in the studio is handled through data model classes. See [ORDA classes](https://developer.4d.com/docs/en/ORDA/ordaClasses.html) for more information.

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



