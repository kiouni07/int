events.listen('recipes', event => {

//Water

event.custom({"type": "interactio:item_fluid_transform","inputs": [{"item": "minecraft:seagrass","count": 1,"return_chance": 0}],"fluid": {"fluid": "minecraft:water"},"output": {"item": "minecraft:grass","count": 1},"consume_fluid": 0})
event.custom({"type": "interactio:item_fluid_transform","inputs": [{"item": "minecraft:red_sand","count": 1,"return_chance": 0}],"fluid": {"fluid": "minecraft:water"},"output": {"item": "minecraft:sand","count": 1},"consume_fluid": 0})
event.custom({"type": "interactio:item_fluid_transform","inputs": [{"item": "minecraft:bowl","count": 1,"return_chance": 0}],"fluid": {"fluid": "minecraft:water"},"output": {"item": "kubejs:water_bowl","count": 1},"consume_fluid": 0})
event.custom({"type": "interactio:item_fluid_transform","inputs": [{"item": "minecraft:oak_log","count": 1,"return_chance": 0}],"fluid": {"fluid": "minecraft:water"},"output": {"item": "upgrade_aquatic:driftwood_log","count": 1},"consume_fluid": 0})
event.custom({"type": "interactio:item_fluid_transform","inputs": [{"item": "minecraft:oak_planks","count": 1,"return_chance": 0}],"fluid": {"fluid": "minecraft:water"},"output": {"item": "upgrade_aquatic:driftwood_planks","count": 1},"consume_fluid": 0})
event.custom({"type": "interactio:item_fluid_transform","inputs": [{"item": 'minecraft:oak_sapling',"count": 1,"return_chance": 0}],"fluid": {"fluid": "minecraft:water"},"output": {"item": "upgrade_aquatic:river_sapling","count": 1},"consume_fluid": 0})

//Organic Water

event.custom({"type": "interactio:item_fluid_transform","inputs": [{"item": "minecraft:fern","count": 1,"return_chance": 0}, {"item": "minecraft:wheat_seeds","count": 1,"return_chance": 0}, {"item": "minecraft:melon_seeds","count": 1,"return_chance": 0}],"fluid": {"fluid": "kubejs:organic_fluid"},"output": {"item": "exnihilosequentia:seed_cactus","count": 1},"consume_fluid": 1})
event.custom({"type": "interactio:item_fluid_transform","inputs": [{"item": "minecraft:wheat","count": 1,"return_chance": 0}, {"item": "minecraft:beetroot_seeds","count": 1,"return_chance": 0}, {"item": "minecraft:pumpkin_seeds","count": 1,"return_chance": 0}],"fluid": {"fluid": "kubejs:organic_fluid"},"output": {"item": "exnihilosequentia:seed_sugarcane","count": 1},"consume_fluid": 1})
event.custom({"type": "interactio:item_fluid_transform","inputs": [{"item": "minecraft:melon_slice","count": 1,"return_chance": 0}, {"item": "minecraft:wheat_seeds","count": 1,"return_chance": 0}, {"item": "minecraft:beetroot_seeds","count": 1,"return_chance": 0}],"fluid": {"fluid": "kubejs:organic_fluid"},"output": {"item": "exnihilosequentia:seed_bamboo","count": 1},"consume_fluid": 1})
event.custom({"type": "interactio:item_fluid_transform","inputs": [{"item": "minecraft:bamboo","count": 1,"return_chance": 0}],"fluid": {"fluid": "kubejs:organic_fluid"},"output": {"item": "exnihilosequentia:seed_carrot","count": 1},"consume_fluid": 1})
event.custom({"type": "interactio:item_fluid_transform","inputs": [{"item": "minecraft:crafting_table","count": 1,"return_chance": 0}],"fluid": {"fluid": "kubejs:organic_fluid"},"output": {"item": 'culinaryconstruct:culinary_station',"count": 1},"consume_fluid": 1})
event.custom({"type": "interactio:item_fluid_transform","inputs": [{"item": "minecraft:cactus","count": 1,"return_chance": 0}],"fluid": {"fluid": "kubejs:organic_fluid"},"output": {"item": "exnihilosequentia:seed_potato","count": 1},"consume_fluid": 1})
event.custom({"type": "interactio:item_fluid_transform","inputs": [{"item": "minecraft:sugar_cane","count": 1,"return_chance": 0}],"fluid": {"fluid": "kubejs:organic_fluid"},"output": {"item": "exnihilosequentia:seed_berry","count": 1},"consume_fluid": 1})
event.custom({"type": "interactio:item_fluid_transform","inputs": [{"item": "farmersdelight:cabbage_leaf","count": 1,"return_chance": 0}],"fluid": {"fluid": "kubejs:organic_fluid"},"output": {"item": 'farmersdelight:wild_onions',"count": 1},"consume_fluid": 1})
event.custom({"type": "interactio:item_fluid_transform","inputs": [{"item": 'farmersdelight:pumpkin_slice',"count": 1,"return_chance": 0}],"fluid": {"fluid": "kubejs:organic_fluid"},"output": {"item": 'farmersdelight:rice_panicle',"count": 1},"consume_fluid": 1})
event.custom({"type": "interactio:item_fluid_transform","inputs": [{"item": 'minecraft:brown_mushroom',"count": 5,"return_chance": 0}],"fluid": {"fluid": "kubejs:organic_fluid"},"output": {"item": 'farmersdelight:brown_mushroom_colony',"count": 1},"consume_fluid": 1})
event.custom({"type": "interactio:item_fluid_transform","inputs": [{"item": 'minecraft:red_mushroom',"count": 5,"return_chance": 0}],"fluid": {"fluid": "kubejs:organic_fluid"},"output": {"item": 'farmersdelight:red_mushroom_colony',"count": 1},"consume_fluid": 1})
event.custom({"type": "interactio:item_fluid_transform","inputs": [{"item": 'minecraft:warped_fungus',"count": 1,"return_chance": 0}],"fluid": {"fluid": "kubejs:organic_fluid"},"output": {"item": 'minecraft:crimson_fungus',"count": 1},"consume_fluid": 1})
event.custom({"type": "interactio:item_fluid_transform","inputs": [{"tag": "forge:seeds","count": 128,"return_chance": 0}, {"item": "kubejs:dust","count": 64,"return_chance": 0}, {"item": "minecraft:sweet_berries","count": 64,"return_chance": 0}],"fluid": {"fluid": "kubejs:organic_fluid"},"output": {"item": 'mysticalagriculture:inferium_seeds',"count": 1},"consume_fluid": 1})
event.custom({"type": "interactio:item_fluid_transform","inputs": [{"item": 'minecraft:poppy',"count": 2,"return_chance": 0}],"fluid": {"fluid": "kubejs:organic_fluid"},"output": {"item": 'minecraft:rose_bush',"count": 1},"consume_fluid": 1})
event.custom({"type": "interactio:item_fluid_transform","inputs": [{"item": 'minecraft:allium',"count": 2,"return_chance": 0}],"fluid": {"fluid": "kubejs:organic_fluid"},"output": {"item": 'minecraft:peony',"count": 1},"consume_fluid": 1})
event.custom({"type": "interactio:item_fluid_transform","inputs": [{"item": 'minecraft:blue_orchid',"count": 2,"return_chance": 0}],"fluid": {"fluid": "kubejs:organic_fluid"},"output": {"item": 'minecraft:lilac',"count": 1},"consume_fluid": 1})
event.custom({"type": "interactio:item_fluid_transform","inputs": [{"item": 'minecraft:dandelion',"count": 2,"return_chance": 0}],"fluid": {"fluid": "kubejs:organic_fluid"},"output": {"item": 'minecraft:sunflower',"count": 1},"consume_fluid": 1})

//Seawater

event.custom({"type": "interactio:item_fluid_transform","inputs": [{"tag": "seaopolis:minecraft_coral", "count": 1}],"fluid": {"fluid": "exnihilosequentia:sea_water"},"output": {"entries": [
{"result": {"item": 'upgrade_aquatic:acan_coral_block',"count": 1},"weight": 1},      
{"result": {"item": 'upgrade_aquatic:finger_coral_block', "count": 1},"weight": 1},
{"result": {"item": 'upgrade_aquatic:star_coral_block', "count": 1},"weight": 1},
{"result": {"item": 'upgrade_aquatic:moss_coral_block', "count": 1},"weight": 1},
{"result": {"item": 'upgrade_aquatic:petal_coral_block',"count": 1},"weight": 1},
{"result": {"item": 'upgrade_aquatic:rock_coral_block',"count": 1},"weight": 1},
{"result": {"item": 'upgrade_aquatic:pillow_coral_block',"count": 1},"weight": 1},
{"result": {"item": 'upgrade_aquatic:silk_coral_block',"count": 1},"weight": 1},
{"result": {"item": 'upgrade_aquatic:chrome_coral_block',"count": 1},"weight": 1},
{"result": {"item": 'upgrade_aquatic:prismarine_coral_block',"count": 1},"weight": 1},
{"result": {"item": 'upgrade_aquatic:branch_coral_block',"count": 1},"weight": 1}],
"empty_weight": 0,"rolls": 1},"consume_fluid": 0})

event.custom({"type": "interactio:item_fluid_transform","inputs": [{"item": 'upgrade_aquatic:kelp_block', "count": 1}],"fluid": {"fluid": "exnihilosequentia:sea_water"},"output": {"entries": [
{"result": {"item": 'upgrade_aquatic:tongue_kelp_block',"count": 1},"weight": 1},      
{"result": {"item": 'upgrade_aquatic:ochre_kelp_block', "count": 1},"weight": 1},
{"result": {"item": 'upgrade_aquatic:thorny_kelp_block', "count": 1},"weight": 1},
{"result": {"item": 'upgrade_aquatic:polar_kelp_block', "count": 1},"weight": 1}],
"empty_weight": 0,"rolls": 1},"consume_fluid": 0})

event.custom({"type": "interactio:item_fluid_transform","inputs": [{"item": "minecraft:grass","count": 1,"return_chance": 0}],"fluid": {"fluid": "exnihilosequentia:sea_water"},"output": {"item": 'minecraft:dead_bush',"count": 1},"consume_fluid": 0})

//Maps

var modids = ['minecraft']

onEvent('block.loot_tables', event => {
event.build('kubejs:map1', table => {table.pool(pool => {pool.rolls = 1
Ingredient.of('@' +modids).stacks.forEach(stack => {
pool.addEntry({"type": "item","name": "minecraft:map","weight": 5,"functions": [{"function": "minecraft:exploration_map","destination": "monument","decoration": "red_x","zoom": 1,"skip_existing_chunks": true},{"function": "minecraft:set_name","name": {"text": "Ocean Explorers Map","color": "blue"}}]})})})})})

onEvent('block.loot_tables', event => {
event.build('kubejs:map2', table => {table.pool(pool => {pool.rolls = 1
Ingredient.of('@' +modids).stacks.forEach(stack => {
pool.addEntry({"type": "item","name": "minecraft:map","weight": 5,"functions": [{"function": "minecraft:exploration_map","destination": "stronghold","decoration": "red_x","zoom": 1,"skip_existing_chunks": true},{"function": "minecraft:set_name","name": {"text": "Stronghold Explorers Map","color": "gray"}}]})})})})})

onEvent('block.loot_tables', event => {
    event.build('kubejs:map3', table => {table.pool(pool => {pool.rolls = 1
    Ingredient.of('@' +modids).stacks.forEach(stack => {
    pool.addEntry({"type": "item","name": "minecraft:map","weight": 5,"functions": [{"function": "minecraft:exploration_map","destination": "dungeons_plus:warped_garden","decoration": "red_x","zoom": 1,"skip_existing_chunks": true},{"function": "minecraft:set_name","name": {"text": "Warped Garden Explorers Map","color": "red"}}]})})})})})

onEvent('block.loot_tables', event => {
    event.build('kubejs:map4', table => {table.pool(pool => {pool.rolls = 1
    Ingredient.of('@' +modids).stacks.forEach(stack => {
    pool.addEntry({"type": "item","name": "minecraft:map","weight": 5,"functions": [{"function": "minecraft:exploration_map","destination": "dungeons_plus:leviathan","decoration": "red_x","zoom": 1,"skip_existing_chunks": true},{"function": "minecraft:set_name","name": {"text": "Leviathan Explorers Map","color": "yellow"}}]})})})})})

onEvent('block.loot_tables', event => {
    event.build('kubejs:map5', table => {table.pool(pool => {pool.rolls = 1
    Ingredient.of('@' +modids).stacks.forEach(stack => {
    pool.addEntry({"type": "item","name": "minecraft:map","weight": 5,"functions": [{"function": "minecraft:exploration_map","destination": "fortress","decoration": "red_x","zoom": 1,"skip_existing_chunks": true},{"function": "minecraft:set_name","name": {"text": "Fortress Explorers Map","color": "purple"}}]})})})})})

onEvent('block.loot_tables', event => {
    event.build('kubejs:map6', table => {table.pool(pool => {pool.rolls = 1
    Ingredient.of('@' +modids).stacks.forEach(stack => {
    pool.addEntry({"type": "item","name": "minecraft:map","weight": 5,"functions": [{"function": "minecraft:exploration_map","destination": "bastion_remnant","decoration": "red_x","zoom": 1,"skip_existing_chunks": true},{"function": "minecraft:set_name","name": {"text": "Bastion Remnant Explorers Map","color": "black"}}]})})})})})

onEvent('block.loot_tables', event => {
    event.build('kubejs:map7', table => {table.pool(pool => {pool.rolls = 1
    Ingredient.of('@' +modids).stacks.forEach(stack => {
    pool.addEntry({"type": "item","name": "minecraft:map","weight": 5,"functions": [{"function": "minecraft:exploration_map","destination": "endcity","decoration": "red_x","zoom": 1,"skip_existing_chunks": true},{"function": "minecraft:set_name","name": {"text": "End City Explorers Map","color": "white"}}]})})})})})

onEvent('block.loot_tables', event => {
    event.build('kubejs:map8', table => {table.pool(pool => {pool.rolls = 1
    Ingredient.of('@' +modids).stacks.forEach(stack => {
    pool.addEntry({"type": "item","name": "minecraft:map","weight": 5,"functions": [{"function": "minecraft:exploration_map","destination": "dungeonsmod:the_origin","decoration": "red_x","zoom": 1,"skip_existing_chunks": true},{"function": "minecraft:set_name","name": {"text": "The Origin Explorers Map","color": "white"}}]})})})})})

onEvent('block.loot_tables', event => { 
    event.build('kubejs:blank_ore', table => {table.pool(pool => {pool.rolls = 1
    pool.addItem('minecraft:gold_ore')
    pool.addItem('minecraft:iron_ore')
    pool.addItem('minecraft:coal_ore')
    pool.addItem('minecraft:lapis_ore')
    pool.addItem('minecraft:diamond_ore')
    pool.addItem('minecraft:redstone_ore')
    pool.addItem('minecraft:emerald_ore')
    pool.addItem('minecraft:nether_quartz_ore')
    pool.addItem('minecraft:ancient_debris')
    pool.addItem('mekanism:copper_ore')
    pool.addItem('mekanism:tin_ore')
    pool.addItem('mekanism:osmium_ore')
    pool.addItem('mekanism:uranium_ore')
    pool.addItem('mekanism:fluorite_ore')
    pool.addItem('mekanism:lead_ore')
    pool.addItem('thermal:cinnabar_ore')
    pool.addItem('thermal:niter_ore')
    pool.addItem('thermal:sulfur_ore')
    pool.addItem('thermal:silver_ore')
    pool.addItem('thermal:nickel_ore')
    pool.addItem('mysticalagriculture:soulium_ore')
    pool.addItem('mysticalagriculture:inferium_ore')
    pool.addItem('mysticalagriculture:prosperity_ore')
    pool.addItem('libvulpes:oreiridium')
    pool.addItem('libvulpes:orealuminum')
    pool.addItem('libvulpes:oredilithium')
    pool.addItem('libvulpes:orerutile')
    pool.addItem('bigreactors:yellorite_ore')
    pool.addItem('rftoolsbase:dimensionalshard_overworld')
    pool.addItem('tconstruct:cobalt_ore')
    pool.addItem('boss_tools:mercury_iron_ore')
    pool.addItem('boss_tools:moon_desh_ore')
    pool.addItem('boss_tools:moon_iron_ore')
    pool.addItem('boss_tools:moon_cheese_ore')
    pool.addItem('boss_tools:moon_glowstone_ore')
    pool.addItem('boss_tools:mars_silicon_ore')
    pool.addItem('boss_tools:mars_iron_ore')
    pool.addItem('boss_tools:mars_ice_shard_ore')
    pool.addItem('better_diving:lithium_chunk')
    pool.addItem('exnihilosequentia:chunk_zinc')
           })
         })
       })




})




//Entity Summoner

onEvent('item.right_click', event => {
if (event.item.id == 'kubejs:iron_golem') {event.server.schedule(5, event.server, function (callback) {
let command = `execute as ${event.player.name} in ${event.player.world.dimension} run summon minecraft:iron_golem ${event.player.x} ${event.player.y} ${event.player.z}`
callback.server.runCommandSilent(command);})
if (!event.player.isCreativeMode()) {event.item.setCount(event.item.getCount() - 1)}}
})

onEvent('item.right_click', event => {
if (event.item.id == 'minecraft:ender_eye')event.cancel()
})

onEvent('block.right_click', event => {
    if (event.hand == MAIN_HAND)
    if (event.item.id == 'minecraft:stick')
    if (event.block.id == 'minecraft:dirt'){
      event.server.schedule(5, event.server, function (callback) {
      callback.server.runCommandSilent(`execute as ${event.player.name} run give @p minecraft:stick`);
      })
    }
  })

//onEvent('item.right_click', event => {
//if (event.item.id == 'minecraft:bone') {event.server.schedule(5, event.server, function (callback) {
//let command = `execute as ${event.player.name} run summon minecraft:wolf ${event.player.x} ${event.player.y} ${event.player.z}`
//callback.server.runCommandSilent(command);})
//if (!event.player.isCreativeMode()) {event.item.setCount(event.item.getCount() - 1)}}
//})