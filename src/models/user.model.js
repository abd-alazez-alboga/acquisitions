import { pgTable, serial, varchar, timestamp } from 'drizzle-orm/pg-core';

export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  name: varchar('name', { lenght: 255 }).notNull(),
  email: varchar('email', { lenght: 255 }).notNull().unique(),
  password: varchar('password', { lenght: 255 }).notNull(),
  role: varchar('role', { lenght: 50 }).notNull().default('user'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull()
});