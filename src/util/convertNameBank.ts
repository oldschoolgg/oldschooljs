import itemID from './itemID';
import { ItemBank } from '../meta/types';

export default function convertNameBank(nameBank: { [key: string]: number }): ItemBank {
	const newBank: ItemBank = {};

	for (const [name, number] of Object.entries(nameBank)) {
		newBank[itemID(name)] = number;
	}

	return newBank;
}
