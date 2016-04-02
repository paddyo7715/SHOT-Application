Ext.define('Packt.store.InjuryDeathStore', {
    extend: 'Ext.data.Store',
    model: 'Packt.model.InjuryDeathModel',
    autoLoad: false,

    proxy: {
        reader: {
            successProperty: 'success',
            type: 'json',
            root: 'InjuryToDeath'
        }
    }
});