Ext.define('Packt.view.UsersGrid' ,{
    extend: 'Ext.grid.Panel',
    alias: 'widget.UsersGrid',
    height: 300,
    id: 'UsersGrid',
    title: 'Users',
    scroll: 'vertical',
    width: 820,
    border: 0,
            dockedItems: [
             { 
               xtype: 'toolbar',
//               flex: 1,
               width: 800,
               dock: 'top',
               items: [
               {
                 xtype: 'displayfield',
                 fieldLabel: '',
                 width: 500
               },
               { 
                 xtype: 'button',
                 text: 'Add',
                 id: 'usergrid_addbtn',
                 itemId: 'usergrid_addbtn'
               },
               { 
                 xtype: 'button',
                 text: 'Edit',
                 id: 'usergrid_editbtn',
                 itemId: 'usergrid_editbtn'
               },
               { 
                 xtype: 'button',
                 text: 'delete',
                 id: 'usergrid_delete',
                 itemId: 'usergrid_delete'
               },
               { 
                 xtype: 'button',
                 text: 'Reset PW',
                 id: 'usergrid_resetpw',
                 itemId: 'usergrid_resetpw'
               },
               { 
                 xtype: 'button',
                 text: 'Change Status',
                 id: 'usergrid_changestatus',
                 itemId: 'usergrid_changestatus'
               }
               ]
            }
            ],          

    store: 'Users',
    stripeRows: true, 
    frame: true,

    initComponent: function() {
        this.columns = [
            {header: 'User ID',  dataIndex: 'User_ID', flex: 4},
            {header: 'Name',  dataIndex: 'Name', flex: 6},
            {header: 'Organization',  dataIndex: 'Organization', flex: 8},
            {header: 'Status',  dataIndex: 'Status', flex: 3},
            {header: 'Access to Functions',  dataIndex: 'Display_Access', flex: 25}
    ];

        this.callParent(arguments);
    }
});