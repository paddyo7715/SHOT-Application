Ext.define('Packt.view.IncidentOfficerDetail', {
    extend: 'Ext.form.Panel',
    alias: 'widget.IncidentOfficerDetail',
    width: 730,
    stores: [
        'officercalltypes', 'officerassignments', 'departments',  'officerstatuss', 'depttypes'
    ],
//    height: 250,
//    layout: 'anchor',
    layout: {
      type: 'vbox',
      align: 'left'
    },
    header:{
        title: 'Title2'
    },
    id: 'IncidentOfficerDetail',
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
        style: {
            marginBottom: '0px'
        },
        defaultType: 'textfield',
        fieldDefaults: {
         labelAlign: 'left'
        },
        items: [
        {
          labelAlign: 'left',
          xtype: 'textfield',
          name: 'io_officer_search',
          id: 'io_officer_search',
          labelWidth: 110,
          maxLength     : 100,
          fieldLabel: 'Officer Search:',
          inputWidth: 120,
          allowBlank: true  
        },
        {
          xtype: 'displayfield',
          fieldLabel: '',
          width: 10
        },
        { 
          xtype: 'button',
          text: 'Search',
          width: 70,
          name: 'io_search',
          id: 'io_search',
          itemId: 'io_search'
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
          name: 'io_off_add',
          id: 'io_off_add',
          itemId: 'io_off_add'
        },
        {
          xtype: 'displayfield',
          fieldLabel: '',
          width: 10
        },
        {
          xtype: 'checkbox',
          boxLabel: 'OUtside Agency',
          name: 'io_outsideagency',
          id: 'io_outsideagency',
          checked: false
        },
        {
          xtype: 'displayfield',
          fieldLabel: '',
          width: 10
        },
        {
          xtype: 'displayfield',
          fieldLabel: '',
          width: 10
        },
        {
          labelAlign: 'left',
          xtype: 'numberfield',
          name: 'io_shotsfired',
          id: 'io_shotsfired',
          itemId: 'io_shotsfired',
          fieldLabel: 'Shots fired:',
          inputWidth: 40,
          labelWidth: 80,
          maxLength     : 3,
          hideTrigger: true,
          keyNavEnabled: false,
          allowBlank: true,
          mouseWheelEnabled: true
        },
        {
          xtype: 'hiddenfield',
          name: 'io_incidentofficer_id',
          id: 'io_incidentofficer_id',
          value: ''
        },
        {
          xtype: 'hiddenfield',
          name: 'io_officer_id',
          id: 'io_officer_id'
        },
        {
          xtype: 'hiddenfield',
          name: 'io_race_id',
          id: 'io_race_id',
          value: ''
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
           xtype: 'displayfield',
          name: 'io_officername',
          id: 'io_officername',
          labelWidth: 60,
          width: 150,
          fieldLabel: 'Officer:'
        },
        {
          xtype: 'displayfield',
          fieldLabel: '',
          width: 10
        },
        {
          labelAlign: 'left',
           xtype: 'displayfield',
          name: 'io_gender',
          id: 'io_gender',
          labelWidth: 60,
          width: 100,
          fieldLabel: 'Gender:'
        },
        {
          xtype: 'displayfield',
          fieldLabel: '',
          width: 10
        },
        {
          labelAlign: 'left',
           xtype: 'displayfield',
          name: 'io_race',
          id: 'io_race',
          labelWidth: 40,
          width: 120,
          fieldLabel: 'Race:'
        },
        {
          xtype: 'displayfield',
          fieldLabel: '',
          width: 10
        },
        {
          labelAlign: 'left',
          xtype: 'numberfield',
          name: 'io_Age',
          id: 'io_Age',
          itemId: 'io_Age',
          fieldLabel: 'Age:',
          inputWidth: 40,
          labelWidth: 30,
          maxLength     : 3,
          hideTrigger: true,
          keyNavEnabled: false,
          allowBlank: true,
          mouseWheelEnabled: true
        },
        {
          xtype: 'displayfield',
          fieldLabel: '',
          width: 10
        },
        {
          xtype: 'combo',
	  fieldLabel: 'Officer Casualty:',
          labelAlign: 'left',
          labelWidth: 110,
          name: 'io_Casualty',
          id: 'io_Casualty',
          itemId: 'io_Casualty',
          inputWidth : 90,
          editable: false,
          allowBlank: true, 
          forceSelection: false,
          store: new Ext.data.Store({
          fields: ['name', 'value'],
          data : [
           {name:"Unharmed ", value:"U"},
           {name:"Killed", value:"K"},
           {name:"Injured", value:"I"}
          ]
          }),
	  queryMode: 'local',
	  displayField: 'name',
 	  valueField: 'value'
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
	  xtype: 'combo',
          labelWidth: 80,
	  fieldLabel: 'Assignment:',
          labelAlign: 'left',
          name: 'io_offassignment',
          id: 'io_offassignment',
          inputWidth : 150,
          editable: false,
	  store: 'officerassignments',
	  queryMode: 'local',
	  displayField: 'Assignment',
	  valueField: 'Assignment_ID',
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
          name: 'io_addassignment',
          id: 'io_addassignment',
          itemId: 'io_addassignment'
        },
        {
          xtype: 'displayfield',
          fieldLabel: '',
          width: 30
        },
        {
	  xtype: 'combo',
           labelWidth: 80,
	  fieldLabel: 'Call Type:',
          labelAlign: 'left',
          name: 'io_calltype',
          id: 'io_calltype',
          inputWidth : 150,
          editable: false,
	  store: 'officercalltypes',
	  queryMode: 'local',
	  displayField: 'Call_Type',
	  valueField: 'Call_Type_ID',
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
          name: 'io_addcalltype',
          id: 'io_addcalltype',
          itemId: 'io_addcalltype'
        },
        {
          xtype: 'displayfield',
          fieldLabel: '',
          width: 30
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
	  xtype: 'combo',
           labelWidth: 80,
	  fieldLabel: 'Dept Type:',
          labelAlign: 'left',
          name: 'io_depttype',
          id: 'io_depttype',
          inputWidth : 150,
          editable: false,
	  store: 'depttypes',
	  queryMode: 'local',
	  displayField: 'Dept_Type',
	  valueField: 'Dept_Type_ID',
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
          name: 'io_adddepttype',
          id: 'io_adddepttype',
          itemId: 'io_adddepttype'
        },
        {
          xtype: 'displayfield',
          fieldLabel: '',
          width: 30
        },
        {
	  xtype: 'combo',
           labelWidth: 80,
	  fieldLabel: 'Department:',
          labelAlign: 'left',
          name: 'io_department',
          id: 'io_department',
          inputWidth : 150,
          editable: false,
	  store: 'departments',
	  queryMode: 'local',
	  displayField: 'Department',
	  valueField: 'Department_ID',
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
          name: 'io_adddepartment',
          id: 'io_adddepartment',
          itemId: 'io_adddepartment'
        },
        {
          xtype: 'displayfield',
          fieldLabel: '',
          width: 30
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
	  xtype: 'combo',
          labelWidth: 80,
	  fieldLabel: 'Status:',
          labelAlign: 'left',
          name: 'io_officerstatus',
          id: 'io_officerstatus',
          inputWidth : 150,
          editable: false,
	  store: 'officerstatuss',
	  queryMode: 'local',
	  displayField: 'Status',
	  valueField: 'Status_ID',
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
          name: 'io_addstatus',
          id: 'io_addstatus',
          itemId: 'io_addstatus'
        },
        {
          xtype: 'displayfield',
          fieldLabel: '',
          width: 30
        },
        {
          labelAlign: 'left',
          xtype: 'numberfield',
          name: 'io_yrsexperience',
          id: 'io_yrsexperience',
          itemId: 'io_yrsexperience',
          fieldLabel: 'Years Exp:',
          inputWidth: 50,
          labelWidth: 80,
          maxLength     : 3,
          hideTrigger: true,
          keyNavEnabled: false,
          allowBlank: true,
          mouseWheelEnabled: true
        },
        {
          xtype: 'displayfield',
          fieldLabel: '',
          width: 10
        },
        {
          xtype: 'combo',
	  fieldLabel: 'Exp In Cluster:',
          labelAlign: 'left',
          name: 'io_exp_in_cluster',
          id: 'io_exp_in_cluster',
          itemId: 'io_exp_in_cluster',
          inputWidth : 110,
          labelWidth: 100,
          editable: false,
          allowBlank: true, 
          forceSelection: false,
          store: new Ext.data.Store({
          fields: ['name', 'value'],
          data : [
           {name:"<=12 months", value:"LTT"},
           {name:"1 to 3 years", value:"OTT"},
           {name:"4 to 7 years", value:"FTS"},
           {name:">=8 years", value:"GTE"}
          ]
          }),
	  queryMode: 'local',
	  displayField: 'name',
 	  valueField: 'value'
          }]
    }
    ],

    buttons: [{
        text: 'Submit',
        id: 'iosubmit',
        action: 'iosubmitbtn'
//        formBind: true
    },
    {
        text: 'Cancel',
        id: 'iocancel',
        action: 'iocancel',
        formBind: false
    }
    ]
});

