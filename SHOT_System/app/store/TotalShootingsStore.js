Ext.define('Packt.store.TotalShootingsStore', {
    extend: 'Ext.data.Store',
    model: 'Packt.model.TotalShootingsModel',
    autoLoad: false,

    proxy: {
        reader: {
            successProperty: 'success',
            type: 'json',
            root: 'Shootings'
        }
    }
});