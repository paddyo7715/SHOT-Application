Ext.define('Packt.view.topFiveDepartments', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.topFiveDepartments',
    title: 'Top 5 Departments (By Incidents)',
    //height: 400,
    id: 'topFiveDepartments',
    //width: 700,
    disableSelection: true,
    //border: 0,
    store: 'topFiveDepartmentsStore',
    frame: true,
   
    initComponent: function () {
        this.columns = [
            {header: 'Dept. ID',  dataIndex: 'Department_ID', flex: 2},
            {header: 'Department Name', dataIndex: 'Department', flex: 5},
            {header: 'Amount', dataIndex: 'Amount', flex: 2}
        ];

        this.callParent(arguments);
    }
});