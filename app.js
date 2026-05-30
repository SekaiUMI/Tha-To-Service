const monsters = {
  Damage:[
    "monsters/Flex.png", // Flexible Draft
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0205_1_3.png", // Wind Legolas
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0205_1_4.png", // Light Legolas
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0074_3_2.png", // Fater HIgh Elemental
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0204_1_5.png", // Dark Gandalf
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0202_1_5.png", // Dark Justice
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0192_1_2.png", // Fire Arcane Weapon
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0192_1_5.png", // Dark Arcane Weapon
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0197_1_4_swgtC2NC.png", // Light Nina
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0200_1_3_swgtC2NC.png", // Wind Kaijin
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0200_1_5_swgtC2NC.png", // Dark Kaijin
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0198_1_4_swgtC2NC.png", // Light Hwoarang
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0181_1_1_swgtC2NC.png", // Water Zenitsu
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0181_1_3_swgtC2NC.png", // Wind Zenitsu
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0181_1_5_swgtC2NC.png", // Dark Zenitsu
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0182_1_4_swgtC2NC.png", // Light Inosuke
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0180_1_1_swgtC2NC.png", // Water Nezuko
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0180_1_4_swgtC2NC.png", // Light Nezuko
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0179_1_2_swgtC2NC.png", // Fire Tanjiro
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0179_1_3_swgtC2NC.png", // Wind Tanjiro
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0179_1_4_swgtC2NC.png", // Light Tanjiro
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0177_1_4.png", // Light Gideon
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0177_1_5.png", // Dark Gideon
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0175_1_5.png", // Velaska
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0163_1_5_swgtC2NC.png", // Dark Yuji
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0161_1_4.png", // Light Drakan Warrior
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0161_1_2.png", // Fire Drakan Warrior
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0161_1_5.png", // Dark Drakan Warrior
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0151_1_1_swgtC2NC.png", // Water Ciri
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0151_1_3_swgtC2NC.png", // Wind Ciri
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0151_1_4_swgtC2NC.png", // Light Ciri
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0150_1_2_swgtC2NC.png", // Fire Geralt
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0150_1_3_swgtC2NC.png", // Wind Geralt
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0150_1_4_swgtC2NC.png", // Light Geralt
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0150_1_5_swgtC2NC.png", // Dark Geralt
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0133_1_3.png", // Wind Dokkaebi Lord
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0127_1_5.png", // Dark Devil Maiden
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0118_1_2.png", // Fire Indra
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0118_1_3.png", // Wind Indra
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0118_1_4.png", // Light Indra
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0116_1_2_swgtC2NC.png", // Fire Kiara
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0116_1_5_swgtC2NC.png", // Dark Kiara
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0114_1_4_swgtC2NC.png", // Light Ezio
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0115_1_2_swgtC2NC.png", // Ashour
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0115_1_3_swgtC2NC.png", // Shahat
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0097_1_1_swgtC2NC.png", // Water Macaron Guard
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0087_1_1.png", // Water Sonia
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0087_1_3.png", // Wind Sonia
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0087_1_5.png", // Dark Sonia
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0086_1_4.png", // Light Minato
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0080_1_2.png", // Fire MAxi
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0080_1_3.png", // Wind MAxi
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0080_1_4.png", // Light MAxi
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0080_1_5.png", // Dark MAxi
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0076_1_1.png", // Water O
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0076_1_2.png", // Fire O
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0076_1_4.png", // Light O
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0075_1_2.png", // Coco
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0075_1_4.png", // Dorothy
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0066_1_2_swgtC2NC.png", // Fire Ryu
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0066_1_3_swgtC2NC.png", // Wind Ryu
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0066_1_4_swgtC2NC.png", // Light Ryu
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0066_1_5_swgtC2NC.png", // Dark Ryu
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0054_0_0.png", // Water Tiger
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0054_1_0.png", // Fire Tiger
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0054_2_0.png", // Wind Tiger
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0054_3_0.png", // Light Tiger
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0054_4_0.png", // Dark Tiger
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0052_0_4.png", // Water Demon
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0052_4_4.png", // Dark Demon
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0047_2_2.png", // Wind Bolverk
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0046_1_2.png", // Fire Druid
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0044_4_4.png", // Dark Paladin
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0043_1_4.png", // Fire Unicorn
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0043_2_4.png", // Wind Unicorn
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0041_0_4.png", // Water Panda
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0040_0_3.png", // Water Nyx
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0040_1_3.png", // Fire Nyx
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0040_3_3.png", // Light Nyx
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0033_4_3.png", // Dark Polar
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0023_0_1.png", // Water Ethna
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0023_1_1.png", // Fire Ethna
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0023_2_1.png", // Wind Ethna
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0023_3_1.png", // Light Ethna
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0019_4_2.png", // Dark Archangel
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0025_1_4.png", // Fire Monkey
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0025_2_4.png", // Wind Monkey
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0025_0_0.png", // Water DK
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0025_1_0.png", // Fire DK
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0025_3_0.png", // Light DK
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0022_4_4.png", // Dark Occult Girl
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0022_2_1.png", // Wind Oracle
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0017_2_2.png", // Wind Chimera
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0017_4_2.png", // Dark Chimera
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0017_3_3.png", // Light Phoenix
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0017_4_3.png", // Dark Phoenix
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0016_3_0.png", // Light Dragon
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0016_4_0.png", // Dark Dragon
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0014_4_2.png", // Dark Valkyrja
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0043_0_0.png", // Reno
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0040_3_1.png", // Light Jack-o'-lantern
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0077_1_4.png", // Light Robo
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0024_1_1.png", // Fire Lich
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0016_3_2.png", // Light Vampire
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0049_2_4.png", // Wind Cannon Girl
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0049_4_4.png", // Dark Cannon Girl
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0073_1_5.png", // Ongyouki 
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0038_4_1.png", // Dark Anubis
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0013_4_3.png", // Dark Ninja
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0008_4_4.png", // Dark Fei
  ],

  Support:[
    "monsters/Water_Gandalf.png", // test
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0082_3_4.png", // Light Vagabond
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0204_1_1.png", // Water Gandalf
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0204_1_3.png", // Wind Gandalf
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0204_1_4.png", // Light Gandalf
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0202_1_1.png", // Water Justice
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0165_1_3_swgtC2NC.png", // Wind Megumi
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0106_1_4.png", // Light Puppeteer
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0106_1_5.png", // Dark Puppeteer
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0097_1_2_swgtC2NC.png", // Fire Macaron Guard
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0097_1_3_swgtC2NC.png", // Wind Macaron Guard
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0099_1_1_swgtC2NC.png", // Water Pure Vanilla
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0099_1_2_swgtC2NC.png", // Fire Pure Vanilla
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0099_1_3_swgtC2NC.png", // Wind Pure Vanilla
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0099_1_4_swgtC2NC.png", // Light Pure Vanilla
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0078_1_1.png", // Water Totem
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0078_1_3.png", // Wind Totem
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0078_1_4.png", // Light Totem
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0047_3_2.png", // Light Bolverk
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0043_3_4.png", // Light Unicorn
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0039_3_2.png", // Light Jintalaa
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0035_3_3.png", // Light Don
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0032_4_2.png", // Veromos
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0033_3_3.png", // Light Polar
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0019_2_2.png", // Wind Archangel
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0039_3_0.png", // Light Horus
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0035_0_0.png", // Water Mermaid
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0041_1_2.png", // Racuni
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0041_4_2.png", // Kroa
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0046_3_1.png", // Light Dryad
  ],

  Sup_Damage:[
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0053_3_1.png", // Light Wolf
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0160_3_5.png", // Dark Harpu
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0206_1_1.png", // Water Aragon
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0202_1_4.png", // Light Justice
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0192_1_3.png", // Wind Arcane Weapon
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0192_1_4.png", // Light Arcane Weapon
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0199_1_2_swgtC2NC.png", // Fire Duke
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0182_1_1_swgtC2NC.png", // Water Inosuke
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0180_1_5_swgtC2NC.png", // Dark Nezuko
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0177_1_1.png", // Water Gideon
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0177_1_2.png", // Fire Gideon
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0166_1_4_swgtC2NC.png", // Light Gojo
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0136_1_1.png", // Water Twin Angels
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0136_1_2.png", // Fire Twin Angels
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0136_1_3.png", // Wind Twin Angels
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0136_1_4.png", // Light Twin Angels
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0136_1_5.png", // Dark Twin Angels
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0133_1_4.png", // Light Dokkaebi Lord
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0133_1_5.png", // Dark Dokkaebi Lord
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0117_1_5_swgtC2NC.png", // Dark Eivor
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0114_1_1_swgtC2NC.png", // Water Ezio
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0097_1_4_swgtC2NC.png", // Light Macaron Guard
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0097_1_5_swgtC2NC.png", // Dark Macaron Guard
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0075_1_1.png", // Nana
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0068_1_4_swgtC2NC.png", // Light Slayer
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0056_1_5.png", // Dark Art Master
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0052_2_4.png", // Wind Demon
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0052_3_4.png", // Light Demon
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0047_0_2.png", // Water Bolverk
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0047_4_2.png", // Dark Bolverk
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0046_0_2.png", // Water Druid
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0046_4_2.png", // Dark Druid
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0043_4_4.png", // Dark Unicorn
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0041_2_4.png", // Wind Panda
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0041_4_4.png", // Dark Panda
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0039_1_2.png", // Fire Jintalaa
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0032_3_2.png", // Elsharion
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0033_2_3.png", // Wind Polar
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0031_0_1.png", // Water Sage
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0031_1_1.png", // Fire Sage
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0031_4_1.png", // Dark Sage
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0023_4_1.png", // Dark Ethna
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0027_0_1.png", // Water Monk
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0027_1_1.png", // Fire Monk
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0027_4_1.png", // Dark Monk
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0019_1_2.png", // Fire Archangel
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0025_2_0.png", // Wind DK
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0025_4_0.png", // Dark DK
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0022_0_4.png", // Water Occult Girl
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0022_0_1.png", // Water Oracle
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0022_1_1.png", // Fire Oracle
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0022_3_1.png", // Light Oracle
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0016_2_0.png", // Wind Dragon
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0014_0_2.png", // Water Valkyrja
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0014_1_2.png", // Fire Valkyrja
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0014_3_2.png", // Light Valkyrja
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0040_0_1.png", // Water Jack-o'-lantern
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0016_1_2.png", // Fire Vampire
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0029_4_3.png", // Dark Yeonhong
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0029_3_3.png", // Light Yeonhong
  ],

  Control:[
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0205_1_2.png", // Fire Legolas
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0160_3_1.png", // Water Harpu
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0051_1_0.png", // Fire Fairy
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0206_1_5.png", // Dark Aragon
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0204_1_2.png", // Fire Gandalf
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0202_1_3.png", // Wind Justice
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0199_1_1_swgtC2NC.png", // Water Duke
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0199_1_3_swgtC2NC.png", // Wind Duke
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0200_1_2_swgtC2NC.png", // Fire Kaijin
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0182_1_2_swgtC2NC.png", // Fire Inosuke
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0175_1_1.png", // Lamiella
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0175_1_4.png", // Mortera
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0164_1_3_swgtC2NC.png", // Wind Nobara
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0165_1_2_swgtC2NC.png", // Fire Megumi
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0165_1_5_swgtC2NC.png", // Dark Megumi
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0166_1_1_swgtC2NC.png", // Water Gojo
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0166_1_3_swgtC2NC.png", // Wind Gojo
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0166_1_5_swgtC2NC.png", // Dark Gojo
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0161_1_1.png", // Water Drakan Warrior
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0161_1_3.png", // Wind Drakan Warrior
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0146_1_1.png", // Water Hacker
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0146_1_2.png", // Fire Hacker
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0146_1_4.png", // Light Hacker
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0146_1_5.png", // Dark Hacker
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0152_1_1_swgtC2NC.png", // Water Yennefer
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0152_1_2_swgtC2NC.png", // Fire Yennefer
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0152_1_5_swgtC2NC.png", // Dark Yennefer
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0133_1_1.png", // Water Dokkaebi Lord
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0133_1_2.png", // Fire Dokkaebi Lord
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0127_1_1.png", // Water Devil Maiden
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0127_1_2.png", // Fire Devil Maiden
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0127_1_3.png", // Wind Devil Maiden
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0127_1_4.png", // Light Devil Maiden
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0118_1_1.png", // Water Indra
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0118_1_5.png", // Dark Indra
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0117_1_4_swgtC2NC.png", // Light Eivor
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0106_1_3.png", // Wind Puppeteer
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0106_1_2.png", // Fire Puppeteer
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0106_1_1.png", // Water Puppeteer
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0099_1_5_swgtC2NC.png", // Dark Pure Vanilla
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0087_1_4.png", // Light Sonia
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0086_1_1.png", // Water Minato
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0086_1_2.png", // Fire Minato
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0086_1_5.png", // Dark Minato
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0078_1_5.png", // Dark Totem
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0076_1_3.png", // Wind O
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0076_1_5.png", // Dark O
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0075_1_5.png", // Kiki
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0072_1_1.png", // Shizuka
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0072_1_2.png", // Tomoe
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0072_1_3.png", // Giou
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0072_1_4.png", // Seimei
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0072_1_5.png", // Douman
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0068_1_2_swgtC2NC.png", // Fire Slayer
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0068_1_3_swgtC2NC.png", // Wind Slayer
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0068_1_5_swgtC2NC.png", // Dark Slayer
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0066_1_1_swgtC2NC.png", // Water Ryu
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0056_1_1.png", // Water Art Master
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0056_1_2.png", // Fire Art Master
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0056_1_3.png", // Wind Art Master
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0046_3_2.png", // Light Druid
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0044_0_4.png", // Water Paladin
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0041_3_4.png", // Light Panda
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0040_2_3.png", // Wind Nyx
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0040_4_3.png", // Dark Nyx
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0039_2_2.png", // Wind Jintalaa
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0039_4_2.png", // Dark Jintalaa
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0035_1_3.png", // Fire Don
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0035_2_3.png", // Wind Don
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0032_1_2.png", // Tesarion
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0025_0_4.png", // Water Monkey
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0025_3_4.png", // Light Monkey
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0025_4_4.png", // Dark Monkey
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0022_2_4.png", // Wind Occult Girl
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0022_3_4.png", // Light Occult Girl
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0022_4_1.png", // Dark Oracle
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0017_1_2.png", // Fire Chimera
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0017_3_2.png", // Light Chimera
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0016_0_0.png", // Water Dragon
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0057_1_1.png", // Water String Master
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0043_3_0.png", // Tablo
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0039_4_0.png", // Dark Horus
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0077_1_2.png", // Fire Robo
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0077_1_3.png", // Wind Robo
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0077_1_5.png", // Dark Robo
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0034_4_0.png", // Dark Pirate
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0043_4_2.png", // Vivachel
    "https://do9d4mpqk497d.cloudfront.net/common/images/monsters/unit_icon_0016_4_2.png", // Dark Vampire
  ]
};


const list=document.getElementById("monster-list");

Object.entries(monsters).forEach(([type,arr])=>{
    arr.forEach(url=>{
        const img=document.createElement("img");
        img.src=url;
        img.className="monster";
        img.dataset.type=type;
        img.draggable=true;
        img.ondragstart=()=>{
            dragged=img.src;
        };
        list.appendChild(img);
    });
});

document.querySelectorAll(".slot").forEach(s=>{

    s.ondragover=e=>e.preventDefault();
    s.ondrop=e=>{
        if(dragged){
            s.innerHTML = "";
            const im = document.createElement("img");
            im.src = dragged;
            im.crossOrigin = "anonymous";
            im.style.width="100%";
            im.style.height="100%";
            im.style.objectFit="cover";
            s.appendChild(im);
        }};

    document.querySelectorAll(".slot").forEach(s=>{

        s.ondragover=e=>e.preventDefault();
        s.ondrop=e=>{
            if(dragged){
            s.style.background=`url(${dragged})`;
            s.style.backgroundSize="cover";
            }};

        /* LEFT CLICK = ban / leader only */
        s.addEventListener("click",()=>{
            if(mode==="ban"){
                s.classList.toggle("ban");
            }
            if(mode==="leader"){
            s.classList.toggle("leader");
            }
        });

        /* RIGHT CLICK = clear monster */
        s.addEventListener("contextmenu",e=>{
            e.preventDefault();
            s.style.background="";
            s.classList.remove("ban","leader");
        });
    });
});

let mode=null;

const banBtn=document.getElementById("banBtn");
const leadBtn=document.getElementById("leadBtn");

banBtn.onclick=()=>{
    mode="ban";
    banBtn.classList.add("active");
    leadBtn.classList.remove("active");
};

leadBtn.onclick=()=>{
    mode="leader";
    leadBtn.classList.add("active");
    banBtn.classList.remove("active");
};

document.querySelectorAll(".slot").forEach(s=>{

    s.addEventListener("click",()=>{
        if(mode==="ban"){
            s.classList.toggle("ban");
        }
        if(mode==="leader"){
            s.classList.toggle("leader");
        }});
});

const tabMonster=document.getElementById("tabMonster");
const tabHistory=document.getElementById("tabHistory");
const historyDiv=document.getElementById("history");

tabMonster.onclick=()=>{

 tabMonster.classList.add("active");
 tabHistory.classList.remove("active");

 historyDiv.classList.remove("show");
};

tabHistory.onclick=()=>{

 tabHistory.classList.add("active");
 tabMonster.classList.remove("active");

 historyDiv.classList.add("show");
};

document.getElementById("exportBtn").onclick=()=>{

 let snapshot=[];

 document.querySelectorAll(".slot").forEach(s=>{
    snapshot.push({
        bg:s.style.background,
        ban:s.classList.contains("ban"),
        leader:s.classList.contains("leader")
    });
 });

 localStorage.setItem("draftSnapshot",JSON.stringify(snapshot));

 window.open("preview.html","_blank");
};

document.querySelectorAll(".filter").forEach(btn=>{

 btn.onclick=()=>{

  document.querySelectorAll(".filter")
   .forEach(b=>b.classList.remove("active"));

  btn.classList.add("active");

  const type=btn.dataset.type;

  document.querySelectorAll(".monster").forEach(m=>{

   if(type==="all" || m.dataset.type===type){
    m.style.display="block";
   }else{
    m.style.display="none";
   }

  });
 };
});
