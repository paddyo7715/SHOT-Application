Ext.define('Packt.store.ShootingsThisYearStore', {
    extend: 'Ext.data.Store',
    model: 'Packt.model.ShootingsThisYearModel',
    autoLoad: false,

    proxy: {
        reader: {
            successProperty: 'success',
            type: 'json',
            root: 'ShootingsThisYr'
        }
    }
});