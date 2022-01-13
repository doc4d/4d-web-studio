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
      type: 'doc',
      id: 'license-usage',
      label: "License usage"
    },
    {
      type: 'category',
      label: 'Webforms',
      items: ['webforms/design-webform',
        'webforms/rendering'
      ],
    },
    {
      type: 'doc',
      id: 'datasources',
      label: "Datasources"
    },
    {
      type: 'category',
      label: "Events and interactions",
      items: ['events/configuring-event',
        'events/user-events',
        'events/datasource-events'
      ],
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
