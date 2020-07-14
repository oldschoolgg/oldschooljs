import LootTable from '../../structures/LootTable';
import SimpleOpenable from '../../structures/SimpleOpenable';

const BirthdayPresentTable = new LootTable().oneIn(10, 'War ship').every('Slice of birthday cake');

export default new SimpleOpenable({
	id: 11918,
	name: 'Birthday present',
	aliases: ['present', 'birthday present'],
	table: BirthdayPresentTable
});
