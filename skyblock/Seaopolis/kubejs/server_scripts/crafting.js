//priority: 50

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

console.info('Hello, World! (You will see this line every time server resources reload)')

events.listen('recipes', event => {
 
//Shapeless

event.shapeless(item.of('exnihilosequentia:porcelain_clay', 1), ['minecraft:clay_ball', '2x kubejs:dust'])
event.shapeless(item.of('minecraft:clay_ball', 4), ['minecraft:clay'])
event.shapeless(item.of('waterstrainer:worm', 1), ['exnihilosequentia:silkworm'])
event.shapeless(item.of('kubejs:leafy_stew', 1), ['minecraft:bowl', '5x #minecraft:leaves', 'minecraft:fern'])
event.shapeless(item.of('minecraft:chest', 1), ['#forge:chests'])
event.shapeless(item.of('kubejs:dust', 4), ['exnihilosequentia:dust'])
event.shapeless(item.of('kubejs:seabuck_coffee', 1), ['minecraft:glass_bottle', 'kubejs:sea_bucks'])
event.shapeless(item.of('bigreactors:yellorium_ingot', 2), ['2x mekanism:ingot_uranium'])
event.shapeless(item.of('tconstruct:seared_brick', 4), ['#tconstruct:seared_blocks'])
event.shapeless(item.of('minecraft:string', 3), ['#forge:wool'])
event.shapeless(item.of('minecraft:sea_pickle', 1), ['9x minecraft:seagrass'])
event.shapeless(item.of('tconstruct:blood_slime_ball', 1), ['twilightforest:fiery_tears', '#forge:slimeball/green'])
event.shapeless(item.of('tconstruct:blood_slime_sapling', 1), ['minecraft:crimson_fungus', 'minecraft:warped_fungus'])
event.shapeless(item.of('bhc:yellow_heart_canister', 1), ['bhc:yellow_heart', '#forge:rods/blaze', 'minecraft:golden_apple', 'bhc:red_heart_canister'])
event.shapeless(item.of('bhc:green_heart_canister', 1), ['bhc:green_heart', 'minecraft:ghast_tear', 'minecraft:wither_skeleton_skull', 'bhc:yellow_heart_canister'])
event.shapeless(item.of('bhc:blue_heart_canister', 1), ['bhc:blue_heart', 'minecraft:nether_star', 'minecraft:enchanted_golden_apple', 'bhc:green_heart_canister'])
event.shapeless(item.of('#forge:ingots/aluminum', 9), ['#forge:storage_blocks/aluminum'])
event.shapeless(item.of('#forge:storage_blocks/aluminum', 1), ['9x #forge:ingots/aluminum'])
event.shapeless(item.of('#forge:ingots/aluminum', 1), ['9x #forge:nuggets/aluminum'])
event.shapeless(item.of('#forge:nuggets/aluminum', 9), ['1x #forge:ingots/aluminum'])
event.shapeless(item.of('cagedmobs:dragon_scale', 1), ['4x mysticalagriculture:dragon_egg_essence'])
event.shapeless(item.of('mysticalagradditions:dragon_scale', 1), ['5x mysticalagriculture:dragon_egg_essence'])
event.shapeless(item.of('tconstruct:dragon_scale', 1), ['6x mysticalagriculture:dragon_egg_essence'])
event.shapeless(item.of('bountifulbaubles:ender_dragon_scale', 1), ['7x mysticalagriculture:dragon_egg_essence'])
event.shapeless(item.of('quark:dragon_scale', 1), ['8x mysticalagriculture:dragon_egg_essence'])
event.shapeless(item.of('#forge:ingots/titanium', 9), ['libvulpes:blocktitanium'])
event.shapeless(item.of('boss_tools:silicon_ingot'), 'libvulpes:ingotsilicon')
event.shapeless(item.of('libvulpes:ingotsilicon'), 'boss_tools:silicon_ingot')

event.shapeless(item.of('boss_tools:compressed_steel'), ['#forge:plates/steel', '#forge:plates/titanium'])
event.shapeless(item.of('boss_tools:compressed_desh'), ['#forge:plates/desh', '#forge:plates/titanium'])
event.shapeless(item.of('boss_tools:compressed_silicon'), ['#forge:silicon', '#forge:plates/titanium'])

//Shaped Recipes

//Minecraft

event.shaped(item.of('minecraft:vine', 1), ['L','L','L'],{L: '#minecraft:leaves'})
event.shaped(item.of('minecraft:grass_block', 1), ['G','B'],{G: 'minecraft:grass', B: 'minecraft:dirt'})
event.shaped(item.of('minecraft:furnace', 1), ['CCC','C C','MMM'],{C: '#forge:cobblestone', M: 'excompressum:compressed_cobblestone'})
event.shaped(item.of('woodenshears:wooden_shears', 1), ['WP','P '],{W: 'kubejs:wood_gear', P: '#minecraft:planks'}).id('woodenshears:wooden_shears')


//Ex Nihio
event.shaped(item.of('exnihilosequentia:crook_wood', 1), ['SS',' S',' S'],{S: '#forge:rods/wooden'})
event.shaped(item.of('exnihilosequentia:barrel_wood', 1), ['P P','P P','PSP'],{S: '#minecraft:wooden_slabs', P: '#minecraft:planks'})
event.shaped(item.of('exnihilosequentia:barrel_stone', 1), ['P P','P P','PSP'],{S: 'minecraft:smooth_stone_slab', P: 'minecraft:smooth_stone'})
event.shaped(item.of('exnihilosequentia:sieve', 1), ['WWW','P P','P P'],{W: 'woodenhopper:wooden_hopper', P: '#minecraft:planks'})
event.shaped(item.of('exnihilosequentia:mesh_string', 1), ['SVS','VVV','SVS'],{S: '#forge:string', V: 'minecraft:vine'})
event.shaped(item.of('exnihilosequentia:mesh_flint', 1), ['SVS','VBV','SVS'],{S: 'minecraft:flint', V: 'exnihilosequentia:mesh_string', B: 'excompressum:compressed_flint'})
event.shaped(item.of('exnihilosequentia:hammer_stone', 1), [' C ',' SC','S  '],{S: '#forge:rods/wooden', C: '#forge:stone'})
event.shaped(item.of('exnihilosequentia:hammer_wood', 1), [' C ',' SC','S  '],{S: '#forge:rods/wooden', C: '#minecraft:planks'})
event.shaped(item.of('exnihilosequentia:hammer_wood', 1), [' C ',' SC','S  '],{S: '#forge:rods/wooden', C: '#minecraft:planks'})
event.shaped(item.of('exnihilosequentia:hammer_iron', 1), [' C ',' SC','S  '],{S: '#forge:rods/wooden', C: '#forge:ingots/iron'})
event.shaped(item.of('exnihilosequentia:hammer_gold', 1), [' C ',' SC','S  '],{S: '#forge:rods/wooden', C: '#forge:ingots/gold'})
event.shaped(item.of('exnihilosequentia:hammer_diamond', 1), [' C ',' SC','S  '],{S: '#forge:rods/wooden', C: '#forge:gems/diamond'})
event.shaped(item.of('exnihilosequentia:dust', 1), ['CC','CC'],{C: 'kubejs:dust'})
event.shaped(item.of('exnihilosequentia:crucible_unfired', 1), ['C C','CBC','CCC'],{C: 'exnihilosequentia:porcelain_clay', B: 'exnihilosequentia:barrel_stone'})
event.shaped(item.of('exnihilosequentia:crucible_wood', 1), ['C C','CBC','CCC'],{C: '#minecraft:logs', B: 'exnihilosequentia:crucible_fired'})
event.shaped(item.of('exnihilosequentia:chunk_tin', 1), ['OO','OO'],{O: 'exnihilosequentia:piece_tin'})
event.shaped(item.of('exnihilosequentia:chunk_copper', 1), ['OO','OO'],{O: 'exnihilosequentia:piece_copper'})
event.shaped(item.of('exnihilosequentia:chunk_nickel', 1), ['OO','OO'],{O: 'exnihilosequentia:piece_nickel'})
event.shaped(item.of('exnihilosequentia:chunk_iron', 1), ['OO','OO'],{O: 'exnihilosequentia:piece_iron'})
event.shaped(item.of('exnihilosequentia:chunk_lead', 1), ['OO','OO'],{O: 'exnihilosequentia:piece_lead'})
event.shaped(item.of('exnihilosequentia:chunk_gold', 1), ['OO','OO'],{O: 'exnihilosequentia:piece_gold'})
event.shaped(item.of('exnihilosequentia:chunk_silver', 1), ['OO','OO'],{O: 'exnihilosequentia:piece_silver'})
event.shaped(item.of('exnihilosequentia:chunk_uranium', 1), ['OO','OO'],{O: 'exnihilosequentia:piece_uranium'})
event.shaped(item.of('exnihilosequentia:chunk_osmium', 1), ['OO','OO'],{O: 'exnihilosequentia:piece_osmium'})
event.shaped(item.of('exnihilosequentia:chunk_aluminum', 1), ['OO','OO'],{O: 'exnihilosequentia:piece_aluminum'})
event.shaped(item.of('exnihilosequentia:chunk_zinc', 1), ['OO','OO'],{O: 'exnihilosequentia:piece_zinc'})
event.shaped(item.of('exnihilosequentia:chunk_platinum', 1), ['OO','OO'],{O: 'exnihilosequentia:piece_platinum'})
event.shaped(item.of('kubejs:cobalt_ore_chunk', 1), ['OO','OO'],{O: 'kubejs:cobalt_ore_piece'})
event.shaped(item.of('exnihilosequentia:crook_stone', 1), ['SS',' S',' S'],{S: 'exnihilosequentia:pebble_stone'})
event.shaped(item.of('exnihilosequentia:crook_andesite', 1), ['SS',' S',' S'],{S: 'exnihilosequentia:pebble_andesite'})
event.shaped(item.of('exnihilosequentia:crook_granite', 1), ['SS',' S',' S'],{S: 'exnihilosequentia:pebble_granite'})
event.shaped(item.of('exnihilosequentia:crook_diorite', 1), ['SS',' S',' S'],{S: 'exnihilosequentia:pebble_diorite'})
event.shaped(item.of('exnihilosequentia:crook_iron', 1), ['SS',' S',' S'],{S: 'minecraft:iron_ingot'})
event.shaped(item.of('exnihilosequentia:crook_gold', 1), ['SS',' S',' S'],{S: 'minecraft:gold_ingot'})
event.shaped(item.of('exnihilosequentia:crook_diamond', 1), ['SS',' S',' S'],{S: 'minecraft:diamond'})
event.shaped(item.of('exnihilosequentia:crook_bone', 1), ['SS',' S',' S'],{S: 'minecraft:bone'})
event.shaped(item.of('libvulpes:boulesilicon', 1), ['SSS','S S','SSS'],{S: '#refinedstorage:silicon'})

event.shaped(Item.of('tconstruct:creative_slot', {slot:"upgrades"}), ['CAC','ACA','CAC'],{A: 'minecraft:anvil', C: 'mysticalagradditions:creative_essence'})
event.shaped(Item.of('tconstruct:creative_slot', {slot:"abilities"}), ['CAC','ACA','CAC'],{A: 'minecraft:emerald', C: 'mysticalagradditions:creative_essence'})
event.shaped(item.of('refinedstorage:creative_controller', 1), ['CCC','CTC','CCC'],{T: '#refinedstorage:controller', C: 'mysticalagradditions:creative_essence'})
event.shaped(item.of('buildinggadgets:construction_paste_container_creative', 1), ['CCC','CTC','CCC'],{T: 'buildinggadgets:construction_paste_container_t3', C: 'mysticalagradditions:creative_essence'})
event.shaped(item.of('libvulpes:creative_power_battery', 1), ['ECE','CCC','ECE'],{E: 'mekanism:ultimate_energy_cube', C: 'mysticalagradditions:creative_essence'})
event.shaped(item.of('pipez:infinity_upgrade', 1), [' E ','ECE',' E '],{E: 'pipez:ultimate_upgrade', C: 'mysticalagradditions:creative_essence'})
event.shaped(item.of('refinedstorage:creative_storage_disk', 1), ['HEH','ECE','HEH'],{E: 'extrastorage:storagepart_16384k', C: 'mysticalagradditions:creative_essence', H: 'refinedstorage:storage_housing'})
event.shaped(item.of('refinedstorage:creative_fluid_storage_disk', 1), ['HEH','ECE','HEH'],{E: 'extrastorage:storagepart_1048576k_fluid', C: 'mysticalagradditions:creative_essence', H: 'refinedstorage:storage_housing'})

//Ex Compressum

event.shaped(item.of('excompressum:compressed_cobblestone', 1), ['CCC','CCC','CCC'],{C: '#forge:cobblestone'})
event.shaped(item.of('excompressum:compressed_crushed_granite', 1), ['CCC','CCC','CCC'],{C: 'exnihilosequentia:crushed_granite'})
event.shaped(item.of('excompressum:compressed_crushed_diorite', 1), ['CCC','CCC','CCC'],{C: 'exnihilosequentia:crushed_diorite'})
event.shaped(item.of('excompressum:compressed_crushed_andesite', 1), ['CCC','CCC','CCC'],{C: 'exnihilosequentia:crushed_andesite'})
event.shaped(item.of('excompressum:compressed_dirt', 1), ['CCC','CCC','CCC'],{C: 'minecraft:dirt'})
event.shaped(item.of('excompressum:compressed_gravel', 1), ['CCC','CCC','CCC'],{C: 'minecraft:gravel'})
event.shaped(item.of('excompressum:compressed_sand', 1), ['CCC','CCC','CCC'],{C: 'minecraft:sand'})
event.shaped(item.of('excompressum:compressed_soul_sand', 1), ['CCC','CCC','CCC'],{C: 'minecraft:soul_sand'})
event.shaped(item.of('kubejs:compressed_smooth_stone', 1), ['CCC','CCC','CCC'],{C: 'minecraft:smooth_stone'})
event.shaped(item.of('excompressum:compressed_nether_gravel', 1), ['CCC','CCC','CCC'],{C: 'exnihilosequentia:crushed_netherrack'})
event.shaped(item.of('excompressum:compressed_netherrack', 1), ['CCC','CCC','CCC'],{C: 'minecraft:netherrack'})
event.shaped(item.of('excompressum:compressed_flint', 1), ['CCC','CCC','CCC'],{C: 'minecraft:flint'})
event.shaped(item.of('excompressum:compressed_hammer_wood', 1), ['CCC','CCC','CCC'],{C: 'exnihilosequentia:hammer_wood'})
event.shaped(item.of('excompressum:compressed_hammer_stone', 1), ['CCC','CCC','CCC'],{C: 'exnihilosequentia:hammer_stone'})
event.shaped(item.of('excompressum:compressed_hammer_iron', 1), ['CCC','CCC','CCC'],{C: 'exnihilosequentia:hammer_iron'})
event.shaped(item.of('excompressum:compressed_hammer_gold', 1), ['CCC','CCC','CCC'],{C: 'exnihilosequentia:hammer_gold'})
event.shaped(item.of('excompressum:compressed_hammer_diamond', 1), ['CCC','CCC','CCC'],{C: 'exnihilosequentia:hammer_diamond'})
event.shaped(item.of('excompressum:compressed_hammer_netherite', 1), ['CCC','CCC','CCC'],{C: 'exnihilosequentia:hammer_netherite'})
event.shaped(item.of('excompressum:compressed_crook', 1), ['CCC','CCC','CCC'],{C: 'exnihilosequentia:crook_wood'})
event.shaped(item.of('excompressum:compressed_granite', 1), ['CCC','CCC','CCC'],{C: 'minecraft:granite'})
event.shaped(item.of('excompressum:compressed_diorite', 1), ['CCC','CCC','CCC'],{C: 'minecraft:diorite'})
event.shaped(item.of('excompressum:compressed_andesite', 1), ['CCC','CCC','CCC'],{C: 'minecraft:andesite'})
event.shaped(item.of('libvulpes:blocktitanium', 1), ['CCC','CCC','CCC'],{C: '#forge:ingots/titanium'})
event.shaped(item.of('excompressum:oak_heavy_sieve', 1), ['LNL','TST','LNL'],{T: 'mekanism:logistical_sorter', S: 'exnihilosequentia:sieve', N: 'thermal:niter_dust', L:'minecraft:oak_log'})
event.shaped(item.of('excompressum:birch_heavy_sieve', 1), ['LNL','TST','LNL'],{T: 'mekanism:logistical_sorter', S: 'exnihilosequentia:sieve', N: 'thermal:niter_dust', L:'minecraft:birch_log'})
event.shaped(item.of('excompressum:spruce_heavy_sieve', 1), ['LNL','TST','LNL'],{T: 'mekanism:logistical_sorter', S: 'exnihilosequentia:sieve', N: 'thermal:niter_dust', L:'minecraft:spruce_log'})
event.shaped(item.of('excompressum:jungle_heavy_sieve', 1), ['LNL','TST','LNL'],{T: 'mekanism:logistical_sorter', S: 'exnihilosequentia:sieve', N: 'thermal:niter_dust', L:'minecraft:jungle_log'})
event.shaped(item.of('excompressum:acacia_heavy_sieve', 1), ['LNL','TST','LNL'],{T: 'mekanism:logistical_sorter', S: 'exnihilosequentia:sieve', N: 'thermal:niter_dust', L:'minecraft:acacia_log'})
event.shaped(item.of('excompressum:dark_oak_heavy_sieve', 1), ['LNL','TST','LNL'],{T: 'mekanism:logistical_sorter', S: 'exnihilosequentia:sieve', N: 'thermal:niter_dust', L:'minecraft:dark_oak_log'})
event.shaped(item.of('excompressum:auto_sieve', 1), ['LNL','TST','LNL'],{T: 'mekanism:logistical_sorter', S: 'exnihilosequentia:sieve', N: 'mekanism:basic_universal_cable', L:'#forge:glass'})
event.shaped(item.of('excompressum:auto_hammer', 1), ['LNL','THT','LNL'],{T: 'mekanism:logistical_sorter', H: 'excompressum:compressed_hammer_stone', N: 'mekanism:basic_universal_cable', L:'#forge:glass'})
event.shaped(item.of('excompressum:chicken_bait', 1), ['WWW', 'SSS'],{S: 'minecraft:wheat', W: 'minecraft:wheat_seeds'})
event.shaped(item.of('excompressum:cow_bait', 1), ['121', '232', '121'],{1: 'minecraft:wheat', 2: 'minecraft:leather', 3:'minecraft:egg'})
event.shaped(item.of('excompressum:sheep_bait', 1), ['121', '232', '121'],{1: 'minecraft:wheat', 2: 'minecraft:feather', 3:'minecraft:egg'})
event.shaped(item.of('excompressum:pig_bait', 1), ['121', '232', '121'],{1: 'minecraft:wheat', 2: 'minecraft:carrot', 3:'minecraft:egg'})
event.shaped(item.of('excompressum:polar_bear_bait', 1), ['121', '232', '121'],{1: 'minecraft:salmon', 2: 'minecraft:porkchop', 3:'excompressum:pig_bait'})
event.shaped(item.of('excompressum:cat_bait', 1), ['121', '232', '121'],{1: 'minecraft:cod', 2: 'minecraft:salmon', 3:'minecraft:egg'})
event.shaped(item.of('excompressum:ocelot_bait', 1), ['121', '232', '121'],{1: 'minecraft:cod', 2: 'minecraft:salmon', 3:'excompressum:cat_bait'})
event.shaped(item.of('excompressum:wolf_bait', 1), ['121', '232', '121'],{1: 'minecraft:bone', 2: 'minecraft:mutton', 3:'minecraft:egg'})
event.shaped(item.of('excompressum:squid_bait', 1), ['121', '232', '121'],{1: 'minecraft:ink_sac', 2: 'minecraft:ink_sac', 3:'minecraft:egg'})
event.shaped(item.of('excompressum:parrot_bait', 1), ['121', '232', '121'],{1: 'minecraft:wheat_seeds', 2: 'minecraft:feather', 3:'excompressum:chicken_bait'})
event.shaped(item.of('excompressum:mooshroom_bait', 1), ['121', '232', '121'],{1: 'minecraft:beef', 2: '#forge:mushrooms', 3: 'minecraft:egg'})
event.shaped(item.of('excompressum:fox_bait', 1), ['121', '232', '121'],{1: 'minecraft:chicken', 2: 'minecraft:sweet_berries', 3: 'minecraft:egg'})
event.shaped(item.of('excompressum:llama_bait', 1), ['121', '232', '121'],{1: 'minecraft:beef', 2: 'minecraft:leather', 3: 'excompressum:cow_bait'})
event.shaped(item.of('excompressum:horse_bait', 1), ['121', '232', '121'],{1: 'minecraft:saddle', 2: 'minecraft:saddle', 3: 'excompressum:llama_bait'})
event.shaped(item.of('excompressum:donkey_bait', 1), ['121', '232', '121'],{1: 'minecraft:saddle', 2: '#forge:chests/wooden', 3: 'excompressum:llama_bait'})
event.shaped(item.of('excompressum:rabbit_bait', 1), ['121', '232', '121'],{1: 'minecraft:carrot', 2: 'minecraft:carrot', 3: 'minecraft:egg'})
event.shaped(item.of('excompressum:turtle_bait', 1), ['121', '232', '121'],{1: 'minecraft:turtle_egg', 2: 'minecraft:carrot', 3: 'minecraft:egg'})
event.shaped(item.of('excompressum:auto_compressor', 1), ['CIC', 'IBI', 'CIC'],{C: 'tconstruct:crafting_station', I: '#forge:ingots/bronze', B: '#forge:storage_blocks/bronze'})
event.shaped(item.of('excompressum:rationing_auto_compressor', 1), ['CIC', 'IBI', 'CIC'],{C: 'excompressum:auto_compressor', I: '#forge:ingots/electrum', B: '#forge:storage_blocks/electrum'})
event.shaped(Item.of('industrialforegoing:dryrubber', 8), ['R', 'R', 'R'],{R: 'mysticalagriculture:rubber_essence'})
event.shaped(Item.of('minecraft:chorus_flower', 1), ['PPP', 'PEP', 'PPP'],{P: 'minecraft:purpur_block', E: 'minecraft:end_stone'})

function dusttodust(type){
event.shapeless(item.of('#forge:dusts/' + type +'', 1), ['pedestals:dust' + type +''])}
dusttodust('iron')
dusttodust('gold')
dusttodust('copper')
dusttodust('tin')
dusttodust('osmium')
dusttodust('uranium')
dusttodust('lead')
dusttodust('silver')
dusttodust('aluminum')
dusttodust('nickel')

//Uncompressed Blocks

event.shapeless(item.of('kubejs:overworld_matter', 9), ['kubejs:compressed_overworld_matter'])
event.shapeless(item.of('minecraft:red_sand', 9), ['kubejs:compressed_red_sand'])
event.shapeless(item.of('minecraft:sand', 9), ['excompressum:compressed_sand'])
event.shapeless(item.of('minecraft:prismarine', 9), ['kubejs:compressed_prismarine'])
event.shapeless(item.of('minecraft:smooth_stone', 9), ['kubejs:compressed_smooth_stone'])
event.shapeless(item.of('exnihilosequentia:crushed_granite', 9), ['excompressum:compressed_crushed_granite'])
event.shapeless(item.of('exnihilosequentia:crushed_andesite', 9), ['excompressum:compressed_crushed_andesite'])
event.shapeless(item.of('exnihilosequentia:crushed_diorite', 9), ['excompressum:compressed_crushed_diorite'])
event.shapeless(item.of('minecraft:granite', 9), ['excompressum:compressed_granite'])
event.shapeless(item.of('minecraft:andesite', 9), ['excompressum:compressed_andesite'])
event.shapeless(item.of('minecraft:diorite', 9), ['excompressum:compressed_diorite'])
event.shapeless(item.of('minecraft:netherrack', 9), ['excompressum:compressed_netherrack'])
event.shapeless(item.of('exnihilosequentia:crushed_netherrack', 9), ['excompressum:compressed_nether_gravel'])
event.shapeless(item.of('minecraft:soul_sand', 9), ['excompressum:compressed_soul_sand'])
event.shapeless(item.of('minecraft:cobblestone', 9), ['excompressum:compressed_cobblestone'])
event.shapeless(item.of('minecraft:gravel', 9), ['excompressum:compressed_gravel'])
event.shapeless(item.of('minecraft:gravel', 9), ['excompressum:compressed_gravel'])
event.shapeless(item.of('exnihilosequentia:dust', 9), ['excompressum:compressed_dust'])
event.shapeless(item.of('minecraft:flint', 9), ['excompressum:compressed_flint'])
event.shapeless(item.of('minecraft:dirt', 9), ['excompressum:compressed_dirt'])


//Smithing

event.smithing('exnihilosequentia:hammer_netherite', 'exnihilosequentia:hammer_diamond', 'minecraft:netherite_ingot')

event.forEachRecipe({ type: 'minecraft:crafting_shaped', output: '#minecraft:slabs' }, r => {
    event.shaped(r.inputItems[0], ["A", "A"], { A: r.outputItems[0].withCount(2) });
});

//Kubejs

event.shaped(item.of('kubejs:melon_juice', 1), ['MMM','MMM',' G '],{G: 'minecraft:glass_bottle', M: 'minecraft:melon_slice'})
event.shaped(item.of('kubejs:pumpkin_juice', 1), ['P','G'],{G: 'minecraft:glass_bottle', P: 'minecraft:pumpkin'})
event.shaped(item.of('kubejs:compressed_red_sand', 1), ['CCC','CCC','CCC'],{C: 'minecraft:red_sand'})
event.shaped(item.of('kubejs:compressed_overworld_matter', 1), ['CCC','CCC','CCC'],{C: 'kubejs:overworld_matter'})
event.shaped(item.of('kubejs:compressed_prismarine', 1), ['CCC','CCC','CCC'],{C: 'minecraft:prismarine'})
event.shaped(item.of('kubejs:wood_gear', 1), [' P ','P P',' P '],{P: '#minecraft:planks'})
event.shaped(item.of('kubejs:map', 1), ['MPM','PCP','MPM'],{C: 'minecraft:compass', P: '#minecraft:planks', M: 'minecraft:map'})
event.shaped(item.of('kubejs:map1', 1), ['SPS','PMP','SPS'],{S: 'minecraft:prismarine_crystals', P: 'minecraft:prismarine_shard', M: 'kubejs:map'})
event.shaped(item.of('kubejs:map3', 1), ['SPS','PMP','SPS'],{S: 'minecraft:soul_sand', P: 'minecraft:blaze_powder', M: 'kubejs:map'}) 
event.shaped(item.of('kubejs:map4', 1), ['SPS','PMP','SPS'],{S: 'minecraft:bone', P: 'minecraft:sand', M: 'kubejs:map'}) 
event.shaped(item.of('kubejs:map5', 1), ['SPS','PMP','SPS'],{S: 'tconstruct:necrotic_bone', P: 'minecraft:nether_bricks', M: 'kubejs:map'}) 
event.shaped(item.of('kubejs:map6', 1), ['SPS','PMP','SPS'],{S: 'minecraft:blaze_rod', P: 'minecraft:basalt', M: 'kubejs:map'}) 
event.shaped(item.of('kubejs:map7', 1), ['SPS','PMP','SPS'],{S: 'minecraft:shulker_shell', P: 'minecraft:end_stone', M: 'kubejs:map'}) 
event.shaped(item.of('kubejs:map8', 1), ['SPS','PMP','SPS'],{S: 'minecraft:nether_star', P: 'minecraft:end_stone', M: 'kubejs:map7'}) 
event.shaped(item.of('twilightforest:fiery_blood', 1), ['B','G'],{G: 'minecraft:glass_bottle', B: 'tconstruct:blood_slime_ball'}) 

//Mek

event.shaped(item.of('mekanism:configurator', 1), [' CB',' HB','C  '],{B: '#forge:ingots/bronze', C: '#forge:ingots/constantan', H: 'thermal:niter_dust'})
event.shaped(item.of('mekanism:logistical_sorter', 1), ['BCB','LLL','BCB'],{L: 'mekanism:basic_logistical_transporter', C: '#forge:ingots/constantan', B: '#forge:ingots/bronze'})
event.shaped(item.of('industrialforegoing:pitiful_generator', 1), ['FBF','CZC','FBF'],{F: 'minecraft:furnace', B: 'minecraft:blast_furnace', C: '#forge:dusts/cinnabar', Z:'mekanism:logistical_sorter'})
event.shaped(item.of('thermal:redstone_servo', 1), ['IRI','RDR','IRI'],{I: '#forge:ingots/iron', R: 'morered:red_alloy_ingot', D: '#forge:gears/diamond'})
event.shaped(item.of('mekanismgenerators:gas_burning_generator', 1), ['PBP','BEB','PBP'],{P: 'industrialforegoing:pitiful_generator', E: '#forge:storage_blocks/bronze', B: 'mekanism:electrolytic_separator'})
event.shaped(item.of('industrialforegoing:plastic', 2), ['CCC','DDD','CCC'],{C: 'thermal:cured_rubber', D: 'industrialforegoing:dryrubber'})

//Mystical

event.shaped(item.of('kubejs:sea_bucks', 1), ['SSS', 'S S', 'SSS'],{S: 'mysticalagriculture:seabuck_essence'})

//Misc

event.shaped(item.of('ceramicbucket:unfired_clay_bucket', 1), ['C C',' C '],{C: 'exnihilosequentia:porcelain_clay'})
event.shaped(item.of('ceramicshears:clay_shears_part', 1), [' C','C '],{C: 'exnihilosequentia:porcelain_clay'})
event.shaped(item.of('industrialforegoing:block_breaker', 1), ['DHD','PMP','DFD'],{D: 'minecraft:polished_diorite', H: 'woodenhopper:wooden_hopper', P: 'excompressum:compressed_hammer_stone', M: 'exnihilosequentia:mesh_flint', F: 'exnihilosequentia:crucible_fired'})
event.shaped(item.of('waterstrainer:bait_pot', 1), [' F ','FFF',' H '],{F: '#minecraft:fishes', H: 'woodenhopper:wooden_hopper'})
event.shaped(item.of('pipez:item_pipe', 4), ['LLL','TRT','LLL'],{L: '#forge:ingots/lead', T: 'mekanism:basic_logistical_transporter', R: '#forge:dusts/redstone'})
event.shaped(item.of('pipez:fluid_pipe', 4), ['LLL','TRT','LLL'],{L: '#forge:ingots/lead', T: 'mekanism:basic_mechanical_pipe', R: '#forge:gems/lapis'})
event.shaped(item.of('pipez:energy_pipe', 4), ['LLL','TRT','LLL'],{L: '#forge:ingots/iron', T: 'mekanism:basic_universal_cable', R: '#forge:dusts/redstone'})
event.shaped(item.of('pipez:gas_pipe', 4), ['LLL','TRT','LLL'],{L: '#forge:ingots/iron', T: 'mekanism:basic_pressurized_tube', R: '#forge:gems/lapis'})
event.shaped(Item.of('mekanism:scuba_tank', {HideFlags:2}), ['BSB','YSY','BSB'],{B: 'ceramicbucket:ceramic_bucket', S: 'tconstruct:seared_brick', Y: '#forge:dyes/yellow'})
event.shaped(Item.of('morered:gatecrafting_plinth'), ['III','RNR','RNR'],{N: '#morered:network_cables', R: 'morered:red_alloy_ingot', I: '#forge:ingots/iron'})
event.shaped(Item.of('kubejs:wood_plate'), ['LL'],{L: '#minecraft:logs'}) 
event.shaped(Item.of('simplesponge:sponge_on_a_stick'), ['S','R','R'],{S: 'minecraft:sponge', R: 'minecraft:stick'})
event.shaped(Item.of('factory:factory'), ['SHS','CCC','SHS'],{C: 'tconstruct:crafting_station', H: 'woodenhopper:wooden_hopper', S: '#forge:cobblestone'})
event.shaped(Item.of('buildinggadgets:gadget_copy_paste'), ['S'],{S: 'buildinggadgets:gadget_copy_paste'})
event.shaped(Item.of('buildinggadgets:gadget_exchanging'), ['S'],{S: 'buildinggadgets:gadget_exchanging'})

event.shaped(Item.of('upgrade_aquatic:glowing_ink_sac'), [' S ', 'SCS', ' S '],{S: 'minecraft:prismarine_crystals', C: 'minecraft:ink_sac'})
event.shaped(Item.of('upgrade_aquatic:glowing_ink_sac'), [' S ', 'SCS', ' S '],{S: 'minecraft:glowstone_dust', C: 'minecraft:ink_sac'})

//STAY AT BOTTOM

event.shaped(Item.of('minecraft:potion', {Potion:'minecraft:night_vision'}), ['FGF', 'GWG', 'FGF'],{F: 'upgrade_aquatic:glowing_ink_sac', W: Item.of('minecraft:potion', {Potion:"minecraft:water"}), G: 'minecraft:carrot'}).id('kubejs:night_vision')
event.shaped(Item.of('minecraft:potion', {Potion:"minecraft:water_breathing"}), ['FGF', 'GWG', 'FGF'],{F: '#forge:raw_fishes', W: Item.of('minecraft:potion', {Potion:"minecraft:water"}), G: 'kubejs:water_bowl'}).id('kubejs:water_breathing')
event.shaped(Item.of('compactmachines:tunnel', {definition:{id:"compactmachines:item"}}), ['SSS', 'SCS', 'SSS'],{S: 'compactmachines:wall', C: '#forge:chests/wooden'}).id('kubejs:item_tunnel')
event.shaped(Item.of('compactmachines:tunnel', {definition:{id:"compactmachines:redstone_in"}}), ['SSS', 'SCS', 'SSS'],{S: 'compactmachines:wall', C: '#forge:storage_blocks/redstone'}).id('kubejs:redstone_tunnel')


})