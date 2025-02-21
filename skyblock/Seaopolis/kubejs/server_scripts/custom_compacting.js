events.listen('recipes', event => {

event.custom(  {"type": "compactcrafting:miniaturization","recipeSize": 5,"layers":[
{"type": "compactcrafting:mixed", "pattern": [
["S", "S", "S", "S", "S"], ["S", "S", "S", "S", "S"], ["S", "S", "S", "S", "S"], ["S", "S", "S", "S", "S"], ["S", "S", "S", "S", "S"]]},
{"type": "compactcrafting:mixed","pattern": 
[["S", "S", "S", "S", "S"],["S", "C", "C", "C", "S"],["S", "C", "C", "C", "S"],["S", "C", "C", "C", "S"],["S", "S", "S", "S", "S"]]},
{"type": "compactcrafting:mixed","pattern": 
[["S", "S", "S", "S", "S"],["S", "C", "C", "C", "S"],["S", "C", "D", "C", "S"],["S", "C", "C", "C", "S"],["S", "S", "S", "S", "S"]]},
{"type": "compactcrafting:mixed","pattern": 
[["S", "S", "S", "S", "S"],["S", "C", "C", "C", "S"],["S", "C", "C", "C", "S"],["S", "C", "C", "C", "S"],["S", "S", "S", "S", "S"]]},
{"type": "compactcrafting:mixed","pattern": [
["S", "S", "S", "S", "S"],["S", "S", "S", "S", "S"],["S", "S", "S", "S", "S"],["S", "S", "S", "S", "S"],["S", "S", "S", "S", "S"]]}],
"catalyst": {"id": 'compactmachines:machine_tiny',"Count": 1},
"components": {"S": {"type": "compactcrafting:block","block": 'excompressum:compressed_cobblestone'}, "C": {"type": "compactcrafting:block","block": 'compactmachines:wall'}, "D": {"type": "compactcrafting:block","block": 'solarcooker:shining_diamond_block'}},
"outputs": [{"id": 'cagedmobs:mobcage',"Count": 1}]})

//Giant Machine

event.custom(  {"type": "compactcrafting:miniaturization","recipeSize": 5,"layers":[
{"type": "compactcrafting:mixed", "pattern": [
["S", "S", "S", "S", "S"], ["S", "S", "S", "S", "S"], ["S", "S", "S", "S", "S"], ["S", "S", "S", "S", "S"], ["S", "S", "S", "S", "S"]]},
{"type": "compactcrafting:mixed","pattern": 
[["S", "S", "S", "S", "S"],["S", "C", "C", "C", "S"],["S", "C", "C", "C", "S"],["S", "C", "C", "C", "S"],["S", "S", "S", "S", "S"]]},
{"type": "compactcrafting:mixed","pattern": 
[["S", "S", "S", "S", "S"],["S", "C", "C", "C", "S"],["S", "C", "D", "C", "S"],["S", "C", "C", "C", "S"],["S", "S", "S", "S", "S"]]},
{"type": "compactcrafting:mixed","pattern": 
[["S", "S", "S", "S", "S"],["S", "C", "C", "C", "S"],["S", "C", "C", "C", "S"],["S", "C", "C", "C", "S"],["S", "S", "S", "S", "S"]]},
{"type": "compactcrafting:mixed","pattern": [
["S", "S", "S", "S", "S"],["S", "S", "S", "S", "S"],["S", "S", "S", "S", "S"],["S", "S", "S", "S", "S"],["S", "S", "S", "S", "S"]]}],
"catalyst": {"id": 'minecraft:ender_pearl',"Count": 1},
"components": {"S": {"type": "compactcrafting:block","block": 'compactmachines:wall'}, "C": {"type": "compactcrafting:block","block": 'excompressum:compressed_cobblestone'}, "D": {"type": "compactcrafting:block","block": 'minecraft:diamond_block'}},
"outputs": [{"id": 'compactmachines:machine_giant',"Count": 1}]})

//Max Machine

event.custom(  {"type": "compactcrafting:miniaturization","recipeSize": 5,"layers":[
{"type": "compactcrafting:mixed", "pattern": [
["S", "S", "S", "S", "S"], ["S", "S", "S", "S", "S"], ["S", "S", "S", "S", "S"], ["S", "S", "S", "S", "S"], ["S", "S", "S", "S", "S"]]},
{"type": "compactcrafting:mixed","pattern": 
[["S", "S", "S", "S", "S"],["S", "C", "C", "C", "S"],["S", "C", "C", "C", "S"],["S", "C", "C", "C", "S"],["S", "S", "S", "S", "S"]]},
{"type": "compactcrafting:mixed","pattern": 
[["S", "S", "S", "S", "S"],["S", "C", "C", "C", "S"],["S", "C", "D", "C", "S"],["S", "C", "C", "C", "S"],["S", "S", "S", "S", "S"]]},
{"type": "compactcrafting:mixed","pattern": 
[["S", "S", "S", "S", "S"],["S", "C", "C", "C", "S"],["S", "C", "C", "C", "S"],["S", "C", "C", "C", "S"],["S", "S", "S", "S", "S"]]},
{"type": "compactcrafting:mixed","pattern": [
["S", "S", "S", "S", "S"],["S", "S", "S", "S", "S"],["S", "S", "S", "S", "S"],["S", "S", "S", "S", "S"],["S", "S", "S", "S", "S"]]}],
"catalyst": {"id": 'minecraft:ender_pearl',"Count": 1},
"components": {"S": {"type": "compactcrafting:block","block": 'compactmachines:wall'}, "C": {"type": "compactcrafting:block","block": 'excompressum:compressed_cobblestone'}, "D": {"type": "compactcrafting:block","block": 'minecraft:emerald_block'}},
"outputs": [{"id": 'compactmachines:machine_maximum',"Count": 1}]})

//Enchanted Apple


event.custom(  {"type": "compactcrafting:miniaturization","recipeSize": 1,"layers":[
    {"type": "compactcrafting:mixed","pattern": [
    ["G", "G", "G"], ["G", "A", "G"], ["G", "G", "G"]]}],
    "catalyst": {"id": 'mysticalagriculture:inferium_essence',"Count": 1},
    "components": {"G": {"type": "compactcrafting:block","block": 'minecraft:gold_block'}, "A": {"type": "compactcrafting:block","block": 'quark:apple_crate'}},
    "outputs": [{"id": 'minecraft:enchanted_golden_apple',"Count": 1}]})

event.custom(  {"type": "compactcrafting:miniaturization","recipeSize": 1,"layers":[
    {"type": "compactcrafting:mixed","pattern": [
    ["G", "G", "G"], ["G", "A", "G"], ["G", "G", "G"]]}],
    "catalyst": {"id": 'mysticalagriculture:inferium_essence',"Count": 1},
    "components": {"G": {"type": "compactcrafting:block","block": 'minecraft:gold_block'}, "A": {"type": "compactcrafting:block","block": 'thermal:apple_block'}},
    "outputs": [{"id": 'minecraft:enchanted_golden_apple',"Count": 9}]})


//Pedestals

event.custom(  {"type": "compactcrafting:miniaturization","recipeSize": 3,"layers":[
    {"type": "compactcrafting:mixed", "pattern": [
    ["Z", "S", "Z"], ["S", "G", "S"], ["Z", "S", "Z"]]},
    {"type": "compactcrafting:mixed","pattern": 
    [["S", "G", "S"], ["G", "G", "G"], ["S", "G", "S"]]},
    {"type": "compactcrafting:mixed","pattern": [
    ["Z", "S", "Z"], ["S", "G", "S"], ["Z", "S", "Z"]]}],
    "catalyst": {"id": 'minecraft:ender_pearl',"Count": 1},
    "components": {"S": {"type": "compactcrafting:block","block": 'mekanism:block_uranium'}, "G": {"type": "compactcrafting:block","block": 'minecraft:gold_block'}, "Z": {"type": "compactcrafting:block","block": 'jaopca:storage_blocks.zinc'}},
    "outputs": [{"id": 'pedestals:coin/default',"Count": 1}]})

})