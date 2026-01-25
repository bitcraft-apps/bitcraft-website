# Brand Assets

This directory is **automatically managed** by the [sync-brand workflow](../../.github/workflows/sync-brand.yml).

## What happens during sync

1. Assets are downloaded from the `bitcraft-brand` repository releases
2. This directory is replaced with the bundle contents
3. Logo SVGs are preserved if the bundle doesn't include them (pending [bitcraft-brand#32](https://github.com/bitcraft-apps/bitcraft-brand/issues/32))

## Adding custom assets

**Do not add custom files here** - they will be overwritten on the next sync.

If you need to add brand assets that aren't in the upstream bundle:

1. Add them to the `bitcraft-brand` repository instead
2. Or place them in a separate directory (e.g., `public/assets/`) that won't be affected by the sync
