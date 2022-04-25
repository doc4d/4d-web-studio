---
id: components
title: Components
---

Components are the building blocks of your application. To add a component, drag it from the Components section and drop it on the canvas.

![add-component-screenshot](img/add-component.png)

## Component list

The Component library lets you search for a component or choose one from the list. Once a component is on the canvas, you can [customize its look](styling.md) and bind a data source to it.

![alt-text](img/components.png)

The following components are available: 

|Component|Description|
|---|---|
|Webform| Base container that holds all the other components| 
|Stylebox| Container used to keep the content centered and legible |
|Grid| Allows you to produce complex and responsive layouts faster. Grid areas can be edited directly on the canvas |
|Columns|Displays data inside columns|
|Tabs|Organizes and allows navigation between groups of content that are related and at the same level of hierarchy|
|Text input|Allows users to enter data in a form|
|Button|Triggers actions on a web page|
|Radio button|Allows selecting one of a set of options|
|Range input|Allows selecting a value in a range|
|Select box|Allows selecting an item in a list|
|Image|Displays an image|
|Icon|Displays an icon|
|Checkbox|Allows the user to make a binary choice (boolean value)|
|Text|Displays text on a web page|
|Datatable|Displays data in the form of a table. You can select a row to interact with the server|
|Matrix| Container of repeated Styleboxes. Its Stylebox must have a fixed height set in pixels|
|Webform loader| Displays a webform inside the current Webform component|

#### About Webform loaders

A Webform loader's initial value determines which webform it displays when it loads. You can set that initial value in the Properties panel. An initial values set this way is ignored if a datasource of type Text is attached to the Webform loader.

You can get a Webform loader to dynamically display webforms. To do this, bind a local datasource of type Text to it. That way, when the value of the datasource changes, the webform whose name matches that value is displayed. 

> More components will be available in the future, and the existing components will be enhanced.

## Server-side reference

The server-side reference of a component is its "address" on the server. To set the behavior of a component, you can give it a server-side reference, and then [use that reference in class functions](../API/WebFormItemClass.md).

To assign a server-side reference to a component, enter a value in the Properties panel > Server Side:

![alt-text](img/image-server-side.png)

## Managing your components

You can use the following tools to manage your components.

### Tooltip

When you select a component, the tooltip displays its type and offers several actions:

![tooltip](img/tooltip.png)

|Icon|Action|
|---|---|
|Move|Moves the selected component on the canvas|
|Select Parent Component|Selects the parent component|
|Delete Component|Removes the selected component from the canvas|
|Export Styles|Exports the [overridden CSS properties](styling.md#overriding-style-properties) to a new CSS class|
|Open Events Panel|Opens the bottom panel, allowing you to bind events to the component|
|Save as craft|Saves the component, its child components, and their styles as a reusable component|
|Clear Styles|Clears the styles of the selected element (resets the [overridden CSS properties](styling.md#overriding-style-properties))|
|Duplicate|Duplicates the component|

In addition to these actions, the contextual panel also offers basic actions such as **Copy**, **Cut**, and **Paste**.

The tooltip is contextual. This means that some actions are available to certain elements, and not others. For example, you can duplicate a Text input component, but not its individual parts (Label and Input). 

### Breadcrumbs

When you select a component, the breadcrumbs display its hierarchy:

![breadcrumbs](img/breadcrumbs.png)

To select any parent component displayed in the breadcrumbs trail, click its name. 

### Outline

The outline section displays the hierarchy of your webform:

![outline](img/outline.png)

Click an element in the list to select it, or click and drag it anywhere in the outline to move it somewhere else.

To display or hide an element, click the eye icon.

## Crafted components

You can craft your own components, that is, turn any component and its child components into a reusable component. 

Any component can be saved as crafted component, except for the Webform component.

A crafted component includes the initial component's:
* styles, including CSS classes
* child components and their properties
* event configuration
* datasource references

### How to craft a component

1. On the canvas, select the element you want to turn into a crafted component.
2. In the **Tooltip**, click **...** and select **Save as craft**.
3. (Optional) Enter a name for the crafted component.
4. Click **Add**.

The crafted component is now available in the **Components** > **Crafted** section and can be moved to the Canvas.

### Handling styles and datasources

When you drop a crafted component on the Canvas, its CSS classes are imported into the target Webform, unless that Webform already has CSS classes with the same name.

Crafted components include datasource references, but not the datasources themselves. This means that when you use a crafted component in a webform, components with references to datasources (Datatable or Matrix for example) will only display data if the target webform has datasources that match those references.

## Templates

Templates are a great way to jump-start your building process. 4D Web Studio offers templates to help you design things more quickly. These templates come as-is and may require customization.

:::note

The current list of available templates is not representative of what will be available in the final product, and it will keep expanding.

:::

To use a template:

1. Open or create a new webform.
2. In the Components section, click **Templates**.
3. Select a template. A panel opens with several components to choose from.
4. Choose a component you want to use and drag it from the list.
5. Drop the component on the Canvas.


