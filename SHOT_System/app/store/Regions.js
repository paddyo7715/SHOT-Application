Ext.define('Packt.store.Regions', {
    extend: 'Ext.data.Store',
    model: 'Packt.model.Region',
    autoLoad: false,

    proxy: {
        reader: {
            successProperty: 'success',
            type: 'json',
            root: 'Region'
        }
    }
});