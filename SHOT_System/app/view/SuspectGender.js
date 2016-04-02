Ext.define('Packt.view.SuspectGender', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.SuspectGender',
    title: 'Suspect Gender',
    //height: 400,
    id: 'SuspectGender',
    //width: 700,
    disableSelection: true,
    //border: 0,
    store: 'SuspectGenderStore',
    frame: true,
   
    initComponent: function () {
        this.columns = [
            {header: 'Gender',  dataIndex: 'Gender', flex: 4},
            {header: '%', dataIndex: 'GenPercent', flex: 3}
        ];

        this.callParent(arguments);
    }
});