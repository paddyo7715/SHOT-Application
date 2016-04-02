Ext.define('Packt.view.TotalShootings', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.TotalShootings',
    title: 'Total Shootings',
    //height: 400,
    id: 'TotalShootings',
    //width: 700,
    disableSelection: true,
    //border: 0,         
    store: 'TotalShootingsStore',
    frame: true,
    
    initComponent: function () {
        this.columns = [
            {header: 'Amount',  dataIndex: 'amtIncident', flex: 4}
        ];

        this.callParent(arguments);
    }
});