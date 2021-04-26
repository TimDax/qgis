var wms_layers = [];


        var lyr_GoogleRoad_0 = new ol.layer.Tile({
            'title': 'Google Road',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_bornesgps_2 = new ol.format.GeoJSON();
var features_bornesgps_2 = format_bornesgps_2.readFeatures(json_bornesgps_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_bornesgps_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_bornesgps_2.addFeatures(features_bornesgps_2);
var lyr_bornesgps_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_bornesgps_2, 
                style: style_bornesgps_2,
                interactive: true,
                title: '<img src="styles/legend/bornesgps_2.png" /> bornesgps'
            });

lyr_GoogleRoad_0.setVisible(true);lyr_GoogleSatellite_1.setVisible(true);lyr_bornesgps_2.setVisible(true);
var layersList = [lyr_GoogleRoad_0,lyr_GoogleSatellite_1,lyr_bornesgps_2];
lyr_bornesgps_2.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'numborne': 'numborne', 'etatborne': 'etatborne', 'accesborne': 'accesborne', 'debitborne': 'debitborne', 'date': 'date', 'photo': 'photo', });
lyr_bornesgps_2.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'numborne': 'TextEdit', 'etatborne': 'ValueMap', 'accesborne': 'TextEdit', 'debitborne': 'TextEdit', 'date': 'DateTime', 'photo': 'ExternalResource', });
lyr_bornesgps_2.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'numborne': 'no label', 'etatborne': 'no label', 'accesborne': 'no label', 'debitborne': 'no label', 'date': 'no label', 'photo': 'no label', });
lyr_bornesgps_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});