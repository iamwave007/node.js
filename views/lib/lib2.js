(function(window){
    //I recommend this
    'use strict';

    var questionStore=["what's your favorite ..?","Tell me how...","So, (insert name), what's your story?"];





    function define_LTLib(){
        var LTLib = {};
        LTLib.starter=function(){

        };
        LTLib.followUpWithThis=function(){
            // console.log(questionStore[0]);
        };
        LTLib.randomQ=function(){

        };





        return LTLib;
    }
    //define globally if it doesn't already exist
    if(typeof(LTLib) === 'undefined'){
        window.LTLib = define_LTLib();
    }
    else{
        console.log("LTLib already defined.");
    }
})(window);