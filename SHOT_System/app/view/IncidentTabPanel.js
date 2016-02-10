Ext.define('Packt.view.IncidentTabPanel', {
    extend: 'Ext.tab.Panel',
    alias: 'widget.IncidentTabPanel',
    titleAlign: 'center',
    activeTab: 0,
    id: 'IncidentTabPanel',
    layout: 'vbox',
    plain: true,
    items: [
    {
        xtype: 'panel',
        title: 'Sources',
        id: 'incsourcepanel',
        layout: 'card',
        items: [
        {
          xtype: 'panel',
          padding: '0,0,0,0',
          layout: {
           type: 'vbox',
            align: 'center'
          },
          items: [
          {
            xtype: 'sourcesgrid'

          }]
        },
        {
          xtype: 'panel',
          padding: '0,0,0,0',
          layout: {
           type: 'vbox',
            align: 'center'
          },
          items: [
          {
            xtype: 'sourcedetail'
          }]
        }]
    },
    {
        xtype: 'panel',
        title: 'Officers',
        id: 'incofficerspanel',
        layout: 'card',
        items: [
        {
          xtype: 'panel',
          layout: {
           type: 'vbox',
            align: 'center'
          },
          items: [
          {
             xtype: 'incidentofficergrid'
          }]
        },
        {
          xtype: 'panel',
          layout: {
           type: 'vbox',
            align: 'center'
          },
          items: [
          {
            xtype: 'IncidentOfficerDetail'
          }]
      }]
    },
    {
        xtype: 'panel',
        title: 'Subjects',
        id: 'incsuspectspanel',
        layout: 'card',
        items: [
        {
          xtype: 'panel',
          layout: {
           type: 'vbox',
            align: 'center'
          },
          items: [
          {
             xtype: 'incidentsuspectgrid'
          }]
        },
        {
          xtype: 'panel',
          layout: {
           type: 'vbox',
            align: 'center'
          },
          items: [
          {
            xtype: 'IncidentSuspectDetail'
          }]
      }]
    }


    ]
});
