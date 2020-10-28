// HELPERS
// =================================

/**
 * récupère l'index d'un élément dans son nœud parent
 * @param {Object} node - Le noeud.
 */
function indexInParent(node) {
  let children = node.parentNode.childNodes;
  let num = 0;
  for (let i = 0; i < children.length; i++) {
    if (children[i] == node) return num;
    if (children[i].nodeType == 1) num++;
  }
  return -1;
}

/**
 * element(index) selector
 * @param {number} index - Le numéro d'index de chaque slide.
 */
function eq(index) {
  if (index >= 0 && index < this.length)
  return this[index];
  else
  return -1;
}
