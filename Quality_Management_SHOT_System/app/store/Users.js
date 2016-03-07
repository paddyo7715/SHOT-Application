Ext.define('Packt.store.Users', {
    extend: 'Ext.data.Store',
    model: 'Packt.model.User',
    autoLoad: false,

    proxy: {
        reader: {
            successProperty: 'success',
            type: 'json',
            root: 'Users'
        }
    }
});