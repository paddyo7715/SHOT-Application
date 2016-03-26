Ext.define('Packt.view.Incidentgrid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.Incidentgrid',

    title: 'Existing Incidents',
    height: 400,
    id: 'Incidentgrid',
    width: 700,
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
            width: 70,
            name: 'name'
        }, {
            // Region drop down list box (east, west etc…)
            xtype: 'combo',
            emptyText: 'Region',
            width: 70,
            store: ['East', 'West', 'etc'],
            queryMode: 'local',
            // displayField: 'name',
            // valueField: 'abbr',
            name: 'region'
        }, {
            // City (textbox) can be partial match
            xtype: 'textfield',
            emptyText: 'City',
            width: 70,
            name: 'city'
        }, {
            // State (drop down list box)
            xtype: 'combo',
            emptyText: 'State',
            width: 50,
            store: ['NY', 'CA', 'etc'],
            queryMode: 'local',
            // displayField: 'name',
            // valueField: 'abbr',
            name: 'state'
        }, {
            // Zip code (text box)
            xtype: 'textfield',
            emptyText: 'Zip',
            width: 50,
            name: 'zip'
        }, {
            // Incident date (to and from dates)
            xtype: 'datefield',
            emptyText: 'From',
            width: 80,
            format:  'n/j/y',
            name: 'date_from'
        }, {
            // to
            xtype: 'datefield',
            emptyText: 'To',
            width: 80,
            format:  'n/j/y',
            name: 'date_to'
        },

// Subject Name (textbox) can be partial match
// ???

        {
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
    }],


    store: 'Incidentslist',
    frame: true,

    initComponent: function() {
        this.columns = [{
            header: 'Name',
            dataIndex: 'Incident_Name',
            flex: 7
        }, {
            header: 'Date',
            dataIndex: 'Date_Occured',
            flex: 4
        }, {
            header: 'City',
            dataIndex: 'City',
            flex: 4
        }, {
            header: 'State',
            dataIndex: 'State',
            flex: 4
        }];

        this.callParent(arguments);
    }
});