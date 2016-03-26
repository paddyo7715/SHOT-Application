Ext.define('Packt.store.Newspapers', {
    extend: 'Ext.data.Store',
    model: 'Packt.model.newspaper',
    autoLoad: false,

    proxy: {
        reader: {
            successProperty: 'success',
            type: 'json',
            root: 'Newspapers'
        }
    }
});