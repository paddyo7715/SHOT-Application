Ext.define('Packt.view.OfficerDepartmentGrid' ,{
    extend: 'Ext.grid.Panel',
    alias: 'widget.OfficerDepartmentGrid',

    height: 500,
    id: 'OfficerDepartmentGrid',
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
                 id: 'offdeptgridaddbtn',
                 itemId: 'offdeptgridaddbtn'
               },
               { 
                 xtype: 'button',
                 text: 'Edit',
                 id: 'offdeptgrideditbtn',
                 itemId: 'offdeptgrideditbtn'
               },
               { 
                 xtype: 'button',
                 text: 'delete',
                 id: 'offdeptgriddelete',
                 itemId: 'offdeptgriddelete'
               }
               ]
            }
            ],          


    store: 'departments',
    stripeRows: true, 
    frame: true,

    initComponent: function() {
        this.columns = [
            {header: 'Officer Department',  dataIndex: 'Department', flex: 5},
    ];

        this.callParent(arguments);
    }
});