events.listen('recipes', event => {

event.custom({type: 'compactcrafting:miniaturization',recipeSize: 1,layers:[{type: 'compactcrafting:filled', component: 'R'},{type: 'compactcrafting:filled', component: 'I'}],
catalyst: {"id": 'fluxnetworks:flux_core', Count: 1},
components: 
{"R": {type: 'compactcrafting:block', block: 'minecraft:obsidian'},
"I": {type: 'compactcrafting:block', block: 'tconstruct:blazewood'}},
outputs: [{id: 'compactmachines:wall',Count: 4}]})

event.custom({
    "type": "compactcrafting:miniaturization",
    "recipeSize": 5,
    "layers": [
      {
        "type": "compactcrafting:filled",
        "component": "W"
      },
      {
        "type": "compactcrafting:filled",
        "component": "W"
      },
      {
        "type": "compactcrafting:filled",
        "component": "W"
      },
      {
        "type": "compactcrafting:filled",
        "component": "W"
      },
      {
        "type": "compactcrafting:filled",
        "component": "W"
      }
    ],
  
    "catalyst": {
      "id": "minecraft:ender_pearl",
      "Count": 1
    },
  
    "components": {
      "W": {
        "type": "compactcrafting:block",
        "block": "compactmachines:wall"
      }
    },
  
    "outputs": [
      {
        "id": "compactmachines:machine_large",
        "Count": 1
      }
    ]

  })



event.custom(
  {
    "type": "compactcrafting:miniaturization",
    "recipeSize": 3,
    "layers": [
      {
        "type": "compactcrafting:filled",
        "component": "W"
      },
      {
        "type": "compactcrafting:mixed",
        "pattern": [
          ["W", "W", "W"],
          ["W", "I", "W"],
          ["W", "W", "W"]
        ]
      },
      {
        "type": "compactcrafting:filled",
        "component": "W"
      }
    ],
  
    "catalyst": {
      "id": "minecraft:ender_pearl",
      "Count": 1
    },
  
    "components": {
      "W": {
        "type": "compactcrafting:block",
        "block": "compactmachines:wall"
      },
      "I": {
        "type": "compactcrafting:block",
        "block": "minecraft:iron_block"
      }
    },
  
    "outputs": [
      {
        "id": "compactmachines:machine_small",
        "Count": 1
      }
    ]
  }

)
event.custom(

  {
    "type": "compactcrafting:miniaturization",
    "recipeSize": 3,
    "layers": [
      {
        "type": "compactcrafting:filled",
        "component": "W"
      },
      {
        "type": "compactcrafting:filled",
        "component": "W"
      },
      {
        "type": "compactcrafting:filled",
        "component": "W"
      }
    ],
  
    "catalyst": {
      "id": "minecraft:ender_pearl",
      "Count": 1
    },
  
    "components": {
      "W": {
        "type": "compactcrafting:block",
        "block": "compactmachines:wall"
      }
    },
  
    "outputs": [
      {
        "id": "compactmachines:machine_tiny",
        "Count": 1
      }
    ]
  }
)

event.custom({
  "type": "compactcrafting:miniaturization",
  "recipeSize": 3,
  "layers": [
    {
      "type": "compactcrafting:filled",
      "component": "W"
    },
    {
      "type": "compactcrafting:mixed",
      "pattern": [
        ["W", "W", "W"],
        ["W", "G", "W"],
        ["W", "W", "W"]
      ]
    },
    {
      "type": "compactcrafting:filled",
      "component": "W"
    }
  ],

  "catalyst": {
    "id": "minecraft:ender_pearl",
    "Count": 1
  },

  "components": {
    "W": {
      "type": "compactcrafting:block",
      "block": "compactmachines:wall"
    },
    "G": {
      "type": "compactcrafting:block",
      "block": "minecraft:gold_block"
    }
  },

  "outputs": [
    {
      "id": "compactmachines:machine_normal",
      "Count": 1
    }
  ]
})

event.custom(
  {
    "type": "compactcrafting:miniaturization",
    "recipeSize": 3,
    "layers": [
      {
        "type": "compactcrafting:filled",
        "component": "W"
      },
      {
        "type": "compactcrafting:mixed",
        "pattern": [
          ["W", "W", "W"],
          ["W", "I", "W"],
          ["W", "W", "W"]
        ]
      },
      {
        "type": "compactcrafting:filled",
        "component": "W"
      }
    ],
  
    "catalyst": {
      "id": 'solarcooker:shining_diamond_block',
      "Count": 1
    },
  
    "components": {
      "W": {
        "type": "compactcrafting:block",
        "block": 'excompressum:compressed_cobblestone'
      },
      "I": {
        "type": "compactcrafting:block",
        "block": 'excompressum:auto_sieve'
      }
    },
  
    "outputs": [
      {
        "id": 'excompressum:auto_heavy_sieve',
        "Count": 1
      }
    ]
  })

event.custom(
  {
    "type": "compactcrafting:miniaturization",
    "recipeSize": 3,
    "layers": [
      {
        "type": "compactcrafting:filled",
        "component": "W"
      },
      {
        "type": "compactcrafting:mixed",
        "pattern": [
          ["W", "W", "W"],
          ["W", "I", "W"],
          ["W", "W", "W"]
        ]
      },
      {
        "type": "compactcrafting:filled",
        "component": "W"
      }
    ],
  
    "catalyst": {
      "id": 'solarcooker:shining_diamond_block',
      "Count": 1
    },
  
    "components": {
      "W": {
        "type": "compactcrafting:block",
        "block": 'excompressum:compressed_cobblestone'
      },
      "I": {
        "type": "compactcrafting:block",
        "block": 'excompressum:auto_hammer'
      }
    },
  
    "outputs": [
      {
        "id": 'excompressum:auto_compressed_hammer',
        "Count": 1
      }
    ]
  })

//Alt Compact Crafting


event.recipes.thermal.smelter('cagedmobs:mobcage', ['64x excompressum:compressed_cobblestone', '64x compactmachines:wall', 'solarcooker:shining_diamond_block']).energy(10000)
event.recipes.thermal.smelter('minecraft:enchanted_golden_apple', ['8x minecraft:gold_block', 'quark:apple_crate']).energy(10000)
event.recipes.thermal.smelter('minecraft:enchanted_golden_apple', ['8x minecraft:gold_block', 'thermal:apple_block']).energy(10000)
event.recipes.thermal.smelter('4x compactmachines:wall', ['tconstruct:blazewood', 'minecraft:obsidian']).energy(10000)
event.recipes.thermal.smelter('pedestals:coin/default', ['12x #forge:storage_blocks/uranium', '8x #forge:storage_blocks/zinc', '7x #forge:storage_blocks/gold']).energy(10000)
event.recipes.thermal.smelter('excompressum:auto_compressed_hammer', ['26x excompressum:compressed_cobblestone', 'excompressum:auto_hammer']).energy(10000)
event.recipes.thermal.smelter('excompressum:auto_heavy_sieve', ['26x excompressum:compressed_cobblestone', 'excompressum:auto_sieve']).energy(10000)















})