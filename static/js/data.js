var DATALIBRARY = DATALIBRARY || (function(){
    var _args = {};

    return {
        init : function(Args = false) {
            if(Args) {
                _args = Args;
            }
        },
        getData : function(i = false) {
            return i ? _args[i] : _args;
        }
    };
}());
