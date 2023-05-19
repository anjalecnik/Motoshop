/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema
    .createTable('uporabniki', (table) => {
     table.increments('id').primary();
     table.string('uporabnisko_ime');
     table.string('geslo');
    })
    .createTable('izdelki', (table) => {
        table.increments('id').primary();
        table.string('naziv');
        table.decimal('cena');
        table.string('povezavaSlike');
        table.string('povezavaDoIzdelka');
        table.decimal('popust');
    })
    .createTable('akcijskiIzdelki', (table) => {
        table.increments('id').primary();
        table.string('naziv');
        table.decimal('cena');
        table.string('povezavaSlike');
        table.decimal('popust');
    })
    .createTable('sportIzdelki', (table) => {
        table.increments('id').primary();
        table.string('naziv');
        table.decimal('cena');
        table.string('povezavaSlike');
        table.string('povezavaDoIzdelka');
        table.decimal('popust');
        table.string('opis');
    })
    .createTable('podatkiKosarice', (table) => {
        table.increments('id').primary();
        table.specificType('izbraniIzdelki', 'text[]');
        table.decimal('skupnaCena');
        table.string('datum');
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema
        .dropTable('uporabniki')
        .dropTable('izdelki')
        .dropTable('akcijskiIzdelki')
        .dropTable('sportIzdelki')
        .dropTable('podatkiKosarice');
};
