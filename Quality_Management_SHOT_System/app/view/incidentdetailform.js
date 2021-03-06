Ext.define('Packt.view.incidentdetailform', {
    extend: 'Ext.form.Panel',
    alias: 'widget.incidentdetailform',
    width: 730,
    stores: [
        'States','Locations','LocationsDet'
    ],
    layout: 'anchor',
    layout: {
      type: 'vbox',
      align: 'left'
    },
    header:{
        title: 'Add New Incident'
    },
    id: 'incidentdetailform',
    border: false,
    bodyPadding: 10,
    titleAlign: 'center',
    buttonAlign: 'center',
    fieldDefaults: {
        labelWidth: 120,
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
            labelAlign: 'top'
        },
        items: [
        {
          labelAlign: 'left',
           xtype: 'displayfield',
          name: 'id_Incidentnum',
          id: 'id_Incidentnum',
          fieldLabel: 'Incident #:'
        },
        {
          xtype: 'displayfield',
          fieldLabel: '',
          width: 10
        },
        {
          labelAlign: 'left',
          xtype: 'textfield',
          name: 'id_Incidentname',
          id: 'id_Incidentname',
          fieldLabel: 'Name:',
          labelWidth: 50,
          inputWidth: 200,
          allowBlank: false  
        },
        {
          xtype: 'displayfield',
          fieldLabel: '',
          width: 10
        },
        {
          xtype: 'displayfield',
          fieldLabel: '',
          width: 20
        },
        {
          xtype: 'checkbox',
          boxLabel: 'Lawsuit',
          name: 'id_lawsuit',
          id: 'id_lawsuit',
          checked: false
        },
        {
          xtype: 'displayfield',
          fieldLabel: '',
          width: 2
        }]
   },
   {
        xtype: 'fieldcontainer',
        labelStyle: 'font-weight:bold;padding:0',
        layout: 'hbox',
        style: {
            marginBottom: '0px'
        },
        defaultType: 'textfield',
        fieldDefaults: {
            labelAlign: 'top'
        },
        items: [
        {
          labelAlign: 'left',
          xtype: 'textfield',
          name: 'id_Address1',
          id: 'id_Address1',
          fieldLabel: 'Address:',
          labelWidth: 70,
          inputWidth: 150,
          allowBlank: true  
        },
        {
          xtype: 'displayfield',
          fieldLabel: '',
          width: 10
        },
        {
          labelAlign: 'left',
          xtype: 'textfield',
          name: 'id_City',
          id: 'id_City',
          fieldLabel: 'City:',
          inputWidth: 100,
          labelWidth: 45,
          allowBlank: false  
        },
        {
          xtype: 'displayfield',
          fieldLabel: '',
          width: 20
        },
        {
  	  xtype: 'combo',
	  fieldLabel: 'State:',
          labelAlign: 'left',
          name: 'id_State',
          id: 'id_State',
          inputWidth : 100,
          labelWidth: 45,
          editable: false,
	  store: 'States',
	  queryMode: 'local',
	  displayField: 'State',
	  valueField: 'State_ID',
          allowBlank: false 
        },
        {
          xtype: 'displayfield',
          fieldLabel: '',
          width: 20
        },
        {
          labelAlign: 'left',
          labelWidth: 60,
           xtype: 'displayfield',
          name: 'id_Region',
          id: 'id_Region',
          fieldLabel: 'Region:'
        }]
    },
    {
        xtype: 'fieldcontainer',
        labelStyle: 'font-weight:bold;padding:0',
        layout: 'hbox',
        style: {
            marginBottom: '0px'
        },
        defaultType: 'textfield',
        fieldDefaults: {
            labelAlign: 'top'
        },
        items: [
        {
          xtype: 'displayfield',
          fieldLabel: '',
          width: 74
        },
        {
          labelAlign: 'left',
          xtype: 'textfield',
          name: 'id_address2',
          id: 'id_address2',
          fieldLabel: '',
          inputWidth: 150,
          allowBlank: true  
        },
        {
          xtype: 'displayfield',
          fieldLabel: '',
          width: 10
        },
        {
          labelAlign: 'left',
          xtype: 'textfield',
          name: 'id_zipcode',
          id: 'id_zipcode',
          fieldLabel: 'Zip Code:',
          labelWidth: 70,
          inputWidth: 70,
          allowBlank: true  
        },
        {
          xtype: 'displayfield',
          fieldLabel: '',
          width: 10
        },
        {
          labelAlign: 'left',
          xtype: 'textfield',
          name: 'id_latitude',
          id: 'id_latitude',
          fieldLabel: 'LAT/LON:',
          labelWidth: 70,
          inputWidth: 120,
          allowBlank: true  
        },
        {
          labelAlign: 'left',
          xtype: 'textfield',
          name: 'id_longitude',
          id: 'id_longitude',
          inputWidth: 120,
          allowBlank: true  
        },
        {
          xtype: 'hiddenfield',
          name: 'id_action',
          id: 'id_action',
          value: ''
        }
        ]
    },
    {
        xtype: 'fieldcontainer',
        labelStyle: 'font-weight:bold;padding:0',
        layout: 'hbox',
        defaultType: 'textfield',
        items: [
        {
          labelAlign: 'left',
          xtype: 'numberfield',
          name: 'id_officersscene',
          id: 'id_officersscene',
          itemId: 'id_officersscene',
          fieldLabel: 'Officers on Scene:',
          inputWidth: 50,
          maxLength     : 5,
          hideTrigger: true,
          keyNavEnabled: false,
          allowBlank: true,
          mouseWheelEnabled: true
        },
        {
          xtype: 'displayfield',
          fieldLabel: '',
          width: 20
        },
        {
          labelAlign: 'left',
          xtype: 'numberfield',
          name: 'id_officersfiredguns',
          id: 'id_officersfiredguns',
          itemId: 'id_officersfiredguns',
          fieldLabel: 'Officers Fired Guns:',
          labelWidth: 140,
          inputWidth: 50,
          maxLength     : 5,
          hideTrigger: true,
          keyNavEnabled: false,
          allowBlank: true,
          mouseWheelEnabled: true
        },
        {
          xtype: 'displayfield',
          fieldLabel: '',
          width: 20
        },
        {
          labelAlign: 'left',
          xtype: 'numberfield',
          name: 'id_officersshotsfired',
          id: 'id_officersshotsfired',
          itemId: 'id_officersshotsfired',
          fieldLabel: 'Total Officers Shots Fired:',
          labelWidth: 170,
          inputWidth: 50,
          maxLength     : 5,
          hideTrigger: true,
          keyNavEnabled: false,
          allowBlank: true,
          mouseWheelEnabled: true
        },
        {
          xtype: 'displayfield',
          fieldLabel: '',
          width: 2
        }]
        },
        {
          xtype: 'fieldcontainer',
          labelStyle: 'font-weight:bold;padding:0',
          layout: 'hbox',
          defaultType: 'textfield',
          items: [
          {
             width: 215,
             fieldLabel: 'Date Ocurred:',
             allowBlank: false,
             xtype: 'datefield',
             anchor: '100%',
             labelWidth: 92,
             id: 'id_dateoccurred',
             name: 'id_dateoccurred'
          },
          {
            xtype: 'displayfield',
            fieldLabel: '',
            width: 10
          },
          {
            xtype: 'timefield',
            name: 'id_time',
            id: 'id_time',
            fieldLabel: 'Time:',
            format: 'H:i',
            labelWidth: 50,
            inputWidth : 65,
            allowBlank: true, 
            increment: 1,
            anchor: '100%'
          },
          {
            xtype: 'displayfield',
            fieldLabel: '',
            width: 10
          },
          {
	    xtype: 'combo',
	    fieldLabel: 'Approximate Time:',
            labelAlign: 'left',
            name: 'id_approx_time',
            id: 'id_approx_time',
            itemId: 'id_approx_time',
            inputWidth : 110,
            editable: false,
            allowBlank: true, 
            forceSelection: false,
            store: new Ext.data.Store({
            fields: ['name', 'value'],
            data : [
             {name:"Early Morning", value:"EM"},
             {name:"Morning", value:"MO"},
             {name:"Noon", value:"NO"},
             {name:"Afternoon", value:"AF"},
             {name:"Evening", value:"EV"},
             {name:"Night", value:"NI"},
             {name:"Midnight", value:"MN"}
            ]
            }),
	    queryMode: 'local',
	    displayField: 'name',
 	    valueField: 'value'
          },
          {
            xtype: 'displayfield',
            fieldLabel: '',
            width: 10
          }]
        },
        {
        xtype: 'fieldcontainer',
        labelStyle: 'font-weight:bold;padding:0',
        layout: 'hbox',
        style: {
            marginBottom: '0px'
        },
        defaultType: 'textfield',
        fieldDefaults: {
            labelAlign: 'top'
        },
        items: [
        {
	  xtype: 'combo',
	  fieldLabel: 'Location:',
          labelAlign: 'left',
          name: 'id_location',
          id: 'id_location',
          inputWidth : 190,
           labelWidth: 60,
          editable: false,
	  store: 'Locations',
	  queryMode: 'local',
  	  displayField: 'Location',
	  valueField: 'Location_ID',
          allowBlank: true 
        },
        {
          xtype: 'displayfield',
          fieldLabel: '',
          width: 10
        },
        {
	  xtype: 'combo',
	  fieldLabel: 'Location Detail:',
          labelAlign: 'left',
          name: 'id_locationdet',
          id: 'id_locationdet',
          inputWidth : 190,
           labelWidth: 100,
          editable: false,
	  store: 'LocationsDet',
	  queryMode: 'local',
  	  displayField: 'Location_Details',
	  valueField: 'Location_Detail_ID',
          allowBlank: true 
        },
        {
          xtype: 'displayfield',
          fieldLabel: '',
          width: 20
        },
        {
          xtype      : 'fieldcontainer',
          defaultType: 'radiofield',
          allowBlank: true,  
            defaults: {
                flex: 1
            },
            layout: 'hbox',
            items: [
              {
                  boxLabel  : 'Indoor ',
                  name      : 'IndoorOut',
                  inputValue: 'I',
                  id        : 'id_indoor'
              }, 
              {
                 xtype: 'displayfield',
                 fieldLabel: '',
                 width: 10
              },
              {
                  boxLabel  : 'Outdoor',
                  name      : 'IndoorOut',
                  inputValue: 'O',
                  id        : 'id_outdoor'
              }
            ]
        },
        {
          xtype: 'displayfield',
          fieldLabel: '',
          width: 2
        }]
        }
    ],

    buttons: [{
        text: 'Submit',
        id: 'idsubmitbtn',
        action: 'idsubmit'
    },
    {
        text: 'Cancel',
        id: 'idcancelbtn',
        action: 'idcancelbtn',
        formBind: false
    }
    ]
});

