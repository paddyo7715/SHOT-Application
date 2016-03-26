Ext.define('Packt.view.GoogleMapWindow', {
    extend: 'Ext.window.Window',
    alias: 'widget.GoogleMapWindow',

    height: 450,
    width: 650,
    modal: true,
    resizable: false,
    closeAction: 'hide',
    html: '<div id="google_map_window" style="height: 100%; margin: 0; padding: 0;"></div>'
});
