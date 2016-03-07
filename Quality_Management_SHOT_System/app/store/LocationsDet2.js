Ext.define('Packt.store.LocationsDet2', {
    extend: 'Ext.data.Store',
    model: 'Packt.model.LocationDet2',
    autoLoad: false,

    proxy: {
        reader: {
            successProperty: 'success',
            type: 'json',
            root: 'Location_Detail'
        }
    }
});