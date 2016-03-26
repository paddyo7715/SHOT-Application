Ext.define('Packt.view.AggressionTypeGrid' ,{
    extend: 'Ext.grid.Panel',
    alias: 'widget.AggressionTypeGrid',

    height: 200,
    id: 'AggressionTypeGrid',
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
                 id: 'aggtypeaddbtn',
                 itemId: 'aggtypeaddbtn'
               },
               { 
                 xtype: 'button',
                 text: 'Edit',
                 id: 'aggtypeeditbtn',
                 itemId: 'aggtypeeditbtn'
               },
               { 
                 xtype: 'button',
                 text: 'delete',
                 id: 'aggtypedelete',
                 itemId: 'aggtypedelete'
               }
               ]
            }
            ],          


    store: 'AggressionTypes',
    stripeRows: true, 
    frame: true,

    initComponent: function() {
        this.columns = [
            {header: 'Aggression Types',  dataIndex: 'Aggression_Type', flex: 5},
    ];

        this.callParent(arguments);
    }
});