---
id: events
title: Events, methods and class functions
---

## Events

Events are usually used as a means of triggering certain behaviors. They are used in conjunction with methods and class functions. 

For example, if the user clicks a button on a webpage, you can choose how to react.
Events can also be triggered when a datasource is updated. 

![alt-text](img/events.png)

With 4D Web Studio, events are used to execute code on the 4D server.

## Triggering events

Events can be triggered: 

* When certain actions are taken on your components 
* When a webform is loaded
* When a datasource is updated on the client side

You can map one class function to several events, or one event to several class functions. 

Events are executed in their defined order.

### Example: Creating a search feature using the `onchange` event

In the context of an application that displays information on courses and students, you want to allow end users to search for students by typing in a search box.

1. In the Webform Editor, go to the **Data Sources** section, create a local datasource and name it `student`. 

2. Create a **Text input** component, and assign the local datasource to it using the Properties Panel:

![search](img/search-component.png)

3. Create a class called Student that includes a function to perform a query and return the result in a variable:

```4d

Class extends DataClass

exposed Function search($search : Text)->$result : cs.StudentsSelection
	
$search:="@"+$search+"@"
	
$result:=This.query("firstname = :1 or lastname = :1"; $search)
    
```

4. Select the **Input** component and attach an **onchange** event to it. The event must call the search function and update the datasource `student` previously created:

![search](img/search-event.png)

## 4D class functions and project methods

## ORDA Classes

The flow of data in the studio is handled through data model classes. See [ORDA classes](https://developer.4d.com/docs/en/ORDA/ordaClasses.html) for more information.

## 4D classes

Some classes available only in the studio allow you to set the behavior of your components. They are instantiated using 4D commands.

For example, to display or hide a component when an event occurs, you can use the [4D.WebFormItem class functions](API/WebFormItemClass.md).

## Using project methods

We recommend using class functions over methods, but you can still use your project methods as REST functions in the studio.

To be used in 4D Web Studio, project methods must be defined as Datastore, Dataclass, Entity or Entity selection class functions. 

To check if a method is available as REST function: 
1. In the Explorer of your 4D application, **right-click a project method** > **Edit Properties...** to open the Method Properties dialog. 
2. Check that the **REST Server** option is checked.

Selecting **Scope** > **Catalog** designates the project method as a function of the Datastore class. No table (dataclass) is assigned in this case.

## Events on datasources

You can attach an event to a datasource to perform an action when the datasource is updated on the client side.

### Example 

In the image below: 

* The **Datatable** component displays a list of employees, based on an entity selection (the `employees` datasource is attached).
* The button slices the `employees` entity selection to keep only the first three entities.
* The `employee` datasource has an `onChange` event attached to it, which updates the `result` local datasource in the **Text** component.

![event-datasource](img/event-datasource.png)

When you click the button, the `employee` datasource is updated, and the `onChange` event updates `result`:

![event-datasource-event](img/event-datasource-event.png)

The `displayValue` function displays text according to the number of entities: 

```4d 
exposed function displayValue() -> $result : Text
$result:="The table now displays " + String(This.length) + " entries"
```

Here's what you obtain after clicking the button:

![event-datasource-result](img/event-datasource-result.png)


