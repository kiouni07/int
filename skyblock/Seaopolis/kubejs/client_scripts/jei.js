onEvent('jei.add.items', e => {
	e.add([
    'mekanism:dust_sulfur',
    e.add(['thermal:sapphire_block', 'thermal:sapphire_ore', 'thermal:sapphire_dust', 'thermal:sapphire_gear', 'thermal:sapphire', 'thermal:ruby_ore', 'thermal:ruby', 'thermal:ruby_gear', 'thermal:ruby_dust', 'thermal:ruby_block'])
    ]);
});

onEvent('jei.hide.items', event => {
    event.hide('@advancedrocketry')
  })

onEvent(['jei.hide.items', 'rei.hide.items'], event => {
    event.hide('skyblockbuilder:structure_saver')
    event.hide('thermal:lead_dust')
    event.hide('advancedrocketry:rollingmachine')
    event.hide('thermal:sulfur_dust')
    event.hide(['occultism:copper_ore', 'occultism:copper_nugget', 'occultism:copper_block', 'occultism:copper_ingot'])
    event.hide(['exnihilosequentia:ingot_copper', 'mekanism:copper_ore', 'thermal:copper_dust', 'thermal:copper_nugget', 'thermal:copper_ingot', 'thermal:copper_block', 'libvulpes:dustcopper', 'libvulpes:ingotcopper', 'libvulpes:nuggetcopper', 'libvulpes:blockcopper', 'libvulpes:orecopper', 'pedestals:dustcopper', 'better_diving:copper_chunk', 'better_diving:copper_ingot', 'better_diving:copper_block'])
    event.hide(['boss_tools:steel_ingot', 'libvulpes:gearsteel', 'libvulpes:blocksteel', 'libvulpes:nuggetsteel', 'libvulpes:ingotsteel', 'libvulpes:duststeel'])
    event.hide(['thermal:tin_block', 'thermal:tin_ingot', 'thermal:tin_nugget', 'thermal:tin_dust', 'exnihilosequentia:ingot_tin', 'libvulpes:oretin', 'libvulpes:blocktin', 'libvulpes:nuggettin', 'libvulpes:ingottin', 'libvulpes:dusttin'])
    event.hide(['mekanism:osmium_ore', 'pedestals:dustosmium', 'exnihilosequentia:ingot_uranium', 'pedestals:dusturanium', 'mekanism:uranium_ore'])
    event.hide(['exnihilosequentia:ingot_lead', 'thermal:lead_nugget', 'thermal:lead_ingot', 'thermal:lead_block', 'mekanism:lead_ore', 'thermal:lead_ore', 'better_diving:lead_block', 'better_diving:lead_ingot', 'better_diving:lead_chunk'])
    event.hide(['thermal:bronze_ingot', 'thermal:bronze_block', 'thermal:bronze_nugget', 'thermal:bronze_dust'])
    event.hide(['exnihilosequentia:ingot_silver', 'thermal:silver_ore', 'better_diving:silver_chunk', 'better_diving:silver_ingot', 'better_diving:silver_block'])
    event.hide('thermal:nickel_ingot')
    event.hide(/chiselsandbits:block_bit/)
    event.hide(Item.of('ftblibrary:fluid_container').ignoreNBT())
    event.hide(['exnihilosequentia:ingot_aluminum', 'libvulpes:orealuminum'])
    event.hide(['minecraft:iron_ore', 'thermal:iron_dust', 'boss_tools:mercury_iron_ore', 'boss_tools:mars_iron_ore', 'boss_tools:moon_iron_ore', 'better_diving:iron_chunk', 'boss_tools:iron_plate', 'libvulpes:dustiron', 'titanium:iron_gear'])
    event.hide(['better_diving:gold_chunk', 'libvulpes:dustgold', 'titanium:gold_gear', 'thermal:gold_dust', 'minecraft:gold_ore', 'minecraft:nether_gold_ore'])
    event.hide(['pedestals:dustiron', 'pedestals:dustgold', 'pedestals:dustlead', 'pedestals:dusttin', 'pedestals:dustsilver', 'pedestals:dustaluminum', 'pedestals:dustnickel'])
    event.hide(['better_diving:titanium_ingot', 'tconstruct:copper_ingot', 'minecraft:bone_meal'])
    event.hide(['better_diving:titanium_ingot', 'tconstruct:copper_ingot', 'better_diving:diamond_chunk', 'bigreactors:yellorium_ingot', 'bigreactors:yellorium_dust', 'bigreactors:yellorium_block', 'bigreactors:yellorite_ore', 'exnihilosequentia:dust_obsidian', 'thermal:quartz_dust', 'better_diving:emerald_chunk', 'thermal:emerald_dust', 'thermal:diamond_dust', 'titanium:diamond_gear'])

})
