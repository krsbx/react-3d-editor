/// <reference types="vite/client" />

interface Window {
  mozIndexedDB: IDBFactory;
  webkitIndexedDB: IDBFactory;
  msIndexedDB: IDBFactory;
}

interface EventTarget {
  result: any;
}
