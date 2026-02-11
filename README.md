# RetroXGames - Page de Vente Consoles Rétro Portables

Page de vente optimisée pour l'affiliation Amazon, présentant 7 consoles rétro portables avec comparatif complet et guide d'achat.

## 🎯 Objectifs SEO

- **Mots-clés cibles** : console retro portable, meilleure console retro, console retrogaming 2025
- **URL recommandée** : `/meilleures-consoles-retro-portables-2025/`
- **Meta optimisée** : Titre et description inclus dans le HTML

## 📦 Contenu du Projet

- `index.html` - Page principale avec structure complète et Schema.org
- `styles.css` - Design premium inspiré de goret-team.fr
- `script.js` - Fonctionnalités interactives (menu sticky, accordion, tri tableau)
- `images/` - Dossier pour les images produits (à remplir)
- `README.md` - Ce fichier

## 🚀 Installation

### 1. Cloner ou télécharger le projet

```bash
cd /Users/anthonyrusso/.gemini/antigravity/scratch/retroxgames
```

### 2. Ajouter les images produits

Téléchargez les images depuis Amazon et placez-les dans le dossier `images/` :

- `ayaneo-pocket-dmg.jpg`
- `r36s-console.jpg`
- `gamewatch-mario.jpg`
- `gamewatch-zelda.jpg`
- `pacman-arcade.jpg`
- `mini-arcade.jpg`
- `console-100-jeux.jpg`

**Format recommandé** : WebP (800x800px minimum) avec fallback JPG

### 3. Tester localement

Ouvrez `index.html` dans votre navigateur ou utilisez un serveur local :

```bash
# Option 1: Python
python3 -m http.server 8000

# Option 2: Node.js (npx)
npx serve .

# Option 3: VS Code Live Server
# Clic droit sur index.html > "Open with Live Server"
```

Accédez à `http://localhost:8000`

## 🎨 Personnalisation

### Modifier les couleurs

Dans `styles.css`, section `:root` :

```css
--primary-blue: #2563EB;    /* Couleur principale */
--primary-orange: #FF6B35;  /* Boutons CTA */
--primary-green: #10B981;   /* Éléments de confiance */
--accent-yellow: #FCD34D;   /* Badges premium */
```

### Ajouter/Modifier des produits

1. Ouvrez `index.html`
2. Cherchez la section du produit (ex: `<!-- Product 1: AYANEO -->`)
3. Dupliquez le bloc `.product-card`
4. Modifiez :
   - Titre (`<h3>`)
   - Prix (`.product-price`)
   - Caractéristiques (`.product-features li`)
   - Lien Amazon (`href`)

### Modifier le tag d'affiliation

Remplacez `tag=35203a-21` par votre propre tag Amazon dans tous les liens :

```bash
# Rechercher et remplacer dans index.html
tag=35203a-21  →  tag=VOTRE-TAG
```

## 📊 Fonctionnalités

### ✅ Implémentées

- [x] Navigation sticky avec smooth scroll
- [x] Menu burger responsive
- [x] Tableau comparatif triable
- [x] Accordion FAQ
- [x] Lazy loading images
- [x] CTA sticky au scroll
- [x] Animations au scroll
- [x] Schema.org (Product, AggregateRating, Offer, FAQPage)
- [x] Meta tags SEO optimisés
- [x] Design responsive (mobile, tablet, desktop)

### 🔄 Optionnelles (à ajouter)

- [ ] Filtres sur le tableau comparatif
- [ ] Wishlist localStorage
- [ ] Partage social
- [ ] Code promo Amazon
- [ ] Google Analytics tracking

## 🧪 Tests & Validation

### 1. Validation HTML

```bash
# Installer le validateur
npm install -g html-validator-cli

# Valider
html-validator --file=index.html --verbose
```

Ou en ligne : https://validator.w3.org/

### 2. Validation CSS

En ligne : https://jigsaw.w3.org/css-validator/

### 3. Schema.org

Testez avec Google Rich Results Test :
https://search.google.com/test/rich-results

### 4. Lighthouse (Performance & SEO)

```bash
# Installer Lighthouse
npm install -g lighthouse

# Lancer l'audit
lighthouse ./index.html --output=html --output-path=./lighthouse-report.html --view
```

**Objectifs** :
- Performance : 90+
- SEO : 95+
- Accessibility : 90+
- Best Practices : 90+

### 5. Tests Responsifs

- **Mobile** : 375px (iPhone SE)
- **Tablet** : 768px (iPad)
- **Desktop** : 1440px

Utilisez Chrome DevTools (F12 > Toggle Device Toolbar)

## 🌐 Déploiement

### Option 1 : Hébergement statique (Netlify, Vercel)

```bash
# Netlify
netlify deploy --dir=. --prod

# Vercel
vercel --prod
```

### Option 2 : cPanel / FTP

1. Compressez le dossier en ZIP
2. Uploadez via FTP dans `/public_html/meilleures-consoles-retro-portables-2025/`
3. Décompressez sur le serveur

### Option 3 : GitHub Pages

```bash
# Créer le repo
git init
git add .
git commit -m "Initial commit - RetroXGames sales page"
git branch -M main
git remote add origin https://github.com/Antho-352/retroxgames.git
git push -u origin main

# Activer GitHub Pages
# Settings > Pages > Source: main branch
```

## 📈 Optimisations SEO

### Checklist avant mise en ligne

- [ ] Toutes les images ont des attributs `alt` descriptifs
- [ ] Meta title et description optimisés
- [ ] Schema.org validé sans erreurs
- [ ] Tous les liens Amazon contiennent le bon tag d'affiliation
- [ ] Sitemap.xml créé (si site multi-pages)
- [ ] robots.txt configuré
- [ ] Google Search Console configuré
- [ ] Google Analytics installé

### Créer un sitemap.xml

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://retroxgames.fr/meilleures-consoles-retro-portables-2025/</loc>
    <lastmod>2025-02-11</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
```

### Créer un robots.txt

```
User-agent: *
Allow: /

Sitemap: https://retroxgames.fr/sitemap.xml
```

## 🔗 Liens Utiles

- **Amazon Partenaires** : https://partenaires.amazon.fr
- **Google Search Console** : https://search.google.com/search-console
- **Google Analytics** : https://analytics.google.com
- **PageSpeed Insights** : https://pagespeed.web.dev

## 📝 Produits Inclus

| Produit | Prix | ASIN | Statut |
|---------|------|------|--------|
| AYANEO Pocket DMG | 510,95€ | B0DG64W3QV | ✅ |
| R36S 128Go | 59,99€ | B0FNQ4W345 | ✅ |
| Game Watch Mario | 64,90€ | B08GZ3DRLW | ✅ |
| Game Watch Zelda | 59,80€ | B08GYPMKR6 | ✅ |
| My Arcade Pac-Man | 43,90€ | B07GLF2JDK | ✅ |
| Mini Arcade Retro | 32,99€ | TBD | ⚠️ Lien à ajouter |
| Console 100 Jeux | ~25€ | B0F4JZ9WBF | ✅ |

**Note** : 2 produits (B0CP46GWQ9 et B0GG9ZFPL6) n'ont pas pu être récupérés. Vous pouvez les ajouter manuellement si nécessaire.

## 🐛 Problèmes Connus

- **Images manquantes** : Les images sont des placeholders. Remplacez-les par les vraies images Amazon.
- **Lien Mini Arcade** : Le lien Amazon n'est pas défini (href="#"). À compléter.

## 📞 Support

Pour toute question ou problème :
1. Vérifiez la console du navigateur (F12)
2. Validez le HTML/CSS
3. Testez sur différents navigateurs

## 📄 Licence

Projet créé pour RetroXGames.fr - Tous droits réservés.

---

**Créé le** : 11 février 2025  
**Version** : 1.0  
**Tag d'affiliation** : 35203a-21
