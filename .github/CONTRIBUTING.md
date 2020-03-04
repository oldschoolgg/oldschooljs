# Contributing

## Adding a Monster

1. _Must_ be present in [this file (monsters-complete.json)](https://github.com/osrsbox/osrsbox-db/blob/master/docs/)
2. If the Monster is present in [this file (Boss.java)](https://github.com/runelite/runelite/blob/master/runelite-client/src/main/java/net/runelite/client/plugins/bosstimer/Boss.java), use the ID it references in [this file (NpcID.java)](https://github.com/runelite/runelite/blob/908fd898308f4235e669ac133a7534e0a4c8cce6/runelite-api/src/main/java/net/runelite/api/NpcID.java)
3. Run `yarn prepmon` (prepmon = prepare monsters) to generate the data cache for the monsters.
