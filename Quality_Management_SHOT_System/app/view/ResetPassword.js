Ext.define('Packt.view.ResetPassword', {
    extend: 'Ext.form.Panel',
    alias: 'widget.ResetPassword',
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
    id: 'ResetPassword',
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
        name: 'passwordr_pw1',
        id: 'passwordr_pw1',
        fieldLabel: 'Password:',
        inputType:'password',
        inputWidth: 120,
        minLength: 8,
        maxLength: 12,
        allowBlank: false  
    },
    {
        labelAlign: 'left',
        xtype: 'textfield',
        labelWidth: 120,
        name: 'passwordr_pw2',
        id: 'passwordr_pw2',
        fieldLabel: 'Confirm:',
        inputType:'password',
        inputWidth: 120,
        minLength: 8,
        maxLength: 12,
        allowBlank: false  
    },
    {
          xtype: 'hiddenfield',
          name: 'passwordr_user_num',
          id: 'passwordr_user_num',
          value: ''
    },
    {
          xtype: 'hiddenfield',
          name: 'passwordr_user_id',
          id: 'passwordr_user_id',
          value: ''
    }
    ],

    buttons: [{
        text: 'Submit',
        id: 'passwordr_submitbtn',
        action: 'passwordr_submitbtn'
//        formBind: true
    },
    { 
        xtype: 'button',
        text: 'Cancel',
        handler: function() {
        var offaddwin = Ext.getCmp('winpasswordreset');
        offaddwin.destroy();
     }
    }
    ]
});

