var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Bharathapuzha_1 = new ol.format.GeoJSON();
var features_Bharathapuzha_1 = format_Bharathapuzha_1.readFeatures(json_Bharathapuzha_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bharathapuzha_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bharathapuzha_1.addFeatures(features_Bharathapuzha_1);
var lyr_Bharathapuzha_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bharathapuzha_1, 
                style: style_Bharathapuzha_1,
                popuplayertitle: 'Bharathapuzha',
                interactive: false,
                title: '<img src="styles/legend/Bharathapuzha_1.png" /> Bharathapuzha'
            });
var format_Geology_2 = new ol.format.GeoJSON();
var features_Geology_2 = format_Geology_2.readFeatures(json_Geology_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Geology_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Geology_2.addFeatures(features_Geology_2);
var lyr_Geology_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Geology_2, 
                style: style_Geology_2,
                popuplayertitle: 'Geology',
                interactive: false,
                title: '<img src="styles/legend/Geology_2.png" /> Geology'
            });
var format_CHECKDAM_3 = new ol.format.GeoJSON();
var features_CHECKDAM_3 = format_CHECKDAM_3.readFeatures(json_CHECKDAM_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CHECKDAM_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CHECKDAM_3.addFeatures(features_CHECKDAM_3);
var lyr_CHECKDAM_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CHECKDAM_3, 
                style: style_CHECKDAM_3,
                popuplayertitle: 'CHECKDAM.',
                interactive: false,
                title: '<img src="styles/legend/CHECKDAM_3.png" /> CHECKDAM.'
            });
var format_STREAM_4 = new ol.format.GeoJSON();
var features_STREAM_4 = format_STREAM_4.readFeatures(json_STREAM_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_STREAM_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_STREAM_4.addFeatures(features_STREAM_4);
var lyr_STREAM_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_STREAM_4, 
                style: style_STREAM_4,
                popuplayertitle: 'STREAM.',
                interactive: false,
                title: '<img src="styles/legend/STREAM_4.png" /> STREAM.'
            });
var format_Road_5 = new ol.format.GeoJSON();
var features_Road_5 = format_Road_5.readFeatures(json_Road_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Road_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Road_5.addFeatures(features_Road_5);
var lyr_Road_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Road_5, 
                style: style_Road_5,
                popuplayertitle: 'Road',
                interactive: false,
                title: '<img src="styles/legend/Road_5.png" /> Road'
            });
var format_WATERBODYY_6 = new ol.format.GeoJSON();
var features_WATERBODYY_6 = format_WATERBODYY_6.readFeatures(json_WATERBODYY_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WATERBODYY_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WATERBODYY_6.addFeatures(features_WATERBODYY_6);
var lyr_WATERBODYY_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WATERBODYY_6, 
                style: style_WATERBODYY_6,
                popuplayertitle: 'WATERBODYY',
                interactive: false,
                title: '<img src="styles/legend/WATERBODYY_6.png" /> WATERBODYY'
            });

lyr_OSMStandard_0.setVisible(true);lyr_Bharathapuzha_1.setVisible(true);lyr_Geology_2.setVisible(true);lyr_CHECKDAM_3.setVisible(true);lyr_STREAM_4.setVisible(true);lyr_Road_5.setVisible(true);lyr_WATERBODYY_6.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Bharathapuzha_1,lyr_Geology_2,lyr_CHECKDAM_3,lyr_STREAM_4,lyr_Road_5,lyr_WATERBODYY_6];
lyr_Bharathapuzha_1.set('fieldAliases', {'PERIMETER': 'PERIMETER', 'KERWSDRP_': 'KERWSDRP_', 'KERWSDRP_I': 'KERWSDRP_I', 'WSCODE': 'WSCODE', 'WSCODE1': 'WSCODE1', 'NRIS': 'NRIS', 'WSNAME': 'WSNAME', 'AREA': 'AREA', });
lyr_Geology_2.set('fieldAliases', {'ROCK_GROUP': 'ROCK_GROUP', 'NAME': 'NAME', });
lyr_CHECKDAM_3.set('fieldAliases', {'Name': 'Name', 'name1': 'name1', 'Photo': 'Photo', });
lyr_STREAM_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'ORDER1': 'ORDER1', 'Shape_Leng': 'Shape_Leng', 'LENGTH': 'LENGTH', });
lyr_Road_5.set('fieldAliases', {'NAME': 'NAME', 'Length': 'Length', });
lyr_WATERBODYY_6.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Id': 'Id', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Bharathapuzha_1.set('fieldImages', {'PERIMETER': '', 'KERWSDRP_': '', 'KERWSDRP_I': '', 'WSCODE': '', 'WSCODE1': '', 'NRIS': '', 'WSNAME': '', 'AREA': '', });
lyr_Geology_2.set('fieldImages', {'ROCK_GROUP': '', 'NAME': '', });
lyr_CHECKDAM_3.set('fieldImages', {'Name': '', 'name1': '', 'Photo': '', });
lyr_STREAM_4.set('fieldImages', {'OBJECTID': '', 'ORDER1': '', 'Shape_Leng': '', 'LENGTH': '', });
lyr_Road_5.set('fieldImages', {'NAME': 'TextEdit', 'Length': 'TextEdit', });
lyr_WATERBODYY_6.set('fieldImages', {'OBJECTID': '', 'Id': '', 'Shape_Leng': '', 'Shape_Area': '', });
lyr_Bharathapuzha_1.set('fieldLabels', {'PERIMETER': 'no label', 'KERWSDRP_': 'no label', 'KERWSDRP_I': 'no label', 'WSCODE': 'no label', 'WSCODE1': 'no label', 'NRIS': 'no label', 'WSNAME': 'no label', 'AREA': 'no label', });
lyr_Geology_2.set('fieldLabels', {'ROCK_GROUP': 'no label', 'NAME': 'no label', });
lyr_CHECKDAM_3.set('fieldLabels', {'Name': 'no label', 'name1': 'no label', 'Photo': 'no label', });
lyr_STREAM_4.set('fieldLabels', {'OBJECTID': 'no label', 'ORDER1': 'no label', 'Shape_Leng': 'no label', 'LENGTH': 'no label', });
lyr_Road_5.set('fieldLabels', {'NAME': 'no label', 'Length': 'no label', });
lyr_WATERBODYY_6.set('fieldLabels', {'OBJECTID': 'no label', 'Id': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_WATERBODYY_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});