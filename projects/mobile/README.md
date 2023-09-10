# Handy-Mirror MOBILE

L'application mobile permettant de consomer l'API et faire en sorte que le miroir magique réponde en fonction de ce qui est saisie par l'utilisateur.

## Installation de watchman pour Linux Ubuntu

**ATTENTION LES DEMARCHES QUI VONT SUIVRENT PEUVENT-ÊTRE DIFFERENTE D'UN SYSTEM A l'AUTRE**

- Watchman (package)[https://github.com/facebook/watchman/releases/tag/v2023.09.04.00]

### 1 - Décompression du fichier fraîchement téléchargé

```sh
# 1 - dans le folder ou est situé l'archive téléchargé, ouvrir un terminal et saisir:
sudo dpkg -i watchman_ubuntu22.04_v2023.09.04.00.deb # faîte attention à la version utilisé
```

Résultat dans la console:

```
Sélection du paquet watchman précédemment désélectionné.
(Lecture de la base de données... 249548 fichiers et répertoires déjà installés.)
Préparation du dépaquetage de watchman_ubuntu22.04_v2023.09.04.00.deb ...
Dépaquetage de watchman (20230903.183747.0) ...
dpkg: des problèmes de dépendances empêchent la configuration de watchman :
 watchman dépend de libgoogle-glog0v5 ; cependant :
  Le paquet libgoogle-glog0v5 n'est pas installé.
 watchman dépend de libboost-context1.74.0 ; cependant :
  Le paquet libboost-context1.74.0 n'est pas installé.
 watchman dépend de libdouble-conversion3 ; cependant :
  Le paquet libdouble-conversion3 n'est pas installé.
 watchman dépend de libsnappy1v5 ; cependant :
  Le paquet libsnappy1v5 n'est pas installé.

dpkg: erreur de traitement du paquet watchman (--install) :
 problèmes de dépendances - laissé non configuré
Des erreurs ont été rencontrées pendant l'exécution :
 watchman
```

### 2 - Mise à jour du système

```sh
# 2 - en cas de problème de dépendance non installé
sudo apt-get update -y
sudo apt upgrade -y
```

### 3 - Installation

```sh
# 3 - Installer un des dépendances absente
sudo apt-get install libgoogle-glog0v5
```

Résultat dans la console:

```
Lecture des listes de paquets... Fait
Construction de l'arbre des dépendances... Fait
Lecture des informations d'état... Fait
Note : sélection de libgoogle-glog0v5 pour l'expression rationnelle « libgoogle-glog0v5* »
Vous pouvez lancer « apt --fix-broken install » pour corriger ces problèmes.
Les paquets suivants contiennent des dépendances non satisfaites :
 libgoogle-glog0v5 : Dépend: libgflags2.2 (>= 2.2.2) mais ne sera pas installé
 watchman : Dépend: libboost-context1.74.0 mais ne sera pas installé
            Dépend: libdouble-conversion3 mais ne sera pas installé
            Dépend: libsnappy1v5 mais ne sera pas installé
E: Dépendances non satisfaites. Essayez « apt --fix-broken install » sans paquet
   (ou indiquez une solution).
```

### 4 - Fixer les problèmes de dépendances

```sh
# 4 - J'ai des dépendances de cassés, alors je saisie comme demandé
sudo apt --fix-broken install
```

Résultat dans la console:

```
Lecture des listes de paquets... Fait
Construction de l'arbre des dépendances... Fait
Lecture des informations d'état... Fait
Correction des dépendances... Fait
Les paquets supplémentaires suivants seront installés :
  libboost-context1.74.0 libdouble-conversion3 libgflags2.2 libgoogle-glog0v5 libsnappy1v5
Les NOUVEAUX paquets suivants seront installés :
  libboost-context1.74.0 libdouble-conversion3 libgflags2.2 libgoogle-glog0v5 libsnappy1v5
0 mis à jour, 5 nouvellement installés, 0 à enlever et 3 non mis à jour.
1 partiellement installés ou enlevés.
Il est nécessaire de prendre 417 ko dans les archives.
Après cette opération, 2 776 ko d'espace disque supplémentaires seront utilisés.
Souhaitez-vous continuer ? [O/n] O
Réception de :1 http://fr.archive.ubuntu.com/ubuntu jammy/universe amd64 libgflags2.2 amd64 2.2.2-2 [78,1 kB]
Réception de :2 http://fr.archive.ubuntu.com/ubuntu jammy/universe amd64 libgoogle-glog0v5 amd64 0.5.0+really0.4.0-2 [60,3 kB]
Réception de :3 http://fr.archive.ubuntu.com/ubuntu jammy/main amd64 libboost-context1.74.0 amd64 1.74.0-14ubuntu3 [223 kB]
Réception de :4 http://fr.archive.ubuntu.com/ubuntu jammy/universe amd64 libdouble-conversion3 amd64 3.1.7-4 [39,0 kB]
Réception de :5 http://fr.archive.ubuntu.com/ubuntu jammy/main amd64 libsnappy1v5 amd64 1.1.8-1build3 [17,5 kB]
417 ko réceptionnés en 0s (1 779 ko/s)
Sélection du paquet libgflags2.2 précédemment désélectionné.
(Lecture de la base de données... 249552 fichiers et répertoires déjà installés.)
Préparation du dépaquetage de .../libgflags2.2_2.2.2-2_amd64.deb ...
Dépaquetage de libgflags2.2 (2.2.2-2) ...
Sélection du paquet libgoogle-glog0v5 précédemment désélectionné.
Préparation du dépaquetage de .../libgoogle-glog0v5_0.5.0+really0.4.0-2_amd64.deb ...
Dépaquetage de libgoogle-glog0v5 (0.5.0+really0.4.0-2) ...
Sélection du paquet libboost-context1.74.0:amd64 précédemment désélectionné.
Préparation du dépaquetage de .../libboost-context1.74.0_1.74.0-14ubuntu3_amd64.deb ...
Dépaquetage de libboost-context1.74.0:amd64 (1.74.0-14ubuntu3) ...
Sélection du paquet libdouble-conversion3:amd64 précédemment désélectionné.
Préparation du dépaquetage de .../libdouble-conversion3_3.1.7-4_amd64.deb ...
Dépaquetage de libdouble-conversion3:amd64 (3.1.7-4) ...
Sélection du paquet libsnappy1v5:amd64 précédemment désélectionné.
Préparation du dépaquetage de .../libsnappy1v5_1.1.8-1build3_amd64.deb ...
Dépaquetage de libsnappy1v5:amd64 (1.1.8-1build3) ...
Paramétrage de libdouble-conversion3:amd64 (3.1.7-4) ...
Paramétrage de libsnappy1v5:amd64 (1.1.8-1build3) ...
Paramétrage de libboost-context1.74.0:amd64 (1.74.0-14ubuntu3) ...
Paramétrage de libgflags2.2 (2.2.2-2) ...
Paramétrage de libgoogle-glog0v5 (0.5.0+really0.4.0-2) ...
Paramétrage de watchman (20230903.183747.0) ...
Traitement des actions différées (« triggers ») pour libc-bin (2.35-0ubuntu3.1) ...
```

### 5 - Contrôle de la dépendance précédente

```sh
# 5 - Vérification de la dépendence précédente histoire de voir si elle est bien installé
sudo apt-get install libgoogle-glog0v5
```

Résultat dans la console:

```
Lecture des listes de paquets... Fait
Construction de l'arbre des dépendances... Fait
Lecture des informations d'état... Fait
Note : sélection de libgoogle-glog0v5 pour l'expression rationnelle « libgoogle-glog0v5* »
libgoogle-glog0v5 est déjà la version la plus récente (0.5.0+really0.4.0-2).
libgoogle-glog0v5 passé en « installé manuellement ».
0 mis à jour, 0 nouvellement installés, 0 à enlever et 3 non mis à jour.
```

### 6 - Décompression à nouveau du fichier téléchargé

```sh
# 6 - Recommencer l'étape 1
sudo dpkg -i watchman_ubuntu22.04_v2023.09.04.00.deb
```

Résultat dans la console:

```
(Lecture de la base de données... 249079 fichiers et répertoires déjà installés.)
Préparation du dépaquetage de watchman_ubuntu22.04_v2023.09.04.00.deb ...
Dépaquetage de watchman (20230903.183747.0) sur (20230903.183747.0) ...
Paramétrage de watchman (20230903.183747.0) ...
```

### 7 - Finalisation de l'installation

```sh
# 7 - finalisation de l'installation
sudo apt-get -f install
```

Résultat dans la console:

```
Lecture des listes de paquets... Fait
Construction de l'arbre des dépendances... Fait
Lecture des informations d'état... Fait
0 mis à jour, 0 nouvellement installés, 0 à enlever et 2 non mis à jour.
```

### 8 - Contrôle de l'installation avec l'affichage du numéro de version

```sh
# 8 - Contrôler la version de watchman
watchman version
```

Résultat dans la console:

```
version: 20230903.183747.0
buildinfo: cee239fc68521a0f0b49aa524631b75df3290077
```

## Installation des dépendances du projet

Il faut avant tout s'assurer d'être dans le répertire **./projects/mobile** avant de lancer une quelconque commande.

```sh
# Navigation (https://reactnavigation.org/docs/getting-started/)
npm install @react-navigation/native @react-navigation/stack
npx expo install react-native-screens react-native-safe-area-context
npx expo install react-native-gesture-handler
npx expo install @react-native-masked-view/masked-view

# SUR MAC RAJOUTER
npx pod-install ios

# ICONS (https://github.com/oblador/react-native-vector-icons)
npm install --save react-native-vector-icons

# STATUS BAR EXPO (https://docs.expo.dev/versions/latest/sdk/status-bar/)
npx expo install expo-status-bar

# AsyncStorage Deprecated (https://reactnative.dev/docs/asyncstorage)
# /!\ A VOIR POUR un Projet Communautaire compatible (https://reactnative.directory/?search=storage)
npm install @react-native-async-storage/async-storage

# IMAGE PICKER (https://docs.expo.dev/versions/latest/sdk/imagepicker/)
npx expo install expo-image-picker

# CAMERA ()
npx expo install expo-camera

# Font ()
npx expo install expo-font

# Expo App Loading ()
npx expo install expo-app-loading
```

## How start this application

```sh
# 1. Fixer les problèmes de compatibilité entre les dépendances
npx expo install --fix

# 2. Run doctor for check your compatibility
npm run doctor
```

## How start this application on a virtual machine

```sh
# 1. Démarrer le projet via un tunnel.
npx expo start --tunnel
```
