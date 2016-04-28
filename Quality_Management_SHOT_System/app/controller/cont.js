Ext.define('Packt.controller.cont', {
    extend: 'Ext.app.Controller',
    stores: [
        'States',
        'Locations',
        'Newspapers',
        'sourcetypes',
        'officercalltypes',
        'officerassignments',
        'departments',
        'officerstatuss',
        'depttypes',
        'Races',
        'officer_search',
        'AggressionTypes',
        'Weapons',
        'MentalStates',
        'suspect_search',
        'LocationsDet2',
        'Users'
    ],
    models: ['State',
             'Location', 
             'newspaper', 
             'sourcetype', 
             'officercalltype', 
             'officerassignment', 
             'Officer_Department', 
             'officerstatus', 
             'depttype', 
             'Race', 
             'officersearch', 
             'AggressionType', 
             'Weapon', 
             'MentalState', 
             'suspectsearch', 
             'LocationDet2',
             'User'
    ],
    views: [
        'appheader',
        'MainMenu',
        'addofficer',
        'addsuspect',
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
        'addLocDetail',
        'usersdetails',
        'UsersGrid',
        'ResetPassword'

    ],
    refs: [
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
        },
        {
            ref : 'UsersGrid',
            selector: 'UsersGrid'
        }
    ],
    init: function() {

        this.getsecurity(); 
	this.control({'appheader button#applogout' : { click: this.onButtonClickLogout }});
	this.control({'MainMenu button#mmUsers' : { click: this.onButtonClickUsers } });
	this.control({'MainMenu button#mmDatabase' : { click: this.onButtonClickDatabase } });
	this.control({'addofficer button#off_submitbtn' : { click: this.onButtonClickofficeraddbtn } }); 
	this.control({'addsuspect button#sus_submitbtn' : { click: this.onButtonClicksuspectaddbtn } }); 
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
	this.control({'UsersGrid button#usergrid_addbtn' : { click: this.clickusergridadd } }); 
	this.control({'UsersGrid button#usergrid_editbtn' : { click: this.clickusergridedit } }); 
	this.control({'UsersGrid button#usergrid_delete' : { click: this.clickusergriddelete } }); 
	this.control({'UsersGrid button#usergrid_resetpw' : { click: this.clickusergridpreset } }); 
	this.control({'UsersGrid button#usergrid_changestatus' : { click: this.clickusergridchangestatus } }); 
	this.control({'usersdetails button[action=userdet_submitbtn]' : { click : this.submitUserForm } });
	this.control({'ResetPassword button[action=passwordr_submitbtn]' : { click : this.submitpwresetform } });

//        this.getUsers();
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
                url: 'app/php/logoutADM.php',
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
//User Management
    onButtonClickUsers: function(button, e, options) {
//       console.log("user mamagement"); 

           this.getUsers();
           var cpanel = Ext.getCmp('centerpanel'); 
           cpanel.getLayout().setActiveItem(1);
       
    },
//Database Maint
    onButtonClickDatabase: function(button, e, options) {

           this.getAggressionTypes();
           this.getRaces();
           this.getDBMaintTabPanel().setActiveTab(0);
           var cpanel = Ext.getCmp('centerpanel'); 
           cpanel.getLayout().setActiveItem(2);

          
    },

//================================


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
                url: 'app/php/accessOfficersADM.php',
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
                url: 'app/php/accessSubjectsADM.php',
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
                url: 'app/php/accessAgressionTypesADM.php',
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
                url: 'app/php/accessAgressionTypesADM.php',
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
                url: 'app/php/accessAgressionTypesADM.php',
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
                url: 'app/php/accessLocationsADM.php',
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
                url: 'app/php/accessLocationsADM.php',
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
                url: 'app/php/accessLocationsADM.php',
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
                url: 'app/php/accessMentalStatesADM.php',
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
                url: 'app/php/accessMentalStatesADM.php',
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
                url: 'app/php/accessMentalStatesADM.php',
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
                url: 'app/php/accessNewspapersADM.php',
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
                url: 'app/php/accessNewspapersADM.php',
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
                url: 'app/php/accessNewspapersADM.php',
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
                url: 'app/php/accessOfficersADM.php',
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
                url: 'app/php/accessOfficerAssignmentADM.php',
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
                url: 'app/php/accessOfficerAssignmentADM.php',
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
                url: 'app/php/accessOfficerAssignmentADM.php',
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
                url: 'app/php/accessOfficerCallTypeADM.php',
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
                url: 'app/php/accessOfficerCallTypeADM.php',
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
                url: 'app/php/accessOfficerCallTypeADM.php',
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
                url: 'app/php/accessDepartmentADM.php',
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
                url: 'app/php/accessDepartmentADM.php',
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
                url: 'app/php/accessDepartmentADM.php',
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
                url: 'app/php/accessOffDeptTypeADM.php',
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
                url: 'app/php/accessOffDeptTypeADM.php',
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
                url: 'app/php/accessOffDeptTypeADM.php',
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
                url: 'app/php/accessOffStatusADM.php',
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
                url: 'app/php/accessOffStatusADM.php',
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
                url: 'app/php/accessOffStatusADM.php',
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
                url: 'app/php/accessRaceADM.php',
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
                url: 'app/php/accessRaceADM.php',
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
                url: 'app/php/accessRaceADM.php',
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
                url: 'app/php/accessSourceTypeADM.php',
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
                url: 'app/php/accessSourceTypeADM.php',
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
                url: 'app/php/accessSourceTypeADM.php',
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
                url: 'app/php/accessSubjectsADM.php',
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
                url: 'app/php/accessWeaponsADM.php',
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
                url: 'app/php/accessWeaponsADM.php',
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
                url: 'app/php/accessWeaponsADM.php',
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
         url: 'app/php/accessLocDetailsADM.php',
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
                url: 'app/php/accessLocDetailsADM.php',
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

//User Management Grid
//=============================
//Click on the user add button from the user Grid
    clickusergridadd: function(button, e, options) {

           var offaddusr = new Ext.Window({
           id:'winuserdetail',
           layout: 'fit',
           width: 510,
           height: 580,
           modal: true,
           title: 'Add User',
              items: [
              {
                  xtype: 'usersdetails'
              }]
             });
            Ext.getCmp('userdet_Action').setValue("A");
            Ext.getCmp('userdet_user_number').setValue("");  
            Ext.getCmp('userdet_userid').setValue("");  
            Ext.getCmp('userdet_name').setValue("");  
            Ext.getCmp('userdet_organization').setValue("");  
            Ext.getCmp('userdet_email').setValue("");  
            Ext.getCmp('userdet_phone').setValue("");  
            Ext.getCmp('userdet_password1').setVisible(true);  
            Ext.getCmp('userdet_password2').setVisible(true);  
            Ext.getCmp('userdet_password1').setValue("");  
            Ext.getCmp('userdet_password2').setValue("");  
            Ext.getCmp('userdet_newincident').setValue("");  
            Ext.getCmp('userdet_queryview').setValue("");  
            Ext.getCmp('userdet_queryupdate').setValue("");  
            Ext.getCmp('userdet_databasemaint').setValue("");  
            Ext.getCmp('userdet_reports').setValue("");  
            Ext.getCmp('userdet_usermanagement').setValue("");  


            offaddusr.show(); 

                           
    },
//Click on the edit button from the usergrid
    clickusergridedit: function(button, e, options) {


       var me = this;
       var g = Ext.getCmp('UsersGrid'); 
       if (!g.getSelectionModel().hasSelection())
       {
          Ext.Msg.show({
            title: 'Error!',
            msg: 'You must first select a user from the grid.',
            icon: Ext.Msg.ERROR,
            buttons: Ext.Msg.OK
          });             
       }
       else
       {
           var offaddusr = new Ext.Window({
           id:'winuserdetail',
           layout: 'fit',
           width: 510,
           height: 580,
           modal: true,
           title: 'Edit User',
              items: [
              {
                  xtype: 'usersdetails'
              }]
             });

            var rec = g.getSelectionModel().getSelection()[0]; 
            Ext.getCmp('userdet_Action').setValue("U");
            Ext.getCmp('userdet_user_number').setValue(rec.get("User_Number"));  
            Ext.getCmp('userdet_userid').setValue(rec.get("User_ID"));  
            Ext.getCmp('userdet_name').setValue(rec.get("Name"));  
            Ext.getCmp('userdet_organization').setValue(rec.get("Organization"));  
            Ext.getCmp('userdet_email').setValue(rec.get("Email"));  
            Ext.getCmp('userdet_phone').setValue(rec.get("Phone"));  
            Ext.getCmp('userdet_password1').setVisible(false);  
            Ext.getCmp('userdet_password2').setVisible(false);  
            Ext.getCmp('userdet_newincident').setValue(rec.get("Access_NewIncident"));  
            Ext.getCmp('userdet_queryview').setValue(rec.get("Access_QueryView"));  
            Ext.getCmp('userdet_queryupdate').setValue(rec.get("Access_QueryUpdate"));  
            Ext.getCmp('userdet_databasemaint').setValue(rec.get("Access_DatabaseMaint"));  
            Ext.getCmp('userdet_reports').setValue(rec.get("Access_Reports"));  
            Ext.getCmp('userdet_usermanagement').setValue(rec.get("Access_UserManagement"));  

            offaddusr.show();
       }

                           
    },

//Click of the delete button for an officer
    clickusergriddelete: function(button, e, options) {


       var g = Ext.getCmp('UsersGrid'); 
       if (!g.getSelectionModel().hasSelection())
       {
          Ext.Msg.show({
            title: 'Error!',
            msg: 'You must first select a User from the grid.',
            icon: Ext.Msg.ERROR,
            buttons: Ext.Msg.OK
          });             
       }
       else
       {
         var rec = g.getSelectionModel().getSelection()[0]; 
         var User_num = rec.get("User_Number")


         Ext.MessageBox.confirm('Please Confirm',
          'Are you sure you would like to delete this User?',
          function(choice)
          { 
           if( choice == 'yes')
           {

              var loadMask = new Ext.LoadMask(Ext.getBody(), {

              msg: 'Please Wait...'});
              loadMask.show();

              Ext.Ajax.request({
                url: 'app/php/accessUsersADM.php',
                params: 
                {
                        Action: 'D',
                        User_Number: User_num,
			User_ID: '',
			Password: '',
			Name: '',
			Organization: '',
                        Email: '',
                        Phone: '',
                        Active: '',
                        Access_NewIncident: '',
                        Access_QueryView: '',
                        Access_QueryUpdate: '',
                        Access_DatabaseMaint: '',
                        Access_Reports: '',
                        Access_UserManagement: ''

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
                       Ext.getStore('Users').loadData(result['Users']);
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

//Add or Update User Popup Form
//==========================================
//click of the submit button on the add/update user form
    submitUserForm: function(button, e, options) {

    var me = this;
    var frm = Ext.getCmp('usersdetails');

    pw1 = Ext.getCmp('userdet_password1').getValue().trim()
    pw2 = Ext.getCmp('userdet_password2').getValue().trim()
    mesg = "All invalid fields are highlighted in red.  To see specific field error, place mouse cursor over the ! next to field.  Please resubmit form once all fields have been corrected.";
    pwOK = "T";

    if (Ext.getCmp('userdet_password1').isVisible() == true)
    {
       pwOK = "F";
       if (pw1 == "" | pw2 == "")
          mesg = "Both Password and Confirm Password must be filled in.";
       else if (pw1.length < 8 | pw1.length > 12)
          mesg = "Password must be between 8 and 12 characters in length.";
       else if (pw1 != pw2)
          mesg = "Password and Confirm Password must match.";
       else
          pwOK = "T";
    }
    
    if (!frm.isValid() | pwOK != "T")
    {
       Ext.Msg.show({
          title: 'Error Forn not Submitted!',
          msg: mesg,
          icon: Ext.Msg.ERROR,
          buttons: Ext.Msg.OK}); 
    }
    else
    {
      var Action = Ext.getCmp('userdet_Action').getValue().trim();
      var User_Number = Ext.getCmp('userdet_user_number').getValue().trim();
      var User_ID = Ext.getCmp('userdet_userid').getValue().trim();
      var Password = Ext.getCmp('userdet_password1').getValue().trim();
      var Name = Ext.getCmp('userdet_name').getValue().trim();
      var Organization = Ext.getCmp('userdet_organization').getValue().trim();
      var Email = Ext.getCmp('userdet_email').getValue().trim();
      var Phone = Ext.getCmp('userdet_phone').getValue().trim();
      var Access_NewIncident = Ext.getCmp('userdet_newincident').getValue();
      var Access_QueryView = Ext.getCmp('userdet_queryview').getValue();
      var Access_QueryUpdate = Ext.getCmp('userdet_queryupdate').getValue();
      var Access_DatabaseMaint = Ext.getCmp('userdet_databasemaint').getValue();
      var Access_Reports = Ext.getCmp('userdet_reports').getValue();
      var Access_UserManagement = Ext.getCmp('userdet_usermanagement').getValue();

      var loadMask = new Ext.LoadMask(Ext.getBody(), {
          msg: 'Please Wait...'});
          loadMask.show();

          Ext.Ajax.request({
          url: 'app/php/accessUsersADM.php',
          params: 
          {
                        Action: Action,
                        User_Number: User_Number,
			User_ID: User_ID,
			Password: Password,
			Name: Name,
			Organization: Organization,
                        Email: Email,
                        Phone: Phone,
                        Active: '',
                        Access_NewIncident: Access_NewIncident,
                        Access_QueryView: Access_QueryView,
                        Access_QueryUpdate: Access_QueryUpdate,
                        Access_DatabaseMaint: Access_DatabaseMaint,
                        Access_Reports: Access_Reports,
                        Access_UserManagement: Access_UserManagement

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
               Ext.getStore('Users').loadData(result['Users']);
               loadMask.hide();
               var win2 = Ext.getCmp('winuserdetail')
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
//Click on the password reset button from the usergrid
    clickusergridpreset: function(button, e, options) {


       var me = this;
       var g = Ext.getCmp('UsersGrid'); 
       if (!g.getSelectionModel().hasSelection())
       {
          Ext.Msg.show({
            title: 'Error!',
            msg: 'You must first select a user from the grid.',
            icon: Ext.Msg.ERROR,
            buttons: Ext.Msg.OK
          });             
       }
       else
       {
           var offaddusr = new Ext.Window({
           id:'winpasswordreset',
           layout: 'fit',
           width: 370,
           height: 200,
           modal: true,
           title: 'Reset Password',
              items: [
              {
                  xtype: 'ResetPassword'
              }]
             });

            var rec = g.getSelectionModel().getSelection()[0]; 
            Ext.getCmp('passwordr_user_num').setValue(rec.get("User_Number"));  
            Ext.getCmp('passwordr_user_id').setValue(rec.get("User_ID"));  
            Ext.getCmp('passwordr_pw1').setValue("");  
            Ext.getCmp('passwordr_pw1').setValue("");  

            offaddusr.show();
       }

                           
    },
//Click on the Change Status button to on the user grid
    clickusergridchangestatus: function(button, e, options) {

       var me = this;
       var g = Ext.getCmp('UsersGrid'); 
       if (!g.getSelectionModel().hasSelection())
       {
          Ext.Msg.show({
            title: 'Error!',
            msg: 'To change the status of a user you must first select a customer from the grid.',
            icon: Ext.Msg.ERROR,
            buttons: Ext.Msg.OK
          });             
       }
       else
       {
         var rec = g.getSelectionModel().getSelection()[0]; 
         var sts = rec.get("Status");
         var User_num = rec.get("User_Number");
         var displaysts = "";
         var Active_val = "";

         if (sts == "Active")
         {
           displaysts = "Suspended";
           Active_val = "N";
         }
         else
         {
           displaysts = "Active";
           Active_val = "Y";
         }
         

        Ext.MessageBox.confirm('Please Confirm',
         'Would you like to change the status from ' + sts + ' to ' + displaysts  + '?',
         function( choice)
         { 
           if( choice == 'yes')
           {



              var loadMask = new Ext.LoadMask(Ext.getBody(), {


              msg: 'Please Wait...'});
              loadMask.show();

              Ext.Ajax.request({
              url: 'app/php/accessUsersADM.php',
              params: 
              {
                        Action: 'S',
                        User_Number: User_num,
			User_ID: '',
			Password: '',
			Name: '',
			Organization: '',
                        Email: '',
                        Phone: '',
                        Active: Active_val,
                        Access_NewIncident: '',
                        Access_QueryView: '',
                        Access_QueryUpdate: '',
                        Access_DatabaseMaint: '',
                        Access_Reports: '',
                        Access_UserManagement: ''

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
                     Ext.getStore('Users').loadData(result['Users']);
                     loadMask.hide();
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
              });




          } 
         });          
         
       }

           
    },

//Submit of Password Reset Form
//==========================================
//click of the submit button on the password reset form
    submitpwresetform: function(button, e, options) {

    var me = this;
    var frm = Ext.getCmp('ResetPassword');

    pw1 = Ext.getCmp('passwordr_pw1').getValue().trim()
    pw2 = Ext.getCmp('passwordr_pw2').getValue().trim()
    mesg = "All invalid fields are highlighted in red.  To see specific field error, place mouse cursor over the ! next to field.  Please resubmit form once all fields have been corrected.";
    pwOK = "T";

    if (Ext.getCmp('passwordr_pw1').isVisible() == true)
    {
       pwOK = "F";
       if (pw1 == "" | pw2 == "")
          mesg = "Both Password and Confirm Password must be filled in.";
       else if (pw1.length < 8 | pw1.length > 12)
          mesg = "Password must be between 8 and 12 characters in length.";
       else if (pw1 != pw2)
          mesg = "Password and Confirm Password must match.";
       else
          pwOK = "T";
    }
    
    if (!frm.isValid() | pwOK != "T")
    {
       Ext.Msg.show({
          title: 'Error Forn not Submitted!',
          msg: mesg,
          icon: Ext.Msg.ERROR,
          buttons: Ext.Msg.OK}); 
    }
    else
    {
      var Action = "P";
      var User_Number = Ext.getCmp('passwordr_user_num').getValue().trim();
      var User_ID = Ext.getCmp('passwordr_user_id').getValue().trim();

      var Password = pw1;

      var loadMask = new Ext.LoadMask(Ext.getBody(), {
          msg: 'Please Wait...'});
          loadMask.show();

          Ext.Ajax.request({
          url: 'app/php/accessUsersADM.php',
          params: 
          {
                        Action: Action,
                        User_Number: User_Number,
			User_ID: User_ID,
			Password: Password,
			Name: '',
			Organization: '',
                        Email: '',
                        Phone: '',
                        Active: '',
                        Access_NewIncident: '',
                        Access_QueryView: '',
                        Access_QueryUpdate: '',
                        Access_DatabaseMaint: '',
                        Access_Reports: '',
                        Access_UserManagement: ''

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
               Ext.getStore('Users').loadData(result['Users']);
               loadMask.hide();
               var win2 = Ext.getCmp('winpasswordreset')
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

  


//General Functions
//*******************************
//This function gets the security access for the user.
    getsecurity: function()
    {

        var me = this;
        Ext.Ajax.timeout = 30000; // this changes the 30 second  
        Ext.Ajax.request({
        url: 'app/php/getsecurityADM.php',
        params: {},
        scope :this,
        failure: function(conn, response, options, eOpts)
        {
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
                  var result = Ext.JSON.decode(conn.responseText, true);
                  if (!result)
                  {
                    result = {};
                    result.success = false;
                    result.msg = conn.responseText;
                  } 
                  if (result.success)
                  {

                   var Access_UserManagement = result.Access_UserManagement;
                   var Access_DatabaseMaint = result.Access_DatabaseMaint;


                   if (Access_UserManagement == "Y")
                   {   
                     Ext.getCmp('mmUsers').setVisible(true);
                   }   
                   if (Access_DatabaseMaint == "Y")
                   {   
                     Ext.getCmp('mmDatabase').setVisible(true);
                   } 

                   if (Ext.getCmp('mmUsers').isVisible() == true)
                      me.onButtonClickUsers();
                   else if (Ext.getCmp('mmDatabase').isVisible() == true)
                      me.onButtonClickDatabase();
                  }     
                  else
                  {
                    if (result.msg == "no_session")
                                window.location="index.html";
                    else
                    {
//                      loadMask.hide();
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
        
//        console.log('Exiting function getsettings ');

    }, //Function getsecurity


//This function will validate that a message box string has been added 
    validatenotblank: function(fld) 
    { 

    if (fld.trim() == "")
      return 0;
    return 1;
   },

//This function get all aggression types 
    getAggressionTypes: function()
    {

        var loadMask = new Ext.LoadMask(Ext.getBody(), {
        msg: 'Please Wait...'});
        loadMask.show();

        Ext.Ajax.timeout = 30000; // this changes the 30 second  
        Ext.Ajax.request({
        url: 'app/php/accessAgressionTypesADM.php',
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
        url: 'app/php/accessLocationsADM.php',
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
        url: 'app/php/accessMentalStatesADM.php',
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
        url: 'app/php/getincidentsADM.php',
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
           url: 'app/php/officersearchADM.php',
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
        url: 'app/php/accessNewspapersADM.php',
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
        url: 'app/php/accessOfficerAssignmentADM.php',
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
        url: 'app/php/accessOfficerCallTypeADM.php',
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
           url: 'app/php/suspectsearchADM.php',
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
        url: 'app/php/accessSourceTypeADM.php',
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
        url: 'app/php/accessWeaponsADM.php',
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
        url: 'app/php/accessDepartmentADM.php',
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
        url: 'app/php/accessOffDeptTypeADM.php',
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
        url: 'app/php/accessOffStatusADM.php',
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
        url: 'app/php/accessRaceADM.php',
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
        url: 'app/php/accessLocDetailsADM.php',
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

//This function get all users 
    getUsers: function()
    {

        var loadMask = new Ext.LoadMask(Ext.getBody(), {
        msg: 'Please Wait...'});
        loadMask.show();

        Ext.Ajax.timeout = 30000; // this changes the 30 second  
        Ext.Ajax.request({
//        url: 'app/php/users.json',
        url: 'app/php/accessUsersADM.php',
        params: {Action: 'Q',
                 User_Number: '',
                 User_ID: '',
                 Password: '',
                 Name: '',
                 Organization: '',
                 Email: '',
                 Phone: '',
                 Active: '',
                 Access_NewIncident: '',
                 Access_QueryView: '',
                 Access_QueryUpdate: '',
                 Access_DatabaseMaint: '',
                 Access_Reports: '',
                 Access_UserManagement: ''},
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
                      Ext.getStore('Users').loadData(result['Users']);
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

