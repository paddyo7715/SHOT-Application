Ext.define('Packt.store.States', {
    extend: 'Ext.data.Store',
    model: 'Packt.model.State',
    autoLoad: false,

    proxy: {
        reader: {
            successProperty: 'success',
            type: 'json',
            root: 'State'
        }
    }
});