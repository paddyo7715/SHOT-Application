Ext.define('Packt.store.officer_search', {
    extend: 'Ext.data.Store',
    model: 'Packt.model.officersearch',
    autoLoad: false,

    proxy: {
        reader: {
            successProperty: 'success',
            type: 'json',
            root: 'officersearch'
        }
    }
});