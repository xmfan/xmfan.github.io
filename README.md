# xmfan.github.io

A plain static blog served by GitHub Pages from the `master` branch root. No build step.

| Path | Purpose |
| --- | --- |
| `index.html` | Home page: the list of posts |
| `posts/YYYY-MM-DD-slug/index.html` | One self-contained page per post |
| `assets/site.css` | Shared styles for the home page |
| `feed.xml` | RSS feed |
| `.nojekyll` | Tells GitHub Pages to serve files as-is |

## Adding a post

1. Create `posts/YYYY-MM-DD-slug/index.html`.
2. Add an entry at the top of the list in `index.html`.
3. Add an `<item>` to `feed.xml`.

## Previewing locally

```sh
python3 -m http.server 8000
```

Then open <http://localhost:8000/>.
