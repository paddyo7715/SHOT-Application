Ext.define('Packt.store.sourcetypes', {
    extend: 'Ext.data.Store',
    model: 'Packt.model.sourcetype',
    autoLoad: false,

    proxy: {
        reader: {
            successProperty: 'success',
            type: 'json',
            root: 'Source_Type'
        }
    }
});