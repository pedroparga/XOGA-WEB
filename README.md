# XOGA Web

## Local

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Env

Create `.env.local`:

```env
RESEND_API_KEY=REPLACE_WITH_YOUR_RESEND_API_KEY
CONTACT_FROM="XOGA <no-reply@xogaapp.es>"
CONTACT_TO="xogaapp@gmail.com"
```

## Cloudflare Workers

Local preview in Workers runtime:

```bash
npm run preview
```

Deploy:

```bash
npm run deploy
```

## Cloudflare dashboard

1. Push this repo to GitHub.
2. In Cloudflare go to `Workers & Pages`.
3. Create a new `Worker` from `Import a repository`.
4. Select this GitHub repo.
5. Set production branch to `main` or your real production branch.
6. Set deploy command to `npx wrangler deploy` if Cloudflare does not auto-detect it.
7. Add Worker variables:
   - `RESEND_API_KEY`
   - `CONTACT_FROM`
   - `CONTACT_TO`
8. Deploy first to the generated `workers.dev` URL.
9. When verified, attach your real domain to the Worker.
