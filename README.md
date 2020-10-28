# La méthodologie BEM

Trouver des noms de classes étant à la fois explicites, mais ni trop génériques, ni trop précis n’est pas toujours évident.  
C’est pour répondre à ces problématiques et simplifier l’écriture du CSS que plusieurs méthodologies ont été créées, dont [BEM](https://en.bem.info/) que nous utiliserons ici.

## Principe

La méthodologie  [BEM](https://en.bem.info/)  repose sur un principe, qu’est la composition d’une page web en différents types d’entités :

**Block :**  c’est un composant générique, ou “parent”, contenant un ou plusieurs  _elements_  (notre deuxième type de composants). Celui-ci est une partie “globale” de la page, lorsqu’un  _block_  est retiré du contexte de la page, il garde toujours du sens.

**Element :**  le second composant est un  _element_, celui-ci est plus spécifique et précis que le  _block_. Un  _element_  ne peut pas être utilisé en dehors de son  _block_  parent.

**Modifier :**  c’est une entité qui définit l’apparence d’un composant (_block_  ou  _element_).  

## Conventions de nommage

Afin de rendre les noms de classes le plus compréhensible possible, des conventions de nommage sont utilisées, ce qui permet d’avoir une syntaxe similaire partout dans le code (CSS, JavaScript & HTML).

**Block :**  au sein même d’un nom de  _block_, c’est le “kebab case” (ou spinal case) qui est utilisé. C’est-à-dire que la séparation des mots se fait grâce à des tirets (dashes), comme ceci :

-   `block-name`

**Element :**  comme pour le  _block_, c’est le “kebab case” que l’on utilise dans le nom d’un élément. En revanche, étant donné qu’un élément fait partie d’un bloc, on doit spécifier le nom du bloc parent avant le nom de l’élément. Ce qui donne le résultat suivant :

-   `block-name__element-name`

**Modifier :** Tout comme les  _blocks_  et  _elements_, la convention au sein du nom d’un  _modifier_  est également le “kebab case”.

-   `block-name--modifier-name`
-   `block-name__element-name--modifier-name`

La séparation entre chaque composant se fait en “snake case”, mais de façon un peu particulière. En effet, ce n’est pas un mais deux underscores qui sont utilisés. La séparation entre un composant et un  _modifier_  se fait quant à elle grâce à deux tirets. Cette différence permet d’un simple coup d’oeil de faire la différence entre un  _element_  et un  _modifier_.