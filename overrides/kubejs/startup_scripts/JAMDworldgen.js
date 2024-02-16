WorldgenEvents.add(event => {
  event.addOre((ore) => {
    ore.id = "alltheores:lead_ore"
    ore.biomes = ['#jamd:mining']
    ore.addTarget('minecraft:stone', 'alltheores:lead_ore')
    ore.size(10)
    ore.count([15, 20])
    ore.squared()
    ore.uniformHeight(0, 63)
  })
  event.addOre((ore) => {
    ore.id = "alltheores:nickel_ore"
    ore.biomes = ['#jamd:mining']
    ore.addTarget('minecraft:stone', 'alltheores:nickel_ore')
    ore.size(10)
    ore.count([15, 20])
    ore.squared()
    ore.uniformHeight(0, 63)
  })
    event.addOre((ore) => {
      ore.id = "alltheores:osmium_ore"
      ore.biomes = ['#jamd:mining']
      ore.addTarget('minecraft:stone', 'alltheores:osmium_ore')
      ore.size(10)
      ore.count([15, 20])
      ore.squared()
      ore.uniformHeight(0, 60)
  })
    event.addOre((ore) => {
      ore.id = "alltheores:silver_ore"
      ore.biomes = ['#jamd:mining']
      ore.addTarget('minecraft:stone', 'alltheores:silver_ore')
      ore.size(10)
      ore.count([15, 20])
      ore.squared()
      ore.uniformHeight(0, 63)
  })    
    event.addOre((ore) => {
      ore.id = "alltheores:uranium_ore"
      ore.biomes = ['#jamd:mining']
      ore.addTarget('minecraft:stone', 'alltheores:uranium_ore')
      ore.size(10)
      ore.count([15, 20])
      ore.squared()
      ore.uniformHeight(0, 60)
  })
    event.addOre((ore) => {
      ore.id = "alltheores:zinc_ore"
      ore.biomes = ['#jamd:mining']
      ore.addTarget('minecraft:stone', 'alltheores:zinc_ore')
      ore.size(10)
      ore.count([15, 20])
      ore.squared()
      ore.uniformHeight(0, 63)
  })
    event.addOre((ore) => {
      ore.id = "mysticalagriculture:inferium_ore"
      ore.biomes = ['#jamd:mining']
      ore.addTarget('minecraft:stone', 'mysticalagriculture:inferium_ore')
      ore.size(5)
      ore.count([5, 10])
      ore.squared()
      ore.uniformHeight(0, 63)
  })
    event.addOre((ore) => {
      ore.id = "mysticalagriculture:prosperity_ore"
      ore.biomes = ['#jamd:mining']
      ore.addTarget('minecraft:stone', 'mysticalagriculture:prosperity_ore')
      ore.size(4)
      ore.count([5, 10])
      ore.squared()
      ore.uniformHeight(0, 63)
  })    
    event.addOre((ore) => {
      ore.id = "alltheores:deepslate_lead_ore"
      ore.biomes = ['#jamd:mining']
      ore.addTarget('minecraft:deepslate_stone', 'alltheores:deepslate_lead_ore')
      ore.addTarget('minecraft:tuff', 'alltheores:deepslate_lead_ore')
      ore.size(10)
      ore.count([15, 20])
      ore.squared()
      ore.uniformHeight(-58, 0)
  })
    event.addOre((ore) => {
      ore.id = "alltheores:deepslate_nickel_ore"
      ore.biomes = ['#jamd:mining']
      ore.addTarget('minecraft:deepslate_stone', 'alltheores:deepslate_nickel_ore')
      ore.addTarget('minecraft:tuff', 'alltheores:deepslate_nickel_ore')
      ore.size(10)
      ore.count([15, 20])
      ore.squared()
      ore.uniformHeight(-58, 0)
  })
    event.addOre((ore) => {
      ore.id = "alltheores:deepslate_osmium_ore"
      ore.biomes = ['#jamd:mining']
      ore.addTarget('minecraft:stone', 'alltheores:deepslate_osmium_ore')
      ore.addTarget('minecraft:tuff', 'alltheores:deepslate_osmium_ore')
      ore.size(10)
      ore.count([15, 20])
      ore.squared()
      ore.uniformHeight(-58, 0)
  })
    event.addOre((ore) => {
      ore.id = "alltheores:deepslate_silver_ore"
      ore.biomes = ['#jamd:mining']
      ore.addTarget('minecraft:deepslate_stone', 'alltheores:deepslate_silver_ore')
      ore.addTarget('minecraft:tuff', 'alltheores:deepslate_silver_ore')
      ore.size(10)
      ore.count([15, 20])
      ore.squared()
      ore.uniformHeight(-58, 0)
  })    
    event.addOre((ore) => {
      ore.id = "alltheores:deepslate_uranium_ore"
      ore.biomes = ['#jamd:mining']
      ore.addTarget('minecraft:deepslate_stone', 'alltheores:deepslate_uranium_ore')
      ore.addTarget('minecraft:tuff', 'alltheores:deepslate_uranium_ore')
      ore.size(10)
      ore.count([15, 20])
      ore.squared()
      ore.uniformHeight(-58, 0)
  })
    event.addOre((ore) => {
      ore.id = "alltheores:deepslate_zinc_ore"
      ore.biomes = ['#jamd:mining']
      ore.addTarget('minecraft:deepslate_stone', 'alltheores:deepslate_zinc_ore')
      ore.addTarget('minecraft:tuff', 'alltheores:deepslate_zinc_ore')
      ore.size(10)
      ore.count([15, 20])
      ore.squared()
      ore.uniformHeight(-58, 0)
  })  
    event.addOre((ore) => {
      ore.id = "mysticalagriculture:deepslate_inferium_ore"
      ore.biomes = ['#jamd:mining']
      ore.addTarget('minecraft:deepslate_stone', 'mysticalagriculture:deepslate_inferium_ore')
      ore.addTarget('minecraft:tuff', 'mysticalagriculture:deepslate_inferium_ore')
      ore.size(5)
      ore.count([5, 10])
      ore.squared()
      ore.uniformHeight(-58, 0)
  })
    event.addOre((ore) => {
      ore.id = "mysticalagriculture:deepslate_prosperity_ore"
      ore.biomes = ['#jamd:mining']
      ore.addTarget('minecraft:deepslate_stone', 'mysticalagriculture:deepslate_prosperity_ore')
      ore.addTarget('minecraft:tuff', 'mysticalagriculture:deepslate_prosperity_ore')
      ore.size(4)
      ore.count([5, 10])
      ore.squared()
      ore.uniformHeight(-58, 0)
  })
})
