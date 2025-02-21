events.listen('recipes', event => {

//Crook

event.custom({"type": "exnihilosequentia:crook","results": [{"chance": 0.1,"item": "exnihilosequentia:silkworm","count": 1},{"chance": 0.1,"item": "minecraft:apple","count": 1}],"input": {"tag": "minecraft:leaves"}})

//Compost (dirt)

event.custom({"type": "exnihilosequentia:compost","input": {"item": "minecraft:apple"},"amount": 125})
event.custom({"type": "exnihilosequentia:compost","input": {"tag": "minecraft:leaves"},"amount": 250})
event.custom({"type": "exnihilosequentia:compost","input": {"tag": "minecraft:fishes"},"amount": 200})
event.custom({"type": "exnihilosequentia:compost","input": {"item": 'exnihilosequentia:silkworm'},"amount": 50})
event.custom({"type": "exnihilosequentia:compost","input": {"tag": 'forge:sawdust'},"amount": 50})
event.custom({"type": "exnihilosequentia:compost","input": {"tag": 'minecraft:saplings'},"amount": 100})

//Hammer 

event.custom({"type": "exnihilosequentia:hammer","input": {"item": "minecraft:granite"},"results": [{"chance": 1.0,"item": "exnihilosequentia:crushed_granite", "count": 1}]})
event.custom({"type": "exnihilosequentia:hammer","input": {"item": "minecraft:andesite"},"results": [{"chance": 1.0,"item": "exnihilosequentia:crushed_andesite", "count": 1}]})
event.custom({"type": "exnihilosequentia:hammer","input": {"item": "minecraft:diorite"},"results": [{"chance": 1.0,"item": "exnihilosequentia:crushed_diorite", "count": 1}]})
event.custom({"type": "exnihilosequentia:hammer","input": {"item": "minecraft:smooth_stone"},"results": [{"chance": 1.0,"item": "minecraft:gravel", "count": 1}]})
event.custom({"type": "exnihilosequentia:hammer","input": {"item": "minecraft:prismarine"},"results": [{"chance": 0.33,"item": 'minecraft:prismarine_crystals', "count": 1},{"chance": 1,"item": "minecraft:prismarine_shard", "count": 1}]})
event.custom({"type": "exnihilosequentia:hammer","input": {"item": "minecraft:netherrack"},"results": [{"chance": 1,"item": 'exnihilosequentia:crushed_netherrack', "count": 1}]})
event.custom({"type": "exnihilosequentia:hammer","input": {"tag": "minecraft:logs"},"results": [{"chance": 1,"item": 'excompressum:wood_chippings', "count": 2}]})

//Hammer (Compressed)

event.custom({"type": "excompressum:compressed_hammer","input": {"item":"excompressum:compressed_andesite"},"lootTable": {"type": "minecraft:block",
"pools": [{"rolls": 1,"entries": [{"type": "minecraft:item","name": "exnihilosequentia:crushed_andesite","functions": [{"function": "minecraft:set_count","count": 9}]}]}]}})
event.custom({"type": "excompressum:compressed_hammer","input": {"item":"excompressum:compressed_diorite"},"lootTable": {"type": "minecraft:block",
"pools": [{"rolls": 1,"entries": [{"type": "minecraft:item","name": "exnihilosequentia:crushed_diorite","functions": [{"function": "minecraft:set_count","count": 9}]}]}]}})
event.custom({"type": "excompressum:compressed_hammer","input": {"item":"excompressum:compressed_granite"},"lootTable": {"type": "minecraft:block",
"pools": [{"rolls": 1,"entries": [{"type": "minecraft:item","name": "exnihilosequentia:crushed_granite","functions": [{"function": "minecraft:set_count","count": 9}]}]}]}})
event.custom({"type": "excompressum:compressed_hammer","input": {"item":"kubejs:compressed_overworld_matter"},"lootTable": {"type": "minecraft:block",
"pools": [{"rolls": 1,"entries": [{"type": "minecraft:item","name": "kubejs:overworld_matter","functions": [{"function": "minecraft:set_count","count": 9}]}]}]}})
event.custom({"type": "excompressum:compressed_hammer","input": {"item":"kubejs:compressed_smooth_stone"},"lootTable": {"type": "minecraft:block",
"pools": [{"rolls": 1,"entries": [{"type": "minecraft:item","name": "minecraft:gravel","functions": [{"function": "minecraft:set_count","count": 9}]}]}]}})
event.custom({"type": "excompressum:compressed_hammer","input": {"item":'excompressum:compressed_netherrack'},"lootTable": {"type": "minecraft:block",
"pools": [{"rolls": 1,"entries": [{"type": "minecraft:item","name": "exnihilosequentia:crushed_netherrack","functions": [{"function": "minecraft:set_count","count": 9}]}]}]}})
event.custom({"type": "excompressum:compressed_hammer","input": {"tag":'minecraft:logs'},"lootTable": {"type": "minecraft:block",
"pools": [{"rolls": 1,"entries": [{"type": "minecraft:item","name": "excompressum:wood_chippings","functions": [{"function": "minecraft:set_count","count": 4}]}]}]}})
event.custom({"type": "excompressum:compressed_hammer","input": {"item":"kubejs:compressed_prismarine"},"lootTable": {"type": "minecraft:block",
"pools": [{"rolls": 1,"entries": [{"type": "minecraft:item","name": "minecraft:prismarine_shard","functions": [{"function": "minecraft:set_count","count": 9},]}]}, {"rolls": 1,"entries": [{"type": "minecraft:item","name": "minecraft:prismarine_crystals","functions": [{"function": "minecraft:set_count","count": 2},]}]}]}})

//Sieve (Waterlogged Overworld Matter)

event.custom({"type": "exnihilosequentia:sieve","rolls": [{"chance": 0.1,"mesh": "string"}],"input": {"item": "kubejs:overworld_matter"},"result": {"item": 'exnihilosequentia:seed_blue_coral'},"waterlogged": true})
event.custom({"type": "exnihilosequentia:sieve","rolls": [{"chance": 0.1,"mesh": "string"}],"input": {"item": "kubejs:overworld_matter"},"result": {"item": 'exnihilosequentia:seed_pink_coral'},"waterlogged": true})
event.custom({"type": "exnihilosequentia:sieve","rolls": [{"chance": 0.1,"mesh": "string"}],"input": {"item": "kubejs:overworld_matter"},"result": {"item": 'exnihilosequentia:seed_purple_coral'},"waterlogged": true})
event.custom({"type": "exnihilosequentia:sieve","rolls": [{"chance": 0.1,"mesh": "string"}],"input": {"item": "kubejs:overworld_matter"},"result": {"item": 'exnihilosequentia:seed_red_coral'},"waterlogged": true})
event.custom({"type": "exnihilosequentia:sieve","rolls": [{"chance": 0.1,"mesh": "string"}],"input": {"item": "kubejs:overworld_matter"},"result": {"item": 'exnihilosequentia:seed_yellow_coral'},"waterlogged": true})

//Sieve (Saplings)

event.custom({"type": "exnihilosequentia:sieve","rolls": [{"chance": 0.1,"mesh": "string"}],"input": {"tag": "minecraft:leaves"},"result": {"item": ('exnihilosequentia:seed_oak') }})
event.custom({"type": "exnihilosequentia:sieve","rolls": [{"chance": 0.1,"mesh": "string"}],"input": {"tag": "minecraft:leaves"},"result": {"item": ('exnihilosequentia:seed_birch') }})
event.custom({"type": "exnihilosequentia:sieve","rolls": [{"chance": 0.1,"mesh": "string"}],"input": {"tag": "minecraft:leaves"},"result": {"item": ('exnihilosequentia:seed_spruce') }})
event.custom({"type": "exnihilosequentia:sieve","rolls": [{"chance": 0.1,"mesh": "string"}],"input": {"tag": "minecraft:leaves"},"result": {"item": ('exnihilosequentia:seed_jungle') }})
event.custom({"type": "exnihilosequentia:sieve","rolls": [{"chance": 0.1,"mesh": "string"}],"input": {"tag": "minecraft:leaves"},"result": {"item": ('exnihilosequentia:seed_darkoak') }})
event.custom({"type": "exnihilosequentia:sieve","rolls": [{"chance": 0.1,"mesh": "string"}],"input": {"tag": "minecraft:leaves"},"result": {"item": ('exnihilosequentia:seed_acacia') }})

//Sieve (Dirt)

event.custom({"type": "exnihilosequentia:sieve","rolls": [{"chance": 1,"mesh": "string"},{"chance": 1,"mesh": "string"},{"chance": 0.5,"mesh": "string"}],"input": {"item": "minecraft:dirt"},"result": {"item": ("exnihilosequentia:pebble_stone") }})
event.custom({"type": "exnihilosequentia:sieve","rolls": [{"chance": 0.7,"mesh": "string"}],"input": {"item": "minecraft:dirt"},"result": {"item": ('exnihilosequentia:pebble_granite') }})
event.custom({"type": "exnihilosequentia:sieve","rolls": [{"chance": 0.7,"mesh": "string"}],"input": {"item": "minecraft:dirt"},"result": {"item": ('exnihilosequentia:pebble_diorite') }})
event.custom({"type": "exnihilosequentia:sieve","rolls": [{"chance": 0.7,"mesh": "string"}],"input": {"item": "minecraft:dirt"},"result": {"item": ('exnihilosequentia:pebble_andesite') }})
event.custom({"type": "exnihilosequentia:sieve","rolls": [{"chance": 0.3,"mesh": "string"}],"input": {"item": "minecraft:dirt"},"result": {"item": ('exnihilosequentia:pebble_basalt') }})

//Sieve (Gravel)

event.custom({"type": "exnihilosequentia:sieve","rolls": [{"chance": 0.2,"mesh": "string"}],"input": {"item": "minecraft:gravel"},"result": {"item": ('thermal:apatite') }})
event.custom({"type": "exnihilosequentia:sieve","rolls": [{"chance": 0.1,"mesh": "string"}],"input": {"item": "minecraft:gravel"},"result": {"item": ('mekanism:dust_sulfur') }})
event.custom({"type": "exnihilosequentia:sieve","rolls": [{"chance": 1,"mesh": "string"},{"chance": 0.7,"mesh": "string"}],"input": {"item": "minecraft:gravel"},"result": {"item": ('minecraft:flint') }})
event.custom({"type": "exnihilosequentia:sieve","rolls": [{"chance": 1.0,"mesh": "string"},{"chance": 0.7,"mesh": "string"}],"input": {"item": "minecraft:gravel"},"result": {"item": ('tinycoal:tinycoal') }})
event.custom({"type": "exnihilosequentia:sieve","rolls": [{"chance": 1,"mesh": "string"},{"chance": 1,"mesh": "string"},{"chance": 0.5,"mesh": "string"}],"input": {"item": "minecraft:gravel"},"result": {"item": ('kubejs:dust') }})

//Sieve (Red/Sand)

event.custom({"type": "exnihilosequentia:sieve","rolls": [{"chance": 0.2,"mesh": "flint"}],"input": {"item": "minecraft:sand"},"result": {"item": ('exnihilosequentia:piece_nickel') }})
event.custom({"type": "exnihilosequentia:sieve","rolls": [{"chance": 0.3,"mesh": "flint"}],"input": {"item": "minecraft:sand"},"result": {"item": ('exnihilosequentia:piece_tin') }})
event.custom({"type": "exnihilosequentia:sieve","rolls": [{"chance": 0.3,"mesh": "flint"}],"input": {"item": "minecraft:sand"},"result": {"item": ('thermal:niter_dust') }})
event.custom({"type": "exnihilosequentia:sieve","rolls": [{"chance": 0.2,"mesh": "flint"}],"input": {"item": "minecraft:red_sand"},"result": {"item": ('exnihilosequentia:piece_nickel') }})
event.custom({"type": "exnihilosequentia:sieve","rolls": [{"chance": 0.3,"mesh": "flint"}],"input": {"item": "minecraft:red_sand"},"result": {"item": ('exnihilosequentia:piece_copper') }})
event.custom({"type": "exnihilosequentia:sieve","rolls": [{"chance": 0.1,"mesh": "flint"}],"input": {"item": "minecraft:red_sand"},"result": {"item": ('thermal:cinnabar_dust') }})

//Sieve (Grass)

event.custom({"type": "exnihilosequentia:sieve","rolls": [{"chance": 0.1,"mesh": "string"}],"input": {"item": "minecraft:grass_block"},"result": {"item": ('exnihilosequentia:seed_fern') }})
event.custom({"type": "exnihilosequentia:sieve","rolls": [{"chance": 0.1,"mesh": "string"}],"input": {"item": "minecraft:grass_block"},"result": {"item": ('minecraft:melon_seeds') }})
event.custom({"type": "exnihilosequentia:sieve","rolls": [{"chance": 0.1,"mesh": "string"}],"input": {"item": "minecraft:grass_block"},"result": {"item": ('minecraft:pumpkin_seeds') }})
event.custom({"type": "exnihilosequentia:sieve","rolls": [{"chance": 0.1,"mesh": "string"}],"input": {"item": "minecraft:grass_block"},"result": {"item": ('minecraft:wheat_seeds') }})
event.custom({"type": "exnihilosequentia:sieve","rolls": [{"chance": 0.1,"mesh": "string"}],"input": {"item": "minecraft:grass_block"},"result": {"item": ('minecraft:beetroot_seeds') }})
event.custom({"type": "exnihilosequentia:sieve","rolls": [{"chance": 0.5,"mesh": "string"}],"input": {"item": "minecraft:grass_block"},"result": {"item": ('exnihilosequentia:pebble_stone') }})
event.custom({"type": "exnihilosequentia:sieve","rolls": [{"chance": 0.5,"mesh": "string"}],"input": {"item": "minecraft:grass_block"},"result": {"item": ('exnihilosequentia:pebble_granite') }})
event.custom({"type": "exnihilosequentia:sieve","rolls": [{"chance": 0.5,"mesh": "string"}],"input": {"item": "minecraft:grass_block"},"result": {"item": ('exnihilosequentia:pebble_diorite') }})
event.custom({"type": "exnihilosequentia:sieve","rolls": [{"chance": 0.5,"mesh": "string"}],"input": {"item": "minecraft:grass_block"},"result": {"item": ('exnihilosequentia:pebble_andesite') }})
event.custom({"type": "exnihilosequentia:sieve","rolls": [{"chance": 0.1,"mesh": "string"}],"input": {"item": "minecraft:grass_block"},"result": {"item": ('farmersdelight:cabbage_seeds') }})
event.custom({"type": "exnihilosequentia:sieve","rolls": [{"chance": 0.1,"mesh": "string"}],"input": {"item": "minecraft:grass_block"},"result": {"item": ('farmersdelight:tomato_seeds') }})

//Sieve (Overworld Matter)

event.custom({"type": "exnihilosequentia:sieve","rolls": [{"chance": 0.4,"mesh": "flint"}],"input": {"item": "kubejs:overworld_matter"},"result": {"item": ('exnihilosequentia:piece_iron') }})
event.custom({"type": "exnihilosequentia:sieve","rolls": [{"chance": 0.5,"mesh": "flint"}],"input": {"item": "kubejs:overworld_matter"},"result": {"item": ('exnihilosequentia:piece_lead') }})
event.custom({"type": "exnihilosequentia:sieve","rolls": [{"chance": 0.4,"mesh": "flint"}],"input": {"item": "kubejs:overworld_matter"},"result": {"item": ('exnihilosequentia:piece_aluminum') }})
event.custom({"type": "exnihilosequentia:sieve","rolls": [{"chance": 0.2,"mesh": "flint"}],"input": {"item": "kubejs:overworld_matter"},"result": {"item": ('minecraft:lapis_lazuli') }})
event.custom({"type": "exnihilosequentia:sieve","rolls": [{"chance": 0.2,"mesh": "flint"}],"input": {"item": "kubejs:overworld_matter"},"result": {"item": ('minecraft:coal') }})
event.custom({"type": "exnihilosequentia:sieve","rolls": [{"chance": 0.2,"mesh": "flint"}],"input": {"item": "kubejs:overworld_matter"},"result": {"item": ('minecraft:redstone') }})
event.custom({"type": "exnihilosequentia:sieve","rolls": [{"chance": 0.1,"mesh": "flint"}],"input": {"item": "kubejs:overworld_matter"},"result": {"item": ('mysticalagriculture:prosperity_shard') }})
event.custom({"type": "exnihilosequentia:sieve","rolls": [{"chance": 0.25,"mesh": "flint"}],"input": {"item": "kubejs:overworld_matter"},"result": {"item": ('libvulpes:dustsilicon') }})
event.custom({"type": "exnihilosequentia:sieve","rolls": [{"chance": 0.3,"mesh": "iron"}],"input": {"item": "kubejs:overworld_matter"},"result": {"item": ('exnihilosequentia:piece_gold') }})
event.custom({"type": "exnihilosequentia:sieve","rolls": [{"chance": 0.3,"mesh": "iron"}],"input": {"item": "kubejs:overworld_matter"},"result": {"item": ('exnihilosequentia:piece_silver') }})
event.custom({"type": "exnihilosequentia:sieve","rolls": [{"chance": 0.3,"mesh": "diamond"}],"input": {"item": "kubejs:overworld_matter"},"result": {"item": ('exnihilosequentia:piece_uranium') }})
event.custom({"type": "exnihilosequentia:sieve","rolls": [{"chance": 0.3,"mesh": "diamond"}],"input": {"item": "kubejs:overworld_matter"},"result": {"item": ('exnihilosequentia:piece_osmium') }})
event.custom({"type": "exnihilosequentia:sieve","rolls": [{"chance": 0.05,"mesh": "diamond"}],"input": {"item": "kubejs:overworld_matter"},"result": {"item": ('minecraft:diamond') }})
event.custom({"type": "exnihilosequentia:sieve","rolls": [{"chance": 0.1,"mesh": "diamond"}],"input": {"item": "kubejs:overworld_matter"},"result": {"item": ('exnihilosequentia:piece_zinc') }})
event.custom({"type": "exnihilosequentia:sieve","rolls": [{"chance": 0.05,"mesh": "emerald"}],"input": {"item": "kubejs:overworld_matter"},"result": {"item": ('minecraft:emerald') }})
event.custom({"type": "exnihilosequentia:sieve","rolls": [{"chance": 0.5,"mesh": "emerald"}],"input": {"item": "kubejs:overworld_matter"},"result": {"item": ('exnihilosequentia:piece_platinum') }})

//Netherite Sieving (overworld matter)

event.custom({"type": "exnihilosequentia:sieve","rolls": [{"chance": 0.05,"mesh": "netherite"}],"input": {"item": "kubejs:overworld_matter"},"result": {"item": ('libvulpes:dustdilithium') }})
event.custom({"type": "exnihilosequentia:sieve","rolls": [{"chance": 0.3,"mesh": "netherite"}],"input": {"item": "kubejs:overworld_matter"},"result": {"item": ('exnihilosequentia:piece_tin') }})
event.custom({"type": "exnihilosequentia:sieve","rolls": [{"chance": 0.2,"mesh": "netherite"}],"input": {"item": "kubejs:overworld_matter"},"result": {"item": ('exnihilosequentia:piece_nickel') }})
event.custom({"type": "exnihilosequentia:sieve","rolls": [{"chance": 0.3,"mesh": "netherite"}],"input": {"item": "kubejs:overworld_matter"},"result": {"item": ('exnihilosequentia:piece_copper') }})

//Netherite Sieving (gravel)

event.custom({"type": "exnihilosequentia:sieve","rolls": [{"chance": 0.3,"mesh": "netherite"}],"input": {"item": "minecraft:gravel"},"result": {"item": ('thermal:niter_dust') }})
event.custom({"type": "exnihilosequentia:sieve","rolls": [{"chance": 0.1,"mesh": "netherite"}],"input": {"item": "minecraft:gravel"},"result": {"item": ('thermal:cinnabar_dust') }})
event.custom({"type": "exnihilosequentia:sieve","rolls": [{"chance": 0.3,"mesh": "netherite"}],"input": {"item": "minecraft:gravel"},"result": {"item": ('mekanism:fluorite_gem') }})
event.custom({"type": "exnihilosequentia:sieve","rolls": [{"chance": 0.2,"mesh": "netherite"}],"input": {"item": "minecraft:gravel"},"result": {"item": ('libvulpes:dusttitanium') }})

//Sieve (Soul Sand)

event.custom({"type": "exnihilosequentia:sieve","rolls": [{"chance": 0.05,"mesh": "diamond"}],"input": {"item": "minecraft:soul_sand"},"result": {"item": ('minecraft:blaze_powder') }})
event.custom({"type": "exnihilosequentia:sieve","rolls": [{"chance": 0.01,"mesh": "diamond"}],"input": {"item": "minecraft:soul_sand"},"result": {"item": ('minecraft:ghast_tear') }})
event.custom({"type": "exnihilosequentia:sieve","rolls": [{"chance": 0.1,"mesh": "diamond"}],"input": {"item": "minecraft:soul_sand"},"result": {"item": ('minecraft:nether_wart') }})
event.custom({"type": "exnihilosequentia:sieve","rolls": [{"chance": 0.1,"mesh": "diamond"}],"input": {"item": "minecraft:soul_sand"},"result": {"item": ('minecraft:brown_mushroom') }})
event.custom({"type": "exnihilosequentia:sieve","rolls": [{"chance": 0.1,"mesh": "diamond"}],"input": {"item": "minecraft:soul_sand"},"result": {"item": ('minecraft:red_mushroom') }})

//Sieve (Netherrack)

event.custom({"type": "exnihilosequentia:sieve","rolls": [{"chance": 0.2,"mesh": "diamond"}],"input": {"item": 'exnihilosequentia:crushed_netherrack'},"result": {"item": ('kubejs:cobalt_ore_piece') }})
event.custom({"type": "exnihilosequentia:sieve","rolls": [{"chance": 0.05,"mesh": "diamond"}],"input": {"item": 'exnihilosequentia:crushed_netherrack'},"result": {"item": ('mysticalagriculture:soulium_dust') }})
event.custom({"type": "exnihilosequentia:sieve","rolls": [{"chance": 0.3,"mesh": "diamond"}],"input": {"item": 'exnihilosequentia:crushed_netherrack'},"result": {"item": ('exnihilosequentia:piece_gold') }})
event.custom({"type": "exnihilosequentia:sieve","rolls": [{"chance": 0.2,"mesh": "diamond"}],"input": {"item": 'exnihilosequentia:crushed_netherrack'},"result": {"item": ('minecraft:quartz') }})
event.custom({"type": "exnihilosequentia:sieve","rolls": [{"chance": 0.1,"mesh": "diamond"}],"input": {"item": 'exnihilosequentia:crushed_netherrack'},"result": {"item": ('minecraft:glowstone_dust') }})
event.custom({"type": "exnihilosequentia:sieve","rolls": [{"chance": 0.02,"mesh": "emerald"}],"input": {"item": 'exnihilosequentia:crushed_netherrack'},"result": {"item": ('minecraft:netherite_scrap') }})
event.custom({"type": "exnihilosequentia:sieve","rolls": [{"chance": 0.7,"mesh": "emerald"}],"input": {"item": 'exnihilosequentia:crushed_netherrack'},"result": {"item": ('exnihilosequentia:pebble_basalt') }})
event.custom({"type": "exnihilosequentia:sieve","rolls": [{"chance": 0.7,"mesh": "emerald"}],"input": {"item": 'exnihilosequentia:crushed_netherrack'},"result": {"item": ('exnihilosequentia:pebble_blackstone') }})
event.custom({"type": "exnihilosequentia:sieve","rolls": [{"chance": 0.05,"mesh": "diamond"}],"input": {"item": "exnihilosequentia:crushed_netherrack"},"result": {"item": ('minecraft:blaze_powder') }})
//Heavy Sieve

event.custom({"type": "excompressum:heavy_sieve_generated","input": {"item":"excompressum:compressed_dirt"},"source": "minecraft:dirt"})
event.custom({"type": "excompressum:heavy_sieve_generated","input": {"item":"kubejs:compressed_red_sand"},"source": "minecraft:red_sand"})
event.custom({"type": "excompressum:heavy_sieve_generated","input": {"item":"excompressum:compressed_sand"},"source": "minecraft:sand"})
event.custom({"type": "excompressum:heavy_sieve_generated","input": {"item":"excompressum:compressed_gravel"},"source": "minecraft:gravel"})
event.custom({"type": "excompressum:heavy_sieve_generated","input": {"item":"kubejs:compressed_overworld_matter"},"source": "kubejs:overworld_matter"})
event.custom({"type": "excompressum:heavy_sieve_generated","input": {"item":'excompressum:compressed_soul_sand'},"source": 'minecraft:soul_sand'})
event.custom({"type": "excompressum:heavy_sieve_generated","input": {"item":'excompressum:compressed_nether_gravel'},"source": 'exnihilosequentia:crushed_netherrack'})

event.custom({"type": "excompressum:heavy_sieve_generated","input": {"item":"excompressum:compressed_crushed_andesite"},"source": "exnihilosequentia:crushed_andesite","conditions": [{"type": "forge:mod_loaded","modid": "exnihilosequentia"}]})

//Barrel

event.custom({"type": "exnihilosequentia:fluid_item","fluid": {"fluid": "minecraft:water"},"input": {"item": "exnihilosequentia:dust"},"result": {"item": "minecraft:clay"}})

event.custom({"type": "exnihilosequentia:fluid_item","fluid": {"fluid": "minecraft:lava"},"input": {"item": "exnihilosequentia:dust"},"result": {"item": "minecraft:red_sand"}})

event.custom({"type": "exnihilosequentia:fluid_item","fluid": {"fluid": "exnihilosequentia:sea_water"},"input": {"item": 'kubejs:overworld_matter'},"result": {"item": 'minecraft:prismarine'}})
event.custom({"type": "exnihilosequentia:fluid_item","fluid": {"fluid": "exnihilosequentia:sea_water"},"input": {"item": 'exnihilosequentia:seed_red_coral'},"result": {"item": 'minecraft:fire_coral_block'}})
event.custom({"type": "exnihilosequentia:fluid_item","fluid": {"fluid": "exnihilosequentia:sea_water"},"input": {"item": 'exnihilosequentia:seed_pink_coral'},"result": {"item": 'minecraft:brain_coral_block'}})
event.custom({"type": "exnihilosequentia:fluid_item","fluid": {"fluid": "exnihilosequentia:sea_water"},"input": {"item": 'exnihilosequentia:seed_purple_coral'},"result": {"item": 'minecraft:bubble_coral_block'}})
event.custom({"type": "exnihilosequentia:fluid_item","fluid": {"fluid": "exnihilosequentia:sea_water"},"input": {"item": 'exnihilosequentia:seed_blue_coral'},"result": {"item": 'minecraft:tube_coral_block'}})
event.custom({"type": "exnihilosequentia:fluid_item","fluid": {"fluid": "exnihilosequentia:sea_water"},"input": {"item": 'exnihilosequentia:seed_yellow_coral'},"result": {"item": 'minecraft:horn_coral_block'}})

event.custom({"type": "exnihilosequentia:fluid_item","fluid": {"fluid": "exnihilosequentia:witchwater"},"input": {"tag": 'forge:sand'},"result": {"item": 'minecraft:soul_sand'}})
event.custom({"type": "exnihilosequentia:fluid_item","fluid": {"fluid": "exnihilosequentia:witchwater"},"input": {"item": 'excompressum:compressed_sand'},"result": {"item": 'excompressum:compressed_soul_sand'}})
event.custom({"type": "exnihilosequentia:fluid_item","fluid": {"fluid": "exnihilosequentia:witchwater"},"input": {"item": 'kubejs:compressed_red_sand'},"result": {"item": 'excompressum:compressed_soul_sand'}})
event.custom({"type": "exnihilosequentia:fluid_item","fluid": {"fluid": "exnihilosequentia:witchwater"},"input": {"item": 'minecraft:soul_sand'},"result": {"item": 'minecraft:soul_soil'}})
event.custom({"type": "exnihilosequentia:fluid_item","fluid": {"fluid": "exnihilosequentia:witchwater"},"input": {"tag": 'forge:mushrooms'},"result": {"item": 'minecraft:slime_block'}})

//Crucible (Organic Water)

event.custom({"type": "exnihilosequentia:crucible","input": {"tag": "forge:seeds"},"amount": 20,"fluidResult": {"fluid": "kubejs:organic_fluid"},"crucibleType": "wood"})
event.custom({"type": "exnihilosequentia:crucible","input": {"item": "minecraft:melon_slice"},"amount": 50,"fluidResult": {"fluid": "kubejs:organic_fluid"},"crucibleType": "wood"})
event.custom({"type": "exnihilosequentia:crucible","input": {"item": "minecraft:pumpkin"},"amount": 200,"fluidResult": {"fluid": "kubejs:organic_fluid"},"crucibleType": "wood"})
event.custom({"type": "exnihilosequentia:crucible","input": {"tag": "minecraft:leaves"},"amount": 20,"fluidResult": {"fluid": "kubejs:organic_fluid"},"crucibleType": "wood"})
event.custom({"type": "exnihilosequentia:crucible","input": {"tag": "minecraft:saplings"},"amount": 20,"fluidResult": {"fluid": "kubejs:organic_fluid"},"crucibleType": "wood"})
event.custom({"type": "exnihilosequentia:crucible","input": {"tag": "forge:crops"},"amount": 20,"fluidResult": {"fluid": "kubejs:organic_fluid"},"crucibleType": "wood"})
event.custom({"type": "exnihilosequentia:crucible","input": {"tag": "forge:dusts/wood"},"amount": 1,"fluidResult": {"fluid": "kubejs:organic_fluid"},"crucibleType": "wood"})
event.custom({"type": "exnihilosequentia:crucible","input": {"tag": "seaopolis:organic_material"},"amount": 40,"fluidResult": {"fluid": "kubejs:organic_fluid"},"crucibleType": "wood"})

//Crucible (Lava)

event.custom({"type": "exnihilosequentia:crucible","input": {"tag": "seaopolis:crushed_stone"},"amount": 100,"fluidResult": {"fluid": "minecraft:lava"},"crucibleType": "fired"})
event.custom({"type": "exnihilosequentia:crucible","input": {"tag": "seaopolis:compressed_crushed_stone"},"amount": 1000,"fluidResult": {"fluid": "minecraft:lava"},"crucibleType": "fired"})
event.custom({"type": "exnihilosequentia:crucible","input": {"tag": "forge:cobblestone"},"amount": 25,"fluidResult": {"fluid": "minecraft:lava"},"crucibleType": "fired"})
event.custom({"type": "exnihilosequentia:crucible","input": {"item": "exnihilosequentia:crushed_netherrack"},"amount": 250,"fluidResult": {"fluid": "minecraft:lava"},"crucibleType": "fired"})

//Heat

event.custom({"type": "exnihilosequentia:heat","block": "minecraft:torch","amount": 5})
event.custom({"type": "exnihilosequentia:heat","block": "minecraft:lava","amount": 50})
event.custom({"type": "exnihilosequentia:heat","block": 'minecraft:sea_lantern',"amount": 15})
event.custom({"type": "exnihilosequentia:heat","block": 'mekanism:block_uranium',"amount": 100})
event.custom({"type": "exnihilosequentia:heat","block": 'quark:blaze_lantern',"amount": 80})

//Water To Fluid

event.custom({"type": "exnihilosequentia:fluid_transform","fluidInTank": {"fluid": "minecraft:water"},"catalyst": {"item": "kubejs:overworld_matter"},"result": {"fluid": "exnihilosequentia:sea_water"}})
event.custom({"type": "exnihilosequentia:fluid_transform","fluidInTank": {"fluid": "minecraft:lava"},"catalyst": {"item": "minecraft:obsidian"},"result": {"fluid": "exnihilosequentia:witchwater"}})


})