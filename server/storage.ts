import { contacts, type Contact, type InsertContact } from "@shared/schema";
import { db } from "./db";

export interface IStorage {
  createContact(contact: InsertContact): Promise<Contact>;
  getContacts(): Promise<Contact[]>;
}

export class DbStorage implements IStorage {
  async createContact(insertContact: InsertContact): Promise<Contact> {
    const [contact] = await db.insert(contacts).values(insertContact).returning();
    return contact;
  }

  async getContacts(): Promise<Contact[]> {
    return await db.select().from(contacts);
  }
}

export class MemStorage implements IStorage {
  private contacts: Map<number, Contact>;
  private currentId: number;

  constructor() {
    this.contacts = new Map();
    this.currentId = 1;
  }

  async createContact(insertContact: InsertContact): Promise<Contact> {
    const id = this.currentId++;
    const contact: Contact = {
      ...insertContact,
      id,
      createdAt: new Date(),
      interest: insertContact.interest || null,
    };
    this.contacts.set(id, contact);
    return contact;
  }

  async getContacts(): Promise<Contact[]> {
    return Array.from(this.contacts.values());
  }
}

// Use database storage if DATABASE_URL is provided, otherwise use memory storage
export const storage = process.env.DATABASE_URL ? new DbStorage() : new MemStorage();
