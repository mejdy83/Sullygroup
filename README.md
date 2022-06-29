# Sullygroup







# Application créée dans le cadre d'un entretien technique. 


Pour compiler l'application:

    *Cloner ce repository
    *Dans le folder du projet :       $ npm i 
    *Pour lancer le projet en local:  $ ionic serve 
    *Pour compiler sur android:       $ionic cordova platform add android 
                                      $ionic cordova run android // Celà a le rôle induit de build android
   
   
   Pour réaliser cette application, étant donnée le faible taux de fonctionnalités, j'ai opté pour une BDD no sql gratuite : Firebase. Un ion-input sert à entrer le 
    nom de la ville de destination. L'actualisation de cette valeur appelle une fonction API qui est un get de la BDD sur laquelle j'applique un filtre afin de savoir 
    si le nom entré est inclus dans les villes présentes dans un itinéraire.
    
   Dans un objectif de production de cette application, il serait judicieux de créer une IHM pour le client sur un modèle MVC en angular pour une continuité 
   technologique avec possibilité d'ajouter côté front des itinéraires avec des villes dans la base de données. Les API seraient un GET,PUT,DELETE,POST. La 
   modification des 
   itinéraires existants est indispensable. La connexion à cette interface serait aussi gérée par un module Firebase Authentification afin d'avoir un projet complet 
   gérer par le SDK Firebase et éviter de multiplier les technologies. On pourrait aussi dans un cas de complexification de l'outil, utiliser un modèle JWT avec un 
   back qui gérerai les authentifications par token et les API grâce à Rxjs (cf repo Doinsport:https://github.com/mejdy83/Doinsport).
   Pour le déploiement et son automatisation dans un but d'intégration et déploiement continue une approche de Docker pourrait être mise en place avec l'outil Fastlane
 (https://fastlane.tools/) qui faciliterai grandement la signature et le déploiement de ces projets (IHM+Applications cross-platform). Il serait aussi judicieux de 
   un environnement de développement et de production, avec deux serveurs distincts sur gcp afin de procéder au développement et au test sans gêner le produit    
   actuellement en production. De ce fait les URL des api seraient disctinctes et seule la variable URL_API de l'environnement servirait pour le développement, et 
   l'URL_API de l'environnement.production prendrait sa place avec un flag --production lors de la compilation.
