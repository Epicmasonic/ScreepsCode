const harvester = require('(Creep role) Harvester');
const summon = require('(Building actions) Spawn');

module.exports.loop = function () {
    new RoomVisual('E43S57').text('Pixel Progress: ' + Game.cpu.bucket / 100 + '%', -0.25, 0.25, {align: 'left'}); 
    
    if (Game.cpu.bucket >= 10000) {
        Game.cpu.generatePixel();
    }
    
    for(var name in Memory.creeps) {
        if(!Game.creeps[name]) {
            delete Memory.creeps[name];
            console.log('Clearing non-existing creep memory:', name);
        }
    }

    for(var name in Game.creeps) {
        var creep = Game.creeps[name];
        if (creep.memory.role == 'Harvest') {
            harvester.run(creep);
        }
    }
    
    for(var name in Game.spawns) {
        var spawn = Game.spawns[name];
        summon.run(spawn);
    }
}
