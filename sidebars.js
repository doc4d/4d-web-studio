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
      items: ['webforms/using-web-form-editor',
        'webforms/rendering'
      ],
    },
    {
      type: 'category',
      label: 'ORDA',
      items: [
        'ORDA/overview',
        'ORDA/data-model',
        'ORDA/orda-classes',
        'ORDA/data',
        'ORDA/glossary',
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
