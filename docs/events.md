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

#### Example 

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

### Datasource event list

#### onChange

The following table groups the triggers for the `onChange` event: 

|Element|Trigger|
|---|---|
|Entity datasource|<ul><li>The datasource points at a reference. If that reference changes in the web browser (not on the server), the event is triggered.</li><li>The entity is [touched](https://developer.4d.com/docs/en/API/EntityClass.html#touched-)</li></ul> **Note:** Upon saving, a new entity is returned and the reference changes|
|Entity attribute|A change is detected in the contents of an entity attribute with a scalar type.
|Local datasource|A change is detected in the contents of the local datasource (scalar types, object, array).
|Entity selection|<ul><li>The reference pointed by the datasource changes in the web browser (not on the server)</li><li>An entity is added to the entity selection</li></ul>


