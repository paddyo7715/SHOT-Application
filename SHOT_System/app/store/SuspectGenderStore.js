Ext.define('Packt.store.SuspectGenderStore', {
    extend: 'Ext.data.Store',
    model: 'Packt.model.SuspectGenderModel',
    autoLoad: false,

    proxy: {
        reader: {
            successProperty: 'success',
            type: 'json',
            root: 'SuspectGenders'
        }
    }
});