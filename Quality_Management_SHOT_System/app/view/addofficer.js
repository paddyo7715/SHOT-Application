Ext.define('Packt.view.addofficer', {
    extend: 'Ext.form.Panel',
    alias: 'widget.addofficer',
    width: 400,
    height: 350,
//    layout: 'anchor',
    layout: {
      type: 'vbox',
      align: 'left'
    },
//    header:{
//        title: 'Add New Officer'
//    },
    header: false,
    id: 'addofficer',
    border: 0,
    bodyPadding: 30,
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
        labelAlign: 'left',
        xtype: 'textfield',
        name: 'off_name',
        id: 'off_name',
        fieldLabel: 'Name:',
        inputWidth: 100,
        allowBlank: false  
    },
    {
        xtype      : 'fieldcontainer',
        fieldLabel : 'Gender:',
        defaultType: 'radiofield',
        allowBlank: false,  

          defaults: {
              flex: 1
          },
          layout: 'vbox',
          items: [
              {
                  boxLabel  : 'Male',
                  name      : 'Gender',
                  inputValue: 'M',
                  checked: true,
                  id        : 'offgenderM'
              },  {
                  boxLabel  : 'Female',
                  name      : 'Gender',
                  inputValue: 'F',
                  id        : 'offgenderF'
              }
          ]
    },
    {
	  xtype: 'combo',
          labelWidth: 80,
	  fieldLabel: 'Race:',
          labelAlign: 'left',
          name: 'off_race',
          id: 'off_race',
          inputWidth : 150,
          editable: false,
	  store: 'Races',
	  queryMode: 'local',
	  displayField: 'Race',
	  valueField: 'Race_ID',
          allowBlank: false 
    },
    {
         xtype: 'textareafield',
         width: 300,
         rows: 2,
          labelWidth: 70,
          maxLength     : 1000,
         name: 'off_additional_info',
         id: 'off_additional_info',
         fieldLabel: 'Additional Info:'
    },
    {
          xtype: 'hiddenfield',
          name: 'off_add_Action',
          id: 'off_add_Action',
          value: ''
    },
    {
          xtype: 'hiddenfield',
          name: 'off_add_Function',
          id: 'off_add_Function',
          value: ''
    },
    {
          xtype: 'hiddenfield',
          name: 'off_add_officerID',
          id: 'off_add_officerID',
          value: ''
    }


    ],

    buttons: [{
        text: 'Submit',
        id: 'off_submitbtn',
        action: 'off_submitbtn'
//        formBind: true
    },
    { 
        xtype: 'button',
        text: 'Cancel',
        handler: function() {
        var offaddwin = Ext.getCmp('winoffadd');
        offaddwin.destroy();
     }
    }
    ]
});

