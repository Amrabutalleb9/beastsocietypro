# DNS & email checklist — beastsocietypro.com

When `beastsocietypro.com` uses **Cloudflare DNS**, add records per your mail host and ESP. Examples below are templates—replace includes with your provider values.

## MX (example: Google Workspace)

| Type | Name | Content | Priority | Proxy |
|------|------|---------|----------|-------|
| MX | @ | aspmx.l.google.com | 1 | DNS only |
| MX | @ | alt1.aspmx.l.google.com | 5 | DNS only |
| MX | @ | alt2.aspmx.l.google.com | 5 | DNS only |
| MX | @ | alt3.aspmx.l.google.com | 10 | DNS only |
| MX | @ | alt4.aspmx.l.google.com | 10 | DNS only |

## SPF (single TXT @)

Combine your mail + ESP in one record, e.g.:

`v=spf1 include:_spf.google.com include:YOUR_ESP ~all`

## DMARC

TXT name `_dmarc`, value e.g.:

`v=DMARC1; p=none; pct=100; rua=mailto:contact@beastsocietypro.com; fo=1`

## DKIM

Add the CNAME/TXT records your ESP provides. Keep email auth records **DNS only** (grey cloud).

## www → Pages

Use Cloudflare’s custom domain flow from the Pages project; it will create or suggest the correct `www` routing.

## DNSSEC

Enable in Cloudflare DNS settings after records are stable; add DS at registrar if required.
