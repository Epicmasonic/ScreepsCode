let number = 1;
let harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'Harvest');
const maxHarvesters = 3;

module.exports = {
    /** @param {Creep} creep **/
    run: function(spawn) {
        if (!spawn.Spawning && spawn.store[RESOURCE_ENERGY] >= 200 && harvesters.length < maxHarvesters) {
            let escape;
            while (true) {
                escape = true;
                for (var name in Game.creeps) {
                    if (name == 'Harvest' + number) {
                        escape = false;
                        number++;
                    }
                }
                if (escape) {
                    break;
                }
            }
            
            spawn.spawnCreep([MOVE,MOVE,WORK,CARRY,MOVE], 'Harvest_' + number, {memory: {role: 'Harvest'}});
        }
	}
};