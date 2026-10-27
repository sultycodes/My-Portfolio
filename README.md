# Sultan — Personal Portfolio

Static personal portfolio site built with plain HTML, CSS and vanilla JavaScript. No frameworks, no build step. Host it free on GitHub Pages or Netlify.

## File structure

```
sultan-portfolio/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── main.js
├── assets/          <- your photo (photo.jpg), project images and CV PDF go here
└── README.md
```

## How to edit the content

### 1. Personal details
Open `index.html` and look for the comment block at the very top:

```html
<!--
  PERSONAL DETAILS — EDIT THESE FIRST
  Name: Sultan
  Email: you@example.com
  GitHub: https://github.com/yourusername
  LinkedIn: https://linkedin.com/in/yourusername
  CV file: assets/cv.pdf
  Photo: assets/photo.jpg
-->
```

Change the name, email, GitHub and LinkedIn URLs to your own. Then update:
- `href="mailto:you@example.com"` in the Contact section
- `href="#"` on the GitHub, LinkedIn and Download CV links in the Contact section
- `&copy; Sultan.` in the footer if needed

### 2. Hero
Edit the headline, intro paragraph and button text in the `#hero` section. Your photo is loaded from `assets/photo.jpg` — make sure that file exists. The word `counting.` is wrapped in `<span class="highlight">` for the yellow marker underline — keep that span if you want the highlight.

### 3. About
Edit the bio text in the left column of `#about`, and the skills chips in the right column. On screens narrower than 640px the two columns stack automatically.

### 4. Experience
In `#experience`, edit the placeholder subtitle and the two `.exp-card` articles. Each card shows:
- Role title (bold) + organisation name on the left
- Dates in the accent colour on the right
- A one- or two-sentence description underneath

Add more cards by copying the `.exp-card` pattern. Newest first.

### 5. Add a project
Open `js/main.js`. At the top is a `projects` array. Add a new object following this pattern:

```js
{
  id: 'p4',                        // unique id, e.g. p4, p5 …
  title: 'Your real project title',
  status: 'Planned',               // 'Planned' or 'In progress'
  shortDescription: 'One-sentence description of what it does.',
  problem: 'The problem your project solves.',
  built: 'What you built and how.',
  tools: 'Tools and technologies used.',
  demo: 'https://your-live-demo.link',   // or '#'
  code: 'https://your-code-repo.link'    // or '#'
}
```

Save the file and the tile plus its pop-up are generated automatically.

### 6. Replace your photo
Save your portrait as `assets/photo.jpg`. In the hero section the image is displayed at 17rem wide with a 4/5 portrait ratio, `object-fit: cover` and `object-position: center 15%` so your face stays in view. On screens narrower than 640px it shrinks to a max of 14rem wide.

### 7. Colours and fonts
Colours live as CSS custom properties (`--paper`, `--ink`, `--muted`, `--grid`, `--accent`, `--marker-yellow`, `--card`) at the top of `css/style.css`. A dark theme is applied automatically via `prefers-color-scheme`.

Fonts are loaded from Google Fonts in `index.html`:
- Headings, nav, buttons, labels: **Bricolage Grotesque** (500, 800)
- Body: **Source Serif 4** (400, 600)

## Deploy to GitHub Pages

1. Create a new repository on GitHub (e.g. `sultan-portfolio`).
2. Push this folder's contents to the `main` branch:

   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/yourusername/sultan-portfolio.git
   git push -u origin main
   ```

3. In GitHub, go to **Settings → Pages**.
4. Under "Build and deployment", set Source to **Deploy from a branch**.
5. Select branch `main` and folder `/ (root)`, then click Save.
6. Your site will be live at `https://yourusername.github.io/sultan-portfolio/` (it may take a minute or two).

## Deploy to Netlify

- **Drag-and-drop:** drag the whole `sultan-portfolio` folder onto [netlify.com/drop](https://netlify.com/drop).
- **Git-connected:** connect your GitHub repo in Netlify, set the build command to none and the publish directory to the repo root.
- Your site is live instantly on a Netlify subdomain.

## Check locally

Open `index.html` directly in your browser, or serve it locally:

```bash
# Python 3
python -m http.server 8000
# then visit http://localhost:8000/sultan-portfolio/
```

Resize the browser to check mobile (360px+) and desktop widths. Click a project tile to test that the pop-up opens and closes.

## Placeholders you still need to replace

- `you@example.com` — your real email address
- `https://github.com/yourusername` — your GitHub profile
- `https://linkedin.com/in/yourusername` — your LinkedIn profile
- `assets/cv.pdf` — add your CV PDF and link to it
- `assets/photo.jpg` — your photo (make sure this file exists)
- Project objects p1–p3 in `js/main.js` — all contain the word "Placeholder"
- Experience cards — both contain the word "Placeholder"
- About bio — contains a placeholder note

Once you have a real project or experience to add, send me the details and I'll write the entry for you.