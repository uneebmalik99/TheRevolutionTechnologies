# Deploy TRT at http://162.35.161.125/trt/

The auction application continues to own `/`. TRT is a static website served only under `/trt/`. The server's web server must route that prefix to the exported files before any auction catch-all rule.

## Build

```sh
npm run build:interserver
```

This embeds `/trt` in Next.js routes and script/style paths, prefixes public image paths, and sets metadata to the IP address. Upload the **contents** of `out/` into the server's TRT directory, including `_next/`, `images/`, and all page directories. Do not upload source code or `node_modules`. Do not upload to the auction site's root.

Normal `npm run build` still produces the original root-path build. The GitHub workflow now runs `npm run build:interserver` and uploads `out/` to InterServer via explicit FTPS on port 21, on pushes to `main` or manual runs.

Configure these repository secrets in GitHub under **Settings → Secrets and variables → Actions** before running the workflow:

- `INTERSERVER_FTP_HOST`: the InterServer FTP hostname or IP supplied for your account.
- `INTERSERVER_FTP_USERNAME`: the InterServer FTP account username.
- `INTERSERVER_FTP_PASSWORD`: the InterServer FTP account password.
- `INTERSERVER_FTP_SERVER_DIR`: the destination path as seen by that FTP account, ending in `/trt/` (for example, `./public_html/trt/` if that account's `public_html` serves the IP).

Confirm that the account supports explicit FTPS and that the destination maps to `http://162.35.161.125/trt/`. The workflow requires an explicit TRT destination and rejects paths containing `..` to avoid uploading into the auction site's root. Hostinger's old `FTP_*` secrets are no longer used.

## Apache / cPanel

Identify the document root of the virtual host that actually serves `162.35.161.125` (an account's `public_html` is only correct if that account handles the IP request). Create `trt/` inside that document root and place the exported contents there. Apache should use `index.html` as the directory index.

If the auction application rewrites all requests, exclude `/trt` from its catch-all rule before the auction rewrite. For a document-root `.htaccess` using mod_rewrite, a possible exclusion is:

```apache
RewriteEngine On
RewriteRule ^trt(?:/|$) - [L]
```

Integrate this with the existing rules after inspecting them; don't replace the auction `.htaccess`. No SPA fallback is needed: each TRT page has an exported directory with `index.html`.

## Nginx

Inside the existing server block handling this IP, add a dedicated prefix location. Example assuming exported contents are stored at `/var/www/trt/`:

```nginx
location = /trt {
    return 301 /trt/;
}

location ^~ /trt/ {
    root /var/www;
    index index.html;
    try_files $uri $uri/ =404;
}
```

The location matches `/trt/...` to `/var/www/trt/...`, including `/trt/_next/...`. Retain the existing auction location blocks. Adapt the filesystem path to the actual server, check filesystem read permissions, validate with `nginx -t`, and reload only after validation passes.

## Verify after upload

- `/` still opens the auction website.
- `/trt/` opens TRT with images, styles, and JavaScript.
- Direct visits and refreshes work at `/trt/services/`, `/trt/portfolio/`, and `/trt/contact/`.
- Navigation stays under `/trt/`; service section anchors work.
- `/trt/images/logo12.png` and the script URLs from page source return files, not the auction application.
- Unknown `/trt/` paths return 404 rather than falling through to the auction application.

Server access method, the active web server configuration, and the destination directory must be confirmed before uploading or changing server rules.
