/**
 * Functions that will be included as part of the endpoints JS interface
 *
 * Created by lefunes on 07/07/16.
 */
endpoint.showConfiguration = function(){
    sys.logs.info("Endpoint configuration: "+JSON.stringify(this._configuration));
};