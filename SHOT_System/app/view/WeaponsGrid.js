Ext.define('Packt.view.WeaponsGrid' ,{
    extend: 'Ext.grid.Panel',
    alias: 'widget.WeaponsGrid',

    height: 200,
    id: 'WeaponsGrid',
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
                 id: 'weaponsgridaddbtn',
                 itemId: 'weaponsgridaddbtn'
               },
               { 
                 xtype: 'button',
                 text: 'Edit',
                 id: 'weaponsgrideditbtn',
                 itemId: 'weaponsgrideditbtn'
               },
               { 
                 xtype: 'button',
                 text: 'delete',
                 id: 'weaponsgriddelete',
                 itemId: 'weaponsgriddelete'
               }
               ]
            }
            ],          


    store: 'Weapons',
    stripeRows: true, 
    frame: true,

    initComponent: function() {
        this.columns = [
            {header: 'Weapon',  dataIndex: 'Weapons_Type', flex: 5},
    ];

        this.callParent(arguments);
    }
});