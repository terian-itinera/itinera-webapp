/*
 * File: app/store/storeUsers.js
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

Ext.define('catUser.store.storeUsers', {
    extend: 'Ext.data.Store',

    requires: [
        'catUser.model.modUsers',
        'Ext.data.proxy.Rest',
        'Ext.data.reader.Json'
    ],

    constructor: function (cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            storeId: 'storeUsers',
            model: 'catUser.model.modUsers',
            proxy: {
                type: 'rest',
                url: '',
                reader: {
                    type: 'json',
                    rootProperty: 'users',
                    totalProperty: 'numUsers.total'
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
        var storeUsers = Ext.getStore('storeUsers');
        var proxyUsers = storeUsers.getProxy();

        var objJsonData = new Object();
        objJsonData.page = storeUsers.currentPage;
        objJsonData.start = (storeUsers.currentPage - 1) * storeUsers.pageSize;
        objJsonData.limit = storeUsers.pageSize;

        var objJsonRequest = new Object();
        objJsonRequest.apiController = 'apiUser';
        objJsonRequest.apiMethod = 'listUser';
        objJsonRequest.apiData = JSON.stringify(objJsonData);

        proxyUsers.api.read = '../../backend/public/dataBridge/' + objJsonRequest.apiController;
        proxyUsers.extraParams = objJsonRequest;

    }

});