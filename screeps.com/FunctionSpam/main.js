const harvester = require('(Creep role) Harvester');
const summon = require('(Building actions) Spawn');

module.exports.loop = function () {
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