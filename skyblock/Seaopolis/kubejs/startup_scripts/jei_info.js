events.listen('jei.information', function (event) {

// Recipe JEI
    
event.add('minecraft:scute', 'Drops off of turtles when fully grown. Can also kill baby turtles to get them. But why')
event.add('bhc:red_heart', 'Drops off of friendly mobs')
event.add('bhc:yellow_heart', 'Drops off all hostile mobs')
event.add('bhc:green_heart', 'Drops off of hostile mobs in the nether')
event.add('bhc:blue_heart', 'Drops off of boss mobs like the ender dragon and the wither')

})
    
// Tool Tip JEI
    
onEvent('item.tooltip', event => {
    
event.add('kubejs:iron_golem', [Text.of('Summons a Iron Golem to help you fight!')])
event.add('industrialforegoing:block_breaker', [Text.of('Must be allied if placed in a ftb chunks protected area').red()])
event.add('industrialforegoing:block_placer', [Text.of('Must be allied if placed in a ftb chunks protected area').red()])
event.add('kubejs:cooked_apple', [Text.of('Freshly cooked apple, Yum').red()])
event.add('bhc:red_heart', [Text.of('Drops off of friendly mobs')])
event.add('bhc:yellow_heart', [Text.of('Drops off all hostile mobs')])
event.add('bhc:green_heart', [Text.of('Drops off of hostile mobs in the nether')])
event.add('bhc:blue_heart', [Text.of('Drops off of boss mobs like the ender dragon and the wither')])
    
})
    
//Hide JEI Items
    
onEvent('jei.hide.items', event => {
    
event.hide('thermal:copper_ore')
event.hide('thermal:tin_ore')
event.hide('mekanism:dust_sulfur')
event.hide('industrialforegoing:tinydryrubber')
event.hide('libvulpes:plateiron')
event.hide('libvulpes:plategold')
event.hide('libvulpes:platecopper')
event.hide('libvulpes:platetin')
event.hide('mysticalagriculture:brass_seeds')
event.hide('mysticalagriculture:mithril_seeds')
event.hide('mysticalagriculture:tungsten_seeds')
event.hide('mysticalagriculture:chrome_seeds')
  
})
    
    