angular.module('starships').service('shipSrvc', function($http) {

    this.getShips = function(){
        return $http.get('https://swapi.co/api/starships/').then(resp=>{
            return resp.data.results;
        }).catch(err=>{
            console.log('Error getting ships', err);
        })
    }

    this.getShip = function(id){
        return $http.get(`https://swapi.co/api/starships/${id}`).then(resp=>{
            return resp.data;
        }).catch(err=>{
            console.log('Error getting ships', err);


        })
        
        
    }

    this.getId = function(ship){
        // ship.url https://swapi.co/api/starships/5/
        //start with ship obj
        //split '/' and take the second to last 

        let split = ship.url.split('/');
        return split[split.length-2*1];

        //retrurn ship Id
    }

})