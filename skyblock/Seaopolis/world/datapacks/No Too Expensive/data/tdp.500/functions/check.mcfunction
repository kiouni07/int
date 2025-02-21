
# I hope you enjoyed what I made.
# Scripter's output isn't really friendly to dissect, 
# so feel free to ask me if you need help!

# Also, support me here for more datapacks:
# patreon.com/thediamondplayables

execute as @e[type=minecraft:item,tag=!tdp.500.used,nbt={OnGround:1b},limit=200] at @s run function tdp.500:check_3
schedule function tdp.500:check 1t replace
