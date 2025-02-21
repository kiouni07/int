//priority: 90

onEvent('recipes', e => {

    //(unifiedname, ingot, dust, block, nugget, tinkers_ingot_cool_time, plate)
    function unifyTheWorld(name, ingot, dust, block, nugget, coolTime, plate, gear){
        
        e.replaceOutput(`#forge:ingots/${name}`, ingot)
        e.replaceOutput(`#forge:dusts/${name}`, dust)
        e.replaceOutput(`#forge:nuggets/${name}`, nugget)
        e.replaceOutput(`#forge:storage_blocks/${name}`, block)
    
        e.replaceInput(`#forge:nuggets/${name}`, nugget)
        e.replaceInput(`#forge:dusts/${name}`, dust)
        e.replaceInput(`#forge:ingots/${name}`, ingot)
        e.replaceInput(`#forge:storage_blocks/${name}`, block)
    
    //Blocks-Ingots-Nuggets
    
    if (!Ingredient.of(block).empty) {
    e.shaped(block, ['III','III','III'], {I: ingot,})
    e.shapeless(`9x ${ingot}`, block)
    }
    
    if (!Ingredient.of(nugget).empty) {
    e.shaped(ingot, ['III','III','III'], {I: nugget,})
    e.shapeless(`9x ${nugget}`, ingot)
    }
    
    e.remove({type: 'minecraft:crafting_shaped', output: block})
    e.remove({type: 'minecraft:crafting_shaped', output: ingot})
    e.remove({type: 'minecraft:crafting_shaped', output: nugget})
    e.remove({type: 'minecraft:crafting_shapeless', output: block})
    e.remove({type: 'minecraft:crafting_shapeless', output: ingot})
    e.remove({type: 'minecraft:crafting_shapeless', output: nugget})
    
    //Tinkers Fix (Blocks, Ingots, Nuggets)

if (!Ingredient.of(block).empty) {
    e.custom({type: 'tconstruct:casting_basin', fluid : { name : `tconstruct:molten_${name}`, amount : 1296}, result : {item: block}, cooling_time : coolTime*3}).id(`tconstruct:smeltery/casting/metal/${name}/block`)
    e.custom({type: 'tconstruct:casting_table',"cast": {tag: 'tconstruct:casts/single_use/ingot'}, cast_consumed : true, fluid: {name : `tconstruct:molten_${name}`, amount : 144}, result: ingot ,cooling_time: coolTime}).id(`tconstruct:smeltery/casting/metal/${name}/ingot_sand_cast`)
    e.custom({type: 'tconstruct:casting_table',"cast": {tag: 'tconstruct:casts/multi_use/ingot'}, fluid: {name : `tconstruct:molten_${name}`, amount : 144}, result: ingot ,cooling_time: coolTime}).id(`tconstruct:smeltery/casting/metal/${name}/ingot_gold_cast`)
    e.custom({type: 'tconstruct:casting_table',"cast": {tag: 'tconstruct:casts/single_use/nugget'}, cast_consumed : true, fluid: {name : `tconstruct:molten_${name}`, amount : 16}, result: nugget ,cooling_time: coolTime/3}).id(`tconstruct:smeltery/casting/metal/${name}/nugget_sand_cast`)
    e.custom({type: 'tconstruct:casting_table',"cast": {tag: 'tconstruct:casts/multi_use/nugget'}, fluid: {name : `tconstruct:molten_${name}`, amount : 16}, result: nugget ,cooling_time: coolTime/3}).id(`tconstruct:smeltery/casting/metal/${name}/nugget_gold_cast`)
    }

    //Thermal Fix

if (!Ingredient.of(block).empty) {
    e.remove({id: `thermal:machine/centrifuge/centrifuge_${name}_dust`})
    e.remove({id: `thermal:machine/smelter/smelter_${name}_dust`})
    e.remove({id: `thermal:machine/smelter/smelter_${name}_ore`})
    e.recipes.thermal.pulverizer(dust, ingot).id(`thermal:machine/pulverizer/pulverizer_${name}_ingot_to_dust`)
    e.recipes.thermal.press(`9x ${ingot}`, [block, 'thermal:press_unpacking_die']).id(`thermal:machine/press/unpacking/press_${name}_unpacking`)
    e.recipes.thermal.press(block, [`9x ${ingot}`, 'thermal:press_packing_3x3_die']).id(`thermal:machine/press/packing3x3/press_${name}_packing`)
    e.recipes.thermal.chiller(ingot, [Fluid.of(`tconstruct:molten_${name}`, 144), '#tconstruct:casts/multi_use/ingot']).energy(5000).id(`thermal:compat/tconstruct/chiller_tconstruct_${name}_ingot`)
    }

    //Plate Unification

if (!Ingredient.of(plate).empty) {
    e.recipes.thermal.press(plate, ingot).id(`thermal:machine/press/press_${name}_ingot_to_plate`)
    }

    //Gear Unification

if (!Ingredient.of(gear).empty) {
    e.remove({id: `thermal:parts/${name}_gear`})
    e.recipes.thermal.press(gear, [`4x ${ingot}`, '#tconstruct:casts/multi_use/gear']).id(`thermal:machine/press/press_${name}_ingot_to_gear`)
    }

    //Dusts to Ingots

if (!Ingredient.of(dust).empty) {
    e.recipes.mekanism.smelting(ingot, dust).id(`seaopolis:smelting_${name}_mekanism`)
    e.recipes.thermal.furnace(ingot, dust).id(`seaopolis:smelting_${name}_thermal`)
    }
    
    
    }

//Has Ores

unifyTheWorld('gold', 'minecraft:gold_ingot', 'mekanism:dust_gold', 'minecraft:gold_block', 'minecraft:gold_nugget', 57, 'thermal:gold_plate', 'thermal:gold_gear')
unifyTheWorld('iron', 'minecraft:iron_ingot', 'mekanism:dust_iron', 'minecraft:iron_block', 'minecraft:iron_nugget', 60, 'thermal:iron_plate', 'thermal:iron_gear')
unifyTheWorld('tin', 'mekanism:ingot_tin', 'mekanism:dust_tin', 'mekanism:block_tin', 'mekanism:nugget_tin', 39,'thermal:tin_plate', 'thermal:tin_gear')
unifyTheWorld('copper', 'mekanism:ingot_copper', 'mekanism:dust_copper', 'mekanism:block_copper', 'mekanism:nugget_copper', 50, 'thermal:copper_plate', 'thermal:copper_gear')
unifyTheWorld('lead', 'mekanism:ingot_lead', 'mekanism:dust_lead', 'mekanism:block_lead', 'mekanism:nugget_lead', 50, 'thermal:lead_plate', 'thermal:lead_gear')
unifyTheWorld('osmium', 'mekanism:ingot_osmium', 'mekanism:dust_osmium', 'mekanism:block_osmium', 'mekanism:nugget_osmium', 66, '', '') //missing plate and gear
unifyTheWorld('silver', 'thermal:silver_ingot', 'thermal:silver_dust', 'thermal:silver_block', 'thermal:silver_nugget', 60, 'thermal:silver_plate', 'thermal:silver_gear')
unifyTheWorld('nickel', 'thermal:nickel_ingot', 'thermal:nickel_dust', 'thermal:nickel_block', 'thermal:nickel_nugget', 65, 'thermal:nickel_plate', 'thermal:nickel_gear')
unifyTheWorld('aluminum', 'libvulpes:ingotaluminum', 'libvulpes:dustaluminum', 'libvulpes:blockaluminum', 'libvulpes:nuggetaluminum', 43, 'libvulpes:platealuminum')
unifyTheWorld('zinc', 'exnihilosequentia:ingot_zinc', 'jaopca:dusts.zinc', 'jaopca:storage_blocks.zinc', '', 47, '', '')
unifyTheWorld('titanium', 'libvulpes:ingottitanium', 'libvulpes:dusttitanium', 'libvulpes:blocktitanium', 'libvulpes:nuggettitanium', '', 'libvulpes:platetitanium', 'libvulpes:geartitanium')

unifyTheWorld('iridium', 'libvulpes:ingotiridium', 'libvulpes:dustiridium', 'libvulpes:blockiridium', 'libvulpes:nuggetiridium', '', '', '')
unifyTheWorld('silicon', 'libvulpes:ingotsilicon', 'libvulpes:dustsilicon', 'jaopca:storage_blocks.silicon', 'libvulpes:nuggetsilicon', '', 'libvulpes:platesilicon', '')


//Alloys

unifyTheWorld('bronze', 'mekanism:ingot_bronze', 'mekanism:dust_bronze', 'mekanism:block_bronze', 'mekanism:nugget_bronze', 57, 'thermal:bronze_plate', 'thermal:bronze_gear')
unifyTheWorld('steel', 'mekanism:ingot_steel', 'mekanism:dust_steel', 'mekanism:block_steel', 'mekanism:nugget_steel', 65, 'libvulpes:platesteel')
unifyTheWorld('invar', 'thermal:invar_ingot', 'thermal:invar_dust', 'thermal:invar_block', 'thermal:invar_nugget', 63, 'thermal:invar_plate', 'thermal:invar_gear')
unifyTheWorld('constantan', 'thermal:constantan_ingot', 'thermal:constantan_dust', 'thermal:constantan_block', 'thermal:constantan_nugget', 64, 'thermal:constantan_plate', 'thermal:constantan_gear')
unifyTheWorld('electrum', 'thermal:electrum_ingot', 'thermal:electrum_dust', 'thermal:electrum_block', 'thermal:electrum_nugget', 59, 'thermal:electrum_plate', 'thermal:electrum_gear')
unifyTheWorld('signalum', 'thermal:signalum_ingot', 'thermal:signalum_dust', 'thermal:signalum_block', 'thermal:signalum_nugget', '', 'thermal:signalum_plate', 'thermal:signalum_gear')
unifyTheWorld('lumium', 'thermal:lumium_ingot', 'thermal:lumium_dust', 'thermal:lumium_block', 'thermal:lumium_nugget', '', 'thermal:lumium_plate', 'thermal:lumium_gear')
unifyTheWorld('ruby','thermal:ruby', 'thermal:ruby_dust', 'thermal:ruby_block', '', '', '', 'thermal:ruby_gear')
unifyTheWorld('sapphire','thermal:sapphire', 'thermal:sapphire_dust', 'thermal:sapphire_block', '', '', '', 'thermal:sapphire_gear')

})



//Pedestals

onEvent('recipes', e => {
function pedestals(metal, result){
    e.replaceOutput({id: 'pedestals:pedestal_crushing/dust'+metal+''}, 'pedestals:dust'+metal+'', result)}

pedestals('copper', 'mekanism:dust_copper')
pedestals('tin', 'mekanism:dust_tin')
pedestals('osmium', 'mekanism:dust_osmium')
pedestals('uranium', 'mekanism:dust_uranium')
pedestals('lead', 'mekanism:dust_lead')
pedestals('bronze', 'mekanism:dust_bronze')
pedestals('silver', 'thermal:silver_dust')
pedestals('electrum', 'thermal:electrum_dust')
pedestals('nickel', 'thermal:nickel_dust')
pedestals('aluminum', 'thermal:nickel_dust')
pedestals('iron', 'mekanism:dust_iron')
pedestals('gold', 'mekanism:dust_gold')
})

//Unity

events.listen('item.tags', event => {

event.remove('forge:plates/iron', 'boss_tools:iron_plate')
event.remove('forge:gears/iron', 'titanium:iron_gear')
event.remove('forge:gears/gold', 'titanium:gold_gear')
event.remove('forge:gears/diamond', 'titanium:diamond_gear')

})
//Remove Unwanted in JEI