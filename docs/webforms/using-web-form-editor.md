---
id: using-web-form-editor
title: Using the Webform Editor
---

## Creating a webform

In 4D Web Studio, everything starts with a webform. A webform is a container that holds all the other components (buttons, grids, style boxes, etc.) of your application.

To create a webform:
* from the homepage, click **Webform** and enter a name for the new webform
* from the Webform Editor, click the **New +** tab > **Webform**

## Webform Editor Interface

The Webform Editor provides several tools to customize the interface and contents of your application:

![interface](img/web-form-editor-interface.png)

<ol class="interface-numbers">
<li class="interface-item">Explorer: Displays your project's webforms, methods and classes.</li>
<li class="interface-item">Tabs: They let you keep track of your currently opened elements, such as your forms and methods.</li>
<li class="interface-item">Components: The building blocks of your application.</li>
<li class="interface-item">Data Sources: Create and explore your datasources.</li>
<li class="interface-item">Styles Library: Holds predefined and customized styles for your components.</li>
<li class="interface-item">Outline: Presents the structure of your webform and allows you to navigate between the different elements. </li>
<li class="interface-item">Canvas: This is where you combine your components, styles and datasources. You can drag and drop components onto your canvas, then drag and drop CSS classes and datasources onto these components, and preview or render your webforms.</li>
<li class="interface-item">Properties panel: Allows for advanced style customization. Also allows binding datasources to components.</li>
<li class="interface-item">Contextual configuration panel: Link events and methods to your components, edit CSS styles, etc.</li>
<li class="interface-item-2"> Header: Save and preview your work, and access additional settings.</li>
</ol>

## Adding components to a webform

Components are the building blocks of your application. To add a component, drag it from the Components section and drop it on the canvas.

![add-component-screenshot](img/add-component.png)

## Keeping track of the structure

You can use the following tools to manage your components and keep track of them.

### Breadcrumbs

When you select a component, the breadcrumbs display its hierarchy:

![breadcrumbs](img/breadcrumbs.png)

To select any parent component displayed in the breadcrumbs trail, click its name. 

### Outline

The outline section displays the hierarchy of your webform. You can click an element in the list to select it, or click and drag it anywhere in the outline to move it somewhere else.

To display or hide an element, click the eye icon.

### Tooltip

When you select a component, the tooltip displays its type and offers several actions:

|Icon|Action|
|---|---|
|Cursor|Move the selected component on the canvas|
|Arrow|Select the parent component|
|Delete|Remove the selected component from the canvas|
|CSS|Export the [[overriden CSS properties](#overriding-style-properties) to a new CSS class|
|Barred T|Reset styles (resets the [overriden CSS properties](#overriding-style-properties))|
|Duplicate icon|Duplicate the component|

The tooltip is contextual. This means that some actions are only available to certain elements, and not others. For example, you can duplicate a Text Input component, but not its individual parts (Label and Input).

## Styling a component 

Inside a WebForm, you can style components using the Properties panel and the Styles library and see the result directly on the canvas.

### Resources and tools

If you're not familiar with CSS properties and styles, or you need a refresher, here are a few useful links:

* Learn CSS on the [MDN website](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance)
* A guide to [flexbox properties](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) on css-tricks.com
* [Box-shadow examples](https://getcssscan.com/css-box-shadow-examples)
* [Box-shadow generator](https://cssgenerator.org/box-shadow-css-generator.html)

### Styles Library 

One way of styling components is by dragging CSS classes from the Styles Library and dropping them on the components.

The Styles Library offers two types of styles: 
* Local: Styles you create
* Theme: Predefined CSS classes

![styles-library](img/styles-library.png)

Unlike Theme classes, Local styles can only be used in the Webforms in which they are created. 

To create a local CSS class, click the "+" button and enter a name. CSS classes can be edited in the Editor panel at the bottom.

### Properties Panel

The properties panel gives you extremely granular control over your elements. 

After you select an element, you can edit its properties using this panel. This includes style properties (as a rule, component properties and styling are separated).

Using the properties panel, you can bind a CSS class to the element and define values individually.

![styles-library](img/properties-panel.png)

Some visual properties, such as grid areas or column size in datatables, can be edited directly on the canvas.

#### Example 

To add a red background to a Button component: 
* From the Styles library:
drag the `bg-red-500` class from the Styles library and drop it on the Button component

* Using the Properties Panel:
    * Select the Button component, and under Style, choose a red color for the background
    * Select the Button component, and in the properties panel, select the `bg-red-500` class in the CSS section

### Overriding style properties

Selecting a component displays its style properties in the Properties Panel. Values set by CSS classes are displayed in italics. For example, assigning the `bg-red-500` class to the component will get the Background property to display *rgb(239,68,68)*.

Modifying these values overrides the initial value for that property. Overriden CSS properties have a blue dot in front of them. 

You can [export the new values](Exporting-styles-as-css-classes-for-reuse) to create a new CSS class.

## Exporting styles as CSS classes for reuse 

You can export the style of an element as a CSS class to reuse it later: 
1. Select a an element on the canvas, the tooltip appears.
2. Click the CSS icon in the tooltip and enter a name for the new CSS class.
3. Click **Export**.

:::note

This does not export all the styles of the component, only the properties you override.

:::

This exports the [new style properties](#overriding-style-properties) of the element as a new local CSS class. Now it appears as a choice in the Styles library and in the property list, and you can apply the class to other elements on your canvas. 

### Editing a CSS class

Once a local class is created, you can hover over it in the Styles Library and click the **Edit Class** button next to its name to edit the CSS directly. The changes apply to all the components using this class.

## Component List

The Component area lets you search for a component or choose one from the list. Once a component is on the canvas, you can [customize its look](#styling-a-component) and (for some components) assign a data source to it.

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
|Radio button|Allows selecting one of a set of options (only one option can be selected at any time)|
|Range input|Allows selecting a value in a range|
|Select box|Allows selecting an item in a list|
|Image|Displays an image|
|Icon|Displays an icon|
|Checkbox|Allows the user to make a binary choice (boolean value)|
|Text|Displays text on a web page|
|Datatable|Displays data in the form of a table. You can select a row to interact with the server|
|Matrix| Container of repeated style boxes|
|Webform loader| Allows you to embed a Webform inside another

> More components will be available in the future, and existing components will be enhanced.
## Server-side reference

The server-side reference of a component is its "address" on the server. To set the behavior of a component, you can assign a server-side reference to it, and then [use that reference in class functions](../API/web-form-editor/WebFormItemClass.md).

For example, `WebForm.myImage` refers to the image component with `myImage` as server-side reference.

To assign a server-side reference to a component, enter a value in the Properties Panel > Server Side:

![alt-text](img/image-server-side.png)

You can then modify the behavior of your components using events and functions, such as [4D.WebFormItem class functions](../API/WebFormItemClass.md).

## Code Editor

4D web Studio has an embedded code editor that allows you to edit your class function and methods. The code can still be edited from a 4D Desktop application. 

When a class function is open in the studio, and that class function is edited elsewhere, its Tab will display "Outdated", meaning that the code displayed is not the latest version. To obtain the latest version, right click the Tab and click **Reload**.