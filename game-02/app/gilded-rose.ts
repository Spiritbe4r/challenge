import { getItemStrategy } from "./items.factory";

/**
 * Representa un artículo en el inventario.
 */
export class Item {
    name: string;
    sellIn: number;
    quality: number;

    /**
      * @param {string} name - El nombre del artículo.
    * @param {number} sellIn - El número de días para vender el artículo.
    * @param {number} quality - La calidad del artículo.
    */
    constructor(name: string, sellIn: number, quality: number) {
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
    }
}


/**
 * Representa el sistema de inventario Gilded Rose.
 */
export class GildedRose {
    items: Array<Item>;

    /**
         * @param {Array<Item>} items - Los artículos en el inventario.
         */
    constructor(items: Item[] = []) {
        this.items = items;
    }

    /**
     * actualiza la calidad de todos los artículos en el inventario.
     * @returns {Array<Item>} Los artículos actualizados.
     */
    updateQuality(): Array<Item> {
        for (const item of this.items) {
            const strategy = getItemStrategy(item);
            strategy.update(item);
        }
        return this.items;
    }


}


// Inicializar los artículos
const items = [
    new Item("Aged Brie", 2, 0),
    new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20),
    new Item("Sulfuras, Hand of Ragnaros", 0, 80),
    new Item("Normal Item", 10, 5),
    new Item("Conjured", 3, 6)
];


// Crear una instancia de GildedRose
const gildedRose = new GildedRose(items);

// Simular 5 días
for (let day = 1; day <= 5; day++) {
    console.log(`--- Day ${day} ---`);
    gildedRose.updateQuality();
    gildedRose.items.forEach(item => console.log(item));
}