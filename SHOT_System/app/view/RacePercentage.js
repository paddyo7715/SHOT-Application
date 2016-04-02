Ext.define('Packt.view.RacePercentage', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.RacePercentage',
    title: 'Officer Race %',
    //height: 400,
    id: 'RacePercentage',
    //width: 700,
    disableSelection: true,
    //border: 0,
    store: 'RacePercentageStore',
    frame: true,
   
    initComponent: function () {
        this.columns = [
            {header: 'Race',  dataIndex: 'Race', flex: 4},
            {header: '%', dataIndex: 'percent', flex: 3}
        ];

        this.callParent(arguments);
    }
});