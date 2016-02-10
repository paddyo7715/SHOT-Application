Ext.define('Packt.view.NewspapersGrid' ,{
    extend: 'Ext.grid.Panel',
    alias: 'widget.NewspapersGrid',

    height: 500,
    id: 'NewspapersGrid',
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
                 id: 'newspgridaddbtn',
                 itemId: 'newspgridaddbtn'
               },
               { 
                 xtype: 'button',
                 text: 'Edit',
                 id: 'newspgrideditbtn',
                 itemId: 'newspgrideditbtn'
               },
               { 
                 xtype: 'button',
                 text: 'delete',
                 id: 'newspgriddelete',
                 itemId: 'newspgriddelete'
               }
               ]
            }
            ],          


    store: 'Newspapers',
    stripeRows: true, 
    frame: true,

    initComponent: function() {
        this.columns = [
            {header: 'Newspapers',  dataIndex: 'Newspaper', flex: 5},
    ];

        this.callParent(arguments);
    }
});