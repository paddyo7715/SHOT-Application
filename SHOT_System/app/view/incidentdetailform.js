Ext.define('Packt.view.incidentdetailform', {
    extend: 'Ext.form.Panel',
    alias: 'widget.incidentdetailform',
    width: 730,
    stores: [
        'States',
        'Locations',
        'LocationsDet'
    ],
    requires: [
      'Packt.view.GoogleMapWindow'
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
          xtype: 'button',
          text: 'Suspect Image',
          itemId: 'imageUpload_button',
          id: 'imageUpload_button',
          action: 'imageUpload_button',
          style: 'margin-left:25px',
          cls: 'imageUpload_button',
          disabled: true,
          listeners: {
            click: function(button) {
              //button.up('panel').googleButton();
              //button.up('panel').imageUploadButton();
 //             console.log("inc num:" + Ext.getCmp('id_Incidentnum').getValue().trim());
              var inc_id = Ext.getCmp('id_Incidentnum').getValue().trim();


          Ext.Ajax.timeout = 30000; // this changes the 30 second  
          Ext.Ajax.request({
          url: 'app/php/getIncidentImages.php',
            params: {
               Incident_ID: inc_id
            },
          failure: function(conn, response, options, eOpts) {
                var errmsg = conn.responseText;
                if (errmsg == null || errmsg == '') errmsg = "No response from server.";
                //             loadMask.hide();
                Ext.Msg.show({
                    title: 'Error!',
                    msg: errmsg,
                    icon: Ext.Msg.ERROR,
                    buttons: Ext.Msg.OK
                });
          },
          success: function(conn, response, options, eOpts) {
                var result = Ext.JSON.decode(conn.responseText, true);
                if (!result) {
                    result = {};
                    result.success = false;
                    result.msg = conn.responseText;
                }
                if (result.success) {
                    Ext.getStore('SuspectImageStore').loadData(result['SuspectImages']);

                } else {
                    if (result.msg == "no_session")
                        window.location = "index.html";
                    else
                        Ext.Msg.show({
                            title: 'Fail!',
                            msg: result.msg,
                            icon: Ext.Msg.ERROR,
                            buttons: Ext.Msg.OK
                        });
                }

            }
        });


              var uploadwin = Ext.create('Packt.view.ImageUploadWindow');
              Ext.getCmp('img_upld_incident_id').setValue(inc_id);
              Ext.getCmp('img_upld_incident_id2').setValue(inc_id);
              uploadwin.show();
            }
          }
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
          inputWidth: 70,
          allowBlank: true,
          // value: 55, // @DEBUG value
          itemId: 'latitude',
          listeners: {
           change: function(field) {
             field.up('panel').checkGoogle();
           }
          }
        },
        {
          labelAlign: 'left',
          xtype: 'textfield',
          name: 'id_longitude',
          id: 'id_longitude',
          inputWidth: 70,
          allowBlank: true,
          // value: 12, // @DEBUG value
          itemId: 'longitude',
          listeners: {
            change: function(field) {
              field.up('panel').checkGoogle();
            }
          }
        }, {
          xtype: 'button',
          text: 'Google Maps',
          disabled: true, // comment this out for @DEBUG
          itemId: 'google_button',
          cls: 'google_button',
          listeners: {
            click: function(button) {
              button.up('panel').googleButton();
            }
          }
        }, {
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
    }, {
        text: 'Print Preview',
        itemId: 'printPreview'
    }],

    checkGoogle: function() {
      // toggle google button based on lat and lon fields values
      var lon = this.down('#longitude').getValue().length;
      var lat = this.down('#latitude').getValue().length;
      var google_button = this.down('#google_button');
      if (lon && lat) {
        google_button.enable();
      } else {
        google_button.disable();
      }
    },
    googleButton: function() {
      // show Google Maps
      var lon = this.down('#longitude').getValue() * 1; // " * 1" enforces number, as opposed to string
      var lat = this.down('#latitude').getValue() * 1;
      var google_button = this.down('#google_button');
      var msg = 'Latitude: ' + lat + ', Longitude: ' + lon;

      // create Google Maps window
      var win = Ext.ComponentQuery.query('GoogleMapWindow');
      if (win.length) { // already exists
        win = win[0];
      } else { // fresh
        win = Ext.create('Packt.view.GoogleMapWindow');
      }
      win.setTitle(msg);
      win.show(google_button, function() {

        // position
        var pos = {
          lat: lat,
          lng: lon
        };

        // map
        if (! shot_map.map) {
          // Standard Usage Limits
          // Users of the standard API:
          // Free until exceeding 25,000 map loads per 24 hours for 90 consecutive days
          shot_map.map = new google.maps.Map(document.getElementById('google_map_window'), {
            center: pos,
            zoom: 8
          });
        } else {
          shot_map.map.setCenter(pos);
        }

        // info_window pop-up
        if (! shot_map.infowindow) {
          shot_map.infowindow = new google.maps.InfoWindow();
        }
        shot_map.infowindow.setContent(msg);
        shot_map.infowindow.setPosition(pos);
        shot_map.infowindow.open(shot_map.map);

        // marker
        /*if (! shot_map.marker) {
          shot_map.marker = new google.maps.Marker({
            position: pos,
            map: shot_map.map,
            title: 'Hello World!'
          });
        }*/

      });
    }
});
