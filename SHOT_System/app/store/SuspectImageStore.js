Ext.define('Packt.store.SuspectImageStore', {
    extend: 'Ext.data.Store',
    model: 'Packt.model.SuspectImageModel',
    autoLoad: false,
    proxy: {
        reader: {
            type: 'json',
            root: 'SuspectImages',
            successProperty: 'success'
        }
    },
});

