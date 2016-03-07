Ext.define('Packt.view.OfficerAssignmentGrid' ,{
    extend: 'Ext.grid.Panel',
    alias: 'widget.OfficerAssignmentGrid',

    height: 200,
    id: 'OfficerAssignmentGrid',
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
                 fieldLabel: '',
                 width: 340
               },
               { 
                 xtype: 'button',
                 text: 'Add',
                 id: 'offassgridaddbtn',
                 itemId: 'offassgridaddbtn'
               },
               { 
                 xtype: 'button',
                 text: 'Edit',
                 id: 'offassgrideditbtn',
                 itemId: 'offassgrideditbtn'
               },
               { 
                 xtype: 'button',
                 text: 'delete',
                 id: 'offassgriddelete',
                 itemId: 'offassgriddelete'
               }
               ]
            }
            ],          


    store: 'officerassignments',
    stripeRows: true, 
    frame: true,

    initComponent: function() {
        this.columns = [
            {header: 'Officer Assignment',  dataIndex: 'Assignment', flex: 5},
    ];

        this.callParent(arguments);
    }
});