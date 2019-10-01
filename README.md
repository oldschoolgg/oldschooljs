# OldSchoolJS

A NodeJS library for doing everything OSRS related. Access the OSRS hiscores, news, worlds, wiki, items, and more.

## Examples

-   [Hiscores](#Hiscores)
-   [Items](#Items)
-   [News](#News)
-   [Worlds](#Worlds)
-   [Wiki](#Wiki)

## Hiscores

```js
import { Hiscores } from 'oldschooljs';
```

#### Getting any player from the hiscores

```js
const lynxTitan = await Hiscores.fetch('Lynx Titan').catch(console.error);

console.log(lynxTitan);
```

#### Getting an Ironman from the hiscores

Possible account types: 'normal' | 'ironman' | 'ultimate' | 'hardcore' | 'deadman' | 'seasonal'

```js
const ironHyger = await Hiscores.fetch('Iron Hyger', { type: 'ironman' }).catch(console.error);

console.log(ironHyger);
```

## Items

```js
import { Items } from 'oldschooljs';
```

#### Fetch and cache all items

You can call this to have all items fully available for usage (via `.get`) at any time without needing to fetch individual items. Items change at most once a week, so you should probably only call this once at startup, and then once every few days.

```js
await Items.fetchAll();
```

#### Fetch a particular item

This will _fetch_ the latest version of a particular item. It's probably a better idea to just use `Items.fetchAll()` and then use `Items.get()`.

```js
const twistedBow = await Items.fetch(20997);

if (twistedBow) console.log(twistedBow);
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
const dragonItems = Items.filter(item => item.name.includes('Dragon));

console.log(`Found ${dragonItems.size} Dragon Items!`);

for (const item of dragonItems.values()) {
	console.log(item.name);
}
```

## News

```js
import { News } from 'oldschooljs';
```

Be careful with _fetching_ news articles too often, as the website will ratelimit you after roughly 30 requests in a short period. Whenever a fetch is done, the `News` collection will have any new articles cached.

Rather than fetching articles on demand, you may want to

#### Fetch recent news articles

```js
const recentArticles = await News.fetchRecent();

const mostRecentArticle = recentArticles.first();
```

#### Get news articles for a specific month

```js
const monthOfArticles = await News.filter(article => article.year === 2018 && article.month === 12);

console.log(`There were ${monthOfArticles.size} articles in that month.`);
```

#### Fetch news articles for a specific month

This will _fetch_ news articles for a specific month, i.e it wont be cached. In most cases you can just use `News.filter()` instead of this.

```js
const monthOfArticles = await News.fetchMonth({ year: 2018, month: 12 });

console.log(`There were ${monthOfArticles.size} articles in that month.`);
```

#### List every available news article

If you want this to be up to 100% up to date, you need to call `News.fetchNewArticles()` to fetch newly released articles that aren't cached by oldschooljs.

```js
for (const article of News.values()) {
	console.log(article);
}
```

## Worlds

```js
import { Worlds } from 'oldschooljs';
```

#### Fetch and cache all worlds

You **must** call this atleast once to be able to use `Worlds`. To keep worlds up to date, fetching once at startup and then once every few days is enough. If you need an up to date playercount of worlds, you can call it more often or on demand.

```js
await Worlds.fetch();
```

#### Getting a particular world

You can use either form of numbering, giving `301` and `1` will both give you World 1.

```js
const worldOne = Worlds.get(301);
const worldTwo = Worlds.get(2);
```

#### Filtering Worlds

```js
const australianWorlds = Worlds.filter(world => world.location === 'Australia');

console.log(`There are ${australianWorlds.size} Australian Worlds!`);
```

#### Iterating over worlds

```js
for (const world of Worlds.values()) {
	console.log(world);
}
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

## Planned features

-   Ability to ping worlds?
-   Polls (questions, vote counts, etc)
-   CrystalMathLabs
-   Simulating: killing monsters, opening clue scrolls, pets (like in osbot)
-   Quests (e.g. containing all wiki data on quests)
-   fetch wiki page by item ID?
