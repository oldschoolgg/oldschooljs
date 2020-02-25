import { Item } from '../meta/types';

export default function weirdItemFilter(item: Item): boolean {
	return !item.placeholder && !item.noted && !item.linked_id_item;
}
