
# I hope you enjoyed what I made.
# Scripter's output isn't really friendly to dissect, 
# so feel free to ask me if you need help!

# Also, support me here for more datapacks:
# patreon.com/thediamondplayables

data remove storage tdp:500.2 data
tellraw @a {"type":"translatable","translate":"%s removed.\nThank you for using this datapack feature.","with":[{"text":"Anvil Recipes","color":"green","hoverEvent":{"action":"show_text","contents":{"text":"Repair/Recycle Anvils!","color":"yellow"}}}],"color":"yellow"}
tellraw @s {"type":"text","text":"Finish your removal by deleting all related files.","color":"#808080"}
