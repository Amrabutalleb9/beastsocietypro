# Setup: Beast Society Pro

All six domains follow the same deploy pattern; see **[BEAST_SITES_CLOUDFLARE.md](../BEAST_SITES_CLOUDFLARE.md)** in the parent folder for a combined checklist.

## Contact & compliance

- **Email:** contact@beastsocietypro.com
- **Mailing location (CAN-SPAM / legal):** Dubai, United Arab Emirates  
  Replace or extend with your full postal address in `index.html` (contact section + footer) and each legal page under **Contact Us** if your counsel requires a street address.

## GitHub (own repo)

GitHub CLI was not available in this environment. From `d:\Andrew\Email websites\beastsocietypro`:

```powershell
git init
git add -A
git commit -m "Initial commit: Beast Society Pro website"
git branch -M main
git remote add origin https://github.com/YOUR_USER/beastsocietypro.git
git push -u origin main
```

Create an empty repository named `beastsocietypro` on GitHub first, then set `YOUR_USER` (or org) and push.

## Cloudflare Pages

1. Cloudflare Dashboard → Workers & Pages → Create → **Pages** → Connect to Git.
2. Repository: `beastsocietypro` (after push).
3. **Build command:** (empty). **Build output directory:** `/` (root).
4. **Production branch:** `main`.
5. **Custom domains:** add `beastsocietypro.com` and `www.beastsocietypro.com`.

## DNS & email (optional)

See `DNS_EMAIL.md` in this folder for SPF, DMARC, MX, and DKIM guidance when the zone is on Cloudflare.
