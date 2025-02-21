
# I hope you enjoyed what I made.
# Scripter's output isn't really friendly to dissect, 
# so feel free to ask me if you need help!

# Also, support me here for more datapacks:
# patreon.com/thediamondplayables

gamerule maxCommandForkCount 2147483647
gamerule maxCommandChainLength 2147483647
function tdp.500:check
tellraw @a {"type":"translatable","translate":"%s installed. Enjoy!","color":"yellow","with":[{"text":"No Too Expensive","color":"green","hoverEvent":{"action":"show_text","contents":{"text":"Removes Too Expensive!","color":"yellow"}}}]}
data modify storage tdp:500 data.pf set value 501
