Ext.define('Packt.view.addLocDetail', {
    extend: 'Ext.form.Panel',
    alias: 'widget.addLocDetail',
    width: 400,
    height: 170,
//    layout: 'anchor',
    layout: {
      type: 'vbox',
      align: 'left'
    },
//    header:{
//        title: ''
//    },
    id: 'addLocDetail',
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
        labelWidth: 120,
        name: 'adddetloc_name',
        id: 'adddetloc_name',
        fieldLabel: 'Name:',
        inputWidth: 150,
        allowBlank: false  
    },
    {
	  xtype: 'combo',
          labelWidth: 120,
	  fieldLabel: 'Location:',
          labelAlign: 'left',
          name: 'adddetloc_loc',
          id: 'adddetloc_loc',
          inputWidth : 150,
          editable: false,
	  store: 'Locations',
	  queryMode: 'local',
	  displayField: 'Location',
	  valueField: 'Location_ID',
          allowBlank: false 
    },
    {
          xtype: 'hiddenfield',
          name: 'adddetloc_LocDet_id',
          id: 'adddetloc_LocDet_id',
          value: ''
    },
    {
          xtype: 'hiddenfield',
          name: 'adddetloc_Action',
          id: 'adddetloc_Action',
          value: ''
    }

    ],

    buttons: [{
        text: 'Submit',
        id: 'addlocdet_submitbtn',
        action: 'addlocdet_submitbtn'
//        formBind: true
    },
    { 
        xtype: 'button',
        text: 'Cancel',
        handler: function() {
        var offaddwin = Ext.getCmp('winlocdetadd');
        offaddwin.destroy();
     }
    }
    ]
});

