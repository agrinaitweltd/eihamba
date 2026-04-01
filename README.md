# Eihamba Coffee Website

Premium Ugandan coffee website — Every Cup Protects Mountain Gorillas.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment

This project is ready for deployment on **Vercel** or **Netlify**:

- **Vercel**: Push to GitHub and import the repository at [vercel.com](https://vercel.com)
- **Netlify**: Push to GitHub, connect at [netlify.com](https://netlify.com), build command: `npm run build`, publish directory: `.next`

## Image Placeholders

All images should be saved in the `/public` folder. Below is the complete list:

| File Name | Description | Location |
|---|---|---|
| `logo.png` | Eihamba Coffee logo (small, ~45x45px for header, ~60x60px for footer) | `/public/logo.png` |
| `hero-bg.jpg` | Aerial view of coffee plantation in Bwindi (full-width hero background) | `/public/hero-bg.jpg` |
| `about-farmer.jpg` | Farmer picking coffee cherries in Bwindi | `/public/about-farmer.jpg` |
| `coffee-package.webp` | Eihamba coffee package being held (250g bag) | `/public/coffee-package.webp` |
| `partner-logo.png` | Bwindi Coffee Growers Cooperative Society logo (circular) | `/public/partner-logo.png` |
| `vision-bg.jpg` | Dark coffee forest background for Vision/Mission | `/public/vision-bg.jpg` |
| `service-sourcing.jpg` | Hand picking ripe red coffee cherries | `/public/service-sourcing.jpg` |
| `service-processing.jpg` | Coffee beans being processed on blue tarp | `/public/service-processing.jpg` |
| `service-logistics.jpg` | Man standing with coffee sacks in warehouse | `/public/service-logistics.jpg` |
| `coffee-cherries.jpg` | Red coffee cherries on branch (export section) | `/public/coffee-cherries.jpg` |
| `coffee-branch.jpg` | Pink coffee cherries on branch (export section) | `/public/coffee-branch.jpg` |
| `green-beans.jpg` | Green/raw coffee beans close-up (export section) | `/public/green-beans.jpg` |
| `robusta-beans.jpg` | Robusta coffee beans product image | `/public/robusta-beans.jpg` |
| `drugar-beans.jpg` | DRUGAR Arabica Natural product image | `/public/drugar-beans.jpg` |
| `wugar-beans.jpg` | WUGAR Arabica Washed product image | `/public/wugar-beans.jpg` |
| `roasted-beans.jpg` | Eihamba roasted coffee beans package | `/public/roasted-beans.jpg` |
| `coffee-powder.jpg` | Coffee powder packages | `/public/coffee-powder.jpg` |
| `face-oil.jpg` | Coffee face oil bottles | `/public/face-oil.jpg` |
| `face-scrub.jpg` | Coffee face scrub jars | `/public/face-scrub.jpg` |
| `team-musementa.jpg` | Musementa Melissa photo (circular) | `/public/team-musementa.jpg` |
| `team-mugabe.jpg` | Mugabe Dickson photo (circular, featured) | `/public/team-mugabe.jpg` |
| `team-natukunda.jpg` | Natukunda Mercy photo (circular) | `/public/team-natukunda.jpg` |
| `partner-bcgcs.png` | BCGCS partner logo | `/public/partner-bcgcs.png` |
| `partner-ucda.png` | UCDA partner logo | `/public/partner-ucda.png` |
| `partner-mcga.png` | MCGA partner logo | `/public/partner-mcga.png` |
| `favicon.ico` | Browser favicon | `/public/favicon.ico` |

## Project Structure

```
/public          → Image assets (add images here)
/components      → Reusable section components
/pages           → Next.js pages
/styles          → Global CSS styling
/hooks           → Custom React hooks
```

## Tech Stack

- **Next.js 14** (React framework)
- **CSS** (custom, no external UI library)
- **Google Fonts** (Playfair Display + Inter)
