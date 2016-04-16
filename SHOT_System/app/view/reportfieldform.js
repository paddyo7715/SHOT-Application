Ext.define('Packt.view.reportfieldform', {
    extend: 'Ext.form.Panel',
    alias: 'widget.reportfieldform',
    width: 730,
    layout: 'anchor',
    layout: {
      type: 'vbox',
      align: 'left'
    },
    header:{
        title: 'Generate Report'
    },
    id: 'reportfieldform',
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
//             width: 215,
              inputWidth : 100,
             labelAlign: 'left',
             fieldLabel: 'Start Date:',
             allowBlank: true,
             xtype: 'datefield',
             anchor: '100%',
             labelWidth: 85,
             id: 'rpt_fltr_startdate',
             name: 'rpt_fltr_startdate'
        },
        {
          xtype: 'displayfield',
          fieldLabel: '',
          width: 30
        },
        {
//             width: 215,
             inputWidth : 90,
             labelAlign: 'left',
             fieldLabel: 'End Date:',
             allowBlank: true,
             xtype: 'datefield',
             anchor: '100%',
             labelWidth: 85,
             id: 'rpt_fltr_enddate',
             name: 'rpt_fltr_enddate'
        },
        {
          xtype: 'displayfield',
          fieldLabel: '',
          width: 30
        },
        {
	    xtype: 'combo',
	    fieldLabel: 'Approximate Time:',
            labelAlign: 'left',
            name: 'rpt_fltr_approx_time',
            id: 'rpt_fltr_approx_time',
            itemId: 'rpt_fltr_approx_time',
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
  	  xtype: 'combo',
	  fieldLabel: 'State:',
          labelAlign: 'left',
          name: 'rpt_fltr_State',
          id: 'rpt_fltr_State',
          inputWidth : 100,
          labelWidth: 85,
          editable: false,
	  store: 'States',
	  queryMode: 'local',
	  displayField: 'State',
	  valueField: 'State_ID',
          allowBlank: true 
        },
        {
          xtype: 'displayfield',
          fieldLabel: '',
          width: 30
        },
        {
            xtype: 'combo',
	    fieldLabel: 'Region:',
            labelAlign: 'left',
            inputWidth : 100,
            labelWidth: 82,
            name: 'rpt_fltr_Region',
            id: 'rpt_fltr_Region',
            store: 'Regions',
            queryMode: 'local',
            displayField: 'Region',
            valueField: 'Region'
        },
        {
          xtype: 'displayfield',
          fieldLabel: '',
          width: 30
        },
        {
	    xtype: 'combo',
	    fieldLabel: 'Lawsuit:',
            labelAlign: 'left',
            labelWidth: 82,
            name: 'rpt_fltr_lawsuit',
            id: 'rpt_fltr_lawsuit',
            itemId: 'rpt_fltr_lawsuit',
            inputWidth : 100,
            editable: false,
            allowBlank: true, 
            forceSelection: false,
            store: new Ext.data.Store({
            fields: ['name', 'value'],
            data : [
             {name:"YES", value:"Y"},
             {name:"NO", value:"N"}
            ]
            }),
	    queryMode: 'local',
	    displayField: 'name',
 	    valueField: 'value'

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
	  xtype: 'combo',
	  fieldLabel: 'Location:',
          labelAlign: 'left',
          name: 'rpt_fltr_location',
          id: 'rpt_fltr_location',
          inputWidth : 190,
           labelWidth: 85,
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
          width: 30
        },
        {
	  xtype: 'combo',
	  fieldLabel: 'Location Detail:',
          labelAlign: 'left',
          name: 'rpt_fltr_locationdet',
          id: 'rpt_fltr_locationdet',
          inputWidth : 190,
           labelWidth: 120,
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
          width: 2
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
	  xtype: 'combo',
          labelWidth: 85,
	  fieldLabel: 'Officer Race:',
          labelAlign: 'left',
          name: 'rpt_fltr_off_race',
          id: 'rpt_fltr_off_race',
          inputWidth : 100,
          editable: false,
	  store: 'Races',
	  queryMode: 'local',
	  displayField: 'Race',
	  valueField: 'Race_ID',
          allowBlank: true 
        },
        {
          xtype: 'displayfield',
          fieldLabel: '',
          width: 30
        },
        {
	    xtype: 'combo',
	    fieldLabel: 'Officer Fate:',
            labelAlign: 'left',
            labelWidth: 90,
            name: 'rpt_fltr_off_fate',
            id: 'rpt_fltr_off_fate',
            itemId: 'rpt_fltr_off_fate',
            inputWidth : 75,
            editable: false,
            allowBlank: true, 
            forceSelection: false,
            store: new Ext.data.Store({
            fields: ['name', 'value'],
            data : [
             {name:"Unharmed", value:"U"},
             {name:"Injured", value:"I"},
             {name:"Killed", value:"K"}
            ]
            }),
	    queryMode: 'local',
	    displayField: 'name',
 	    valueField: 'value'
        },
        {
          xtype: 'displayfield',
          fieldLabel: '',
          width: 30
        },
        {
	  xtype: 'combo',
          labelWidth: 130,
	  fieldLabel: 'Officer Assignment:',
          labelAlign: 'left',
          name: 'rpt_fltr_off_offassignment',
          id: 'rpt_fltr_off_offassignment',
          inputWidth : 150,
          editable: false,
	  store: 'officerassignments',
	  queryMode: 'local',
	  displayField: 'Assignment',
	  valueField: 'Assignment_ID',
          allowBlank: true 
        }]
        },
        {
          xtype: 'fieldcontainer',
          labelStyle: 'font-weight:bold;padding:0',
          layout: 'hbox',
          defaultType: 'textfield',
          items: [
          {
	  xtype: 'combo',
          labelWidth: 130,
	  fieldLabel: 'Officer Call Type:',
          labelAlign: 'left',
          name: 'rpt_fltr_off_calltype',
          id: 'rpt_fltr_off_calltype',
          inputWidth : 140,
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
            width: 30
          },
          {
	  xtype: 'combo',
          labelWidth: 130,
	  fieldLabel: 'Officer Dept Type:',
          labelAlign: 'left',
          name: 'rpt_fltr_off_depttype',
          id: 'rpt_fltr_off_depttype',
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
	  xtype: 'combo',
          labelWidth: 130,
	  fieldLabel: 'Officer Status:',
          labelAlign: 'left',
          name: 'rpt_fltr_off_status',
          id: 'rpt_fltr_off_status',
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
          width: 30
        },
        {
          xtype: 'combo',
	  fieldLabel: 'Officer Exp In Cluster:',
          labelAlign: 'left',
          name: 'rpt_fltr_off_exp_in_cluster',
          id: 'rpt_fltr_off_exp_in_cluster',
          itemId: 'io_exp_in_cluster',
          inputWidth : 110,
          labelWidth: 160,
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
            labelWidth: 85,
	    fieldLabel: 'Subject Race:',
            labelAlign: 'left',
            name: 'rpt_fltr_sus_race',
            id: 'rpt_fltr_sus_race',
            inputWidth : 70,
            editable: false,
  	    store: 'Races',
  	    queryMode: 'local',
	    displayField: 'Race',
	    valueField: 'Race_ID',
            allowBlank: true 
          },
          {
            xtype: 'displayfield',
            fieldLabel: '',
            width: 30
          },
          {
	    xtype: 'combo',
	    fieldLabel: 'Subject Fate:',
            labelWidth: 100,
            labelAlign: 'left',
            name: 'rpt_fltr_sus_fate',
            id: 'rpt_fltr_sus_fate',
            itemId: 'rpt_fltr_sus_fate',
            inputWidth : 80,
            editable: false,
            allowBlank: true, 
            forceSelection: false,
            store: new Ext.data.Store({
            fields: ['name', 'value'],
            data : [
             {name:"Unharmed", value:"U"},
             {name:"Injured", value:"I"},
             {name:"Killed", value:"K"}
            ]
            }),
	    queryMode: 'local',
	    displayField: 'name',
 	    valueField: 'value'
          },
          {
            xtype: 'displayfield',
            fieldLabel: '',
            width: 30
          },
          {
	    xtype: 'combo',
            labelWidth: 110,
	    fieldLabel: 'Mental State:',
            labelAlign: 'left',
            name: 'rpt_fltr_MentalState',
            id: 'rpt_fltr_MentalState',
            inputWidth : 150,
            editable: false,
	    store: 'MentalStates',
	    queryMode: 'local',
	    displayField: 'Mental_Status',
	    valueField: 'Mental_Status_ID',
            allowBlank: true 
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
           labelWidth: 90,
	  fieldLabel: 'Weapons:',
          labelAlign: 'left',
          name: 'rpt_fltr_Weapons',
          id: 'rpt_fltr_Weapons',
          inputWidth : 150,
          editable: false,
	  store: 'Weapons',
	  queryMode: 'local',
	  displayField: 'Weapons_Type',
	  valueField: 'Weapons_ID',
          allowBlank: true 
          },
          {
            xtype: 'displayfield',
            fieldLabel: '',
            width: 30
          },
          {
	  xtype: 'combo',
           labelWidth: 120,
	  fieldLabel: 'Aggression Type:',
          labelAlign: 'left',
          name: 'rpt_fltr_aggression',
          id: 'rpt_fltr_aggression',
          inputWidth : 150,
          editable: false,
	  store: 'AggressionTypes',
	  queryMode: 'local',
	  displayField: 'Aggression_Type',
	  valueField: 'Type_of_Agression_ID',
          allowBlank: true 
          }]
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
	      xtype: 'combo',
	      fieldLabel: 'Subject US Citizen:',
              labelWidth: 150,
              labelAlign: 'left',
              name: 'rpt_fltr_uscitizen',
              id: 'rpt_fltr_uscitizen',
              itemId: 'rpt_fltr_uscitizen',
              inputWidth : 70,
              editable: false,
              allowBlank: true, 
              forceSelection: false,
              store: new Ext.data.Store({
              fields: ['name', 'value'],
              data : [
               {name:"YES", value:"Y"},
               {name:"NO", value:"N"}
              ]
              }),
	      queryMode: 'local',
	      displayField: 'name',
 	      valueField: 'value'
          },
          {
             xtype: 'displayfield',
             fieldLabel: '',
             width: 30
          },
          {
	      xtype: 'combo',
	      fieldLabel: 'Subject Gang Member:',
              labelWidth: 150,
              labelAlign: 'left',
              name: 'rpt_fltr_gang',
              id: 'rpt_fltr_gang',
              itemId: 'rpt_fltr_gang',
              inputWidth : 70,
              editable: false,
              allowBlank: true, 
              forceSelection: false,
              store: new Ext.data.Store({
              fields: ['name', 'value'],
              data : [
               {name:"YES", value:"Y"},
               {name:"NO", value:"N"}
              ]
              }),
	      queryMode: 'local',
	      displayField: 'name',
 	      valueField: 'value'
          },
          {
            xtype: 'displayfield',
            fieldLabel: '',
            width: 2
          }]
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
	      xtype: 'combo',
	      fieldLabel: 'Vehicle Hit and Run:',
              labelWidth: 150,
              labelAlign: 'left',
              name: 'rpt_fltr_vhitrun',
              id: 'rpt_fltr_vhitrun',
              itemId: 'rpt_fltr_vhitrun',
              inputWidth : 70,
              editable: false,
              allowBlank: true, 
              forceSelection: false,
              store: new Ext.data.Store({
              fields: ['name', 'value'],
              data : [
               {name:"YES", value:"Y"},
               {name:"NO", value:"N"}
              ]
              }),
	      queryMode: 'local',
	      displayField: 'name',
 	      valueField: 'value'
          },
          {
             xtype: 'displayfield',
             fieldLabel: '',
             width: 30
          },
          {
	      xtype: 'combo',
	      fieldLabel: 'Vehicle Chase:',
              labelWidth: 120,
              labelAlign: 'left',
              name: 'rpt_fltr_vchase',
              id: 'rpt_fltr_vchase',
              itemId: 'rpt_fltr_vchase',
              inputWidth : 70,
              editable: false,
              allowBlank: true, 
              forceSelection: false,
              store: new Ext.data.Store({
              fields: ['name', 'value'],
              data : [
               {name:"YES", value:"Y"},
               {name:"NO", value:"N"}
              ]
              }),
	      queryMode: 'local',
	      displayField: 'name',
 	      valueField: 'value'
          },
          {
             xtype: 'displayfield',
             fieldLabel: '',
             width: 30
          },
          {
	      xtype: 'combo',
	      fieldLabel: 'Foot Chase:',
              labelAlign: 'left',
              labelWidth: 90,
              name: 'rpt_fltr_fchase',
              id: 'rpt_fltr_fchase',
              itemId: 'rpt_fltr_fchase',
              inputWidth : 70,
              editable: false,
              allowBlank: true, 
              forceSelection: false,
              store: new Ext.data.Store({
              fields: ['name', 'value'],
              data : [
               {name:"YES", value:"Y"},
               {name:"NO", value:"N"}
              ]
              }),
	      queryMode: 'local',
	      displayField: 'name',
 	      valueField: 'value'
          },
          {
            xtype: 'displayfield',
            fieldLabel: '',
            width: 2
          }]
        },
        {
             xtype: 'displayfield',
             fieldLabel: '',
             height: 10,
             width: 30
        },
        {
	      xtype: 'combo',
	      fieldLabel: 'Reports:',
              labelAlign: 'left',
              labelWidth: 120,
              name: 'rpt_fltr_report',
              id: 'rpt_fltr_report',
              itemId: 'rpt_fltr_report',
              inputWidth : 350,
              editable: false,
              allowBlank: false, 
              forceSelection: false,
              store: new Ext.data.Store({
              fields: ['name', 'value'],
              data : [
               {name:"Race of Subject (Pie Chart)", value:"sus_race"},
               {name:"Race of Officer (Pie Chart)", value:"off_race"},
               {name:"Incidents by Year (Bar Chart)", value:"inc_year"},
               {name:"Incidents by Location Detail (Grid Report)", value:"Location_Details"},
               {name:"Incidents by State (Grid Report)", value:"inc_state"},
               {name:"Incidents by Location (Grid Report)", value:"Location"},
               {name:"Incidents by Officer Assignment (Pie Chart)", value:"off_assign"},
               {name:"Incidents by Region (Pie Chart)", value:"inc_region"},
               {name:"Incidents by Officer Experience Cluster (Pie Chart)", value:"inc_experience"},
               {name:"Incidents by Approximate Time (Pie Chart)", value:"inc_time"},
               {name:"Incidents by Officer Department Type (Pie Chart)", value:"off_dept_type"},
               {name:"Incidents by Officer Status (Pie Chart)", value:"off_status"},
               {name:"Incidents by Subject Mental State (Pie Chart)", value:"sus_mental"},
               {name:"Incidents by Subject Weapon Used (Pie Chart)", value:"sus_weapon"},
               {name:"Incidents by Subject Aggression Type (Pie Chart)", value:"sus_agg"}

              ]
              }),
	      queryMode: 'local',
	      displayField: 'name',
 	      valueField: 'value'
           }
    ],

    buttons: [{
        text: 'Generate Report',
        id: 'rpt_fltr_submitbtn',
        action: 'rpt_fltr_submit'
    },
    {
        text: 'Reset',
        id: 'rpt_fltr_cancel',
        action: 'rpt_fltr_cancel',
        handler: function(){
          var form = this.up('form').getForm();
          form.reset();
        },
        formBind: false
    }
    ]
});
