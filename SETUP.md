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
git remote add origin https://github.com/Amrabutalleb9/beastsocietypro.git
git push -u origin main
```

Remote `origin` is set to **Amrabutalleb9/beastsocietypro**; push with `git push -u origin main` after local commits.

## Cloudflare Pages

This repo includes **`.github/workflows/deploy-cloudflare-pages.yml`**. Add GitHub Actions secrets **`CLOUDFLARE_API_TOKEN`** and **`CLOUDFLARE_ACCOUNT_ID`** (see parent **[BEAST_SITES_CLOUDFLARE.md](../BEAST_SITES_CLOUDFLARE.md)**). Each push to `main` runs `wrangler pages deploy` and can create the Pages project on first success.

Then attach **Custom domains** in the Cloudflare project: `beastsocietypro.com` and `www.beastsocietypro.com`.

**Alternative:** Dashboard → Workers & Pages → Connect to Git (empty build, output `/`) instead of the workflow.

## DNS & email (optional)

See `DNS_EMAIL.md` in this folder for SPF, DMARC, MX, and DKIM guidance when the zone is on Cloudflare.
