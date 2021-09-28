module.exports = {

  docs: [
    {
      type: 'category',
      label: 'Getting Started',
      items: [
        'getting-started/overview',
        'getting-started/configuration'
      ],
    },
    {
      type: 'category',
      label: 'Webforms',
      items: ['web-form-editor/using-web-form-editor',
        'web-form-editor/rendering'
      ],
    },
    {
      type: 'category',
      label: 'API',
      items: [
        {
          type: 'category',
          label: 'ORDA',
          items: [
            'API/orda/DataStoreClass',
            'API/orda/DataClassClass',
            'API/orda/EntityClass',
            'API/orda/EntitySelectionClass',
          ],
        },
        {
          type: 'category',
          label: 'Webform Editor',
          items: [
            'API/web-form-editor/WebFormClass',
            'API/web-form-editor/WebFormItemClass',
            'API/web-form-editor/web-event',
          ],
        },
      ],
    },
  ],
};
