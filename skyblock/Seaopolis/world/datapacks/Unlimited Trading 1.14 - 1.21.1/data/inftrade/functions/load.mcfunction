schedule function inftrade:load 2s replace
execute as @e[type=minecraft:villager] run data modify entity @s Offers.Recipes[].maxUses set value 999999
execute as @e[type=minecraft:wandering_trader] run data modify entity @s Offers.Recipes[].maxUses set value 999999