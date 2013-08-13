/**
 * Created with JetBrains WebStorm.
 * User: Congwen
 * Date: 8/4/13
 * Time: 4:43 AM
 * To change this template use File | Settings | File Templates.
 */

app.directive('ngRef', function($location, $timeout){
    linkFn = function(sco,ele,att){
        ele.bind('click', function(){
//            console.log($location);
            $timeout(function(){
                $location.path(att.ngRef);
            }, 0);
        })
    }
    return linkFn;
})