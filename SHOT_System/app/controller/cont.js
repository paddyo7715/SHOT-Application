Ext.define('Packt.controller.cont', {
    extend: 'Ext.app.Controller',
    stores: [
        'States',
        'Regions',
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
        'InjuryDeathStore',
        'ShootingsThisYearStore',
        'TopFiveCityStateStore',
        'topFiveDepartmentsStore',
        'TotalShootingsStore',
        'RacePercentageStore',
        'RacePercentageStore2',
        'SuspectGenderStore',
        'chart_reports'

    ],
    models: [
        'State',
        'LocationDet',
        'Location',
        'source',
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
        'InjuryDeathModel',
        'ShootingsThisYearModel',
        'topFiveCitiesStatesModel',
        'topFiveDepartmentsModel',
        'TotalShootingsModel',
        'RacePercentageModel',
        'RacePercentageModel2',
        'SuspectGenderModel',
        'chart_report'
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
        'InjuryDeathRatio',
        'ShootingsThisYear',
        'TopFiveCityStateGrid',
        'topFiveDepartments',
        'TotalShootings',
        'Summarycontainer',
        'Summarycontainer2',
        'RacePercentage',
        'RacePercentage2',
        'SuspectGender',
        'ReportPieChart',
        'ReportGridChart',
        'ReportBarChart',
        'reportpanel',
        'reportsgrid',
        'reportfieldform'
    ],
    refs: [{
        ref: 'sourcesgrid',
        selector: 'sourcesgrid'
    }, {
        ref: 'customergrid',
        selector: 'customergrid'
    }, {
        ref: 'sourcesgrid',
        selector: 'sourcesgrid'
    }, {
        ref: 'officersearch',
        selector: 'officersearch'
    }, {
        ref: 'incidentofficergrid',
        selector: 'incidentofficergrid'
    }, {
        ref: 'suspectsearch',
        selector: 'suspectsearch'
    }, {
        ref: 'incidentsuspectgrid',
        selector: 'incidentsuspectgrid'
    }, {
        ref: 'reportsgrid',
        selector: 'reportsgrid'
    }, {
        // creates Packt.app.getContController().getIncidentgrid()
        // or - within the scope of this file - this.getIncidentgrid()
        ref: 'Incidentgrid',
        selector: 'Incidentgrid'
    }],
    init: function() {
        this.getsecurity();

        this.control({
            'appheader button#applogout': {
                click: this.onButtonClickLogout
            }
        });
        this.control({
            'MainMenu button#mmHome': {
                click: this.onButtonClickhome
            }
        });
        this.control({
            'MainMenu button#mmAddIncident': {
                click: this.onButtonClickAddIncident
            }
        });
        this.control({
            'MainMenu button#mmUpdateIncident': {
                click: this.onButtonClickUpdateIncident
            }
        });
        this.control({
            'MainMenu button#mmReports': {
                click: this.onButtonClickReports
            }
        });
        this.control({
            'incidentdetailform button[action=idsubmit]': {
                click: this.clickincidentdetailsubmit
            }
        });
        this.control({
            'incidentdetailform button#idcancelbtn': {
                click: this.clickincidentdetailcancel
            }
        });
        this.control({
            'incidentdetailform button#printPreview': {
                click: this.clickPrintPreviewButton
            }
        });
        this.control({
            'incidentdetailform combo#id_State': {
                select: this.selectstatecomboombo
            }
        });
        this.control({
            'incidentdetailform combo#id_location': {
                select: this.selectlocationcomboombo
            }
        });
        this.control({
            'incidentdetailform combo#id_time': {
                select: this.selectincidenttime
            }
        });
        this.control({
            'incidentdetailform combo#id_approx_time': {
                select: this.selectincidentapproxtime
            }
        });
        this.control({
            'IncidentTabPanel': {
                tabchange: this.onincidentTabchange
            }
        });
        this.control({
            'sourcesgrid button#sgaddbtn': {
                click: this.onButtonClicksourceadd
            }
        });
        this.control({
            'sourcesgrid button#sgeditbtn': {
                click: this.onButtonClicksourceedit
            }
        });
        this.control({
            'sourcesgrid button#sgdelete': {
                click: this.onButtonClicksourcedelete
            }
        });
        this.control({
            'sourcesgrid button#sgview': {
                click: this.onButtonClicksourceedit
            }
        });
        this.control({
            'sourcedetail button[action=sdsubmitbtn]': {
                click: this.clicksourcedetailsubmit
            }
        });
        this.control({
            'sourcedetail button#sdcancel': {
                click: this.clicksourcedetailscancel
            }
        });
        this.control({
            'sourcedetail button#sd_newspaperadd': {
                click: this.clicksourcedetailaddnewspaper
            }
        });
        this.control({
            'sourcedetail button#sd_sourcetypeadd': {
                click: this.clicksourcedetailaddsourcetype
            }
        });
        this.control({
            'sourcedetail combo#sd_SourceType': {
                select: this.selectsourcetypeombo
            }
        });
        this.control({
            'IncidentOfficerDetail button[action=iosubmitbtn]': {
                click: this.clickincidentoffdetailsubmit
            }
        });
        this.control({
            'IncidentOfficerDetail button#iocancel': {
                click: this.clickofficercancel
            }
        });
        this.control({
            'IncidentOfficerDetail button#io_search': {
                click: this.clickofficersearch
            }
        });
        this.control({
            'IncidentOfficerDetail button#io_off_add': {
                click: this.clickofficeradd
            }
        });
        this.control({
            'IncidentOfficerDetail button#io_addassignment': {
                click: this.clickaddoffassignment
            }
        });
        this.control({
            'IncidentOfficerDetail button#io_addcalltype': {
                click: this.clickaddoffcalltype
            }
        });
        this.control({
            'IncidentOfficerDetail button#io_adddepttype': {
                click: this.clickaddoffdepttype
            }
        });
        this.control({
            'IncidentOfficerDetail button#io_adddepartment': {
                click: this.clickadddepartment
            }
        });
        this.control({
            'IncidentOfficerDetail button#io_addstatus': {
                click: this.clickaddoffstatus
            }
        });
        this.control({
            'officersearch button#osselectbtn': {
                click: this.onButtonClickofficersearchselectbtn
            }
        });
        this.control({
            'addofficer button#off_submitbtn': {
                click: this.onButtonClickofficeraddbtn
            }
        });
        this.control({
            'incidentofficergrid button#ogaddbtn': {
                click: this.onButtonClickoffincadd
            }
        });
        this.control({
            'incidentofficergrid button#ogeditbtn': {
                click: this.onButtonClickoffincedit
            }
        });
        this.control({
            'incidentofficergrid button#ogdelete': {
                click: this.onButtonClickoffincdelete
            }
        });
        this.control({
            'incidentofficergrid button#ogview': {
                click: this.onButtonClickoffincedit
            }
        });
        this.control({
            'IncidentSuspectDetail button[action=susdet_submit]': {
                click: this.clickincidentsusdetailsubmit
            }
        });
        this.control({
            'IncidentSuspectDetail button#susdet_cancel': {
                click: this.clickincidentsusdetailcancel
            }
        });
        this.control({
            'IncidentSuspectDetail button#susdet_search': {
                click: this.clicksearchsuspectbtn
            }
        });
        this.control({
            'IncidentSuspectDetail combo#susdet_shotarea': {
                select: this.selectshotcombo
            }
        });
        this.control({
            'IncidentSuspectDetail button#susdet_clear_shot': {
                click: this.clickclearshotbtn
            }
        });
        this.control({
            'IncidentSuspectDetail button#susdet_suspect_add': {
                click: this.clickaddsuspectbtn
            }
        });
        this.control({
            'IncidentSuspectDetail button#susdet_addMentalState': {
                click: this.clickaddsusmentalstate
            }
        });
        this.control({
            'IncidentSuspectDetail button#susdet_addWeapons': {
                click: this.clickaddsusweapons
            }
        });
        this.control({
            'IncidentSuspectDetail button#susdet_addaggression': {
                click: this.clickaddaggression
            }
        });
        this.control({
            'addsuspect button#sus_submitbtn': {
                click: this.onButtonClicksuspectaddbtn
            }
        });
        this.control({
            'suspectsearch button#ssselectbtn': {
                click: this.onButtonClicksuspectsearchselectbtn
            }
        });
        this.control({
            'incidentsuspectgrid button#susgaddbtn': {
                click: this.onButtonClicksuspectincadd
            }
        });
        this.control({
            'incidentsuspectgrid button#susgeditbtn': {
                click: this.onButtonClicksuspectincedit
            }
        });
        this.control({
            'incidentsuspectgrid button#susgdelete': {
                click: this.onButtonClicksuspectincdelete
            }
        });
        this.control({
            'incidentsuspectgrid button#susgview': {
                click: this.onButtonClicksuspectincedit
            }
        });
        this.control({
            'Incidentgrid button#ig_searchbtn': {
                click: this.onButtonClickincidentsearch
            }
        });
        this.control({
            'Incidentgrid button#ig_edit': {
                click: this.onButtonClickincidentedit
            }
        });
        this.control({
            'Incidentgrid button#ig_delete': {
                click: this.onButtonClickincidentdelete
            }
        });
        this.control({
            'Incidentgrid button#ig_view': {
                click: this.onButtonClickincidentedit
            }
        });
        this.control({
            'reportfieldform button#rpt_fltr_submitbtn': {
                click: this.onButtonClickrunreport
            }
        });
        this.control({
            'reportfieldform combo#rpt_fltr_location': {
                select: this.selectlocationcomboomborpt
            }
        });


        this.loadinitstores();

    },
    //Page Header functions
    //=======================================
    //Logout button in Page Header
    onButtonClickLogout: function(button, e, options) {

        var me = this;
        var loadMask = new Ext.LoadMask(Ext.getBody(), {
            msg: 'Please Wait...'
        });
        loadMask.show();
        Ext.Ajax.request({
            url: 'app/php/logout.php',
            params: {},
            failure: function(conn, response, options, eOpts) {
                loadMask.hide();
                Ext.Msg.show({
                    title: 'Error!',
                    msg: conn.responseText,
                    icon: Ext.Msg.ERROR,
                    buttons: Ext.Msg.OK
                });
            },
            success: function(conn, response, options, eOpts) {
                var result = Ext.JSON.decode(conn.responseText, true);
                if (!result) {
                    loadMask.hide();
                    result = {};
                    result.success = false;
                    result.msg = conn.responseText;
                }
                if (result.success) {
                    loadMask.hide();
                    var vp = Ext.ComponentQuery.query('viewport')[0];
                    vp.destroy();
                    window.location.href = "index.html";
                } else {
                    loadMask.hide();
                    Ext.Msg.show({
                        title: 'Fail!',
                        msg: result.msg,
                        icon: Ext.Msg.ERROR,
                        buttons: Ext.Msg.OK
                    });
                }
            }
        }); //Ajax Request


    },
    //=======================================

    //Main Menu button event click functions
    //========================================
    //Home
    onButtonClickhome: function(button, e, options) {
        // console.log(myvar); 

        var cpanel = Ext.getCmp('centerpanel');
        cpanel.getLayout().setActiveItem(0);

    },
    //Setup new Incident
    onButtonClickAddIncident: function(button, e, options) {
        // console.log(myvar); 

        this.clearincidentforms();
        this.setIncidentUpdatability("A");
        var frm = Ext.getCmp('incidentdetailform');
        frm.setTitle('Add New Incident');
        Ext.getCmp('idsubmitbtn').setVisible(true);
        Ext.getCmp('IncidentTabPanel').setVisible(false);
        Ext.getCmp('id_action').setValue('Add');
        var cpanel = Ext.getCmp('centerpanel');
        cpanel.getLayout().setActiveItem(1);


    },
    //Update Incident
    onButtonClickUpdateIncident: function(button, e, options) {
        // console.log('Existing Customers Clicked '); 

        // reset search form fields in the toolbar
        var fields = this.getIncidentgrid().down('#ig_search_toolbar').query('textfield');
        Ext.each(fields, function() {
            this.setValue('');
        })
        this.clearincidentforms();
        this.searchIncidents(); // reset grid
        Ext.getCmp('IncidentTabPanel').setVisible(true);
        Ext.getCmp('IncidentTabPanel').setActiveTab(0);
    },
    //Reports
    onButtonClickReports: function(button, e, options) {
        var rptpanel = Ext.getCmp('rptpanel');
        rptpanel.getLayout().setActiveItem(0);

        var cpanel = Ext.getCmp('centerpanel');
        cpanel.getLayout().setActiveItem(3);
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

        if ((id_location != null && id_location.length > 0) && (id_locationdet == null || id_locationdet.length == 0)) {
            errm = "If you select a Location then you must also select a Location Detail!";
            msgerr = errm;
        }

        if (!frm.isValid() || errm.length > 0) {
            Ext.Msg.show({
                title: 'Error Forn not Submitted!',
                msg: msgerr,
                icon: Ext.Msg.ERROR,
                buttons: Ext.Msg.OK
            });
        } else {
            var tempText = "";
            var incnumber = Ext.getCmp('id_Incidentnum').getValue().trim();
            if (incnumber != null && incnumber.length > 0) {
                tempText = "edit";
            } else {
                tempText = "add";
            }

            Ext.MessageBox.confirm('Please Confirm',
                'Would you like to ' + tempText + ' this Incident?',
                function(choice) {
                    if (choice == 'yes') {
                        var id_Incidentname = Ext.getCmp('id_Incidentname').getValue().trim();
                        var id_lawsuit = Ext.getCmp('id_lawsuit').getValue();

                        var id_indoorsI = Ext.getCmp('id_indoor').getValue();
                        var id_indoorsO = Ext.getCmp('id_outdoor').getValue();
                        var id_indoors = "";
                        if (id_indoorsI == true) {
                            id_indoors = 'Y';
                        } else if (id_indoorsO == true) {
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
                            msg: 'Please Wait...'
                        });
                        loadMask.show();

                        Ext.Ajax.request({
                            url: 'app/php/addupdateIncident.php',
                            //                url: 'app/data/addeditincident.json',
                            params: {
                                id_Incidentnum: incnumber,
                                id_Incidentname: id_Incidentname,
                                id_user: '',
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
                            failure: function(conn, response, options, eOpts) {
                                loadMask.hide();
                                Ext.Msg.show({
                                    title: 'Error!',
                                    msg: conn.responseText,
                                    icon: Ext.Msg.ERROR,
                                    buttons: Ext.Msg.OK
                                });
                            },
                            success: function(conn, response, options, eOpts) {
                                var result = Ext.JSON.decode(conn.responseText, true);
                                if (!result) {
                                    loadMask.hide();
                                    result = {};
                                    result.success = false;
                                    result.msg = conn.responseText;
                                }
                                if (result.success) {
                                    loadMask.hide();
                                    if (AddEdit == "Add") {
                                        //                       Ext.getCmp('IncidentTabPanel').setVisible(true);
                                        //                       Ext.getCmp('IncidentTabPanel').setActiveItem(0);
                                        var oid = result['LAST_INSERT_ID'];
                                        Ext.getCmp('id_Incidentnum').setValue(oid);

                                        Ext.getCmp('IncidentTabPanel').setVisible(true);
                                        Ext.getCmp('IncidentTabPanel').setActiveTab(0);
                                        var cpanel = Ext.getCmp('incsourcepanel');
                                        cpanel.getLayout().setActiveItem(0);

                                    } else {
                                        Ext.getStore('Incidentslist').loadData(result['Incident']);
                                        var cpanel = Ext.getCmp('centerpanel');
                                        cpanel.getLayout().setActiveItem(2);
                                    }
                                } else {
                                    if (result.msg == "no_session")
                                        window.location = "index.html";
                                    else {
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
                        }); //Ajax Request
                    } //Yes to confirm add or edit
                }); //close messagebox confirm         
        } //end if form is valid

    },
    //Click on the Reset/Cancel button
    clickincidentdetailcancel: function(button, e, options) {
        var frm = Ext.getCmp('custdetailsform');
        var AddEdit = Ext.getCmp('id_action').getValue();

        if (AddEdit == "Add") {
            var cpanel = Ext.getCmp('centerpanel');
            cpanel.getLayout().setActiveItem(0);
        } else {
            var cpanel = Ext.getCmp('centerpanel');
            cpanel.getLayout().setActiveItem(2);
        }

    },

    /**
     * Click on the Print Preview button
     */
    clickPrintPreviewButton: function() {
        // console.log('Print Preview');
        // for speed consider using Ext.ComponentQuery with caching instead of multiple Ext.getCmp

        var data = {};
        data.Incident_ID = Ext.getCmp('id_Incidentnum').getValue();
        data.Incident_Name = Ext.getCmp('id_Incidentname').getValue();
        data.Lawsuit = Ext.getCmp('id_lawsuit').getValue();

        // address
        data.Address_1 = Ext.getCmp('id_Address1').getValue();
        data.Address_2 = Ext.getCmp('id_address2').getValue();
        data.City = Ext.getCmp('id_City').getValue();
        data.zip = Ext.getCmp('id_zipcode').getValue();

        // state and region
        var state = Ext.getStore('States').findRecord('State_ID', Ext.getCmp('id_State').getValue());
        data.State = state ? state.get('State') : '';
        data.Region = state ? state.get('Region') : '';

        // geo
        data.latitude = Ext.getCmp('id_latitude').getValue();
        data.longitude = Ext.getCmp('id_longitude').getValue();
        
        // officers and shots
        data.Number_Officers_on_Scene = Ext.getCmp('id_officersscene').getValue();
        data.Off_Fired_Guns = Ext.getCmp('id_officersfiredguns').getValue();
        data.Total_Officer_Shots_Fired = Ext.getCmp('id_officersshotsfired').getValue();

        // date and time
        data.Date_Occured = Ext.getCmp('id_dateoccurred').getValue(); // full Date JS object, e.g. Wed Dec 16 2015 00:00:00 GMT-0500 (Eastern Standard Time)
        // careful! Date JS objects may be timezone-sensitive depending on the client (browser) location
        data.Time = Ext.getCmp('id_time').getValue(); // full Date JS object, with the date part of it set to Tue Jan 01 2008
        data.Approx_Time = Ext.getCmp('id_approx_time').getValue();

        // location
        var location = Ext.getStore('Locations').findRecord('Location_ID', Ext.getCmp('id_location').getValue());
        data.Location = location ? location.get('Location') : '';
        var location_det = Ext.getStore('LocationsDet').findRecord('Location_Detail_ID', Ext.getCmp('id_locationdet').getValue());
        data.LocationDet = location_det ? location_det.get('Location_Details') : '';
        data.Indoor = Ext.getCmp('id_indoor').getValue();
        data.Outdoor = Ext.getCmp('id_outdoor').getValue();

        // sources
        var s;
        data.sources = [];
        s = Ext.getStore('sources');
        if (s.getCount()) { // redundant? the for loop won't start if getRange() returns empty
            s = s.getRange();
            for (var item in s) {
                data.sources.push({
                    'Title': s[item].get('Title'),
                    'Author': s[item].get('Author'),
                    'Source_Date': s[item].get('Source_Date'), // short string, e.g. "2015-12-15"
                    'Link': s[item].get('Link'),
                    'Newspaper': s[item].get('Newspaper')
                    // "Source_ID"
                    // "Source_Type_ID"
                    // "Source"
                    // "Newspaper_ID"
                    // "Abstract"
                });
            }
        }

        // officers
        data.officers = [];
        s = Ext.getStore('incidentofficers');
        if (s.getCount()) {
            s = s.getRange();
            for (var item in s) {
                data.officers.push({
                    'Name': s[item].get('Name'),
                    'Age': s[item].get('Age'),
                    'Call_Type': s[item].get('Call_Type'),
                    'Dept_Type': s[item].get('Dept_Type'),
                    'Department': s[item].get('Department')
                    // 'Assignment_ID'
                    // 'Call_Type_ID'
                    // 'Department_ID'
                    // 'Dept_Type_ID'
                    // 'Exp_in_Cluster'
                    // 'Experience'
                    // 'Gender'
                    // 'Incident_Officer_ID'
                    // 'Officer_Casualty'
                    // 'Officer_ID'
                    // 'Outside_Agency_Assist'
                    // 'Race'
                    // 'Race_ID'
                    // 'Shots_Files'
                    // 'Status_ID'
                });
            }
        }

        // subjects
        data.subjects = [];
        s = Ext.getStore('incidentsuspects');
        if (s.getCount()) {
            s = s.getRange();
            for (var item in s) {
                data.subjects.push({
                    'Name': s[item].get('Suspect_Name'),
                    'Gender': s[item].get('Gender'),
                    'Race': s[item].get('Race'),
                    'Fatality': s[item].get('Fatality'),
                    'Weapon_Type': s[item].get('Weapons_Type'),
                    'Aggression': s[item].get('Aggression_Type')
                    // 'Age'
                    // 'Foot_Chase'
                    // 'Gang_Affiliation'
                    // 'Incident_Suspect_ID'
                    // 'Injury'
                    // 'Mental_Status_ID'
                    // 'Race_ID'
                    // 'Shots_Fired'
                    // 'Suspect_ID'
                    // 'Type_of_Agression_ID'
                    // 'US_Citizen'
                    // 'Vehicle_Chase'
                    // 'Vehicle_Use_hit_and_run'
                    // 'Weapons_ID'
                    // 'shot_string'
                });
            }
        }

        // send
        this.open('POST', 'print-preview.php', data, 'PrintPreview');
    },

    /**
     * small library that opens new windows (pop-up)
     * from here: http://stackoverflow.com/questions/17793183/how-to-replace-window-open-with-a-post
     * 
     * @param verb : 'GET'|'POST'
     * @param url
     * @param data : payload
     * @param target : an optional opening target (a name, or "_blank"), defaults to "_self"
     */
    open: function(verb, url, data, target) {
      var form = document.createElement("form");
      form.action = url;
      form.method = verb;
      form.target = target || "_self";
      if (data) {
        for (var key in data) {
          var input = document.createElement("textarea");
          input.name = key;
          input.value = typeof data[key] === 'object' ? Ext.encode(data[key]) : data[key];
          form.appendChild(input);
        }
      }
      form.style.display = 'none';
      document.body.appendChild(form);
      form.submit();
      // ideally we should form.destroy() here, to avoid memory leaks
    },

    //Select from the state combo box
    selectstatecomboombo: function(combo, e, options) {
        var val = combo.getValue();
        this.setStateRegion(val);
    }, // end selectstatecomboombo
    //Select from the location combo box
    selectlocationcomboombo: function(combo, e, options) {

        var val = combo.getValue();
        var LocationsDet = Ext.getStore('LocationsDet');
        LocationsDet.clearFilter(true);
        LocationsDet.filter('Location_ID', val);
        Ext.getCmp('id_locationdet').reset();

    }, // end selectlocationdetcomboombo
    //Select from the time picker
    selectincidenttime: function(combo, e, options) {

        var val = combo.getRawValue();
        var approx_id = this.getapproxtime(val);
        Ext.getCmp('id_approx_time').setValue(approx_id);


    }, // end selectincidenttime
    //Select from the approx time drop down listbox
    selectincidentapproxtime: function(combo, e, options) {

        var val = combo.getValue();
        var time_v = Ext.getCmp('id_time').getRawValue();
        // console.log("time_v: " + time_v);
        if (time_v != null && time_v.length > 0) {
            var shouldbeval = this.getapproxtime(time_v);
            if (shouldbeval != val) {
                Ext.Msg.show({
                    title: 'Error!',
                    msg: 'Invalid Approximate Time, Given the Time Selected',
                    icon: Ext.Msg.ERROR,
                    buttons: Ext.Msg.OK
                });
                combo.reset();
            }
        }


    }, // end selectincidentapproxtime
    //================================

    //Incident Tab View
    //=================================
    onincidentTabchange: function(AdminTabPanel, tab) {


        switch (AdminTabPanel.items.indexOf(tab)) {
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
        // console.log('Existing Customers Clicked '); 

        var frm = Ext.getCmp('sourcedetail');

        frm.getForm().reset();
        frm.setTitle('Setup New Source');
        Ext.getCmp('sdsubmit').setText("Add");
        Ext.getCmp('sdsubmit').setVisible(true);
        this.NewspaperDisabled("");
        var cpanel = Ext.getCmp('incsourcepanel');
        cpanel.getLayout().setActiveItem(1);

    },

    //Click of the Edit button to edit an existing source
    onButtonClicksourceedit: function(button, e, options) {

        var g = Ext.getCmp('sourcesgrid');
        if (!g.getSelectionModel().hasSelection()) {
            Ext.Msg.show({
                title: 'Error!',
                msg: 'You must first select a source from the grid.',
                icon: Ext.Msg.ERROR,
                buttons: Ext.Msg.OK
            });
        } else {
            var rec = g.getSelectionModel().getSelection()[0];
            var frm = Ext.getCmp('sourcedetail');

            frm.getForm().reset();
            // console.log(button.getText()); 
            if (button.getText() == "Edit") {
                frm.setTitle('Edit Source');
                Ext.getCmp('sdsubmit').setVisible(true);
                Ext.getCmp('sdsubmit').setText("Edit");
            } else //Must be View
            {
                frm.setTitle('View Source');
                Ext.getCmp('sdsubmit').setVisible(false);

            }




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


    }, //onButtonClicksourceedit

    //Click of the delete button
    onButtonClicksourcedelete: function(button, e, options) {

        var g = Ext.getCmp('sourcesgrid');
        if (!g.getSelectionModel().hasSelection()) {
            Ext.Msg.show({
                title: 'Error!',
                msg: 'You must first select a source from the grid.',
                icon: Ext.Msg.ERROR,
                buttons: Ext.Msg.OK
            });
        } else {
            var rec = g.getSelectionModel().getSelection()[0];
            var Source_ID = rec.get("Source_ID");
            var Incident_ID = Ext.getCmp('id_Incidentnum').getValue();
            Ext.MessageBox.confirm('Please Confirm',
                'Are you sure you would like to delete this source ?',
                function(choice) {
                    if (choice == 'yes') {

                        var loadMask = new Ext.LoadMask(Ext.getBody(), {

                            msg: 'Please Wait...'
                        });
                        loadMask.show();

                        Ext.Ajax.request({
                            url: 'app/php/deletesource.php',
                            //                url: 'app/data/sources.json',
                            params: {
                                Source_ID: Source_ID,
                                Incident_ID: Incident_ID
                            },
                            failure: function(conn, response, options, eOpts) {
                                loadMask.hide();
                                Ext.Msg.show({
                                    title: 'Error!',
                                    msg: conn.responseText,
                                    icon: Ext.Msg.ERROR,
                                    buttons: Ext.Msg.OK
                                });
                            },
                            success: function(conn, response, options, eOpts) {
                                loadMask.hide();
                                var result = Ext.JSON.decode(conn.responseText, true);
                                if (!result) {
                                    result = {};
                                    result.success = false;
                                    result.msg = conn.responseText;
                                }
                                if (result.success) {
                                    Ext.getStore('sources').loadData(result['Incident_Source']);
                                    loadMask.hide();
                                } else {
                                    if (result.msg == "no_session")
                                        window.location = "index.html";
                                    else {
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
        if (!frm.isValid()) {
            Ext.Msg.show({
                title: 'Error Forn not Submitted!',
                msg: 'All invalid fields are highlighted in red.  To see specific field error, place mouse cursor over the "!" next to field.  Please resubmit form once all fields have been corrected.  ',
                icon: Ext.Msg.ERROR,
                buttons: Ext.Msg.OK
            });
        } else {
            var tempText = "";
            if (Ext.getCmp('sdsubmit').getText() == "Add") {
                tempText = "edit";
            } else {
                tempText = "add";
            }

            Ext.MessageBox.confirm('Please Confirm',
                'Would you like to ' + tempText + ' this Source?',
                function(choice) {
                    if (choice == 'yes') {

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
                            msg: 'Please Wait...'
                        });
                        loadMask.show();

                        Ext.Ajax.request({
                            url: 'app/php/addeditsources.php',
                            //                url: 'app/data/addeditsources.json',
                            params: {
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
                            failure: function(conn, response, options, eOpts) {
                                loadMask.hide();
                                Ext.Msg.show({
                                    title: 'Error!',
                                    msg: conn.responseText,
                                    icon: Ext.Msg.ERROR,
                                    buttons: Ext.Msg.OK
                                });
                            },
                            success: function(conn, response, options, eOpts) {
                                var result = Ext.JSON.decode(conn.responseText, true);
                                if (!result) {
                                    loadMask.hide();
                                    result = {};
                                    result.success = false;
                                    result.msg = conn.responseText;
                                }
                                if (result.success) {
                                    Ext.getStore('sources').loadData(result['Incident_Source']);
                                    var cpanel = Ext.getCmp('incsourcepanel');
                                    cpanel.getLayout().setActiveItem(0);
                                    loadMask.hide();
                                } else {
                                    if (result.msg == "no_session")
                                        window.location = "index.html";
                                    else {
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
                        }); //Ajax Request
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

        Ext.Msg.prompt('Add New Newspaper', 'Newspaper:', function(btn, text) {
            if (btn == 'ok') {

                if (!me.validatenotblank(text.trim())) {
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


                    msg: 'Please Wait...'
                });
                loadMask.show();

                Ext.Ajax.request({
                    url: 'app/php/accessNewspapers.php',
                    //                url: 'app/data/getNewspapers.json',
                    params: {
                        Action: 'A',
                        Newspaper_ID: '',
                        Newspaper: Newspaper
                    },
                    failure: function(conn, response, options, eOpts) {
                        loadMask.hide();
                        Ext.Msg.show({
                            title: 'Error!',
                            msg: conn.responseText,
                            icon: Ext.Msg.ERROR,
                            buttons: Ext.Msg.OK
                        });
                    },
                    success: function(conn, response, options, eOpts) {
                        var result = Ext.JSON.decode(conn.responseText, true);
                        if (!result) {
                            loadMask.hide();
                            result = {};
                            result.success = false;
                            result.msg = conn.responseText;
                        }
                        if (result.success) {
                            Ext.getStore('Newspapers').loadData(result['Newspapers']);
                            var cpanel = Ext.getCmp('incsourcepanel');
                            cpanel.getLayout().setActiveItem(1);
                            loadMask.hide();
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

            }
        }, null, false, '', null);



    },

    //Click on that Add btn next to source types to add a new source type
    clicksourcedetailaddsourcetype: function(button, e, options) {

        var me = this;

        Ext.Msg.prompt('Add New Source Type', 'Source Type:', function(btn, text) {
            if (btn == 'ok') {

                if (!me.validatenotblank(text.trim())) {
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


                    msg: 'Please Wait...'
                });
                loadMask.show();

                Ext.Ajax.request({
                    url: 'app/php/accessSourceType.php',
                    //                url: 'app/data/getSourceTypes.json',
                    params: {
                        Action: 'A',
                        Source_Type_ID: '',
                        Source: Source
                    },
                    failure: function(conn, response, options, eOpts) {
                        loadMask.hide();
                        Ext.Msg.show({
                            title: 'Error!',
                            msg: conn.responseText,
                            icon: Ext.Msg.ERROR,
                            buttons: Ext.Msg.OK
                        });
                    },
                    success: function(conn, response, options, eOpts) {
                        var result = Ext.JSON.decode(conn.responseText, true);
                        if (!result) {
                            loadMask.hide();
                            result = {};
                            result.success = false;
                            result.msg = conn.responseText;
                        }
                        if (result.success) {
                            Ext.getStore('sourcetypes').loadData(result['Source_Type']);
                            var cpanel = Ext.getCmp('incsourcepanel');
                            cpanel.getLayout().setActiveItem(1);
                            loadMask.hide();
                        } else {
                            if (result.msg == "no_session")
                                window.location = "index.html";
                            else {
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
        }, null, false, '', null);



    },
    //Select from the source type combo box
    selectsourcetypeombo: function(combo, e, options) {

        var val = combo.getValue();
        var sourcetype_model = Ext.getStore('sourcetypes').findRecord('Source_Type_ID', val);
        var sourcetype_display = sourcetype_model.get('Source');
        this.NewspaperDisabled(sourcetype_display);

    }, // end selectsourcetypeombo
    //================================

    //Incident Officer View
    //================================
    //Click on the submit button
    clickincidentoffdetailsubmit: function(button, e, options) {

        var me = this;
        var frm = Ext.getCmp('IncidentOfficerDetail');
        var Officer_ID = Ext.getCmp('io_officer_id').getValue();


        if (!frm.isValid() || Officer_ID.length == 0) {
            Ext.Msg.show({
                title: 'Error Forn not Submitted!',
                msg: 'Not all required fields entered.  Note: You must select an officer for the incident. ',
                icon: Ext.Msg.ERROR,
                buttons: Ext.Msg.OK
            });
        } else {
            var tempText = "";
            if (Ext.getCmp('iosubmit').getText() == "Add") {
                tempText = "edit";
            } else {
                tempText = "add";
            }

            Ext.MessageBox.confirm('Please Confirm',
                'Would you like to ' + tempText + ' this Incident Officer?',
                function(choice) {
                    if (choice == 'yes') {

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
                            msg: 'Please Wait...'
                        });
                        loadMask.show();

                        Ext.Ajax.request({
                            url: 'app/php/addeditincidentofficer.php',
                            //                url: 'app/data/addeditincidentofficer.json',
                            params: {
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
                            failure: function(conn, response, options, eOpts) {
                                loadMask.hide();
                                Ext.Msg.show({
                                    title: 'Error!',
                                    msg: conn.responseText,
                                    icon: Ext.Msg.ERROR,
                                    buttons: Ext.Msg.OK
                                });
                            },
                            success: function(conn, response, options, eOpts) {
                                var result = Ext.JSON.decode(conn.responseText, true);
                                if (!result) {
                                    loadMask.hide();
                                    result = {};
                                    result.success = false;
                                    result.msg = conn.responseText;
                                }
                                if (result.success) {
                                    Ext.getStore('incidentofficers').loadData(result['Incident_Officer']);
                                    var cpanel = Ext.getCmp('incofficerspanel');
                                    cpanel.getLayout().setActiveItem(0);
                                    loadMask.hide();
                                } else {
                                    if (result.msg == "no_session")
                                        window.location = "index.html";
                                    else {
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
                        }); //Ajax Request
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

        if (Name_search == null || Name_search == '') {
            Ext.Msg.show({
                title: 'Error!',
                msg: 'To search for an officer, you must enter a value in the Officer Search box.',
                icon: Ext.Msg.ERROR,
                buttons: Ext.Msg.OK
            });
        } else {
            var loadMask = new Ext.LoadMask(Ext.getBody(), {
                msg: 'Please Wait...'
            });
            loadMask.show();
            Ext.Ajax.timeout = 30000; // this changes the 30 second  
            Ext.Ajax.request({
                url: 'app/php/officersearch.php',
                //           url: 'app/data/officersearch.json',
                params: {
                    Name_search: Name_search
                },
                scope: this,
                failure: function(conn, response, options, eOpts) {
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
                success: function(conn, response, options, eOpts) {
                    loadMask.hide();
                    var result = Ext.JSON.decode(conn.responseText, true);
                    if (!result) {
                        result = {};
                        result.success = false;
                        result.msg = conn.responseText;
                    }
                    if (result.success) {
                        loadMask.hide();
                        //Received response from server
                        if (result.num_rows == "0")
                            Ext.Msg.alert('Results', 'No Officers Match the Search Name.');
                        else {
                            Ext.getStore('officer_search').loadData(result['officersearch']);
                            var valwin = new Ext.Window({
                                id: 'xgrid-win-osearch',
                                layout: 'fit',
                                width: 510,
                                height: 320,
                                modal: true,
                                title: 'Please select the officer or click cancel if the correct officer is not shown.',
                                items: [{
                                    xtype: 'officersearch'
                                }]
                            });
                            valwin.show();
                        }
                    } else {
                        if (result.msg == "no_session")
                            window.location = "index.html";
                        else {
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
            id: 'winoffadd',
            layout: 'fit',
            width: 410,
            height: 370,
            modal: true,
            title: '',
            items: [{
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

        Ext.Msg.prompt('Add New Officer Assignment', 'Assignment:', function(btn, text) {
            if (btn == 'ok') {

                if (!me.validatenotblank(text.trim())) {
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


                    msg: 'Please Wait...'
                });
                loadMask.show();

                Ext.Ajax.request({
                    url: 'app/php/accessOfficerAssignment.php',
                    //                url: 'app/data/addOffAssignments.json',
                    params: {
                        Action: 'A',
                        Assignment_ID: '',
                        Assignment: Assignment
                    },
                    failure: function(conn, response, options, eOpts) {
                        loadMask.hide();
                        Ext.Msg.show({
                            title: 'Error!',
                            msg: conn.responseText,
                            icon: Ext.Msg.ERROR,
                            buttons: Ext.Msg.OK
                        });
                    },
                    success: function(conn, response, options, eOpts) {
                        var result = Ext.JSON.decode(conn.responseText, true);
                        if (!result) {
                            loadMask.hide();
                            result = {};
                            result.success = false;
                            result.msg = conn.responseText;
                        }
                        if (result.success) {
                            Ext.getStore('officerassignments').loadData(result['Officer_Assignment']);
                            var cpanel = Ext.getCmp('incofficerspanel');
                            cpanel.getLayout().setActiveItem(1);
                            loadMask.hide();
                        } else {
                            if (result.msg == "no_session")
                                window.location = "index.html";
                            else {
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
        }, null, false, '', null);



    },
    //Click on that Add btn next to officer call types to add a new officer call type
    clickaddoffcalltype: function(button, e, options) {

        var me = this;

        Ext.Msg.prompt('Add New Officer Call Type', 'Call Type:', function(btn, text) {
            if (btn == 'ok') {

                if (!me.validatenotblank(text.trim())) {
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


                    msg: 'Please Wait...'
                });
                loadMask.show();

                Ext.Ajax.request({
                    url: 'app/php/accessOfficerCallType.php',
                    params: {
                        Action: 'A',
                        Call_Type_ID: '',
                        Call_Type: Call_Type
                    },
                    failure: function(conn, response, options, eOpts) {
                        loadMask.hide();
                        Ext.Msg.show({
                            title: 'Error!',
                            msg: conn.responseText,
                            icon: Ext.Msg.ERROR,
                            buttons: Ext.Msg.OK
                        });
                    },
                    success: function(conn, response, options, eOpts) {
                        var result = Ext.JSON.decode(conn.responseText, true);
                        if (!result) {
                            loadMask.hide();
                            result = {};
                            result.success = false;
                            result.msg = conn.responseText;
                        }
                        if (result.success) {
                            Ext.getStore('officercalltypes').loadData(result['Officer_Call_Type']);
                            var cpanel = Ext.getCmp('incofficerspanel');
                            cpanel.getLayout().setActiveItem(1);
                            loadMask.hide();
                        } else {
                            if (result.msg == "no_session")
                                window.location = "index.html";
                            else {
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
        }, null, false, '', null);



    },
    //Click on that Add btn next to department types to add a new department type
    clickaddoffdepttype: function(button, e, options) {

        var me = this;

        Ext.Msg.prompt('Add New Department Type', 'Department Type:', function(btn, text) {
            if (btn == 'ok') {

                if (!me.validatenotblank(text.trim())) {
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


                    msg: 'Please Wait...'
                });
                loadMask.show();

                Ext.Ajax.request({
                    url: 'app/php/accessOffDeptType.php',
                    //                url: 'app/data/addOffDeptTypes.json',
                    params: {
                        Action: 'A',
                        Dept_Type_ID: '',
                        Dept_Type: Dept_Type
                    },
                    failure: function(conn, response, options, eOpts) {
                        loadMask.hide();
                        Ext.Msg.show({
                            title: 'Error!',
                            msg: conn.responseText,
                            icon: Ext.Msg.ERROR,
                            buttons: Ext.Msg.OK
                        });
                    },
                    success: function(conn, response, options, eOpts) {
                        var result = Ext.JSON.decode(conn.responseText, true);
                        if (!result) {
                            loadMask.hide();
                            result = {};
                            result.success = false;
                            result.msg = conn.responseText;
                        }
                        if (result.success) {
                            Ext.getStore('depttypes').loadData(result['Officer_Dept_Type']);
                            var cpanel = Ext.getCmp('incofficerspanel');
                            cpanel.getLayout().setActiveItem(1);
                            loadMask.hide();
                        } else {
                            if (result.msg == "no_session")
                                window.location = "index.html";
                            else {
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
        }, null, false, '', null);



    },
    //Click on that Add btn next to department to add a new department
    clickadddepartment: function(button, e, options) {

        var me = this;

        Ext.Msg.prompt('Add New Department', 'Department:', function(btn, text) {
            if (btn == 'ok') {

                if (!me.validatenotblank(text.trim())) {
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


                    msg: 'Please Wait...'
                });
                loadMask.show();

                Ext.Ajax.request({
                    url: 'app/php/accessDepartment.php',
                    //                url: 'app/data/addOffDeptments.json',
                    params: {
                        Action: 'A',
                        Department_ID: '',
                        Department: Department
                    },
                    failure: function(conn, response, options, eOpts) {
                        loadMask.hide();
                        Ext.Msg.show({
                            title: 'Error!',
                            msg: conn.responseText,
                            icon: Ext.Msg.ERROR,
                            buttons: Ext.Msg.OK
                        });
                    },
                    success: function(conn, response, options, eOpts) {
                        var result = Ext.JSON.decode(conn.responseText, true);
                        if (!result) {
                            loadMask.hide();
                            result = {};
                            result.success = false;
                            result.msg = conn.responseText;
                        }
                        if (result.success) {
                            Ext.getStore('departments').loadData(result['Officer_Department']);
                            var cpanel = Ext.getCmp('incofficerspanel');
                            cpanel.getLayout().setActiveItem(1);
                            loadMask.hide();
                        } else {
                            if (result.msg == "no_session")
                                window.location = "index.html";
                            else {
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
        }, null, false, '', null);



    },
    //Click on that Add btn next to officer status to add a new officer status
    clickaddoffstatus: function(button, e, options) {

        var me = this;

        Ext.Msg.prompt('Add New Officer Status', 'Officer Status:', function(btn, text) {
            if (btn == 'ok') {

                if (!me.validatenotblank(text.trim())) {
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


                    msg: 'Please Wait...'
                });
                loadMask.show();

                Ext.Ajax.request({
                    url: 'app/php/accessOffStatus.php',
                    //                url: 'app/data/addOffStatus.json',
                    params: {
                        Action: 'A',
                        Status_ID: '',
                        Status: Status
                    },
                    failure: function(conn, response, options, eOpts) {
                        loadMask.hide();
                        Ext.Msg.show({
                            title: 'Error!',
                            msg: conn.responseText,
                            icon: Ext.Msg.ERROR,
                            buttons: Ext.Msg.OK
                        });
                    },
                    success: function(conn, response, options, eOpts) {
                        var result = Ext.JSON.decode(conn.responseText, true);
                        if (!result) {
                            loadMask.hide();
                            result = {};
                            result.success = false;
                            result.msg = conn.responseText;
                        }
                        if (result.success) {
                            Ext.getStore('officerstatuss').loadData(result['Officer_Status']);
                            var cpanel = Ext.getCmp('incofficerspanel');
                            cpanel.getLayout().setActiveItem(1);
                            loadMask.hide();
                        } else {
                            if (result.msg == "no_session")
                                window.location = "index.html";
                            else {
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
        }, null, false, '', null);



    },
    //=================================

    //Officer Search Grid
    //=================================
    //click of the select officer search grid button
    onButtonClickofficersearchselectbtn: function(button, e, options) {

        var g = Ext.getCmp('officersearch');
        if (!g.getSelectionModel().hasSelection()) {
            Ext.Msg.show({
                title: 'Error!',
                msg: 'No Officer Selected.  Please Select an officer from the Grid Before Clicking Select.',
                icon: Ext.Msg.ERROR,
                buttons: Ext.Msg.OK
            });
        } else {
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

        if (!frm.isValid()) {
            Ext.Msg.show({
                title: 'Error Forn not Submitted!',
                msg: 'All invalid fields are highlighted in red.  To see specific field error, place mouse cursor over the "!" next to field.  Please resubmit form once all fields have been corrected.  ',
                icon: Ext.Msg.ERROR,
                buttons: Ext.Msg.OK
            });
        } else {
            var Action = Ext.getCmp('off_add_Action').getValue().trim();
            var Function = Ext.getCmp('off_add_Function').getValue().trim();
            var Officer_ID = Ext.getCmp('off_add_officerID').getValue().trim();

            var Name = Ext.getCmp('off_name').getValue().trim();

            var gmale = Ext.getCmp('offgenderM');
            var gfemale = Ext.getCmp('offgenderF');
            var label_gender = '';
            var input_gender = '';

            if (gmale.getValue() == true) {
                label_gender = 'Male';
                input_gender = 'M';
            } else {
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
                function(choice) {
                    if (choice == 'yes') {


                        var loadMask = new Ext.LoadMask(Ext.getBody(), {
                            msg: 'Please Wait...'
                        });
                        loadMask.show();

                        Ext.Ajax.request({
                            url: 'app/php/accessOfficers.php',
                            params: {
                                Action: Action,
                                Function: Function,
                                Name: Name,
                                Gender: input_gender,
                                Race_ID: raceid,
                                AdditionalInfo: Add_info,
                                Officer_ID: Officer_ID

                            },
                            failure: function(conn, response, options, eOpts) {
                                loadMask.hide();
                                Ext.Msg.show({
                                    title: 'Error!',
                                    msg: conn.responseText,
                                    icon: Ext.Msg.ERROR,
                                    buttons: Ext.Msg.OK
                                });
                            },
                            success: function(conn, response, options, eOpts) {
                                var result = Ext.JSON.decode(conn.responseText, true);
                                if (!result) {
                                    loadMask.hide();
                                    result = {};
                                    result.success = false;
                                    result.msg = conn.responseText;
                                }
                                if (result.success) {
                                    // console.log(result['LAST_INSERT_ID']);

                                    loadMask.hide();
                                    if (Function == 'O') {
                                        var cpanel = Ext.getCmp('incsourcepanel');


                                        var oid = result['LAST_INSERT_ID'];

                                        Ext.getCmp('io_officer_id').setValue(oid);
                                        Ext.getCmp('io_officername').setValue(Name);
                                        Ext.getCmp('io_gender').setValue(label_gender);
                                        Ext.getCmp('io_race').setValue(label_race);
                                        Ext.getCmp('io_race_id').setValue(raceid);
                                    } else
                                        Ext.getStore('officer_search').loadData(result['officersearch']);


                                    var win = Ext.getCmp('winoffadd')
                                    win.destroy();


                                } else {
                                    if (result.msg == "no_session")
                                        window.location = "index.html";
                                    else {
                                        loadMask.hide();
                                        Ext.Msg.show({
                                            title: 'Fail!',
                                            msg: result.msg,
                                            icon: Ext.Msg.ERROR,
                                            buttons: Ext.Msg.OK
                                        });
                                    }
                                } // result is success          
                            } // success function
                        }); //Ajax Request
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
        Ext.getCmp('iosubmit').setVisible(true);

        var cpanel = Ext.getCmp('incofficerspanel');
        cpanel.getLayout().setActiveItem(1);

    }, // end onButtonClickoffincadd
    //Click of the Edit button to edit an existing incident officer
    onButtonClickoffincedit: function(button, e, options) {

        var g = Ext.getCmp('incidentofficergrid');
        if (!g.getSelectionModel().hasSelection()) {
            Ext.Msg.show({
                title: 'Error!',
                msg: 'You must first select an officer from the grid.',
                icon: Ext.Msg.ERROR,
                buttons: Ext.Msg.OK
            });
        } else {
            var rec = g.getSelectionModel().getSelection()[0];
            var frm = Ext.getCmp('IncidentOfficerDetail');

            frm.getForm().reset();
            frm.setTitle('Edit Incident Officer');
            Ext.getCmp('iosubmit').setText("Edit");

            if (button.getText() == "Edit") {
                frm.setTitle('Edit Incident Officer');
                Ext.getCmp('iosubmit').setText("Edit");
                Ext.getCmp('iosubmit').setVisible(true);
            } else //Must be View
            {
                frm.setTitle('View Incident Officer');
                Ext.getCmp('iosubmit').setVisible(false);
            }

            Ext.getCmp('io_outsideagency').setValue(rec.get("Outside_Agency_Assist"));
            console.log("outside agency: " + rec.get("Outside_Agency_Assist"));

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
            console.log(rec.get("Assignment_ID"));
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


    }, //incidentofficergrid
    //Click of the delete button
    onButtonClickoffincdelete: function(button, e, options) {


        var g = Ext.getCmp('incidentofficergrid');
        if (!g.getSelectionModel().hasSelection()) {
            Ext.Msg.show({
                title: 'Error!',
                msg: 'You must first select an incident officer from the grid.',
                icon: Ext.Msg.ERROR,
                buttons: Ext.Msg.OK
            });
        } else {
            var rec = g.getSelectionModel().getSelection()[0];
            var Incident_Officer_ID = rec.get("Incident_Officer_ID");
            var Incident_ID = Ext.getCmp('id_Incidentnum').getValue();
            Ext.MessageBox.confirm('Please Confirm',
                'Are you sure you would like to delete this incident officer?',
                function(choice) {
                    if (choice == 'yes') {

                        var loadMask = new Ext.LoadMask(Ext.getBody(), {

                            msg: 'Please Wait...'
                        });
                        loadMask.show();

                        Ext.Ajax.request({
                            url: 'app/php/deleteincidentofficer.php',
                            //                url: 'app/data/deleteincidentofficer.json',
                            params: {
                                Incident_Officer_ID: Incident_Officer_ID,
                                Incident_ID: Incident_ID
                            },
                            failure: function(conn, response, options, eOpts) {
                                loadMask.hide();
                                Ext.Msg.show({
                                    title: 'Error!',
                                    msg: conn.responseText,
                                    icon: Ext.Msg.ERROR,
                                    buttons: Ext.Msg.OK
                                });
                            },
                            success: function(conn, response, options, eOpts) {
                                loadMask.hide();
                                var result = Ext.JSON.decode(conn.responseText, true);
                                if (!result) {
                                    result = {};
                                    result.success = false;
                                    result.msg = conn.responseText;
                                }
                                if (result.success) {
                                    Ext.getStore('incidentofficers').loadData(result['Incident_Officer']);
                                    var cpanel = Ext.getCmp('incofficerspanel');
                                    cpanel.getLayout().setActiveItem(0);
                                    loadMask.hide();
                                } else {
                                    if (result.msg == "no_session")
                                        window.location = "index.html";
                                    else {
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
        Ext.getCmp('susdet_submit').setVisible(true);
        var cpanel = Ext.getCmp('incsuspectspanel');
        cpanel.getLayout().setActiveItem(1);

    }, // end onButtonClicksuspectincadd
    //Click of the Edit button to edit an existing incident suspect
    onButtonClicksuspectincedit: function(button, e, options) {

        var g = Ext.getCmp('incidentsuspectgrid');
        if (!g.getSelectionModel().hasSelection()) {
            Ext.Msg.show({
                title: 'Error!',
                msg: 'You must first select a subject from the grid.',
                icon: Ext.Msg.ERROR,
                buttons: Ext.Msg.OK
            });
        } else {
            var rec = g.getSelectionModel().getSelection()[0];
            var frm = Ext.getCmp('IncidentSuspectDetail');

            frm.getForm().reset();


            if (button.getText() == "Edit") {
                frm.setTitle('Edit Incident Subject');
                Ext.getCmp('susdet_submit').setText("Edit");
                Ext.getCmp('susdet_submit').setVisible(true);
            } else //Must be View
            {
                frm.setTitle('View Incident Subject');
                Ext.getCmp('susdet_submit').setVisible(false);
            }

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


    }, //onButtonClicksuspectincedit
    //Click of the delete button
    onButtonClicksuspectincdelete: function(button, e, options) {


        var g = Ext.getCmp('incidentsuspectgrid');
        if (!g.getSelectionModel().hasSelection()) {
            Ext.Msg.show({
                title: 'Error!',
                msg: 'You must first select a subject from the grid.',
                icon: Ext.Msg.ERROR,
                buttons: Ext.Msg.OK
            });
        } else {
            var rec = g.getSelectionModel().getSelection()[0];
            var Incident_Suspect_ID = rec.get("Incident_Suspect_ID");
            var Incident_ID = Ext.getCmp('id_Incidentnum').getValue();
            Ext.MessageBox.confirm('Please Confirm',
                'Are you sure you would like to delete this subject?',
                function(choice) {
                    if (choice == 'yes') {

                        var loadMask = new Ext.LoadMask(Ext.getBody(), {

                            msg: 'Please Wait...'
                        });
                        loadMask.show();

                        Ext.Ajax.request({
                            url: 'app/php/deleteincidentsuspect.php',
                            //                url: 'app/data/getincidentsuspects.json',
                            params: {
                                Incident_Suspect_ID: Incident_Suspect_ID,
                                Incident_ID: Incident_ID
                            },
                            failure: function(conn, response, options, eOpts) {
                                loadMask.hide();
                                Ext.Msg.show({
                                    title: 'Error!',
                                    msg: conn.responseText,
                                    icon: Ext.Msg.ERROR,
                                    buttons: Ext.Msg.OK
                                });
                            },
                            success: function(conn, response, options, eOpts) {
                                loadMask.hide();
                                var result = Ext.JSON.decode(conn.responseText, true);
                                if (!result) {
                                    result = {};
                                    result.success = false;
                                    result.msg = conn.responseText;
                                }
                                if (result.success) {
                                    Ext.getStore('incidentsuspects').loadData(result['Incident_Suspect']);
                                    var cpanel = Ext.getCmp('incsuspectspanel');
                                    cpanel.getLayout().setActiveItem(0);
                                    loadMask.hide();
                                } else {
                                    if (result.msg == "no_session")
                                        window.location = "index.html";
                                    else {
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
        var shot_string = Ext.getCmp('susdet_shot_text').getValue();
        var shot_values = Ext.getCmp('susdet_shot_value').getValue();

        // console.log('suspect id ' + Suspect_ID); 
        // console.log('shot_string ' + shot_string); 

        if (!frm.isValid() || Suspect_ID.length == 0 || shot_string.length == 0) {
            Ext.Msg.show({
                title: 'Error Forn not Submitted!',
                msg: 'Not all required fields entered.  Note: You must select a subject for the incident and indicate where he was shot. ',
                icon: Ext.Msg.ERROR,
                buttons: Ext.Msg.OK
            });
        } else {
            var tempText = "";
            if (Ext.getCmp('susdet_submit').getText() == "Add") {
                tempText = "add";
            } else {
                tempText = "edit";
            }

            Ext.MessageBox.confirm('Please Confirm',
                'Would you like to ' + tempText + ' this Incident Subject?',
                function(choice) {
                    if (choice == 'yes') {

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
                            msg: 'Please Wait...'
                        });
                        loadMask.show();

                        Ext.Ajax.request({
                            url: 'app/php/addeditincidentsuspect.php',
                            //                url: 'app/data/getincidentsuspects.json',
                            params: {
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
                            failure: function(conn, response, options, eOpts) {
                                loadMask.hide();
                                Ext.Msg.show({
                                    title: 'Error!',
                                    msg: conn.responseText,
                                    icon: Ext.Msg.ERROR,
                                    buttons: Ext.Msg.OK
                                });
                            },
                            success: function(conn, response, options, eOpts) {
                                var result = Ext.JSON.decode(conn.responseText, true);
                                if (!result) {
                                    loadMask.hide();
                                    result = {};
                                    result.success = false;
                                    result.msg = conn.responseText;
                                }
                                if (result.success) {
                                    Ext.getStore('incidentsuspects').loadData(result['Incident_Suspect']);
                                    var cpanel = Ext.getCmp('incsuspectspanel');
                                    cpanel.getLayout().setActiveItem(0);
                                    loadMask.hide();
                                } else {
                                    if (result.msg == "no_session")
                                        window.location = "index.html";
                                    else {
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
                        }); //Ajax Request
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

        if (Name_search == null || Name_search == '') {
            Ext.Msg.show({
                title: 'Error!',
                msg: 'To search for a subject, you must enter a value in the Subject Search box.',
                icon: Ext.Msg.ERROR,
                buttons: Ext.Msg.OK
            });
        } else {
            var loadMask = new Ext.LoadMask(Ext.getBody(), {
                msg: 'Please Wait...'
            });
            loadMask.show();
            Ext.Ajax.timeout = 30000; // this changes the 30 second  
            Ext.Ajax.request({
                url: 'app/php/suspectsearch.php',
                //           url: 'app/data/suspectsearch.json',
                params: {
                    Name_search: Name_search
                },
                scope: this,
                failure: function(conn, response, options, eOpts) {
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
                success: function(conn, response, options, eOpts) {
                    loadMask.hide();
                    var result = Ext.JSON.decode(conn.responseText, true);
                    if (!result) {
                        result = {};
                        result.success = false;
                        result.msg = conn.responseText;
                    }
                    if (result.success) {
                        loadMask.hide();
                        //Received response from server
                        if (result.num_rows == "0")
                            Ext.Msg.alert('Results', 'No Subjects Match the Search Name.');
                        else {
                            Ext.getStore('suspect_search').loadData(result['suspectsearch']);
                            var valwin = new Ext.Window({
                                id: 'xgrid-win-sus-ssearch',
                                layout: 'fit',
                                width: 510,
                                height: 320,
                                modal: true,
                                title: 'Please select a Subject or click cancel if the Correct Subject is not shown.',
                                items: [{
                                    xtype: 'suspectsearch'
                                }]
                            });
                            valwin.show();
                        }
                    } else {
                        if (result.msg == "no_session")
                            window.location = "index.html";
                        else {
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
            id: 'winsusadd',
            layout: 'fit',
            width: 410,
            height: 300,
            modal: true,
            title: '',
            items: [{
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


        // console.log('shot selected ' + combo.getValue()); 
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


    }, // end selectshotcombo
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

        Ext.Msg.prompt('Add New Mental State', 'Mental State:', function(btn, text) {
            if (btn == 'ok') {

                if (!me.validatenotblank(text.trim())) {
                    Ext.Msg.show({
                        title: 'Error!',
                        msg: 'Invalid Mental State.  The mental state can not be blank!',
                        icon: Ext.Msg.ERROR,
                        buttons: Ext.Msg.OK
                    });
                    return;
                }

                var Mental_Status = text.trim();
                var loadMask = new Ext.LoadMask(Ext.getBody(), {


                    msg: 'Please Wait...'
                });
                loadMask.show();

                Ext.Ajax.request({
                    url: 'app/php/accessMentalStates.php',
                    //                url: 'app/data/getmentalstates.json',
                    params: {
                        Action: 'A',
                        Mental_Status_ID: '',
                        Mental_Status: Mental_Status
                    },
                    failure: function(conn, response, options, eOpts) {
                        loadMask.hide();
                        Ext.Msg.show({
                            title: 'Error!',
                            msg: conn.responseText,
                            icon: Ext.Msg.ERROR,
                            buttons: Ext.Msg.OK
                        });
                    },
                    success: function(conn, response, options, eOpts) {
                        var result = Ext.JSON.decode(conn.responseText, true);
                        if (!result) {
                            loadMask.hide();
                            result = {};
                            result.success = false;
                            result.msg = conn.responseText;
                        }
                        if (result.success) {
                            Ext.getStore('MentalStates').loadData(result['Mental_States']);
                            var cpanel = Ext.getCmp('incsuspectspanel');
                            cpanel.getLayout().setActiveItem(1);
                            loadMask.hide();
                        } else {
                            if (result.msg == "no_session")
                                window.location = "index.html";
                            else {
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
        }, null, false, '', null);



    },
    //Click on that Add btn next to Weapons to add a new weapon
    clickaddsusweapons: function(button, e, options) {

        var me = this;

        Ext.Msg.prompt('Add New Weapon Type', 'Weapon Type:', function(btn, text) {
            if (btn == 'ok') {

                if (!me.validatenotblank(text.trim())) {
                    Ext.Msg.show({
                        title: 'Error!',
                        msg: 'Invalid Weapon Type.  The weapon type can not be blank!',
                        icon: Ext.Msg.ERROR,
                        buttons: Ext.Msg.OK
                    });
                    return;
                }

                var Weapons_Type = text.trim();
                var loadMask = new Ext.LoadMask(Ext.getBody(), {


                    msg: 'Please Wait...'
                });
                loadMask.show();

                Ext.Ajax.request({
                    url: 'app/php/accessWeapons.php',
                    //                url: 'app/data/getWeapons.json',
                    params: {
                        Action: 'A',
                        Weapons_ID: '',
                        Weapons_Type: Weapons_Type
                    },
                    failure: function(conn, response, options, eOpts) {
                        loadMask.hide();
                        Ext.Msg.show({
                            title: 'Error!',
                            msg: conn.responseText,
                            icon: Ext.Msg.ERROR,
                            buttons: Ext.Msg.OK
                        });
                    },
                    success: function(conn, response, options, eOpts) {
                        var result = Ext.JSON.decode(conn.responseText, true);
                        if (!result) {
                            loadMask.hide();
                            result = {};
                            result.success = false;
                            result.msg = conn.responseText;
                        }
                        if (result.success) {
                            Ext.getStore('Weapons').loadData(result['Weapons']);
                            var cpanel = Ext.getCmp('incsuspectspanel');
                            cpanel.getLayout().setActiveItem(1);
                            loadMask.hide();
                        } else {
                            if (result.msg == "no_session")
                                window.location = "index.html";
                            else {
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
        }, null, false, '', null);



    },
    //Click on that Add btn next to Aggression Types to add a new aggression type
    clickaddaggression: function(button, e, options) {

        var me = this;

        Ext.Msg.prompt('Add New Aggression Type', 'Aggression Type:', function(btn, text) {
            if (btn == 'ok') {

                if (!me.validatenotblank(text.trim())) {
                    Ext.Msg.show({
                        title: 'Error!',
                        msg: 'Invalid Aggression Type.  The aggression type can not be blank!',
                        icon: Ext.Msg.ERROR,
                        buttons: Ext.Msg.OK
                    });
                    return;
                }

                var Aggression_Type = text.trim();
                var loadMask = new Ext.LoadMask(Ext.getBody(), {


                    msg: 'Please Wait...'
                });
                loadMask.show();

                Ext.Ajax.request({
                    url: 'app/php/accessAgressionTypes.php',
                    //                url: 'app/data/getAggressionTypes.json',
                    params: {
                        Action: 'A',
                        Aggression_Type_ID: '',
                        Aggression_Type: Aggression_Type
                    },
                    failure: function(conn, response, options, eOpts) {
                        loadMask.hide();
                        Ext.Msg.show({
                            title: 'Error!',
                            msg: conn.responseText,
                            icon: Ext.Msg.ERROR,
                            buttons: Ext.Msg.OK
                        });
                    },
                    success: function(conn, response, options, eOpts) {
                        var result = Ext.JSON.decode(conn.responseText, true);
                        if (!result) {
                            loadMask.hide();
                            result = {};
                            result.success = false;
                            result.msg = conn.responseText;
                        }
                        if (result.success) {
                            Ext.getStore('AggressionTypes').loadData(result['Aggression_Type']);
                            var cpanel = Ext.getCmp('incsuspectspanel');
                            cpanel.getLayout().setActiveItem(1);
                            loadMask.hide();
                        } else {
                            if (result.msg == "no_session")
                                window.location = "index.html";
                            else {
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
        }, null, false, '', null);



    },
    //=================================

    //Suspect Add View
    //=================================
    //click of the select officer search grid button
    onButtonClicksuspectaddbtn: function(button, e, options) {

        var me = this;
        var frm = Ext.getCmp('addsuspect');

        if (!frm.isValid()) {
            Ext.Msg.show({
                title: 'Error Forn not Submitted!',
                msg: 'All invalid fields are highlighted in red.  To see specific field error, place mouse cursor over the "!" next to field.  Please resubmit form once all fields have been corrected.  ',
                icon: Ext.Msg.ERROR,
                buttons: Ext.Msg.OK
            });
        } else {
            var Action = Ext.getCmp('sus_add_Action').getValue().trim();
            var Function = Ext.getCmp('sus_add_Function').getValue().trim();
            var Suspect_ID = Ext.getCmp('sus_add_suspectID').getValue().trim();

            var Suspect_Name = Ext.getCmp('sus_name').getValue().trim();
            var gmale = Ext.getCmp('susgenderM');
            var gfemale = Ext.getCmp('susgenderF');
            var label_gender = '';
            var input_gender = '';

            if (gmale.getValue() == true) {
                label_gender = 'Male';
                input_gender = 'M';
            } else {
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
                function(choice) {
                    if (choice == 'yes') {


                        var loadMask = new Ext.LoadMask(Ext.getBody(), {
                            msg: 'Please Wait...'
                        });
                        loadMask.show();

                        Ext.Ajax.request({
                            url: 'app/php/accessSubjects.php',
                            params: {
                                Action: Action,
                                Function: Function,
                                Suspect_Name: Suspect_Name,
                                Gender: input_gender,
                                Race_ID: raceid,
                                Suspect_ID: Suspect_ID
                            },
                            failure: function(conn, response, options, eOpts) {
                                loadMask.hide();
                                Ext.Msg.show({
                                    title: 'Error!',
                                    msg: conn.responseText,
                                    icon: Ext.Msg.ERROR,
                                    buttons: Ext.Msg.OK
                                });
                            },
                            success: function(conn, response, options, eOpts) {
                                var result = Ext.JSON.decode(conn.responseText, true);
                                if (!result) {
                                    loadMask.hide();
                                    result = {};
                                    result.success = false;
                                    result.msg = conn.responseText;
                                }
                                if (result.success) {
                                    // console.log(result['LAST_INSERT_ID']);
                                    loadMask.hide();

                                    if (Function == 'S') {
                                        var sid = result['LAST_INSERT_ID'];
                                        Ext.getCmp('susdet_suspect_id').setValue(sid);
                                        Ext.getCmp('susdet_suspectname').setValue(Suspect_Name);
                                        Ext.getCmp('susdet_gender').setValue(label_gender);
                                        Ext.getCmp('susdet_race').setValue(label_race);
                                        Ext.getCmp('susdet_race_id').setValue(raceid);
                                    } else
                                        Ext.getStore('suspect_search').loadData(result['suspectsearch']);


                                    var win = Ext.getCmp('winsusadd')
                                    win.destroy();


                                } else {
                                    if (result.msg == "no_session")
                                        window.location = "index.html";
                                    else {
                                        loadMask.hide();
                                        Ext.Msg.show({
                                            title: 'Fail!',
                                            msg: result.msg,
                                            icon: Ext.Msg.ERROR,
                                            buttons: Ext.Msg.OK
                                        });
                                    }
                                } // result is success          
                            } // success function
                        }); //Ajax Request
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
        if (!g.getSelectionModel().hasSelection()) {
            Ext.Msg.show({
                title: 'Error!',
                msg: 'No Subject Selected.  Please Select a subject from the Grid Before Clicking Select.',
                icon: Ext.Msg.ERROR,
                buttons: Ext.Msg.OK
            });
        } else {
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
        var fields = button.up().query('textfield');
        this.searchIncidents(fields);
    },
    //Click on the edit button
    onButtonClickincidentedit: function(button, e, options) {

        var me = this;
        var g = Ext.getCmp('Incidentgrid');
        var frm = Ext.getCmp('incidentdetailform');

        if (!g.getSelectionModel().hasSelection()) {
            Ext.Msg.show({
                title: 'Error!',
                msg: 'You must first select an incident from the grid.',
                icon: Ext.Msg.ERROR,
                buttons: Ext.Msg.OK
            });
        } else {
            var act = "";
            if (button.getText() == "Edit") {
                Ext.getCmp('idsubmitbtn').setVisible(true);
                frm.setTitle('Update Incident');
                act = "U";
            } else //Must be View
            {
                Ext.getCmp('idsubmitbtn').setVisible(false);
                frm.setTitle('View Incident');
                act = "V";
            }
            me.setIncidentUpdatability(act);
            var rec = g.getSelectionModel().getSelection()[0];
            var Incident_ID = rec.get("Incident_ID");
            //         Ext.MessageBox.confirm('Please Confirm',
            //          'Are you sure you would like to delete this incident?',
            //          function( choice)
            //          { 
            //           if( choice == 'yes')
            //           {

            var loadMask = new Ext.LoadMask(Ext.getBody(), {

                msg: 'Please Wait...'
            });
            loadMask.show();

            Ext.Ajax.request({
                url: 'app/php/getIncident.php',
                //                url: 'app/data/getIncident.json',
                params: {
                    Incident_ID: Incident_ID
                },
                failure: function(conn, response, options, eOpts) {
                    loadMask.hide();
                    Ext.Msg.show({
                        title: 'Error!',
                        msg: conn.responseText,
                        icon: Ext.Msg.ERROR,
                        buttons: Ext.Msg.OK
                    });
                },
                success: function(conn, response, options, eOpts) {
                    loadMask.hide();
                    var result = Ext.JSON.decode(conn.responseText, true);
                    if (!result) {
                        result = {};
                        result.success = false;
                        result.msg = conn.responseText;
                    }
                    if (result.success) {

                        var s = result['Incident'];

                        Ext.getCmp('id_action').setValue("Edit");
                        Ext.getCmp('id_Incidentnum').setValue(s[0].Incident_ID);
                        Ext.getCmp('id_Incidentname').setValue(s[0].Incident_Name);
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

//                        console.log(s[0].Lawsuit);
//                        console.log(s[0].Indoors);

                        if (s[0].Indoors == "true")
                            Ext.getCmp('id_indoor').setValue(true);
                        else if (s[0].Indoors == "false")
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
                    } else {
                        if (result.msg == "no_session")
                            window.location = "index.html";
                        else {
                            loadMask.hide();
                            Ext.Msg.show({
                                title: 'Fail!',
                                msg: result.msg,
                                icon: Ext.Msg.ERROR,
                                buttons: Ext.Msg.OK
                            });
                        }
                    }
                } //success
            }); //ajax call
            //            } //choice yes
            //         }  //function choice
            //         );  //messagebox please confirm        
        } //if selection made from grid

    }, //onButtonClicksuspectincdelete

    //Click of the delete button
    onButtonClickincidentdelete: function(button, e, options) {


        var g = Ext.getCmp('Incidentgrid');
        if (!g.getSelectionModel().hasSelection()) {
            Ext.Msg.show({
                title: 'Error!',
                msg: 'You must first select an incident from the grid.',
                icon: Ext.Msg.ERROR,
                buttons: Ext.Msg.OK
            });
        } else {
            var rec = g.getSelectionModel().getSelection()[0];
            var Incident_ID = rec.get("Incident_ID");
            Ext.MessageBox.confirm('Please Confirm',
                'Are you sure you would like to delete this incident?',
                function(choice) {
                    if (choice == 'yes') {

                        var loadMask = new Ext.LoadMask(Ext.getBody(), {

                            msg: 'Please Wait...'
                        });
                        loadMask.show();

                        Ext.Ajax.request({
                            url: 'app/php/deleteincident.php',
                            //                url: 'app/data/getIncidents.json',
                            params: {
                                Incident_ID: Incident_ID
                            },
                            failure: function(conn, response, options, eOpts) {
                                loadMask.hide();
                                Ext.Msg.show({
                                    title: 'Error!',
                                    msg: conn.responseText,
                                    icon: Ext.Msg.ERROR,
                                    buttons: Ext.Msg.OK
                                });
                            },
                            success: function(conn, response, options, eOpts) {
                                loadMask.hide();
                                var result = Ext.JSON.decode(conn.responseText, true);
                                if (!result) {
                                    result = {};
                                    result.success = false;
                                    result.msg = conn.responseText;
                                }
                                if (result.success) {
                                    Ext.getStore('Incidentslist').loadData(result['Incident']);
                                    var cpanel = Ext.getCmp('centerpanel');
                                    cpanel.getLayout().setActiveItem(2);
                                    loadMask.hide();
                                } else {
                                    if (result.msg == "no_session")
                                        window.location = "index.html";
                                    else {
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
    //Reports 
    //=============================
    //Click of the run report button
    onButtonClickrunreport: function(button, e, options) {

        var errm = "";
        var msgerr = "All invalid fields are highlighted in red.  To see specific field error, place mouse cursor over the field.  Please resubmit form once all fields have been corrected. .";
        var d1 = Ext.getCmp('rpt_fltr_startdate').getValue();
        var d2 = Ext.getCmp('rpt_fltr_enddate').getValue();
        var frm = Ext.getCmp('reportfieldform');

        if ((d1 != null && d2 == null) || (d2 != null && d1 == null)) {
            errm = "If you select a Location then you must also select a Location Detail!";
            msgerr = errm;
        }

        if (!frm.isValid() || errm.length > 0) {
            Ext.Msg.show({
                title: 'Error Forn not Submitted!',
                msg: msgerr,
                icon: Ext.Msg.ERROR,
                buttons: Ext.Msg.OK
            });
            return;
        } 

        var fields = button.up().up().query('combobox, datefield');
//        console.log(fields);
        var paramfields = {};
        
        for (i=0; i < fields.length; i++)
        {
           var f = fields[i]['name'];
           var v = ""; 

           if (f == "rpt_fltr_startdate" || f == "rpt_fltr_enddate")  
             v = this.formatdatedb(fields[i]['value']);
           else       
             v = fields[i]['value'];
           paramfields[f] = v;
           
           if (f == "rpt_fltr_approx_time" || f == "rpt_fltr_State" || f == "rpt_fltr_location" || f == "rpt_fltr_locationdet"  ||
               f == "rpt_fltr_off_race" || f == "rpt_fltr_off_fate" || f == "rpt_fltr_off_offassignment" || f == "rpt_fltr_off_calltype"  ||
               f == "rpt_fltr_off_depttype" || f == "rpt_fltr_off_status" || f == "rpt_fltr_off_exp_in_cluster" || f == "rpt_fltr_sus_race"  ||
               f == "rpt_fltr_sus_fate" || f == "rpt_fltr_MentalState" || f == "rpt_fltr_Weapons" || f == "rpt_fltr_aggression")  
           {
             var r = fields[i]['rawValue'];
             paramfields[f + "_display"] = r;
           }

        }  

//        console.log(paramfields);

        Ext.Ajax.timeout = 30000; // this changes the 30 second  
        Ext.Ajax.request({
        url: 'app/php/genreports.php',
        params: paramfields,
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
                     if (result['report_data'].length == 0)
                     {
                        Ext.Msg.show({
                        title: 'Fail!',
                        msg: 'No Data to Produce Report',
                        icon: Ext.Msg.ERROR,
                        buttons: Ext.Msg.OK
                    });
                     }
                     else
                     {
                       Ext.getStore('chart_reports').loadData(result['report_data']);
//                       console.log(result);
                       var f_text = result['filter'];
                       var t_text = result['title'];
                       var r_type = result['RPT_Type'];
                       
                     
                       Ext.getCmp('rpt_filter_text').update('<p>' + f_text +'</p>');
                       Ext.getCmp('reportpanel').setTitle(t_text);
                       var rptpanel = Ext.getCmp('rptpanel'); 
                       var crtpanel = Ext.getCmp('chartpanel'); 
                       crtpanel.getLayout().setActiveItem(parseInt(r_type)-1);
                       rptpanel.getLayout().setActiveItem(1);

                     }  
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

    //Select from the location combo box
    selectlocationcomboomborpt: function(combo, e, options) {

        var val = combo.getValue();
//        console.log("Val: " + val);
        var LocationsDet = Ext.getStore('LocationsDet');
        LocationsDet.clearFilter(true);
        LocationsDet.filter('Location_ID', val);
        Ext.getCmp('rpt_fltr_locationdet').reset();

    }, // end selectlocationdetcomboomborpt





    //General Functions
    //*******************************
    //This method sets the updatability of controls on the incident detail view
    setIncidentUpdatability: function(d) {

        if (d == "U" || d == "A") {
            Ext.getCmp('id_action').setReadOnly(false);
            Ext.getCmp('id_Incidentnum').setReadOnly(false);
            Ext.getCmp('id_Incidentname').setReadOnly(false);
            Ext.getCmp('id_officersscene').setReadOnly(false);
            Ext.getCmp('id_dateoccurred').setReadOnly(false);
            Ext.getCmp('id_Address1').setReadOnly(false);
            Ext.getCmp('id_address2').setReadOnly(false);
            Ext.getCmp('id_City').setReadOnly(false);
            Ext.getCmp('id_State').setReadOnly(false);
            Ext.getCmp('id_zipcode').setReadOnly(false);
            Ext.getCmp('id_location').setReadOnly(false);
            Ext.getCmp('id_locationdet').setReadOnly(false);
            Ext.getCmp('id_lawsuit').setReadOnly(false);
            Ext.getCmp('id_indoor').setReadOnly(false);
            Ext.getCmp('id_officersfiredguns').setReadOnly(false);
            Ext.getCmp('id_officersshotsfired').setReadOnly(false);
            Ext.getCmp('id_latitude').setReadOnly(false);
            Ext.getCmp('id_longitude').setReadOnly(false);
            Ext.getCmp('id_time').setReadOnly(false);
            Ext.getCmp('id_approx_time').setReadOnly(false);

            Ext.getCmp('sd_Title').setReadOnly(false);
            Ext.getCmp('sd_Author').setReadOnly(false);
            Ext.getCmp('sd_datewritten').setReadOnly(false);
            Ext.getCmp('sd_sourceid').setReadOnly(false);
            Ext.getCmp('sd_Link').setReadOnly(false);
            Ext.getCmp('sd_SourceType').setReadOnly(false);
            Ext.getCmp('sd_abstract').setReadOnly(false);
            Ext.getCmp('sd_newspaper').setReadOnly(false);

            Ext.getCmp('io_outsideagency').setReadOnly(false);
            Ext.getCmp('io_officer_search').setReadOnly(false);
            Ext.getCmp('io_incidentofficer_id').setReadOnly(false);
            Ext.getCmp('io_officer_id').setReadOnly(false);
            Ext.getCmp('io_race_id').setReadOnly(false);
            Ext.getCmp('io_officername').setReadOnly(false);
            Ext.getCmp('io_gender').setReadOnly(false);
            Ext.getCmp('io_race').setReadOnly(false);
            Ext.getCmp('io_offassignment').setReadOnly(false);
            Ext.getCmp('io_calltype').setReadOnly(false);
            Ext.getCmp('io_depttype').setReadOnly(false);
            Ext.getCmp('io_department').setReadOnly(false);
            Ext.getCmp('io_officerstatus').setReadOnly(false);
            Ext.getCmp('io_yrsexperience').setReadOnly(false);
            Ext.getCmp('io_shotsfired').setReadOnly(false);
            Ext.getCmp('io_Age').setReadOnly(false);
            Ext.getCmp('io_exp_in_cluster').setReadOnly(false);
            Ext.getCmp('io_Casualty').setReadOnly(false);

            Ext.getCmp('susdet_shotarea').setReadOnly(false);
            Ext.getCmp('susdet_suspect_search').setReadOnly(false);
            Ext.getCmp('susdet_age').setReadOnly(false);
            Ext.getCmp('susdet_incidentsuspect_id').setReadOnly(false);
            Ext.getCmp('susdet_suspect_id').setReadOnly(false);
            Ext.getCmp('susdet_race_id').setReadOnly(false);
            Ext.getCmp('susdet_suspectname').setReadOnly(false);
            Ext.getCmp('susdet_shot_text').setReadOnly(false);
            Ext.getCmp('susdet_shot_value').setReadOnly(false);
            Ext.getCmp('susdet_gender').setReadOnly(false);
            Ext.getCmp('susdet_race').setReadOnly(false);
            Ext.getCmp('susdet_MentalState').setReadOnly(false);
            Ext.getCmp('susdet_Weapons').setReadOnly(false);
            Ext.getCmp('susdet_aggression').setReadOnly(false);
            Ext.getCmp('susdet_vHitRun').setReadOnly(false);
            Ext.getCmp('susdet_vchase').setReadOnly(false);
            Ext.getCmp('susdet_fchase').setReadOnly(false);
            Ext.getCmp('susdet_uscitizen').setReadOnly(false);
            Ext.getCmp('susdet_gang').setReadOnly(false);
            Ext.getCmp('susdet_fatality').setReadOnly(false);
            Ext.getCmp('susdet_injury').setReadOnly(false);

            Ext.getCmp('ogaddbtn').setVisible(true);
            Ext.getCmp('ogeditbtn').setVisible(true);
            Ext.getCmp('ogdelete').setVisible(true);
            Ext.getCmp('ogview').setVisible(false);

            Ext.getCmp('ssugaddbtn').setVisible(true);
            Ext.getCmp('susgeditbtn').setVisible(true);
            Ext.getCmp('susgdelete').setVisible(true);
            Ext.getCmp('susgview').setVisible(false);

            Ext.getCmp('sgaddbtn').setVisible(true);
            Ext.getCmp('sgeditbtn').setVisible(true);
            Ext.getCmp('sgdelete').setVisible(true);
            Ext.getCmp('sgview').setVisible(false);

            Ext.getCmp('sd_newspaperadd').setDisabled(false);
            Ext.getCmp('sd_sourcetypeadd').setDisabled(false);

            Ext.getCmp('io_search').setDisabled(false);
            Ext.getCmp('io_off_add').setDisabled(false);
            Ext.getCmp('io_addassignment').setDisabled(false);
            Ext.getCmp('io_addcalltype').setDisabled(false);
            Ext.getCmp('io_adddepttype').setDisabled(false);
            Ext.getCmp('io_adddepartment').setDisabled(false);
            Ext.getCmp('io_addstatus').setDisabled(false);

            Ext.getCmp('susdet_search').setDisabled(false);
            Ext.getCmp('susdet_suspect_add').setDisabled(false);
            Ext.getCmp('susdet_addMentalState').setDisabled(false);
            Ext.getCmp('susdet_addWeapons').setDisabled(false);
            Ext.getCmp('susdet_addaggression').setDisabled(false);
            Ext.getCmp('susdet_clear_shot').setDisabled(false);
        } else if (d == "V") {
            Ext.getCmp('id_action').setReadOnly(true);
            Ext.getCmp('id_Incidentnum').setReadOnly(true);
            Ext.getCmp('id_Incidentname').setReadOnly(true);
            Ext.getCmp('id_officersscene').setReadOnly(true);
            Ext.getCmp('id_dateoccurred').setReadOnly(true);
            Ext.getCmp('id_Address1').setReadOnly(true);
            Ext.getCmp('id_address2').setReadOnly(true);
            Ext.getCmp('id_City').setReadOnly(true);
            Ext.getCmp('id_State').setReadOnly(true);
            Ext.getCmp('id_zipcode').setReadOnly(true);
            Ext.getCmp('id_location').setReadOnly(true);
            Ext.getCmp('id_locationdet').setReadOnly(true);
            Ext.getCmp('id_lawsuit').setReadOnly(true);
            Ext.getCmp('id_indoor').setReadOnly(true);
            Ext.getCmp('id_officersfiredguns').setReadOnly(true);
            Ext.getCmp('id_officersshotsfired').setReadOnly(true);
            Ext.getCmp('id_latitude').setReadOnly(true);
            Ext.getCmp('id_longitude').setReadOnly(true);
            Ext.getCmp('id_time').setReadOnly(true);
            Ext.getCmp('id_approx_time').setReadOnly(true);

            Ext.getCmp('sd_Title').setReadOnly(true);
            Ext.getCmp('sd_Author').setReadOnly(true);
            Ext.getCmp('sd_datewritten').setReadOnly(true);
            Ext.getCmp('sd_sourceid').setReadOnly(true);
            Ext.getCmp('sd_Link').setReadOnly(true);
            Ext.getCmp('sd_SourceType').setReadOnly(true);
            Ext.getCmp('sd_abstract').setReadOnly(true);
            Ext.getCmp('sd_newspaper').setReadOnly(true);

            Ext.getCmp('io_outsideagency').setReadOnly(true);
            Ext.getCmp('io_officer_search').setReadOnly(true);
            Ext.getCmp('io_incidentofficer_id').setReadOnly(true);
            Ext.getCmp('io_officer_id').setReadOnly(true);
            Ext.getCmp('io_race_id').setReadOnly(true);
            Ext.getCmp('io_officername').setReadOnly(true);
            Ext.getCmp('io_gender').setReadOnly(true);
            Ext.getCmp('io_race').setReadOnly(true);
            Ext.getCmp('io_offassignment').setReadOnly(true);
            Ext.getCmp('io_calltype').setReadOnly(true);
            Ext.getCmp('io_depttype').setReadOnly(true);
            Ext.getCmp('io_department').setReadOnly(true);
            Ext.getCmp('io_officerstatus').setReadOnly(true);
            Ext.getCmp('io_yrsexperience').setReadOnly(true);
            Ext.getCmp('io_shotsfired').setReadOnly(true);
            Ext.getCmp('io_Age').setReadOnly(true);
            Ext.getCmp('io_exp_in_cluster').setReadOnly(true);
            Ext.getCmp('io_Casualty').setReadOnly(true);

            Ext.getCmp('susdet_shotarea').setReadOnly(true);
            Ext.getCmp('susdet_suspect_search').setReadOnly(true);
            Ext.getCmp('susdet_age').setReadOnly(true);
            Ext.getCmp('susdet_incidentsuspect_id').setReadOnly(true);
            Ext.getCmp('susdet_suspect_id').setReadOnly(true);
            Ext.getCmp('susdet_race_id').setReadOnly(true);
            Ext.getCmp('susdet_suspectname').setReadOnly(true);
            Ext.getCmp('susdet_shot_text').setReadOnly(true);
            Ext.getCmp('susdet_shot_value').setReadOnly(true);
            Ext.getCmp('susdet_gender').setReadOnly(true);
            Ext.getCmp('susdet_race').setReadOnly(true);
            Ext.getCmp('susdet_MentalState').setReadOnly(true);
            Ext.getCmp('susdet_Weapons').setReadOnly(true);
            Ext.getCmp('susdet_aggression').setReadOnly(true);
            Ext.getCmp('susdet_vHitRun').setReadOnly(true);
            Ext.getCmp('susdet_vchase').setReadOnly(true);
            Ext.getCmp('susdet_fchase').setReadOnly(true);
            Ext.getCmp('susdet_uscitizen').setReadOnly(true);
            Ext.getCmp('susdet_gang').setReadOnly(true);
            Ext.getCmp('susdet_fatality').setReadOnly(true);
            Ext.getCmp('susdet_injury').setReadOnly(true);

            Ext.getCmp('ogaddbtn').setVisible(false);
            Ext.getCmp('ogeditbtn').setVisible(false);
            Ext.getCmp('ogdelete').setVisible(false);
            Ext.getCmp('ogview').setVisible(true);

            Ext.getCmp('ssugaddbtn').setVisible(false);
            Ext.getCmp('susgeditbtn').setVisible(false);
            Ext.getCmp('susgdelete').setVisible(false);
            Ext.getCmp('susgview').setVisible(true);

            Ext.getCmp('sgaddbtn').setVisible(false);
            Ext.getCmp('sgeditbtn').setVisible(false);
            Ext.getCmp('sgdelete').setVisible(false);
            Ext.getCmp('sgview').setVisible(true);

            Ext.getCmp('sd_newspaperadd').setDisabled(true);
            Ext.getCmp('sd_sourcetypeadd').setDisabled(true);

            Ext.getCmp('io_search').setDisabled(true);
            Ext.getCmp('io_off_add').setDisabled(true);
            Ext.getCmp('io_addassignment').setDisabled(true);
            Ext.getCmp('io_addcalltype').setDisabled(true);
            Ext.getCmp('io_adddepttype').setDisabled(true);
            Ext.getCmp('io_adddepartment').setDisabled(true);
            Ext.getCmp('io_addstatus').setDisabled(true);

            Ext.getCmp('susdet_search').setDisabled(true);
            Ext.getCmp('susdet_suspect_add').setDisabled(true);
            Ext.getCmp('susdet_addMentalState').setDisabled(true);
            Ext.getCmp('susdet_addWeapons').setDisabled(true);
            Ext.getCmp('susdet_addaggression').setDisabled(true);
            Ext.getCmp('susdet_clear_shot').setDisabled(true);
        }


    },
    //This function gets the security access for the user.
    getsecurity: function() {


        Ext.Ajax.timeout = 30000; // this changes the 30 second  
        Ext.Ajax.request({
            url: 'app/php/getsecurity.php',
            params: {},
            scope: this,
            failure: function(conn, response, options, eOpts) {
                var errmsg = conn.responseText;
                if (errmsg == null || errmsg == '') errmsg = "No response from server.";
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

                    var Access_NewIncident = result.Access_NewIncident;
                    var Access_QueryView = result.Access_QueryView;
                    var Access_QueryUpdate = result.Access_QueryUpdate;
                    var Access_Reports = result.Access_Reports;


                    if (Access_NewIncident == "Y") {
                        Ext.getCmp('mmAddIncident').setVisible(true);
                    }
                    if (Access_QueryView == "Y") {
                        Ext.getCmp('mmUpdateIncident').setVisible(true);
                        Ext.getCmp('ig_view').setVisible(true);
                    }
                    if (Access_QueryUpdate == "Y") {
                        Ext.getCmp('mmUpdateIncident').setVisible(true);
                        Ext.getCmp('ig_edit').setVisible(true);
                        Ext.getCmp('ig_delete').setVisible(true);
                    }
                    if (Access_Reports == "Y") {
                        Ext.getCmp('mmReports').setVisible(true);
                    }

                } else {
                    if (result.msg == "no_session")
                        window.location = "index.html";
                    else {
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

        // console.log('Exiting function getsettings ');

    }, //Function getsecurity

    //This function will validate that a message box string has been added 
    validatenotblank: function(fld) {

        if (fld.trim() == "")
            return 0;
        return 1;
    },
    //This function will load all stores realated to an incident that is saved in the database 
    loadincidentstores: function(incNum) {
        Ext.Ajax.timeout = 30000; // this changes the 30 second  
        Ext.Ajax.request({
            //        url: 'app/php/getIncident.php',
            url: 'app/data/getIncident.json',
            params: {
                inc_Number: incNum
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
                    Ext.getStore('sources').loadData(result['Incident_Source']);
                    Ext.getStore('incidentofficers').loadData(result['Incident_Officer']);
                    Ext.getStore('incidentsuspects').loadData(result['Incident_Suspect']);
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

    },

    //This function will get the states, locations, locations detail from the database when the applicaiton first begins 
    loadinitstores: function() {

        Ext.Ajax.timeout = 30000; // this changes the 30 second  
        Ext.Ajax.request({
            url: 'app/php/getInitialTables.php',
            //        url: 'app/data/getInitialTables.json',
            params: {},
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
                    Ext.getStore('States').loadData(result['State']);
                    Ext.getStore('Regions').loadData(result['Region']);
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
                    Ext.getStore('InjuryDeathStore').loadData(result['InjuryToDeath']);
                    Ext.getStore('TopFiveCityStateStore').loadData(result['TopCityState']);
                    Ext.getStore('topFiveDepartmentsStore').loadData(result['TopFiveDepartments']);
                    Ext.getStore('ShootingsThisYearStore').loadData(result['ShootingsThisYr']);
                    Ext.getStore('TotalShootingsStore').loadData(result['Shootings']);
                    Ext.getStore('RacePercentageStore').loadData(result['RacePercentages']);
                    Ext.getStore('RacePercentageStore2').loadData(result['RacePercentages2']);
                    Ext.getStore('SuspectGenderStore').loadData(result['SuspectGenders']);

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

    },

    /**
     * Search incidents
     * @param  {object} fields - search params (optional)
     * @return nothing because it fires and ajax
     */
    searchIncidents: function() {
        var fields;
        var footer = this.getIncidentgrid().down('#ig_footer').getEl();
        if (arguments.length) {
            // console.log('this is search');
            fields = {};
            var html = [];
            var name;
            var value;
            Ext.Array.each(arguments[0], function() {
                name = this.getName();
                value = this.getValue();
                if (value) {
                    if (value instanceof Date) {
                        value = value.toJSON().split('T')[0];
                    }
                    html.push(name + '=' + value);
                }
                fields[name] = value;
            });
            footer.setHTML('Last search: ' + html.join('; '));
        } else {
            // console.log('this is reset');
            fields = false;
            footer.setHTML('');
        }

        var loadMask = new Ext.LoadMask(Ext.getBody(), {
            msg: 'Please Wait...'
        });
        loadMask.show();

        Ext.Ajax.timeout = 30000; // this changes the 30 second  
        Ext.Ajax.request({
            url: 'app/php/getincidents.php',
            params: fields,
            failure: function(conn, response, options, eOpts) {
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
            success: function(conn, response, options, eOpts) {
                // console.log('entered success function ');
                loadMask.hide();
                var result = Ext.JSON.decode(conn.responseText, true);
                if (!result) {
                    // console.log('Result ');
                    // console.log(result);
                    result = {};
                    result.success = false;
                    result.msg = conn.responseText;
                }
                if (result.success) {
                    if (fields && result.num_rows == '0') {
                        Ext.Msg.alert('Results', 'No Incidents to Show.');
                    } else {
                        Ext.getStore('Incidentslist').loadData(result['Incident']);
                        var cpanel = Ext.getCmp('centerpanel');
                        cpanel.getLayout().setActiveItem(2);
                    }
                } else {
                    if (result.msg == "no_session")
                        window.location = "index.html";
                    else {
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

    },

    //This method will take the string of select target area ids and return the display value for the target area.
    getTargetAreaString: function(ta_val) {



        display_val = "";
        idarray = ta_val.split(',');
        for (i = 0; i < idarray.length; i++) {
            display_mod = Ext.getStore('targetareas').findRecord('Target_Area_ID', idarray[i]);
            display_val = display_val + display_mod.get('Specific_Target_Area');

            if (i < (idarray.length - 1)) display_val = display_val + ", ";
        }

        return display_val;


    },
    //This method will clear all the incident forms.
    clearincidentforms: function() {

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
    NewspaperDisabled: function(sourcetype_display) {

        var newspap = Ext.getCmp('sd_newspaper');
        var newspapadd = Ext.getCmp('sd_newspaperadd');
        var frm = Ext.getCmp('sourcedetail');

        newspap.clearValue();
        // console.log("Change fired: " + sourcetype_display); 

        // Only enable the newspaper fields if we are not viewing a source
        if (sourcetype_display == "Newspaper" && Ext.getCmp('sdsubmit').isVisible(true)) {
            newspap.setDisabled(false);
            newspapadd.setDisabled(false);
        } else {
            newspap.setDisabled(true);
            newspapadd.setDisabled(true);
        }

    },

    //This function setsw the state region based on the selected state on the incident detail form.
    setStateRegion: function(state_id) {

        var regionlabel = Ext.getCmp('id_Region').setValue("");
        var sourcetype_model = Ext.getStore('States').findRecord('State_ID', state_id);
        var state_region = sourcetype_model.get('Region');
        regionlabel.setValue(state_region);

    },
    //This function setsw the value for the approximate incident time based on a timepicker value.
    getapproxtime: function(t) {

        // console.log(t);
        t = t.replace(":", "");
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
    formattime: function(t) {
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
    formatdatedb: function(d) {
        var y = "";

//        console.log(d); 
        if (d != null) {
            var x = new Date(d);
            var y = x.getFullYear() + "-" + (x.getMonth() + 1) + "-" + x.getDate();
        }

//        console.log(y);
        return y;
    },

    //This method formats datepickers to be sent as a parameter to the server.
    formatdate: function(d) {
        var y = "";

        if (d != null) {
            var x = new Date(d);
            var y = (x.getMonth() + 1) + "/" + x.getDate() + "/" + x.getFullYear();
        }

        return y;
    }



});
