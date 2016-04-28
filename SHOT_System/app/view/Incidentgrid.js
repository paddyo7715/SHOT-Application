Ext.define('Packt.view.Incidentgrid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.Incidentgrid',

    title: 'Existing Incidents',
    height: 400,
    id: 'Incidentgrid',
    width: 800,
    border: 0,
    dockedItems: [{
        xtype: 'toolbar',
        itemId: 'ig_search_toolbar',
        //               flex: 1,
        width: 700,
        dock: 'top',
        items: [{
            // incident name
            xtype: 'textfield',
            emptyText: 'Name',
            width: 150,
            name: 'name'
        }, {
            // Region drop down list box (east, west etc…)
            xtype: 'combo',
            emptyText: 'Region',
            width: 60,
            store: 'Regions',
            queryMode: 'local',
            displayField: 'Region',
            valueField: 'Region',
            name: 'region'
        }, {
            // City (textbox) can be partial match
            xtype: 'textfield',
            emptyText: 'City',
            width: 60,
            name: 'city'
        }, {
            // State (drop down list box)
            xtype: 'combo',
            emptyText: 'State',
            width: 55,
            store: 'States',
            queryMode: 'local',
            displayField: 'State',
            valueField: 'State_ID',
            name: 'state'
        }, {
            // Zip code (text box)
            xtype: 'textfield',
            emptyText: 'ZIP',
            width: 45,
            name: 'zip'
        }, {
            // Incident date (to and from dates)
            xtype: 'datefield',
            emptyText: 'From',
            width: 70,
            format: 'n/j/y',
            name: 'date_from'
        }, {
            // to
            xtype: 'datefield',
            emptyText: 'To',
            width: 70,
            format: 'n/j/y',
            name: 'date_to'
        }, {
            // Subject Name (textbox) can be partial match
            xtype: 'textfield',
            emptyText: 'Subject',
            width: 70,
            name: 'subject'
        }, {
            xtype: 'button',
            text: 'Search',
            itemId: 'ig_searchbtn'
        }, {
            xtype: 'tbspacer',
            flex: 1
        }, {
            xtype: 'button',
            text: 'Edit',
            hidden: true,
            id: 'ig_edit',
            itemId: 'ig_edit'
        }, {
            xtype: 'button',
            text: 'Delete',
            hidden: true,
            id: 'ig_delete',
            itemId: 'ig_delete'
        }, {
            xtype: 'button',
            text: 'View',
            hidden: true,
            id: 'ig_view',
            itemId: 'ig_view'
        }]
    }, {
        xtype: 'toolbar',
        itemId: 'ig_foot_toolbar',
        dock: 'bottom',
        items: [{
            xtype: 'button',
            itemId: 'download',
            text: 'Download'
        }, {
            xtype: 'component',
            itemId: 'ig_footer',
            html: ''
        }]
    }],


    store: 'Incidentslist',
    frame: true,

    initComponent: function() {
        this.columns = [{
            header: 'Incident_ID',
            dataIndex: 'Incident_ID',
            hidden: true,
            flex: 1
        }, {
            header: 'Name',
            dataIndex: 'Incident_Name',
            flex: 2
        }, {
            header: 'Date',
            dataIndex: 'Date_Occured',
            flex: 1
        }, {
            header: 'City',
            dataIndex: 'City',
            flex: 1
        }, {
            header: 'State',
            dataIndex: 'State',
            flex: 1
        }, {
            header: 'latitude',
            dataIndex: 'latitude',
            hidden: true,
            flex: 1
        }, {
            header: 'longitude',
            dataIndex: 'longitude',
            hidden: true,
            flex: 1
        }];

        this.callParent(arguments);
    }
});
