{
    "#comment": "Sample Level",
    "Information": {
      "uuid": "c58a208a-a5e3-4cfa-9bc3-cc7fbb08c2e3",
      "name": {
        "en": "SampleLevel I",
        "zh-CN": "示例关卡1"
      },
      "Author": "LMYY",
      "AuthorLink": "https://github.com/Gzh0821",
      "Introduction": {
        "en": "This is a sample level.",
        "zh-CN": "这是一个示例关卡。"
      },
      "GameVersion": "0.1.13",
      "Version": "1.0",
      "CreatedAt": "2022-03-08",
      "UpdatedAt": "2022-03-08",
      "Difficulty": "Easy",
      "Category": "Survival"
    },
    "objects": [
      {
        "objclass": "LevelDefinition",
        "objdata": {
          "Description": "~",
          "LevelNumber": 1,
          "Loot": "RTID(DefaultLoot@LevelModules)",
          "Modules": [
            "RTID(ZombiesDeadWinCon@LevelModules)",
            "RTID(DefaultZombieWinCondition@LevelModules)",
            "RTID(NewWaves@CurrentLevel)",
            "RTID(ForzenPlantPlacement@CurrentLevel)",
            "RTID(SeedBank@CurrentLevel)"
          ],
          "Name": "Sample Level 1",
          "NameMultiLanguage": {
            "en": "Sample Level I",
            "zh": "示例关卡I"
          },
          "WritenBy": "LMYY",
          "NormalPresentTable": "egypt_normal_01",
          "ShinyPresentTable": "egypt_shiny_01",
          "StageModule": "RTID(TutorialStage@LevelModules)"
        }
      },
      {
        "aliases": [
          "SeedBank"
        ],
        "objclass": "SeedBankProperties",
        "objdata": {
          "PresetPlantList": [
            {
              "Level": -1,
              "PlantType": "peashooter"
            }
          ],
          "SelectionMethod": "chooser"
        }
      },
      {
        "aliases": [
          "NewWaves"
        ],
        "objclass": "WaveManagerModuleProperties",
        "objdata": {
          "WaveManagerProps": "RTID(WaveManagerProps@CurrentLevel)"
        }
      },
      {
        "aliases": [
          "WaveManagerProps"
        ],
        "objclass": "WaveManagerProperties",
        "objdata": {
          "FlagWaveInterval": 1,
          "WaveCount": 1,
          "Waves": [
            [
              "RTID(Wave1@CurrentLevel)"
            ]
          ]
        }
      },
      {
        "aliases": [
          "Wave1"
        ],
        "objclass": "SpawnZombiesJitteredWaveActionProps",
        "objdata": {
          "AdditionalPlantfood": 0,
          "Zombies": [
            {
              "Type": "RTID(tutorial@ZombieTypes)"
            }
          ]
        }
      }
    ],
    "version": 1
  }