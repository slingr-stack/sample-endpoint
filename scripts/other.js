/**
 * Functions and variables that will be included as part of the endpoints JS interface
 *
 * Created by lefunes on 07/07/16.
 */
var s = function(a, b){
    if (isNaN(a) || isNaN(b)) {
        return "Not valid operands";
    }
    return Number.parseInt(a) + Number.parseInt(b);
};

var r = function(a, b){
    if (isNaN(a) || isNaN(b)) {
        return "Not valid operands";
    }
    return Number.parseInt(a) - Number.parseInt(b);
};

var m = function(a, b){
    if (isNaN(a) || isNaN(b)) {
        return "Not valid operands";
    }
    return a*b;
};

var d = function(a, b){
    if (isNaN(a) || isNaN(b) || b == 0) {
        return "Not valid operands";
    }
    return Number.parseInt(a) / Number.parseInt(b);
};
endpoint.sum = s;
endpoint.rest = r;
endpoint.div = d;
endpoint.mult = m;

endpoint.rnd = function(){
    return Math.random();
};

endpoint.PI_VALUE = Math.PI;

endpoint.rndSum = function(){
    return this.sum(this.rnd(), this.PI_VALUE);
};

endpoint.showConfig = function(){
    sys.logs.info("Endpoint: "+this._name);
    sys.logs.info(" - Token: "+this._configuration.token); // check that the variable 'endpoint' is isolated on the context
    sys.logs.info(" - Token (by ref): "+endpoint._configuration.token);
};
