Ext.define('Packt.store.LocationsDet', {
    extend: 'Ext.data.Store',
    model: 'Packt.model.LocationDet',
    autoLoad: false,

    proxy: {
        reader: {
            successProperty: 'success',
            type: 'json',
            root: 'Location_Detail'
        }
    }
});