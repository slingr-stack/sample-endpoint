/** {operation:"REST", firstOperand:"345", secondOperand:"345"};
    private static Pattern inQuotesPattern = Pattern.compile("(\".*\")");
 * Functions that will be included as part of the endpoints JS interface
 *
 * Created by lefunes on 07/07/16.
 */
endpoint.showConfiguration = function(){
    sys.logs.info("Endpoint configuration: "+JSON.stringify(this._configuration));
};