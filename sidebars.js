module.exports = {

  docs: [
    {
      type: 'doc',
      id: 'overview',
      label: "Overview"
    },
    {
      type: 'doc',
      id: 'configuration',
      label: "Configuration"
    },
    {
      type: 'category',
      label: 'Designing a webform',
      items: ['design-webforms/create-webform',
        'design-webforms/components',
        'design-webforms/styling',
        'design-webforms/datasources',
        {
          type: 'category',
          label: "Events and interactions",
          items: ['design-webforms/events/configuring-event',
            'design-webforms/events/user-events',
            'design-webforms/events/datasource-events'
          ],
        },
      ],
    },
    {
      type: 'doc',
      id: 'rendering',
      label: "Rendering a webform"
    },
    {
      type: 'doc',
      id: 'license-usage',
      label: "License usage"
    },
    {
      type: 'doc',
      id: 'coding-and-debugging',
      label: "Coding and debugging"
    },
  ],
  apiSidebar: [
    {
      type: 'doc',
      id: 'API/web-event',
      label: "Web Event"
    },
    {
      type: 'doc',
      id: 'API/WebFormClass',
      label: "WebForm"
    },
    {
      type: 'doc',
      id: 'API/WebFormItemClass',
      label: "WebFormItem"
    }
  ],
};
