Ext.define('Packt.view.RacePercentage2', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.RacePercentage2',
    title: 'Suspect Race %',
    //height: 400,
    id: 'RacePercentage2',
    //width: 700,
    disableSelection: true,
    //border: 0,
    store: 'RacePercentageStore2',
    frame: true,
   
    initComponent: function () {
        this.columns = [
            {header: 'Race',  dataIndex: 'Race2', flex: 4},
            {header: '%', dataIndex: 'percent2', flex: 3}
        ];

        this.callParent(arguments);
    }
});