Ext.define('Packt.store.Locations', {
    extend: 'Ext.data.Store',
    model: 'Packt.model.Location',
    autoLoad: false,

    proxy: {
        reader: {
            successProperty: 'success',
            type: 'json',
            root: 'Location'
        }
    }
});