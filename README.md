### Description

Le but de ce projet est de simuler la réception d'informations depuis un récepteur et les afficher sur Grafana

### Technologies utilisées


* [NodeJS](https://nodejs.org/en/)
* [Grafana](https://grafana.com/)
* [InfluxDB](https://www.influxdata.com/)

### Installation du projet

##### Avoir au préalable installer et configurer : 

    NodeJS, Grafana & InfluxDB

##### Cloner le dépôt

    $ cd <répertoire d'installation du git>
    $ git clone git@gitlab.com:cmamon/jdm-interface.git

##### Aller dans le répertoire du projet

    $ cd iot_project_api

##### Créer un fichier .env ou utiliser la commande :

    $ touch .env

##### Rajouter les valeurs suivantes dans le fichier .env et les remplacer par vos informations InfluxDB : 

    INFLUX_URL="YOUR INFLUX URL"
    INFLUX_TOKEN="YOUR INFLUX TOKEN"
    INFLUX_ORG="YOUR INFLUX ORG"
    INFLUX_BUCKET="YOUR INFLUX BUCKET"

##### *Laisser le port 3001 libre*

##### Lancer l'application

###### Lancer la commande (*utiliser Git Bash sur Windows*) :

    $ sh launch.sh

###### Importer le dashboard template .json dans le dossier ScreenAndTemplateGrafana sur Grafana

##### Capture de Grafana

<p text-align="center">
  <img src="./ScreenAndTemplateGrafana/grafana_screen.png">
</p>

### Membres

* [Abdou Aziz DIOUF](https://github.com/AbdouAzizDIOUF) - <abdou-aziz.diouf@e-cdp.com>
* [Biaou Abdel Ahmed ALIDJINOU](https://github.com/BIAOU-ahmed) - <biaou-abdel-ahmed.alidjinou@e-cdp.com>
* [Imrhan Dareine MINKO AMOA](https://github.com/maiddima) - <imrhan-dareine.minko-amoa@e-cdp.com>
* [Sadate AGORO](https://github.com/Sadosath) - <sadate.agoro@e-cdp.com>
