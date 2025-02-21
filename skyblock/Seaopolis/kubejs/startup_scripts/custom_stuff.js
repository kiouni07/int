// priority: 0

console.info('Hello, World! (You will only see this line once in console, during startup)')

// New Items
events.listen('item.registry', event => {

event.create('sea_bucks').displayName('Sea Bucks')
event.create('ender_ingot').displayName('Smeltery Ender Ingot')
event.create('dust').displayName('Dust')
event.create('star').displayName('Star')
event.create('wood_gear').displayName('Wooden Gear')
event.create('wood_plate').displayName('Wooden Plate')
event.create('cobalt_ore_chunk').displayName('Cobalt Ore Chunk')
event.create('cobalt_ore_piece').displayName('Cobalt Ore Piece')
event.create('iron_golem').displayName('Golem Summoner').maxStackSize(1)
event.create('water_bowl').food(food => {food.hunger(0).saturation(0.1).effect('minecraft:water_breathing', 500, 0, 1.0).eaten(e => {console.log(e.player + " ate " + e.item); e.server.runCommandSilent(`give ${e.player} minecraft:bowl`)})}).displayName('Water Bowl').maxStackSize(8)
event.create('leafy_stew').food(food => {food.hunger(2).saturation(3).eaten(e => {console.log(e.player + " ate " + e.item); e.server.runCommandSilent(`give ${e.player} minecraft:bowl`)})}).displayName('Leafy Stew').maxStackSize(8)
event.create('pumpkin_juice').food(food => {food.hunger(6).saturation(1).eaten(e => {console.log(e.player + " ate " + e.item); e.server.runCommandSilent(`give ${e.player} minecraft:glass_bottle`)})}).displayName('Pumpkin Juice').maxStackSize(8)
event.create('melon_juice').food(food => {food.hunger(6).saturation(1).eaten(e => {console.log(e.player + " ate " + e.item); e.server.runCommandSilent(`give ${e.player} minecraft:glass_bottle`)})}).displayName('Melon Juice').maxStackSize(8)
event.create('seabuck_coffee').food(food => {food.hunger(2).saturation(2).effect('minecraft:speed', 100, 9, 1.0).eaten(e => {console.log(e.player + " ate " + e.item); e.server.runCommandSilent(`give ${e.player} minecraft:glass_bottle`)})}).displayName('Seabucks Coffee').maxStackSize(8)
event.create('cooked_apple').food(food => {food.hunger(6).saturation(1)}).displayName('Cooked Apple').maxStackSize(64)

})

// New Blocks

events.listen('block.registry', event => {

//event.create('blank_ore').material('rock').hardness(1.0).displayName('Blank Ore').requiresTool(true)
event.create('compressed_red_sand').displayName('Compressed Red Sand').material('sand').requiresTool(false).hardness(1.0)
event.create('overworld_matter').displayName('Overworld Matter').material('dirt').requiresTool(false).hardness(1.0)
event.create('compressed_overworld_matter').displayName('Compressed Overworld Matter').material('dirt').requiresTool(false).hardness(1.5)
event.create('compressed_smooth_stone').displayName('Compressed Smooth Stone').material('stone').requiresTool(true).hardness(1.5)
event.create('map').displayName('Map Generator').material('wood').requiresTool(false).hardness(1.0)
event.create('map1').displayName('Map Generator (Ocean Monument)').material('wood').requiresTool(false).hardness(2.0)
event.create('map2').displayName('Map Generator (Stronghold)').material('wood').requiresTool(false).hardness(2.0)
event.create('map3').displayName('Map Generator (Warped Garden)').material('wood').requiresTool(false).hardness(2.0)
event.create('map4').displayName('Map Generator (Leviathan)').material('wood').requiresTool(false).hardness(2.0)
event.create('map5').displayName('Map Generator (Fortress)').material('wood').requiresTool(false).hardness(2.0)
event.create('map6').displayName('Map Generator (Bastion Remnant)').material('wood').requiresTool(false).hardness(2.0)
event.create('map7').displayName('Map Generator (End City)').material('wood').requiresTool(false).hardness(2.0)
event.create('map8').displayName('Map Generator (The Origin)').material('wood').requiresTool(false).hardness(2.0)
event.create('compressed_prismarine').displayName('Compressed Prismarine').material('stone').requiresTool(true).hardness(1.5)
event.create('blank_ore').displayName('Blank Ore').material('stone').requiresTool(true).hardness(2.0)
})

// New Fluids
events.listen('fluid.registry', event => {

event.create('organic_fluid').textureThick(0x86A774).displayName('Organic Water').bucketColor(0x86A774) 
event.create('molten_overworld_matter').textureThick(0x00FF21).displayName('Molten Overworld Matter').bucketColor(0x00FF21)
//event.create('weak_eroding_fluid').textureThick(0x392C4C).displayName('Weak Eroding Water').bucketColor(0x392C4C)
//event.create('weak_enriching_fluid').textureThick(0xD79113).displayName('Weak Enriching Water').bucketColor(0xD79113)
//event.create('strong_enriching_fluid').textureThick(0x808080).displayName('Strong Enriching Water').bucketColor(0x808080)
//event.create('nether_enriching_fluid').textureThick(0x580704).displayName('Nether Enriching Water').bucketColor(0x580704)
//event.create('end_enriching_fluid').textureThick(0xD9E0A4).displayName('End Enriching Water').bucketColor(0xD9E0A4)
//event.create('ore_fluid').textureThick(0x44DCFF).displayName('Ore Forming Water').bucketColor(0x44DCFF)
//event.create('creosote_fluid').textureThick(0x7F2300).displayName('Strong Creosote Oil').bucketColor(0x7F2300)

})

onEvent("item.modification", event => {
    //Modification happens here
  
    event.modify("minecraft:saddle", item => {
      item.setMaxStackSize(64);
    })
  })