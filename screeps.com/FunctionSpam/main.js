const harvester = require('(Creep role) Harvester');
const summon = require('(Building actions) Spawn');
const icon = require('(Building actions) Spawn Icons');

module.exports.loop = function () {
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
        
        new RoomVisual(spawn.room.name).text('Pixel Progress: ' + Game.cpu.bucket / 100 + '%', -0.25, 0.25, {align: 'left'});
        new RoomVisual(spawn.room.name).text('Room Progress: ' + Math.round(spawn.room.controller.progress / spawn.room.controller.progressTotal * 10000) / 100 + '%', -0.25, 1.25, {align: 'left'});
        
        summon.run(spawn);]
        
        if (spawn.spawning) {
            icon.run(spawn);
        }
    }
}
