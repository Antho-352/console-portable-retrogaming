# Guide de Déploiement GitHub

## Étape 1 : Créer le dépôt sur GitHub

1. Allez sur https://github.com/Antho-352
2. Cliquez sur le bouton "New" (nouveau dépôt)
3. Remplissez les informations :
   - **Repository name** : `retroxgames`
   - **Description** : "Page de vente optimisée pour consoles rétro portables - Affiliation Amazon"
   - **Visibility** : Public ou Private (selon votre préférence)
   - **NE PAS** cocher "Initialize this repository with a README" (déjà créé localement)
4. Cliquez sur "Create repository"

## Étape 2 : Connecter le dépôt local à GitHub

Après avoir créé le dépôt sur GitHub, exécutez ces commandes :

```bash
cd /Users/anthonyrusso/.gemini/antigravity/scratch/retroxgames

# Ajouter le remote GitHub
git remote add origin https://github.com/Antho-352/retroxgames.git

# Renommer la branche en main (si nécessaire)
git branch -M main

# Pousser le code
git push -u origin main
```

## Étape 3 : Activer GitHub Pages (optionnel)

Si vous voulez héberger gratuitement sur GitHub Pages :

1. Allez dans votre dépôt sur GitHub
2. Cliquez sur "Settings" (Paramètres)
3. Dans le menu de gauche, cliquez sur "Pages"
4. Sous "Source", sélectionnez :
   - **Branch** : `main`
   - **Folder** : `/ (root)`
5. Cliquez sur "Save"
6. Attendez quelques minutes
7. Votre site sera accessible à : `https://antho-352.github.io/retroxgames/`

## Étape 4 : Ajouter les images produits

Avant de déployer en production :

1. Téléchargez les images depuis Amazon
2. Placez-les dans le dossier `images/`
3. Nommez-les exactement comme dans le HTML :
   - `ayaneo-pocket-dmg.jpg`
   - `r36s-console.jpg`
   - `gamewatch-mario.jpg`
   - `gamewatch-zelda.jpg`
   - `pacman-arcade.jpg`
   - `mini-arcade.jpg`
   - `console-100-jeux.jpg`

4. Commitez et poussez :

```bash
git add images/
git commit -m "Add product images"
git push
```

## Étape 5 : Configuration du domaine personnalisé (optionnel)

Si vous voulez utiliser `retroxgames.fr` :

1. Dans GitHub Pages settings, ajoutez votre domaine dans "Custom domain"
2. Configurez votre DNS chez votre registrar :
   - Type : `CNAME`
   - Name : `www` (ou `@` pour le domaine racine)
   - Value : `antho-352.github.io`
3. Attendez la propagation DNS (quelques heures)

## Commandes Git Utiles

### Voir le statut
```bash
git status
```

### Ajouter des modifications
```bash
git add .
git commit -m "Description des changements"
git push
```

### Voir l'historique
```bash
git log --oneline
```

### Créer une nouvelle branche
```bash
git checkout -b feature/nouvelle-fonctionnalite
```

## Prochaines Étapes

- [ ] Créer le dépôt sur GitHub
- [ ] Pousser le code initial
- [ ] Ajouter les images produits
- [ ] Tester la page localement
- [ ] Activer GitHub Pages (si souhaité)
- [ ] Configurer le domaine personnalisé
- [ ] Soumettre à Google Search Console
- [ ] Installer Google Analytics

## Support

En cas de problème :
- Vérifiez que vous êtes bien connecté à GitHub : `git remote -v`
- Vérifiez votre authentification GitHub
- Consultez la documentation : https://docs.github.com/
