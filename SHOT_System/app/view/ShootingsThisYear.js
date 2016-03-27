var date = new Date();
var n = date.getFullYear();

Ext.define('Packt.view.ShootingsThisYear', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.ShootingsThisYear',
    title: 'Shootings This Year',
    //height: 400,
    id: 'ShootingsThisYear',
    //width: 700,
    disableSelection: true,
    //border: 0,
    store: 'ShootingsThisYearStore',
    frame: true,

    initComponent: function () {
        this.columns = [
            {header: 'Current Year: '+n,  dataIndex: 'Incidents_in_Current_Year', flex: 4}
        ];

        this.callParent(arguments);
    }
});