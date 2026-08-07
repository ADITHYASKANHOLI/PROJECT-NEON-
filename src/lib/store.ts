import fs from 'fs';
import path from 'path';
import { DataStore, SiteContent } from './types';
import { initialSiteContent } from './initialData';

const DATA_DIR = path.join(process.cwd(), 'src', 'data');
const DATA_FILE = path.join(DATA_DIR, 'store.json');

const defaultStore: DataStore = {
  draft: initialSiteContent,
  published: initialSiteContent,
  lastSavedAt: new Date().toISOString(),
  lastPublishedAt: new Date().toISOString(),
  version: 1,
};

let inMemoryStore: DataStore | null = null;

function ensureDataDirectory() {
  try {
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }
  } catch (err) {
    console.error('Error creating data directory:', err);
  }
}

export function getStore(): DataStore {
  if (inMemoryStore) {
    return inMemoryStore;
  }

  ensureDataDirectory();

  try {
    if (fs.existsSync(DATA_FILE)) {
      const fileData = fs.readFileSync(DATA_FILE, 'utf-8');
      const parsed = JSON.parse(fileData) as DataStore;
      if (parsed && parsed.draft && parsed.published) {
        inMemoryStore = parsed;
        return inMemoryStore;
      }
    }
  } catch (err) {
    console.warn('Could not read store.json, initializing default store:', err);
  }

  inMemoryStore = defaultStore;
  saveStoreToDisk(inMemoryStore);
  return inMemoryStore;
}

function saveStoreToDisk(store: DataStore) {
  ensureDataDirectory();
  try {
    fs.writeFileSync(DATA_FILE, JSON.stringify(store, null, 2), 'utf-8');
  } catch (err) {
    console.error('Error writing store.json to disk:', err);
  }
}

export function getDraftContent(): SiteContent {
  const store = getStore();
  return store.draft;
}

export function getPublishedContent(): SiteContent {
  const store = getStore();
  return store.published;
}

export function saveDraftContent(newDraft: SiteContent): DataStore {
  const store = getStore();
  const updatedStore: DataStore = {
    ...store,
    draft: newDraft,
    lastSavedAt: new Date().toISOString(),
    version: store.version + 1,
  };

  inMemoryStore = updatedStore;
  saveStoreToDisk(updatedStore);
  return updatedStore;
}

export function publishDraftContent(): DataStore {
  const store = getStore();
  const now = new Date().toISOString();
  const updatedStore: DataStore = {
    ...store,
    published: JSON.parse(JSON.stringify(store.draft)),
    lastSavedAt: now,
    lastPublishedAt: now,
    version: store.version + 1,
  };

  inMemoryStore = updatedStore;
  saveStoreToDisk(updatedStore);
  return updatedStore;
}

export function resetStoreToDefault(): DataStore {
  const now = new Date().toISOString();
  const resetStore: DataStore = {
    draft: initialSiteContent,
    published: initialSiteContent,
    lastSavedAt: now,
    lastPublishedAt: now,
    version: 1,
  };

  inMemoryStore = resetStore;
  saveStoreToDisk(resetStore);
  return resetStore;
}
