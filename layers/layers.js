var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_SosialEkonomi_1 = new ol.format.GeoJSON();
var features_SosialEkonomi_1 = format_SosialEkonomi_1.readFeatures(json_SosialEkonomi_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SosialEkonomi_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SosialEkonomi_1.addFeatures(features_SosialEkonomi_1);
var lyr_SosialEkonomi_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SosialEkonomi_1, 
                style: style_SosialEkonomi_1,
                popuplayertitle: 'Sosial Ekonomi',
                interactive: true,
    title: 'Sosial Ekonomi<br />\
    <img src="styles/legend/SosialEkonomi_1_0.png" /> 0 - 0.302<br />\
    <img src="styles/legend/SosialEkonomi_1_1.png" /> 0.302 - 0.382<br />\
    <img src="styles/legend/SosialEkonomi_1_2.png" /> 0.382 - 0.475<br />\
    <img src="styles/legend/SosialEkonomi_1_3.png" /> 0.475 - 0.584<br />\
    <img src="styles/legend/SosialEkonomi_1_4.png" /> 0.584 - 0.909<br />' });
var format_Infrastruktur_2 = new ol.format.GeoJSON();
var features_Infrastruktur_2 = format_Infrastruktur_2.readFeatures(json_Infrastruktur_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Infrastruktur_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Infrastruktur_2.addFeatures(features_Infrastruktur_2);
var lyr_Infrastruktur_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Infrastruktur_2, 
                style: style_Infrastruktur_2,
                popuplayertitle: 'Infrastruktur',
                interactive: true,
    title: 'Infrastruktur<br />\
    <img src="styles/legend/Infrastruktur_2_0.png" /> 0 - 0.244<br />\
    <img src="styles/legend/Infrastruktur_2_1.png" /> 0.244 - 0.274<br />\
    <img src="styles/legend/Infrastruktur_2_2.png" /> 0.274 - 0.294<br />\
    <img src="styles/legend/Infrastruktur_2_3.png" /> 0.294 - 0.319<br />\
    <img src="styles/legend/Infrastruktur_2_4.png" /> 0.319 - 0.465<br />' });
var format_Kekeringan_3 = new ol.format.GeoJSON();
var features_Kekeringan_3 = format_Kekeringan_3.readFeatures(json_Kekeringan_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kekeringan_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kekeringan_3.addFeatures(features_Kekeringan_3);
var lyr_Kekeringan_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kekeringan_3, 
                style: style_Kekeringan_3,
                popuplayertitle: 'Kekeringan',
                interactive: true,
    title: 'Kekeringan<br />\
    <img src="styles/legend/Kekeringan_3_0.png" /> 0 - 0.403<br />\
    <img src="styles/legend/Kekeringan_3_1.png" /> 0.403 - 0.46<br />\
    <img src="styles/legend/Kekeringan_3_2.png" /> 0.46 - 0.503<br />\
    <img src="styles/legend/Kekeringan_3_3.png" /> 0.503 - 0.576<br />\
    <img src="styles/legend/Kekeringan_3_4.png" /> 0.576 - 0.786<br />' });
var format_KetersediaanLahan_4 = new ol.format.GeoJSON();
var features_KetersediaanLahan_4 = format_KetersediaanLahan_4.readFeatures(json_KetersediaanLahan_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KetersediaanLahan_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KetersediaanLahan_4.addFeatures(features_KetersediaanLahan_4);
var lyr_KetersediaanLahan_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KetersediaanLahan_4, 
                style: style_KetersediaanLahan_4,
                popuplayertitle: 'Ketersediaan Lahan',
                interactive: true,
    title: 'Ketersediaan Lahan<br />\
    <img src="styles/legend/KetersediaanLahan_4_0.png" /> 0 - 0.43<br />\
    <img src="styles/legend/KetersediaanLahan_4_1.png" /> 0.43 - 0.5<br />\
    <img src="styles/legend/KetersediaanLahan_4_2.png" /> 0.5 - 0.556<br />\
    <img src="styles/legend/KetersediaanLahan_4_3.png" /> 0.556 - 0.599<br />\
    <img src="styles/legend/KetersediaanLahan_4_4.png" /> 0.599 - 0.796<br />' });
var format_Lahan_5 = new ol.format.GeoJSON();
var features_Lahan_5 = format_Lahan_5.readFeatures(json_Lahan_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lahan_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lahan_5.addFeatures(features_Lahan_5);
var lyr_Lahan_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lahan_5, 
                style: style_Lahan_5,
                popuplayertitle: 'Lahan',
                interactive: true,
    title: 'Lahan<br />\
    <img src="styles/legend/Lahan_5_0.png" /> Lahan<br />' });
var format_Infrastruktur_6 = new ol.format.GeoJSON();
var features_Infrastruktur_6 = format_Infrastruktur_6.readFeatures(json_Infrastruktur_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Infrastruktur_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Infrastruktur_6.addFeatures(features_Infrastruktur_6);
var lyr_Infrastruktur_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Infrastruktur_6, 
                style: style_Infrastruktur_6,
                popuplayertitle: 'Infrastruktur',
                interactive: true,
    title: 'Infrastruktur<br />\
    <img src="styles/legend/Infrastruktur_6_0.png" /> Infrastruktur<br />' });

lyr_GoogleHybrid_0.setVisible(true);lyr_SosialEkonomi_1.setVisible(true);lyr_Infrastruktur_2.setVisible(true);lyr_Kekeringan_3.setVisible(true);lyr_KetersediaanLahan_4.setVisible(true);lyr_Lahan_5.setVisible(true);lyr_Infrastruktur_6.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_SosialEkonomi_1,lyr_Infrastruktur_2,lyr_Kekeringan_3,lyr_KetersediaanLahan_4,lyr_Lahan_5,lyr_Infrastruktur_6];
lyr_SosialEkonomi_1.set('fieldAliases', {'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'Kelurahan/Desa': 'Kelurahan/Desa', 'ADM4_PCODE': 'ADM4_PCODE', 'ADM4_REF': 'ADM4_REF', 'ADM4ALT1EN': 'ADM4ALT1EN', 'ADM4ALT2EN': 'ADM4ALT2EN', 'Kecamatan': 'Kecamatan', 'ADM3_PCODE': 'ADM3_PCODE', 'Kabupaten/Kota': 'Kabupaten/Kota', 'ADM2_PCODE': 'ADM2_PCODE', 'ADM1_EN': 'ADM1_EN', 'ADM1_PCODE': 'ADM1_PCODE', 'ADM0_EN': 'ADM0_EN', 'ADM0_PCODE': 'ADM0_PCODE', 'date': 'date', 'validOn': 'validOn', 'validTo': 'validTo', 'latitude': 'latitude', 'longitude': 'longitude', 'Ketersediaan Lahan': 'Ketersediaan Lahan', 'Kekeringan': 'Kekeringan', 'Sosial Ekonomi': 'Sosial Ekonomi', 'Infrastruktur': 'Infrastruktur', 'UFPI': 'UFPI', 'cluster': 'cluster', 'Komoditas Unggulan Tanaman Pangan': 'Komoditas Unggulan Tanaman Pangan', 'Komoditas Unggulan Hortikultura': 'Komoditas Unggulan Hortikultura', 'UFPI Kategori': 'UFPI Kategori', 'ikp_kategori': 'ikp_kategori', 'Kategori Wilayah': 'Kategori Wilayah', 'kode_klasifikasi': 'kode_klasifikasi', });
lyr_Infrastruktur_2.set('fieldAliases', {'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'Kelurahan/Desa': 'Kelurahan/Desa', 'ADM4_PCODE': 'ADM4_PCODE', 'ADM4_REF': 'ADM4_REF', 'ADM4ALT1EN': 'ADM4ALT1EN', 'ADM4ALT2EN': 'ADM4ALT2EN', 'Kecamatan': 'Kecamatan', 'ADM3_PCODE': 'ADM3_PCODE', 'Kabupaten/Kota': 'Kabupaten/Kota', 'ADM2_PCODE': 'ADM2_PCODE', 'ADM1_EN': 'ADM1_EN', 'ADM1_PCODE': 'ADM1_PCODE', 'ADM0_EN': 'ADM0_EN', 'ADM0_PCODE': 'ADM0_PCODE', 'date': 'date', 'validOn': 'validOn', 'validTo': 'validTo', 'latitude': 'latitude', 'longitude': 'longitude', 'Ketersediaan Lahan': 'Ketersediaan Lahan', 'Kekeringan': 'Kekeringan', 'Sosial Ekonomi': 'Sosial Ekonomi', 'Infrastruktur': 'Infrastruktur', 'UFPI': 'UFPI', 'cluster': 'cluster', 'Komoditas Unggulan Tanaman Pangan': 'Komoditas Unggulan Tanaman Pangan', 'Komoditas Unggulan Hortikultura': 'Komoditas Unggulan Hortikultura', 'UFPI Kategori': 'UFPI Kategori', 'ikp_kategori': 'ikp_kategori', 'Kategori Wilayah': 'Kategori Wilayah', 'kode_klasifikasi': 'kode_klasifikasi', });
lyr_Kekeringan_3.set('fieldAliases', {'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'Kelurahan/Desa': 'Kelurahan/Desa', 'ADM4_PCODE': 'ADM4_PCODE', 'ADM4_REF': 'ADM4_REF', 'ADM4ALT1EN': 'ADM4ALT1EN', 'ADM4ALT2EN': 'ADM4ALT2EN', 'Kecamatan': 'Kecamatan', 'ADM3_PCODE': 'ADM3_PCODE', 'Kabupaten/Kota': 'Kabupaten/Kota', 'ADM2_PCODE': 'ADM2_PCODE', 'ADM1_EN': 'ADM1_EN', 'ADM1_PCODE': 'ADM1_PCODE', 'ADM0_EN': 'ADM0_EN', 'ADM0_PCODE': 'ADM0_PCODE', 'date': 'date', 'validOn': 'validOn', 'validTo': 'validTo', 'latitude': 'latitude', 'longitude': 'longitude', 'Ketersediaan Lahan': 'Ketersediaan Lahan', 'Kekeringan': 'Kekeringan', 'Sosial Ekonomi': 'Sosial Ekonomi', 'Infrastruktur': 'Infrastruktur', 'UFPI': 'UFPI', 'cluster': 'cluster', 'Komoditas Unggulan Tanaman Pangan': 'Komoditas Unggulan Tanaman Pangan', 'Komoditas Unggulan Hortikultura': 'Komoditas Unggulan Hortikultura', 'UFPI Kategori': 'UFPI Kategori', 'ikp_kategori': 'ikp_kategori', 'Kategori Wilayah': 'Kategori Wilayah', 'kode_klasifikasi': 'kode_klasifikasi', });
lyr_KetersediaanLahan_4.set('fieldAliases', {'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'Kelurahan/Desa': 'Kelurahan/Desa', 'ADM4_PCODE': 'ADM4_PCODE', 'ADM4_REF': 'ADM4_REF', 'ADM4ALT1EN': 'ADM4ALT1EN', 'ADM4ALT2EN': 'ADM4ALT2EN', 'Kecamatan': 'Kecamatan', 'ADM3_PCODE': 'ADM3_PCODE', 'Kabupaten/Kota': 'Kabupaten/Kota', 'ADM2_PCODE': 'ADM2_PCODE', 'ADM1_EN': 'ADM1_EN', 'ADM1_PCODE': 'ADM1_PCODE', 'ADM0_EN': 'ADM0_EN', 'ADM0_PCODE': 'ADM0_PCODE', 'date': 'date', 'validOn': 'validOn', 'validTo': 'validTo', 'latitude': 'latitude', 'longitude': 'longitude', 'Ketersediaan Lahan': 'Ketersediaan Lahan', 'Kekeringan': 'Kekeringan', 'Sosial Ekonomi': 'Sosial Ekonomi', 'Infrastruktur': 'Infrastruktur', 'UFPI': 'UFPI', 'cluster': 'cluster', 'Komoditas Unggulan Tanaman Pangan': 'Komoditas Unggulan Tanaman Pangan', 'Komoditas Unggulan Hortikultura': 'Komoditas Unggulan Hortikultura', 'UFPI Kategori': 'UFPI Kategori', 'ikp_kategori': 'ikp_kategori', 'Kategori Wilayah': 'Kategori Wilayah', 'kode_klasifikasi': 'kode_klasifikasi', });
lyr_Lahan_5.set('fieldAliases', {'fid': 'fid', 'nama': 'nama', 'alamat': 'alamat', 'latitude_left': 'latitude_left', 'longitude_left': 'longitude_left', 'group': 'group', 'search_key': 'search_key', 'kategori': 'kategori', 'index_right': 'index_right', 'GID_4': 'GID_4', 'GID_0': 'GID_0', 'COUNTRY': 'COUNTRY', 'GID_1': 'GID_1', 'NAME_1': 'NAME_1', 'GID_2': 'GID_2', 'Kabupaten/Kota': 'Kabupaten/Kota', 'GID_3': 'GID_3', 'Kecamatan': 'Kecamatan', 'Kelurahan/Desa': 'Kelurahan/Desa', 'VARNAME_4': 'VARNAME_4', 'TYPE_4': 'TYPE_4', 'ENGTYPE_4': 'ENGTYPE_4', 'CC_4': 'CC_4', 'longitude_right': 'longitude_right', 'latitude_right': 'latitude_right', });
lyr_Infrastruktur_6.set('fieldAliases', {'fid': 'fid', 'nama': 'nama', 'alamat': 'alamat', 'latitude_left': 'latitude_left', 'longitude_left': 'longitude_left', 'group': 'group', 'search_key': 'search_key', 'kategori': 'kategori', 'index_right': 'index_right', 'GID_4': 'GID_4', 'GID_0': 'GID_0', 'COUNTRY': 'COUNTRY', 'GID_1': 'GID_1', 'NAME_1': 'NAME_1', 'GID_2': 'GID_2', 'Kabupaten/Kota': 'Kabupaten/Kota', 'GID_3': 'GID_3', 'Kecamatan': 'Kecamatan', 'Kelurahan/Desa': 'Kelurahan/Desa', 'VARNAME_4': 'VARNAME_4', 'TYPE_4': 'TYPE_4', 'ENGTYPE_4': 'ENGTYPE_4', 'CC_4': 'CC_4', 'longitude_right': 'longitude_right', 'latitude_right': 'latitude_right', });
lyr_SosialEkonomi_1.set('fieldImages', {'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'Kelurahan/Desa': 'TextEdit', 'ADM4_PCODE': 'TextEdit', 'ADM4_REF': 'TextEdit', 'ADM4ALT1EN': 'TextEdit', 'ADM4ALT2EN': 'TextEdit', 'Kecamatan': 'TextEdit', 'ADM3_PCODE': 'TextEdit', 'Kabupaten/Kota': 'TextEdit', 'ADM2_PCODE': 'TextEdit', 'ADM1_EN': 'TextEdit', 'ADM1_PCODE': 'TextEdit', 'ADM0_EN': 'TextEdit', 'ADM0_PCODE': 'TextEdit', 'date': 'DateTime', 'validOn': 'DateTime', 'validTo': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'Ketersediaan Lahan': 'TextEdit', 'Kekeringan': 'TextEdit', 'Sosial Ekonomi': 'TextEdit', 'Infrastruktur': 'TextEdit', 'UFPI': 'TextEdit', 'cluster': 'Range', 'Komoditas Unggulan Tanaman Pangan': 'TextEdit', 'Komoditas Unggulan Hortikultura': 'TextEdit', 'UFPI Kategori': 'TextEdit', 'ikp_kategori': 'TextEdit', 'Kategori Wilayah': 'TextEdit', 'kode_klasifikasi': 'Range', });
lyr_Infrastruktur_2.set('fieldImages', {'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'Kelurahan/Desa': 'TextEdit', 'ADM4_PCODE': 'TextEdit', 'ADM4_REF': 'TextEdit', 'ADM4ALT1EN': 'TextEdit', 'ADM4ALT2EN': 'TextEdit', 'Kecamatan': 'TextEdit', 'ADM3_PCODE': 'TextEdit', 'Kabupaten/Kota': 'TextEdit', 'ADM2_PCODE': 'TextEdit', 'ADM1_EN': 'TextEdit', 'ADM1_PCODE': 'TextEdit', 'ADM0_EN': 'TextEdit', 'ADM0_PCODE': 'TextEdit', 'date': 'DateTime', 'validOn': 'DateTime', 'validTo': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'Ketersediaan Lahan': 'TextEdit', 'Kekeringan': 'TextEdit', 'Sosial Ekonomi': 'TextEdit', 'Infrastruktur': 'TextEdit', 'UFPI': 'TextEdit', 'cluster': 'Range', 'Komoditas Unggulan Tanaman Pangan': 'TextEdit', 'Komoditas Unggulan Hortikultura': 'TextEdit', 'UFPI Kategori': 'TextEdit', 'ikp_kategori': 'TextEdit', 'Kategori Wilayah': 'TextEdit', 'kode_klasifikasi': 'Range', });
lyr_Kekeringan_3.set('fieldImages', {'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'Kelurahan/Desa': 'TextEdit', 'ADM4_PCODE': 'TextEdit', 'ADM4_REF': 'TextEdit', 'ADM4ALT1EN': 'TextEdit', 'ADM4ALT2EN': 'TextEdit', 'Kecamatan': 'TextEdit', 'ADM3_PCODE': 'TextEdit', 'Kabupaten/Kota': 'TextEdit', 'ADM2_PCODE': 'TextEdit', 'ADM1_EN': 'TextEdit', 'ADM1_PCODE': 'TextEdit', 'ADM0_EN': 'TextEdit', 'ADM0_PCODE': 'TextEdit', 'date': 'DateTime', 'validOn': 'DateTime', 'validTo': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'Ketersediaan Lahan': 'TextEdit', 'Kekeringan': 'TextEdit', 'Sosial Ekonomi': 'TextEdit', 'Infrastruktur': 'TextEdit', 'UFPI': 'TextEdit', 'cluster': 'Range', 'Komoditas Unggulan Tanaman Pangan': 'TextEdit', 'Komoditas Unggulan Hortikultura': 'TextEdit', 'UFPI Kategori': 'TextEdit', 'ikp_kategori': 'TextEdit', 'Kategori Wilayah': 'TextEdit', 'kode_klasifikasi': 'Range', });
lyr_KetersediaanLahan_4.set('fieldImages', {'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'Kelurahan/Desa': 'TextEdit', 'ADM4_PCODE': 'TextEdit', 'ADM4_REF': 'TextEdit', 'ADM4ALT1EN': 'TextEdit', 'ADM4ALT2EN': 'TextEdit', 'Kecamatan': 'TextEdit', 'ADM3_PCODE': 'TextEdit', 'Kabupaten/Kota': 'TextEdit', 'ADM2_PCODE': 'TextEdit', 'ADM1_EN': 'TextEdit', 'ADM1_PCODE': 'TextEdit', 'ADM0_EN': 'TextEdit', 'ADM0_PCODE': 'TextEdit', 'date': 'DateTime', 'validOn': 'DateTime', 'validTo': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'Ketersediaan Lahan': 'TextEdit', 'Kekeringan': 'TextEdit', 'Sosial Ekonomi': 'TextEdit', 'Infrastruktur': 'TextEdit', 'UFPI': 'TextEdit', 'cluster': 'Range', 'Komoditas Unggulan Tanaman Pangan': 'TextEdit', 'Komoditas Unggulan Hortikultura': 'TextEdit', 'UFPI Kategori': 'TextEdit', 'ikp_kategori': 'TextEdit', 'Kategori Wilayah': 'TextEdit', 'kode_klasifikasi': 'Range', });
lyr_Lahan_5.set('fieldImages', {'fid': 'TextEdit', 'nama': 'TextEdit', 'alamat': 'TextEdit', 'latitude_left': 'TextEdit', 'longitude_left': 'TextEdit', 'group': 'TextEdit', 'search_key': 'TextEdit', 'kategori': 'TextEdit', 'index_right': 'TextEdit', 'GID_4': 'TextEdit', 'GID_0': 'TextEdit', 'COUNTRY': 'TextEdit', 'GID_1': 'TextEdit', 'NAME_1': 'TextEdit', 'GID_2': 'TextEdit', 'Kabupaten/Kota': 'TextEdit', 'GID_3': 'TextEdit', 'Kecamatan': 'TextEdit', 'Kelurahan/Desa': 'TextEdit', 'VARNAME_4': 'TextEdit', 'TYPE_4': 'TextEdit', 'ENGTYPE_4': 'TextEdit', 'CC_4': 'TextEdit', 'longitude_right': 'TextEdit', 'latitude_right': 'TextEdit', });
lyr_Infrastruktur_6.set('fieldImages', {'fid': 'TextEdit', 'nama': 'TextEdit', 'alamat': 'TextEdit', 'latitude_left': 'TextEdit', 'longitude_left': 'TextEdit', 'group': 'TextEdit', 'search_key': 'TextEdit', 'kategori': 'TextEdit', 'index_right': 'TextEdit', 'GID_4': 'TextEdit', 'GID_0': 'TextEdit', 'COUNTRY': 'TextEdit', 'GID_1': 'TextEdit', 'NAME_1': 'TextEdit', 'GID_2': 'TextEdit', 'Kabupaten/Kota': 'TextEdit', 'GID_3': 'TextEdit', 'Kecamatan': 'TextEdit', 'Kelurahan/Desa': 'TextEdit', 'VARNAME_4': 'TextEdit', 'TYPE_4': 'TextEdit', 'ENGTYPE_4': 'TextEdit', 'CC_4': 'TextEdit', 'longitude_right': 'TextEdit', 'latitude_right': 'TextEdit', });
lyr_SosialEkonomi_1.set('fieldLabels', {'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', 'Kelurahan/Desa': 'inline label - visible with data', 'ADM4_PCODE': 'hidden field', 'ADM4_REF': 'hidden field', 'ADM4ALT1EN': 'hidden field', 'ADM4ALT2EN': 'hidden field', 'Kecamatan': 'inline label - visible with data', 'ADM3_PCODE': 'hidden field', 'Kabupaten/Kota': 'inline label - visible with data', 'ADM2_PCODE': 'hidden field', 'ADM1_EN': 'hidden field', 'ADM1_PCODE': 'hidden field', 'ADM0_EN': 'hidden field', 'ADM0_PCODE': 'hidden field', 'date': 'hidden field', 'validOn': 'hidden field', 'validTo': 'hidden field', 'latitude': 'hidden field', 'longitude': 'hidden field', 'Ketersediaan Lahan': 'hidden field', 'Kekeringan': 'hidden field', 'Sosial Ekonomi': 'hidden field', 'Infrastruktur': 'hidden field', 'UFPI': 'hidden field', 'cluster': 'hidden field', 'Komoditas Unggulan Tanaman Pangan': 'hidden field', 'Komoditas Unggulan Hortikultura': 'hidden field', 'UFPI Kategori': 'hidden field', 'ikp_kategori': 'hidden field', 'Kategori Wilayah': 'hidden field', 'kode_klasifikasi': 'hidden field', });
lyr_Infrastruktur_2.set('fieldLabels', {'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', 'Kelurahan/Desa': 'inline label - visible with data', 'ADM4_PCODE': 'hidden field', 'ADM4_REF': 'hidden field', 'ADM4ALT1EN': 'hidden field', 'ADM4ALT2EN': 'hidden field', 'Kecamatan': 'inline label - visible with data', 'ADM3_PCODE': 'hidden field', 'Kabupaten/Kota': 'inline label - visible with data', 'ADM2_PCODE': 'hidden field', 'ADM1_EN': 'hidden field', 'ADM1_PCODE': 'hidden field', 'ADM0_EN': 'hidden field', 'ADM0_PCODE': 'hidden field', 'date': 'hidden field', 'validOn': 'hidden field', 'validTo': 'hidden field', 'latitude': 'hidden field', 'longitude': 'hidden field', 'Ketersediaan Lahan': 'hidden field', 'Kekeringan': 'hidden field', 'Sosial Ekonomi': 'hidden field', 'Infrastruktur': 'inline label - visible with data', 'UFPI': 'hidden field', 'cluster': 'hidden field', 'Komoditas Unggulan Tanaman Pangan': 'hidden field', 'Komoditas Unggulan Hortikultura': 'hidden field', 'UFPI Kategori': 'hidden field', 'ikp_kategori': 'hidden field', 'Kategori Wilayah': 'hidden field', 'kode_klasifikasi': 'hidden field', });
lyr_Kekeringan_3.set('fieldLabels', {'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', 'Kelurahan/Desa': 'inline label - visible with data', 'ADM4_PCODE': 'hidden field', 'ADM4_REF': 'hidden field', 'ADM4ALT1EN': 'hidden field', 'ADM4ALT2EN': 'hidden field', 'Kecamatan': 'inline label - visible with data', 'ADM3_PCODE': 'hidden field', 'Kabupaten/Kota': 'inline label - visible with data', 'ADM2_PCODE': 'hidden field', 'ADM1_EN': 'hidden field', 'ADM1_PCODE': 'hidden field', 'ADM0_EN': 'hidden field', 'ADM0_PCODE': 'hidden field', 'date': 'hidden field', 'validOn': 'hidden field', 'validTo': 'hidden field', 'latitude': 'hidden field', 'longitude': 'hidden field', 'Ketersediaan Lahan': 'hidden field', 'Kekeringan': 'inline label - visible with data', 'Sosial Ekonomi': 'hidden field', 'Infrastruktur': 'hidden field', 'UFPI': 'hidden field', 'cluster': 'hidden field', 'Komoditas Unggulan Tanaman Pangan': 'hidden field', 'Komoditas Unggulan Hortikultura': 'hidden field', 'UFPI Kategori': 'hidden field', 'ikp_kategori': 'hidden field', 'Kategori Wilayah': 'hidden field', 'kode_klasifikasi': 'hidden field', });
lyr_KetersediaanLahan_4.set('fieldLabels', {'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', 'Kelurahan/Desa': 'inline label - visible with data', 'ADM4_PCODE': 'hidden field', 'ADM4_REF': 'hidden field', 'ADM4ALT1EN': 'hidden field', 'ADM4ALT2EN': 'hidden field', 'Kecamatan': 'inline label - visible with data', 'ADM3_PCODE': 'hidden field', 'Kabupaten/Kota': 'inline label - visible with data', 'ADM2_PCODE': 'hidden field', 'ADM1_EN': 'hidden field', 'ADM1_PCODE': 'hidden field', 'ADM0_EN': 'hidden field', 'ADM0_PCODE': 'hidden field', 'date': 'hidden field', 'validOn': 'hidden field', 'validTo': 'hidden field', 'latitude': 'hidden field', 'longitude': 'hidden field', 'Ketersediaan Lahan': 'inline label - visible with data', 'Kekeringan': 'hidden field', 'Sosial Ekonomi': 'hidden field', 'Infrastruktur': 'hidden field', 'UFPI': 'hidden field', 'cluster': 'hidden field', 'Komoditas Unggulan Tanaman Pangan': 'hidden field', 'Komoditas Unggulan Hortikultura': 'hidden field', 'UFPI Kategori': 'hidden field', 'ikp_kategori': 'hidden field', 'Kategori Wilayah': 'hidden field', 'kode_klasifikasi': 'hidden field', });
lyr_Lahan_5.set('fieldLabels', {'fid': 'hidden field', 'nama': 'inline label - visible with data', 'alamat': 'hidden field', 'latitude_left': 'hidden field', 'longitude_left': 'hidden field', 'group': 'hidden field', 'search_key': 'hidden field', 'kategori': 'inline label - visible with data', 'index_right': 'hidden field', 'GID_4': 'hidden field', 'GID_0': 'hidden field', 'COUNTRY': 'hidden field', 'GID_1': 'hidden field', 'NAME_1': 'hidden field', 'GID_2': 'hidden field', 'Kabupaten/Kota': 'inline label - visible with data', 'GID_3': 'hidden field', 'Kecamatan': 'inline label - visible with data', 'Kelurahan/Desa': 'inline label - visible with data', 'VARNAME_4': 'hidden field', 'TYPE_4': 'hidden field', 'ENGTYPE_4': 'hidden field', 'CC_4': 'hidden field', 'longitude_right': 'hidden field', 'latitude_right': 'hidden field', });
lyr_Infrastruktur_6.set('fieldLabels', {'fid': 'hidden field', 'nama': 'inline label - visible with data', 'alamat': 'hidden field', 'latitude_left': 'hidden field', 'longitude_left': 'hidden field', 'group': 'hidden field', 'search_key': 'hidden field', 'kategori': 'inline label - visible with data', 'index_right': 'hidden field', 'GID_4': 'hidden field', 'GID_0': 'hidden field', 'COUNTRY': 'hidden field', 'GID_1': 'hidden field', 'NAME_1': 'hidden field', 'GID_2': 'hidden field', 'Kabupaten/Kota': 'inline label - visible with data', 'GID_3': 'hidden field', 'Kecamatan': 'inline label - visible with data', 'Kelurahan/Desa': 'inline label - visible with data', 'VARNAME_4': 'hidden field', 'TYPE_4': 'hidden field', 'ENGTYPE_4': 'hidden field', 'CC_4': 'hidden field', 'longitude_right': 'hidden field', 'latitude_right': 'hidden field', });
lyr_Infrastruktur_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});