/*
 * File: app/store/storeCar.js
 *
 * This file was generated by Sencha Architect version 3.5.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 5.1.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 5.1.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('catCar.store.storeCar', {
    extend: 'Ext.data.Store',

    requires: [
        'catCar.model.modCar',
        'Ext.data.proxy.Rest',
        'Ext.data.reader.Json'
    ],

    constructor: function (cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            storeId: 'storeCar',
            model: 'catCar.model.modCar',
            proxy: {
                type: 'rest',
                url: '',
                reader: {
                    type: 'json',
                    rootProperty: 'Cars',
                    totalProperty: 'numCars.total'
                }
            },
            listeners: {
                beforeload: {
                    fn: me.onStoreBeforeLoad,
                    scope: me
                }
            }
        }, cfg)]);
    },

    onStoreBeforeLoad: function (store, operation, eOpts) {
        var storeCar = Ext.getStore('storeCar');
        var proxySector = storeCar.getProxy();

        var objJsonData = new Object();
        objJsonData.page = storeCar.currentPage;
        objJsonData.start = (storeCar.currentPage - 1) * storeCar.pageSize;
        objJsonData.limit = storeCar.pageSize;

        var objJsonRequest = new Object();
        objJsonRequest.apiController = 'apiCar';
        objJsonRequest.apiMethod = 'listCar';
        objJsonRequest.apiData = JSON.stringify(objJsonData);

        proxySector.api.read = '../../backend/public/dataBridge/' + objJsonRequest.apiController;
        proxySector.extraParams = objJsonRequest;

    }

});