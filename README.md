# Sullygroup







# Application créée dans le cadre d'un entretien technique. 


Pour compiler l'application:

    *Cloner ce repository
    *Dans le folder du projet :       $ npm i 
    *Pour lancer le projet en local:  $ ionic serve 
    *Pour compiler sur android:       $ionic cordova platform add android 
                                      $ionic cordova run android // Celà a le rôle induit de build android
    *Pour réaliser cette application, étant donnée le faible taux de fonctionnalités, j'ai opté pour une BDD no sql gratuite : Firebase. Un ion-input sert à entrer le *nom de la ville de destination. L'actualisation de cette valeur appelle une fonction API qui est un get de la BDD sur laquelle j'applique un filtre afin de savoir si le *nom entré est inclus dans les villes présentes dans un itinéraire.
    
