/**
 * @type {import('node-pg-migrate').ColumnDefinitions | undefined}
 */
export const shorthands = undefined;

/**
 * @param pgm {import('node-pg-migrate').MigrationBuilder}
 * @param run {() => void | undefined}
 * @returns {Promise<void> | void}
 */
export const up = (pgm) => {
    pgm.createTable("notes", {
        id: {
        type: "VARCHAR(50)",
        primaryKey: true,
        },
        title: {
            type: "TEXT",
            notNull: true,
        },
        body: {
            type: "TEXT",
            notNull: true,
        },
        tags: {
            type: "TEXT[]",
            notNull: true,
        },
        created_at: {
            type: "TEXT",
            notNull: true,
        },
        updated_at: {
            type: "TEXT",
            notNull: true,
        },
    });
};


/**
 * @param pgm {import('node-pg-migrate').MigrationBuilder}
 * @param run {() => void | undefined}
 * @returns {Promise<void> | void}
 */
export const down = (pgm) => {
    pgm.dropTable('notes');
};
