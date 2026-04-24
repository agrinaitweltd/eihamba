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
| `hero-bg.png` | Aerial view of coffee plantation in Bwindi (full-width hero background) | `/public/hero-bg.png` |
| `about-farmer.png` | Farmer picking coffee cherries in Bwindi | `/public/about-farmer.png` |
| `coffee-package.webp` | Eihamba coffee package being held (250g bag) | `/public/coffee-package.webp` |
| `partner-logo.png` | Bwindi Coffee Growers Cooperative Society logo (circular) | `/public/partner-logo.png` |
| `vision-bg.png` | Dark coffee forest background for Vision/Mission | `/public/vision-bg.png` |
| `service-sourcing.png` | Hand picking ripe red coffee cherries | `/public/service-sourcing.png` |
| `service-processing.png` | Coffee beans being processed on blue tarp | `/public/service-processing.png` |
| `service-logistics.png` | Man standing with coffee sacks in warehouse | `/public/service-logistics.png` |
| `coffee-cherries.png` | Red coffee cherries on branch (export section) | `/public/coffee-cherries.png` |
| `coffee-branch.png` | Pink coffee cherries on branch (export section) | `/public/coffee-branch.png` |
| `green-beans.png` | Green/raw coffee beans close-up (export section) | `/public/green-beans.png` |
| `robusta-beans.png` | Robusta coffee beans product image | `/public/robusta-beans.png` |
| `drugar-beans.png` | DRUGAR Arabica Natural product image | `/public/drugar-beans.png` |
| `wugar-beans.png` | WUGAR Arabica Washed product image | `/public/wugar-beans.png` |
| `roasted-beans.png` | Eihamba roasted coffee beans package | `/public/roasted-beans.png` |
| `coffee-powder.png` | Coffee powder packages | `/public/coffee-powder.png` |
| `face-oil.png` | Coffee face oil bottles | `/public/face-oil.png` |
| `face-scrub.png` | Coffee face scrub jars | `/public/face-scrub.png` |
| `team-musementa.png` | Musementa Melissa photo (circular) | `/public/team-musementa.png` |
| `team-mugabe.png` | Mugabe Dickson photo (circular, featured) | `/public/team-mugabe.png` |
| `team-natukunda.png` | Natukunda Mercy photo (circular) | `/public/team-natukunda.png` |
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
