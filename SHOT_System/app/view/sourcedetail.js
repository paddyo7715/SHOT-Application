Ext.define('Packt.view.sourcedetail', {
    extend: 'Ext.form.Panel',
    alias: 'widget.sourcedetail',
    width: 730,
    stores: [
        'Newspapers', 'sourcetypes'
    ],
//    height: 250,
//    layout: 'anchor',
    layout: {
      type: 'vbox',
      align: 'left'
    },
    header:{
        title: 'Title'
    },
    id: 'sourcedetail',
    border: 0,
    bodyPadding: 10,
    titleAlign: 'center',
    buttonAlign: 'center',
    fieldDefaults: {
        labelWidth: 200,
        labelStyle: 'font-weight:bold'
    },
    defaults: {
        anchor: '100%',
        margins: '0 0 10 0',
        msgTarget : 'side'
    },
    items: [
    {
        xtype: 'fieldcontainer',
        labelStyle: 'font-weight:bold;padding:0',
        layout: 'hbox',
        defaultType: 'textfield',
        fieldDefaults: {
         labelAlign: 'left'
        },
        items: [
        {
          labelAlign: 'left',
          xtype: 'textfield',
          name: 'sd_Title',
          id: 'sd_Title',
          labelWidth: 50,
          maxLength     : 100,
          fieldLabel: 'Title:',
          inputWidth: 300,
          allowBlank: false  
        },
        {
          xtype: 'displayfield',
          fieldLabel: '',
          width: 10
        },
        {
          labelAlign: 'left',
          xtype: 'textfield',
          name: 'sd_Author',
          id: 'sd_Author',
          fieldLabel: 'Author:',
          labelWidth: 50,
          maxLength: 100,
          inputWidth: 200,
          allowBlank: false  
        }]
    },
    {
        xtype: 'fieldcontainer',
        labelStyle: 'font-weight:bold;padding:0',
        layout: 'hbox',
        defaultType: 'textfield',
        fieldDefaults: {
         labelAlign: 'left'
        },
        items: [
        {
           width: 180,
           fieldLabel: 'Date Written:',
           xtype: 'datefield',
           anchor: '100%',
           labelWidth: 90,
           id: 'sd_datewritten',
           name: 'sd_datewritten',
           allowBlank: false  
        },
        {
          xtype: 'displayfield',
          fieldLabel: '',
          width: 10
        },
        {
	  xtype: 'combo',
           labelWidth: 90,
	  fieldLabel: 'Newspaper:',
          labelAlign: 'left',
          name: 'sd_newspaper',
          id: 'sd_newspaper',
          inputWidth : 150,
          editable: false,
	  store: 'Newspapers',
	  queryMode: 'local',
	  displayField: 'Newspaper',
	  valueField: 'Newspaper_ID',
          allowBlank: true 
        },
        {
          xtype: 'displayfield',
          fieldLabel: '',
          width: 10
        },
        { 
          xtype: 'button',
          text: 'Add',
          width: 70,
          name: 'sd_newspaperadd',
          id: 'sd_newspaperadd',
          itemId: 'sd_newspaperadd'
        },
        {
          xtype: 'hiddenfield',
          id: 'sd_sourceid',
          name: 'sd_sourceid'
        }]
    },
    {
        xtype: 'fieldcontainer',
        labelStyle: 'font-weight:bold;padding:0',
        layout: 'hbox',
        defaultType: 'textfield',
        fieldDefaults: {
         labelAlign: 'left'
        },
        items: [
        {
          labelAlign: 'left',
          xtype: 'textfield',
          name: 'sd_Link',
          id: 'sd_Link',
          labelWidth: 50,
          maxLength     : 500,
          fieldLabel: 'Link:',
          inputWidth: 350,
          allowBlank: true  
        },
        {
          xtype: 'displayfield',
          fieldLabel: '',
          width: 10
        },
        {
	  xtype: 'combo',
           labelWidth: 50,
	  fieldLabel: 'Type:',
          labelAlign: 'left',
          name: 'sd_SourceType',
          id: 'sd_SourceType',
          inputWidth : 150,
          editable: false,
	  store: 'sourcetypes',
	  queryMode: 'local',
	  displayField: 'Source',
	  valueField: 'Source_Type_ID',
          allowBlank: false 
        },
        {
          xtype: 'displayfield',
          fieldLabel: '',
          width: 10
        },
        { 
          xtype: 'button',
          text: 'Add',
          width: 70,
          name: 'sd_sourcetypeadd',
          id: 'sd_sourcetypeadd',
          itemId: 'sd_sourcetypeadd'
        },
        {
          xtype: 'hiddenfield',
          id: 'sd_sourceid',
          name: 'sd_sourceid'
        }]
    },
    {
         xtype: 'textareafield',
         width: 600,
         rows: 2,
           labelWidth: 70,
          maxLength     : 255,
         name: 'sd_abstract',
         id: 'sd_abstract',
         fieldLabel: 'Abstract:'
    } 
    ],

    buttons: [{
        text: 'Submit',
        id: 'sdsubmit',
        action: 'sdsubmitbtn'
//        formBind: true
    },
    {
        text: 'Cancel',
        id: 'sdcancel',
        action: 'sdcancel',
        formBind: false
    }
    ]
});

