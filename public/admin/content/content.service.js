(function(){
  "use strict";
    
  function contentService($resource){
    
    var Content = $resource("/api/admin/content/:id", {id: '@_id' });

    var getContentItem = function(id){
      return Content.get({id: id}).$promise;
    };
    
    var getContent = function(){
      return Content.query().$promise;
    };
    
    var saveContentItem = function(contentdata) {
      return Content.save(contentdata).$promise;
    }
    
    var deleteContentItem = function(id) {
      return Content.remove({id: id}).$promise;
    };

    return {
      getContent: getContent,
      getContentItem: getContentItem,
      saveContentItem: saveContentItem,
      deleteContentItem: deleteContentItem
    };
    
  }
  
  angular
    .module("admin.content")
    .factory("contentService", contentService);
  
})();