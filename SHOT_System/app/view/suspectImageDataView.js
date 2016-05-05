
var imageTpl = new Ext.XTemplate(
    '<tpl for=".">',
        '<div style="margin-bottom: 10px;" class="thumb-wrap">',
          '<img width="100" height="100" src="{url}" />',
          '<br/><span>{image_name}</span>',
        '</div>',
    '</tpl>'
);

Ext.define('Packt.view.susDv', {
    extend: 'Ext.view.View',  
    //requires: ['Packt.store.SuspectImageStore'],                
    store: 'SuspectImageStore',
    scrollable: true,
    tpl: imageTpl,
    id: 'image_susdv',
    height: 500,
    xtype: 'susDv',
    itemSelector: 'div.thumb-wrap',
    emptyText: 'No images available'
});
   
Ext.define('Packt.view.suspectImageDataView', {
            extend: 'Ext.panel.Panel',
            xtype: 'suspectImageDataView',
            id: 'suspectImageDataView',
            title: 'Existing Image(s)',
            height: 350,
            align: 'center',
            bodyPadding: 5,
    dockedItems: [{
        xtype: 'toolbar',
        width: 400,
        dock: 'bottom',
        items: [{
            xtype: 'button',
            cls:'x-btn-default-small',
            text: 'Delete',
            id: 'idv_delete',
            itemId: 'idv_delete',
          listeners: {
            click: function(button) {

           var dv = Ext.getCmp('image_susdv');

           if (!dv.getSelectionModel().hasSelection()) {
              Ext.Msg.show({
                  title: 'Error!',
                  msg: 'You must first select an image to delete.',
                  icon: Ext.Msg.ERROR,
                  buttons: Ext.Msg.OK
                });
           } else {

            var rec = dv.getSelectionModel().getSelection()[0];
            var image_id = rec.get("image_id");
            var url = rec.get("url");            
            var image_name = rec.get("image_name");            
            var Incident_Id = rec.get("Incident_Id");

            Ext.Ajax.timeout = 30000; // this changes the 30 second  
            Ext.Ajax.request({
            url: 'app/php/deleteIncidentImage.php',
              params: {
                image_id: image_id, 
                url: url, 
                Incident_Id: Incident_Id, 
                image_name: image_name 
              },
            failure: function(conn, response, options, eOpts) {
                var errmsg = conn.responseText;
                if (errmsg == null || errmsg == '') errmsg = "No response from server.";
                //             loadMask.hide();
                Ext.Msg.show({
                    title: 'Error!',
                    msg: errmsg,
                    icon: Ext.Msg.ERROR,
                    buttons: Ext.Msg.OK
                });
            },
            success: function(conn, response, options, eOpts) {
                var result = Ext.JSON.decode(conn.responseText, true);
                if (!result) {
                    result = {};
                    result.success = false;
                    result.msg = conn.responseText;
                }
                if (result.success) {
                    Ext.getStore('SuspectImageStore').loadData(result['SuspectImages']);

                } else {
                    if (result.msg == "no_session")
                        window.location = "index.html";
                    else
                        Ext.Msg.show({
                            title: 'Fail!',
                            msg: result.msg,
                            icon: Ext.Msg.ERROR,
                            buttons: Ext.Msg.OK
                        });
                }

            }
          });



           }

            }
          }            
        }]
    }],
            border: 1,   
            overflowY : 'auto',  
            items: [{
                xtype: 'susDv'
            }]
        });