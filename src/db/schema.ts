import { sql } from "drizzle-orm";
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const usersImageTable = sqliteTable("usersImage", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  userId: text("userId").notNull(), // FROM CLERK
  image: text("image").notNull(),
  name: text("name").notNull(),
  description: text("description").notNull(),
  createdAt: text("created_at")
    .default(sql`(CURRENT_TIMESTAMP)`)
    .notNull(),
});

export type UsersImagesInsert = typeof usersImageTable.$inferInsert;
export type UsersImagesSelect = typeof usersImageTable.$inferSelect;
