Ext.define('Packt.view.Incidentgrid' ,{
    extend: 'Ext.grid.Panel',
    alias: 'widget.Incidentgrid',

    title: 'Existing Incidents',
    height: 400,
    id: 'Incidentgrid',
    width: 700,
    border: 0,
            dockedItems: [
             { 
               xtype: 'toolbar',
//               flex: 1,
               width: 700,
               dock: 'top',
               items: [
               {
                 labelAlign: 'left',
                 xtype: 'textfield',
                 name: 'ig_search',
                 id: 'ig_search',
                 fieldLabel: 'Search Name',
                 inputWidth: 180
               },
               { 
                 xtype: 'button',
                 text: 'Search',
                 width: 70,
                 id: 'ig_searchbtn',
                 itemId: 'ig_searchbtn'
               },
               {
                 xtype: 'displayfield',
                 fieldLabel: '',
                 id: 'displayf',
                 width: 200
               },
               { 
                 xtype: 'button',
                 text: 'Edit',
                 hidden: true,
                 id: 'ig_edit',
                 itemId: 'ig_edit'
               },
               { 
                 xtype: 'button',
                 text: 'Delete',
                 hidden: true,
                 id: 'ig_delete',
                 itemId: 'ig_delete'
               },
               { 
                 xtype: 'button',
                 text: 'View',
                 hidden: true,
                 id: 'ig_view',
                 itemId: 'ig_view'
               }]
            }
            ],          


    store: 'Incidentslist',
    frame: true,

    initComponent: function() {
        this.columns = [
            {header: 'Name',  dataIndex: 'Incident_Name', flex: 7},
            {header: 'Date', dataIndex: 'Date_Occured', flex: 4},
            {header: 'City', dataIndex: 'City', flex: 4},
            {header: 'State', dataIndex: 'State', flex: 4}
        ];

        this.callParent(arguments);
    }
});