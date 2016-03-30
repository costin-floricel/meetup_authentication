// public/js/services/MeetService.js
angular.module('MeetService', []).factory('Meet', ['$http', function($http) {

    return {
        // call to get all meets
        get : function() {
            return $http.get('/api/meets');
        },


                // these will work when more API routes are defined on the Node side of things
        // call to POST and create a new Meet
        create : function(meetData) {
            return $http.post('/api/meets', meetData);
        },

        // call to DELETE a meet
        delete : function(id) {
            return $http.delete('/api/meets/' + id);
        }
    }       

}]);