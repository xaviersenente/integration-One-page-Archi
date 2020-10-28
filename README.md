# Ajout des supports tablette et Desktop

Utilisez les medias queries pour ajuster les différents composants de l'interface aux autres supports (tablette, écran de bureau).

### Supports "supérieurs" (mobile first)

La plupart les media queries devraient faire référence aux supports "supérieurs", et donc utiliser plutôt la mixin suivante :
`@include bp-up('md')` ou `@include bp-up('lg')`

### Position des éléments dans la grille

Positionnez les éléments dans la grille en utilisant `grid-column` et `grid-row`

### Responsive

Ajustez les règles CSS pour l'ensemble des composants de l'interface afin qu'ils s'adaptent aux différents supports.