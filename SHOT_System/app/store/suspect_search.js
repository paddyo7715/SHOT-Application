Ext.define('Packt.store.suspect_search', {
    extend: 'Ext.data.Store',
    model: 'Packt.model.suspectsearch',
    autoLoad: false,

    proxy: {
        reader: {
            successProperty: 'success',
            type: 'json',
            root: 'suspectsearch'
        }
    }
});