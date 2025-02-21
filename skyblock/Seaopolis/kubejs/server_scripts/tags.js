events.listen('item.tags', event => {

//Item Tags

event.add('itemfilters:check_nbt', 'ceramicbucket:filled_ceramic_bucket')
event.add('itemfilters:check_nbt', 'tconstruct:tool_handle')
event.add('itemfilters:check_nbt', 'tconstruct:tool_binding')
event.add('itemfilters:check_nbt', 'tconstruct:pickaxe_head')
event.add('itemfilters:check_nbt', 'tconstruct:hammer_head')
event.add('itemfilters:check_nbt', 'compactmachines:tunnel')
event.add('itemfilters:check_nbt', 'patchouli:guide_book')
event.add('seaopolis:crushed_stone', 'exnihilosequentia:crushed_granite')
event.add('seaopolis:crushed_stone', 'exnihilosequentia:crushed_diorite')
event.add('seaopolis:crushed_stone', 'exnihilosequentia:crushed_andesite')
event.add('seaopolis:compressed_crushed_stone', 'excompressum:compressed_crushed_andesite')
event.add('seaopolis:compressed_crushed_stone', 'excompressum:compressed_crushed_diorite')
event.add('seaopolis:compressed_crushed_stone', 'excompressum:compressed_crushed_granite')
event.add('exnihilosequentia:hammer', 'excompressum:chicken_stick')
event.add('forge:ores/cobalt', 'kubejs:cobalt_ore_chunk')
event.remove('twilightforest:portal/activator', '#forge:gems/diamond')
event.remove('tconstruct:slimy_saplings', 'tconstruct:blood_slime_sapling')
event.remove('minecraft:saplings', 'tconstruct:blood_slime_sapling')
event.add('twilightforest:portal/activator', 'solarcooker:shining_diamond_block')
event.add('forge:dusts/saltpeter', 'thermal:niter_dust')
event.add('forge:gears', 'kubejs:wood_gear')
event.add('forge:plates', 'kubejs:wood_plate')
event.add('seaopolis:snad', 'snad:snad')
event.add('seaopolis:snad', 'snad:red_snad')
event.add('forge:rubber', 'thermal:cured_rubber')
event.add('forge:rubber', 'industrialforegoing:dryrubber')
event.add('exnihilosequentia:hammer', 'tconstruct:sledge_hammer' )
event.add('excompressum:hammer', 'tconstruct:sledge_hammer')
event.add('farmersdelight:straw_harvesters', 'tconstruct:cleaver')
event.add('forge:ores/uranium', 'bigreactors:yellorite_ore')
event.add('forge:ores/yellorite', 'bigreactors:yellorite_ore')
event.add('forge:storage_blocks/aluminum', 'libvulpes:blockaluminum')
event.add('seaopolis:minecraft_coral', 'minecraft:tube_coral_block')
event.add('seaopolis:minecraft_coral', 'minecraft:bubble_coral_block')
event.add('seaopolis:minecraft_coral', 'minecraft:brain_coral_block')
event.add('seaopolis:minecraft_coral', 'minecraft:fire_coral_block')
event.add('seaopolis:minecraft_coral', 'minecraft:horn_coral_block')
event.add('seaopolis:better_coral', 'upgrade_aquatic:acan_coral_block')
event.add('seaopolis:better_coral', 'upgrade_aquatic:finger_coral_block')
event.add('seaopolis:better_coral', 'upgrade_aquatic:star_coral_block')
event.add('seaopolis:better_coral', 'upgrade_aquatic:moss_coral_block')
event.add('seaopolis:better_coral', 'upgrade_aquatic:petal_coral_block')
event.add('seaopolis:better_coral', 'upgrade_aquatic:branch_coral_block')
event.add('seaopolis:better_coral', 'upgrade_aquatic:rock_coral_block')
event.add('seaopolis:better_coral', 'upgrade_aquatic:pillow_coral_block')
event.add('seaopolis:better_coral', 'upgrade_aquatic:silk_coral_block')
event.add('seaopolis:better_coral', 'upgrade_aquatic:chrome_coral_block')
event.add('seaopolis:better_coral', 'upgrade_aquatic:prismarine_coral_block')
event.add('seaopolis:organic_material', 'minecraft:sugar_cane')
event.add('seaopolis:organic_material', 'minecraft:cactus')
event.add('seaopolis:organic_material', 'minecraft:bamboo')
event.add('seaopolis:organic_material', 'minecraft:egg')
event.add('seaopolis:leather_armour', 'minecraft:leather_helmet')
event.add('seaopolis:leather_armour', 'minecraft:leather_chestplate')
event.add('seaopolis:leather_armour', 'minecraft:leather_leggings')
event.add('seaopolis:leather_armour', 'minecraft:leather_boots')
event.add('seaopolis:chainmail_armour', 'minecraft:chainmail_helmet')
event.add('seaopolis:chainmail_armour', 'minecraft:chainmail_chestplate')
event.add('seaopolis:chainmail_armour', 'minecraft:chainmail_leggings')
event.add('seaopolis:chainmail_armour', 'minecraft:chainmail_boots')
event.add('excompressum:heavy_sieve', 'excompressum:spruce_heavy_sieve')
event.add('forge:crops', 'minecraft:red_mushroom')
event.add('forge:crops', 'minecraft:brown_mushroom')
event.add('minecraft:machine_frame', 'thermal:machine_frame')
event.get('tconstruct:casts/multi_use/gear').add('thermal:press_gear_die')

event.get('thermal:crafting/casts').add(['tconstruct:ingot_cast'])
event.get('thermal:crafting/dies').add(['tconstruct:ingot_cast', 'tconstruct:gear_cast'])

event.add('seaopolis:non_flammable_planks', 'tconstruct:bloodshroom_planks')
event.add('seaopolis:non_flammable_planks', 'minecraft:warped_planks')
event.add('seaopolis:non_flammable_planks', 'minecraft:crimson_planks')

event.add('seaopolis:ore_piece', 'exnihilosequentia:piece_copper')
event.add('seaopolis:ore_piece', 'exnihilosequentia:piece_lead')
event.add('seaopolis:ore_piece', 'exnihilosequentia:piece_nickel')
event.add('seaopolis:ore_piece', 'exnihilosequentia:piece_silver')
event.add('seaopolis:ore_piece', 'exnihilosequentia:piece_tin')
event.add('seaopolis:ore_piece', 'exnihilosequentia:piece_aluminum')
event.add('seaopolis:ore_piece', 'exnihilosequentia:piece_platinum')
event.add('seaopolis:ore_piece', 'exnihilosequentia:piece_uranium')
event.add('seaopolis:ore_piece', 'exnihilosequentia:piece_zinc')
event.add('seaopolis:ore_piece', 'exnihilosequentia:piece_iron')
event.add('seaopolis:ore_piece', 'exnihilosequentia:piece_gold')
event.add('seaopolis:ore_piece', 'exnihilosequentia:piece_osmium')
event.add('seaopolis:ore_piece', 'kubejs:cobalt_ore_piece')

event.add('forge:ores/titanium', 'libvulpes:orerutile')
event.add('forge:storage_blocks/uranium', 'bigreactors:yellorium_block')

event.add('forge:sand', 'boss_tools:moon_sand')
event.add('forge:sand', 'boss_tools:mars_sand')
event.add('forge:sand/red', 'boss_tools:mars_sand')
event.add('forge:stone', 'boss_tools:mars_stone')
event.add('forge:stone', 'boss_tools:mercury_stone')
event.add('forge:cobblestone', 'boss_tools:mercury_cobblestone')

event.remove('forge:dusts/iron', 'pedestals:dustiron')
event.remove('forge:dusts/gold', 'pedestals:dustgold')
event.remove('forge:dusts/copper', 'pedestals:dustcopper')
event.remove('forge:dusts/tin', 'pedestals:dusttin')
event.remove('forge:dusts/osmium', 'pedestals:dustosmium')
event.remove('forge:dusts/uranium', 'pedestals:dusturanium')
event.remove('forge:dusts/lead', 'pedestals:dustlead')
event.remove('forge:dusts/silver', 'pedestals:dustsilver')
event.remove('forge:dusts/aluminum', 'pedestals:dustaluminum')
event.remove('forge:dusts/nickel', 'pedestals:dustnickel')

function concrete(type){
event.add('seaopolis:concrete', 'minecraft:' + type + '_concrete')}
concrete('white')
concrete('blue')
concrete('magenta')
concrete('orange')
concrete('light_blue')
concrete('yellow')
concrete('lime')
concrete('pink')
concrete('gray')
concrete('light_gray')
concrete('cyan')
concrete('purple')
concrete('brown')
concrete('green')
concrete('red')
concrete('black')
function drawer1(type){
event.add('seaopolis:drawer_1x1', 'storagedrawers:'+ type +'_full_drawers_1')}
drawer1('oak')
drawer1('jungle')
drawer1('dark_oak')
drawer1('birch')
drawer1('acacia')
drawer1('spruce')
function drawer2(type){
event.add('seaopolis:drawer_2x1', 'storagedrawers:'+ type +'_full_drawers_2')}
drawer2('oak')
drawer2('jungle')
drawer2('dark_oak')
drawer2('birch')
drawer2('acacia')
drawer2('spruce')
function drawer4(type){
event.add('seaopolis:drawer_2x2', 'storagedrawers:'+ type +'_full_drawers_4')}
drawer4('oak')
drawer4('jungle')
drawer4('dark_oak')
drawer4('birch')
drawer4('acacia')
drawer4('spruce')
function trim(type){
event.add('seaopolis:drawer_trim', 'storagedrawers:'+ type +'_trim')}
trim('oak')
trim('jungle')
trim('dark_oak')
trim('birch')
trim('acacia')
trim('spruce')

function slimydirt(type){
event.add('seaopolis:slimy_dirt', 'tconstruct:'+ type +'_slime_dirt')}
slimydirt('earth')
slimydirt('sky')
slimydirt('ichor')
slimydirt('ender')

function marble(marble){
event.add('chisel:marble', 'quark:marble'+ marble + '')}
marble('_bricks')
marble('_pavement')
marble('_pillar')
marble('')
event.add('chisel:marble', 'quark:chiseled_marble_bricks')
event.add('chisel:marble', 'quark:polished_marble')

//Hostile Mob Drops

event.add('seaopolis:naughty_mobs', 'minecraft:rotten_flesh')
event.add('seaopolis:naughty_mobs', 'minecraft:spider_eye')
event.add('seaopolis:naughty_mobs', 'minecraft:bone')
event.add('seaopolis:naughty_mobs', 'minecraft:gunpowder')
event.add('seaopolis:naughty_mobs', 'minecraft:ender_pearl')
event.add('seaopolis:naughty_mobs', 'minecraft:slime_ball')

//libvulpes

event.remove('forge:plates/iron', 'libvulpes:plateiron')
event.remove('forge:plates/gold', 'libvulpes:plategold')
event.remove('forge:plates/tin', 'libvulpes:platetin')
event.remove('forge:plates/copper', 'libvulpes:platecopper')

//Mystical

event.add('matc:inferium', 'matc:prudentium_crystal')
event.add('matc:inferium', 'matc:tertium_crystal')
event.add('matc:inferium', 'matc:imperium_crystal')
event.add('matc:inferium', 'matc:supremium_crystal')

event.add('matc:prudentium', 'matc:tertium_crystal')
event.add('matc:prudentium', 'matc:imperium_crystal')
event.add('matc:prudentium', 'matc:supremium_crystal')

event.add('matc:tertium', 'matc:imperium_crystal')
event.add('matc:tertium', 'matc:supremium_crystal')

event.add('matc:imperium', 'matc:supremium_crystal')
})

//Block Tags

events.listen('block.tags', event => {

//libvulpes

//event.remove('forge:storage_blocks/tin', 'libvulpes:blocktin')


})


events.listen('fluid.tags', event => {

//Fluid Tags

//event.add('minecraft:water', 'exnihilosequentia:witchwater')
//event.add('minecraft:water', 'exnihilosequentia:witchwater_flow')

})
