Ext.define('Packt.view.usersdetails', {
    extend: 'Ext.form.Panel',
    alias: 'widget.usersdetails',
    width: 510,
//    height: 500,
//    layout: 'anchor',
    layout: {
      type: 'vbox',
      align: 'left'
    },
//    header:{
//        title: 'Title'
//    },
    id: 'usersdetails',
    border: 0,
    bodyPadding: 30,
    titleAlign: 'center',
    buttonAlign: 'center',
    fieldDefaults: {
        labelWidth: 140,
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
        name: 'userdet_userid',
        id: 'userdet_userid',
        fieldLabel: 'User ID:',
        inputWidth: 100,
        minLength: 8,
        maxLength: 12,
        allowBlank: false  
    },
    {
        labelAlign: 'left',
        xtype: 'textfield',
        name: 'userdet_name',
        id: 'userdet_name',
        fieldLabel: 'Name:',
        inputWidth: 200,
        maxLength: 100,
        allowBlank: false  
    },
    {
        labelAlign: 'left',
        xtype: 'textfield',
        name: 'userdet_organization',
        id: 'userdet_organization',
        fieldLabel: 'Organization:',
        inputWidth: 250,
        maxLength: 300,
        allowBlank: false  
    },
    {
        labelAlign: 'left',
        xtype: 'textfield',
        name: 'userdet_email',
        id: 'userdet_email',
        fieldLabel: 'Email:',
        inputType:'email',
        inputWidth: 200,
        maxLength: 200,
        allowBlank: true  
    },
    {
        labelAlign: 'left',
        xtype: 'textfield',
        name: 'userdet_phone',
        id: 'userdet_phone',
        fieldLabel: 'Phone:',
        inputWidth: 120,
        maxLength: 20,
        allowBlank: true  
    },
    {
        labelAlign: 'left',
        xtype: 'textfield',
        name: 'userdet_password1',
        id: 'userdet_password1',
        fieldLabel: 'Initial Password:',
        inputType:'password',
        inputWidth: 120,
        minLength: 8,
        maxLength: 12,
        allowBlank: true  
    },
    {
        labelAlign: 'left',
        xtype: 'textfield',
        name: 'userdet_password2',
        id: 'userdet_password2',
        fieldLabel: 'Confirm Password:',
        inputType:'password',
        inputWidth: 120,
        minLength: 8,
        maxLength: 12,
        allowBlank: true  
    },
    {
        xtype      : 'fieldcontainer',
        fieldLabel : 'Access',
        defaultType: 'checkboxfield',
        frame: true,

          defaults: {
              flex: 1
          },
          layout: 'vbox',
          items: [
                {
                 xtype: 'checkbox',
                 boxLabel: 'New Incident',
                 name: 'userdet_newincident',
                 id: 'userdet_newincident',
                 checked: false
               },
               {
                 xtype: 'checkbox',
                 boxLabel: 'Query View',
                 name: 'userdet_queryview',
                 id: 'userdet_queryview',
                 checked: false
              },
              {
                 xtype: 'checkbox',
                 boxLabel: 'Query Update',
                 name: 'userdet_queryupdate',
                 id: 'userdet_queryupdate',
                 checked: false
             },
             {
                 xtype: 'checkbox',
                 boxLabel: 'Database Maint',
                 name: 'userdet_databasemaint',
                 id: 'userdet_databasemaint',
                 checked: false
            },
            {
                 xtype: 'checkbox',
                 boxLabel: 'Reports',
                 name: 'userdet_reports',
                 id: 'userdet_reports',
                 checked: false
            },
            {
                 xtype: 'checkbox',
                 boxLabel: 'User Management',
                 name: 'userdet_usermanagement',
                 id: 'userdet_usermanagement',
                 checked: false
            },
          ]
    },
    {
          xtype: 'hiddenfield',
          name: 'userdet_Action',
          id: 'userdet_Action',
          value: ''
    },
    {
          xtype: 'hiddenfield',
          name: 'userdet_user_number',
          id: 'userdet_user_number',
          value: ''
    }

    ],

    buttons: [{
        text: 'Submit',
        action: 'userdet_submitbtn',
        id: 'userdet_submitbtn'

//        formBind: true
    },
    { 
        xtype: 'button',
        text: 'Cancel',
        handler: function() {
        var userdetwin = Ext.getCmp('winuserdetail');
        userdetwin.destroy();
     }
    }
    ]
});

