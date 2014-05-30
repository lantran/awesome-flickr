/**
 * Created by lantran on 5/26/14.
 */
function FlickrCtrl($scope, Flickr){

    $scope.photos = [];
    $scope.search = function(search, page){
        $scope.loading = true;
        var promise = Flickr.search(search, page);
        promise.then(function(data){
            $scope.photos = data.photos.photo;
            $scope.page = data.photos.page;
            $scope.pages = data.photos.pages;
            $scope.total = data.photos.total;
            $scope.paginator();
            $scope.loading = false;
        }, function(err){
            console.log('Failed: ' + err);
            $scope.loading = false;
        });
    }

    $scope.loading = true;

    $scope.paginator = function(){
        var self = this;
        var currentPage = $scope.page;
        var totalPages = $scope.pages;
        var pageNav = [];

        if(currentPage > 1){
            pageNav.push({text: '<< Back', number: currentPage - 1, current: false});
        }

        for(var i=1;i <= totalPages;i++){
            if(i==currentPage){
                if(currentPage==1){
                    pageNav.push({text: currentPage, number: currentPage, current: true});
                }
            }else{
                if(i >= currentPage - 4 && i < currentPage + 4 ){
                    pageNav.push({text: i, number: i, current: true});
                }
            }
        }
        if(currentPage < totalPages){
            pageNav.push({text: 'Next >>', number: (currentPage + 1), current: false});
        }
        $scope.pageNav = pageNav;
    }

    $scope.search();

}