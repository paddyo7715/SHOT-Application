Ext.define('Packt.view.TopFiveCityStateGrid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.TopFiveCityStateGrid',
    title: 'Top 5 Cities and States (By Incidents)',
    //height: 400,
    id: 'TopFiveCityStateGrid',
    //width: 700,
    disableSelection: true,
    store: 'TopFiveCityStateStore',
    frame: true,
    
    initComponent: function () {
        this.columns = [
            {header: 'City',  dataIndex: 'City', flex: 4},
            {header: 'State', dataIndex: 'State', flex: 4},
            {header: 'Amount', dataIndex: 'Amount', flex: 2}
        ];

        this.callParent(arguments);
    }
});