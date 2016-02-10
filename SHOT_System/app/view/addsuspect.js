Ext.define('Packt.view.addsuspect', {
    extend: 'Ext.form.Panel',
    alias: 'widget.addsuspect',
    width: 400,
    height: 290,
//    layout: 'anchor',
    layout: {
      type: 'vbox',
      align: 'left'
    },
    header:{
        title: 'Add New Subject'
    },
    id: 'addsuspect',
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
        name: 'sus_name',
        id: 'sus_name',
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
                  id        : 'susgenderM'
              },  {
                  boxLabel  : 'Female',
                  name      : 'Gender',
                  inputValue: 'F',
                  id        : 'susgenderF'
              }
          ]
    },
    {
	  xtype: 'combo',
          labelWidth: 80,
	  fieldLabel: 'Race:',
          labelAlign: 'left',
          name: 'sus_race',
          id: 'sus_race',
          inputWidth : 150,
          editable: false,
	  store: 'Races',
	  queryMode: 'local',
	  displayField: 'Race',
	  valueField: 'Race_ID',
          allowBlank: false 
    },
    ],

    buttons: [{
        text: 'Submit',
        id: 'sus_submitbtn',
        action: 'sus_submitbtn'
//        formBind: true
    },
    { 
        xtype: 'button',
        text: 'Cancel',
        formBind: false,
        handler: function() {
        var offaddwin = Ext.getCmp('winsusadd');
        offaddwin.destroy();
     }
    }
    ]
});

