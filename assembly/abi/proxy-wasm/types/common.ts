// Type definition consistent with WASI.
export type char = u8;
export type ptr<T> = usize; // all Wasm pointers are usize'd
export type hostref = u64;  // all host references are u64
