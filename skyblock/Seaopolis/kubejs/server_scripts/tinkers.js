events.listen('recipes', event => {

//Organic Water

event.custom({"type": "tconstruct:melting","ingredient": {"tag": "forge:seeds"},"result": {"fluid": "kubejs:organic_fluid","amount": 20},"temperature": 200,"time": 10})
event.custom({"type": "tconstruct:melting","ingredient": {"item": "minecraft:melon_slice"},"result": {"fluid": "kubejs:organic_fluid","amount": 50},"temperature": 200,"time": 10})
event.custom({"type": "tconstruct:melting","ingredient": {"item": "minecraft:pumpkin"},"result": {"fluid": "kubejs:organic_fluid","amount": 200},"temperature": 200,"time": 10})
event.custom({"type": "tconstruct:melting","ingredient": {"tag": "minecraft:leaves"},"result": {"fluid": "kubejs:organic_fluid","amount": 20},"temperature": 200,"time": 10})
event.custom({"type": "tconstruct:melting","ingredient": {"tag": "minecraft:saplings"},"result": {"fluid": "kubejs:organic_fluid","amount": 20},"temperature": 200,"time": 10})
event.custom({"type": "tconstruct:melting","ingredient": {"tag": "forge:crops"},"result": {"fluid": "kubejs:organic_fluid","amount": 20},"temperature": 200,"time": 10})
event.custom({"type": "tconstruct:melting","ingredient": {"tag": "seaopolis:organic_material"},"result": {"fluid": "kubejs:organic_fluid","amount": 40},"temperature": 200,"time": 10})

//Molten Overworld Matter

event.custom({"type": "tconstruct:alloy","inputs": [{"name": "kubejs:organic_fluid","amount": 500},{"name": "tconstruct:molten_tin","amount": 144},{"name": "tconstruct:molten_clay","amount": 250}],
"result": {"fluid": "kubejs:molten_overworld_matter","amount": 1000},"temperature": 800})
event.custom({"type": "tconstruct:melting","ingredient": {"item": "kubejs:overworld_matter"},"result": {"fluid": "kubejs:molten_overworld_matter","amount": 50},"temperature": 250,"time": 50})

event.custom({"type": "tconstruct:melting","ingredient": {"item": "kubejs:ender_ingot"},"result": {"fluid": "tconstruct:molten_ender","amount": 144},"temperature": 1400,"time": 300})

//Molten To Blocks

event.custom({"type": "tconstruct:casting_basin","fluid": {"name": "kubejs:molten_overworld_matter","amount": 50},"result": "kubejs:overworld_matter","cooling_time": 80})
event.custom({"type": "tconstruct:casting_basin","cast": {"item": "minecraft:carved_pumpkin" },"cast_consumed": true,"fluid": {"name": "tconstruct:molten_iron","amount": 5184},"result": "kubejs:iron_golem","cooling_time": 600})
event.custom({"type": "tconstruct:casting_basin","cast": {"item": "minecraft:diorite" },"cast_consumed": true,"fluid": {"name": "minecraft:milk","amount": 100},"result": "quark:marble","cooling_time": 100})
event.custom({"type": "tconstruct:casting_basin","cast": {"item": "minecraft:stone" },"cast_consumed": true,"fluid": {"name": "minecraft:lava","amount": 100},"result": "quark:brimstone","cooling_time": 100})
event.custom({"type": "tconstruct:casting_basin","cast": {"item": "minecraft:stone" },"cast_consumed": true,"fluid": {"name": "minecraft:water","amount": 100},"result": "quark:slate","cooling_time": 100})
event.custom({"type": "tconstruct:casting_basin","cast": {"item": "minecraft:granite" },"cast_consumed": true,"fluid": {"name": "minecraft:water","amount": 100},"result": "quark:jasper","cooling_time": 100})
event.custom({"type": "tconstruct:casting_basin","cast": {"item": "minecraft:smooth_stone" },"cast_consumed": true,"fluid": {"name": "minecraft:lava","amount": 100},"result": "quark:basalt","cooling_time": 100})
event.custom({"type": "tconstruct:casting_basin","cast": {"item": "minecraft:andesite" },"cast_consumed": true,"fluid": {"name": "minecraft:water","amount": 100},"result": "quark:limestone","cooling_time": 100})
event.custom({"type": "tconstruct:casting_basin","cast": {"item": 'kubejs:map' },"cast_consumed": true,"fluid": {"name": "tconstruct:molten_ender","amount": 1296},"result": 'kubejs:map2',"cooling_time": 200})

//Molten To Items

event.custom({"type": "tconstruct:casting_table","cast": {"item": "morered:red_alloy_ingot" },"cast_consumed": true,"fluid": {"name": "tconstruct:molten_gold","amount": 288},"result": 'thermal:rf_coil',"cooling_time": 100})
event.custom({"type": "tconstruct:casting_basin","cast": {"item": "exnihilosequentia:mesh_flint" },"cast_consumed": true,"fluid": {"name": "tconstruct:molten_iron","amount": 1296},"result": 'exnihilosequentia:mesh_iron',"cooling_time": 100})
event.custom({"type": "tconstruct:casting_basin","cast": {"item": "exnihilosequentia:mesh_emerald" },"cast_consumed": true,"fluid": {"name": "tconstruct:molten_netherite","amount": 2592},"result": 'exnihilosequentia:mesh_netherite',"cooling_time": 1000})
event.custom({"type": "tconstruct:casting_table","cast": {"item": "minecraft:redstone" },"cast_consumed": true,"fluid": {"name": "tconstruct:molten_obsidian","amount": 250},"result": 'fluxnetworks:flux_dust',"cooling_time": 100})
event.custom({"type": "tconstruct:casting_table","cast": {"item": "minecraft:ender_pearl" },"cast_consumed": true,"fluid": {"name": "tconstruct:blazing_blood","amount": 50},"result": 'minecraft:ender_eye',"cooling_time": 100})
event.custom({"type": "tconstruct:casting_table","cast": {"item": "minecraft:bone" },"cast_consumed": true,"fluid": {"name": "tconstruct:molten_obsidian","amount": 500},"result": 'tconstruct:necrotic_bone',"cooling_time": 100})
event.custom({"type": "tconstruct:casting_table","cast": {"item": 'tconstruct:ingot_cast' },"cast_consumed": false,"fluid": {"name": "tconstruct:molten_ender","amount": 144},"result": 'kubejs:ender_ingot',"cooling_time": 100})

//Crude Oil

event.custom({"type": "tconstruct:melting","ingredient": {"item": "minecraft:coal"},"result": {"fluid": "thermal:crude_oil","amount": 80},"temperature": 200,"time": 350})
event.custom({"type": "tconstruct:melting","ingredient": {"item": "tinycoal:tinycoal"},"result": {"fluid": "thermal:crude_oil","amount": 10},"temperature": 200,"time": 350})

//event.custom({"type": "tconstruct:casting_basin","conditions": [{"value": {"tag": "forge:storage_blocks/aluminum","type": "forge:tag_empty" },"type": "forge:not"}],"fluid": {"name": "tconstruct:molten_aluminum","amount": 1296},"result": {"tag": "forge:storage_blocks/aluminum"},"cooling_time": 141})


//Blast Furnace Fix

event.custom({"type": "tconstruct:melting","ingredient": [{"item": "minecraft:hopper"},{"item": "minecraft:minecart"}],"result": {"fluid": "tconstruct:molten_iron","amount": 720},"temperature": 800,"time": 134}).id('tconstruct:smeltery/melting/metal/iron/ingot_5')



})