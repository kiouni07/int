events.listen('recipes', event => {

//Botany Pots

//Soil

event.custom({"type":"botanypots:soil","input":{"item":"minecraft:netherrack"},"display":{"block":"minecraft:netherrack"},"categories":["netherrack"],"growthModifier":0})
event.custom({"type":"botanypots:soil","input":{"item":'tconstruct:earth_slime_dirt'},"display":{"block":'tconstruct:earth_slime_dirt'},"categories":["slime"],"growthModifier":0})
event.custom({"type":"botanypots:soil","input":{"item":'tconstruct:earth_slime_dirt'},"display":{"block":'tconstruct:sky_slime_dirt'},"categories":["slime"],"growthModifier":0})
event.custom({"type":"botanypots:soil","input":{"item":'tconstruct:earth_slime_dirt'},"display":{"block":'tconstruct:ichor_slime_dirt'},"categories":["slime"],"growthModifier":0})
event.custom({"type":"botanypots:soil","input":{"item":'tconstruct:earth_slime_dirt'},"display":{"block":'tconstruct:ender_slime_dirt'},"categories":["slime"],"growthModifier":0})

//Vanilla Trees

event.custom({"type":"botanypots:crop","seed":{"item":'minecraft:oak_sapling'},"categories":["dirt"],"growthTicks":1200,"display":{"block":"minecraft:oak_sapling"},"results":[{"chance":0.75,"output":{"item":"minecraft:oak_log"},"minRolls":1,"maxRolls":4},{"chance":0.50,"output":{"item":"minecraft:oak_leaves"},"minRolls":1,"maxRolls":8},{"chance":0.10,"output":{"item":"minecraft:oak_sapling"},"minRolls":1,"maxRolls":3},{"chance":0.10,"output":{"item":"minecraft:apple"},"minRolls":1,"maxRolls":1}]})
event.custom({"type":"botanypots:crop","seed":{"item":'minecraft:birch_sapling'},"categories":["dirt"],"growthTicks":1200,"display":{"block":"minecraft:birch_sapling"},"results":[{"chance":0.75,"output":{"item":"minecraft:birch_log"},"minRolls":1,"maxRolls":4},{"chance":0.50,"output":{"item":"minecraft:birch_leaves"},"minRolls":1,"maxRolls":8},{"chance":0.10,"output":{"item":"minecraft:birch_sapling"},"minRolls":1,"maxRolls":3}]})
event.custom({"type":"botanypots:crop","seed":{"item":'minecraft:jungle_sapling'},"categories":["dirt"],"growthTicks":1200,"display":{"block":"minecraft:jungle_sapling"},"results":[{"chance":0.75,"output":{"item":"minecraft:jungle_log"},"minRolls":1,"maxRolls":4},{"chance":0.50,"output":{"item":"minecraft:jungle_leaves"},"minRolls":1,"maxRolls":8},{"chance":0.10,"output":{"item":"minecraft:jungle_sapling"},"minRolls":1,"maxRolls":3}]})
event.custom({"type":"botanypots:crop","seed":{"item":'minecraft:acacia_sapling'},"categories":["dirt"],"growthTicks":1200,"display":{"block":"minecraft:acacia_sapling"},"results":[{"chance":0.75,"output":{"item":"minecraft:acacia_log"},"minRolls":1,"maxRolls":4},{"chance":0.50,"output":{"item":"minecraft:acacia_leaves"},"minRolls":1,"maxRolls":8},{"chance":0.10,"output":{"item":"minecraft:acacia_sapling"},"minRolls":1,"maxRolls":3}]})
event.custom({"type":"botanypots:crop","seed":{"item":'minecraft:spruce_sapling'},"categories":["dirt"],"growthTicks":1200,"display":{"block":"minecraft:spruce_sapling"},"results":[{"chance":0.75,"output":{"item":"minecraft:spruce_log"},"minRolls":1,"maxRolls":4},{"chance":0.50,"output":{"item":"minecraft:spruce_leaves"},"minRolls":1,"maxRolls":8},{"chance":0.10,"output":{"item":"minecraft:spruce_sapling"},"minRolls":1,"maxRolls":3}]})
event.custom({"type":"botanypots:crop","seed":{"item":'minecraft:dark_oak_sapling'},"categories":["dirt"],"growthTicks":1200,"display":{"block":"minecraft:dark_oak_sapling"},"results":[{"chance":0.75,"output":{"item":"minecraft:dark_oak_log"},"minRolls":1,"maxRolls":4},{"chance":0.50,"output":{"item":"minecraft:dark_oak_leaves"},"minRolls":1,"maxRolls":8},{"chance":0.10,"output":{"item":"minecraft:dark_oak_sapling"},"minRolls":1,"maxRolls":3},{"chance":0.10,"output":{"item":"minecraft:apple"},"minRolls":1,"maxRolls":1}]})

event.custom({"type":"botanypots:crop","seed":{"item":'minecraft:warped_fungus'},"categories":["netherrack"],"growthTicks":1200,"display":{"block":"minecraft:warped_fungus"},"results":[{"chance":0.75,"output":{"item":'minecraft:warped_stem'},"minRolls":1,"maxRolls":4},{"chance":0.05,"output":{"item":'minecraft:shroomlight'},"minRolls":1,"maxRolls":1},{"chance":0.10,"output":{"item":"minecraft:warped_fungus"},"minRolls":1,"maxRolls":3}]})
event.custom({"type":"botanypots:crop","seed":{"item":'minecraft:crimson_fungus'},"categories":["netherrack"],"growthTicks":1200,"display":{"block":"minecraft:crimson_fungus"},"results":[{"chance":0.75,"output":{"item":'minecraft:crimson_stem'},"minRolls":1,"maxRolls":4},{"chance":0.05,"output":{"item":'minecraft:shroomlight'},"minRolls":1,"maxRolls":1},{"chance":0.10,"output":{"item":"minecraft:crimson_fungus"},"minRolls":1,"maxRolls":3}]})


event.custom({"type":"botanypots:crop","seed":{"item":'upgrade_aquatic:river_sapling'},"categories":["dirt"],"growthTicks":1200,"display":{"block":'upgrade_aquatic:river_sapling'},"results":[{"chance":0.75,"output":{"item":'upgrade_aquatic:river_log'},"minRolls":1,"maxRolls":4},{"chance":0.50,"output":{"item":'upgrade_aquatic:river_leaves'},"minRolls":1,"maxRolls":8},{"chance":0.10,"output":{"item":'upgrade_aquatic:river_sapling'},"minRolls":1,"maxRolls":3}]})
event.custom({"type":"botanypots:soil","input":{"item":'minecraft:crimson_nylium'},"display":{"block":'minecraft:crimson_nylium'},"categories":["netherrack"],"growthModifier":+0.5})
event.custom({"type":"botanypots:soil","input":{"item":'minecraft:warped_nylium'},"display":{"block":'minecraft:warped_nylium'},"categories":["netherrack"],"growthModifier":+0.5})
//Sand crops

event.custom({"type":"botanypots:crop","seed":{"item":'minecraft:cactus'},"categories":["sand"],"growthTicks":1200,"display":{"block":"minecraft:cactus"},"results":[{"chance":1,"output":{"item":"minecraft:cactus"},"minRolls":1,"maxRolls":1}]})
event.custom({"type":"botanypots:crop","seed":{"item":'minecraft:sugar_cane'},"categories":["sand"],"growthTicks":1200,"display":{"block":'minecraft:sugar_cane'},"results":[{"chance":1,"output":{"item":'minecraft:sugar_cane'},"minRolls":1,"maxRolls":1}]})
event.custom({"type":"botanypots:crop","seed":{"item":'minecraft:bamboo'},"categories":["sand"],"growthTicks":1200,"display":{"block":'minecraft:bamboo'},"results":[{"chance":1,"output":{"item":'minecraft:bamboo'},"minRolls":1,"maxRolls":1}]})

//Slime Saplings

event.custom({"type":"botanypots:crop","seed":{"item":'tconstruct:earth_slime_sapling'},"categories":["slime"],"growthTicks":1200,"display":{"block":'tconstruct:earth_slime_sapling'},"results":[{"chance":0.75,"output":{"item":'tconstruct:greenheart_log'},"minRolls":1,"maxRolls":4},{"chance":0.50,"output":{"item":'tconstruct:earth_slime_leaves'},"minRolls":1,"maxRolls":8},{"chance":0.10,"output":{"item":'tconstruct:earth_slime_sapling'},"minRolls":1,"maxRolls":3},{"chance":0.10,"output":{"item":'minecraft:slime_ball'},"minRolls":1,"maxRolls":1}]})
event.custom({"type":"botanypots:crop","seed":{"item":'tconstruct:sky_slime_sapling'},"categories":["slime"],"growthTicks":1200,"display":{"block":'tconstruct:sky_slime_sapling'},"results":[{"chance":0.75,"output":{"item":'tconstruct:skyroot_log'},"minRolls":1,"maxRolls":4},{"chance":0.50,"output":{"item":'tconstruct:sky_slime_leaves'},"minRolls":1,"maxRolls":8},{"chance":0.10,"output":{"item":'tconstruct:sky_slime_sapling'},"minRolls":1,"maxRolls":3},{"chance":0.10,"output":{"item":'tconstruct:sky_slime_ball'},"minRolls":1,"maxRolls":1}]})
event.custom({"type":"botanypots:crop","seed":{"item":'tconstruct:ender_slime_sapling'},"categories":["slime"],"growthTicks":1200,"display":{"block":'tconstruct:ender_slime_sapling'},"results":[{"chance":0.75,"output":{"item":'tconstruct:greenheart_log'},"minRolls":1,"maxRolls":4},{"chance":0.50,"output":{"item":'tconstruct:ender_slime_leaves'},"minRolls":1,"maxRolls":8},{"chance":0.10,"output":{"item":'tconstruct:ender_slime_sapling'},"minRolls":1,"maxRolls":3},{"chance":0.10,"output":{"item":'tconstruct:ender_slime_ball'},"minRolls":1,"maxRolls":1}]})
event.custom({"type":"botanypots:crop","seed":{"item":'tconstruct:blood_slime_sapling'},"categories":["slime"],"growthTicks":1200,"display":{"block":'tconstruct:blood_slime_sapling'},"results":[{"chance":0.75,"output":{"item":'tconstruct:bloodshroom_log'},"minRolls":1,"maxRolls":4},{"chance":0.50,"output":{"item":'tconstruct:blood_slime_leaves'},"minRolls":1,"maxRolls":8},{"chance":0.10,"output":{"item":'tconstruct:blood_slime_sapling'},"minRolls":1,"maxRolls":3},{"chance":0.10,"output":{"item":'tconstruct:ichor_slime_ball'},"minRolls":1,"maxRolls":1}]})



})
