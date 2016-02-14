Ext.define('Packt.controller.cont', {
    extend: 'Ext.app.Controller',
    stores: [
        'States',
        'Locations',
        'LocationsDet',
        'sources',
        'Newspapers',
        'sourcetypes',
        'officercalltypes',
        'officerassignments',
        'departments',
        'officerstatuss',
        'depttypes',
        'Races',
        'officer_search',
        'incidentofficers',
        'AggressionTypes',
        'Weapons',
        'MentalStates',
        'suspect_search',
        'incidentsuspects',
        'targetareas',
        'Incidentslist',
        'suspect_races',
        'LocationsDet2'
    ],
    models: ['State',
             'LocationDet',
             'Location', 
             'source' , 
             'newspaper', 
             'sourcetype', 
             'officercalltype', 
             'officerassignment', 
             'Officer_Department', 
             'officerstatus', 
             'depttype', 
             'Race', 
             'officersearch', 
             'incidentofficer', 
             'AggressionType', 
             'Weapon', 
             'MentalState', 
             'suspectsearch', 
             'incidentsuspect', 
             'targetarea', 
             'Incidentlist',
             'suspect_race',
             'LocationDet2'
    ],
    views: [
        'appheader',
        'incidentcontainer',
        'IncidentTabPanel',
        'MainMenu',
        'incidentdetailform',
        'sourcesgrid',
        'sourcedetail',
        'IncidentOfficerDetail',
        'officersearch',
        'addofficer',
        'incidentofficergrid',
        'incidentsuspectgrid',
        'IncidentSuspectDetail',
        'addsuspect',
        'suspectsearch', 
        'Incidentgrid',
        'SuspectbyRacePieChart',
        'reportpanel',
        'reportsgrid',
        'DBMaintTabPanel',
        'AggressionTypeGrid',
        'LocationGrid',
        'LocationDetGrid',
        'MentalStateGrid',
        'NewspapersGrid',
        'officersGrid',
        'OfficerAssignmentGrid',
        'OfficerCallTypeGrid',
        'OfficerDepartmentGrid',
        'OfficerDeptTypeGrid',
        'OfficerStatusGrid',
        'RaceGrid',
        'SourceTypeGrid',
        'SubjectGrid',
        'WeaponsGrid',
        'addLocDetail'

    ],
    refs: [
        {
            ref : 'sourcesgrid',
            selector: 'sourcesgrid'
        },
        {
            ref : 'customergrid',
            selector: 'customergrid'
        },
        {
            ref : 'sourcesgrid',
            selector: 'sourcesgrid'
        },
        {
            ref : 'officersearch',
            selector: 'officersearch'
        },
        {
            ref : 'incidentofficergrid',
            selector: 'incidentofficergrid'
        },
        {
            ref : 'suspectsearch',
            selector: 'suspectsearch'
        },
        {
            ref : 'incidentsuspectgrid',
            selector: 'incidentsuspectgrid'
        },
        {
            ref : 'reportsgrid',
            selector: 'reportsgrid'
        },
        {
            ref : 'Incidentgrid',
            selector: 'Incidentgrid'
        },
        {
            ref : 'DBMaintTabPanel',
            selector: 'DBMaintTabPanel'
        },
        {
            ref : 'AggressionTypeGrid',
            selector: 'AggressionTypeGrid'
        },
        {
            ref : 'LocationGrid',
            selector: 'LocationGrid'
        },
        {
            ref : 'LocationDetGrid',
            selector: 'LocationDetGrid'
        },
        {
            ref : 'MentalStateGrid',
            selector: 'MentalStateGrid'
        },
        {
            ref : 'NewspapersGrid',
            selector: 'NewspapersGrid'
        },
        {
            ref : 'officersGrid',
            selector: 'officersGrid'
        },
        {
            ref : 'OfficerAssignmentGrid',
            selector: 'OfficerAssignmentGrid'
        },
        {
            ref : 'OfficerCallTypeGrid',
            selector: 'OfficerCallTypeGrid'
        },
        {
            ref : 'OfficerDepartmentGrid',
            selector: 'OfficerDepartmentGrid'
        },
        {
            ref : 'OfficerDeptTypeGrid',
            selector: 'OfficerDeptTypeGrid'
        },
        {
            ref : 'OfficerStatusGrid',
            selector: 'OfficerStatusGrid'
        },
        {
            ref : 'RaceGrid',
            selector: 'RaceGrid'
        },
        {
            ref : 'SourceTypeGrid',
            selector: 'SourceTypeGrid'
        },
        {
            ref : 'SubjectGrid',
            selector: 'SubjectGrid'
        },
        {
            ref : 'WeaponsGrid',
            selector: 'WeaponsGrid'
        }
    ],
    init: function() {
	this.control({'appheader button#applogout' : { click: this.onButtonClickLogout }});
	this.control({'MainMenu button#mmHome' : { click: this.onButtonClickhome } });
	this.control({'MainMenu button#mmAddIncident' : { click: this.onButtonClickAddIncident } });
	this.control({'MainMenu button#mmUpdateIncident' : { click: this.onButtonClickUpdateIncident } });
	this.control({'MainMenu button#mmDatabase' : { click: this.onButtonClickDatabase } });
	this.control({'MainMenu button#mmReports' : { click: this.onButtonClickReports } });
	this.control({'incidentdetailform button[action=idsubmit]' : { click : this.clickincidentdetailsubmit } });
	this.control({'incidentdetailform button#idcancelbtn' : { click: this.clickincidentdetailcancel } }); 
	this.control({'incidentdetailform combo#id_State' : { select: this.selectstatecomboombo } }); 
	this.control({'incidentdetailform combo#id_location' : { select: this.selectlocationcomboombo } }); 
	this.control({'incidentdetailform combo#id_time' : { select: this.selectincidenttime } }); 
	this.control({'incidentdetailform combo#id_approx_time' : { select: this.selectincidentapproxtime } }); 
        this.control({'IncidentTabPanel': { tabchange: this.onincidentTabchange } });
	this.control({'sourcesgrid button#sgaddbtn' : { click: this.onButtonClicksourceadd } }); 
	this.control({'sourcesgrid button#sgeditbtn' : { click: this.onButtonClicksourceedit } }); 
	this.control({'sourcesgrid button#sgdelete' : { click: this.onButtonClicksourcedelete } }); 
	this.control({'sourcedetail button[action=sdsubmitbtn]' : { click : this.clicksourcedetailsubmit } });
	this.control({'sourcedetail button#sdcancel' : { click: this.clicksourcedetailscancel } }); 
	this.control({'sourcedetail button#sd_newspaperadd' : { click: this.clicksourcedetailaddnewspaper } }); 
	this.control({'sourcedetail button#sd_sourcetypeadd' : { click: this.clicksourcedetailaddsourcetype } }); 
	this.control({'sourcedetail combo#sd_SourceType' : { select: this.selectsourcetypeombo } }); 
	this.control({'IncidentOfficerDetail button[action=iosubmitbtn]' : { click : this.clickincidentoffdetailsubmit } });
	this.control({'IncidentOfficerDetail button#iocancel' : { click: this.clickofficercancel } }); 
	this.control({'IncidentOfficerDetail button#io_search' : { click: this.clickofficersearch } }); 
	this.control({'IncidentOfficerDetail button#io_off_add' : { click: this.clickofficeradd } }); 
	this.control({'IncidentOfficerDetail button#io_addassignment' : { click: this.clickaddoffassignment } }); 
	this.control({'IncidentOfficerDetail button#io_addcalltype' : { click: this.clickaddoffcalltype } }); 
	this.control({'IncidentOfficerDetail button#io_adddepttype' : { click: this.clickaddoffdepttype } }); 
	this.control({'IncidentOfficerDetail button#io_adddepartment' : { click: this.clickadddepartment } }); 
	this.control({'IncidentOfficerDetail button#io_addstatus' : { click: this.clickaddoffstatus } }); 
	this.control({'officersearch button#osselectbtn' : { click: this.onButtonClickofficersearchselectbtn } }); 
	this.control({'addofficer button#off_submitbtn' : { click: this.onButtonClickofficeraddbtn } }); 
	this.control({'incidentofficergrid button#ogaddbtn' : { click: this.onButtonClickoffincadd } }); 
	this.control({'incidentofficergrid button#ogeditbtn' : { click: this.onButtonClickoffincedit } }); 
	this.control({'incidentofficergrid button#ogdelete' : { click: this.onButtonClickoffincdelete } }); 
	this.control({'IncidentSuspectDetail button[action=susdet_submit]' : { click : this.clickincidentsusdetailsubmit } });
	this.control({'IncidentSuspectDetail button#susdet_cancel' : { click: this.clickincidentsusdetailcancel } }); 
	this.control({'IncidentSuspectDetail button#susdet_search' : { click: this.clicksearchsuspectbtn } }); 
	this.control({'IncidentSuspectDetail combo#susdet_shotarea' : { select: this.selectshotcombo } }); 
	this.control({'IncidentSuspectDetail button#susdet_clear_shot' : { click: this.clickclearshotbtn } }); 
	this.control({'IncidentSuspectDetail button#susdet_suspect_add' : { click: this.clickaddsuspectbtn } }); 
	this.control({'IncidentSuspectDetail button#susdet_addMentalState' : { click: this.clickaddsusmentalstate } }); 
	this.control({'IncidentSuspectDetail button#susdet_addWeapons' : { click: this.clickaddsusweapons } }); 
	this.control({'IncidentSuspectDetail button#susdet_addaggression' : { click: this.clickaddaggression } }); 
	this.control({'addsuspect button#sus_submitbtn' : { click: this.onButtonClicksuspectaddbtn } }); 
	this.control({'suspectsearch button#ssselectbtn' : { click: this.onButtonClicksuspectsearchselectbtn } }); 
	this.control({'incidentsuspectgrid button#susgaddbtn' : { click: this.onButtonClicksuspectincadd } }); 
	this.control({'incidentsuspectgrid button#susgeditbtn' : { click: this.onButtonClicksuspectincedit } }); 
	this.control({'incidentsuspectgrid button#susgdelete' : { click: this.onButtonClicksuspectincdelete } }); 
	this.control({'Incidentgrid button#ig_searchbtn' : { click: this.onButtonClickincidentsearch } }); 
	this.control({'Incidentgrid button#ig_edit' : { click: this.onButtonClickincidentedit } }); 
	this.control({'Incidentgrid button#ig_delete' : { click: this.onButtonClickincidentdelete } }); 
	this.control({'reportsgrid button#rgrunbtn' : { click: this.onButtonClickrunreport } }); 
        this.control({'DBMaintTabPanel': { tabchange: this.onDBMaintTabchange } });
	this.control({'AggressionTypeGrid button#aggtypeaddbtn' : { click: this.clickDBMaintaddaggression } }); 
	this.control({'AggressionTypeGrid button#aggtypeeditbtn' : { click: this.onButtonClickeditaggression } }); 
	this.control({'AggressionTypeGrid button#aggtypedelete' : { click: this.onButtonClickaggressiondelete } }); 
	this.control({'LocationGrid button#locgridaddbtn' : { click: this.clickDBMaintaddlocation } }); 
	this.control({'LocationGrid button#locgrideditbtn' : { click: this.onButtonClickeditlocation } }); 
	this.control({'LocationGrid button#locgriddelete' : { click: this.onButtonClickdeletelocation } }); 
	this.control({'LocationDetGrid button#locdgridaddbtn' : { click: this.DBMainAddLocationDet } }); 
	this.control({'LocationDetGrid button#locdgrideditbtn' : { click: this.DBMainEditLocationDet } }); 
	this.control({'LocationDetGrid button#locdgriddelete' : { click: this.onButtonClickdeletelocationdet } }); 
	this.control({'addLocDetail button[action=addlocdet_submitbtn]' : { click : this.submitaddlocdet } });
	this.control({'MentalStateGrid button#menstgridaddbtn' : { click: this.clickDBMaintaddMentalStatus } }); 
	this.control({'MentalStateGrid button#menstgrideditbtn' : { click: this.onButtonClickeditMentalStatus } }); 
	this.control({'MentalStateGrid button#menstgriddelete' : { click: this.onButtonClickdeleteMentalStatus } }); 
	this.control({'NewspapersGrid button#newspgridaddbtn' : { click: this.clickDBMaintaddNewspapers } }); 
	this.control({'NewspapersGrid button#newspgrideditbtn' : { click: this.onButtonClickeditNewspapers } }); 
	this.control({'NewspapersGrid button#newspgriddelete' : { click: this.onButtonClickdeleteNewspapers } }); 
	this.control({'officersGrid button#officergridaddbtn' : { click: this.clickofficeraddDB } }); 
	this.control({'officersGrid button#officergrideditbtn' : { click: this.DBMainEditOfficer } }); 
	this.control({'officersGrid button#officergriddelete' : { click: this.onButtonClickdeleteOfficer } }); 
	this.control({'OfficerAssignmentGrid button#offassgridaddbtn' : { click: this.clickDBMaintaddOfficerAssignments } }); 
	this.control({'OfficerAssignmentGrid button#offassgrideditbtn' : { click: this.onButtonClickeditOfficerAssignment } }); 
	this.control({'OfficerAssignmentGrid button#offassgriddelete' : { click: this.onButtonClickdeleteOffAssignment } }); 
	this.control({'OfficerCallTypeGrid button#offcalltgridaddbtn' : { click: this.clickDBMaintaddOffCallType } }); 
	this.control({'OfficerCallTypeGrid button#offcalltgrideditbtn' : { click: this.onButtonClickeditOffCallType } }); 
	this.control({'OfficerCallTypeGrid button#offcalltgriddelete' : { click: this.onButtonClickdeleteOffCallType } }); 
	this.control({'OfficerDepartmentGrid button#offdeptgridaddbtn' : { click: this.clickDBMaintaddDepartments } }); 
	this.control({'OfficerDepartmentGrid button#offdeptgrideditbtn' : { click: this.onButtonClickeditDepartments } }); 
	this.control({'OfficerDepartmentGrid button#offdeptgriddelete' : { click: this.onButtonClickdeleteDepartments } }); 
	this.control({'OfficerDeptTypeGrid button#offDeptTypegridaddbtn' : { click: this.clickDBMaintaddOffDeptType } }); 
	this.control({'OfficerDeptTypeGrid button#offDeptTypegrideditbtn' : { click: this.onButtonClickeditOffDeptType } }); 
	this.control({'OfficerDeptTypeGrid button#offDeptTypegriddelete' : { click: this.onButtonClickdeleteDeptType } }); 
	this.control({'OfficerStatusGrid button#offstatusgridaddbtn' : { click: this.clickDBMaintaddOffStatus } }); 
	this.control({'OfficerStatusGrid button#offstatusgrideditbtn' : { click: this.onButtonClickeditOffStatus } }); 
	this.control({'OfficerStatusGrid button#offstatusgriddelete' : { click: this.onButtonClickdeleteOffStatus } }); 
	this.control({'RaceGrid button#racegridaddbtn' : { click: this.clickDBMaintaddRace } }); 
	this.control({'RaceGrid button#racegrideditbtn' : { click: this.onButtonClickeditRaces } }); 
	this.control({'RaceGrid button#racegriddelete' : { click: this.onButtonClickdeleteRaces } }); 
	this.control({'SourceTypeGrid button#sourcetypegridaddbtn' : { click: this.clickDBMaintaddSourceType } }); 
	this.control({'SourceTypeGrid button#sourcetypegrideditbtn' : { click: this.onButtonClickeditSourceType } }); 
	this.control({'SourceTypeGrid button#sourcetypegriddelete' : { click: this.onButtonClickdeleteSourceTye } }); 
	this.control({'SubjectGrid button#subjectgridaddbtn' : { click: this.clickDBaddsuspectbtn } }); 
	this.control({'SubjectGrid button#subjectgrideditbtn' : { click: this.clickDBeditsuspectbtn } }); 
	this.control({'SubjectGrid button#subjectgriddelete' : { click: this.onButtonClickdeleteSubjects } }); 
	this.control({'WeaponsGrid button#weaponsgridaddbtn' : { click: this.clickDBMaintaddWeapons } }); 
	this.control({'WeaponsGrid button#weaponsgrideditbtn' : { click: this.onButtonClickeditWeapons } }); 
	this.control({'WeaponsGrid button#weaponsgriddelete' : { click: this.onButtonClickdeleteWeapon } }); 


       this.loadinitstores(); 

    },
//Page Header functions
//=======================================
//Logout button in Page Header
    onButtonClickLogout: function(button, e, options) {

              var me = this;
              var loadMask = new Ext.LoadMask(Ext.getBody(), {
              msg: 'Please Wait...'});
              loadMask.show();
              Ext.Ajax.request({
                url: 'app/php/logout.php',
                params: 
                { },
                failure: function(conn, response, options, eOpts)
                {
                  loadMask.hide();
                  Ext.Msg.show({
                    title: 'Error!',
                    msg: conn.responseText,
                    icon: Ext.Msg.ERROR,
                    buttons: Ext.Msg.OK
                  });
                },  
                success: function(conn, response, options, eOpts)
                {
                  var result = Ext.JSON.decode(conn.responseText, true);
                  if (!result)
                  {
                    loadMask.hide();
                    result = {};
                    result.success = false;
                    result.msg = conn.responseText;
                  } 
                  if (result.success)
                  {
                     loadMask.hide();
                     var vp = Ext.ComponentQuery.query('viewport')[0];
                     vp.destroy();
                     window.location.href="index.html";
                  }     
                  else
                  {
                    loadMask.hide();
                    Ext.Msg.show({
                      title: 'Fail!',
                      msg: result.msg,
                      icon: Ext.Msg.ERROR,
                      buttons: Ext.Msg.OK
                    });
                  }             
                } 
              });  //Ajax Request


    },
//=======================================

//Main Menu button event click functions
//========================================
//Home
    onButtonClickhome: function(button, e, options) {
//       console.log(myvar); 

           var cpanel = Ext.getCmp('centerpanel'); 
           cpanel.getLayout().setActiveItem(0);
      
    },
//Setup new Incident
    onButtonClickAddIncident: function(button, e, options) {
//       console.log(myvar); 

          this.clearincidentforms();
          var frm = Ext.getCmp('incidentdetailform');
          frm.setTitle('Add New Incident');
          Ext.getCmp('IncidentTabPanel').setVisible(false);
          Ext.getCmp('id_action').setValue('Add');
           var cpanel = Ext.getCmp('centerpanel'); 
           cpanel.getLayout().setActiveItem(1);

       
    },
//Update Incident
    onButtonClickUpdateIncident: function(button, e, options) {
//         console.log('Existing Customers Clicked '); 
         
         var frm = Ext.getCmp('incidentdetailform');
         frm.setTitle('Update Incident');

         Ext.getCmp('ig_search').setValue("");
         this.clearincidentforms();
         this.getIncidents("","false");
         Ext.getCmp('IncidentTabPanel').setVisible(true);
         Ext.getCmp('IncidentTabPanel').setActiveTab(0);
    },
//Database Maint
    onButtonClickDatabase: function(button, e, options) {

           this.getAggressionTypes();
           this.getDBMaintTabPanel().setActiveTab(0);
           var cpanel = Ext.getCmp('centerpanel'); 
           cpanel.getLayout().setActiveItem(3);

          
    },
//Reports
    onButtonClickReports: function(button, e, options) {
//       console.log(myvar); 

           var rptpanel = Ext.getCmp('rptpanel'); 
           rptpanel.getLayout().setActiveItem(0);

           var cpanel = Ext.getCmp('centerpanel'); 
           cpanel.getLayout().setActiveItem(4);

       
    },
//================================

//Incident Detail View
//================================
//Click on the submit button
    clickincidentdetailsubmit: function(button, e, options) {

    var me = this;
    var msgerr = "All invalid fields are highlighted in red.  To see specific field error, place mouse cursor over the field.  Please resubmit form once all fields have been corrected. .";
    var AddEdit = Ext.getCmp('id_action').getValue();
    var frm = Ext.getCmp('incidentdetailform');
    var errm = "";
    var id_location = Ext.getCmp('id_location').getValue();
    var id_locationdet = Ext.getCmp('id_locationdet').getValue();

    if ((id_location != null && id_location.length > 0) && (id_locationdet == null || id_locationdet.length == 0))
    {
 	errm = "If you select a Location then you must also select a Location Detail!";
        msgerr = errm;
    }

    if (!frm.isValid() || errm.length > 0)
    {
       Ext.Msg.show({
          title: 'Error Forn not Submitted!',
          msg: msgerr,
          icon: Ext.Msg.ERROR,
          buttons: Ext.Msg.OK}); 
    }
    else
    {
      var tempText = "";
      var incnumber = Ext.getCmp('id_Incidentnum').getValue().trim();
      if (incnumber != null && incnumber.length > 0)
      {
        tempText = "edit";
      }
      else  
      {
        tempText = "add";
      }

      Ext.MessageBox.confirm('Please Confirm',
         'Would you like to ' + tempText + ' this Incident?',
         function( choice)
         { 
            if( choice == 'yes')
            {
              var id_Incidentname = Ext.getCmp('id_Incidentname').getValue().trim();
              var id_user = Ext.getCmp('id_user').getValue().trim();
              var id_lawsuit = Ext.getCmp('id_lawsuit').getValue();

              var id_indoorsI = Ext.getCmp('id_indoor').getValue();
              var id_indoorsO = Ext.getCmp('id_outdoor').getValue();
              var id_indoors = "";
              if (id_indoorsI == true)
              {
                id_indoors = 'Y';
              }
              else if (id_indoorsO == true)
              {
                id_indoors = 'N';
              }              
              var id_Address1 = Ext.getCmp('id_Address1').getValue().trim();
              var id_City = Ext.getCmp('id_City').getValue().trim();
              var id_State = Ext.getCmp('id_State').getValue().trim();
              var id_zipcode = Ext.getCmp('id_zipcode').getValue().trim();
              var id_address2 = Ext.getCmp('id_address2').getValue().trim();
              var id_dateoccurred = Ext.getCmp('id_dateoccurred').getValue();
              var id_officersscene = Ext.getCmp('id_officersscene').getValue();
              var id_officersfiredguns = Ext.getCmp('id_officersfiredguns').getValue();
              var id_officersshotsfired = Ext.getCmp('id_officersshotsfired').getValue();
              var id_latitude = Ext.getCmp('id_latitude').getValue();
              var id_longitude = Ext.getCmp('id_longitude').getValue();
              var id_time = Ext.getCmp('id_time').getValue();
              var id_approx_time = Ext.getCmp('id_approx_time').getValue();


              var loadMask = new Ext.LoadMask(Ext.getBody(), {
              msg: 'Please Wait...'});
              loadMask.show();

              Ext.Ajax.request({
                url: 'app/php/addupdateIncident.php',
//                url: 'app/data/addeditincident.json',
                params: 
                {
			id_Incidentnum: incnumber,
			id_Incidentname: id_Incidentname,
			id_user: id_user,
			id_lawsuit: id_lawsuit,
			id_indoors: id_indoors,
			id_Address1: id_Address1,
			id_City: id_City,
			id_State: id_State,
			id_zipcode: id_zipcode,
			id_address2: id_address2,
			id_dateoccurred: id_dateoccurred,
			id_officersscene: id_officersscene,
			id_locationdet: id_locationdet,
			id_officersfiredguns: id_officersfiredguns,
			id_officersshotsfired: id_officersshotsfired,
			id_latitude: id_latitude,
			id_longitude: id_longitude,
			id_time: id_time,
			id_approx_time: id_approx_time
                },
                failure: function(conn, response, options, eOpts)
                {
                  loadMask.hide();
                  Ext.Msg.show({
                    title: 'Error!',
                    msg: conn.responseText,
                    icon: Ext.Msg.ERROR,
                    buttons: Ext.Msg.OK
                  });
                },  
                success: function(conn, response, options, eOpts)
                {
                  var result = Ext.JSON.decode(conn.responseText, true);
                  if (!result)
                  {
                    loadMask.hide();
                    result = {};
                    result.success = false;
                    result.msg = conn.responseText;
                  } 
                  if (result.success)
                  {
                     loadMask.hide();
                     if (AddEdit == "Add")
                     {
//                       Ext.getCmp('IncidentTabPanel').setVisible(true);
//                       Ext.getCmp('IncidentTabPanel').setActiveItem(0);
                       var oid = result['LAST_INSERT_ID'];
                       Ext.getCmp('id_Incidentnum').setValue(oid);

                       Ext.getCmp('IncidentTabPanel').setVisible(true);
                       Ext.getCmp('IncidentTabPanel').setActiveTab(0);
                       var cpanel = Ext.getCmp('incsourcepanel'); 
                       cpanel.getLayout().setActiveItem(0);

                     }
                     else
                     {
                        Ext.getStore('Incidentslist').loadData(result['Incident']);
                        var cpanel = Ext.getCmp('centerpanel'); 
                        cpanel.getLayout().setActiveItem(2);
                     }
                  }     
                  else
                  {
                    if (result.msg == "no_session")
                                window.location="index.html";
                    else
                    {
                      loadMask.hide();
                      Ext.Msg.show({
                        title: 'Fail!',
                        msg: result.msg,
                        icon: Ext.Msg.ERROR,
                        buttons: Ext.Msg.OK
                      });
                    }
                  }             
                } 
              });  //Ajax Request
           } //Yes to confirm add or edit
          }); //close messagebox confirm         
      } //end if form is valid

    },
//Click on the Reset/Cancel button
    clickincidentdetailcancel: function(button, e, options) {
         var frm = Ext.getCmp('custdetailsform');
         var AddEdit = Ext.getCmp('id_action').getValue();

         if (AddEdit == "Add")
         {
           var cpanel = Ext.getCmp('centerpanel'); 
           cpanel.getLayout().setActiveItem(0);
         }
         else
         {
            var cpanel = Ext.getCmp('centerpanel'); 
            cpanel.getLayout().setActiveItem(2);
         }
                            
    },
//Select from the state combo box
    selectstatecomboombo: function(combo, e, options) {



         var val = combo.getValue();
         this.setStateRegion(val);
           
    },  // end selectstatecomboombo
//Select from the location combo box
    selectlocationcomboombo: function(combo, e, options) {

         var val = combo.getValue();
         var LocationsDet = Ext.getStore('LocationsDet');
         LocationsDet.clearFilter(true);
         LocationsDet.filter('Location_ID', val);
         Ext.getCmp('id_locationdet').reset();
           
    },  // end selectlocationdetcomboombo
//Select from the time picker
    selectincidenttime: function(combo, e, options) {

         var val = combo.getRawValue();
         var approx_id = this.getapproxtime(val);
         Ext.getCmp('id_approx_time').setValue(approx_id);
         
           
    },  // end selectincidenttime
//Select from the approx time drop down listbox
    selectincidentapproxtime: function(combo, e, options) {

         var val = combo.getValue();
         var  time_v = Ext.getCmp('id_time').getRawValue();
//        console.log("time_v: " + time_v);
         if (time_v != null && time_v.length > 0)
         {
           var shouldbeval = this.getapproxtime(time_v);
           if (shouldbeval != val)
           {
                    Ext.Msg.show({
                    title: 'Error!',
                    msg: 'Invalid Approximate Time, Given the Time Selected',
                    icon: Ext.Msg.ERROR,
                    buttons: Ext.Msg.OK
                  });
                  combo.reset();
           }
         }
         
           
    },  // end selectincidentapproxtime
//================================

//Incident Tab View
//=================================
    onincidentTabchange: function (AdminTabPanel, tab) {


    switch(AdminTabPanel.items.indexOf(tab)) {
    case 0:
        var cpanel = Ext.getCmp('incsourcepanel'); 
        cpanel.getLayout().setActiveItem(0);
        break;
    case 1:
        var cpanel = Ext.getCmp('incofficerspanel'); 
        cpanel.getLayout().setActiveItem(0);
        break;
    case 2:
         var cpanel = Ext.getCmp('incsuspectspanel'); 
         cpanel.getLayout().setActiveItem(0);
        break;
    }  

    }, 


//Sources Grid View
//================================
//Click of the Add button
    onButtonClicksourceadd: function(button, e, options) {
//         console.log('Existing Customers Clicked '); 
           
         var frm = Ext.getCmp('sourcedetail');
       
         frm.getForm().reset();
         frm.setTitle('Setup New Source');
         Ext.getCmp('sdsubmit').setText("Add");
         this.NewspaperDisabled("");
         var cpanel = Ext.getCmp('incsourcepanel'); 
         cpanel.getLayout().setActiveItem(1);
           
    },  

//Click of the Edit button to edit an existing source
    onButtonClicksourceedit: function(button, e, options) {

       var g = Ext.getCmp('sourcesgrid'); 
       if (!g.getSelectionModel().hasSelection())
       {
          Ext.Msg.show({
            title: 'Error!',
            msg: 'You must first select a source from the grid.',
            icon: Ext.Msg.ERROR,
            buttons: Ext.Msg.OK
          });             
       }
       else
       {
         var rec = g.getSelectionModel().getSelection()[0]; 
         var frm = Ext.getCmp('sourcedetail');
       
         frm.getForm().reset();
         frm.setTitle('Edit Source');
         Ext.getCmp('sdsubmit').setText("Edit");

         Ext.getCmp('sd_Title').setValue(rec.get("Title"));
         Ext.getCmp('sd_Author').setValue(rec.get("Author"));
         Ext.getCmp('sd_datewritten').setValue(rec.get("Source_Date"));
         Ext.getCmp('sd_sourceid').setValue(rec.get("Source_ID"));
         Ext.getCmp('sd_Link').setValue(rec.get("Link"));
         Ext.getCmp('sd_SourceType').setValue(rec.get("Source_Type_ID"));
         Ext.getCmp('sd_abstract').setValue(rec.get("Abstract"));

         var sourcetype_model = Ext.getStore('sourcetypes').findRecord('Source_Type_ID', rec.get("Source_Type_ID")); 
         var sourcetype_display = sourcetype_model.get('Source');
         this.NewspaperDisabled(sourcetype_display);
         Ext.getCmp('sd_newspaper').setValue(rec.get("Newspaper_ID"));


         var cpanel = Ext.getCmp('incsourcepanel'); 
         cpanel.getLayout().setActiveItem(1);

         

       }

           
    },  //onButtonClicksourceedit

//Click of the delete button
    onButtonClicksourcedelete: function(button, e, options) {

       var g = Ext.getCmp('sourcesgrid'); 
       if (!g.getSelectionModel().hasSelection())
       {
          Ext.Msg.show({
            title: 'Error!',
            msg: 'You must first select a source from the grid.',
            icon: Ext.Msg.ERROR,
            buttons: Ext.Msg.OK
          });             
       }
       else
       {
         var rec = g.getSelectionModel().getSelection()[0]; 
         var Source_ID = rec.get("Source_ID");
         var Incident_ID = Ext.getCmp('id_Incidentnum').getValue();
         Ext.MessageBox.confirm('Please Confirm',
          'Are you sure you would like to delete this source ?',
          function( choice)
          { 
           if( choice == 'yes')
           {

              var loadMask = new Ext.LoadMask(Ext.getBody(), {

              msg: 'Please Wait...'});
              loadMask.show();

              Ext.Ajax.request({
                url: 'app/php/deletesource.php',
//                url: 'app/data/sources.json',
                params: 
                {
                  Source_ID: Source_ID,
                  Incident_ID: Incident_ID
                },
                failure: function(conn, response, options, eOpts)
                {
                  loadMask.hide();
                  Ext.Msg.show({
                    title: 'Error!',
                    msg: conn.responseText,
                    icon: Ext.Msg.ERROR,
                    buttons: Ext.Msg.OK
                  });
                }, 
                success: function(conn, response, options, eOpts)
                {
                  loadMask.hide();
                  var result = Ext.JSON.decode(conn.responseText, true);
                  if (!result)
                  {
                    result = {};
                    result.success = false;
                    result.msg = conn.responseText;
                  } 
                  if (result.success)
                  {
                     Ext.getStore('sources').loadData(result['Incident_Source']);
                     loadMask.hide();
                  }     
                  else
                  {
                    if (result.msg == "no_session")
                                window.location="index.html";
                    else
                    {
                      loadMask.hide();
                      Ext.Msg.show({
                        title: 'Fail!',
                        msg: result.msg,
                        icon: Ext.Msg.ERROR,
                        buttons: Ext.Msg.OK
                      });
                    }
                  }             
                }  
              });
            } 
         });          
        }
           
    },
//================================

//Source Detail View
//================================
//Click on the submit button
    clicksourcedetailsubmit: function(button, e, options) {

    var me = this;
    var frm = Ext.getCmp('sourcedetail');
    if (!frm.isValid())
    {
       Ext.Msg.show({
          title: 'Error Forn not Submitted!',
          msg: 'All invalid fields are highlighted in red.  To see specific field error, place mouse cursor over the "!" next to field.  Please resubmit form once all fields have been corrected.  ',
          icon: Ext.Msg.ERROR,
          buttons: Ext.Msg.OK}); 
    }
    else
    {
      var tempText = "";
      if (Ext.getCmp('sdsubmit').getText() == "Add")
      {
        tempText = "edit";
      }
      else  
      {
        tempText = "add";
      }

      Ext.MessageBox.confirm('Please Confirm',
         'Would you like to ' + tempText + ' this Source?',
         function( choice)
         { 
            if( choice == 'yes')
            {

              var sd_sourceid = Ext.getCmp('sd_sourceid').getValue();
              var Incident_ID = Ext.getCmp('id_Incidentnum').getValue();
              var sd_Title = Ext.getCmp('sd_Title').getValue().trim();
              var sd_Author = Ext.getCmp('sd_Author').getValue().trim();
              var sd_datewritten = Ext.getCmp('sd_datewritten').getValue();
              var sd_newspaper = Ext.getCmp('sd_newspaper').getValue();
              var sd_Link = Ext.getCmp('sd_Link').getValue().trim();
              var sd_SourceType = Ext.getCmp('sd_SourceType').getValue();
              var sd_abstract = Ext.getCmp('sd_abstract').getValue().trim();

              var loadMask = new Ext.LoadMask(Ext.getBody(), {
              msg: 'Please Wait...'});
              loadMask.show();

              Ext.Ajax.request({
                url: 'app/php/addeditsources.php',
//                url: 'app/data/addeditsources.json',
                params: 
                {
			sd_sourceid: sd_sourceid,
			Incident_ID: Incident_ID,
			sd_Title: sd_Title,
			sd_Author: sd_Author,
			sd_datewritten: sd_datewritten,
			sd_newspaper: sd_newspaper,
			sd_Link: sd_Link,
			sd_SourceType: sd_SourceType,
			sd_abstract: sd_abstract
                },
                failure: function(conn, response, options, eOpts)
                {
                  loadMask.hide();
                  Ext.Msg.show({
                    title: 'Error!',
                    msg: conn.responseText,
                    icon: Ext.Msg.ERROR,
                    buttons: Ext.Msg.OK
                  });
                },  
                success: function(conn, response, options, eOpts)
                {
                  var result = Ext.JSON.decode(conn.responseText, true);
                  if (!result)
                  {
                    loadMask.hide();
                    result = {};
                    result.success = false;
                    result.msg = conn.responseText;
                  } 
                  if (result.success)
                  {
                     Ext.getStore('sources').loadData(result['Incident_Source']);
                     var cpanel = Ext.getCmp('incsourcepanel'); 
                     cpanel.getLayout().setActiveItem(0);
                     loadMask.hide();
                  }     
                  else
                  {
                    if (result.msg == "no_session")
                                window.location="index.html";
                    else
                    {
                      loadMask.hide();
                      Ext.Msg.show({
                        title: 'Fail!',
                        msg: result.msg,
                        icon: Ext.Msg.ERROR,
                        buttons: Ext.Msg.OK
                      });
                    }
                  }             
                } 
              });  //Ajax Request
           } //Yes to confirm add or edit
          }); //close messagebox confirm         
      } //end if form is valid

    }, //clicksourcedetailsubmit
//Click on the Reset/Cancel button
    clicksourcedetailscancel: function(button, e, options) {

          var cpanel = Ext.getCmp('incsourcepanel'); 
          cpanel.getLayout().setActiveItem(0);
                            
    },
//Click on that Add btn next to Newspapers to add a new newspaper
    clicksourcedetailaddnewspaper: function(button, e, options) {

       var me = this;

       Ext.Msg.prompt('Add New Newspaper', 'Newspaper:', function(btn, text){
         if (btn == 'ok'){

             if (!me.validatenotblank(text.trim()))
             {
                Ext.Msg.show({
                title: 'Error!',
                msg: 'Invalid Newspaper Name.  The Newspaper name can not be blank!',
                icon: Ext.Msg.ERROR,
                buttons: Ext.Msg.OK
                }); 
                return;
             }

              var Newspaper = text.trim();
              var loadMask = new Ext.LoadMask(Ext.getBody(), {


              msg: 'Please Wait...'});
              loadMask.show();

              Ext.Ajax.request({
                url: 'app/php/accessNewspapers.php',
//                url: 'app/data/getNewspapers.json',
                params:  
                {  Action: 'A',
                   Newspaper_ID: '', 
                   Newspaper: Newspaper },
                failure: function(conn, response, options, eOpts)
                {
                  loadMask.hide();
                  Ext.Msg.show({
                    title: 'Error!',
                    msg: conn.responseText,
                    icon: Ext.Msg.ERROR,
                    buttons: Ext.Msg.OK
                  });
                }, 
                success: function(conn, response, options, eOpts)
                {
                  var result = Ext.JSON.decode(conn.responseText, true);
                  if (!result)
                  {
                    loadMask.hide();
                    result = {};
                    result.success = false;
                    result.msg = conn.responseText;
                  } 
                  if (result.success)
                  {
                     Ext.getStore('Newspapers').loadData(result['Newspapers']);
                     var cpanel = Ext.getCmp('incsourcepanel'); 
                     cpanel.getLayout().setActiveItem(1);
                     loadMask.hide();
                  }     
                  else
                  {
                    if (result.msg == "no_session")
                                window.location="index.html";
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

         }
         },null, false, '', null);


           
    },

//Click on that Add btn next to source types to add a new source type
    clicksourcedetailaddsourcetype: function(button, e, options) {

       var me = this;

       Ext.Msg.prompt('Add New Source Type', 'Source Type:', function(btn, text){
         if (btn == 'ok'){

             if (!me.validatenotblank(text.trim()))
             {
                Ext.Msg.show({
                title: 'Error!',
                msg: 'Invalid Source Type Name.  The Source Type name can not be blank!',
                icon: Ext.Msg.ERROR,
                buttons: Ext.Msg.OK
                }); 
                return;
             }

              var Source = text.trim();
              var loadMask = new Ext.LoadMask(Ext.getBody(), {


              msg: 'Please Wait...'});
              loadMask.show();

              Ext.Ajax.request({
                url: 'app/php/accessSourceType.php',
//                url: 'app/data/getSourceTypes.json',
                params:  
                {  Action: 'A',
                   Source_Type_ID: '', 
                   Source: Source },
                failure: function(conn, response, options, eOpts)
                {
                  loadMask.hide();
                  Ext.Msg.show({
                    title: 'Error!',
                    msg: conn.responseText,
                    icon: Ext.Msg.ERROR,
                    buttons: Ext.Msg.OK
                  });
                }, 
                success: function(conn, response, options, eOpts)
                {
                  var result = Ext.JSON.decode(conn.responseText, true);
                  if (!result)
                  {
                    loadMask.hide();
                    result = {};
                    result.success = false;
                    result.msg = conn.responseText;
                  } 
                  if (result.success)
                  {
                     Ext.getStore('sourcetypes').loadData(result['Source_Type']);
                     var cpanel = Ext.getCmp('incsourcepanel'); 
                     cpanel.getLayout().setActiveItem(1);
                     loadMask.hide();
                  }     
                  else
                  {
                    if (result.msg == "no_session")
                                window.location="index.html";
                    else
                    {
                      loadMask.hide();
                      Ext.Msg.show({
                        title: 'Fail!',
                        msg: result.msg,
                        icon: Ext.Msg.ERROR,
                        buttons: Ext.Msg.OK
                      });
                    }
                  }             
                }  
              });

         }
         },null, false, '', null);


           
    },
//Select from the source type combo box
    selectsourcetypeombo: function(combo, e, options) {

         var val = combo.getValue();
         var sourcetype_model = Ext.getStore('sourcetypes').findRecord('Source_Type_ID', val); 
         var sourcetype_display = sourcetype_model.get('Source');
         this.NewspaperDisabled(sourcetype_display);
           
    },  // end selectsourcetypeombo
//================================

//Incident Officer View
//================================
//Click on the submit button
    clickincidentoffdetailsubmit: function(button, e, options) {

    var me = this;
    var frm = Ext.getCmp('IncidentOfficerDetail');
    var Officer_ID = Ext.getCmp('io_officer_id').getValue();


    if (!frm.isValid() || Officer_ID.length == 0)
    {
       Ext.Msg.show({
          title: 'Error Forn not Submitted!',
          msg: 'Not all required fields entered.  Note: You must select an officer for the incident. ',
          icon: Ext.Msg.ERROR,
          buttons: Ext.Msg.OK}); 
    }
    else
    {
      var tempText = "";
      if (Ext.getCmp('sdsubmit').getText() == "Add")
      {
        tempText = "edit";
      }
      else  
      {
        tempText = "add";
      }

      Ext.MessageBox.confirm('Please Confirm',
         'Would you like to ' + tempText + ' this Incident Officer?',
         function( choice)
         { 
            if( choice == 'yes')
            {

              var Incident_ID = Ext.getCmp('id_Incidentnum').getValue();
              var Incident_Officer_ID = Ext.getCmp('io_incidentofficer_id').getValue();
              var Outside_Agency_Assist = Ext.getCmp('io_outsideagency').getValue();
              var Assignment_ID = Ext.getCmp('io_offassignment').getValue();
              var Call_Type_ID = Ext.getCmp('io_calltype').getValue();
              var Dept_Type_ID = Ext.getCmp('io_depttype').getValue();
              var Department_ID = Ext.getCmp('io_department').getValue();
              var Status_ID = Ext.getCmp('io_officerstatus').getValue();
              var Experience = Ext.getCmp('io_yrsexperience').getValue();
              var Shots_Files = Ext.getCmp('io_shotsfired').getValue();
              var Age = Ext.getCmp('io_Age').getValue();
              var Exp_in_Cluster = Ext.getCmp('io_exp_in_cluster').getValue();
              var Officer_Casualty = Ext.getCmp('io_Casualty').getValue();


              var loadMask = new Ext.LoadMask(Ext.getBody(), {
              msg: 'Please Wait...'});
              loadMask.show();

              Ext.Ajax.request({
                url: 'app/php/addeditincidentofficer.php',
//                url: 'app/data/addeditincidentofficer.json',
                params: 
                {
              		Incident_ID: Incident_ID,
              		Incident_Officer_ID: Incident_Officer_ID,
              		Officer_ID: Officer_ID,
              		Outside_Agency_Assist: Outside_Agency_Assist, 
              		Assignment_ID: Assignment_ID, 
              		Call_Type_ID: Call_Type_ID, 
              		Dept_Type_ID: Dept_Type_ID, 
              		Department_ID: Department_ID, 
              		Status_ID: Status_ID, 
              		Experience: Experience, 
              		Shots_Files: Shots_Files, 
              		Age: Age,
                        Exp_in_Cluster: Exp_in_Cluster,
                        Officer_Casualty: Officer_Casualty
                },
                failure: function(conn, response, options, eOpts)
                {
                  loadMask.hide();
                  Ext.Msg.show({
                    title: 'Error!',
                    msg: conn.responseText,
                    icon: Ext.Msg.ERROR,
                    buttons: Ext.Msg.OK
                  });
                },  
                success: function(conn, response, options, eOpts)
                {
                  var result = Ext.JSON.decode(conn.responseText, true);
                  if (!result)
                  {
                    loadMask.hide();
                    result = {};
                    result.success = false;
                    result.msg = conn.responseText;
                  } 
                  if (result.success)
                  {
                     Ext.getStore('incidentofficers').loadData(result['Incident_Officer']);
                     var cpanel = Ext.getCmp('incofficerspanel'); 
                     cpanel.getLayout().setActiveItem(0);
                     loadMask.hide();
                  }     
                  else
                  {
                    if (result.msg == "no_session")
                                window.location="index.html";
                    else
                    {
                      loadMask.hide();
                      Ext.Msg.show({
                        title: 'Fail!',
                        msg: result.msg,
                        icon: Ext.Msg.ERROR,
                        buttons: Ext.Msg.OK
                      });
                    }
                  }             
                } 
              });  //Ajax Request
           } //Yes to confirm add or edit
          }); //close messagebox confirm         
      } //end if form is valid

    }, //clicksourcedetailsubmit

//Click on the Reset/Cancel button
    clickofficercancel: function(button, e, options) {

          var cpanel = Ext.getCmp('incofficerspanel'); 
          cpanel.getLayout().setActiveItem(0);
                            
    },
//Click on the officer search button
    clickofficersearch: function(button, e, options) {

         var Name_search = Ext.getCmp('io_officer_search').getValue();

         if (Name_search == null || Name_search == '')
         {
           Ext.Msg.show({
            title: 'Error!',
            msg: 'To search for an officer, you must enter a value in the Officer Search box.',
            icon: Ext.Msg.ERROR,
            buttons: Ext.Msg.OK
          });             
         }
         else
         {
           var loadMask = new Ext.LoadMask(Ext.getBody(), {
           msg: 'Please Wait...'});
           loadMask.show();
           Ext.Ajax.timeout = 30000; // this changes the 30 second  
           Ext.Ajax.request({
           url: 'app/php/officersearch.php',
//           url: 'app/data/officersearch.json',
           params: {Name_search: Name_search},
           scope :this,
           failure: function(conn, response, options, eOpts)
           {
            loadMask.hide();
            var errmsg = conn.responseText;
            if (errmsg == null || errmsg == '') errmsg = "No response from server.";
              Ext.Msg.show({
              title: 'Error!',
              msg: errmsg,
              icon: Ext.Msg.ERROR,
              buttons: Ext.Msg.OK
            });
           }, 
           success: function(conn, response, options, eOpts)
           {
               loadMask.hide();
               var result = Ext.JSON.decode(conn.responseText, true);
               if (!result)
               {
                 result = {};
                 result.success = false;
                 result.msg = conn.responseText;
               } 
               if (result.success)
               {
                 loadMask.hide();
                 //Received response from server
                 if (result.num_rows == "0")
                         Ext.Msg.alert('Results', 'No Officers Match the Search Name.');
                 else
                 {
                   Ext.getStore('officer_search').loadData(result['officersearch']);
                   var valwin = new Ext.Window({
                   id:'xgrid-win-osearch',
                   layout: 'fit',
                   width: 510,
                   height: 320,
                   modal: true,
                   title: 'Please select the officer or click cancel if the correct officer is not shown.',
                     items: [
                     {
                       xtype: 'officersearch'
                     }]
                   });
                   valwin.show(); 
                 }
              }     
              else
              {
                 if (result.msg == "no_session")
                              window.location="index.html";
                 else
                 {
                   loadMask.hide();
                    Ext.Msg.show({
                      title: 'Fail!',
                      msg: result.errorMsg,
                      icon: Ext.Msg.ERROR,
                      buttons: Ext.Msg.OK
                   });
                 }
              }             
               
           }  
              });         
        
         }
                            
    },
//Click on the officer add button
    clickofficeradd: function(button, e, options) {

           var offaddwin = new Ext.Window({
           id:'winoffadd',
           layout: 'fit',
           width: 410,
           height: 370,
           modal: true,
           title: '',
              items: [
              {
                  xtype: 'addofficer'
              }]
             });
            Ext.getCmp('off_add_Action').setValue("A");
//Adding new officer from officer incident grid
            Ext.getCmp('off_add_Function').setValue("O");  
            Ext.getCmp('off_add_officerID').setValue("");  

            offaddwin.show(); 

                           
    },
//Click on that Add btn next to officer assignment types to add a new officer assignment type
    clickaddoffassignment: function(button, e, options) {

       var me = this;

       Ext.Msg.prompt('Add New Officer Assignment', 'Assignment:', function(btn, text){
         if (btn == 'ok'){

             if (!me.validatenotblank(text.trim()))
             {
                Ext.Msg.show({
                title: 'Error!',
                msg: 'Invalid Officer Assignment.  The Officer Assignment can not be blank!',
                icon: Ext.Msg.ERROR,
                buttons: Ext.Msg.OK
                }); 
                return;
             }

              var Assignment = text.trim();
              var loadMask = new Ext.LoadMask(Ext.getBody(), {


              msg: 'Please Wait...'});
              loadMask.show();

              Ext.Ajax.request({
                url: 'app/php/accessOfficerAssignment.php',
//                url: 'app/data/addOffAssignments.json',
                params:  
                {  Action: 'A',
                   Assignment_ID: '', 
                   Assignment: Assignment },
                failure: function(conn, response, options, eOpts)
                {
                  loadMask.hide();
                  Ext.Msg.show({
                    title: 'Error!',
                    msg: conn.responseText,
                    icon: Ext.Msg.ERROR,
                    buttons: Ext.Msg.OK
                  });
                }, 
                success: function(conn, response, options, eOpts)
                {
                  var result = Ext.JSON.decode(conn.responseText, true);
                  if (!result)
                  {
                    loadMask.hide();
                    result = {};
                    result.success = false;
                    result.msg = conn.responseText;
                  } 
                  if (result.success)
                  {
                     Ext.getStore('officerassignments').loadData(result['Officer_Assignment']);
                     var cpanel = Ext.getCmp('incofficerspanel'); 
                     cpanel.getLayout().setActiveItem(1);
                     loadMask.hide();
                  }     
                  else
                  {
                    if (result.msg == "no_session")
                                window.location="index.html";
                    else
                    {
                      loadMask.hide();
                      Ext.Msg.show({
                        title: 'Fail!',
                        msg: result.msg,
                        icon: Ext.Msg.ERROR,
                        buttons: Ext.Msg.OK
                      });
                    }
                  }             
                }  
              });

         }
         },null, false, '', null);


           
    },
//Click on that Add btn next to officer call types to add a new officer call type
    clickaddoffcalltype: function(button, e, options) {

       var me = this;

       Ext.Msg.prompt('Add New Officer Call Type', 'Call Type:', function(btn, text){
         if (btn == 'ok'){

             if (!me.validatenotblank(text.trim()))
             {
                Ext.Msg.show({
                title: 'Error!',
                msg: 'Invalid Officer Call type.  The Officer Call Type can not be blank!',
                icon: Ext.Msg.ERROR,
                buttons: Ext.Msg.OK
                }); 
                return;
             }

              var Call_Type = text.trim();
              var loadMask = new Ext.LoadMask(Ext.getBody(), {


              msg: 'Please Wait...'});
              loadMask.show();

              Ext.Ajax.request({
                url: 'app/php/accessOfficerCallType.php',
                params:  
                {  Action: 'A',
                   Call_Type_ID: '', 
                   Call_Type: Call_Type },
                failure: function(conn, response, options, eOpts)
                {
                  loadMask.hide();
                  Ext.Msg.show({
                    title: 'Error!',
                    msg: conn.responseText,
                    icon: Ext.Msg.ERROR,
                    buttons: Ext.Msg.OK
                  });
                }, 
                success: function(conn, response, options, eOpts)
                {
                  var result = Ext.JSON.decode(conn.responseText, true);
                  if (!result)
                  {
                    loadMask.hide();
                    result = {};
                    result.success = false;
                    result.msg = conn.responseText;
                  } 
                  if (result.success)
                  {
                     Ext.getStore('officercalltypes').loadData(result['Officer_Call_Type']);
                     var cpanel = Ext.getCmp('incofficerspanel'); 
                     cpanel.getLayout().setActiveItem(1);
                     loadMask.hide();
                  }     
                  else
                  {
                    if (result.msg == "no_session")
                                window.location="index.html";
                    else
                    {
                      loadMask.hide();
                      Ext.Msg.show({
                        title: 'Fail!',
                        msg: result.msg,
                        icon: Ext.Msg.ERROR,
                        buttons: Ext.Msg.OK
                      });
                    }
                  }             
                }  
              });

         }
         },null, false, '', null);


           
    },
//Click on that Add btn next to department types to add a new department type
    clickaddoffdepttype: function(button, e, options) {

       var me = this;

       Ext.Msg.prompt('Add New Department Type', 'Department Type:', function(btn, text){
         if (btn == 'ok'){

             if (!me.validatenotblank(text.trim()))
             {
                Ext.Msg.show({
                title: 'Error!',
                msg: 'Invalid Department type.  The Department Type can not be blank!',
                icon: Ext.Msg.ERROR,
                buttons: Ext.Msg.OK
                }); 
                return;
             }

              var Dept_Type = text.trim();
              var loadMask = new Ext.LoadMask(Ext.getBody(), {


              msg: 'Please Wait...'});
              loadMask.show();

              Ext.Ajax.request({
                url: 'app/php/accessOffDeptType.php',
//                url: 'app/data/addOffDeptTypes.json',
                params:  
                {  Action: 'A',
                   Dept_Type_ID: '', 
                   Dept_Type: Dept_Type },
                failure: function(conn, response, options, eOpts)
                {
                  loadMask.hide();
                  Ext.Msg.show({
                    title: 'Error!',
                    msg: conn.responseText,
                    icon: Ext.Msg.ERROR,
                    buttons: Ext.Msg.OK
                  });
                }, 
                success: function(conn, response, options, eOpts)
                {
                  var result = Ext.JSON.decode(conn.responseText, true);
                  if (!result)
                  {
                    loadMask.hide();
                    result = {};
                    result.success = false;
                    result.msg = conn.responseText;
                  } 
                  if (result.success)
                  {
                     Ext.getStore('depttypes').loadData(result['Officer_Dept_Type']);
                     var cpanel = Ext.getCmp('incofficerspanel'); 
                     cpanel.getLayout().setActiveItem(1);
                     loadMask.hide();
                  }     
                  else
                  {
                    if (result.msg == "no_session")
                                window.location="index.html";
                    else
                    {
                      loadMask.hide();
                      Ext.Msg.show({
                        title: 'Fail!',
                        msg: result.msg,
                        icon: Ext.Msg.ERROR,
                        buttons: Ext.Msg.OK
                      });
                    }
                  }             
                }  
              });

         }
         },null, false, '', null);


           
    },
//Click on that Add btn next to department to add a new department
    clickadddepartment: function(button, e, options) {

       var me = this;

       Ext.Msg.prompt('Add New Department', 'Department:', function(btn, text){
         if (btn == 'ok'){

             if (!me.validatenotblank(text.trim()))
             {
                Ext.Msg.show({
                title: 'Error!',
                msg: 'Invalid Department.  The Department can not be blank!',
                icon: Ext.Msg.ERROR,
                buttons: Ext.Msg.OK
                }); 
                return;
             }

              var Department = text.trim();
              var loadMask = new Ext.LoadMask(Ext.getBody(), {


              msg: 'Please Wait...'});
              loadMask.show();

              Ext.Ajax.request({
                url: 'app/php/accessDepartment.php',
//                url: 'app/data/addOffDeptments.json',
                params:  
                {  Action: 'A',
                   Department_ID: '', 
                   Department: Department },
                failure: function(conn, response, options, eOpts)
                {
                  loadMask.hide();
                  Ext.Msg.show({
                    title: 'Error!',
                    msg: conn.responseText,
                    icon: Ext.Msg.ERROR,
                    buttons: Ext.Msg.OK
                  });
                }, 
                success: function(conn, response, options, eOpts)
                {
                  var result = Ext.JSON.decode(conn.responseText, true);
                  if (!result)
                  {
                    loadMask.hide();
                    result = {};
                    result.success = false;
                    result.msg = conn.responseText;
                  } 
                  if (result.success)
                  {
                     Ext.getStore('departments').loadData(result['Officer_Department']);
                     var cpanel = Ext.getCmp('incofficerspanel'); 
                     cpanel.getLayout().setActiveItem(1);
                     loadMask.hide();
                  }     
                  else
                  {
                    if (result.msg == "no_session")
                                window.location="index.html";
                    else
                    {
                      loadMask.hide();
                      Ext.Msg.show({
                        title: 'Fail!',
                        msg: result.msg,
                        icon: Ext.Msg.ERROR,
                        buttons: Ext.Msg.OK
                      });
                     }
                  }             
                }  
              });

         }
         },null, false, '', null);


           
    },
//Click on that Add btn next to officer status to add a new officer status
    clickaddoffstatus: function(button, e, options) {

       var me = this;

       Ext.Msg.prompt('Add New Officer Status', 'Officer Status:', function(btn, text){
         if (btn == 'ok'){

             if (!me.validatenotblank(text.trim()))
             {
                Ext.Msg.show({
                title: 'Error!',
                msg: 'Invalid Officer Status.  The Officer Status can not be blank!',
                icon: Ext.Msg.ERROR,
                buttons: Ext.Msg.OK
                }); 
                return;
             }

              var Status = text.trim();
              var loadMask = new Ext.LoadMask(Ext.getBody(), {


              msg: 'Please Wait...'});
              loadMask.show();

              Ext.Ajax.request({
                url: 'app/php/accessOffStatus.php',
//                url: 'app/data/addOffStatus.json',
                params:  
                {  Action: 'A',
                   Status_ID: '', 
                   Status: Status },
                failure: function(conn, response, options, eOpts)
                {
                  loadMask.hide();
                  Ext.Msg.show({
                    title: 'Error!',
                    msg: conn.responseText,
                    icon: Ext.Msg.ERROR,
                    buttons: Ext.Msg.OK
                  });
                }, 
                success: function(conn, response, options, eOpts)
                {
                  var result = Ext.JSON.decode(conn.responseText, true);
                  if (!result)
                  {
                    loadMask.hide();
                    result = {};
                    result.success = false;
                    result.msg = conn.responseText;
                  } 
                  if (result.success)
                  {
                     Ext.getStore('officerstatuss').loadData(result['Officer_Status']);
                     var cpanel = Ext.getCmp('incofficerspanel'); 
                     cpanel.getLayout().setActiveItem(1);
                     loadMask.hide();
                  }     
                  else
                  {
                    if (result.msg == "no_session")
                                window.location="index.html";
                    else
                    {
                      loadMask.hide();
                      Ext.Msg.show({
                        title: 'Fail!',
                        msg: result.msg,
                        icon: Ext.Msg.ERROR,
                        buttons: Ext.Msg.OK
                      });
                    }
                  }             
                }  
              });

         }
         },null, false, '', null);


           
    },
//=================================

//Officer Search Grid
//=================================
//click of the select officer search grid button
    onButtonClickofficersearchselectbtn: function(button, e, options) {

       var g = Ext.getCmp('officersearch'); 
       if (!g.getSelectionModel().hasSelection())
       {
          Ext.Msg.show({
            title: 'Error!',
            msg: 'No Officer Selected.  Please Select an officer from the Grid Before Clicking Select.',
            icon: Ext.Msg.ERROR,
            buttons: Ext.Msg.OK
          });             
       }
       else
       {
         var rec = g.getSelectionModel().getSelection()[0]; 
//         var frm = Ext.getCmp('IncidentOfficerDetail');

         Ext.getCmp('io_officer_id').setValue(rec.get("Officer_ID"));
         Ext.getCmp('io_officername').setValue(rec.get("Name")); 
         Ext.getCmp('io_gender').setValue(rec.get("Gender"));
         Ext.getCmp('io_race').setValue(rec.get("Race"));

         var r = rec.get("Race");
         var racemodel = Ext.getStore('Races').findRecord('Race', r);    
         var rid = racemodel.get('Race_ID');     
         Ext.getCmp('io_race_id').setValue(rid);

         var win = Ext.getCmp('xgrid-win-osearch')
         win.destroy();

       }

           
    },
//=================================

//Officer Add View
//=================================
//click of the submit button on the add officer view
    onButtonClickofficeraddbtn: function(button, e, options) {

    var me = this;
    var frm = Ext.getCmp('addofficer');
    
    if (!frm.isValid())
    {
       Ext.Msg.show({
          title: 'Error Forn not Submitted!',
          msg: 'All invalid fields are highlighted in red.  To see specific field error, place mouse cursor over the "!" next to field.  Please resubmit form once all fields have been corrected.  ',
          icon: Ext.Msg.ERROR,
          buttons: Ext.Msg.OK}); 
    }
    else
    {
      var Action = Ext.getCmp('off_add_Action').getValue().trim();
      var Function = Ext.getCmp('off_add_Function').getValue().trim();
      var Officer_ID = Ext.getCmp('off_add_officerID').getValue().trim();

      var Name = Ext.getCmp('off_name').getValue().trim();
 
      var gmale = Ext.getCmp('offgenderM');
      var gfemale = Ext.getCmp('offgenderF');
      var label_gender = '';
      var input_gender = '';

      if (gmale.getValue() == true)
      {
        label_gender = 'Male';
        input_gender = 'M';
      }
      else
      {
        label_gender = 'Female';
        input_gender = 'F';
      }
              
      var raceid = Ext.getCmp('off_race').getValue();
      var racemodel = Ext.getStore('Races').findRecord('Race_ID', raceid);    
      var label_race = racemodel.get('Race');  
      var Add_info = Ext.getCmp('off_additional_info').getValue().trim();

      var qtext = "";
      if (Action == 'A')
        qtext = "Would you like to add this officer?";
      else
        qtext = "Would you like to update this officer?";


      Ext.MessageBox.confirm('Please Confirm',
         qtext,
         function( choice)
         { 
            if( choice == 'yes')
            {

             
              var loadMask = new Ext.LoadMask(Ext.getBody(), {
              msg: 'Please Wait...'});
              loadMask.show();

              Ext.Ajax.request({
                url: 'app/php/accessOfficers.php',
                params: 
                {
                        Action: Action,
                        Function: Function,
			Name: Name,
			Gender: input_gender,
			Race_ID: raceid,
			AdditionalInfo: Add_info,
                        Officer_ID: Officer_ID

                },
                failure: function(conn, response, options, eOpts)
                {
                  loadMask.hide();
                  Ext.Msg.show({
                    title: 'Error!',
                    msg: conn.responseText,
                    icon: Ext.Msg.ERROR,
                    buttons: Ext.Msg.OK
                  });
                },  
                success: function(conn, response, options, eOpts)
                {
                  var result = Ext.JSON.decode(conn.responseText, true);
                  if (!result)
                  {
                    loadMask.hide();
                    result = {};
                    result.success = false;
                    result.msg = conn.responseText;
                  } 
                  if (result.success)
                  {
//                     console.log(result['LAST_INSERT_ID']);

                     loadMask.hide();
                     if (Function == 'O')
                     {
                       var cpanel = Ext.getCmp('incsourcepanel'); 
  
                     
                       var oid = result['LAST_INSERT_ID'];

                       Ext.getCmp('io_officer_id').setValue(oid);
                       Ext.getCmp('io_officername').setValue(Name); 
                       Ext.getCmp('io_gender').setValue(label_gender);
                       Ext.getCmp('io_race').setValue(label_race);
                       Ext.getCmp('io_race_id').setValue(raceid);
                     }
                     else
                       Ext.getStore('officer_search').loadData(result['officersearch']);


                     var win = Ext.getCmp('winoffadd')
                     win.destroy(); 


                  }     
                  else
                  {
                    if (result.msg == "no_session")
                                window.location="index.html";
                    else
                    {
                      loadMask.hide();
                      Ext.Msg.show({
                        title: 'Fail!',
                        msg: result.msg,
                        icon: Ext.Msg.ERROR,
                        buttons: Ext.Msg.OK
                      });
                    }
                  }   // result is success          
                } // success function
              });  //Ajax Request
           } //Yes to confirm add or edit
          }); //close messagebox confirm  yes or no       
      } //end if form is valid



           
    },

//================================

//Incident Officer Grid View
//================================
//Click of the Add button
    onButtonClickoffincadd: function(button, e, options) {
           
         var frm = Ext.getCmp('IncidentOfficerDetail');
       
         frm.getForm().reset();
         frm.setTitle('Setup New Incident Officer');
         Ext.getCmp('iosubmit').setText("Add");

         var cpanel = Ext.getCmp('incofficerspanel'); 
         cpanel.getLayout().setActiveItem(1);
           
     },  // end onButtonClickoffincadd
//Click of the Edit button to edit an existing incident officer
    onButtonClickoffincedit: function(button, e, options) {

       var g = Ext.getCmp('incidentofficergrid'); 
       if (!g.getSelectionModel().hasSelection())
       {
          Ext.Msg.show({
            title: 'Error!',
            msg: 'You must first select an officer from the grid.',
            icon: Ext.Msg.ERROR,
            buttons: Ext.Msg.OK
          });             
       }
       else
       {
         var rec = g.getSelectionModel().getSelection()[0]; 
         var frm = Ext.getCmp('IncidentOfficerDetail');
       
         frm.getForm().reset();
         frm.setTitle('Edit Incident Officer');
         Ext.getCmp('iosubmit').setText("Edit");

         Ext.getCmp('io_outsideagency').setValue(rec.get("Outside_Agency_Assist"));
         Ext.getCmp('io_incidentofficer_id').setValue(rec.get("Incident_Officer_ID"));
         Ext.getCmp('io_officer_id').setValue(rec.get("Officer_ID"));
         Ext.getCmp('io_race_id').setValue(rec.get("Race_ID"));
         Ext.getCmp('io_officername').setValue(rec.get("Name"));

         var label_gender = '';
         if (rec.get("Gender") == 'M')
           label_gender = 'Male';
         else
           label_gender = 'Female';

         Ext.getCmp('io_gender').setValue(label_gender);
         Ext.getCmp('io_race').setValue(rec.get("Race"));
         Ext.getCmp('io_offassignment').setValue(rec.get("Assignment_ID"));
         Ext.getCmp('io_calltype').setValue(rec.get("Call_Type_ID"));
         Ext.getCmp('io_depttype').setValue(rec.get("Dept_Type_ID"));
         Ext.getCmp('io_department').setValue(rec.get("Department_ID"));
         Ext.getCmp('io_officerstatus').setValue(rec.get("Status_ID"));
         Ext.getCmp('io_yrsexperience').setValue(rec.get("Experience"));
         Ext.getCmp('io_shotsfired').setValue(rec.get("Shots_Files"));
         Ext.getCmp('io_Age').setValue(rec.get("Age"));
         Ext.getCmp('io_exp_in_cluster').setValue(rec.get("Exp_in_Cluster"));
         Ext.getCmp('io_Casualty').setValue(rec.get("Officer_Casualty"));


         var cpanel = Ext.getCmp('incofficerspanel'); 
         cpanel.getLayout().setActiveItem(1);

         
       }

           
    },  //incidentofficergrid
//Click of the delete button
    onButtonClickoffincdelete: function(button, e, options) {


       var g = Ext.getCmp('incidentofficergrid'); 
       if (!g.getSelectionModel().hasSelection())
       {
          Ext.Msg.show({
            title: 'Error!',
            msg: 'You must first select an incident officer from the grid.',
            icon: Ext.Msg.ERROR,
            buttons: Ext.Msg.OK
          });             
       }
       else
       {
         var rec = g.getSelectionModel().getSelection()[0]; 
         var Incident_Officer_ID = rec.get("Incident_Officer_ID");
         var Incident_ID = Ext.getCmp('id_Incidentnum').getValue();
         Ext.MessageBox.confirm('Please Confirm',
          'Are you sure you would like to delete this incident officer?',
          function( choice)
          { 
           if( choice == 'yes')
           {

              var loadMask = new Ext.LoadMask(Ext.getBody(), {

              msg: 'Please Wait...'});
              loadMask.show();

              Ext.Ajax.request({
                url: 'app/php/deleteincidentofficer.php',
//                url: 'app/data/deleteincidentofficer.json',
                params: 
                {
                  Incident_Officer_ID: Incident_Officer_ID,
                  Incident_ID: Incident_ID
                },
                failure: function(conn, response, options, eOpts)
                {
                  loadMask.hide();
                  Ext.Msg.show({
                    title: 'Error!',
                    msg: conn.responseText,
                    icon: Ext.Msg.ERROR,
                    buttons: Ext.Msg.OK
                  });
                }, 
                success: function(conn, response, options, eOpts)
                {
                  loadMask.hide();
                  var result = Ext.JSON.decode(conn.responseText, true);
                  if (!result)
                  {
                    result = {};
                    result.success = false;
                    result.msg = conn.responseText;
                  } 
                  if (result.success)
                  {
                     Ext.getStore('incidentofficers').loadData(result['Incident_Officer']);
                     var cpanel = Ext.getCmp('incofficerspanel'); 
                     cpanel.getLayout().setActiveItem(0);
                     loadMask.hide();
                  }     
                  else
                  {
                    if (result.msg == "no_session")
                                window.location="index.html";
                    else
                    {
                      loadMask.hide();
                      Ext.Msg.show({
                        title: 'Fail!',
                        msg: result.msg,
                        icon: Ext.Msg.ERROR,
                        buttons: Ext.Msg.OK
                      });
                    }
                  }             
                }  
              });
            } 
         });          
        }
           
    },  
//=================================

//Incident Suspects Grid
//=================================
//Click of the Add button
    onButtonClicksuspectincadd: function(button, e, options) {
           
         var frm = Ext.getCmp('IncidentSuspectDetail');
       
         frm.getForm().reset();
         frm.setTitle('Setup New Incident Subject');
         Ext.getCmp('susdet_submit').setText("Add");
         var cpanel = Ext.getCmp('incsuspectspanel'); 
         cpanel.getLayout().setActiveItem(1);
           
     },  // end onButtonClicksuspectincadd
//Click of the Edit button to edit an existing incident suspect
    onButtonClicksuspectincedit: function(button, e, options) {

       var g = Ext.getCmp('incidentsuspectgrid'); 
       if (!g.getSelectionModel().hasSelection())
       {
          Ext.Msg.show({
            title: 'Error!',
            msg: 'You must first select a subject from the grid.',
            icon: Ext.Msg.ERROR,
            buttons: Ext.Msg.OK
          });             
       }
       else
       {
         var rec = g.getSelectionModel().getSelection()[0]; 
         var frm = Ext.getCmp('IncidentSuspectDetail');
       
         frm.getForm().reset();
         frm.setTitle('Edit Incident Subject');
         Ext.getCmp('susdet_submit').setText("Edit");

         var values = rec.get('shot_string').split(',');

         Ext.getCmp('susdet_shotarea').setValue(values); 

         Ext.getCmp('susdet_age').setValue(rec.get("Age"));
         Ext.getCmp('susdet_incidentsuspect_id').setValue(rec.get("Incident_Suspect_ID"));
         Ext.getCmp('susdet_suspect_id').setValue(rec.get("Suspect_ID"));
         Ext.getCmp('susdet_race_id').setValue(rec.get("'Race_ID'"));
         Ext.getCmp('susdet_suspectname').setValue(rec.get("Suspect_Name"));

         var label_gender = '';
         if (rec.get("Gender") == 'M')
           label_gender = 'Male';
         else
           label_gender = 'Female';

         var disp_shot = this.getTargetAreaString(rec.get("shot_string"));
         Ext.getCmp('susdet_shot_text').setValue(disp_shot);
         Ext.getCmp('susdet_shot_value').setValue(rec.get('shot_string'));
 
         Ext.getCmp('susdet_gender').setValue(label_gender);
         Ext.getCmp('susdet_race').setValue(rec.get("Race"));
         Ext.getCmp('susdet_MentalState').setValue(rec.get("Mental_Status_ID"));
         Ext.getCmp('susdet_Weapons').setValue(rec.get("Weapons_ID"));
         Ext.getCmp('susdet_aggression').setValue(rec.get("Type_of_Agression_ID"));
         Ext.getCmp('susdet_vHitRun').setValue(rec.get("Vehicle_Use_hit_and_run"));
         Ext.getCmp('susdet_vchase').setValue(rec.get("Vehicle_Chase"));
         Ext.getCmp('susdet_fchase').setValue(rec.get("Foot_Chase"));
         Ext.getCmp('susdet_uscitizen').setValue(rec.get("US_Citizen"));
         Ext.getCmp('susdet_gang').setValue(rec.get("Gang_Affiliation"));
         Ext.getCmp('susdet_fatality').setValue(rec.get("Fatality"));
         Ext.getCmp('susdet_injury').setValue(rec.get("Injury"));



         var cpanel = Ext.getCmp('incsuspectspanel'); 
         cpanel.getLayout().setActiveItem(1);

         
       }

           
    },  //onButtonClicksuspectincedit
//Click of the delete button
    onButtonClicksuspectincdelete: function(button, e, options) {


       var g = Ext.getCmp('incidentsuspectgrid'); 
       if (!g.getSelectionModel().hasSelection())
       {
          Ext.Msg.show({
            title: 'Error!',
            msg: 'You must first select a subject from the grid.',
            icon: Ext.Msg.ERROR,
            buttons: Ext.Msg.OK
          });             
       }
       else
       {
         var rec = g.getSelectionModel().getSelection()[0]; 
         var Incident_Suspect_ID = rec.get("Incident_Suspect_ID");
         var Incident_ID = Ext.getCmp('id_Incidentnum').getValue();
         Ext.MessageBox.confirm('Please Confirm',
          'Are you sure you would like to delete this subject?',
          function( choice)
          { 
           if( choice == 'yes')
           {

              var loadMask = new Ext.LoadMask(Ext.getBody(), {

              msg: 'Please Wait...'});
              loadMask.show();

              Ext.Ajax.request({
                url: 'app/php/deleteincidentsuspect.php',
//                url: 'app/data/getincidentsuspects.json',
                params: 
                {
                  Incident_Suspect_ID: Incident_Suspect_ID,
                  Incident_ID: Incident_ID
                },
                failure: function(conn, response, options, eOpts)
                {
                  loadMask.hide();
                  Ext.Msg.show({
                    title: 'Error!',
                    msg: conn.responseText,
                    icon: Ext.Msg.ERROR,
                    buttons: Ext.Msg.OK
                  });
                }, 
                success: function(conn, response, options, eOpts)
                {
                  loadMask.hide();
                  var result = Ext.JSON.decode(conn.responseText, true);
                  if (!result)
                  {
                    result = {};
                    result.success = false;
                    result.msg = conn.responseText;
                  } 
                  if (result.success)
                  {
                     Ext.getStore('incidentsuspects').loadData(result['Incident_Suspect']);
                     var cpanel = Ext.getCmp('incsuspectspanel'); 
                     cpanel.getLayout().setActiveItem(0);
                     loadMask.hide();
                  }     
                  else
                  {
                    if (result.msg == "no_session")
                                window.location="index.html";
                    else
                    {
                      loadMask.hide();
                      Ext.Msg.show({
                        title: 'Fail!',
                        msg: result.msg,
                        icon: Ext.Msg.ERROR,
                        buttons: Ext.Msg.OK
                      });
                    }
                  }             
                }  
              });
            } 
         });          
        }
           
    },  
//==================================

//Suspect Details View
//=================================
//Click of the Add button
    clickincidentsusdetailsubmit: function(button, e, options) {

    var me = this;
    var frm = Ext.getCmp('IncidentSuspectDetail');
    var Suspect_ID = Ext.getCmp('susdet_suspect_id').getValue();
    var shot_string  = Ext.getCmp('susdet_shot_text').getValue();
    var shot_values  = Ext.getCmp('susdet_shot_value').getValue();

//          console.log('suspect id ' + Suspect_ID); 
//          console.log('shot_string ' + shot_string); 

    if (!frm.isValid() || Suspect_ID.length == 0 || shot_string.length == 0)
    {
       Ext.Msg.show({
          title: 'Error Forn not Submitted!',
          msg: 'Not all required fields entered.  Note: You must select a subject for the incident and indicate where he was shot. ',
          icon: Ext.Msg.ERROR,
          buttons: Ext.Msg.OK}); 
    }
    else
    {
      var tempText = "";
      if (Ext.getCmp('susdet_submit').getText() == "Add")
      {
        tempText = "add";
      }
      else  
      {
        tempText = "edit";
      }

      Ext.MessageBox.confirm('Please Confirm',
         'Would you like to ' + tempText + ' this Incident Subject?',
         function( choice)
         { 
            if( choice == 'yes')
            {

              var Incident_ID = Ext.getCmp('id_Incidentnum').getValue();
              var Incident_Suspect_ID = Ext.getCmp('susdet_incidentsuspect_id').getValue();
              var Suspect_ID = Ext.getCmp('susdet_suspect_id').getValue();
              var Vehicle_Use_hit_and_run = Ext.getCmp('susdet_vHitRun').getValue();
              var Vehicle_Chase = Ext.getCmp('susdet_vchase').getValue();
              var Foot_Chase = Ext.getCmp('susdet_fchase').getValue();
              var US_Citizen = Ext.getCmp('susdet_uscitizen').getValue();
              var Gang_Affiliation = Ext.getCmp('susdet_gang').getValue();
              var Fatality = Ext.getCmp('susdet_fatality').getValue();
              var Injury = Ext.getCmp('susdet_injury').getValue();
              var Mental_Status_ID = Ext.getCmp('susdet_MentalState').getValue();
              var Weapons_ID = Ext.getCmp('susdet_Weapons').getValue();
              var Type_of_Agression_ID = Ext.getCmp('susdet_aggression').getValue();
              var alt_motive = "";
              var Age = Ext.getCmp('susdet_age').getValue();

              var loadMask = new Ext.LoadMask(Ext.getBody(), {
              msg: 'Please Wait...'});
              loadMask.show();

              Ext.Ajax.request({
                url: 'app/php/addeditincidentsuspect.php',
//                url: 'app/data/getincidentsuspects.json',
                params: 
                {
                   Incident_ID: Incident_ID,
                   Incident_Suspect_ID: Incident_Suspect_ID, 
                   Suspect_ID: Suspect_ID, 
                   Vehicle_Use_hit_and_run: Vehicle_Use_hit_and_run, 
                   Vehicle_Chase: Vehicle_Chase, 
                   Foot_Chase: Foot_Chase, 
                   US_Citizen: US_Citizen, 
                   Gang_Affiliation: Gang_Affiliation, 
                   Fatality: Fatality, 
                   Injury: Injury,
                   Mental_Status_ID: Mental_Status_ID, 
                   Weapons_ID: Weapons_ID, 
                   Type_of_Agression_ID: Type_of_Agression_ID, 
                   alt_motive: alt_motive, 
                   Age: Age,
                   SHOT_String: shot_values
                },
                failure: function(conn, response, options, eOpts)
                {
                  loadMask.hide();
                  Ext.Msg.show({
                    title: 'Error!',
                    msg: conn.responseText,
                    icon: Ext.Msg.ERROR,
                    buttons: Ext.Msg.OK
                  });
                },  
                success: function(conn, response, options, eOpts)
                {
                  var result = Ext.JSON.decode(conn.responseText, true);
                  if (!result)
                  {
                    loadMask.hide();
                    result = {};
                    result.success = false;
                    result.msg = conn.responseText;
                  } 
                  if (result.success)
                  {
                     Ext.getStore('incidentsuspects').loadData(result['Incident_Suspect']);
                     var cpanel = Ext.getCmp('incsuspectspanel'); 
                     cpanel.getLayout().setActiveItem(0);
                     loadMask.hide();
                  }     
                  else
                  {
                    if (result.msg == "no_session")
                                window.location="index.html";
                    else
                    {
                      loadMask.hide();
                      Ext.Msg.show({
                        title: 'Fail!',
                        msg: result.msg,
                        icon: Ext.Msg.ERROR,
                        buttons: Ext.Msg.OK
                      });
                    }
                  }             
                } 
              });  //Ajax Request
           } //Yes to confirm add or edit
          }); //close messagebox confirm         
      } //end if form is valid



           
     },  
//Click on the cancel button
clickincidentsusdetailcancel: function(button, e, options) {

          var cpanel = Ext.getCmp('incsuspectspanel'); 
          cpanel.getLayout().setActiveItem(0);
                            
    },
//Click on the suspect search button
    clicksearchsuspectbtn: function(button, e, options) {

         var Name_search = Ext.getCmp('susdet_suspect_search').getValue();

         if (Name_search == null || Name_search == '')
         {
           Ext.Msg.show({
            title: 'Error!',
            msg: 'To search for a subject, you must enter a value in the Subject Search box.',
            icon: Ext.Msg.ERROR,
            buttons: Ext.Msg.OK
          });             
         }
         else
         {
           var loadMask = new Ext.LoadMask(Ext.getBody(), {
           msg: 'Please Wait...'});
           loadMask.show();
           Ext.Ajax.timeout = 30000; // this changes the 30 second  
           Ext.Ajax.request({
           url: 'app/php/suspectsearch.php',
//           url: 'app/data/suspectsearch.json',
           params: {Name_search: Name_search},
           scope :this,
           failure: function(conn, response, options, eOpts)
           {
            loadMask.hide();
            var errmsg = conn.responseText;
            if (errmsg == null || errmsg == '') errmsg = "No response from server.";
              Ext.Msg.show({
              title: 'Error!',
              msg: errmsg,
              icon: Ext.Msg.ERROR,
              buttons: Ext.Msg.OK
            });
           }, 
           success: function(conn, response, options, eOpts)
           {
               loadMask.hide();
               var result = Ext.JSON.decode(conn.responseText, true);
               if (!result)
               {
                 result = {};
                 result.success = false;
                 result.msg = conn.responseText;
               } 
               if (result.success)
               {
                 loadMask.hide();
                 //Received response from server
                 if (result.num_rows == "0")
                         Ext.Msg.alert('Results', 'No Subjects Match the Search Name.');
                 else
                 { 
                   Ext.getStore('suspect_search').loadData(result['suspectsearch']);
                   var valwin = new Ext.Window({
                   id:'xgrid-win-sus-ssearch',
                   layout: 'fit',
                   width: 510,
                   height: 320,
                   modal: true,
                   title: 'Please select a Subject or click cancel if the Correct Subject is not shown.',
                   items: [
                     {
                       xtype: 'suspectsearch'
                     }]
                   });
                   valwin.show(); 
                 }
              }     
              else
              {
                 if (result.msg == "no_session")
                              window.location="index.html";
                 else
                 {
                   loadMask.hide();
                   Ext.Msg.show({
                    title: 'Fail!',
                    msg: result.errorMsg,
                    icon: Ext.Msg.ERROR,
                    buttons: Ext.Msg.OK
                   });
                 }
              }             
               
           }  
              });         
        
         }
                            
    },

//Click on the suspect add button
    clickaddsuspectbtn: function(button, e, options) {

           var offaddwin = new Ext.Window({
           id:'winsusadd',
           layout: 'fit',
           width: 410,
           height: 300,
           modal: true,
           title: '',
              items: [
              {
                  xtype: 'addsuspect'
              }]
             });
           Ext.getCmp('sus_add_Action').setValue("A");
//Adding new officer from officer incident grid
           Ext.getCmp('sus_add_Function').setValue("S");  
           Ext.getCmp('sus_add_suspectID').setValue(""); 
           offaddwin.show(); 

                           
    },
//Select from the shot combo box
    selectshotcombo: function(combo, e, options) {


//         console.log('shot selected ' + combo.getValue()); 
         var val = combo.getValue();
         var targareamodel = Ext.getStore('targetareas').findRecord('Target_Area_ID', val); 
         var displayval = targareamodel.get('Specific_Target_Area');
         var shot_text = Ext.getCmp('susdet_shot_text');
         var shot_value = Ext.getCmp('susdet_shot_value');
         var sep = '';
         if (shot_value.getValue() != '')
           sep = ' ,';
         
         var shot_text_val = Ext.getCmp('susdet_shot_text').getValue();
         var shot_value_val = Ext.getCmp('susdet_shot_value').getValue();

         shot_text.setValue(shot_text_val + sep + displayval);
         shot_value.setValue(shot_value_val + sep + val);

         combo.clearValue(); 

           
    },  // end selectshotcombo
//Click on the clear button
    clickclearshotbtn: function(button, e, options) {

         var shot_text = Ext.getCmp('susdet_shot_text');
         var shot_value = Ext.getCmp('susdet_shot_value');
         shot_text.setValue();
         shot_value.setValue();
                            
    },
//Click on that Add btn next to Mental States to add a new mental state
    clickaddsusmentalstate: function(button, e, options) {

       var me = this;

       Ext.Msg.prompt('Add New Mental State', 'Mental State:', function(btn, text){
         if (btn == 'ok'){

             if (!me.validatenotblank(text.trim()))
             {
                Ext.Msg.show({
                title: 'Error!',
                msg: 'Invalid Mental State.  The mental state can not be blank!',
                icon: Ext.Msg.ERROR,
                buttons: Ext.Msg.OK
                }); 
                return;
             }

              var  Mental_Status = text.trim();
              var loadMask = new Ext.LoadMask(Ext.getBody(), {


              msg: 'Please Wait...'});
              loadMask.show();

              Ext.Ajax.request({
                url: 'app/php/accessMentalStates.php',
//                url: 'app/data/getmentalstates.json',
                params:  
                {  Action: 'A',
                   Mental_Status_ID: '', 
                   Mental_Status: Mental_Status },
                failure: function(conn, response, options, eOpts)
                {
                  loadMask.hide();
                  Ext.Msg.show({
                    title: 'Error!',
                    msg: conn.responseText,
                    icon: Ext.Msg.ERROR,
                    buttons: Ext.Msg.OK
                  });
                }, 
                success: function(conn, response, options, eOpts)
                {
                  var result = Ext.JSON.decode(conn.responseText, true);
                  if (!result)
                  {
                    loadMask.hide();
                    result = {};
                    result.success = false;
                    result.msg = conn.responseText;
                  } 
                  if (result.success)
                  {
                     Ext.getStore('MentalStates').loadData(result['Mental_States']);
                     var cpanel = Ext.getCmp('incsuspectspanel'); 
                     cpanel.getLayout().setActiveItem(1);
                     loadMask.hide();
                  }     
                  else
                  {
                    if (result.msg == "no_session")
                                window.location="index.html";
                    else
                    {
                      loadMask.hide();
                      Ext.Msg.show({
                        title: 'Fail!',
                        msg: result.msg,
                        icon: Ext.Msg.ERROR,
                        buttons: Ext.Msg.OK
                      });
                    }
                  }             
                }  
              });

         }
         },null, false, '', null);


           
    },  
//Click on that Add btn next to Weapons to add a new weapon
    clickaddsusweapons: function(button, e, options) {

       var me = this;

       Ext.Msg.prompt('Add New Weapon Type', 'Weapon Type:', function(btn, text){
         if (btn == 'ok'){

             if (!me.validatenotblank(text.trim()))
             {
                Ext.Msg.show({
                title: 'Error!',
                msg: 'Invalid Weapon Type.  The weapon type can not be blank!',
                icon: Ext.Msg.ERROR,
                buttons: Ext.Msg.OK
                }); 
                return;
             }

              var  Weapons_Type = text.trim();
              var loadMask = new Ext.LoadMask(Ext.getBody(), {


              msg: 'Please Wait...'});
              loadMask.show();

              Ext.Ajax.request({
                url: 'app/php/accessWeapons.php',
//                url: 'app/data/getWeapons.json',
                params:  
                {  Action: 'A',
                   Weapons_ID: '', 
                   Weapons_Type: Weapons_Type },
                failure: function(conn, response, options, eOpts)
                {
                  loadMask.hide();
                  Ext.Msg.show({
                    title: 'Error!',
                    msg: conn.responseText,
                    icon: Ext.Msg.ERROR,
                    buttons: Ext.Msg.OK
                  });
                }, 
                success: function(conn, response, options, eOpts)
                {
                  var result = Ext.JSON.decode(conn.responseText, true);
                  if (!result)
                  {
                    loadMask.hide();
                    result = {};
                    result.success = false;
                    result.msg = conn.responseText;
                  } 
                  if (result.success)
                  {
                     Ext.getStore('Weapons').loadData(result['Weapons']);
                     var cpanel = Ext.getCmp('incsuspectspanel'); 
                     cpanel.getLayout().setActiveItem(1);
                     loadMask.hide();
                  }     
                  else
                  {
                    if (result.msg == "no_session")
                                window.location="index.html";
                    else
                    {
                      loadMask.hide();
                      Ext.Msg.show({
                        title: 'Fail!',
                        msg: result.msg,
                        icon: Ext.Msg.ERROR,
                        buttons: Ext.Msg.OK
                    });
                    }
                  }             
                }  
              });

         }
         },null, false, '', null);


           
    },  
//Click on that Add btn next to Aggression Types to add a new aggression type
    clickaddaggression: function(button, e, options) {

       var me = this;

       Ext.Msg.prompt('Add New Aggression Type', 'Aggression Type:', function(btn, text){
         if (btn == 'ok'){

             if (!me.validatenotblank(text.trim()))
             {
                Ext.Msg.show({
                title: 'Error!',
                msg: 'Invalid Aggression Type.  The aggression type can not be blank!',
                icon: Ext.Msg.ERROR,
                buttons: Ext.Msg.OK
                }); 
                return;
             }

              var  Aggression_Type = text.trim();
              var loadMask = new Ext.LoadMask(Ext.getBody(), {


              msg: 'Please Wait...'});
              loadMask.show();

              Ext.Ajax.request({
                url: 'app/php/accessAgressionTypes.php',
//                url: 'app/data/getAggressionTypes.json',
                params:  
                {   Action: 'A',
                    Aggression_Type_ID: '', 
                    Aggression_Type: Aggression_Type },
                failure: function(conn, response, options, eOpts)
                {
                  loadMask.hide();
                  Ext.Msg.show({
                    title: 'Error!',
                    msg: conn.responseText,
                    icon: Ext.Msg.ERROR,
                    buttons: Ext.Msg.OK
                  });
                }, 
                success: function(conn, response, options, eOpts)
                {
                  var result = Ext.JSON.decode(conn.responseText, true);
                  if (!result)
                  {
                    loadMask.hide();
                    result = {};
                    result.success = false;
                    result.msg = conn.responseText;
                  } 
                  if (result.success)
                  {
                     Ext.getStore('AggressionTypes').loadData(result['Aggression_Type']);
                     var cpanel = Ext.getCmp('incsuspectspanel'); 
                     cpanel.getLayout().setActiveItem(1);
                     loadMask.hide();
                  }     
                  else
                  {
                    if (result.msg == "no_session")
                                window.location="index.html";
                    else
                    {
                      loadMask.hide();
                      Ext.Msg.show({
                        title: 'Fail!',
                        msg: result.msg,
                        icon: Ext.Msg.ERROR,
                        buttons: Ext.Msg.OK
                    });
                    }
                  }             
                }  
              });

         }
         },null, false, '', null);


           
    },  
//=================================

//Suspect Add View
//=================================
//click of the select officer search grid button
    onButtonClicksuspectaddbtn: function(button, e, options) {

    var me = this;
    var frm = Ext.getCmp('addsuspect');
    
    if (!frm.isValid())
    {
       Ext.Msg.show({
          title: 'Error Forn not Submitted!',
          msg: 'All invalid fields are highlighted in red.  To see specific field error, place mouse cursor over the "!" next to field.  Please resubmit form once all fields have been corrected.  ',
          icon: Ext.Msg.ERROR,
          buttons: Ext.Msg.OK}); 
    }
    else
    {
      var Action = Ext.getCmp('sus_add_Action').getValue().trim();
      var Function = Ext.getCmp('sus_add_Function').getValue().trim();
      var Suspect_ID = Ext.getCmp('sus_add_suspectID').getValue().trim();

      var Suspect_Name = Ext.getCmp('sus_name').getValue().trim();
      var gmale = Ext.getCmp('susgenderM');
      var gfemale = Ext.getCmp('susgenderF');
      var label_gender = '';
      var input_gender = '';

      if (gmale.getValue() == true)
      {
        label_gender = 'Male';
        input_gender = 'M';
      }
      else
      {
        label_gender = 'Female';
        input_gender = 'F';
      }
              
      var raceid = Ext.getCmp('sus_race').getValue();
      var racemodel = Ext.getStore('Races').findRecord('Race_ID', raceid);    
      var label_race = racemodel.get('Race');  

      var qtext = "";
      if (Action == 'A')
        qtext = "Would you like to add this subject?";
      else
        qtext = "Would you like to update this subject?";

      Ext.MessageBox.confirm('Please Confirm',
         qtext,
         function( choice)
         { 
            if( choice == 'yes')
            {

             
              var loadMask = new Ext.LoadMask(Ext.getBody(), {
              msg: 'Please Wait...'});
              loadMask.show();

              Ext.Ajax.request({
                url: 'app/php/accessSubjects.php',
                params: 
                {
                        Action: Action,
                        Function: Function,
			Suspect_Name: Suspect_Name,
			Gender: input_gender,
			Race_ID: raceid,
                        Suspect_ID: Suspect_ID
                },
                failure: function(conn, response, options, eOpts)
                {
                  loadMask.hide();
                  Ext.Msg.show({
                    title: 'Error!',
                    msg: conn.responseText,
                    icon: Ext.Msg.ERROR,
                    buttons: Ext.Msg.OK
                  });
                },  
                success: function(conn, response, options, eOpts)
                {
                  var result = Ext.JSON.decode(conn.responseText, true);
                  if (!result)
                  {
                    loadMask.hide();
                    result = {};
                    result.success = false;
                    result.msg = conn.responseText;
                  } 
                  if (result.success)
                  {
//                     console.log(result['LAST_INSERT_ID']);
                     loadMask.hide();
                     
                     if (Function == 'S')
                     {
                       var sid = result['LAST_INSERT_ID'];
                       Ext.getCmp('susdet_suspect_id').setValue(sid);
                       Ext.getCmp('susdet_suspectname').setValue(Suspect_Name); 
                       Ext.getCmp('susdet_gender').setValue(label_gender);
                       Ext.getCmp('susdet_race').setValue(label_race);
                       Ext.getCmp('susdet_race_id').setValue(raceid);
                     }
                     else
                       Ext.getStore('suspect_search').loadData(result['suspectsearch']);


                     var win = Ext.getCmp('winsusadd')
                     win.destroy(); 


                  }     
                  else
                  {
                    if (result.msg == "no_session")
                                window.location="index.html";
                    else
                    {
                      loadMask.hide();
                      Ext.Msg.show({
                        title: 'Fail!',
                        msg: result.msg,
                        icon: Ext.Msg.ERROR,
                        buttons: Ext.Msg.OK
                      });
                    }
                  }   // result is success          
                } // success function
              });  //Ajax Request
           } //Yes to confirm add or edit
          }); //close messagebox confirm  yes or no       
      } //end if form is valid




    },
//=================================

//Suspect Search Grid
//=================================
//click of the select suspect search grid button
    onButtonClicksuspectsearchselectbtn: function(button, e, options) {

       var g = Ext.getCmp('suspectsearch'); 
       if (!g.getSelectionModel().hasSelection())
       {
          Ext.Msg.show({
            title: 'Error!',
            msg: 'No Subject Selected.  Please Select a subject from the Grid Before Clicking Select.',
            icon: Ext.Msg.ERROR,
            buttons: Ext.Msg.OK
          });             
       }
       else
       {
         var rec = g.getSelectionModel().getSelection()[0]; 

         Ext.getCmp('susdet_suspect_id').setValue(rec.get("Suspect_ID"));
         Ext.getCmp('susdet_suspectname').setValue(rec.get("Suspect_Name")); 
         Ext.getCmp('susdet_gender').setValue(rec.get("Gender"));
         Ext.getCmp('susdet_race').setValue(rec.get("Race"));

         var r = rec.get("Race");
         var racemodel = Ext.getStore('Races').findRecord('Race', r);    
         var rid = racemodel.get('Race_ID');     
         Ext.getCmp('susdet_race_id').setValue(rid);

         var win = Ext.getCmp('xgrid-win-sus-ssearch')
         win.destroy();

       }

           
    },
//Incident Search Grid
//================================
//Click on the Search button
    onButtonClickincidentsearch: function(button, e, options) {

        var search_name = Ext.getCmp('ig_search').getValue();
        this.getIncidents(search_name,"true");


                            
    },
//Click on the edit button
    onButtonClickincidentedit: function(button, e, options) {

       var me = this;
       var g = Ext.getCmp('Incidentgrid'); 
       if (!g.getSelectionModel().hasSelection())
       {
          Ext.Msg.show({
            title: 'Error!',
            msg: 'You must first select an incident from the grid.',
            icon: Ext.Msg.ERROR,
            buttons: Ext.Msg.OK
          });             
       }
       else
       {
         var rec = g.getSelectionModel().getSelection()[0]; 
         var Incident_ID = rec.get("Incident_ID");
//         Ext.MessageBox.confirm('Please Confirm',
//          'Are you sure you would like to delete this incident?',
//          function( choice)
//          { 
//           if( choice == 'yes')
//           {

              var loadMask = new Ext.LoadMask(Ext.getBody(), {

              msg: 'Please Wait...'});
              loadMask.show();

              Ext.Ajax.request({
                url: 'app/php/getIncident.php',
//                url: 'app/data/getIncident.json',
                params: 
                {
                  Incident_ID: Incident_ID
                },
                failure: function(conn, response, options, eOpts)
                {
                  loadMask.hide();
                  Ext.Msg.show({
                    title: 'Error!',
                    msg: conn.responseText,
                    icon: Ext.Msg.ERROR,
                    buttons: Ext.Msg.OK
                  });
                }, 
                success: function(conn, response, options, eOpts)
                {
                  loadMask.hide();
                  var result = Ext.JSON.decode(conn.responseText, true);
                  if (!result)
                  {
                    result = {};
                    result.success = false;
                    result.msg = conn.responseText;
                  } 
                  if (result.success)
                  {
                        
			var s = result['Incident'];

                        Ext.getCmp('id_action').setValue("Edit"); 
                        Ext.getCmp('id_Incidentnum').setValue(s[0].Incident_ID); 
                        Ext.getCmp('id_Incidentname').setValue(s[0].Incident_Name); 
                        Ext.getCmp('id_user').setValue(s[0].User_id); 
                        Ext.getCmp('id_officersscene').setValue(s[0].Number_Officers_on_Scene); 
                        Ext.getCmp('id_dateoccurred').setValue(s[0].Date_Occured); 
                        Ext.getCmp('id_Address1').setValue(s[0].Address_1); 
                        Ext.getCmp('id_address2').setValue(s[0].Address_2); 
                        Ext.getCmp('id_City').setValue(s[0].City); 
                        Ext.getCmp('id_State').setValue(s[0].State_ID); 
                        me.setStateRegion(s[0].State_ID); 
                        Ext.getCmp('id_zipcode').setValue(s[0].ZIP_CODE); 
                        Ext.getCmp('id_location').setValue(s[0].Location_ID); 
                        var loc_val = s[0].Location_ID;
                        if (loc_val == null || loc_val.length == 0)
                           loc_val = "lonval";
                        var LocationsDet = Ext.getStore('LocationsDet');
                        LocationsDet.clearFilter(true);
                        LocationsDet.filter('Location_ID', loc_val);
                        Ext.getCmp('id_locationdet').reset();
                        Ext.getCmp('id_locationdet').setValue(s[0].Location_Detail_ID); 
                        Ext.getCmp('id_lawsuit').setValue(s[0].Lawsuit); 

                        if (s[0].Indoors == "Y") 
                          Ext.getCmp('id_indoor').setValue(true); 
                        else if (s[0].Indoors == "N") 
                          Ext.getCmp('id_outdoor').setValue(true); 

                        Ext.getCmp('id_officersfiredguns').setValue(s[0].Off_Fired_Guns); 
                        Ext.getCmp('id_officersshotsfired').setValue(s[0].Total_Officer_Shots_Fired); 
                        Ext.getCmp('id_latitude').setValue(s[0].latitude); 
                        Ext.getCmp('id_longitude').setValue(s[0].longitude); 
                        Ext.getCmp('id_time').setValue(s[0].Time); 
                        Ext.getCmp('id_approx_time').setValue(s[0].Approx_Time); 

                        Ext.getStore('sources').loadData(result['Incident_Source']);
                        Ext.getStore('incidentofficers').loadData(result['Incident_Officer']);
                        Ext.getStore('incidentsuspects').loadData(result['Incident_Suspect']);
                        
///right here load the three stores and get the values for incident also set the visibilty of the bottom tab panel to true.
                     var cpanel = Ext.getCmp('centerpanel'); 
                     cpanel.getLayout().setActiveItem(1);
                     loadMask.hide();
                  }     
                  else
                  {
                    if (result.msg == "no_session")
                                window.location="index.html";
                    else
                    {
                      loadMask.hide();
                      Ext.Msg.show({
                        title: 'Fail!',
                        msg: result.msg,
                        icon: Ext.Msg.ERROR,
                        buttons: Ext.Msg.OK
                      });
                    }
                  }             
                }  //success
              }); //ajax call
//            } //choice yes
//         }  //function choice
//         );  //messagebox please confirm        
        }  //if selection made from grid
           
    },  //onButtonClicksuspectincdelete
                            
//Click of the delete button
    onButtonClickincidentdelete: function(button, e, options) {


       var g = Ext.getCmp('Incidentgrid'); 
       if (!g.getSelectionModel().hasSelection())
       {
          Ext.Msg.show({
            title: 'Error!',
            msg: 'You must first select an incident from the grid.',
            icon: Ext.Msg.ERROR,
            buttons: Ext.Msg.OK
          });             
       }
       else
       {
         var rec = g.getSelectionModel().getSelection()[0]; 
         var Incident_ID = rec.get("Incident_ID");
         Ext.MessageBox.confirm('Please Confirm',
          'Are you sure you would like to delete this incident?',
          function( choice)
          { 
           if( choice == 'yes')
           {

              var loadMask = new Ext.LoadMask(Ext.getBody(), {

              msg: 'Please Wait...'});
              loadMask.show();

              Ext.Ajax.request({
                url: 'app/php/deleteincident.php',
//                url: 'app/data/getIncidents.json',
                params: 
                {
                  Incident_ID: Incident_ID
                },
                failure: function(conn, response, options, eOpts)
                {
                  loadMask.hide();
                  Ext.Msg.show({
                    title: 'Error!',
                    msg: conn.responseText,
                    icon: Ext.Msg.ERROR,
                    buttons: Ext.Msg.OK
                  });
                }, 
                success: function(conn, response, options, eOpts)
                {
                  loadMask.hide();
                  var result = Ext.JSON.decode(conn.responseText, true);
                  if (!result)
                  {
                    result = {};
                    result.success = false;
                    result.msg = conn.responseText;
                  } 
                  if (result.success)
                  {
                     Ext.getStore('Incidentslist').loadData(result['Incident']);
                     var cpanel = Ext.getCmp('centerpanel'); 
                     cpanel.getLayout().setActiveItem(2);
                     loadMask.hide();
                  }     
                  else
                  {
                    if (result.msg == "no_session")
                                window.location="index.html";
                    else
                    {
                      loadMask.hide();
                      Ext.Msg.show({
                        title: 'Fail!',
                        msg: result.msg,
                        icon: Ext.Msg.ERROR,
                        buttons: Ext.Msg.OK
                      });
                    }
                  }             
                }  
              });
            } 
         });          
        }
           
    }, 

//Database Maintanence Tab view
//==========================================
    onDBMaintTabchange: function (AdminTabPanel, tab) {


    switch(AdminTabPanel.items.indexOf(tab)) {
    case 0:
        this.getAggressionTypes();
        break;
    case 1:
        this.getLocations();
        break;
    case 2:
        this.getDBMainLocDets();
        break;
    case 3:
        this.getMentalStatus();
        break;
    case 4:
        this.getNewspapers();
        break;
    case 5:
        this.getallofficers();
        break;
    case 6:
        this.getOffAssignments();
        break;
    case 7:
        this.getOfficerCallTypes();
        break;
    case 8:
        this.getDepartments();
        break;
    case 9:
        this.getOffDeptTypes();
        break;
    case 10:
        this.getOffStatus();
        break;
    case 11:
        this.getRaces();
        break;
    case 12:
        this.getSourceTypes();
        break;
    case 13:
        this.getallsubjects();
        break;
    case 14:
        this.getWeapons();
        break;
    }  

    }, 
//DB Maintenance Views
//=========================================================================
//Click on that Add btn next to Aggression Types to add a new aggression type
    clickDBMaintaddaggression: function(button, e, options) {

       var me = this;

       Ext.Msg.prompt('Add New Aggression Type', 'Aggression Type:', function(btn, text){
         if (btn == 'ok'){

             if (!me.validatenotblank(text.trim()))
             {
                Ext.Msg.show({
                title: 'Error!',
                msg: 'Invalid Aggression Type.  The aggression type can not be blank!',
                icon: Ext.Msg.ERROR,
                buttons: Ext.Msg.OK
                }); 
                return;
             }

              var  Aggression_Type = text.trim();
              var loadMask = new Ext.LoadMask(Ext.getBody(), {


              msg: 'Please Wait...'});
              loadMask.show();

              Ext.Ajax.request({
                url: 'app/php/accessAgressionTypes.php',
                params:  
                {  Action: 'A',
                   Aggression_Type_ID: '', 
                   Aggression_Type: Aggression_Type },
                failure: function(conn, response, options, eOpts)
                {
                  loadMask.hide();
                  Ext.Msg.show({
                    title: 'Error!',
                    msg: conn.responseText,
                    icon: Ext.Msg.ERROR,
                    buttons: Ext.Msg.OK
                  });
                }, 
                success: function(conn, response, options, eOpts)
                {
                  var result = Ext.JSON.decode(conn.responseText, true);
                  if (!result)
                  {
                    loadMask.hide();
                    result = {};
                    result.success = false;
                    result.msg = conn.responseText;
                  } 
                  if (result.success)
                  {
                     Ext.getStore('AggressionTypes').loadData(result['Aggression_Type']);
                     loadMask.hide();
                  }     
                  else
                  {
                    if (result.msg == "no_session")
                                window.location="index.html";
                    else
                    {
                      loadMask.hide();
                      Ext.Msg.show({
                        title: 'Fail!',
                        msg: result.msg,
                        icon: Ext.Msg.ERROR,
                        buttons: Ext.Msg.OK
                    });
                    }
                  }             
                }  
              });

         }
         },null, false, '', null);


           
    },  
//Click of the Edit button to edit an aggresion type
    onButtonClickeditaggression: function(button, e, options) {

       var me = this;
       var Aggression_Type = "";
       var g = Ext.getCmp('AggressionTypeGrid'); 
       if (!g.getSelectionModel().hasSelection())
       {
          Ext.Msg.show({
            title: 'Error!',
            msg: 'You must first select an aggression type from the grid.',
            icon: Ext.Msg.ERROR,
            buttons: Ext.Msg.OK
          });             
       }
       else
       {
         var rec = g.getSelectionModel().getSelection()[0]; 
         var Aggression_Type_ID = rec.get("Type_of_Agression_ID");
         Aggression_Type = rec.get("Aggression_Type");
//         console.log(Aggression_Type); 
         Ext.Msg.prompt('Edit Aggression Type', 'Aggression Type:', function(btn, text){
         if (btn == 'ok'){

             if (!me.validatenotblank(text.trim()))
             {
                Ext.Msg.show({
                title: 'Error!',
                msg: 'Invalid Aggression Type.  The aggression type can not be blank!',
                icon: Ext.Msg.ERROR,
                buttons: Ext.Msg.OK
                }); 
                return;
             }

              var  Aggression_Type = text.trim();
              var loadMask = new Ext.LoadMask(Ext.getBody(), {


              msg: 'Please Wait...'});
              loadMask.show();

              Ext.Ajax.request({
                url: 'app/php/accessAgressionTypes.php',
                params:  
                {  Action: 'U',
                   Aggression_Type_ID: Aggression_Type_ID, 
                   Aggression_Type: Aggression_Type },
                failure: function(conn, response, options, eOpts)
                {
                  loadMask.hide();
                  Ext.Msg.show({
                    title: 'Error!',
                    msg: conn.responseText,
                    icon: Ext.Msg.ERROR,
                    buttons: Ext.Msg.OK
                  });
                }, 
                success: function(conn, response, options, eOpts)
                {
                  var result = Ext.JSON.decode(conn.responseText, true);
                  if (!result)
                  {
                    loadMask.hide();
                    result = {};
                    result.success = false;
                    result.msg = conn.responseText;
                  } 
                  if (result.success)
                  {
                     Ext.getStore('AggressionTypes').loadData(result['Aggression_Type']);
                     loadMask.hide();
                  }     
                  else
                  {
                    if (result.msg == "no_session")
                                window.location="index.html";
                    else
                    {
                      loadMask.hide();
                      Ext.Msg.show({
                        title: 'Fail!',
                        msg: result.msg,
                        icon: Ext.Msg.ERROR,
                        buttons: Ext.Msg.OK
                    });
                    }
                  }             
                }  
              });

           }
           },null, false, Aggression_Type, null);
         
       }

           
    },  //onButtonClickoffincedit

//Click of the delete button
    onButtonClickaggressiondelete: function(button, e, options) {

       var Aggression_Type = "";
       var g = Ext.getCmp('AggressionTypeGrid'); 
       if (!g.getSelectionModel().hasSelection())
       {
          Ext.Msg.show({
            title: 'Error!',
            msg: 'You must first select an aggression type from the grid.',
            icon: Ext.Msg.ERROR,
            buttons: Ext.Msg.OK
          });             
       }
       else
       {
         var rec = g.getSelectionModel().getSelection()[0]; 
         var Aggression_Type_ID = rec.get("Type_of_Agression_ID");
         Aggression_Type = rec.get("Aggression_Type");

         Ext.MessageBox.confirm('Please Confirm',
          'Are you sure you would like to delete this aggression type?',
          function(choice)
          { 
           if( choice == 'yes')
           {

              var loadMask = new Ext.LoadMask(Ext.getBody(), {

              msg: 'Please Wait...'});
              loadMask.show();

              Ext.Ajax.request({
                url: 'app/php/accessAgressionTypes.php',
                params:  
                {  Action: 'D',
                   Aggression_Type_ID: Aggression_Type_ID, 
                   Aggression_Type: Aggression_Type },
                failure: function(conn, response, options, eOpts)
                {
                  loadMask.hide();
                  Ext.Msg.show({
                    title: 'Error!',
                    msg: conn.responseText,
                    icon: Ext.Msg.ERROR,
                    buttons: Ext.Msg.OK
                  });
                }, 
                success: function(conn, response, options, eOpts)
                {
                  loadMask.hide();
                  var result = Ext.JSON.decode(conn.responseText, true);
                  if (!result)
                  {
                    result = {};
                    result.success = false;
                    result.msg = conn.responseText;
                  } 
                  if (result.success)
                  {
                     Ext.getStore('AggressionTypes').loadData(result['Aggression_Type']);
                     loadMask.hide();
                  }     
                  else
                  {
                    if (result.msg == "no_session")
                                window.location="index.html";
                    else
                    {
                      loadMask.hide();
                      Ext.Msg.show({
                        title: 'Fail!',
                        msg: result.msg,
                        icon: Ext.Msg.ERROR,
                        buttons: Ext.Msg.OK
                      });
                    }
                  }             
                }  
              });
            } 
         });          
        }
           
    },  
//Click on Add btn on the DB Main Locaiton grid
    clickDBMaintaddlocation: function(button, e, options) {

       var me = this;

       Ext.Msg.prompt('Add New Location', 'Location:', function(btn, text){
         if (btn == 'ok'){

             if (!me.validatenotblank(text.trim()))
             {
                Ext.Msg.show({
                title: 'Error!',
                msg: 'Invalid Location.  The Location can not be blank!',
                icon: Ext.Msg.ERROR,
                buttons: Ext.Msg.OK
                }); 
                return;
             }

              var  Location = text.trim();
              var loadMask = new Ext.LoadMask(Ext.getBody(), {


              msg: 'Please Wait...'});
              loadMask.show();

              Ext.Ajax.request({
                url: 'app/php/accessLocations.php',
                params:  
                {  Action: 'A',
                   Location_ID: '', 
                   Location: Location },
                failure: function(conn, response, options, eOpts)
                {
                  loadMask.hide();
                  Ext.Msg.show({
                    title: 'Error!',
                    msg: conn.responseText,
                    icon: Ext.Msg.ERROR,
                    buttons: Ext.Msg.OK
                  });
                }, 
                success: function(conn, response, options, eOpts)
                {
                  var result = Ext.JSON.decode(conn.responseText, true);
                  if (!result)
                  {
                    loadMask.hide();
                    result = {};
                    result.success = false;
                    result.msg = conn.responseText;
                  } 
                  if (result.success)
                  {
                     Ext.getStore('Locations').loadData(result['Location']);
                     loadMask.hide();
                  }     
                  else
                  {
                    if (result.msg == "no_session")
                                window.location="index.html";
                    else
                    {
                      loadMask.hide();
                      Ext.Msg.show({
                        title: 'Fail!',
                        msg: result.msg,
                        icon: Ext.Msg.ERROR,
                        buttons: Ext.Msg.OK
                    });
                    }
                  }             
                }  
              });

         }
         },null, false, '', null);


           
    },  
//Click of the Edit button to edit a location
    onButtonClickeditlocation: function(button, e, options) {

       var me = this;
       var Location = "";
       var g = Ext.getCmp('LocationGrid'); 
       if (!g.getSelectionModel().hasSelection())
       {
          Ext.Msg.show({
            title: 'Error!',
            msg: 'You must first select a location from the grid.',
            icon: Ext.Msg.ERROR,
            buttons: Ext.Msg.OK
          });             
       }
       else
       {
         var rec = g.getSelectionModel().getSelection()[0]; 
         var Location_ID = rec.get("Location_ID");
         Location = rec.get("Location");
         Ext.Msg.prompt('Edit Location', 'Location:', function(btn, text){
         if (btn == 'ok'){

             if (!me.validatenotblank(text.trim()))
             {
                Ext.Msg.show({
                title: 'Error!',
                msg: 'Invalid Location.  The location can not be blank!',
                icon: Ext.Msg.ERROR,
                buttons: Ext.Msg.OK
                }); 
                return;
             }

              var  Location = text.trim();
              var loadMask = new Ext.LoadMask(Ext.getBody(), {


              msg: 'Please Wait...'});
              loadMask.show();

              Ext.Ajax.request({
                url: 'app/php/accessLocations.php',
                params:  
                {  Action: 'U',
                   Location_ID: Location_ID, 
                   Location: Location },
                failure: function(conn, response, options, eOpts)
                {
                  loadMask.hide();
                  Ext.Msg.show({
                    title: 'Error!',
                    msg: conn.responseText,
                    icon: Ext.Msg.ERROR,
                    buttons: Ext.Msg.OK
                  });
                }, 
                success: function(conn, response, options, eOpts)
                {
                  var result = Ext.JSON.decode(conn.responseText, true);
                  if (!result)
                  {
                    loadMask.hide();
                    result = {};
                    result.success = false;
                    result.msg = conn.responseText;
                  } 
                  if (result.success)
                  {
                     Ext.getStore('Locations').loadData(result['Location']);
                     loadMask.hide();
                  }     
                  else
                  {
                    if (result.msg == "no_session")
                                window.location="index.html";
                    else
                    {
                      loadMask.hide();
                      Ext.Msg.show({
                        title: 'Fail!',
                        msg: result.msg,
                        icon: Ext.Msg.ERROR,
                        buttons: Ext.Msg.OK
                    });
                    }
                  }             
                }  
              });

           }
           },null, false, Location, null);
         
       }

           
    },  //onButtonClickoffincedit

//Click of the delete button for a location
    onButtonClickdeletelocation: function(button, e, options) {

       var Location = "";
       var g = Ext.getCmp('LocationGrid'); 
       if (!g.getSelectionModel().hasSelection())
       {
          Ext.Msg.show({
            title: 'Error!',
            msg: 'You must first select a location from the grid.',
            icon: Ext.Msg.ERROR,
            buttons: Ext.Msg.OK
          });             
       }
       else
       {
         var rec = g.getSelectionModel().getSelection()[0]; 
         var Location_ID = rec.get("Location_ID");
         Location = rec.get("Location");

         Ext.MessageBox.confirm('Please Confirm',
          'Are you sure you would like to delete this location?',
          function(choice)
          { 
           if( choice == 'yes')
           {

              var loadMask = new Ext.LoadMask(Ext.getBody(), {

              msg: 'Please Wait...'});
              loadMask.show();

              Ext.Ajax.request({
                url: 'app/php/accessLocations.php',
                params:  
                {  Action: 'D',
                   Location_ID: Location_ID, 
                   Location: Location },
                failure: function(conn, response, options, eOpts)
                {
                  loadMask.hide();
                  Ext.Msg.show({
                    title: 'Error!',
                    msg: conn.responseText,
                    icon: Ext.Msg.ERROR,
                    buttons: Ext.Msg.OK
                  });
                }, 
                success: function(conn, response, options, eOpts)
                {
                  loadMask.hide();
                  var result = Ext.JSON.decode(conn.responseText, true);
                  if (!result)
                  {
                    result = {};
                    result.success = false;
                    result.msg = conn.responseText;
                  } 
                  if (result.success)
                  {
                     Ext.getStore('Locations').loadData(result['Location']);
                     loadMask.hide();
                  }     
                  else
                  {
                    if (result.msg == "no_session")
                                window.location="index.html";
                    else
                    {
                      loadMask.hide();
                      Ext.Msg.show({
                        title: 'Fail!',
                        msg: result.msg,
                        icon: Ext.Msg.ERROR,
                        buttons: Ext.Msg.OK
                      });
                    }
                  }             
                }  
              });
            } 
         });          
        }
           
    },  
//Click on Add btn on the DB Main Mental Status grid
    clickDBMaintaddMentalStatus: function(button, e, options) {

       var me = this;

       Ext.Msg.prompt('Add New Mental Status', 'Mental Status:', function(btn, text){
         if (btn == 'ok'){

             if (!me.validatenotblank(text.trim()))
             {
                Ext.Msg.show({
                title: 'Error!',
                msg: 'Invalid Mental Status.  The Mental Status can not be blank!',
                icon: Ext.Msg.ERROR,
                buttons: Ext.Msg.OK
                }); 
                return;
             }

              var  Mental_Status = text.trim();
              var loadMask = new Ext.LoadMask(Ext.getBody(), {


              msg: 'Please Wait...'});
              loadMask.show();

              Ext.Ajax.request({
                url: 'app/php/accessMentalStates.php',
                params:  
                {  Action: 'A',
                   Mental_Status_ID: '', 
                   Mental_Status: Mental_Status },
                failure: function(conn, response, options, eOpts)
                {
                  loadMask.hide();
                  Ext.Msg.show({
                    title: 'Error!',
                    msg: conn.responseText,
                    icon: Ext.Msg.ERROR,
                    buttons: Ext.Msg.OK
                  });
                }, 
                success: function(conn, response, options, eOpts)
                {
                  var result = Ext.JSON.decode(conn.responseText, true);
                  if (!result)
                  {
                    loadMask.hide();
                    result = {};
                    result.success = false;
                    result.msg = conn.responseText;
                  } 
                  if (result.success)
                  {
                     Ext.getStore('MentalStates').loadData(result['Mental_States']);
                     loadMask.hide();
                  }     
                  else
                  {
                    if (result.msg == "no_session")
                                window.location="index.html";
                    else
                    {
                      loadMask.hide();
                      Ext.Msg.show({
                        title: 'Fail!',
                        msg: result.msg,
                        icon: Ext.Msg.ERROR,
                        buttons: Ext.Msg.OK
                    });
                    }
                  }             
                }  
              });

         }
         },null, false, '', null);


           
    },  
//Click of the Edit button to edit a Mental Status
    onButtonClickeditMentalStatus: function(button, e, options) {

       var me = this;
       var Mental_Status = "";
       var g = Ext.getCmp('MentalStateGrid'); 
       if (!g.getSelectionModel().hasSelection())
       {
          Ext.Msg.show({
            title: 'Error!',
            msg: 'You must first select a mental status from the grid.',
            icon: Ext.Msg.ERROR,
            buttons: Ext.Msg.OK
          });             
       }
       else
       {
         var rec = g.getSelectionModel().getSelection()[0]; 
         var Mental_Status_ID = rec.get("Mental_Status_ID");
         Mental_Status = rec.get("Mental_Status");
         Ext.Msg.prompt('Edit Mental Status', 'Mental Status:', function(btn, text){
         if (btn == 'ok'){

             if (!me.validatenotblank(text.trim()))
             {
                Ext.Msg.show({
                title: 'Error!',
                msg: 'Invalid Mental Status.  The Mental Status can not be blank!',
                icon: Ext.Msg.ERROR,
                buttons: Ext.Msg.OK
                }); 
                return;
             }

              var  Mental_Status = text.trim();
              var loadMask = new Ext.LoadMask(Ext.getBody(), {


              msg: 'Please Wait...'});
              loadMask.show();

              Ext.Ajax.request({
                url: 'app/php/accessMentalStates.php',
                params:  
                {  Action: 'U',
                   Mental_Status_ID: Mental_Status_ID, 
                   Mental_Status: Mental_Status },
                failure: function(conn, response, options, eOpts)
                {
                  loadMask.hide();
                  Ext.Msg.show({
                    title: 'Error!',
                    msg: conn.responseText,
                    icon: Ext.Msg.ERROR,
                    buttons: Ext.Msg.OK
                  });
                }, 
                success: function(conn, response, options, eOpts)
                {
                  var result = Ext.JSON.decode(conn.responseText, true);
                  if (!result)
                  {
                    loadMask.hide();
                    result = {};
                    result.success = false;
                    result.msg = conn.responseText;
                  } 
                  if (result.success)
                  {
                     Ext.getStore('MentalStates').loadData(result['Mental_States']);
                     loadMask.hide();
                  }     
                  else
                  {
                    if (result.msg == "no_session")
                                window.location="index.html";
                    else
                    {
                      loadMask.hide();
                      Ext.Msg.show({
                        title: 'Fail!',
                        msg: result.msg,
                        icon: Ext.Msg.ERROR,
                        buttons: Ext.Msg.OK
                    });
                    }
                  }             
                }  
              });

           }
           },null, false, Mental_Status, null);
         
       }

           
    },  //onButtonClickeditMentalStatus

//Click of the delete button for a Mental Status
    onButtonClickdeleteMentalStatus: function(button, e, options) {

       var Mental_Status = "";
       var g = Ext.getCmp('MentalStateGrid'); 
       if (!g.getSelectionModel().hasSelection())
       {
          Ext.Msg.show({
            title: 'Error!',
            msg: 'You must first select a Mental Status from the grid.',
            icon: Ext.Msg.ERROR,
            buttons: Ext.Msg.OK
          });             
       }
       else
       {
         var rec = g.getSelectionModel().getSelection()[0]; 
         var Mental_Status_ID = rec.get("Mental_Status_ID");
         Mental_Status = rec.get("Mental_Status");

         Ext.MessageBox.confirm('Please Confirm',
          'Are you sure you would like to delete this Mental Status?',
          function(choice)
          { 
           if( choice == 'yes')
           {

              var loadMask = new Ext.LoadMask(Ext.getBody(), {

              msg: 'Please Wait...'});
              loadMask.show();

              Ext.Ajax.request({
                url: 'app/php/accessMentalStates.php',
                params:  
                {  Action: 'D',
                   Mental_Status_ID: Mental_Status_ID, 
                   Mental_Status: Mental_Status },
                failure: function(conn, response, options, eOpts)
                {
                  loadMask.hide();
                  Ext.Msg.show({
                    title: 'Error!',
                    msg: conn.responseText,
                    icon: Ext.Msg.ERROR,
                    buttons: Ext.Msg.OK
                  });
                }, 
                success: function(conn, response, options, eOpts)
                {
                  loadMask.hide();
                  var result = Ext.JSON.decode(conn.responseText, true);
                  if (!result)
                  {
                    result = {};
                    result.success = false;
                    result.msg = conn.responseText;
                  } 
                  if (result.success)
                  {
                     Ext.getStore('MentalStates').loadData(result['Mental_States']);
                     loadMask.hide();
                  }     
                  else
                  {
                    if (result.msg == "no_session")
                                window.location="index.html";
                    else
                    {
                      loadMask.hide();
                      Ext.Msg.show({
                        title: 'Fail!',
                        msg: result.msg,
                        icon: Ext.Msg.ERROR,
                        buttons: Ext.Msg.OK
                      });
                    }
                  }             
                }  
              });
            } 
         });          
        }
           
    },  
//Click on Add btn on the DB Main Newspapers grid
    clickDBMaintaddNewspapers: function(button, e, options) {

       var me = this;

       Ext.Msg.prompt('Add New Newspapers', 'Newspaper:', function(btn, text){
         if (btn == 'ok'){

             if (!me.validatenotblank(text.trim()))
             {
                Ext.Msg.show({
                title: 'Error!',
                msg: 'Invalid Newspaper.  The Newspaper can not be blank!',
                icon: Ext.Msg.ERROR,
                buttons: Ext.Msg.OK
                }); 
                return;
             }

              var  Newspapers = text.trim();
              var loadMask = new Ext.LoadMask(Ext.getBody(), {


              msg: 'Please Wait...'});
              loadMask.show();

              Ext.Ajax.request({
                url: 'app/php/accessNewspapers.php',
                params:  
                {  Action: 'A',
                   Newspaper_ID: '', 
                   Newspaper: Newspapers },
                failure: function(conn, response, options, eOpts)
                {
                  loadMask.hide();
                  Ext.Msg.show({
                    title: 'Error!',
                    msg: conn.responseText,
                    icon: Ext.Msg.ERROR,
                    buttons: Ext.Msg.OK
                  });
                }, 
                success: function(conn, response, options, eOpts)
                {
                  var result = Ext.JSON.decode(conn.responseText, true);
                  if (!result)
                  {
                    loadMask.hide();
                    result = {};
                    result.success = false;
                    result.msg = conn.responseText;
                  } 
                  if (result.success)
                  {
                     Ext.getStore('Newspapers').loadData(result['Newspapers']);
                     loadMask.hide();
                  }     
                  else
                  {
                    if (result.msg == "no_session")
                                window.location="index.html";
                    else
                    {
                      loadMask.hide();
                      Ext.Msg.show({
                        title: 'Fail!',
                        msg: result.msg,
                        icon: Ext.Msg.ERROR,
                        buttons: Ext.Msg.OK
                    });
                    }
                  }             
                }  
              });

         }
         },null, false, '', null);


           
    },  
//Click of the Edit button to edit a Newspaper
    onButtonClickeditNewspapers: function(button, e, options) {

       var me = this;
       var Newspaper = "";
       var g = Ext.getCmp('NewspapersGrid'); 
       if (!g.getSelectionModel().hasSelection())
       {
          Ext.Msg.show({
            title: 'Error!',
            msg: 'You must first select a newspaper from the grid.',
            icon: Ext.Msg.ERROR,
            buttons: Ext.Msg.OK
          });             
       }
       else
       {
         var rec = g.getSelectionModel().getSelection()[0]; 
         var Newspaper_ID = rec.get("Newspaper_ID");
         Newspaper = rec.get("Newspaper");
         Ext.Msg.prompt('Edit Newspaper', 'Newspaper:', function(btn, text){
         if (btn == 'ok'){

             if (!me.validatenotblank(text.trim()))
             {
                Ext.Msg.show({
                title: 'Error!',
                msg: 'Invalid Newspaper.  The Newspaper can not be blank!',
                icon: Ext.Msg.ERROR,
                buttons: Ext.Msg.OK
                }); 
                return;
             }

              var  Newspaper = text.trim();
              var loadMask = new Ext.LoadMask(Ext.getBody(), {


              msg: 'Please Wait...'});
              loadMask.show();

              Ext.Ajax.request({
                url: 'app/php/accessNewspapers.php',
                params:  
                {  Action: 'U',
                   Newspaper_ID: Newspaper_ID, 
                   Newspaper: Newspaper },
                failure: function(conn, response, options, eOpts)
                {
                  loadMask.hide();
                  Ext.Msg.show({
                    title: 'Error!',
                    msg: conn.responseText,
                    icon: Ext.Msg.ERROR,
                    buttons: Ext.Msg.OK
                  });
                }, 
                success: function(conn, response, options, eOpts)
                {
                  var result = Ext.JSON.decode(conn.responseText, true);
                  if (!result)
                  {
                    loadMask.hide();
                    result = {};
                    result.success = false;
                    result.msg = conn.responseText;
                  } 
                  if (result.success)
                  {
                     Ext.getStore('Newspapers').loadData(result['Newspapers']);
                     loadMask.hide();
                  }     
                  else
                  {
                    if (result.msg == "no_session")
                                window.location="index.html";
                    else
                    {
                      loadMask.hide();
                      Ext.Msg.show({
                        title: 'Fail!',
                        msg: result.msg,
                        icon: Ext.Msg.ERROR,
                        buttons: Ext.Msg.OK
                    });
                    }
                  }             
                }  
              });

           }
           },null, false, Newspaper, null);
         
       }

           
    },  //onButtonClickeditNewspaper

//Click of the delete button for a Newspaper
    onButtonClickdeleteNewspapers: function(button, e, options) {

       var Newspaper = "";
       var g = Ext.getCmp('NewspapersGrid'); 
       if (!g.getSelectionModel().hasSelection())
       {
          Ext.Msg.show({
            title: 'Error!',
            msg: 'You must first select a Newspaper from the grid.',
            icon: Ext.Msg.ERROR,
            buttons: Ext.Msg.OK
          });             
       }
       else
       {
         var rec = g.getSelectionModel().getSelection()[0]; 
         var Newspaper_ID = rec.get("Newspaper_ID");
         Newspaper = rec.get("Newspaper");

         Ext.MessageBox.confirm('Please Confirm',
          'Are you sure you would like to delete this Newspaper?',
          function(choice)
          { 
           if( choice == 'yes')
           {

              var loadMask = new Ext.LoadMask(Ext.getBody(), {

              msg: 'Please Wait...'});
              loadMask.show();

              Ext.Ajax.request({
                url: 'app/php/accessNewspapers.php',
                params:  
                {  Action: 'D',
                   Newspaper_ID: Newspaper_ID, 
                   Newspaper: Newspaper },
                failure: function(conn, response, options, eOpts)
                {
                  loadMask.hide();
                  Ext.Msg.show({
                    title: 'Error!',
                    msg: conn.responseText,
                    icon: Ext.Msg.ERROR,
                    buttons: Ext.Msg.OK
                  });
                }, 
                success: function(conn, response, options, eOpts)
                {
                  loadMask.hide();
                  var result = Ext.JSON.decode(conn.responseText, true);
                  if (!result)
                  {
                    result = {};
                    result.success = false;
                    result.msg = conn.responseText;
                  } 
                  if (result.success)
                  {
                     Ext.getStore('Newspapers').loadData(result['Newspapers']);
                     loadMask.hide();
                  }     
                  else
                  {
                    if (result.msg == "no_session")
                                window.location="index.html";
                    else
                    {
                      loadMask.hide();
                      Ext.Msg.show({
                        title: 'Fail!',
                        msg: result.msg,
                        icon: Ext.Msg.ERROR,
                        buttons: Ext.Msg.OK
                      });
                    }
                  }             
                }  
              });
            } 
         });          
        }
           
    },  
//Click on the officer add button from the DB Maint Grid
    clickofficeraddDB: function(button, e, options) {

           var offaddwin = new Ext.Window({
           id:'winoffadd',
           layout: 'fit',
           width: 410,
           height: 370,
           modal: true,
           title: 'Add Officer',
              items: [
              {
                  xtype: 'addofficer'
              }]
             });
            Ext.getCmp('off_add_Action').setValue("A");
//Adding new officer from officer incident grid
            Ext.getCmp('off_add_Function').setValue("D");  
            Ext.getCmp('off_add_officerID').setValue("");  

            offaddwin.show(); 

                           
    },
//Click on the edit Officer details button from DB maintenance
    DBMainEditOfficer: function(button, e, options) {


       var me = this;
       var g = Ext.getCmp('officersGrid'); 
       if (!g.getSelectionModel().hasSelection())
       {
          Ext.Msg.show({
            title: 'Error!',
            msg: 'You must first select an Officer from the grid.',
            icon: Ext.Msg.ERROR,
            buttons: Ext.Msg.OK
          });             
       }
       else
       {
           var offaddwin = new Ext.Window({
           id:'winoffadd',
           layout: 'fit',
           width: 410,
           height: 370,
           modal: true,
           title: 'Edit Officer',
              items: [
              {
                  xtype: 'addofficer'
              }]
             });

            var rec = g.getSelectionModel().getSelection()[0]; 
            Ext.getCmp('off_add_Action').setValue("U");
//Adding new officer from officer incident grid
            Ext.getCmp('off_add_Function').setValue("D");  
            Ext.getCmp('off_add_officerID').setValue(rec.get("Officer_ID"));  
            Ext.getCmp('off_name').setValue(rec.get("Name"));  
  
            var offgenderM = Ext.getCmp('offgenderM');            
            var offgenderF = Ext.getCmp('offgenderF');
            var gender = rec.get("Gender");
            if (gender == "M")
               offgenderM.setValue(true);
            else            
               offgenderF.setValue(true);

  
            var racename = rec.get("Race")
            var racemodel = Ext.getStore('Races').findRecord('Race', racename);    
            var race_id = racemodel.get('Race_ID')
            Ext.getCmp('off_race').setValue(race_id);  
            
            Ext.getCmp('off_additional_info').setValue(rec.get("Additional_Info"));  


            offaddwin.show();
       }

                           
    },

//Click of the delete button for an officer
    onButtonClickdeleteOfficer: function(button, e, options) {


       var g = Ext.getCmp('officersGrid'); 
       if (!g.getSelectionModel().hasSelection())
       {
          Ext.Msg.show({
            title: 'Error!',
            msg: 'You must first select an Officer from the grid.',
            icon: Ext.Msg.ERROR,
            buttons: Ext.Msg.OK
          });             
       }
       else
       {
         var rec = g.getSelectionModel().getSelection()[0]; 
         var Officer_ID = rec.get("Officer_ID")


         Ext.MessageBox.confirm('Please Confirm',
          'Are you sure you would like to delete this Officer?',
          function(choice)
          { 
           if( choice == 'yes')
           {

              var loadMask = new Ext.LoadMask(Ext.getBody(), {

              msg: 'Please Wait...'});
              loadMask.show();

              Ext.Ajax.request({
                url: 'app/php/accessOfficers.php',
                params: 
                {
                        Action: 'D',
                        Function: 'D',
			Name: '',
			Gender: '',
			Race_ID: '',
			AdditionalInfo: '',
                        Officer_ID: Officer_ID

                },
                failure: function(conn, response, options, eOpts)
                {
                  loadMask.hide();
                  Ext.Msg.show({
                    title: 'Error!',
                    msg: conn.responseText,
                    icon: Ext.Msg.ERROR,
                    buttons: Ext.Msg.OK
                  });
                }, 
                success: function(conn, response, options, eOpts)
                {
                  loadMask.hide();
                  var result = Ext.JSON.decode(conn.responseText, true);
                  if (!result)
                  {
                    result = {};
                    result.success = false;
                    result.msg = conn.responseText;
                  } 
                  if (result.success)
                  {
                       Ext.getStore('officer_search').loadData(result['officersearch']);
                     loadMask.hide();
                  }     
                  else
                  {
                    if (result.msg == "no_session")
                                window.location="index.html";
                    else
                    {
                      loadMask.hide();
                      Ext.Msg.show({
                        title: 'Fail!',
                        msg: result.msg,
                        icon: Ext.Msg.ERROR,
                        buttons: Ext.Msg.OK
                      });
                    }
                  }             
                }  
              });
            } 
         });          
        }
           
    },  



//Click on Add btn on the DB Main Officer Assignment grid
    clickDBMaintaddOfficerAssignments: function(button, e, options) {

       var me = this;

       Ext.Msg.prompt('Add New Officer Assignment', 'Officer Assignment:', function(btn, text){
         if (btn == 'ok'){

             if (!me.validatenotblank(text.trim()))
             {
                Ext.Msg.show({
                title: 'Error!',
                msg: 'Invalid Officer Assignment.  The Officer Assignment can not be blank!',
                icon: Ext.Msg.ERROR,
                buttons: Ext.Msg.OK
                }); 
                return;
             }

              var  Assignment = text.trim();
              var loadMask = new Ext.LoadMask(Ext.getBody(), {


              msg: 'Please Wait...'});
              loadMask.show();

              Ext.Ajax.request({
                url: 'app/php/accessOfficerAssignment.php',
                params:  
                {  Action: 'A',
                   Assignment_ID: '', 
                   Assignment: Assignment },
                failure: function(conn, response, options, eOpts)
                {
                  loadMask.hide();
                  Ext.Msg.show({
                    title: 'Error!',
                    msg: conn.responseText,
                    icon: Ext.Msg.ERROR,
                    buttons: Ext.Msg.OK
                  });
                }, 
                success: function(conn, response, options, eOpts)
                {
                  var result = Ext.JSON.decode(conn.responseText, true);
                  if (!result)
                  {
                    loadMask.hide();
                    result = {};
                    result.success = false;
                    result.msg = conn.responseText;
                  } 
                  if (result.success)
                  {
                     Ext.getStore('officerassignments').loadData(result['Officer_Assignment']);
                     loadMask.hide();
                  }     
                  else
                  {
                    if (result.msg == "no_session")
                                window.location="index.html";
                    else
                    {
                      loadMask.hide();
                      Ext.Msg.show({
                        title: 'Fail!',
                        msg: result.msg,
                        icon: Ext.Msg.ERROR,
                        buttons: Ext.Msg.OK
                    });
                    }
                  }             
                }  
              });

         }
         },null, false, '', null);


           
    },  
//Click of the Edit button to edit an Officer Assignment
    onButtonClickeditOfficerAssignment: function(button, e, options) {

       var me = this;
       var Assignment = "";
       var g = Ext.getCmp('OfficerAssignmentGrid'); 
       if (!g.getSelectionModel().hasSelection())
       {
          Ext.Msg.show({
            title: 'Error!',
            msg: 'You must first select an officer assignment from the grid.',
            icon: Ext.Msg.ERROR,
            buttons: Ext.Msg.OK
          });             
       }
       else
       {
         var rec = g.getSelectionModel().getSelection()[0]; 
         var Assignment_ID = rec.get("Assignment_ID");
         Assignment = rec.get("Assignment");
         Ext.Msg.prompt('Edit Assignment', 'Assignment:', function(btn, text){
         if (btn == 'ok'){

             if (!me.validatenotblank(text.trim()))
             {
                Ext.Msg.show({
                title: 'Error!',
                msg: 'Invalid Assignment.  The Assignment can not be blank!',
                icon: Ext.Msg.ERROR,
                buttons: Ext.Msg.OK
                }); 
                return;
             }

              var  Assignment = text.trim();
              var loadMask = new Ext.LoadMask(Ext.getBody(), {


              msg: 'Please Wait...'});
              loadMask.show();

              Ext.Ajax.request({
                url: 'app/php/accessOfficerAssignment.php',
                params:  
                {  Action: 'U',
                   Assignment_ID: Assignment_ID, 
                   Assignment: Assignment },
                failure: function(conn, response, options, eOpts)
                {
                  loadMask.hide();
                  Ext.Msg.show({
                    title: 'Error!',
                    msg: conn.responseText,
                    icon: Ext.Msg.ERROR,
                    buttons: Ext.Msg.OK
                  });
                }, 
                success: function(conn, response, options, eOpts)
                {
                  var result = Ext.JSON.decode(conn.responseText, true);
                  if (!result)
                  {
                    loadMask.hide();
                    result = {};
                    result.success = false;
                    result.msg = conn.responseText;
                  } 
                  if (result.success)
                  {
                     Ext.getStore('officerassignments').loadData(result['Officer_Assignment']);
                     loadMask.hide();
                  }     
                  else
                  {
                    if (result.msg == "no_session")
                                window.location="index.html";
                    else
                    {
                      loadMask.hide();
                      Ext.Msg.show({
                        title: 'Fail!',
                        msg: result.msg,
                        icon: Ext.Msg.ERROR,
                        buttons: Ext.Msg.OK
                    });
                    }
                  }             
                }  
              });

           }
           },null, false, Assignment, null);
         
       }

           
    },  //onButtonClickeditOfficerAssignment

//Click of the delete button for an officer assignment
    onButtonClickdeleteOffAssignment: function(button, e, options) {

       var Assignment = "";
       var g = Ext.getCmp('OfficerAssignmentGrid'); 
       if (!g.getSelectionModel().hasSelection())
       {
          Ext.Msg.show({
            title: 'Error!',
            msg: 'You must first select an officer assignment from the grid.',
            icon: Ext.Msg.ERROR,
            buttons: Ext.Msg.OK
          });             
       }
       else
       {
         var rec = g.getSelectionModel().getSelection()[0]; 
         var Assignment_ID = rec.get("Assignment_ID");
         Assignment = rec.get("Assignment");

         Ext.MessageBox.confirm('Please Confirm',
          'Are you sure you would like to delete this officer assignment?',
          function(choice)
          { 
           if( choice == 'yes')
           {

              var loadMask = new Ext.LoadMask(Ext.getBody(), {

              msg: 'Please Wait...'});
              loadMask.show();

              Ext.Ajax.request({
                url: 'app/php/accessOfficerAssignment.php',
                params:  
                {  Action: 'D',
                   Assignment_ID: Assignment_ID, 
                   Assignment: Assignment },
                failure: function(conn, response, options, eOpts)
                {
                  loadMask.hide();
                  Ext.Msg.show({
                    title: 'Error!',
                    msg: conn.responseText,
                    icon: Ext.Msg.ERROR,
                    buttons: Ext.Msg.OK
                  });
                }, 
                success: function(conn, response, options, eOpts)
                {
                  loadMask.hide();
                  var result = Ext.JSON.decode(conn.responseText, true);
                  if (!result)
                  {
                    result = {};
                    result.success = false;
                    result.msg = conn.responseText;
                  } 
                  if (result.success)
                  {
                     Ext.getStore('officerassignments').loadData(result['Officer_Assignment']);
                     loadMask.hide();
                  }     
                  else
                  {
                    if (result.msg == "no_session")
                                window.location="index.html";
                    else
                    {
                      loadMask.hide();
                      Ext.Msg.show({
                        title: 'Fail!',
                        msg: result.msg,
                        icon: Ext.Msg.ERROR,
                        buttons: Ext.Msg.OK
                      });
                    }
                  }             
                }  
              });
            } 
         });          
        }
           
    },  
//Click on Add btn on the DB Main Officer Call Type grid
    clickDBMaintaddOffCallType: function(button, e, options) {

       var me = this;

       Ext.Msg.prompt('Add New Officer Call Type', 'Officer Call Type:', function(btn, text){
         if (btn == 'ok'){

             if (!me.validatenotblank(text.trim()))
             {
                Ext.Msg.show({
                title: 'Error!',
                msg: 'Invalid Officer Call Type.  The Officer Call Type can not be blank!',
                icon: Ext.Msg.ERROR,
                buttons: Ext.Msg.OK
                }); 
                return;
             }

              var  Call_Type = text.trim();
              var loadMask = new Ext.LoadMask(Ext.getBody(), {


              msg: 'Please Wait...'});
              loadMask.show();

              Ext.Ajax.request({
                url: 'app/php/accessOfficerCallType.php',
                params:  
                {  Action: 'A',
                   Call_Type_ID: '', 
                   Call_Type: Call_Type },
                failure: function(conn, response, options, eOpts)
                {
                  loadMask.hide();
                  Ext.Msg.show({
                    title: 'Error!',
                    msg: conn.responseText,
                    icon: Ext.Msg.ERROR,
                    buttons: Ext.Msg.OK
                  });
                }, 
                success: function(conn, response, options, eOpts)
                {
                  var result = Ext.JSON.decode(conn.responseText, true);
                  if (!result)
                  {
                    loadMask.hide();
                    result = {};
                    result.success = false;
                    result.msg = conn.responseText;
                  } 
                  if (result.success)
                  {
                     Ext.getStore('officercalltypes').loadData(result['Officer_Call_Type']);
                     loadMask.hide();
                  }     
                  else
                  {
                    if (result.msg == "no_session")
                                window.location="index.html";
                    else
                    {
                      loadMask.hide();
                      Ext.Msg.show({
                        title: 'Fail!',
                        msg: result.msg,
                        icon: Ext.Msg.ERROR,
                        buttons: Ext.Msg.OK
                    });
                    }
                  }             
                }  
              });

         }
         },null, false, '', null);


           
    },  
//Click of the Edit button to edit an Officer Call Type
    onButtonClickeditOffCallType: function(button, e, options) {

       var me = this;
       var Call_Type = "";
       var g = Ext.getCmp('OfficerCallTypeGrid'); 
       if (!g.getSelectionModel().hasSelection())
       {
          Ext.Msg.show({
            title: 'Error!',
            msg: 'You must first select an officer call type from the grid.',
            icon: Ext.Msg.ERROR,
            buttons: Ext.Msg.OK
          });             
       }
       else
       {
         var rec = g.getSelectionModel().getSelection()[0]; 
         var Call_Type_ID = rec.get("Call_Type_ID");
         Call_Type = rec.get("Call_Type");
         Ext.Msg.prompt('Edit Officer Call Type', 'Officer Call Type:', function(btn, text){
         if (btn == 'ok'){

             if (!me.validatenotblank(text.trim()))
             {
                Ext.Msg.show({
                title: 'Error!',
                msg: 'Invalid Officer Call Type.  The Officer Call Type can not be blank!',
                icon: Ext.Msg.ERROR,
                buttons: Ext.Msg.OK
                }); 
                return;
             }

              var  Call_Type = text.trim();
              var loadMask = new Ext.LoadMask(Ext.getBody(), {


              msg: 'Please Wait...'});
              loadMask.show();

              Ext.Ajax.request({
                url: 'app/php/accessOfficerCallType.php',
                params:  
                {  Action: 'U',
                   Call_Type_ID: Call_Type_ID, 
                   Call_Type: Call_Type },
                failure: function(conn, response, options, eOpts)
                {
                  loadMask.hide();
                  Ext.Msg.show({
                    title: 'Error!',
                    msg: conn.responseText,
                    icon: Ext.Msg.ERROR,
                    buttons: Ext.Msg.OK
                  });
                }, 
                success: function(conn, response, options, eOpts)
                {
                  var result = Ext.JSON.decode(conn.responseText, true);
                  if (!result)
                  {
                    loadMask.hide();
                    result = {};
                    result.success = false;
                    result.msg = conn.responseText;
                  } 
                  if (result.success)
                  {
                     Ext.getStore('officercalltypes').loadData(result['Officer_Call_Type']);
                     loadMask.hide();
                  }     
                  else
                  {
                    if (result.msg == "no_session")
                                window.location="index.html";
                    else
                    {
                      loadMask.hide();
                      Ext.Msg.show({
                        title: 'Fail!',
                        msg: result.msg,
                        icon: Ext.Msg.ERROR,
                        buttons: Ext.Msg.OK
                    });
                    }
                  }             
                }  
              });

           }
           },null, false, Call_Type, null);
         
       }

           
    },  //onButtonClickeditOffCallType

//Click of the delete button for an Officer Call Type
    onButtonClickdeleteOffCallType: function(button, e, options) {

       var Call_Type = "";
       var g = Ext.getCmp('OfficerCallTypeGrid'); 
       if (!g.getSelectionModel().hasSelection())
       {
          Ext.Msg.show({
            title: 'Error!',
            msg: 'You must first select an Officer Call Type from the grid.',
            icon: Ext.Msg.ERROR,
            buttons: Ext.Msg.OK
          });             
       }
       else
       {
         var rec = g.getSelectionModel().getSelection()[0]; 
         var Call_Type_ID = rec.get("Call_Type_ID");
         Call_Type = rec.get("Call_Type");

         Ext.MessageBox.confirm('Please Confirm',
          'Are you sure you would like to delete this Officer Call Type?',
          function(choice)
          { 
           if( choice == 'yes')
           {

              var loadMask = new Ext.LoadMask(Ext.getBody(), {

              msg: 'Please Wait...'});
              loadMask.show();

              Ext.Ajax.request({
                url: 'app/php/accessOfficerCallType.php',
                params:  
                {  Action: 'D',
                   Call_Type_ID: Call_Type_ID, 
                   Call_Type: Call_Type },
                failure: function(conn, response, options, eOpts)
                {
                  loadMask.hide();
                  Ext.Msg.show({
                    title: 'Error!',
                    msg: conn.responseText,
                    icon: Ext.Msg.ERROR,
                    buttons: Ext.Msg.OK
                  });
                }, 
                success: function(conn, response, options, eOpts)
                {
                  loadMask.hide();
                  var result = Ext.JSON.decode(conn.responseText, true);
                  if (!result)
                  {
                    result = {};
                    result.success = false;
                    result.msg = conn.responseText;
                  } 
                  if (result.success)
                  {
                     Ext.getStore('officercalltypes').loadData(result['Officer_Call_Type']);
                     loadMask.hide();
                  }     
                  else
                  {
                    if (result.msg == "no_session")
                                window.location="index.html";
                    else
                    {
                      loadMask.hide();
                      Ext.Msg.show({
                        title: 'Fail!',
                        msg: result.msg,
                        icon: Ext.Msg.ERROR,
                        buttons: Ext.Msg.OK
                      });
                    }
                  }             
                }  
              });
            } 
         });          
        }
           
    },  

//Click on Add btn on the DB Main Department grid
    clickDBMaintaddDepartments: function(button, e, options) {

       var me = this;

       Ext.Msg.prompt('Add New Departments', 'Department:', function(btn, text){
         if (btn == 'ok'){

             if (!me.validatenotblank(text.trim()))
             {
                Ext.Msg.show({
                title: 'Error!',
                msg: 'Invalid Department.  The Department can not be blank!',
                icon: Ext.Msg.ERROR,
                buttons: Ext.Msg.OK
                }); 
                return;
             }

              var Department = text.trim();
              var loadMask = new Ext.LoadMask(Ext.getBody(), {


              msg: 'Please Wait...'});
              loadMask.show();

              Ext.Ajax.request({
                url: 'app/php/accessDepartment.php',
                params:  
                {  Action: 'A',
                   Department_ID: '', 
                   Department: Department },
                failure: function(conn, response, options, eOpts)
                {
                  loadMask.hide();
                  Ext.Msg.show({
                    title: 'Error!',
                    msg: conn.responseText,
                    icon: Ext.Msg.ERROR,
                    buttons: Ext.Msg.OK
                  });
                }, 
                success: function(conn, response, options, eOpts)
                {
                  var result = Ext.JSON.decode(conn.responseText, true);
                  if (!result)
                  {
                    loadMask.hide();
                    result = {};
                    result.success = false;
                    result.msg = conn.responseText;
                  } 
                  if (result.success)
                  {
                     Ext.getStore('departments').loadData(result['Officer_Department']);
                     loadMask.hide();
                  }     
                  else
                  {
                    if (result.msg == "no_session")
                                window.location="index.html";
                    else
                    {
                      loadMask.hide();
                      Ext.Msg.show({
                        title: 'Fail!',
                        msg: result.msg,
                        icon: Ext.Msg.ERROR,
                        buttons: Ext.Msg.OK
                    });
                    }
                  }             
                }  
              });

         }
         },null, false, '', null);


           
    },  
//Click of the Edit button to edit a Department
    onButtonClickeditDepartments: function(button, e, options) {

       var me = this;
       var Department = "";
       var g = Ext.getCmp('OfficerDepartmentGrid'); 
       if (!g.getSelectionModel().hasSelection())
       {
          Ext.Msg.show({
            title: 'Error!',
            msg: 'You must first select a department from the grid.',
            icon: Ext.Msg.ERROR,
            buttons: Ext.Msg.OK
          });             
       }
       else
       {
         var rec = g.getSelectionModel().getSelection()[0]; 
         var Department_ID = rec.get("Department_ID");
         Department = rec.get("Department");
         Ext.Msg.prompt('Edit Department', 'Department:', function(btn, text){
         if (btn == 'ok'){

             if (!me.validatenotblank(text.trim()))
             {
                Ext.Msg.show({
                title: 'Error!',
                msg: 'Invalid Department.  The Department can not be blank!',
                icon: Ext.Msg.ERROR,
                buttons: Ext.Msg.OK
                }); 
                return;
             }

              var  Department = text.trim();
              var loadMask = new Ext.LoadMask(Ext.getBody(), {


              msg: 'Please Wait...'});
              loadMask.show();

              Ext.Ajax.request({
                url: 'app/php/accessDepartment.php',
                params:  
                {  Action: 'U',
                   Department_ID: Department_ID, 
                   Department: Department },
                failure: function(conn, response, options, eOpts)
                {
                  loadMask.hide();
                  Ext.Msg.show({
                    title: 'Error!',
                    msg: conn.responseText,
                    icon: Ext.Msg.ERROR,
                    buttons: Ext.Msg.OK
                  });
                }, 
                success: function(conn, response, options, eOpts)
                {
                  var result = Ext.JSON.decode(conn.responseText, true);
                  if (!result)
                  {
                    loadMask.hide();
                    result = {};
                    result.success = false;
                    result.msg = conn.responseText;
                  } 
                  if (result.success)
                  {
                     Ext.getStore('departments').loadData(result['Officer_Department']);
                     loadMask.hide();
                  }     
                  else
                  {
                    if (result.msg == "no_session")
                                window.location="index.html";
                    else
                    {
                      loadMask.hide();
                      Ext.Msg.show({
                        title: 'Fail!',
                        msg: result.msg,
                        icon: Ext.Msg.ERROR,
                        buttons: Ext.Msg.OK
                    });
                    }
                  }             
                }  
              });

           }
           },null, false, Department, null);
         
       }

           
    },  

//Click of the delete button for a Department
    onButtonClickdeleteDepartments: function(button, e, options) {

       var Department = "";
       var g = Ext.getCmp('OfficerDepartmentGrid'); 
       if (!g.getSelectionModel().hasSelection())
       {
          Ext.Msg.show({
            title: 'Error!',
            msg: 'You must first select a Department from the grid.',
            icon: Ext.Msg.ERROR,
            buttons: Ext.Msg.OK
          });             
       }
       else
       {
         var rec = g.getSelectionModel().getSelection()[0]; 
         var Department_ID = rec.get("Department_ID");
         Department = rec.get("Department");

         Ext.MessageBox.confirm('Please Confirm',
          'Are you sure you would like to delete this Department?',
          function(choice)
          { 
           if( choice == 'yes')
           {

              var loadMask = new Ext.LoadMask(Ext.getBody(), {

              msg: 'Please Wait...'});
              loadMask.show();

              Ext.Ajax.request({
                url: 'app/php/accessDepartment.php',
                params:  
                {  Action: 'D',
                   Department_ID: Department_ID, 
                   Department: Department },
                failure: function(conn, response, options, eOpts)
                {
                  loadMask.hide();
                  Ext.Msg.show({
                    title: 'Error!',
                    msg: conn.responseText,
                    icon: Ext.Msg.ERROR,
                    buttons: Ext.Msg.OK
                  });
                }, 
                success: function(conn, response, options, eOpts)
                {
                  loadMask.hide();
                  var result = Ext.JSON.decode(conn.responseText, true);
                  if (!result)
                  {
                    result = {};
                    result.success = false;
                    result.msg = conn.responseText;
                  } 
                  if (result.success)
                  {
                      Ext.getStore('departments').loadData(result['Officer_Department']);
                    loadMask.hide();
                  }     
                  else
                  {
                    if (result.msg == "no_session")
                                window.location="index.html";
                    else
                    {
                      loadMask.hide();
                      Ext.Msg.show({
                        title: 'Fail!',
                        msg: result.msg,
                        icon: Ext.Msg.ERROR,
                        buttons: Ext.Msg.OK
                      });
                    }
                  }             
                }  
              });
            } 
         });          
        }
           
    },  
//Click on Add btn on the DB Main Department Type grid
    clickDBMaintaddOffDeptType: function(button, e, options) {

       var me = this;

       Ext.Msg.prompt('Add New Department Type', 'Department Type:', function(btn, text){
         if (btn == 'ok'){

             if (!me.validatenotblank(text.trim()))
             {
                Ext.Msg.show({
                title: 'Error!',
                msg: 'Invalid Department Type.  The Department Type can not be blank!',
                icon: Ext.Msg.ERROR,
                buttons: Ext.Msg.OK
                }); 
                return;
             }

              var Dept_Type = text.trim();
              var loadMask = new Ext.LoadMask(Ext.getBody(), {


              msg: 'Please Wait...'});
              loadMask.show();

              Ext.Ajax.request({
                url: 'app/php/accessOffDeptType.php',
                params:  
                {  Action: 'A',
                   Dept_Type_ID: '', 
                   Dept_Type: Dept_Type },
                failure: function(conn, response, options, eOpts)
                {
                  loadMask.hide();
                  Ext.Msg.show({
                    title: 'Error!',
                    msg: conn.responseText,
                    icon: Ext.Msg.ERROR,
                    buttons: Ext.Msg.OK
                  });
                }, 
                success: function(conn, response, options, eOpts)
                {
                  var result = Ext.JSON.decode(conn.responseText, true);
                  if (!result)
                  {
                    loadMask.hide();
                    result = {};
                    result.success = false;
                    result.msg = conn.responseText;
                  } 
                  if (result.success)
                  {
                     Ext.getStore('depttypes').loadData(result['Officer_Dept_Type']);
                     loadMask.hide();
                  }     
                  else
                  {
                    if (result.msg == "no_session")
                                window.location="index.html";
                    else
                    {
                      loadMask.hide();
                      Ext.Msg.show({
                        title: 'Fail!',
                        msg: result.msg,
                        icon: Ext.Msg.ERROR,
                        buttons: Ext.Msg.OK
                    });
                    }
                  }             
                }  
              });

         }
         },null, false, '', null);


           
    },  
//Click of the Edit button to edit a Department Type
    onButtonClickeditOffDeptType: function(button, e, options) {

       var me = this;
       var Dept_Type = "";
       var g = Ext.getCmp('OfficerDeptTypeGrid'); 
       if (!g.getSelectionModel().hasSelection())
       {
          Ext.Msg.show({
            title: 'Error!',
            msg: 'You must first select a department type from the grid.',
            icon: Ext.Msg.ERROR,
            buttons: Ext.Msg.OK
          });             
       }
       else
       {
         var rec = g.getSelectionModel().getSelection()[0]; 
         var Dept_Type_ID = rec.get("Dept_Type_ID");
         Dept_Type = rec.get("Dept_Type");
         Ext.Msg.prompt('Edit Department Type', 'Department Type:', function(btn, text){
         if (btn == 'ok'){

             if (!me.validatenotblank(text.trim()))
             {
                Ext.Msg.show({
                title: 'Error!',
                msg: 'Invalid Department Type.  The Department Type can not be blank!',
                icon: Ext.Msg.ERROR,
                buttons: Ext.Msg.OK
                }); 
                return;
             }

              var Dept_Type = text.trim();
              var loadMask = new Ext.LoadMask(Ext.getBody(), {


              msg: 'Please Wait...'});
              loadMask.show();

              Ext.Ajax.request({
                url: 'app/php/accessOffDeptType.php',
                params:  
                {  Action: 'U',
                   Dept_Type_ID: Dept_Type_ID, 
                   Dept_Type: Dept_Type },
                failure: function(conn, response, options, eOpts)
                {
                  loadMask.hide();
                  Ext.Msg.show({
                    title: 'Error!',
                    msg: conn.responseText,
                    icon: Ext.Msg.ERROR,
                    buttons: Ext.Msg.OK
                  });
                }, 
                success: function(conn, response, options, eOpts)
                {
                  var result = Ext.JSON.decode(conn.responseText, true);
                  if (!result)
                  {
                    loadMask.hide();
                    result = {};
                    result.success = false;
                    result.msg = conn.responseText;
                  } 
                  if (result.success)
                  {
                     Ext.getStore('depttypes').loadData(result['Officer_Dept_Type']);
                     loadMask.hide();
                  }     
                  else
                  {
                    if (result.msg == "no_session")
                                window.location="index.html";
                    else
                    {
                      loadMask.hide();
                      Ext.Msg.show({
                        title: 'Fail!',
                        msg: result.msg,
                        icon: Ext.Msg.ERROR,
                        buttons: Ext.Msg.OK
                    });
                    }
                  }             
                }  
              });

           }
           },null, false, Dept_Type, null);
         
       }

           
    },  

//Click of the delete button for a department type
    onButtonClickdeleteDeptType: function(button, e, options) {

       var Dept_Type = "";
       var g = Ext.getCmp('OfficerDeptTypeGrid'); 
       if (!g.getSelectionModel().hasSelection())
       {
          Ext.Msg.show({
            title: 'Error!',
            msg: 'You must first select a Department Type from the grid.',
            icon: Ext.Msg.ERROR,
            buttons: Ext.Msg.OK
          });             
       }
       else
       {
         var rec = g.getSelectionModel().getSelection()[0]; 
         var Dept_Type_ID = rec.get("Dept_Type_ID");
         Dept_Type = rec.get("Dept_Type");

         Ext.MessageBox.confirm('Please Confirm',
          'Are you sure you would like to delete this Department Type?',
          function(choice)
          { 
           if( choice == 'yes')
           {

              var loadMask = new Ext.LoadMask(Ext.getBody(), {

              msg: 'Please Wait...'});
              loadMask.show();

              Ext.Ajax.request({
                url: 'app/php/accessOffDeptType.php',
                params:  
                {  Action: 'D',
                   Dept_Type_ID: Dept_Type_ID, 
                   Dept_Type: Dept_Type_ID },
                failure: function(conn, response, options, eOpts)
                {
                  loadMask.hide();
                  Ext.Msg.show({
                    title: 'Error!',
                    msg: conn.responseText,
                    icon: Ext.Msg.ERROR,
                    buttons: Ext.Msg.OK
                  });
                }, 
                success: function(conn, response, options, eOpts)
                {
                  loadMask.hide();
                  var result = Ext.JSON.decode(conn.responseText, true);
                  if (!result)
                  {
                    result = {};
                    result.success = false;
                    result.msg = conn.responseText;
                  } 
                  if (result.success)
                  {
                     Ext.getStore('depttypes').loadData(result['Officer_Dept_Type']);
                     loadMask.hide();
                  }     
                  else
                  {
                    if (result.msg == "no_session")
                                window.location="index.html";
                    else
                    {
                      loadMask.hide();
                      Ext.Msg.show({
                        title: 'Fail!',
                        msg: result.msg,
                        icon: Ext.Msg.ERROR,
                        buttons: Ext.Msg.OK
                      });
                    }
                  }             
                }  
              });
            } 
         });          
        }
           
    },  

//Click on Add btn on the DB Main Officer Status grid
    clickDBMaintaddOffStatus: function(button, e, options) {

       var me = this;

       Ext.Msg.prompt('Add New Officer Status', 'Officer Status:', function(btn, text){
         if (btn == 'ok'){

             if (!me.validatenotblank(text.trim()))
             {
                Ext.Msg.show({
                title: 'Error!',
                msg: 'Invalid Officer Status.  The Officer Status can not be blank!',
                icon: Ext.Msg.ERROR,
                buttons: Ext.Msg.OK
                }); 
                return;
             }

              var Status = text.trim();
              var loadMask = new Ext.LoadMask(Ext.getBody(), {


              msg: 'Please Wait...'});
              loadMask.show();

              Ext.Ajax.request({
                url: 'app/php/accessOffStatus.php',
                params:  
                {  Action: 'A',
                   Status_ID: '', 
                   Status: Status },
                failure: function(conn, response, options, eOpts)
                {
                  loadMask.hide();
                  Ext.Msg.show({
                    title: 'Error!',
                    msg: conn.responseText,
                    icon: Ext.Msg.ERROR,
                    buttons: Ext.Msg.OK
                  });
                }, 
                success: function(conn, response, options, eOpts)
                {
                  var result = Ext.JSON.decode(conn.responseText, true);
                  if (!result)
                  {
                    loadMask.hide();
                    result = {};
                    result.success = false;
                    result.msg = conn.responseText;
                  } 
                  if (result.success)
                  {
                     Ext.getStore('officerstatuss').loadData(result['Officer_Status']);
                     loadMask.hide();
                  }     
                  else
                  {
                    if (result.msg == "no_session")
                                window.location="index.html";
                    else
                    {
                      loadMask.hide();
                      Ext.Msg.show({
                        title: 'Fail!',
                        msg: result.msg,
                        icon: Ext.Msg.ERROR,
                        buttons: Ext.Msg.OK
                    });
                    }
                  }             
                }  
              });

         }
         },null, false, '', null);


           
    },  
//Click of the Edit button to edit an officer status
    onButtonClickeditOffStatus: function(button, e, options) {

       var me = this;
       var Status = "";
       var g = Ext.getCmp('OfficerStatusGrid'); 
       if (!g.getSelectionModel().hasSelection())
       {
          Ext.Msg.show({
            title: 'Error!',
            msg: 'You must first select an Officer Status from the grid.',
            icon: Ext.Msg.ERROR,
            buttons: Ext.Msg.OK
          });             
       }
       else
       {
         var rec = g.getSelectionModel().getSelection()[0]; 
         var Status_ID = rec.get("Status_ID");
         Status = rec.get("Status");
         Ext.Msg.prompt('Edit Officer Status', 'Officer Status:', function(btn, text){
         if (btn == 'ok'){

             if (!me.validatenotblank(text.trim()))
             {
                Ext.Msg.show({
                title: 'Error!',
                msg: 'Invalid Officer Status.  The Officer Status can not be blank!',
                icon: Ext.Msg.ERROR,
                buttons: Ext.Msg.OK
                }); 
                return;
             }

              var Status = text.trim();
              var loadMask = new Ext.LoadMask(Ext.getBody(), {


              msg: 'Please Wait...'});
              loadMask.show();

              Ext.Ajax.request({
                url: 'app/php/accessOffStatus.php',
                params:  
                {  Action: 'U',
                   Status_ID: Status_ID, 
                   Status: Status },
                failure: function(conn, response, options, eOpts)
                {
                  loadMask.hide();
                  Ext.Msg.show({
                    title: 'Error!',
                    msg: conn.responseText,
                    icon: Ext.Msg.ERROR,
                    buttons: Ext.Msg.OK
                  });
                }, 
                success: function(conn, response, options, eOpts)
                {
                  var result = Ext.JSON.decode(conn.responseText, true);
                  if (!result)
                  {
                    loadMask.hide();
                    result = {};
                    result.success = false;
                    result.msg = conn.responseText;
                  } 
                  if (result.success)
                  {
                     Ext.getStore('officerstatuss').loadData(result['Officer_Status']);
                     loadMask.hide();
                  }     
                  else
                  {
                    if (result.msg == "no_session")
                                window.location="index.html";
                    else
                    {
                      loadMask.hide();
                      Ext.Msg.show({
                        title: 'Fail!',
                        msg: result.msg,
                        icon: Ext.Msg.ERROR,
                        buttons: Ext.Msg.OK
                    });
                    }
                  }             
                }  
              });

           }
           },null, false, Status, null);
         
       }

           
    },  

//Click of the delete button for an Officer Status 
    onButtonClickdeleteOffStatus: function(button, e, options) {

       var Status = "";
       var g = Ext.getCmp('OfficerStatusGrid'); 
       if (!g.getSelectionModel().hasSelection())
       {
          Ext.Msg.show({
            title: 'Error!',
            msg: 'You must first select an Officer Status from the grid.',
            icon: Ext.Msg.ERROR,
            buttons: Ext.Msg.OK
          });             
       }
       else
       {
         var rec = g.getSelectionModel().getSelection()[0]; 
         var Status_ID = rec.get("Status_ID");
         Status = rec.get("Status");

         Ext.MessageBox.confirm('Please Confirm',
          'Are you sure you would like to delete this Officer Status?',
          function(choice)
          { 
           if( choice == 'yes')
           {

              var loadMask = new Ext.LoadMask(Ext.getBody(), {

              msg: 'Please Wait...'});
              loadMask.show();

              Ext.Ajax.request({
                url: 'app/php/accessOffStatus.php',
                params:  
                {  Action: 'D',
                   Status_ID: Status_ID, 
                   Status: Status },
                failure: function(conn, response, options, eOpts)
                {
                  loadMask.hide();
                  Ext.Msg.show({
                    title: 'Error!',
                    msg: conn.responseText,
                    icon: Ext.Msg.ERROR,
                    buttons: Ext.Msg.OK
                  });
                }, 
                success: function(conn, response, options, eOpts)
                {
                  loadMask.hide();
                  var result = Ext.JSON.decode(conn.responseText, true);
                  if (!result)
                  {
                    result = {};
                    result.success = false;
                    result.msg = conn.responseText;
                  } 
                  if (result.success)
                  {
                     Ext.getStore('officerstatuss').loadData(result['Officer_Status']);
                     loadMask.hide();
                  }     
                  else
                  {
                    if (result.msg == "no_session")
                                window.location="index.html";
                    else
                    {
                      loadMask.hide();
                      Ext.Msg.show({
                        title: 'Fail!',
                        msg: result.msg,
                        icon: Ext.Msg.ERROR,
                        buttons: Ext.Msg.OK
                      });
                    }
                  }             
                }  
              });
            } 
         });          
        }
           
    },  

//Click on Add btn on the DB Main Race grid
    clickDBMaintaddRace: function(button, e, options) {

       var me = this;

       Ext.Msg.prompt('Add New Race', 'Race:', function(btn, text){
         if (btn == 'ok'){

             if (!me.validatenotblank(text.trim()))
             {
                Ext.Msg.show({
                title: 'Error!',
                msg: 'Invalid Race.  The Race can not be blank!',
                icon: Ext.Msg.ERROR,
                buttons: Ext.Msg.OK
                }); 
                return;
             }

              var  Race = text.trim();
              var loadMask = new Ext.LoadMask(Ext.getBody(), {


              msg: 'Please Wait...'});
              loadMask.show();

              Ext.Ajax.request({
                url: 'app/php/accessRace.php',
                params:  
                {  Action: 'A',
                   Race_ID: '', 
                   Race: Race },
                failure: function(conn, response, options, eOpts)
                {
                  loadMask.hide();
                  Ext.Msg.show({
                    title: 'Error!',
                    msg: conn.responseText,
                    icon: Ext.Msg.ERROR,
                    buttons: Ext.Msg.OK
                  });
                }, 
                success: function(conn, response, options, eOpts)
                {
                  var result = Ext.JSON.decode(conn.responseText, true);
                  if (!result)
                  {
                    loadMask.hide();
                    result = {};
                    result.success = false;
                    result.msg = conn.responseText;
                  } 
                  if (result.success)
                  {
                     Ext.getStore('Races').loadData(result['Race']);
                     loadMask.hide();
                  }     
                  else
                  {
                    if (result.msg == "no_session")
                                window.location="index.html";
                    else
                    {
                      loadMask.hide();
                      Ext.Msg.show({
                        title: 'Fail!',
                        msg: result.msg,
                        icon: Ext.Msg.ERROR,
                        buttons: Ext.Msg.OK
                    });
                    }
                  }             
                }  
              });

         }
         },null, false, '', null);


           
    },  
//Click of the Edit button to edit a Race
    onButtonClickeditRaces: function(button, e, options) {

       var me = this;
       var Race = "";
       var g = Ext.getCmp('RaceGrid'); 
       if (!g.getSelectionModel().hasSelection())
       {
          Ext.Msg.show({
            title: 'Error!',
            msg: 'You must first select a Race from the grid.',
            icon: Ext.Msg.ERROR,
            buttons: Ext.Msg.OK
          });             
       }
       else
       {
         var rec = g.getSelectionModel().getSelection()[0]; 
         var Race_ID = rec.get("Race_ID");
         Race = rec.get("Race");
         Ext.Msg.prompt('Edit Race', 'Race:', function(btn, text){
         if (btn == 'ok'){

             if (!me.validatenotblank(text.trim()))
             {
                Ext.Msg.show({
                title: 'Error!',
                msg: 'Invalid Race.  The Race can not be blank!',
                icon: Ext.Msg.ERROR,
                buttons: Ext.Msg.OK
                }); 
                return;
             }

              var Race = text.trim();
              var loadMask = new Ext.LoadMask(Ext.getBody(), {


              msg: 'Please Wait...'});
              loadMask.show();

              Ext.Ajax.request({
                url: 'app/php/accessRace.php',
                params:  
                {  Action: 'U',
                   Race_ID: Race_ID, 
                   Race: Race },
                failure: function(conn, response, options, eOpts)
                {
                  loadMask.hide();
                  Ext.Msg.show({
                    title: 'Error!',
                    msg: conn.responseText,
                    icon: Ext.Msg.ERROR,
                    buttons: Ext.Msg.OK
                  });
                }, 
                success: function(conn, response, options, eOpts)
                {
                  var result = Ext.JSON.decode(conn.responseText, true);
                  if (!result)
                  {
                    loadMask.hide();
                    result = {};
                    result.success = false;
                    result.msg = conn.responseText;
                  } 
                  if (result.success)
                  {
                     Ext.getStore('Races').loadData(result['Race']);
                     loadMask.hide();
                  }     
                  else
                  {
                    if (result.msg == "no_session")
                                window.location="index.html";
                    else
                    {
                      loadMask.hide();
                      Ext.Msg.show({
                        title: 'Fail!',
                        msg: result.msg,
                        icon: Ext.Msg.ERROR,
                        buttons: Ext.Msg.OK
                    });
                    }
                  }             
                }  
              });

           }
           },null, false, Race, null);
         
       }

           
    },  

//Click of the delete button for a Race
    onButtonClickdeleteRaces: function(button, e, options) {

       var Race = "";
       var g = Ext.getCmp('RaceGrid'); 
       if (!g.getSelectionModel().hasSelection())
       {
          Ext.Msg.show({
            title: 'Error!',
            msg: 'You must first select a Race from the grid.',
            icon: Ext.Msg.ERROR,
            buttons: Ext.Msg.OK
          });             
       }
       else
       {
         var rec = g.getSelectionModel().getSelection()[0]; 
         var Race_ID = rec.get("Race_ID");
         Race = rec.get("Race");

         Ext.MessageBox.confirm('Please Confirm',
          'Are you sure you would like to delete this Race?',
          function(choice)
          { 
           if( choice == 'yes')
           {

              var loadMask = new Ext.LoadMask(Ext.getBody(), {

              msg: 'Please Wait...'});
              loadMask.show();

              Ext.Ajax.request({
                url: 'app/php/accessRace.php',
                params:  
                {  Action: 'D',
                   Race_ID: Race_ID, 
                   Race: Race },
                failure: function(conn, response, options, eOpts)
                {
                  loadMask.hide();
                  Ext.Msg.show({
                    title: 'Error!',
                    msg: conn.responseText,
                    icon: Ext.Msg.ERROR,
                    buttons: Ext.Msg.OK
                  });
                }, 
                success: function(conn, response, options, eOpts)
                {
                  loadMask.hide();
                  var result = Ext.JSON.decode(conn.responseText, true);
                  if (!result)
                  {
                    result = {};
                    result.success = false;
                    result.msg = conn.responseText;
                  } 
                  if (result.success)
                  {
                     Ext.getStore('Races').loadData(result['Race']);
                     loadMask.hide();
                  }     
                  else
                  {
                    if (result.msg == "no_session")
                                window.location="index.html";
                    else
                    {
                      loadMask.hide();
                      Ext.Msg.show({
                        title: 'Fail!',
                        msg: result.msg,
                        icon: Ext.Msg.ERROR,
                        buttons: Ext.Msg.OK
                      });
                    }
                  }             
                }  
              });
            } 
         });          
        }
           
    },  
//Click on Add btn on the DB Main Source Type grid
    clickDBMaintaddSourceType: function(button, e, options) {

       var me = this;

       Ext.Msg.prompt('Add New Source Type', 'Source Type:', function(btn, text){
         if (btn == 'ok'){

             if (!me.validatenotblank(text.trim()))
             {
                Ext.Msg.show({
                title: 'Error!',
                msg: 'Invalid Source Type.  The Source Type can not be blank!',
                icon: Ext.Msg.ERROR,
                buttons: Ext.Msg.OK
                }); 
                return;
             }

              var Source = text.trim();
              var loadMask = new Ext.LoadMask(Ext.getBody(), {


              msg: 'Please Wait...'});
              loadMask.show();

              Ext.Ajax.request({
                url: 'app/php/accessSourceType.php',
                params:  
                {  Action: 'A',
                   Source_Type_ID: '', 
                   Source: Source },
                failure: function(conn, response, options, eOpts)
                {
                  loadMask.hide();
                  Ext.Msg.show({
                    title: 'Error!',
                    msg: conn.responseText,
                    icon: Ext.Msg.ERROR,
                    buttons: Ext.Msg.OK
                  });
                }, 
                success: function(conn, response, options, eOpts)
                {
                  var result = Ext.JSON.decode(conn.responseText, true);
                  if (!result)
                  {
                    loadMask.hide();
                    result = {};
                    result.success = false;
                    result.msg = conn.responseText;
                  } 
                  if (result.success)
                  {
                     Ext.getStore('sourcetypes').loadData(result['Source_Type']);
                     loadMask.hide();
                  }     
                  else
                  {
                    if (result.msg == "no_session")
                                window.location="index.html";
                    else
                    {
                      loadMask.hide();
                      Ext.Msg.show({
                        title: 'Fail!',
                        msg: result.msg,
                        icon: Ext.Msg.ERROR,
                        buttons: Ext.Msg.OK
                    });
                    }
                  }             
                }  
              });

         }
         },null, false, '', null);


           
    },  
//Click of the Edit button to edit a Source Type
    onButtonClickeditSourceType: function(button, e, options) {

       var me = this;
       var Source = "";
       var g = Ext.getCmp('SourceTypeGrid'); 
       if (!g.getSelectionModel().hasSelection())
       {
          Ext.Msg.show({
            title: 'Error!',
            msg: 'You must first select a Souce Type from the grid.',
            icon: Ext.Msg.ERROR,
            buttons: Ext.Msg.OK
          });             
       }
       else
       {
         var rec = g.getSelectionModel().getSelection()[0]; 
         var Source_Type_ID = rec.get("Source_Type_ID");
         Source = rec.get("Source");
         Ext.Msg.prompt('Edit Source Type', 'Source Type:', function(btn, text){
         if (btn == 'ok'){

             if (!me.validatenotblank(text.trim()))
             {
                Ext.Msg.show({
                title: 'Error!',
                msg: 'Invalid Source Type.  The Source Type can not be blank!',
                icon: Ext.Msg.ERROR,
                buttons: Ext.Msg.OK
                }); 
                return;
             }

              var  Source = text.trim();
              var loadMask = new Ext.LoadMask(Ext.getBody(), {


              msg: 'Please Wait...'});
              loadMask.show();

              Ext.Ajax.request({
                url: 'app/php/accessSourceType.php',
                params:  
                {  Action: 'U',
                   Source_Type_ID: Source_Type_ID, 
                   Source: Source },
                failure: function(conn, response, options, eOpts)
                {
                  loadMask.hide();
                  Ext.Msg.show({
                    title: 'Error!',
                    msg: conn.responseText,
                    icon: Ext.Msg.ERROR,
                    buttons: Ext.Msg.OK
                  });
                }, 
                success: function(conn, response, options, eOpts)
                {
                  var result = Ext.JSON.decode(conn.responseText, true);
                  if (!result)
                  {
                    loadMask.hide();
                    result = {};
                    result.success = false;
                    result.msg = conn.responseText;
                  } 
                  if (result.success)
                  {
                     Ext.getStore('sourcetypes').loadData(result['Source_Type']);
                     loadMask.hide();
                  }     
                  else
                  {
                    if (result.msg == "no_session")
                                window.location="index.html";
                    else
                    {
                      loadMask.hide();
                      Ext.Msg.show({
                        title: 'Fail!',
                        msg: result.msg,
                        icon: Ext.Msg.ERROR,
                        buttons: Ext.Msg.OK
                    });
                    }
                  }             
                }  
              });

           }
           },null, false, Source, null);
         
       }

           
    },  

//Click of the delete button for a Source Type
    onButtonClickdeleteSourceTye: function(button, e, options) {

       var Source = "";
       var g = Ext.getCmp('SourceTypeGrid'); 
       if (!g.getSelectionModel().hasSelection())
       {
          Ext.Msg.show({
            title: 'Error!',
            msg: 'You must first select a Source Type from the grid.',
            icon: Ext.Msg.ERROR,
            buttons: Ext.Msg.OK
          });             
       }
       else
       {
         var rec = g.getSelectionModel().getSelection()[0]; 
         var Source_Type_ID = rec.get("Source_Type_ID");
         Source = rec.get("Source");

         Ext.MessageBox.confirm('Please Confirm',
          'Are you sure you would like to delete this Source Type?',
          function(choice)
          { 
           if( choice == 'yes')
           {

              var loadMask = new Ext.LoadMask(Ext.getBody(), {

              msg: 'Please Wait...'});
              loadMask.show();

              Ext.Ajax.request({
                url: 'app/php/accessSourceType.php',
                params:  
                {  Action: 'D',
                   Source_Type_ID: Source_Type_ID, 
                   Source: Source },
                failure: function(conn, response, options, eOpts)
                {
                  loadMask.hide();
                  Ext.Msg.show({
                    title: 'Error!',
                    msg: conn.responseText,
                    icon: Ext.Msg.ERROR,
                    buttons: Ext.Msg.OK
                  });
                }, 
                success: function(conn, response, options, eOpts)
                {
                  loadMask.hide();
                  var result = Ext.JSON.decode(conn.responseText, true);
                  if (!result)
                  {
                    result = {};
                    result.success = false;
                    result.msg = conn.responseText;
                  } 
                  if (result.success)
                  {
                     Ext.getStore('sourcetypes').loadData(result['Source_Type']);
                     loadMask.hide();
                  }     
                  else
                  {
                    if (result.msg == "no_session")
                                window.location="index.html";
                    else
                    {
                      loadMask.hide();
                      Ext.Msg.show({
                        title: 'Fail!',
                        msg: result.msg,
                        icon: Ext.Msg.ERROR,
                        buttons: Ext.Msg.OK
                      });
                    }
                  }             
                }  
              });
            } 
         });          
        }
           
    },  
//Click on the suspect add button from DBMaint page
    clickDBaddsuspectbtn: function(button, e, options) {

           var offaddwin = new Ext.Window({
           id:'winsusadd',
           layout: 'fit',
           width: 410,
           height: 300,
           modal: true,
           title: 'Add Subject',
              items: [
              {
                  xtype: 'addsuspect'
              }]
             });
           Ext.getCmp('sus_add_Action').setValue("A");
//Adding new officer from officer incident grid
           Ext.getCmp('sus_add_Function').setValue("D");  
           Ext.getCmp('sus_add_suspectID').setValue(""); 
           offaddwin.show(); 

                           
    },

//Click on the edit suspect details button from DB maintenance
    clickDBeditsuspectbtn: function(button, e, options) {


       var me = this;
       var g = Ext.getCmp('SubjectGrid'); 
       if (!g.getSelectionModel().hasSelection())
       {
          Ext.Msg.show({
            title: 'Error!',
            msg: 'You must first select a subject from the grid.',
            icon: Ext.Msg.ERROR,
            buttons: Ext.Msg.OK
          });             
       }
       else
       {
           var offaddwin = new Ext.Window({
           id:'winsusadd',
           layout: 'fit',
           width: 410,
           height: 370,
           modal: true,
           title: 'Edit Subject',
              items: [
              {
                  xtype: 'addsuspect'
              }]
             });

            var rec = g.getSelectionModel().getSelection()[0]; 
            Ext.getCmp('sus_add_Action').setValue("U");
//Adding new subject from subject grid
            Ext.getCmp('sus_add_Function').setValue("D");  
            Ext.getCmp('sus_add_suspectID').setValue(rec.get("Suspect_ID"));  
            Ext.getCmp('sus_name').setValue(rec.get("Suspect_Name"));  
  
            var offgenderM = Ext.getCmp('susgenderM');            
            var offgenderF = Ext.getCmp('susgenderF');
            var gender = rec.get("Gender");
            if (gender == "M")
               offgenderM.setValue(true);
            else            
               offgenderF.setValue(true);

  
            var racename = rec.get("Race")
            var racemodel = Ext.getStore('Races').findRecord('Race', racename);    
            var race_id = racemodel.get('Race_ID')
            Ext.getCmp('sus_race').setValue(race_id);  
            

            offaddwin.show();
       }

                           
    },

//Click of the delete button for a Subject from the Db Main grid
    onButtonClickdeleteSubjects: function(button, e, options) {

       var g = Ext.getCmp('SubjectGrid'); 
       if (!g.getSelectionModel().hasSelection())
       {
          Ext.Msg.show({
            title: 'Error!',
            msg: 'You must first select a subject from the grid.',
            icon: Ext.Msg.ERROR,
            buttons: Ext.Msg.OK
          });             
       }
       else
       {
         var rec = g.getSelectionModel().getSelection()[0]; 
         var Suspect_ID = rec.get("Suspect_ID");

         Ext.MessageBox.confirm('Please Confirm',
          'Are you sure you would like to delete this Subject?',
          function(choice)
          { 
           if( choice == 'yes')
           {

              var loadMask = new Ext.LoadMask(Ext.getBody(), {

              msg: 'Please Wait...'});
              loadMask.show();

              Ext.Ajax.request({
                url: 'app/php/accessSubjects.php',
                params:  
                {
                        Action: 'D',
                        Function: 'D',
			Suspect_Name: '',
			Gender: '',
			Race_ID: '',
                        Suspect_ID: Suspect_ID
                },
                failure: function(conn, response, options, eOpts)
                {
                  loadMask.hide();
                  Ext.Msg.show({
                    title: 'Error!',
                    msg: conn.responseText,
                    icon: Ext.Msg.ERROR,
                    buttons: Ext.Msg.OK
                  });
                }, 
                success: function(conn, response, options, eOpts)
                {
                  loadMask.hide();
                  var result = Ext.JSON.decode(conn.responseText, true);
                  if (!result)
                  {
                    result = {};
                    result.success = false;
                    result.msg = conn.responseText;
                  } 
                  if (result.success)
                  {
                     Ext.getStore('suspect_search').loadData(result['suspectsearch']);
                     loadMask.hide();
                  }     
                  else
                  {
                    if (result.msg == "no_session")
                                window.location="index.html";
                    else
                    {
                      loadMask.hide();
                      Ext.Msg.show({
                        title: 'Fail!',
                        msg: result.msg,
                        icon: Ext.Msg.ERROR,
                        buttons: Ext.Msg.OK
                      });
                    }
                  }             
                }  
              });
            } 
         });          
        }
           
    },  


//Click on Add btn on the DB Main Weapons grid
    clickDBMaintaddWeapons: function(button, e, options) {

       var me = this;

       Ext.Msg.prompt('Add New Weaponss', 'Weapon:', function(btn, text){
         if (btn == 'ok'){

             if (!me.validatenotblank(text.trim()))
             {
                Ext.Msg.show({
                title: 'Error!',
                msg: 'Invalid Weapon.  The Weapon can not be blank!',
                icon: Ext.Msg.ERROR,
                buttons: Ext.Msg.OK
                }); 
                return;
             }

              var Weapons_Type = text.trim();
              var loadMask = new Ext.LoadMask(Ext.getBody(), {


              msg: 'Please Wait...'});
              loadMask.show();

              Ext.Ajax.request({
                url: 'app/php/accessWeapons.php',
                params:  
                {  Action: 'A',
                   Weapons_ID: '', 
                   Weapons_Type: Weapons_Type },
                failure: function(conn, response, options, eOpts)
                {
                  loadMask.hide();
                  Ext.Msg.show({
                    title: 'Error!',
                    msg: conn.responseText,
                    icon: Ext.Msg.ERROR,
                    buttons: Ext.Msg.OK
                  });
                }, 
                success: function(conn, response, options, eOpts)
                {
                  var result = Ext.JSON.decode(conn.responseText, true);
                  if (!result)
                  {
                    loadMask.hide();
                    result = {};
                    result.success = false;
                    result.msg = conn.responseText;
                  } 
                  if (result.success)
                  {
                     Ext.getStore('Weapons').loadData(result['Weapons']);
                     loadMask.hide();
                  }     
                  else
                  {
                    if (result.msg == "no_session")
                                window.location="index.html";
                    else
                    {
                      loadMask.hide();
                      Ext.Msg.show({
                        title: 'Fail!',
                        msg: result.msg,
                        icon: Ext.Msg.ERROR,
                        buttons: Ext.Msg.OK
                    });
                    }
                  }             
                }  
              });

         }
         },null, false, '', null);


           
    },  
//Click of the Edit button to edit a Weapon
    onButtonClickeditWeapons: function(button, e, options) {

       var me = this;
       var Weapons_Type = "";
       var g = Ext.getCmp('WeaponsGrid'); 
       if (!g.getSelectionModel().hasSelection())
       {
          Ext.Msg.show({
            title: 'Error!',
            msg: 'You must first select a Weapon from the grid.',
            icon: Ext.Msg.ERROR,
            buttons: Ext.Msg.OK
          });             
       }
       else
       {
         var rec = g.getSelectionModel().getSelection()[0]; 
         var Weapons_ID = rec.get("Weapons_ID");
         Weapons_Type = rec.get("Weapons_Type");
         Ext.Msg.prompt('Edit Weapons', 'Weapon:', function(btn, text){
         if (btn == 'ok'){

             if (!me.validatenotblank(text.trim()))
             {
                Ext.Msg.show({
                title: 'Error!',
                msg: 'Invalid Weapon.  The Weapon can not be blank!',
                icon: Ext.Msg.ERROR,
                buttons: Ext.Msg.OK
                }); 
                return;
             }

              var  Weapons_Type = text.trim();
              var loadMask = new Ext.LoadMask(Ext.getBody(), {


              msg: 'Please Wait...'});
              loadMask.show();

              Ext.Ajax.request({
                url: 'app/php/accessWeapons.php',
                params:  
                {  Action: 'U',
                   Weapons_ID: Weapons_ID, 
                   Weapons_Type: Weapons_Type },
                failure: function(conn, response, options, eOpts)
                {
                  loadMask.hide();
                  Ext.Msg.show({
                    title: 'Error!',
                    msg: conn.responseText,
                    icon: Ext.Msg.ERROR,
                    buttons: Ext.Msg.OK
                  });
                }, 
                success: function(conn, response, options, eOpts)
                {
                  var result = Ext.JSON.decode(conn.responseText, true);
                  if (!result)
                  {
                    loadMask.hide();
                    result = {};
                    result.success = false;
                    result.msg = conn.responseText;
                  } 
                  if (result.success)
                  {
                     Ext.getStore('Weapons').loadData(result['Weapons']);
                     loadMask.hide();
                  }     
                  else
                  {
                    if (result.msg == "no_session")
                                window.location="index.html";
                    else
                    {
                      loadMask.hide();
                      Ext.Msg.show({
                        title: 'Fail!',
                        msg: result.msg,
                        icon: Ext.Msg.ERROR,
                        buttons: Ext.Msg.OK
                    });
                    }
                  }             
                }  
              });

           }
           },null, false, Weapons_Type, null);
         
       }

           
    },  

//Click of the delete button for a Weapon
    onButtonClickdeleteWeapon: function(button, e, options) {

       var Weapons_Type = "";
       var g = Ext.getCmp('WeaponsGrid'); 
       if (!g.getSelectionModel().hasSelection())
       {
          Ext.Msg.show({
            title: 'Error!',
            msg: 'You must first select a Weapon from the grid.',
            icon: Ext.Msg.ERROR,
            buttons: Ext.Msg.OK
          });             
       }
       else
       {
         var rec = g.getSelectionModel().getSelection()[0]; 
         var Weapons_ID = rec.get("Weapons_ID");
         Weapons_Type = rec.get("Weapons_Type");

         Ext.MessageBox.confirm('Please Confirm',
          'Are you sure you would like to delete this Weapon?',
          function(choice)
          { 
           if( choice == 'yes')
           {

              var loadMask = new Ext.LoadMask(Ext.getBody(), {

              msg: 'Please Wait...'});
              loadMask.show();

              Ext.Ajax.request({
                url: 'app/php/accessWeapons.php',
                params:  
                {  Action: 'D',
                   Weapons_ID: Weapons_ID, 
                   Weapons_Type: Weapons_Type },
                failure: function(conn, response, options, eOpts)
                {
                  loadMask.hide();
                  Ext.Msg.show({
                    title: 'Error!',
                    msg: conn.responseText,
                    icon: Ext.Msg.ERROR,
                    buttons: Ext.Msg.OK
                  });
                }, 
                success: function(conn, response, options, eOpts)
                {
                  loadMask.hide();
                  var result = Ext.JSON.decode(conn.responseText, true);
                  if (!result)
                  {
                    result = {};
                    result.success = false;
                    result.msg = conn.responseText;
                  } 
                  if (result.success)
                  {
                     Ext.getStore('Weapons').loadData(result['Weapons']);
                     loadMask.hide();
                  }     
                  else
                  {
                    if (result.msg == "no_session")
                                window.location="index.html";
                    else
                    {
                      loadMask.hide();
                      Ext.Msg.show({
                        title: 'Fail!',
                        msg: result.msg,
                        icon: Ext.Msg.ERROR,
                        buttons: Ext.Msg.OK
                      });
                    }
                  }             
                }  
              });
            } 
         });          
        }
           
    },  

//Click on the add location details button from DB maintenance
    DBMainAddLocationDet: function(button, e, options) {

           var winlocdetadd = new Ext.Window({
           id:'winlocdetadd',
           layout: 'fit',
           width: 410,
           height: 180,
           modal: true,
           title: 'Add Location Detail',
              items: [
              {
                  xtype: 'addLocDetail'
              }]
             });
            Ext.getCmp('adddetloc_Action').setValue("A");
            Ext.getCmp('adddetloc_LocDet_id').setValue("");
            winlocdetadd.show(); 

                           
    },
//Click on the edit location details button from DB maintenance
    DBMainEditLocationDet: function(button, e, options) {


       var me = this;
       var g = Ext.getCmp('LocationDetGrid'); 
       if (!g.getSelectionModel().hasSelection())
       {
          Ext.Msg.show({
            title: 'Error!',
            msg: 'You must first select a Location Detail from the grid.',
            icon: Ext.Msg.ERROR,
            buttons: Ext.Msg.OK
          });             
       }
       else
       {
           var winlocdetadd = new Ext.Window({
           id:'winlocdetadd',
           layout: 'fit',
           width: 410,
           height: 180,
           modal: true,
           title: 'Edit Location Detail',
              items: [
              {
                  xtype: 'addLocDetail'
              }]
             });
            var rec = g.getSelectionModel().getSelection()[0];
            Ext.getCmp('adddetloc_Action').setValue("U");
            Ext.getCmp('adddetloc_LocDet_id').setValue(rec.get("Location_Detail_ID"));
            Ext.getCmp('adddetloc_name').setValue(rec.get("Location_Details"));
            Ext.getCmp('adddetloc_loc').setValue(rec.get("Location_ID"));
            
            winlocdetadd.show(); 
       }

                           
    },




//Add or Update Location Detail Popup Form
//==========================================
//click of the submit button on the add/update location detail form
    submitaddlocdet: function(button, e, options) {

    var me = this;
    var frm = Ext.getCmp('addLocDetail');
    
    if (!frm.isValid())
    {
       Ext.Msg.show({
          title: 'Error Forn not Submitted!',
          msg: 'All invalid fields are highlighted in red.  To see specific field error, place mouse cursor over the "!" next to field.  Please resubmit form once all fields have been corrected.  ',
          icon: Ext.Msg.ERROR,
          buttons: Ext.Msg.OK}); 
    }
    else
    {
      var Action = Ext.getCmp('adddetloc_Action').getValue().trim();
      var Location_Det = Ext.getCmp('adddetloc_name').getValue().trim();
      var Location_Det_ID = Ext.getCmp('adddetloc_LocDet_id').getValue().trim();
      var Location_ID = Ext.getCmp('adddetloc_loc').getValue();

      var loadMask = new Ext.LoadMask(Ext.getBody(), {
          msg: 'Please Wait...'});
          loadMask.show();

      Ext.Ajax.request({
         url: 'app/php/accessLocDetails.php',
         params: 
         {
		Action: Action,
		Location_ID: Location_ID,
		Location_Det_ID: Location_Det_ID,
		Location_Det: Location_Det
         },
         failure: function(conn, response, options, eOpts)
         {
               loadMask.hide();
               Ext.Msg.show({
                 title: 'Error!',
                 msg: conn.responseText,
                 icon: Ext.Msg.ERROR,
                 buttons: Ext.Msg.OK
               });
         },  
         success: function(conn, response, options, eOpts)
         {
            var result = Ext.JSON.decode(conn.responseText, true);
            if (!result)
            {
               loadMask.hide();
               result = {};
               result.success = false;
               result.msg = conn.responseText;
            } 
            if (result.success)
            {
               Ext.getStore('LocationsDet2').loadData(result['Location_Detail']);
               Ext.getStore('Locations').loadData(result['Location']);
               loadMask.hide();
               var win2 = Ext.getCmp('winlocdetadd')
               win2.destroy(); 
            }     
            else
            {
               if (result.msg == "no_session")
                          window.location="index.html";
               else
               {
                  loadMask.hide();
                    Ext.Msg.show({
                    title: 'Fail!',
                    msg: result.msg,
                    icon: Ext.Msg.ERROR,
                    buttons: Ext.Msg.OK
                   });
                }
        }   // result is success          
     } // success function
    });  //Ajax Request

     
    } 

      
  },
//Click of the delete button for a location detail grid
    onButtonClickdeletelocationdet: function(button, e, options) {

       var g = Ext.getCmp('LocationDetGrid'); 
       if (!g.getSelectionModel().hasSelection())
       {
          Ext.Msg.show({
            title: 'Error!',
            msg: 'You must first select a Location Detail from the grid.',
            icon: Ext.Msg.ERROR,
            buttons: Ext.Msg.OK
          });             
       }
       else
       {
         var rec = g.getSelectionModel().getSelection()[0]; 
         var Location_Detail_ID = rec.get("Location_Detail_ID");

         Ext.MessageBox.confirm('Please Confirm',
          'Are you sure you would like to delete this Location Detail?',
          function(choice)
          { 
           if( choice == 'yes')
           {

              var loadMask = new Ext.LoadMask(Ext.getBody(), {

              msg: 'Please Wait...'});
              loadMask.show();

              Ext.Ajax.request({
                url: 'app/php/accessLocDetails.php',
                params:  
                {  Action: 'D',
                   Location_ID: '', 
                   Location_Det_ID: Location_Detail_ID,
                   Location_Det: '' },
                failure: function(conn, response, options, eOpts)
                {
                  loadMask.hide();
                  Ext.Msg.show({
                    title: 'Error!',
                    msg: conn.responseText,
                    icon: Ext.Msg.ERROR,
                    buttons: Ext.Msg.OK
                  });
                }, 
                success: function(conn, response, options, eOpts)
                {
                  loadMask.hide();
                  var result = Ext.JSON.decode(conn.responseText, true);
                  if (!result)
                  {
                    result = {};
                    result.success = false;
                    result.msg = conn.responseText;
                  } 
                  if (result.success)
                  {
                     Ext.getStore('LocationsDet2').loadData(result['Location_Detail']);
                     loadMask.hide();
                  }     
                  else
                  {
                    if (result.msg == "no_session")
                                window.location="index.html";
                    else
                    {
                      loadMask.hide();
                      Ext.Msg.show({
                        title: 'Fail!',
                        msg: result.msg,
                        icon: Ext.Msg.ERROR,
                        buttons: Ext.Msg.OK
                      });
                    }
                  }             
                }  
              });
            } 
         });          
        }
           
    },  

//Reports Grid
//=============================
//Click of the run report button
    onButtonClickrunreport: function(button, e, options) {


       var g = Ext.getCmp('reportsgrid'); 
       if (!g.getSelectionModel().hasSelection())
       {
          Ext.Msg.show({
            title: 'Error!',
            msg: 'You must first select a report to run.',
            icon: Ext.Msg.ERROR,
            buttons: Ext.Msg.OK
          });             
       }
       else
       {
         var rec = g.getSelectionModel().getSelection()[0]; 
         var report_code = rec.get("rptcode");
         if (report_code == "pie_sbr") {
           this.dataforsuspectbyrace();
         }
       }
           
    }, 


//General Functions
//*******************************
//This function will validate that a message box string has been added 
    validatenotblank: function(fld) 
    { 

    if (fld.trim() == "")
      return 0;
    return 1;
   },
//This function will load all stores realated to an incident that is saved in the database 
    loadincidentstores: function(incNum)
    {
        Ext.Ajax.timeout = 30000; // this changes the 30 second  
        Ext.Ajax.request({
//        url: 'app/php/getIncident.php',
        url: 'app/data/getIncident.json',
        params: {inc_Number: incNum},
        failure: function(conn, response, options, eOpts)
        {
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
        success: function(conn, response, options, eOpts)
                {
                  var result = Ext.JSON.decode(conn.responseText, true);
                  if (!result)
                  {
                    result = {};
                    result.success = false;
                    result.msg = conn.responseText;
                  } 
                  if (result.success)
                  {
                     Ext.getStore('sources').loadData(result['Incident_Source']);
                     Ext.getStore('incidentofficers').loadData(result['Incident_Officer']);
                     Ext.getStore('incidentsuspects').loadData(result['Incident_Suspect']);
                  }     
                  else
                  {
                    if (result.msg == "no_session")
                                window.location="index.html";
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

    }, 

//This function will get the states, locations, locations detail from the database when the applicaiton first begins 
    loadinitstores: function()
    {

        Ext.Ajax.timeout = 30000; // this changes the 30 second  
        Ext.Ajax.request({
        url: 'app/php/getInitialTables.php',
//        url: 'app/data/getInitialTables.json',
        params: {},
        failure: function(conn, response, options, eOpts)
        {
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
        success: function(conn, response, options, eOpts)
                {
                  var result = Ext.JSON.decode(conn.responseText, true);
                  if (!result)
                  {
                    result = {};
                    result.success = false;
                    result.msg = conn.responseText;
                  } 
                  if (result.success)
                  {
                     Ext.getStore('States').loadData(result['State']);
                     Ext.getStore('Locations').loadData(result['Location']);
                     Ext.getStore('LocationsDet').loadData(result['Location_Detail']);
                     Ext.getStore('Newspapers').loadData(result['Newspapers']);
                     Ext.getStore('sourcetypes').loadData(result['Source_Type']);
                     Ext.getStore('officerassignments').loadData(result['Officer_Assignment']);
                     Ext.getStore('officercalltypes').loadData(result['Officer_Call_Type']);
                     Ext.getStore('officerstatuss').loadData(result['Officer_Status']);
                     Ext.getStore('depttypes').loadData(result['Officer_Dept_Type']);
                     Ext.getStore('departments').loadData(result['Officer_Department']);
                     Ext.getStore('Races').loadData(result['Race']);
                     Ext.getStore('MentalStates').loadData(result['Mental_States']);
                     Ext.getStore('Weapons').loadData(result['Weapons']);
                     Ext.getStore('AggressionTypes').loadData(result['Aggression_Type']);
                     Ext.getStore('targetareas').loadData(result['Target_Area']);

                  }     
                  else
                  {
                    if (result.msg == "no_session")
                                window.location="index.html";
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

    }, 

//This function will get the data for the Suspect by Race Pie Chart under reports 
    dataforsuspectbyrace: function()
    {
        Ext.Ajax.timeout = 30000; // this changes the 30 second  
        Ext.Ajax.request({
        url: 'app/php/suspect_race.php',
//        url: 'app/data/suspect_race.json',
        params: {},
        failure: function(conn, response, options, eOpts)
        {
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
        success: function(conn, response, options, eOpts)
                {
                  var result = Ext.JSON.decode(conn.responseText, true);
                  if (!result)
                  {
                    result = {};
                    result.success = false;
                    result.msg = conn.responseText;
                  } 
                  if (result.success)
                  {
                     if (result['suspect_race'].length == 0)
                     {
                        Ext.Msg.show({
                        title: 'Fail!',
                        msg: 'No Data to Produce Report',
                        icon: Ext.Msg.ERROR,
                        buttons: Ext.Msg.OK
                    });
                     }
                     else
                       Ext.getStore('suspect_races').loadData(result['suspect_race']);
                       var rptpanel = Ext.getCmp('rptpanel'); 
                       rptpanel.getLayout().setActiveItem(1);
                       
                  }     
                  else
                  {
                    if (result.msg == "no_session")
                                window.location="index.html";
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

    }, 
//This function get all aggression types 
    getAggressionTypes: function()
    {

        var loadMask = new Ext.LoadMask(Ext.getBody(), {
        msg: 'Please Wait...'});
        loadMask.show();

        Ext.Ajax.timeout = 30000; // this changes the 30 second  
        Ext.Ajax.request({
        url: 'app/php/accessAgressionTypes.php',
        params: {Action: 'Q',
                 Aggression_Type_ID: '',
                 Aggression_Type: ''},
        failure: function(conn, response, options, eOpts)
        {
            loadMask.hide();
            var errmsg = conn.responseText;
            if (errmsg == null || errmsg == '') errmsg = "No response from server.";
              loadMask.hide();
              Ext.Msg.show({
              title: 'Error!',
              msg: errmsg,
              icon: Ext.Msg.ERROR,
              buttons: Ext.Msg.OK
            });
        }, 
        success: function(conn, response, options, eOpts)
                {
                  loadMask.hide();
                  var result = Ext.JSON.decode(conn.responseText, true);
                  if (!result)
                  {
                    result = {};
                    result.success = false;
                    result.msg = conn.responseText;
                  } 
                  if (result.success)
                  {
                     Ext.getStore('AggressionTypes').loadData(result['Aggression_Type']);
                     loadMask.hide();
                  }     
                  else
                  {
                    if (result.msg == "no_session")
                                window.location="index.html";
                    else
                    {
                      Ext.Msg.show({
                        title: 'Fail!',
                        msg: result.errorMsg,
                        icon: Ext.Msg.ERROR,
                        buttons: Ext.Msg.OK
                      });
                    }
                  }             
                  
                }  
              });         

    }, 
//This function get all Location 
    getLocations: function()
    {

        var loadMask = new Ext.LoadMask(Ext.getBody(), {
        msg: 'Please Wait...'});
        loadMask.show();

        Ext.Ajax.timeout = 30000; // this changes the 30 second  
        Ext.Ajax.request({
        url: 'app/php/accessLocations.php',
        params: {Action: 'Q',
                 Location_ID: '',
                 Location: ''},
        failure: function(conn, response, options, eOpts)
        {
            loadMask.hide();
            var errmsg = conn.responseText;
            if (errmsg == null || errmsg == '') errmsg = "No response from server.";
              loadMask.hide();
              Ext.Msg.show({
              title: 'Error!',
              msg: errmsg,
              icon: Ext.Msg.ERROR,
              buttons: Ext.Msg.OK
            });
        }, 
        success: function(conn, response, options, eOpts)
                {
                  loadMask.hide();
                  var result = Ext.JSON.decode(conn.responseText, true);
                  if (!result)
                  {
                    result = {};
                    result.success = false;
                    result.msg = conn.responseText;
                  } 
                  if (result.success)
                  {
                     Ext.getStore('Locations').loadData(result['Location']);
                     loadMask.hide();
                  }     
                  else
                  {
                    if (result.msg == "no_session")
                                window.location="index.html";
                    else
                    {
                      Ext.Msg.show({
                        title: 'Fail!',
                        msg: result.errorMsg,
                        icon: Ext.Msg.ERROR,
                        buttons: Ext.Msg.OK
                      });
                    }
                  }             
                  
                }  
              });         

    }, 
//This function get all Location 
    getMentalStatus: function()
    {

        var loadMask = new Ext.LoadMask(Ext.getBody(), {
        msg: 'Please Wait...'});
        loadMask.show();

        Ext.Ajax.timeout = 30000; // this changes the 30 second  
        Ext.Ajax.request({
        url: 'app/php/accessMentalStates.php',
        params: {Action: 'Q',
                 Mental_Status_ID: '',
                 Mental_Status: ''},
        failure: function(conn, response, options, eOpts)
        {
            loadMask.hide();
            var errmsg = conn.responseText;
            if (errmsg == null || errmsg == '') errmsg = "No response from server.";
              loadMask.hide();
              Ext.Msg.show({
              title: 'Error!',
              msg: errmsg,
              icon: Ext.Msg.ERROR,
              buttons: Ext.Msg.OK
            });
        }, 
        success: function(conn, response, options, eOpts)
                {
                  loadMask.hide();
                  var result = Ext.JSON.decode(conn.responseText, true);
                  if (!result)
                  {
                    result = {};
                    result.success = false;
                    result.msg = conn.responseText;
                  } 
                  if (result.success)
                  {
                     Ext.getStore('MentalStates').loadData(result['Mental_States']);
                     loadMask.hide();
                  }     
                  else
                  {
                    if (result.msg == "no_session")
                                window.location="index.html";
                    else
                    {
                      Ext.Msg.show({
                        title: 'Fail!',
                        msg: result.errorMsg,
                        icon: Ext.Msg.ERROR,
                        buttons: Ext.Msg.OK
                      });
                    }
                  }             
                  
                }  
              });         

    }, 

//This function get the existing incidents or search on the incident name 
    getIncidents: function(n,t)
    {

//        console.log('Entering function get existing customers ');
        var loadMask = new Ext.LoadMask(Ext.getBody(), {
        msg: 'Please Wait...'});
        loadMask.show();



        Ext.Ajax.timeout = 30000; // this changes the 30 second  
        Ext.Ajax.request({
        url: 'app/php/getincidents.php',
//        url: 'app/data/getIncidents.json',
        params: {Incident_Name: n},
        failure: function(conn, response, options, eOpts)
        {
            loadMask.hide();
            var errmsg = conn.responseText;
            if (errmsg == null || errmsg == '') errmsg = "No response from server.";
              loadMask.hide();
              Ext.Msg.show({
              title: 'Error!',
              msg: errmsg,
              icon: Ext.Msg.ERROR,
              buttons: Ext.Msg.OK
            });
        }, 
        success: function(conn, response, options, eOpts)
                {
//                  console.log('entered success function ');
                  loadMask.hide();
                  var result = Ext.JSON.decode(conn.responseText, true);
                  if (!result)
                  {
//                    console.log('Result ');
//                    console.log(result);
                    result = {};
                    result.success = false;
                    result.msg = conn.responseText;
                  } 
                  if (result.success)
                  {
                    if (result.num_rows == "0" && t == "true")
                            Ext.Msg.alert('Results', 'No Incidents to Show.');
                    else
                    {
                       Ext.getStore('Incidentslist').loadData(result['Incident']);
                       var cpanel = Ext.getCmp('centerpanel'); 
                       cpanel.getLayout().setActiveItem(2);
                    }

                  }     
                  else
                  {
                    if (result.msg == "no_session")
                                window.location="index.html";
                    else
                    {
                      Ext.Msg.show({
                        title: 'Fail!',
                        msg: result.errorMsg,
                        icon: Ext.Msg.ERROR,
                        buttons: Ext.Msg.OK
                      });
                    }
                  }             
                  
                }  
              });         

    }, 
//Get all officers
    getallofficers: function() 
    {

           var loadMask = new Ext.LoadMask(Ext.getBody(), {
           msg: 'Please Wait...'});
           loadMask.show();
           Ext.Ajax.timeout = 30000; // this changes the 30 second  
           Ext.Ajax.request({
           url: 'app/php/officersearch.php',
//           url: 'app/data/officersearch.json',
           params: {Name_search: ''},
           scope :this,
           failure: function(conn, response, options, eOpts)
           {
            loadMask.hide();
            var errmsg = conn.responseText;
            if (errmsg == null || errmsg == '') errmsg = "No response from server.";
              Ext.Msg.show({
              title: 'Error!',
              msg: errmsg,
              icon: Ext.Msg.ERROR,
              buttons: Ext.Msg.OK
            });
           }, 
           success: function(conn, response, options, eOpts)
           {
               loadMask.hide();
               var result = Ext.JSON.decode(conn.responseText, true);
               if (!result)
               {
                 result = {};
                 result.success = false;
                 result.msg = conn.responseText;
               } 
               if (result.success)
               {
                 loadMask.hide();
                 //Received response from server
                   Ext.getStore('officer_search').loadData(result['officersearch']);
               }     
               else
               {
                 if (result.msg == "no_session")
                              window.location="index.html";
                 else
                 {
                   loadMask.hide();
                    Ext.Msg.show({
                      title: 'Fail!',
                      msg: result.errorMsg,
                      icon: Ext.Msg.ERROR,
                      buttons: Ext.Msg.OK
                   });
                 }
               } //not result is success            
               
           }  //success function
              });         
        
                            
    },
//This function get all Newspapers 
    getNewspapers: function()
    {

        var loadMask = new Ext.LoadMask(Ext.getBody(), {
        msg: 'Please Wait...'});
        loadMask.show();

        Ext.Ajax.timeout = 30000; // this changes the 30 second  
        Ext.Ajax.request({
        url: 'app/php/accessNewspapers.php',
        params: {Action: 'Q',
                 Newspaper_ID: '',
                 Newspaper: ''},
        failure: function(conn, response, options, eOpts)
        {
            loadMask.hide();
            var errmsg = conn.responseText;
            if (errmsg == null || errmsg == '') errmsg = "No response from server.";
              loadMask.hide();
              Ext.Msg.show({
              title: 'Error!',
              msg: errmsg,
              icon: Ext.Msg.ERROR,
              buttons: Ext.Msg.OK
            });
        }, 
        success: function(conn, response, options, eOpts)
                {
                  loadMask.hide();
                  var result = Ext.JSON.decode(conn.responseText, true);
                  if (!result)
                  {
                    result = {};
                    result.success = false;
                    result.msg = conn.responseText;
                  } 
                  if (result.success)
                  {
                      Ext.getStore('Newspapers').loadData(result['Newspapers']);
                     loadMask.hide();
                  }     
                  else
                  {
                    if (result.msg == "no_session")
                                window.location="index.html";
                    else
                    {
                      Ext.Msg.show({
                        title: 'Fail!',
                        msg: result.errorMsg,
                        icon: Ext.Msg.ERROR,
                        buttons: Ext.Msg.OK
                      });
                    }
                  }             
                  
                }  
              });         

    }, 
//This function get all Officer Assignments 
    getOffAssignments: function()
    {

        var loadMask = new Ext.LoadMask(Ext.getBody(), {
        msg: 'Please Wait...'});
        loadMask.show();

        Ext.Ajax.timeout = 30000; // this changes the 30 second  
        Ext.Ajax.request({
        url: 'app/php/accessOfficerAssignment.php',
        params: {Action: 'Q',
                 Assignment_ID: '',
                 Assignment: ''},
        failure: function(conn, response, options, eOpts)
        {
            loadMask.hide();
            var errmsg = conn.responseText;
            if (errmsg == null || errmsg == '') errmsg = "No response from server.";
              loadMask.hide();
              Ext.Msg.show({
              title: 'Error!',
              msg: errmsg,
              icon: Ext.Msg.ERROR,
              buttons: Ext.Msg.OK
            });
        }, 
        success: function(conn, response, options, eOpts)
                {
                  loadMask.hide();
                  var result = Ext.JSON.decode(conn.responseText, true);
                  if (!result)
                  {
                    result = {};
                    result.success = false;
                    result.msg = conn.responseText;
                  } 
                  if (result.success)
                  {
                     Ext.getStore('officerassignments').loadData(result['Officer_Assignment']);
                     loadMask.hide();
                  }     
                  else
                  {
                    if (result.msg == "no_session")
                                window.location="index.html";
                    else
                    {
                      Ext.Msg.show({
                        title: 'Fail!',
                        msg: result.errorMsg,
                        icon: Ext.Msg.ERROR,
                        buttons: Ext.Msg.OK
                      });
                    }
                  }             
                  
                }  
              });         

    }, 
//This function gets all Officer Call Types 
    getOfficerCallTypes: function()
    {

        var loadMask = new Ext.LoadMask(Ext.getBody(), {
        msg: 'Please Wait...'});
        loadMask.show();

        Ext.Ajax.timeout = 30000; // this changes the 30 second  
        Ext.Ajax.request({
        url: 'app/php/accessOfficerCallType.php',
        params: {Action: 'Q',
                 Call_Type_ID: '',
                 Call_Type: ''},
        failure: function(conn, response, options, eOpts)
        {
            loadMask.hide();
            var errmsg = conn.responseText;
            if (errmsg == null || errmsg == '') errmsg = "No response from server.";
              loadMask.hide();
              Ext.Msg.show({
              title: 'Error!',
              msg: errmsg,
              icon: Ext.Msg.ERROR,
              buttons: Ext.Msg.OK
            });
        }, 
        success: function(conn, response, options, eOpts)
                {
                  loadMask.hide();
                  var result = Ext.JSON.decode(conn.responseText, true);
                  if (!result)
                  {
                    result = {};
                    result.success = false;
                    result.msg = conn.responseText;
                  } 
                  if (result.success)
                  {
                     Ext.getStore('officercalltypes').loadData(result['Officer_Call_Type']);
                     loadMask.hide();
                  }     
                  else
                  {
                    if (result.msg == "no_session")
                                window.location="index.html";
                    else
                    {
                      Ext.Msg.show({
                        title: 'Fail!',
                        msg: result.errorMsg,
                        icon: Ext.Msg.ERROR,
                        buttons: Ext.Msg.OK
                      });
                    }
                  }             
                  
                }  
              });         

    }, 


//Get all Subjects
    getallsubjects: function() 
    {

           var loadMask = new Ext.LoadMask(Ext.getBody(), {
           msg: 'Please Wait...'});
           loadMask.show();
           Ext.Ajax.timeout = 30000; // this changes the 30 second  
           Ext.Ajax.request({
           url: 'app/php/suspectsearch.php',
//           url: 'app/data/suspectsearch.json',
           params: {Name_search: ''},
           scope :this,
           failure: function(conn, response, options, eOpts)
           {
            loadMask.hide();
            var errmsg = conn.responseText;
            if (errmsg == null || errmsg == '') errmsg = "No response from server.";
              Ext.Msg.show({
              title: 'Error!',
              msg: errmsg,
              icon: Ext.Msg.ERROR,
              buttons: Ext.Msg.OK
            });
           }, 
           success: function(conn, response, options, eOpts)
           {
               loadMask.hide();
               var result = Ext.JSON.decode(conn.responseText, true);
               if (!result)
               {
                 result = {};
                 result.success = false;
                 result.msg = conn.responseText;
               } 
               if (result.success)
               {
                 loadMask.hide();
                 //Received response from server
                   Ext.getStore('suspect_search').loadData(result['suspectsearch']);
               }     
               else
               {
                 if (result.msg == "no_session")
                              window.location="index.html";
                 else
                 {
                   loadMask.hide();
                    Ext.Msg.show({
                      title: 'Fail!',
                      msg: result.errorMsg,
                      icon: Ext.Msg.ERROR,
                      buttons: Ext.Msg.OK
                   });
                 }
               } //not result is success            
               
           }  //success function
              });         
        
                            
    },
//This function get all Source Types 
    getSourceTypes: function()
    {

        var loadMask = new Ext.LoadMask(Ext.getBody(), {
        msg: 'Please Wait...'});
        loadMask.show();

        Ext.Ajax.timeout = 30000; // this changes the 30 second  
        Ext.Ajax.request({
        url: 'app/php/accessSourceType.php',
        params: {Action: 'Q',
                 Source_Type_ID: '',
                 Source: ''},
        failure: function(conn, response, options, eOpts)
        {
            loadMask.hide();
            var errmsg = conn.responseText;
            if (errmsg == null || errmsg == '') errmsg = "No response from server.";
              loadMask.hide();
              Ext.Msg.show({
              title: 'Error!',
              msg: errmsg,
              icon: Ext.Msg.ERROR,
              buttons: Ext.Msg.OK
            });
        }, 
        success: function(conn, response, options, eOpts)
                {
                  loadMask.hide();
                  var result = Ext.JSON.decode(conn.responseText, true);
                  if (!result)
                  {
                    result = {};
                    result.success = false;
                    result.msg = conn.responseText;
                  } 
                  if (result.success)
                  {
                     Ext.getStore('sourcetypes').loadData(result['Source_Type']);
                     loadMask.hide();
                  }     
                  else
                  {
                    if (result.msg == "no_session")
                                window.location="index.html";
                    else
                    {
                      Ext.Msg.show({
                        title: 'Fail!',
                        msg: result.errorMsg,
                        icon: Ext.Msg.ERROR,
                        buttons: Ext.Msg.OK
                      });
                    }
                  }             
                  
                }  
              });         

    }, 
//This function get all Weapons 
    getWeapons: function()
    {

        var loadMask = new Ext.LoadMask(Ext.getBody(), {
        msg: 'Please Wait...'});
        loadMask.show();

        Ext.Ajax.timeout = 30000; // this changes the 30 second  
        Ext.Ajax.request({
        url: 'app/php/accessWeapons.php',
        params: {Action: 'Q',
                 Weapons_ID: '',
                 Weapons_Type: ''},
        failure: function(conn, response, options, eOpts)
        {
            loadMask.hide();
            var errmsg = conn.responseText;
            if (errmsg == null || errmsg == '') errmsg = "No response from server.";
              loadMask.hide();
              Ext.Msg.show({
              title: 'Error!',
              msg: errmsg,
              icon: Ext.Msg.ERROR,
              buttons: Ext.Msg.OK
            });
        }, 
        success: function(conn, response, options, eOpts)
                {
                  loadMask.hide();
                  var result = Ext.JSON.decode(conn.responseText, true);
                  if (!result)
                  {
                    result = {};
                    result.success = false;
                    result.msg = conn.responseText;
                  } 
                  if (result.success)
                  {
                     Ext.getStore('Weapons').loadData(result['Weapons']);
                     loadMask.hide();
                  }     
                  else
                  {
                    if (result.msg == "no_session")
                                window.location="index.html";
                    else
                    {
                      Ext.Msg.show({
                        title: 'Fail!',
                        msg: result.errorMsg,
                        icon: Ext.Msg.ERROR,
                        buttons: Ext.Msg.OK
                      });
                    }
                  }             
                  
                }  
              });         

    }, 

//This function get all Departments 
    getDepartments: function()
    {

        var loadMask = new Ext.LoadMask(Ext.getBody(), {
        msg: 'Please Wait...'});
        loadMask.show();

        Ext.Ajax.timeout = 30000; // this changes the 30 second  
        Ext.Ajax.request({
        url: 'app/php/accessDepartment.php',
        params: {Action: 'Q',
                 Department_ID: '',
                 Department: ''},
        failure: function(conn, response, options, eOpts)
        {
            loadMask.hide();
            var errmsg = conn.responseText;
            if (errmsg == null || errmsg == '') errmsg = "No response from server.";
              loadMask.hide();
              Ext.Msg.show({
              title: 'Error!',
              msg: errmsg,
              icon: Ext.Msg.ERROR,
              buttons: Ext.Msg.OK
            });
        }, 
        success: function(conn, response, options, eOpts)
                {
                  loadMask.hide();
                  var result = Ext.JSON.decode(conn.responseText, true);
                  if (!result)
                  {
                    result = {};
                    result.success = false;
                    result.msg = conn.responseText;
                  } 
                  if (result.success)
                  {
                     Ext.getStore('departments').loadData(result['Officer_Department']);
                     loadMask.hide();
                  }     
                  else
                  {
                    if (result.msg == "no_session")
                                window.location="index.html";
                    else
                    {
                      Ext.Msg.show({
                        title: 'Fail!',
                        msg: result.errorMsg,
                        icon: Ext.Msg.ERROR,
                        buttons: Ext.Msg.OK
                      });
                    }
                  }             
                  
                }  
              });         

    }, 
//This function get all Officer Dept Types 
    getOffDeptTypes: function()
    {

        var loadMask = new Ext.LoadMask(Ext.getBody(), {
        msg: 'Please Wait...'});
        loadMask.show();

        Ext.Ajax.timeout = 30000; // this changes the 30 second  
        Ext.Ajax.request({
        url: 'app/php/accessOffDeptType.php',
        params: {Action: 'Q',
                 Dept_Type_ID: '',
                 Dept_Type: ''},
        failure: function(conn, response, options, eOpts)
        {
            loadMask.hide();
            var errmsg = conn.responseText;
            if (errmsg == null || errmsg == '') errmsg = "No response from server.";
              loadMask.hide();
              Ext.Msg.show({
              title: 'Error!',
              msg: errmsg,
              icon: Ext.Msg.ERROR,
              buttons: Ext.Msg.OK
            });
        }, 
        success: function(conn, response, options, eOpts)
                {
                  loadMask.hide();
                  var result = Ext.JSON.decode(conn.responseText, true);
                  if (!result)
                  {
                    result = {};
                    result.success = false;
                    result.msg = conn.responseText;
                  } 
                  if (result.success)
                  {
                     Ext.getStore('depttypes').loadData(result['Officer_Dept_Type']);
                     loadMask.hide();
                  }     
                  else
                  {
                    if (result.msg == "no_session")
                                window.location="index.html";
                    else
                    {
                      Ext.Msg.show({
                        title: 'Fail!',
                        msg: result.errorMsg,
                        icon: Ext.Msg.ERROR,
                        buttons: Ext.Msg.OK
                      });
                    }
                  }             
                  
                }  
              });         

    }, 
//This function get all Officer Status 
    getOffStatus: function()
    {

        var loadMask = new Ext.LoadMask(Ext.getBody(), {
        msg: 'Please Wait...'});
        loadMask.show();

        Ext.Ajax.timeout = 30000; // this changes the 30 second  
        Ext.Ajax.request({
        url: 'app/php/accessOffStatus.php',
        params: {Action: 'Q',
                 Status_ID: '',
                 Status: ''},
        failure: function(conn, response, options, eOpts)
        {
            loadMask.hide();
            var errmsg = conn.responseText;
            if (errmsg == null || errmsg == '') errmsg = "No response from server.";
              loadMask.hide();
              Ext.Msg.show({
              title: 'Error!',
              msg: errmsg,
              icon: Ext.Msg.ERROR,
              buttons: Ext.Msg.OK
            });
        }, 
        success: function(conn, response, options, eOpts)
                {
                  loadMask.hide();
                  var result = Ext.JSON.decode(conn.responseText, true);
                  if (!result)
                  {
                    result = {};
                    result.success = false;
                    result.msg = conn.responseText;
                  } 
                  if (result.success)
                  {
                     Ext.getStore('officerstatuss').loadData(result['Officer_Status']);
                     loadMask.hide();
                  }     
                  else
                  {
                    if (result.msg == "no_session")
                                window.location="index.html";
                    else
                    {
                      Ext.Msg.show({
                        title: 'Fail!',
                        msg: result.errorMsg,
                        icon: Ext.Msg.ERROR,
                        buttons: Ext.Msg.OK
                      });
                    }
                  }             
                  
                }  
              });         

    }, 
//This function get all Races 
    getRaces: function()
    {

        var loadMask = new Ext.LoadMask(Ext.getBody(), {
        msg: 'Please Wait...'});
        loadMask.show();

        Ext.Ajax.timeout = 30000; // this changes the 30 second  
        Ext.Ajax.request({
        url: 'app/php/accessRace.php',
        params: {Action: 'Q',
                 Race_ID: '',
                 Race: ''},
        failure: function(conn, response, options, eOpts)
        {
            loadMask.hide();
            var errmsg = conn.responseText;
            if (errmsg == null || errmsg == '') errmsg = "No response from server.";
              loadMask.hide();
              Ext.Msg.show({
              title: 'Error!',
              msg: errmsg,
              icon: Ext.Msg.ERROR,
              buttons: Ext.Msg.OK
            });
        }, 
        success: function(conn, response, options, eOpts)
                {
                  loadMask.hide();
                  var result = Ext.JSON.decode(conn.responseText, true);
                  if (!result)
                  {
                    result = {};
                    result.success = false;
                    result.msg = conn.responseText;
                  } 
                  if (result.success)
                  {
                     Ext.getStore('Races').loadData(result['Race']);
                     loadMask.hide();
                  }     
                  else
                  {
                    if (result.msg == "no_session")
                                window.location="index.html";
                    else
                    {
                      Ext.Msg.show({
                        title: 'Fail!',
                        msg: result.errorMsg,
                        icon: Ext.Msg.ERROR,
                        buttons: Ext.Msg.OK
                      });
                    }
                  }             
                  
                }  
              });         

    }, 
//This function get all Location Details for the DB Maint Grid 
    getDBMainLocDets: function()
    {

        var loadMask = new Ext.LoadMask(Ext.getBody(), {
        msg: 'Please Wait...'});
        loadMask.show();

        Ext.Ajax.timeout = 30000; // this changes the 30 second  
        Ext.Ajax.request({
        url: 'app/php/accessLocDetails.php',
        params: {Action: 'Q',
                 Location_ID: '',
                 Location_Det_ID: '',
                 Location_Det: ''},
        failure: function(conn, response, options, eOpts)
        {
            loadMask.hide();
            var errmsg = conn.responseText;
            if (errmsg == null || errmsg == '') errmsg = "No response from server.";
              loadMask.hide();
              Ext.Msg.show({
              title: 'Error!',
              msg: errmsg,
              icon: Ext.Msg.ERROR,
              buttons: Ext.Msg.OK
            });
        }, 
        success: function(conn, response, options, eOpts)
                {
                  loadMask.hide();
                  var result = Ext.JSON.decode(conn.responseText, true);
                  if (!result)
                  {
                    result = {};
                    result.success = false;
                    result.msg = conn.responseText;
                  } 
                  if (result.success)
                  {
                      Ext.getStore('LocationsDet2').loadData(result['Location_Detail']);
                      Ext.getStore('Locations').loadData(result['Location']);
                      loadMask.hide();
                  }     
                  else
                  {
                    if (result.msg == "no_session")
                                window.location="index.html";
                    else
                    {
                      Ext.Msg.show({
                        title: 'Fail!',
                        msg: result.errorMsg,
                        icon: Ext.Msg.ERROR,
                        buttons: Ext.Msg.OK
                      });
                    }
                  }             
                  
                }  
              });         

    }, 

//This method will take the string of select target area ids and return the display value for the target area.
    getTargetAreaString: function(ta_val)
    {



       display_val = "";
       idarray = ta_val.split(',');
       for (i=0;i<idarray.length;i++)
       {
         display_mod = Ext.getStore('targetareas').findRecord('Target_Area_ID', idarray[i]);
         display_val = display_val + display_mod.get('Specific_Target_Area');

         if (i < (idarray.length-1)) display_val = display_val + ", "; 
       }

       return display_val;
        

    }, 
//This method will clear all the incident forms.
    clearincidentforms: function()
    {

         var frminc = Ext.getCmp('incidentdetailform');
         frminc.getForm().reset();

         var frmsource = Ext.getCmp('sourcedetail');
         frmsource.getForm().reset();

         var frmio = Ext.getCmp('IncidentOfficerDetail');
         frmio.getForm().reset();

         var frmsus = Ext.getCmp('IncidentSuspectDetail');
         frmsus.getForm().reset();

         var LocationsDet = Ext.getStore('LocationsDet');
         LocationsDet.clearFilter(true);
         LocationsDet.filter('Location_ID', "novalue");
         Ext.getCmp('id_locationdet').reset();

         Ext.getStore('sources').removeAll(true);
         Ext.getStore('incidentofficers').removeAll(true);
         Ext.getStore('incidentsuspects').removeAll(true);

         Ext.getCmp('sourcesgrid').getView().refresh(); 
         Ext.getCmp('incidentofficergrid').getView().refresh(); 
         Ext.getCmp('incidentsuspectgrid').getView().refresh(); 


        

    }, 

//This method determines if the newspaper combo and add button should be disabled or not.
    NewspaperDisabled: function(sourcetype_display)
    {

         var newspap = Ext.getCmp('sd_newspaper');
         var newspapadd = Ext.getCmp('sd_newspaperadd');

         newspap.clearValue();
//         console.log("Change fired: " + sourcetype_display); 
         if (sourcetype_display == "Newspaper")
         {
           newspap.setDisabled(false);
           newspapadd.setDisabled(false);
         }
         else
         {
           newspap.setDisabled(true);
           newspapadd.setDisabled(true);
         }

    }, 

//This function setsw the state region based on the selected state on the incident detail form.
    setStateRegion: function(state_id)
    {

         var regionlabel = Ext.getCmp('id_Region').setValue("");
         var sourcetype_model = Ext.getStore('States').findRecord('State_ID', state_id); 
         var state_region = sourcetype_model.get('Region');
         regionlabel.setValue(state_region);

    }, 
//This function setsw the value for the approximate incident time based on a timepicker value.
    getapproxtime: function(t)
    {

//       console.log(t);
       t = t.replace(":","");
       var num_t = parseInt(t);
       
       if (num_t >= 100 & num_t <= 459)
         return "EM";
       else if (num_t >= 500 & num_t <= 1159)
         return "MN";
       else if (num_t >= 1200 & num_t <= 1259)
         return "NO";
       else if (num_t >= 1300 & num_t <= 1759)
         return "AF";
       else if (num_t >= 1800 & num_t <= 2059)
         return "EV";
       else if (num_t >= 2100 & num_t <= 2359)
         return "NI";
       else if (num_t >= 0 & num_t <= 59)
         return "MN";      

    }, 


//This method formats time pickers to be sent as a parameter to the server.
    formattime: function(t)
    {
      var y = "";
      var h = "";
      var m = "";
      var s = "";
      
      if (t != null) {
         var x = new Date(t); 
         h = x.getHours();
         m = x.getMinutes();
         s = x.getSeconds()

         if (m < 10) m = "0" + m;
         if (s < 10) s = "0" + s;

         var y = h + ":" + m + ":" + s;
      }

      return y;
    }, 


//This method formats datepickers to be sent as a parameter to the server.
    formatdate: function(d)
    {
      var y = "";
      
      if (d != null) {
         var x = new Date(d); 
         var y = (x.getMonth() + 1) + "/" + x.getDate() + "/" + x.getFullYear();
      }

      return y;
    }, 


    
});

