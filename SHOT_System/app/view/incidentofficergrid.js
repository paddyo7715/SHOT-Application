Ext.define('Packt.view.incidentofficergrid' ,{
    extend: 'Ext.grid.Panel',
    alias: 'widget.incidentofficergrid',

    height: 200,
    id: 'incidentofficergrid',
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
                 fieldLabel: 'Incident Officers',
                 width: 310
               },
               { 
                 xtype: 'button',
                 hidden: true,
                 text: 'Add',
                 id: 'ogaddbtn',
                 itemId: 'ogaddbtn'
               },
               { 
                 xtype: 'button',
                 hidden: true,
                 text: 'Edit',
                 id: 'ogeditbtn',
                 itemId: 'ogeditbtn'
               },
               { 
                 xtype: 'button',
                 hidden: true,
                 text: 'Delete',
                 id: 'ogdelete',
                 itemId: 'ogdelete'
               },
               { 
                 xtype: 'button',
                 hidden: true,
                 text: 'View',
                 id: 'ogview',
                 itemId: 'ogview'
               }
               ]
            }
            ],          


    store: 'incidentofficers',
    frame: true,

    initComponent: function() {
        this.columns = [
            {header: 'Name',  dataIndex: 'Name', flex: 5},
            {header: 'Age', dataIndex: 'Age', flex: 2},
            {header: 'Call Type', dataIndex: 'Call_Type', flex: 5},
            {header: 'Dept Type', dataIndex: 'Dept_Type', flex: 5},
            {header: 'Department', dataIndex: 'Department', flex: 7},
    ];

        this.callParent(arguments);
    }
});