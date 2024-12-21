import { Item } from "./gilded-rose";


export abstract class ItemStrategy {
    abstract update(item: Item): void;
}

/**
 * Estrategia para actualizar Articulos normales .
 */
export class DefaultItemStrategy extends ItemStrategy {
    update(item: Item): void {
        if (item.quality > 0) {
            item.quality -= 1;
        }
        item.sellIn -= 1;

        if (item.sellIn < 0 && item.quality > 0) {
            item.quality -= 1;
        }
    }
}

/**
 * Estrategia para actualizar Articulos "Aged Brie".
 */
export class AgedBrieStrategy extends ItemStrategy {
    update(item: Item): void {
        if (item.quality < 50) {
            item.quality += 1;
        }
        item.sellIn -= 1;

        if (item.sellIn < 0 && item.quality < 50) {
            item.quality += 1;
        }
    }
}

/**
 * Estrategia para actualizar Articulos "Backstage passes".
 */
export class BackstagePassStrategy extends ItemStrategy {
    update(item: Item): void {
        if (item.quality < 50) {
            item.quality += 1;
            if (item.sellIn <= 10) {
                item.quality += 1;
            }
            if (item.sellIn <= 5) {
                item.quality += 1;
            }
        }
        item.sellIn -= 1;

        if (item.sellIn < 0) {
            item.quality = 0;
        }
    }
}

/**
 * Estrategia para actualizar Articulos "Sulfuras" items.
 */
export class SulfurasStrategy extends ItemStrategy {
    update(item: Item): void {
        // Sulfuras no cambia de calidad ni se vende
    }
}

/**
 * Estrategia para actualizar Articulos de "Conjured".
 * Los articulos de Conjured se degradan en dos veces más rápido que los articulos normales.
 */
export class ConjuredItemStrategy extends ItemStrategy {
    update(item: Item): void {
        if (item.quality > 0) {
            item.quality -= 2;
        }
        item.sellIn -= 1;

        if (item.sellIn < 0 && item.quality > 0) {
            item.quality -= 2;
        }

        // Ensure quality does not go negative
        if (item.quality < 0) {
            item.quality = 0;
        }
    }
}