
# Paramétrage de la grille

Paramétrez la grille dans le partial `_gris.scss` en utilisant [grid-layout](https://developer.mozilla.org/fr/docs/Web/CSS/CSS_Grid_Layout)

```scss
$min: 0;
// Calcul pour la taille maximum d'une colonne de la grille
$max: calc( ( #{ $container } - #{ $grid-gap } * ( #{ $grid-columns } - 1 ) ) / #{ $grid-columns } );

.grid {
	@include  bp-up('md') {
		display: grid;
		grid-gap: $grid-gap;
		/**
		* grid-auto-flow indique le fonctionnement de l'algorithme de placement automatique et
		* détaille comment les éléments placés automatiquement « coulent » dans la grille.
		* Avec la valeur "dense" l'algorithme utilisera une méthode de « regroupement dense »
		* où il essaie de remplir les trous dans la grille si des éléments plus petits arrivent ensuite.
		**/
		grid: auto-flow dense / repeat( $grid-columns, minmax( $min, $max ) );
		// Permet de centrer la grille dans la largeur de la page
		justify-content: center;
		/** 
		* Permet une marge de sécurité sur les bords de la page 
		* lorsqu'il n'y a plus d'espaces automatiques disponible de chaque coté 
		**/
		padding-right: $container-margin;
		padding-left: $container-margin;
		
		// Pour définir un partage de la grille en 3 colonnes
		&__third {
			grid-column: span  4;
		}
	}
}
```

- Ajouter la class `grid` dans le fichier `index.html` sur les éléments qui le nécessitent.

- dans le fichier `index.html`, tout de suite après `<body>`, ajouter :

```html
	<button class="btnGrid">Afficher la grille</button>
```
- Dans le partial `_grid.scss` et le fichier `scripts.js`, ajouter le code permettant de visualiser la grille (pratique pendant le développement).