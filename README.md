# Mini Shop

Intentionally buggy mini app for **DevResolve AI** testing.

## Bug
An out-of-stock product can still be added to cart.

**Expected:** Add to Cart must be disabled when stock is 0.

**Actual:** Button remains active and cart count increases.

## Run
```bash
npm install
npm run dev
```

## Reproduce with tests
```bash
npm test
```
The failing test is intentional. The repository should be fixed by the coding agent later.

## Deploy
Import this repository into Vercel and deploy with the default Next.js settings.
