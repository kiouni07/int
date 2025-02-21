
# I hope you enjoyed what I made.
# Scripter's output isn't really friendly to dissect, 
# so feel free to ask me if you need help!

# Also, support me here for more datapacks:
# patreon.com/thediamondplayables

data remove storage tdp:500 data
schedule clear tdp.500:check
tellraw @a {"type":"translatable","translate":"%s removed.\nThank you for using this datapack feature.","with":[{"text":"No Too Expensive","color":"green","hoverEvent":{"action":"show_text","contents":{"text":"Removes Too Expensive!","color":"yellow"}}}],"color":"yellow"}
tellraw @s {"type":"text","text":"Finish your removal by deleting all related files.","color":"#808080"}
