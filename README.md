# OldSchoolJS

A NodeJS library for doing everything OSRS related. Access the OSRS hiscores, wiki, items, simulating killing monsters, and opening clue caskets - and more.

For discussion, help or questions - please join https://discord.gg/ob and then our `#developers` channel.

Automatically generated docs are available at: https://docs.oldschool.gg/

## Hiscores

Docs: https://docs.oldschool.gg/classes/hiscores.html

Possible account types: normal, ironman, ultimate, hardcore, deadman, seasonal

You can also pass `virtualLevels: true` to receive their stats back in virtual level format, with their skill levels able to go up to 120.

```js
import { Hiscores } from 'oldschooljs';

const lynxTitan = await Hiscores.fetch('Lynx Titan');
const ironHyger = await Hiscores.fetch('Iron Hyger', { type: 'ironman' });
```

## Items

```js
import { Items } from 'oldschooljs';
```

#### Getting an Item by ID

```js
const twistedBow = Items.get(20997);
if (twistedBow) console.log(twistedBow);
```

#### Getting an Item by Name

```js
const dragonDagger = Items.get('dragon dagger(p++)');
if (dragonDagger) console.log(dragonDagger);
```

#### Find items by any properties

```js
const dragonItems = Items.filter(item => item.name.includes('Dragon'));
console.log(`Found ${dragonItems.size} Dragon Items!`);

for (const item of dragonItems.values()) {
	console.log(item.name);
}
```

## Monster Killing Simulator

Allows you to simulate killing monsters. The loot is returned in an object, where the key is the item ID and the quantity is the value.

```js
import { Monsters } from 'oldschooljs';
```

#### Simulating 100 Kills of every Monster

```js
Monsters.map(monster => monster.kill(100));
```

#### Simulating 100 Corp beast kills

```js
Monsters.CorporealBeast.kill(100);
Monsters.find(monster => monster.name.aliases.includes('corp')).kill(100);
Monsters.get(319).kill(100);
```

## Clue Scroll Simulating

Allows you to simulate opening clue scroll caskets. The rewards are returned in a format containing the item ID and the quantity.

```js
import { Clues } from 'oldschooljs';
```

```js
console.log(Clues.Beginner.open(1));
console.log(Clues.Master.open(5));
console.log(Clues.Elite.open());
```

## Banks

Docs: https://docs.oldschool.gg/classes/bank.html

The bank class provides a powerful and ergonomic way to construct and interact with item banks.

```js
const bank = new Bank().add('Twisted bow');
const otherBank = new Bank().add('Coal');
const lootTable = new LootTable().add(;

bank
  .add(otherBank)
  .add({ Coal: 1 })
  .add('Coal')
  .add('Coal', 500)
  .add({ 124: 500 })
  .add(lootTable.roll())
  .add(CorporealBeast.kill());

console.log(bank.values());
```

## Loot Tables

Docs: https://docs.oldschool.gg/classes/loottable.html

For a good demonstration of using Loot tables, refer to the oldschooljs code for Monsters and Clues, which all use loottables, a good example is Corp: https://github.com/oldschoolgg/oldschooljs/blob/master/src/simulation/monsters/bosses/CorporealBeast.ts

Here is a trimmed-down example of corp:

```js
const CorporealBeastTable = new LootTable()
	.add('Spirit shield', 1, 8)
	.add('Holy elixir', 1, 3)
	.oneIn(585, SigilTable)
	.tertiary(5000, 'Pet dark core');

CorporealBeastTable.roll();
```

## Wiki

```js
import { Wiki } from 'oldschooljs';
```

#### Searching for pages

```js
const searchResults = await Wiki.search('Twisted bow');
if (searchResults.length === 0) console.log('Found no results');
else console.log(`Search found these pages: ${searchResults.map(page => page.title)}`);
```

#### Picking random pages

```js
const randomPages = await Wiki.random(10);

console.log(`Search found these pages: ${searchResults.map(page => page.title)}`);
```

#### Fetch page by ID

```js
const twistedBowPage = await Wiki.fetchPage(82098);

console.log(twistedBowPage);
```

## Utilities

```js
import { Util } from 'oldschooljs';
```

#### Checking if a username is valid

```js
console.log(Util.isValidUsername(username)); // true
```

#### Converting numbers to and from KMB syntax

KMB Syntax is how numbers are often formatted in runescape, for example: 5k, 1.5m, 5m, 1b, etc.

```js
Util.toKMB(5); // '5'
Util.toKMB(1000); // '1k'
Util.toKMB(1000000); // '1m'
Util.toKMB(1200000000); // '1.2b'
```

```js
Util.fromKMB('5'); // 5
Util.fromKMB('1k'); // 1000
Util.fromKMB('1m'); // 1000000
Util.fromKMB('1.2b'); // 1200000000
```