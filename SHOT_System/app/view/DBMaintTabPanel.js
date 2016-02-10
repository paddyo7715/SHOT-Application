Ext.define('Packt.view.DBMaintTabPanel', {
    extend: 'Ext.tab.Panel',
    alias: 'widget.DBMaintTabPanel',
    titleAlign: 'center',
    activeTab: 0,
    border: 0,
    tabBar: {
      layout: {
      pack : 'center',
      align: 'center'
    },
    docked: 'top',
    scrollable: {
      direction: 'horizontal',
      indicators: false
    }
    },
    plain: true,
    items: [
        {
        xtype: 'panel',
        title: 'Aggression Type',
        padding: '10,0,0,0',
        layout: {
           type: 'vbox',
           align: 'center'
        },   
        items: [
        {
          xtype: 'AggressionTypeGrid',
          border: 0
        }]

    },
    {
        xtype: 'panel',
        title: 'Location',
        padding: '10,0,0,0',
        layout: {
           type: 'vbox',
           align: 'center'
        },   
        items: [
        {
          xtype: 'LocationGrid',
          border: 0
        }]

    },
    {
        xtype: 'panel',
        title: 'Location Details',
        padding: '10,0,0,0',
        layout: {
           type: 'vbox',
           align: 'center'
        },   
        items: [
        {
          xtype: 'LocationDetGrid',
          border: 0
        }]

    },
    {
        xtype: 'panel',
        title: 'Mental States',
        padding: '10,0,0,0',
        layout: {
           type: 'vbox',
           align: 'center'
        },   
        items: [
        {
          xtype: 'MentalStateGrid',
          border: 0
        }]

    },
    {
        xtype: 'panel',
        title: 'Newspapers',
        padding: '10,0,0,0',
        layout: {
           type: 'vbox',
           align: 'center'
        },   
        items: [
        {
          xtype: 'NewspapersGrid',
          border: 0
        }]

    },
    {
        xtype: 'panel',
        title: 'Officers',
        padding: '10,0,0,0',
        layout: {
           type: 'vbox',
           align: 'center'
        },   
        items: [
        {
          xtype: 'officersGrid',
          border: 0
        }]

    },
    {
        xtype: 'panel',
        title: 'Officer Assignments',
        padding: '10,0,0,0',
        layout: {
           type: 'vbox',
           align: 'center'
        },   
        items: [
        {
          xtype: 'OfficerAssignmentGrid',
          border: 0
        }]

    },
    {
        xtype: 'panel',
        title: 'Officer Call Type',
        padding: '10,0,0,0',
        layout: {
           type: 'vbox',
           align: 'center'
        },   
        items: [
        {
          xtype: 'OfficerCallTypeGrid',
          border: 0
        }]

    },
    {
        xtype: 'panel',
        title: 'Officer Department',
        padding: '10,0,0,0',
        layout: {
           type: 'vbox',
           align: 'center'
        },   
        items: [
        {
          xtype: 'OfficerDepartmentGrid',
          border: 0
        }]

    },
    {
        xtype: 'panel',
        title: 'Officer Department Type',
        padding: '10,0,0,0',
        layout: {
           type: 'vbox',
           align: 'center'
        },   
        items: [
        {
          xtype: 'OfficerDeptTypeGrid',
          border: 0
        }]

    },
    {
        xtype: 'panel',
        title: 'Officer Status',
        padding: '10,0,0,0',
        layout: {
           type: 'vbox',
           align: 'center'
        },   
        items: [
        {
          xtype: 'OfficerStatusGrid',
          border: 0
        }]

    },
    {
        xtype: 'panel',
        title: 'Race',
        padding: '10,0,0,0',
        layout: {
           type: 'vbox',
           align: 'center'
        },   
        items: [
        {
          xtype: 'RaceGrid',
          border: 0
        }]

    },
    {
        xtype: 'panel',
        title: 'Source Type',
        padding: '10,0,0,0',
        layout: {
           type: 'vbox',
           align: 'center'
        },   
        items: [
        {
          xtype: 'SourceTypeGrid',
          border: 0
        }]

    },
    {
        xtype: 'panel',
        title: 'States',
        padding: '10,0,0,0',
        layout: {
           type: 'vbox',
           align: 'center'
        },   
        items: [
        {
          xtype: 'StateGrid',
          border: 0
        }]

    },
    {
        xtype: 'panel',
        title: 'Subjects',
        padding: '10,0,0,0',
        layout: {
           type: 'vbox',
           align: 'center'
        },   
        items: [
        {
          xtype: 'SubjectGrid',
          border: 0
        }]

    },
    {
        xtype: 'panel',
        title: 'Weapons',
        padding: '10,0,0,0',
        layout: {
           type: 'vbox',
           align: 'center'
        },   
        items: [
        {
          xtype: 'WeaponsGrid',
          border: 0
        }]

    }






    ]
});
