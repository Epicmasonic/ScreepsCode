/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports.thing = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('role.harvester');
 * mod.thing == 'a thing'; // true
 */
let target = '';
let score = 0;

var harvester = {
    /** @param {Creep} creep **/
    run: function(creep) {
	    if ((creep.store.getFreeCapacity(RESOURCE_ENERGY) > 0 && creep.memory.action != "Upgrade Controller") || (creep.store.getUsedCapacity(RESOURCE_ENERGY) <= 0 && creep.memory.action == "Upgrade Controller")) {
            // Mine Energy
            var sources = creep.room.find(FIND_SOURCES);
            if (creep.memory.action != "Mine Energy") {
                console.log(creep.name + ": I'm going to mine energy.")
                creep.say("⛏️⚡")
                creep.memory.action = "Mine Energy"
            }
            
            if (creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
                creep.moveTo(sources[0]);
            }
        }
        else {
            for (let i = 0; i < creep.room.find(FIND_MY_STRUCTURES, { filter: { structureType: STRUCTURE_SPAWN }}).length; i++) {
                // console.log(creep.room.find(FIND_MY_STRUCTURES, { filter: { structureType: STRUCTURE_SPAWN }})[i])
            }
            
            if (Game.spawns['Spawn1'].store.getFreeCapacity(RESOURCE_ENERGY) <= 0) {
                // Upgrade Controller
                if (creep.memory.action != "Upgrade Controller") {
                    console.log(creep.name + ": I'm fueling the room controller.")
                    creep.say("⚡🧠")
                    creep.memory.action = "Upgrade Controller"
                }
                if (creep.upgradeController(creep.room.controller, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(creep.room.controller);
                }
            }
            else {
                //Fuel Spawn
                if (creep.memory.action != "Fuel Spawn") {
                    console.log(creep.name + ": I'm fueling " + Game.spawns['Spawn1'].name + ".")
                    creep.say("⚡🏠")
                    creep.memory.action = "Fuel Spawn"
                }
                if (creep.transfer(Game.spawns['Spawn1'], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(Game.spawns['Spawn1']);
                }
            }
        }
	}
};

module.exports = harvester;
