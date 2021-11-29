
const i2c = require('i2c-bus');


debug=false

function getdevices(){

    const adresses = [
        {module:20 , state:false},
        {module:21 , state:false},
        {module:22 , state:false},
        {module:23 , state:false}, 
    ]


    for (var adress in adresses) {
        var alive = scani2c (adresses[adress].module)
        adresses[adress].state = alive
    }


    function scani2c (addr){
        var alive = (readi2c(addr,20)==="nodata") ? false : true;
        debug == true ? console.log(alive) : "";
        return (alive);
    }



    function readi2c(addr, reg){
        const i2c1 = i2c.openSync(1);
        try{
            var value = i2c1.readWordSync(addr, reg);
        }
        catch(err){
            var value = "no data";
        }
        debug == true ? console.log(value) : "";
        i2c1.closeSync();
        return value;
    }
    return adresses
}
export default getdevices;
