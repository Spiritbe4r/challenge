import { Item } from "./gilded-rose";
import { AgedBrieStrategy, BackstagePassStrategy, ConjuredItemStrategy, DefaultItemStrategy, ItemStrategy, SulfurasStrategy } from "./items.strategy";

/**
 * Fabrica tipo función para obtener la estrategia adecuada para un artículo.
  * @param {Item} item - el artículo para el cual se debe obtener la estrategia.
 * @returns {ItemStrategy} la estrategia para el artículo dado.
 */
export function getItemStrategy(item: Item): ItemStrategy {
    switch (item.name) {
        case 'Aged Brie':
            return new AgedBrieStrategy();
        case 'Backstage passes to a TAFKAL80ETC concert':
            return new BackstagePassStrategy();
        case 'Sulfuras, Hand of Ragnaros':
            return new SulfurasStrategy();
        case 'Conjured':
            return new ConjuredItemStrategy();
        default:
            return new DefaultItemStrategy();
    }
}