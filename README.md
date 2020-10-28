
# Utiliser un pré-processeur CSS (SASS)

Un **préprocesseur**  **CSS** est un programme qui interprète votre code source pour générer un code standard du web : le CSS. Il y a de nombreux préprocesseurs CSS au choix, mais la plupart des préprocesseurs CSS ajoutent quelques fonctionnalités qui n'existent pas en CSS pur, telles que variable, mixin, sélecteur d'imbrication, etc. Ces fonctionnalités rendent la structure CSS plus lisible et plus facile à maintenir.

Pour utiliser un préprocesseur CSS, il faut installer un compilateur.

Pour simplifier les choses nous allons utiliser un plugin sur Visual Studio Code qui se chargera de compiler notre code CSS : [Live Sass Compiler](https://marketplace.visualstudio.com/items?itemName=ritwickdey.live-sass).

Commencez par installer ce plugin sur VSC.

Pour spécifier l'endroit où le code CSS doit être compilé, créer un répertoire de configuration `.vscode` avec un fichier `settings.json` à l'intérieur et les lignes de code suivantes :
```json
{
	"liveSassCompile.settings.formats": [
		{
			"format": "expanded",
			"extensionName": ".css",
			"savePath": "/dist/css/"
		}
	],
	"liveServer.settings.port": 5503
}
```
  

Voici l'organisation des fichiers SCSS (dans le dossier `assets`/`scss`) :
-  `base` => Les propriétés de base
	-  `_main.scss`
	-  `_sections.scss`
	-  `_typography.scss`
-  `components` => les composants de l'interface
	-  `_btn.scss`
	-  `_card.scss`
	-  `_carousel.scss`
	-  `_form.scss`
	-  `_menul.scss`
-  `layout` => les éléments de composition générale
	-  `_footer.scss`
	-  `_grid.scss`
	-  `_header.scss`
-  `utils` => les fonctions, mixins, variables
	-  `_functions.scss`
	-  `_mixins.scss`
	-  `_variables.scss`
-  `vendors` => les librairies css
	-  `_flickity.scss`
	-  `_normalise.scss`

Pour tester la compilation :

=> dans le fichier `_variables.scss` :

```scss
$color: red;
```
=> dans le fichier `_main.scss` :
```scss
body {
	color: $color;
}
```

puis cliquez sur le bouton "*Watch Sass*" dans la barre bleu en bas de VSC.