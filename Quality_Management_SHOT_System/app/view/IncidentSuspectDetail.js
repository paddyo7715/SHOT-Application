Ext.define('Packt.view.IncidentSuspectDetail', {
    extend: 'Ext.form.Panel',
    alias: 'widget.IncidentSuspectDetail',
    width: 730,
    stores: [
        'AggressionTypes', 'Weapons', 'MentalStates'
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
    id: 'IncidentSuspectDetail',
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
          name: 'susdet_suspect_search',
          id: 'susdet_suspect_search',
          labelWidth: 110,
          maxLength     : 100,
          fieldLabel: 'Subject Search:',
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
          name: 'susdet_search',
          id: 'susdet_search',
          itemId: 'susdet_search'
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
          name: 'susdet_suspect_add',
          id: 'susdet_suspect_add',
          itemId: 'susdet_suspect_add'
        },
        {
          xtype: 'displayfield',
          fieldLabel: '',
          width: 30
        },
        {
          labelAlign: 'left',
          xtype: 'numberfield',
          name: 'susdet_age',
          id: 'susdet_age',
          itemId: 'susdet_age',
          fieldLabel: 'Age:',
          inputWidth: 40,
          labelWidth: 50,
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
          xtype: 'displayfield',
          fieldLabel: '',
          width: 10
        },
        {
          xtype: 'hiddenfield',
          name: 'susdet_incidentsuspect_id',
          id: 'susdet_incidentsuspect_id'
        },
        {
          xtype: 'hiddenfield',
          name: 'susdet_suspect_id',
          id: 'susdet_suspect_id'
        },
        {
          xtype: 'hiddenfield',
          name: 'susdet_race_id',
          id: 'susdet_race_id',
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
          name: 'susdet_suspectname',
          id: 'susdet_suspectname',
          labelWidth: 60,
          width: 150,
          fieldLabel: 'Subject:'
        },
        {
          xtype: 'displayfield',
          fieldLabel: '',
          width: 10
        },
        {
          labelAlign: 'left',
           xtype: 'displayfield',
          name: 'susdet_gender',
          id: 'susdet_gender',
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
          name: 'susdet_race',
          id: 'susdet_race',
          labelWidth: 50,
          width: 140,
          fieldLabel: 'Race:'
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
        defaultType: 'textfield',
        fieldDefaults: {
         labelAlign: 'left'
        },
        items: [
        {
	  xtype: 'combo',
          labelWidth: 90,
	  fieldLabel: 'Mental State:',
          labelAlign: 'left',
          name: 'susdet_MentalState',
          id: 'susdet_MentalState',
          inputWidth : 150,
          editable: false,
	  store: 'MentalStates',
	  queryMode: 'local',
	  displayField: 'Mental_Status',
	  valueField: 'Mental_Status_ID',
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
          name: 'susdet_addMentalState',
          id: 'susdet_addMentalState',
          itemId: 'susdet_addMentalState'
        },
        {
          xtype: 'displayfield',
          fieldLabel: '',
          width: 30
        },
        {
	  xtype: 'combo',
           labelWidth: 70,
	  fieldLabel: 'Weapons:',
          labelAlign: 'left',
          name: 'susdet_Weapons',
          id: 'susdet_Weapons',
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
          width: 10
        },
        { 
          xtype: 'button',
          text: 'Add',
          width: 70,
          name: 'susdet_addWeapons',
          id: 'susdet_addWeapons',
          itemId: 'susdet_addWeapons'
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
           labelWidth: 120,
	  fieldLabel: 'Aggression Type:',
          labelAlign: 'left',
          name: 'susdet_aggression',
          id: 'susdet_aggression',
          inputWidth : 150,
          editable: false,
	  store: 'AggressionTypes',
	  queryMode: 'local',
	  displayField: 'Aggression_Type',
	  valueField: 'Type_of_Agression_ID',
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
          name: 'susdet_addaggression',
          id: 'susdet_addaggression',
          itemId: 'susdet_addaggression'
        },
        {
          xtype: 'displayfield',
          fieldLabel: '',
          width: 20
        },
        {
	  xtype: 'combo',
          labelWidth: 40,
	  fieldLabel: 'Shot:',
          labelAlign: 'left',
          name: 'susdet_shotarea',
          id: 'susdet_shotarea',
          inputWidth : 60,
          editable: false,
//          multiSelect: true, 
	  store: 'targetareas',
	  queryMode: 'local',
	  displayField: 'Specific_Target_Area',
	  valueField: 'Target_Area_ID',
          allowBlank: true 
        },
        {
          labelAlign: 'left',
          xtype: 'textfield',
          name: 'susdet_shot_text',
          id: 'susdet_shot_text',
          labelWidth: 0,
          readOnly: true,
//          maxLength     : 200,
//          fieldLabel: 'Suspect Search:',
          inputWidth: 180,
          allowBlank: false  
        },
        { 
          xtype: 'button',
          text: 'Clear',
          width: 50,
          name: 'susdet_clear_shot',
          id: 'susdet_clear_shot',
          itemId: 'susdet_clear_shot'
        },
        {
          xtype: 'hiddenfield',
          name: 'susdet_shot_value',
          id: 'susdet_shot_value',
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
          xtype: 'checkbox',
          boxLabel: 'Vehicle Hit and Run',
          name: 'susdet_vHitRun',
          id: 'susdet_vHitRun',
          checked: false
        },
        {
          xtype: 'displayfield',
          fieldLabel: '',
          width: 10
        },
        {
          xtype: 'checkbox',
          boxLabel: 'Vehicle Chase',
          name: 'susdet_vchase',
          id: 'susdet_vchase',
          checked: false
        },
        {
          xtype: 'displayfield',
          fieldLabel: '',
          width: 10
        },
        {
          xtype: 'checkbox',
          boxLabel: 'Foot Chase',
          name: 'susdet_fchase',
          id: 'susdet_fchase',
          checked: false
        },
        {
          xtype: 'displayfield',
          fieldLabel: '',
          width: 10
        },
        {
          xtype: 'checkbox',
          boxLabel: 'US Citizen',
          name: 'susdet_uscitizen',
          id: 'susdet_uscitizen',
          checked: false
        },
        {
          xtype: 'displayfield',
          fieldLabel: '',
          width: 10
        },
        {
          xtype: 'checkbox',
          boxLabel: 'Gang Member',
          name: 'susdet_gang',
          id: 'susdet_gang',
          checked: false
        },
        {
          xtype: 'displayfield',
          fieldLabel: '',
          width: 10
        },
        {
          xtype: 'checkbox',
          boxLabel: 'Fatality',
          name: 'susdet_fatality',
          id: 'susdet_fatality',
          checked: false
        },
        {
          xtype: 'displayfield',
          fieldLabel: '',
          width: 10
        },
        {
          xtype: 'checkbox',
          boxLabel: 'Injury',
          name: 'susdet_injury',
          id: 'susdet_injury',
          checked: false
        },
        {
          xtype: 'displayfield',
          fieldLabel: '',
          width: 10
        }]
    }
    ],

    buttons: [{
        text: 'Submit',
        id: 'susdet_submit',
        action: 'susdet_submit'
//        formBind: true
    },
    {
        text: 'Cancel',
        id: 'susdet_cancel',
        action: 'susdet_cancel',
        formBind: false
    }
    ]
});

