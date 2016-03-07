Ext.define('Packt.view.incidentsuspectgrid' ,{
    extend: 'Ext.grid.Panel',
    alias: 'widget.incidentsuspectgrid',

    height: 200,
    id: 'incidentsuspectgrid',
    scroll: 'vertical',
    width: 500,
    border: 0,
            dockedItems: [
             { 
               xtype: 'toolbar',
//               flex: 1,
               width: 700,
               dock: 'top',
               items: [
               {
                 xtype: 'displayfield',
                 fieldLabel: 'Incident Subjects',
                 width: 340
               },
               { 
                 xtype: 'button',
                 text: 'Add',
                 id: 'susgaddbtn',
                 itemId: 'susgaddbtn'
               },
               { 
                 xtype: 'button',
                 text: 'Edit',
                 id: 'susgeditbtn',
                 itemId: 'susgeditbtn'
               },
               { 
                 xtype: 'button',
                 text: 'delete',
                 id: 'susgdelete',
                 itemId: 'susgdelete'
               }
               ]
            }
            ],          


    store: 'incidentsuspects',
    frame: true,

    initComponent: function() {
        this.columns = [
            {header: 'Name',  dataIndex: 'Suspect_Name', flex: 5},
            {header: 'Gender', dataIndex: 'Gender', flex: 2},
            {header: 'Race', dataIndex: 'Race', flex: 2},
            {header: 'Fatality', dataIndex: 'Fatality', flex: 4},
            {header: 'Weapon Type', dataIndex: 'Weapons_Type', flex: 5},
            {header: 'Aggression', dataIndex: 'Aggression_Type', flex: 5},
    ];

        this.callParent(arguments);
    }
});