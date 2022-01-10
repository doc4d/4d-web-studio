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
      items: ['webforms/using-web-form-editor',
        'webforms/rendering'
      ],
    },
    {
      type: 'doc',
      id: 'datasources',
      label: "Datasources"
    },
    {
      type: 'doc',
      id: 'events',
      label: "Events"
    },
    {
      type: 'doc',
      id: 'function-event',
      label: "Class functions and methods"
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
