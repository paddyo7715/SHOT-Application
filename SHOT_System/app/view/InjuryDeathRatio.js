Ext.define('Packt.view.InjuryDeathRatio', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.InjuryDeathRatio',
    title: 'Death/Injury',
    height: 200,
    id: 'InjuryDeathRatio',
    //width: 700,
    disableSelection: true,
    //border: 0,
    store: 'InjuryDeathStore',
    frame: true,

    initComponent: function () {
        this.columns = [
            {header: 'Percentage',  dataIndex: 'DeathPercentage', flex: 4}
        ];

        this.callParent(arguments);
    }
});