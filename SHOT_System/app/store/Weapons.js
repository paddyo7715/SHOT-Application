Ext.define('Packt.store.Weapons', {
    extend: 'Ext.data.Store',
    model: 'Packt.model.Weapon',
    autoLoad: false,

    proxy: {
        reader: {
            successProperty: 'success',
            type: 'json',
            root: 'Weapons'
        }
    }
});