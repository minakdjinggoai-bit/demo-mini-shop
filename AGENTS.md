# Project Context
Project: Mini Shop
Purpose: Small intentionally buggy web application used to test DevResolve AI.

## Commands
- Install: npm install
- Dev: npm run dev
- Test: npm test
- Build: npm run build

## Agent rules
- Fix only the reported bug with the smallest safe change.
- Do not remove tests to make them pass.
- Run the relevant test after modifying code.
- Run the production build before declaring the fix verified.
- Summarize root cause, files changed, and validation results.
