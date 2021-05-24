Parser d'expression mathématique
Introduction
Nous allons essayer de coder un parser d'expressions mathématique simples.

Simples, car nous poserons les limitations suivantes :

les seules opérateurs possibles seront +, -, _ et / (cette dernière en division réelle, pas entière),
les règles de priorités seront les plus simples : _ et / doivent se résoudre avant + et -, mais les parenthèses ou tout syntaxe changeant les priorités ne seront pas utilisées,
les nombres ne peuvent pas être négatifs, même si le résultat final peut l'être,
tous les éléments des expressions seront séparés les uns des autres par un espace.
Les expressions mathématiques seront sous la forme d'une chaîne de caractères, par exemple :

"0"
"4 + 8"
"98 \* 6.3 + 45 - 7 / 2 + 87"
Ces expressions ne seront pas valides :

"3 _ -2" (nombre négatif)
"4 _ ( 5 + 6 )" (parenthèses)
"4\*3" (espaces manquants)
Le choix du langage utilisé est libre.

# Étape 1 - Parsing

Créez une première fonction A qui prend une chaîne de caractère et retourne une liste de tous ses éléments dans l'ordre (nombres et opérateurs).

A("4 + 6.2 \* 8")

["4", "+", "6.2", "*", "8"]

# Étape 2 - Qualification des éléments

Pour le moment, en sortie de A tous les éléments sont des chaînes de caractères - pas bien utile pour faire une opération mathématique.

Développer une fonction B qui prend en entrée une liste de chaîne de caractères (typiquement le résultat de la fonction A) et retourne une liste d'éléments ayant pour type :

soit un nombre pour les nombres (attention, ces nombres peuvent être des flottants),
soit une chaîne de caractère pour les opérateurs.
B(["4", "+", "6.2", "*", "8"])

[4, "+", 6.2, "*", 8]

# Étape 3 - Opérations de base

Pour chaque opérateur, créer une fonction implémentant son opération. Tous les opérateurs sont ici binaires : les fonctions devront donc prendre deux arguments et retourner le résultat.

En partant du principe que ces fonctions s'appeleraient add, minux, multiply, true_divide, il nous faudrait donc des fonctions :

add(5, 0)
5
minus(3, 9)
-6
multiply(2, 0)
0
true_divide(1, 2)
0.5

# Étapes 4 - Calcul de l'expression

C'est maintenant que le jus de cerveau va commencer à suinter : il faut calculer enfin notre expression mathématique.

Exemple d'expression mathématique : "98 - 6 _ 8 _ 1.5 + 4 - 1 / 5"
