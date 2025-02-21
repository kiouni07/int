events.listen('recipes', event => {

//Thermal

event.recipes.thermal.smelter('2x morered:red_alloy_ingot', ['4x #forge:dusts/redstone', '#forge:ingots/iron', '#forge:ingots/copper']).energy(10000)
event.recipes.thermal.smelter('exnihilosequentia:mesh_diamond', ['exnihilosequentia:mesh_iron', 'thermal:redstone_servo', '16x thermal:rf_coil']).energy(100000)
event.recipes.thermal.smelter('refinedstorage:silicon', ['#forge:dusts/silicon', '#forge:sand']).energy(10000)
event.recipes.thermal.smelter('kubejs:ender_ingot', ['mysticalagriculture:prosperity_ingot', 'minecraft:ender_pearl']).energy(10000)
event.recipes.thermal.smelter('exnihilosequentia:mesh_emerald', ['8x #forge:storage_blocks/osmium', '1x exnihilosequentia:mesh_diamond', '1x #forge:storage_blocks/emerald']).energy(500000)
event.recipes.thermal.smelter('extendedcrafting:black_iron_ingot', ['#forge:boules/silicon', '#forge:ingots/iron', '#forge:ingots/titanium'])
event.recipes.thermal.smelter('mysticalagradditions:creative_essence', ['extendedcrafting:the_ultimate_ingot', 'extendedcrafting:ultimate_singularity']).energy(500000)
event.recipes.thermal.press('thermal:lapis_gear', ['4x minecraft:lapis_lazuli', 'thermal:press_gear_die'])
event.recipes.thermal.press('thermal:emerald_gear', ['4x minecraft:emerald', 'thermal:press_gear_die'])
event.recipes.thermal.press('thermal:diamond_gear', ['4x minecraft:diamond', 'thermal:press_gear_die'])
event.recipes.thermal.press('thermal:quartz_gear', ['4x #forge:gems/quartz', 'thermal:press_gear_die'])
event.recipes.thermal.press('minecraft:diamond', ['32x minecraft:coal'])
event.recipes.thermal.press('minecraft:coal', ['8x tinycoal:tinycoal'])
event.recipes.thermal.press('minecraft:charcoal', ['8x tinycoal:tinycharcoal'])
event.recipes.thermal.press('bhc:canister', ['minecraft:heavy_weighted_pressure_plate'])
event.custom({"type": "thermal:press","input": [{"item": "minecraft:blaze_powder","count": 1}],"result": [{"fluid": "tconstruct:blazing_blood","amount": 20}],"energy": 400})
event.recipes.thermal.furnace('glass', '#forge:sand')
event.recipes.thermal.furnace('tconstruct:clear_glass', '#seaopolis:snad')
event.recipes.thermal.pulverizer('5x minecraft:leather', 'minecraft:saddle')
event.recipes.thermal.pulverizer('8x mysticalagriculture:soulium_dust', 'mysticalagriculture:soulium_ore')
event.recipes.thermal.pulverizer('8x mysticalagriculture:inferium_essence', 'mysticalagriculture:inferium_ore')
event.recipes.thermal.pulverizer('8x mysticalagriculture:prosperity_shard', 'mysticalagriculture:prosperity_ore')
event.recipes.thermal.pulverizer('5x minecraft:diamond', 'minecraft:diamond_horse_armor')
event.recipes.thermal.pulverizer('5x minecraft:iron_ingot', 'minecraft:iron_horse_armor')
event.recipes.thermal.pulverizer('5x minecraft:gold_ingot', 'minecraft:golden_horse_armor')
event.recipes.thermal.pulverizer('5x minecraft:leather', 'minecraft:leather_horse_armor')
event.custom({"type": "thermal:pulverizer","ingredient": {"item": "minecraft:blaze_rod"},"result": [{"item": "minecraft:blaze_powder","chance": 5.0},{"item": "thermal:sulfur","chance": 0.25}]}).id('thermal:machine/pulverizer/pulverizer_blaze_rod')
event.custom({"type": "thermal:rock_gen","adjacent": "minecraft:water","below": "minecraft:smooth_stone","result": {"item": "minecraft:smooth_stone"}})
event.custom({"type": "thermal:rock_gen","adjacent": "minecraft:water","below": "minecraft:sandstone","result": {"item": "minecraft:sand"}})
event.custom({"type": "thermal:rock_gen","adjacent": "minecraft:water","below": "minecraft:red_sandstone","result": {"item": "minecraft:red_sand"}})
event.custom({"type": "thermal:rock_gen","adjacent": "minecraft:water","below": "minecraft:gravel","result": {"item": "minecraft:gravel"}})
event.custom({"type": "thermal:rock_gen","adjacent": "minecraft:water","below": 'exnihilosequentia:dust',"result": {"item": 'exnihilosequentia:dust'}})
event.custom({"type": "thermal:rock_gen","adjacent": "minecraft:blue_ice","below": 'minecraft:soul_soil',"result": {"item": 'minecraft:netherrack'}})
event.custom({"type": "thermal:rock_gen","adjacent": "minecraft:water","below": 'quark:marble',"result": {"item": 'quark:marble'}})
event.custom({"type": "thermal:rock_gen","adjacent": "exnihilosequentia:witchwater","below": 'mysticalagriculture:soulstone',"result": {"item": 'mysticalagriculture:soulstone'}})
event.custom({"type": "thermal:refinery","ingredient": {"fluid": "thermal:latex","amount": 100},"result": [{"item": "thermal:rubber","chance": 1}],"energy": 10000})
event.custom({"type": "thermal:pyrolyzer","ingredient": {"item": "thermal:rubber"},"result": [{"item": "thermal:cured_rubber"},{"item": 'industrialforegoing:dryrubber',"chance": 0.50}],"energy": 5000,"experience": 0.00})
event.custom({"type": "thermal:bottler","ingredient": [{"item": 'exnihilosequentia:dust'},{"fluid": "minecraft:water","amount": 1000}],"result": [{"item": 'minecraft:clay'}]})
event.custom({"type": "thermal:bottler","ingredient": [{"item": 'kubejs:dust'},{"fluid": "minecraft:water","amount": 250}],"result": [{"item": 'minecraft:clay_ball'}]})
event.custom({"type": "thermal:bottler","ingredient": [{"item": 'minecraft:redstone'},{"fluid": "tconstruct:molten_obsidian","amount": 250}],"result": [{"item": 'fluxnetworks:flux_dust'}]})
event.custom({"type": "thermal:bottler","ingredient": [{"item": 'minecraft:ender_pearl'},{"fluid": "tconstruct:blazing_blood","amount": 50}],"result": [{"item": 'minecraft:ender_eye'}]})
event.custom({"type": "thermal:bottler","ingredient": [{"item": 'morered:red_alloy_ingot'},{"fluid": "tconstruct:molten_gold","amount": 288}],"result": [{"item": 'thermal:rf_coil'}]})
event.custom({"type": "thermal:bottler","ingredient": [{"tag": 'seaopolis:non_flammable_planks'},{"fluid": "tconstruct:blazing_blood","amount": 100}],"result": [{"item": 'tconstruct:blazewood'}]})
event.custom({"type": "thermal:chiller","ingredient": {"fluid": "kubejs:molten_overworld_matter","amount": 50},"result": [{"item": "kubejs:overworld_matter"}],"energy": 2000})

event.custom({"type": "thermal:chiller","ingredient": [{"fluid": "tconstruct:molten_uranium","amount": 144},{"item": "thermal:chiller_ingot_cast"}], "result": [{"item": "mekanism:ingot_uranium"}],"energy": 5000})
event.custom({"type": "thermal:chiller","ingredient": [{"fluid": "tconstruct:molten_zinc","amount": 144},{"item": "thermal:chiller_ingot_cast"}],"result": [{"item": 'exnihilosequentia:ingot_zinc'}],"energy": 5000})
event.custom({"type": "thermal:chiller","ingredient": [{"fluid": "tconstruct:molten_aluminum","amount": 144},{"item": "thermal:chiller_ingot_cast"}],"result": [{"item": 'libvulpes:ingotaluminum'}],"energy": 5000})
event.custom({"type": "thermal:chiller","ingredient": [{"fluid": "tconstruct:molten_osmium","amount": 144},{"item": "thermal:chiller_ingot_cast"}],"result": [{"item": 'mekanism:ingot_osmium'}],"energy": 5000})

event.custom({"type": "thermal:pulverizer","ingredient": {"item": 'boss_tools:moon_glowstone_ore'},"result": [{"item": "minecraft:glowstone_dust","count": 4}]})
event.custom({"type": "thermal:pulverizer","ingredient": {"item": 'boss_tools:mars_ice_shard_ore'},"result": [{"item": 'boss_tools:ice_shard',"count": 4}]})
event.custom({"type":"mekanism:enriching","input":{"ingredient":{"item":"boss_tools:moon_glowstone_ore"}},"output":{"item":"minecraft:glowstone_dust","count":4}})
event.custom({"type":"mekanism:enriching","input":{"ingredient":{"item":'boss_tools:mars_ice_shard_ore'}},"output":{"item":'boss_tools:ice_shard',"count":4}})

//Boss Tools

event.custom({"type":"boss_tools:fuelrefining","input":{"tag":"minecraft:lava","amount":2}, "output":{"name":"boss_tools:fuel","amount":2}}).id('boss_tools:fuelrefining/fuel_from_oil')

//Mekanism

event.recipes.mekanism.smelting('minecraft:glass', '#forge:sand')
event.recipes.mekanism.smelting('tconstruct:clear_glass', '#seaopolis:snad')

//Seeds

function magicseed(type){

event.custom({"type": "thermal:insolator","ingredient": {"item": 'mysticalagriculture:' + type + '_seeds'},"result": [{"item": 'mysticalagriculture:' + type + '_essence',"count": 1},{"item": 'mysticalagriculture:' + type + '_seeds',"count": 1}],"energy": 100000})}
magicseed('seabuck')
magicseed('apatite')
magicseed('dragon_egg')
magicseed('nether_star')
magicseed('cyanite')
magicseed('yellorium')
event.custom({"type": "thermal:insolator","ingredient": {"item": 'farmersdelight:rice'},"result": [{"item": 'farmersdelight:rice'},{"item": 'farmersdelight:rice',}]})
event.custom({"type": "thermal:insolator","ingredient": {"item": 'farmersdelight:onion'},"result": [{"item": 'farmersdelight:onion'},{"item": 'farmersdelight:onion',}]})

//Mek (Combiner (Blank Ore))

event.custom({"type":"mekanism:combining","mainInput":{"amount":4,"ingredient":{"item":"kubejs:dust"}},"extraInput":{"ingredient":{"tag":"forge:stone"}},"output":{"item":"kubejs:blank_ore"}})

//Industrial (Ore Miner)

event.custom({"type": "forge:conditional","recipes": [{"conditions": [{"value": {"tag": "forge:ores/tin","type": "forge:tag_empty"},"type": "forge:not"}],"recipe": {"output": {"item": 'rftoolsbase:dimensionalshard_overworld'},
"rarity": [{"whitelist": {},"blacklist": {"type": "minecraft:worldgen/biome","values": ["minecraft:the_end","minecraft:the_void","minecraft:small_end_islands","minecraft:end_barrens","minecraft:end_highlands","minecraft:end_midlands"]},"depth_min": 10,"depth_max": 50,"weight": 8},
{"whitelist": {},"blacklist": {"type": "minecraft:worldgen/biome","values": ["minecraft:the_end","minecraft:the_void","minecraft:small_end_islands","minecraft:end_barrens",
"minecraft:end_highlands","minecraft:end_midlands"]},"depth_min": 0,"depth_max": 255,
"weight": 2}],"pointer": 0,"catalyst": {"item": "industrialforegoing:laser_lens8"},"type": "industrialforegoing:laser_drill_ore"}}]})

event.custom({"type": "forge:conditional","recipes": [{"conditions": [{"value": {"tag": "forge:ores/tin","type": "forge:tag_empty"},"type": "forge:not"}],"recipe": {"output": {"item": 'libvulpes:orerutile'},
"rarity": [{"whitelist": {},"blacklist": {"type": "minecraft:worldgen/biome","values": ["minecraft:the_end","minecraft:the_void","minecraft:small_end_islands","minecraft:end_barrens","minecraft:end_highlands","minecraft:end_midlands"]},"depth_min": 10,"depth_max": 50,"weight": 8},
{"whitelist": {},"blacklist": {"type": "minecraft:worldgen/biome","values": ["minecraft:the_end","minecraft:the_void","minecraft:small_end_islands","minecraft:end_barrens",
"minecraft:end_highlands","minecraft:end_midlands"]},"depth_min": 0,"depth_max": 255,
"weight": 2}],"pointer": 0,"catalyst": {"item": "industrialforegoing:laser_lens10"},"type": "industrialforegoing:laser_drill_ore"}}]})

//Industrial

event.custom({"input": [{"tag": "forge:plastic"},{"tag": "industrialforegoing:machine_frame/pity"},{"tag": "forge:plastic"},{"item": "minecraft:nether_brick"},{"item": "minecraft:nether_brick"},{"tag": "forge:ingots/iron"},{"item": "mekanism:steel_casing"},{"tag": "forge:ingots/iron"}],"inputFluid": "{FluidName:\"thermal:latex\",Amount:250}",
"processingTime": 300,"output": {"item": "industrialforegoing:machine_frame_simple","count": 1},"type": "industrialforegoing:dissolution_chamber"}).id('industrialforegoing:dissolution_chamber/simple_machine_frame')

event.custom({"input": [{"item": "minecraft:soul_sand"},{"item": "minecraft:soul_sand"},{"item": "minecraft:soul_sand"},{"item": "minecraft:soul_sand"},{"item": "minecraft:soul_sand"},{"item": "minecraft:soul_sand"},{"item": "minecraft:soul_sand"},{"item": "minecraft:soul_sand"}],
"inputFluid": "{FluidName:\"thermal:latex\",Amount:100}","processingTime": 100,"output": {"item": "industrialforegoing:dark_glass","count": 8},"type": "industrialforegoing:dissolution_chamber"}).id('industrialforegoing:dissolution_chamber/dark_glass')

event.custom({"input": [{"item": "minecraft:redstone"},{"item": "minecraft:redstone"},{"tag": "forge:glass_panes"},{"tag": "forge:glass_panes"},{"tag": "forge:gears/gold"},{"tag": "forge:gears/gold"},{"item": "minecraft:blaze_rod"},{"item": "minecraft:blaze_rod"}],
"inputFluid": "{FluidName:\"thermal:latex\",Amount:1000}","processingTime": 200,"output": {"item": "industrialforegoing:efficiency_addon_1","count": 1,"nbt": "{TitaniumAugment:{Efficiency:0.9f}}"},"type": "industrialforegoing:dissolution_chamber"}).id('industrialforegoing:dissolution_chamber/efficiency_addon_1')

event.custom({"input": [{"item": "minecraft:redstone"},{"item": "minecraft:redstone"},{"tag": "forge:glass_panes"},{"tag": "forge:glass_panes"},{"tag": "forge:gears/diamond"},{"tag": "forge:gears/diamond"},{"item": "minecraft:blaze_rod"},{"item": "minecraft:blaze_rod"}],
"inputFluid": "{FluidName:\"thermal:latex\",Amount:1000}","processingTime": 200,"output": {"item": "industrialforegoing:efficiency_addon_2","count": 1,"nbt": "{TitaniumAugment:{Efficiency:0.8f}}"},"type": "industrialforegoing:dissolution_chamber"}).id('industrialforegoing:dissolution_chamber/efficiency_addon_2')

event.custom({"input": [{"tag": "forge:glass_panes"},{"tag": "forge:glass_panes"},{"tag": "forge:glass_panes"},{"tag": "forge:glass_panes"},{"tag": "forge:dyes/white"}],
"inputFluid": "{FluidName:\"thermal:latex\",Amount:250}","processingTime": 100,"output": {"item": "industrialforegoing:laser_lens0","count": 1},"type": "industrialforegoing:dissolution_chamber"}).id('industrialforegoing:dissolution_chamber/laser_lens0')

event.custom({"input": [{"tag": "forge:glass_panes"},{"tag": "forge:glass_panes"},{"tag": "forge:glass_panes"},{"tag": "forge:glass_panes"},{"tag": "forge:dyes/orange"}],
"inputFluid": "{FluidName:\"thermal:latex\",Amount:250}","processingTime": 100,"output": {"item": "industrialforegoing:laser_lens1","count": 1},"type": "industrialforegoing:dissolution_chamber"}).id('industrialforegoing:dissolution_chamber/laser_lens1')

event.custom({"input": [{"tag": "forge:glass_panes"},{"tag": "forge:glass_panes"},{"tag": "forge:glass_panes"},{"tag": "forge:glass_panes"},{"tag": "forge:dyes/magenta"}],
"inputFluid": "{FluidName:\"thermal:latex\",Amount:250}","processingTime": 100,"output": {"item": "industrialforegoing:laser_lens2","count": 1},"type": "industrialforegoing:dissolution_chamber"}).id('industrialforegoing:dissolution_chamber/laser_lens2')

event.custom({"input": [{"tag": "forge:glass_panes"},{"tag": "forge:glass_panes"},{"tag": "forge:glass_panes"},{"tag": "forge:glass_panes"},{"tag": "forge:dyes/light_blue"}],
"inputFluid": "{FluidName:\"thermal:latex\",Amount:250}","processingTime": 100,"output": {"item": "industrialforegoing:laser_lens3","count": 1},"type": "industrialforegoing:dissolution_chamber"}).id('industrialforegoing:dissolution_chamber/laser_lens3')

event.custom({"input": [{"tag": "forge:glass_panes"},{"tag": "forge:glass_panes"},{"tag": "forge:glass_panes"},{"tag": "forge:glass_panes"},{"tag": "forge:dyes/yellow"}],
"inputFluid": "{FluidName:\"thermal:latex\",Amount:250}","processingTime": 100,"output": {"item": "industrialforegoing:laser_lens4","count": 1},"type": "industrialforegoing:dissolution_chamber"}).id('industrialforegoing:dissolution_chamber/laser_lens4')

event.custom({"input": [{"tag": "forge:glass_panes"},{"tag": "forge:glass_panes"},{"tag": "forge:glass_panes"},{"tag": "forge:glass_panes"},{"tag": "forge:dyes/lime"}],
"inputFluid": "{FluidName:\"thermal:latex\",Amount:250}","processingTime": 100,"output": {"item": "industrialforegoing:laser_lens5","count": 1},"type": "industrialforegoing:dissolution_chamber"}).id('industrialforegoing:dissolution_chamber/laser_lens5')

event.custom({"input": [{"tag": "forge:glass_panes"},{"tag": "forge:glass_panes"},{"tag": "forge:glass_panes"},{"tag": "forge:glass_panes"},{"tag": "forge:dyes/pink"}],
"inputFluid": "{FluidName:\"thermal:latex\",Amount:250}","processingTime": 100,"output": {"item": "industrialforegoing:laser_lens6","count": 1},"type": "industrialforegoing:dissolution_chamber"}).id('industrialforegoing:dissolution_chamber/laser_lens6')

event.custom({"input": [{"tag": "forge:glass_panes"},{"tag": "forge:glass_panes"},{"tag": "forge:glass_panes"},{"tag": "forge:glass_panes"},{"tag": "forge:dyes/gray"}],
"inputFluid": "{FluidName:\"thermal:latex\",Amount:250}","processingTime": 100,"output": {"item": "industrialforegoing:laser_lens7","count": 1},"type": "industrialforegoing:dissolution_chamber"}).id('industrialforegoing:dissolution_chamber/laser_lens7')

event.custom({"input": [{"tag": "forge:glass_panes"},{"tag": "forge:glass_panes"},{"tag": "forge:glass_panes"},{"tag": "forge:glass_panes"},{"tag": "forge:dyes/light_gray"}],
"inputFluid": "{FluidName:\"thermal:latex\",Amount:250}","processingTime": 100,"output": {"item": "industrialforegoing:laser_lens8","count": 1},"type": "industrialforegoing:dissolution_chamber"}).id('industrialforegoing:dissolution_chamber/laser_lens8')

event.custom({"input": [{"tag": "forge:glass_panes"},{"tag": "forge:glass_panes"},{"tag": "forge:glass_panes"},{"tag": "forge:glass_panes"},{"tag": "forge:dyes/cyan"}],
"inputFluid": "{FluidName:\"thermal:latex\",Amount:250}","processingTime": 100,"output": {"item": "industrialforegoing:laser_lens9","count": 1},"type": "industrialforegoing:dissolution_chamber"}).id('industrialforegoing:dissolution_chamber/laser_lens9')

event.custom({"input": [{"tag": "forge:glass_panes"},{"tag": "forge:glass_panes"},{"tag": "forge:glass_panes"},{"tag": "forge:glass_panes"},{"tag": "forge:dyes/purple"}],
"inputFluid": "{FluidName:\"thermal:latex\",Amount:250}","processingTime": 100,"output": {"item": "industrialforegoing:laser_lens10","count": 1},"type": "industrialforegoing:dissolution_chamber"}).id('industrialforegoing:dissolution_chamber/laser_lens10')

event.custom({"input": [{"tag": "forge:glass_panes"},{"tag": "forge:glass_panes"},{"tag": "forge:glass_panes"},{"tag": "forge:glass_panes"},{"tag": "forge:dyes/blue"}],
"inputFluid": "{FluidName:\"thermal:latex\",Amount:250}","processingTime": 100,"output": {"item": "industrialforegoing:laser_lens11","count": 1},"type": "industrialforegoing:dissolution_chamber"}).id('industrialforegoing:dissolution_chamber/laser_lens11')

event.custom({"input": [{"tag": "forge:glass_panes"},{"tag": "forge:glass_panes"},{"tag": "forge:glass_panes"},{"tag": "forge:glass_panes"},{"tag": "forge:dyes/brown"}],
"inputFluid": "{FluidName:\"thermal:latex\",Amount:250}","processingTime": 100,"output": {"item": "industrialforegoing:laser_lens12","count": 1},"type": "industrialforegoing:dissolution_chamber"}).id('industrialforegoing:dissolution_chamber/laser_lens12')

event.custom({"input": [{"tag": "forge:glass_panes"},{"tag": "forge:glass_panes"},{"tag": "forge:glass_panes"},{"tag": "forge:glass_panes"},{"tag": "forge:dyes/green"}],
"inputFluid": "{FluidName:\"thermal:latex\",Amount:250}","processingTime": 100,"output": {"item": "industrialforegoing:laser_lens13","count": 1},"type": "industrialforegoing:dissolution_chamber"}).id('industrialforegoing:dissolution_chamber/laser_lens13')

event.custom({"input": [{"tag": "forge:glass_panes"},{"tag": "forge:glass_panes"},{"tag": "forge:glass_panes"},{"tag": "forge:glass_panes"},{"tag": "forge:dyes/red"}],
"inputFluid": "{FluidName:\"thermal:latex\",Amount:250}","processingTime": 100,"output": {"item": "industrialforegoing:laser_lens14","count": 1},"type": "industrialforegoing:dissolution_chamber"}).id('industrialforegoing:dissolution_chamber/laser_lens14')

event.custom({"input": [{"tag": "forge:glass_panes"},{"tag": "forge:glass_panes"},{"tag": "forge:glass_panes"},{"tag": "forge:glass_panes"},{"tag": "forge:dyes/black"}],
"inputFluid": "{FluidName:\"thermal:latex\",Amount:250}","processingTime": 100,"output": {"item": "industrialforegoing:laser_lens15","count": 1},"type": "industrialforegoing:dissolution_chamber"}).id('industrialforegoing:dissolution_chamber/laser_lens15')

event.custom({"input": [{"item": "minecraft:redstone"},{"item": "minecraft:redstone"},{"tag": "forge:glass_panes"},{"tag": "forge:glass_panes"},{"item": "minecraft:cobblestone"},{"item": "minecraft:cobblestone"},{"item": "minecraft:cobblestone"},{"item": "minecraft:cobblestone"}],
"inputFluid": "{FluidName:\"thermal:latex\",Amount:1000}","processingTime": 200,"output": {"item": "industrialforegoing:range_addon0","count": 1,"nbt": "{TitaniumAugment:{Range:0.0f}}"},"type": "industrialforegoing:dissolution_chamber"}).id('industrialforegoing:dissolution_chamber/range_addon0')

event.custom({"input": [{"item": "minecraft:redstone"},{"item": "minecraft:redstone"},{"tag": "forge:glass_panes"},{"tag": "forge:glass_panes"},{"item": "minecraft:lapis_lazuli"},{"item": "minecraft:lapis_lazuli"},{"item": "minecraft:lapis_lazuli"},{"item": "minecraft:lapis_lazuli"}],
"inputFluid": "{FluidName:\"thermal:latex\",Amount:1000}","processingTime": 200,"output": {"item": "industrialforegoing:range_addon1","count": 1,"nbt": "{TitaniumAugment:{Range:1.0f}}"},"type": "industrialforegoing:dissolution_chamber"}).id('industrialforegoing:dissolution_chamber/range_addon1')

event.custom({"input": [{"item": "minecraft:redstone"},{"item": "minecraft:redstone"},{"tag": "forge:glass_panes"},{"tag": "forge:glass_panes"},{"item": "minecraft:bone_meal"},{"item": "minecraft:bone_meal"},{"item": "minecraft:bone_meal"},{"item": "minecraft:bone_meal"}],
"inputFluid": "{FluidName:\"thermal:latex\",Amount:1000}","processingTime": 200,"output": {"item": "industrialforegoing:range_addon2","count": 1,"nbt": "{TitaniumAugment:{Range:2.0f}}"},"type": "industrialforegoing:dissolution_chamber"}).id('industrialforegoing:dissolution_chamber/range_addon2')

event.custom({"input": [{"item": "minecraft:redstone"},{"item": "minecraft:redstone"},{"tag": "forge:glass_panes"},{"tag": "forge:glass_panes"},{"item": "minecraft:iron_nugget"},{"item": "minecraft:iron_nugget"},{"item": "minecraft:iron_nugget"},{"item": "minecraft:iron_nugget"}],
"inputFluid": "{FluidName:\"thermal:latex\",Amount:1000}","processingTime": 200,"output": {"item": "industrialforegoing:range_addon3","count": 1,"nbt": "{TitaniumAugment:{Range:3.0f}}"},"type": "industrialforegoing:dissolution_chamber"}).id('industrialforegoing:dissolution_chamber/range_addon3')

event.custom({"input": [{"item": "minecraft:redstone"},{"item": "minecraft:redstone"},{"tag": "forge:glass_panes"},{"tag": "forge:glass_panes"},{"item": "minecraft:blaze_powder"},{"item": "minecraft:blaze_powder"},{"item": "minecraft:blaze_powder"},{"item": "minecraft:blaze_powder"}],
"inputFluid": "{FluidName:\"thermal:latex\",Amount:1000}","processingTime": 200,"output": {"item": "industrialforegoing:range_addon4","count": 1,"nbt": "{TitaniumAugment:{Range:4.0f}}"},"type": "industrialforegoing:dissolution_chamber"}).id('industrialforegoing:dissolution_chamber/range_addon4')

event.custom({"input": [{"item": "minecraft:redstone"},{"item": "minecraft:redstone"},{"tag": "forge:glass_panes"},{"tag": "forge:glass_panes"},{"item": "minecraft:gold_nugget"},{"item": "minecraft:gold_nugget"},{"item": "minecraft:gold_nugget"},{"item": "minecraft:gold_nugget"}],
"inputFluid": "{FluidName:\"thermal:latex\",Amount:1000}","processingTime": 200,"output": {"item": "industrialforegoing:range_addon5","count": 1,"nbt": "{TitaniumAugment:{Range:5.0f}}"},"type": "industrialforegoing:dissolution_chamber"}).id('industrialforegoing:dissolution_chamber/range_addon5')

event.custom({"input": [{"item": "minecraft:redstone"},{"item": "minecraft:redstone"},{"tag": "forge:glass_panes"},{"tag": "forge:glass_panes"},{"item": "minecraft:iron_ingot"},{"item": "minecraft:iron_ingot"},{"item": "minecraft:iron_ingot"},{"item": "minecraft:iron_ingot"}],
"inputFluid": "{FluidName:\"thermal:latex\",Amount:1000}","processingTime": 200,"output": {"item": "industrialforegoing:range_addon6","count": 1,"nbt": "{TitaniumAugment:{Range:6.0f}}"},"type": "industrialforegoing:dissolution_chamber"}).id('industrialforegoing:dissolution_chamber/range_addon6')

event.custom({"input": [{"item": "minecraft:redstone"},{"item": "minecraft:redstone"},{"tag": "forge:glass_panes"},{"tag": "forge:glass_panes"},{"item": "minecraft:gold_ingot"},{"item": "minecraft:gold_ingot"},{"item": "minecraft:gold_ingot"},{"item": "minecraft:gold_ingot"}],
"inputFluid": "{FluidName:\"thermal:latex\",Amount:1000}","processingTime": 200,"output": {"item": "industrialforegoing:range_addon7","count": 1,"nbt": "{TitaniumAugment:{Range:7.0f}}"},"type": "industrialforegoing:dissolution_chamber"}).id('industrialforegoing:dissolution_chamber/range_addon7')

event.custom({"input": [{"item": "minecraft:redstone"},{"item": "minecraft:redstone"},{"tag": "forge:glass_panes"},{"tag": "forge:glass_panes"},{"item": "minecraft:quartz"},{"item": "minecraft:quartz"},{"item": "minecraft:quartz"},{"item": "minecraft:quartz"}],
"inputFluid": "{FluidName:\"thermal:latex\",Amount:1000}","processingTime": 200,"output": {"item": "industrialforegoing:range_addon8","count": 1,"nbt": "{TitaniumAugment:{Range:8.0f}}"},"type": "industrialforegoing:dissolution_chamber"}).id('industrialforegoing:dissolution_chamber/range_addon8')

event.custom({"input": [{"item": "minecraft:redstone"},{"item": "minecraft:redstone"},{"tag": "forge:glass_panes"},{"tag": "forge:glass_panes"},{"item": "minecraft:diamond"},{"item": "minecraft:diamond"},{"item": "minecraft:diamond"},{"item": "minecraft:diamond"}],
"inputFluid": "{FluidName:\"thermal:latex\",Amount:1000}","processingTime": 200,"output": {"item": "industrialforegoing:range_addon9","count": 1,"nbt": "{TitaniumAugment:{Range:9.0f}}"},"type": "industrialforegoing:dissolution_chamber"}).id('industrialforegoing:dissolution_chamber/range_addon9')

event.custom({"input": [{"item": "minecraft:redstone"},{"item": "minecraft:redstone"},{"tag": "forge:glass_panes"},{"tag": "forge:glass_panes"},{"item": 'minecraft:popped_chorus_fruit'},{"item": "minecraft:popped_chorus_fruit"},{"item": "minecraft:popped_chorus_fruit"},{"item": "minecraft:popped_chorus_fruit"}],
"inputFluid": "{FluidName:\"thermal:latex\",Amount:1000}","processingTime": 200,"output": {"item": "industrialforegoing:range_addon10","count": 1,"nbt": "{TitaniumAugment:{Range:10.0f}}"},"type": "industrialforegoing:dissolution_chamber"}).id('industrialforegoing:dissolution_chamber/range_addon10')


event.custom({"input": [{"item": "minecraft:redstone"},{"item": "minecraft:redstone"},{"tag": "forge:glass_panes"},{"tag": "forge:glass_panes"},{"item": 'minecraft:emerald'},{"item": "minecraft:emerald"},{"item": "minecraft:emerald"},{"item": "minecraft:emerald"}],
"inputFluid": "{FluidName:\"thermal:latex\",Amount:1000}","processingTime": 200,"output": {"item": "industrialforegoing:range_addon11","count": 1,"nbt": "{TitaniumAugment:{Range:11.0f}}"},"type": "industrialforegoing:dissolution_chamber"}).id('industrialforegoing:dissolution_chamber/range_addon11')

event.custom({"input": [{"item": "minecraft:redstone"},{"item": "minecraft:redstone"},{"tag": "forge:glass_panes"},{"tag": "forge:glass_panes"},{"tag": "forge:gears/gold"},{"tag": "forge:gears/gold"},{"item": "minecraft:sugar"},{"item": "minecraft:sugar"}],
"inputFluid": "{FluidName:\"thermal:latex\",Amount:1000}","processingTime": 200,"output": {"item": "industrialforegoing:speed_addon_1","count": 1,"nbt": "{TitaniumAugment:{Speed:2.0f}}"},"type": "industrialforegoing:dissolution_chamber"}).id('industrialforegoing:dissolution_chamber/speed_addon_1')

event.custom({"input": [{"item": "minecraft:redstone"},{"item": "minecraft:redstone"},{"tag": "forge:glass_panes"},{"tag": "forge:glass_panes"},{"tag": "forge:gears/diamond"},{"tag": "forge:gears/diamond"},{"item": "minecraft:sugar"},{"item": "minecraft:sugar"}],
"inputFluid": "{FluidName:\"thermal:latex\",Amount:1000}","processingTime": 200,"output": {"item": "industrialforegoing:speed_addon_2","count": 1,"nbt": "{TitaniumAugment:{Speed:3.0f}}"},"type": "industrialforegoing:dissolution_chamber"}).id('industrialforegoing:dissolution_chamber/speed_addon_2')

event.custom({"input": [{"item": "minecraft:redstone"},{"item": "minecraft:redstone"},{"tag": "forge:glass_panes"},{"tag": "forge:glass_panes"},{"tag": "forge:gears/diamond"},{"tag": "forge:gears/diamond"},{"item": "minecraft:furnace"},{"item": "minecraft:crafting_table"}],
"inputFluid": "{FluidName:\"thermal:latex\",Amount:1000}","processingTime": 200,"output": {"item": "industrialforegoing:processing_addon_2","count": 1,"nbt": "{TitaniumAugment:{Processing:3.0f}}"},"type": "industrialforegoing:dissolution_chamber"}).id('industrialforegoing:dissolution_chamber/processing_addon_2')

event.custom({"input": [{"item": "minecraft:redstone"},{"item": "minecraft:redstone"},{"item": "minecraft:glass_pane"},{"item": "minecraft:glass_pane"},{"tag": "forge:gears/gold"},{"tag": "forge:gears/gold"},{"item": "minecraft:furnace"},{"item": "minecraft:crafting_table"}],
"inputFluid": "{FluidName:\"thermal:latex\",Amount:1000}","processingTime": 200, "output": {"item": "industrialforegoing:processing_addon_1","count": 1,"nbt": "{TitaniumAugment:{Processing:2.0f}}"},"type": "industrialforegoing:dissolution_chamber"}).id('industrialforegoing:dissolution_chamber/processing_addon_1')

})