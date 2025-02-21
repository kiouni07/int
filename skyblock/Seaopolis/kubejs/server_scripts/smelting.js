events.listen('recipes', event => {

//Smelting Recipes

event.smelting(Item.of('exnihilosequentia:crucible_fired', 1), 'exnihilosequentia:crucible_unfired')
event.smelting(Item.of('kubejs:cooked_apple', 1), 'minecraft:apple').xp(0.1)
event.smelting(Item.of('libvulpes:gemdilithium', 1), 'libvulpes:dustdilithium').xp(0.2)
event.smelting(Item.of('#forge:ingots/aluminum', 1), '#forge:dusts/aluminum').xp(0.1)
event.smelting(Item.of('libvulpes:ingottitanium', 1), '#forge:dusts/titanium').xp(0.1)
event.smelting(Item.of('#forge:ingots/iridium', 1), '#forge:dusts/iridium').xp(0.1)
event.smelting(Item.of('#forge:ingots/lithium', 1), '#forge:dusts/lithium').xp(0.1)

//Smoking

event.smoking(Item.of('kubejs:cooked_apple', 1), 'minecraft:apple').xp(0.1)
event.smoking(Item.of('upgrade_aquatic:river_log', 1), 'upgrade_aquatic:driftwood_log')
event.smoking(Item.of('upgrade_aquatic:river_planks', 1), 'upgrade_aquatic:driftwood_planks')

//Blasting

event.blasting(Item.of('minecraft:glass', 1), 'minecraft:sand').xp(0.1)
event.blasting(Item.of('tconstruct:clear_glass', 1), 'snad:snad').xp(0.1)
event.blasting(Item.of('tconstruct:clear_glass', 1), 'snad:red_snad').xp(0.1)
event.blasting(Item.of('minecraft:brick', 1), 'minecraft:clay_ball').xp(0.1)
event.blasting(Item.of('tconstruct:seared_brick', 1), 'tconstruct:grout').xp(0.3)

//Extended Crafting

event.custom({
    "type": "extendedcrafting:shaped_table",
    "pattern": [
      "BBGGGGGBB",
      "B       B",
      "G       G",
      "G   R   G",
      "G  RSR  G",
      "G   R   G",
      "G       G",
      "B       B",
      "BBGGGGGBB"
    ],
    "key": {
      "B": {
        "item": 'extendedcrafting:black_iron_ingot'
      },
      "G": {
        "item": 'minecraft:glass'
      },
      "S": {
        "item": 'industrialforegoing:machine_frame_supreme'
      },
      "R": {
        "item": 'refinedstorage:machine_casing'
      }
    },
    "result": {
      "item": 'extendedcrafting:frame'
    }
  })

event.custom({"type": "extendedcrafting:shaped_table","pattern": [
"ABCDEFGHI",
"JKLMNOPQR",
"STUVWXYZ!",
"?        ",
"         ",
"         ",
"         ",
"         ",
"         "],"key": {
"A": {"type": "forge:nbt","item": "extendedcrafting:singularity","count": 1,"nbt": "{Id:\"extendedcrafting:uranium\"}"},
"B": {"type": "forge:nbt","item": "extendedcrafting:singularity","count": 1,"nbt": "{Id:\"extendedcrafting:tin\"}"},
"C": {"type": "forge:nbt","item": "extendedcrafting:singularity","count": 1,"nbt": "{Id:\"extendedcrafting:steel\"}"},
"D": {"type": "forge:nbt","item": "extendedcrafting:singularity","count": 1,"nbt": "{Id:\"extendedcrafting:silver\"}"},
"E": {"type": "forge:nbt","item": "extendedcrafting:singularity","count": 1,"nbt": "{Id:\"extendedcrafting:redstone\"}"},
"F": {"type": "forge:nbt","item": "extendedcrafting:singularity","count": 1,"nbt": "{Id:\"extendedcrafting:platinum\"}"},
"G": {"type": "forge:nbt","item": "extendedcrafting:singularity","count": 1,"nbt": "{Id:\"extendedcrafting:nickel\"}"},
"H": {"type": "forge:nbt","item": "extendedcrafting:singularity","count": 1,"nbt": "{Id:\"extendedcrafting:lead\"}"},
"I": {"type": "forge:nbt","item": "extendedcrafting:singularity","count": 1,"nbt": "{Id:\"extendedcrafting:lapis_lazuli\"}"},
"J": {"type": "forge:nbt","item": "extendedcrafting:singularity","count": 1,"nbt": "{Id:\"extendedcrafting:aluminum\"}"},
"K": {"type": "forge:nbt","item": "extendedcrafting:singularity","count": 1,"nbt": "{Id:\"extendedcrafting:bronze\"}"},
"L": {"type": "forge:nbt","item": "extendedcrafting:singularity","count": 1,"nbt": "{Id:\"extendedcrafting:coal\"}"},
"M": {"type": "forge:nbt","item": "extendedcrafting:singularity","count": 1,"nbt": "{Id:\"extendedcrafting:copper\"}"},
"N": {"type": "forge:nbt","item": "extendedcrafting:singularity","count": 1,"nbt": "{Id:\"extendedcrafting:diamond\"}"},
"O": {"type": "forge:nbt","item": "extendedcrafting:singularity","count": 1,"nbt": "{Id:\"extendedcrafting:electrum\"}"},
"P": {"type": "forge:nbt","item": "extendedcrafting:singularity","count": 1,"nbt": "{Id:\"extendedcrafting:emerald\"}"},
"Q": {"type": "forge:nbt","item": "extendedcrafting:singularity","count": 1,"nbt": "{Id:\"extendedcrafting:glowstone\"}"},
"R": {"type": "forge:nbt","item": "extendedcrafting:singularity","count": 1,"nbt": "{Id:\"extendedcrafting:invar\"}"},
"S": {"type": "forge:nbt","item": "extendedcrafting:singularity","count": 1,"nbt": "{Id:\"extendedcrafting:iron\"}"},  
"T": {"type": "forge:nbt","item": "extendedcrafting:singularity","count": 1,"nbt": "{Id:\"extendedcrafting:dust\"}"},  
"U": {"type": "forge:nbt","item": "extendedcrafting:singularity","count": 1,"nbt": "{Id:\"extendedcrafting:biotite\"}"},  
"V": {"type": "forge:nbt","item": "extendedcrafting:singularity","count": 1,"nbt": "{Id:\"extendedcrafting:constantan\"}"},  
"W": {"type": "forge:nbt","item": "extendedcrafting:singularity","count": 1,"nbt": "{Id:\"extendedcrafting:mechanical\"}"},  
"X": {"type": "forge:nbt","item": "extendedcrafting:singularity","count": 1,"nbt": "{Id:\"extendedcrafting:mob\"}"},  
"Y": {"type": "forge:nbt","item": "extendedcrafting:singularity","count": 1,"nbt": "{Id:\"extendedcrafting:seed\"}"},  
"Z": {"type": "forge:nbt","item": "extendedcrafting:singularity","count": 1,"nbt": "{Id:\"extendedcrafting:zinc\"}"},  
"!": {"type": "forge:nbt","item": "extendedcrafting:singularity","count": 1,"nbt": "{Id:\"extendedcrafting:wood\"}"},  
"?": {"type": "forge:nbt","item": "extendedcrafting:singularity","count": 1,"nbt": "{Id:\"extendedcrafting:stone\"}"}, },
"result": {"item": 'extendedcrafting:ultimate_singularity'}})

event.custom({"type": "extendedcrafting:shaped_table","pattern": [
  "ABCDEFGHI",
  "JKLMNOPQR",
  "STUVWXYZ!",
  "?1       ",
  "         ",
  "         ",
  "         ",
  "         ",
  "         "],"key": {
  "A": {"type": "forge:nbt","item": 'extendedcrafting:crystaltine_ingot'},
  "B": {"type": "forge:nbt","item": 'extendedcrafting:enhanced_ender_ingot'},
  "C": {"type": "forge:nbt","item": 'extendedcrafting:ender_ingot'},
  "D": {"type": "forge:nbt","item": 'extendedcrafting:redstone_ingot'},
  "E": {"type": "forge:nbt","item": 'extendedcrafting:black_iron_ingot'},
  "F": {"type": "forge:nbt","item": 'mysticalagradditions:insanium_ingot'},
  "G": {"type": "forge:nbt","item": 'cagedmobs:star_infused_netherite_ingot'},
  "H": {"type": "forge:nbt","item": 'thermal:enderium_ingot'},
  "I": {"type": "forge:nbt","item": 'boss_tools:desh_ingot'},
  "J": {"type": "forge:nbt","item": 'boss_tools:silicon_ingot'},
  "K": {"type": "forge:nbt","item": 'bigreactors:cyanite_ingot'},
  "L": {"type": "forge:nbt","item": 'libvulpes:ingotiridium'},
  "M": {"type": "forge:nbt","item": 'twilightforest:fiery_ingot'},
  "N": {"type": "forge:nbt","item": 'twilightforest:knightmetal_ingot'},
  "O": {"type": "forge:nbt","item": 'twilightforest:ironwood_ingot'},
  "P": {"type": "forge:nbt","item": 'morered:red_alloy_ingot'},
  "Q": {"type": "forge:nbt","item": 'tconstruct:hepatizon_ingot'},
  "R": {"type": "forge:nbt","item": 'tconstruct:manyullyn_ingot'},
  "S": {"type": "forge:nbt","item": 'tconstruct:queens_slime_ingot'},  
  "T": {"type": "forge:nbt","item": 'tconstruct:pig_iron_ingot'},  
  "U": {"type": "forge:nbt","item": 'tconstruct:rose_gold_ingot'},  
  "V": {"type": "forge:nbt","item": 'tconstruct:slimesteel_ingot'},  
  "W": {"type": "forge:nbt","item": 'industrialforegoing:pink_slime_ingot'},  
  "X": {"type": "forge:nbt","item": 'thermal:signalum_ingot'},  
  "Y": {"type": "forge:nbt","item": 'thermal:lumium_ingot'},  
  "Z": {"type": "forge:nbt","item": 'exnihilosequentia:ingot_platinum'},  
  "!": {"type": "forge:nbt","item": 'mekanism:ingot_refined_obsidian'},  
  "1": {"type": "forge:nbt","item": 'better_diving:lithium_ingot'},  
  "?": {"type": "forge:nbt","item": 'mekanism:ingot_refined_glowstone'}, },
  "result": {"item": 'extendedcrafting:the_ultimate_ingot'}})


})