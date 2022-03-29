# Programmiersprachen-Museum	

Das Programmiersprachen-Museum soll einen Überblick geben über die Entwicklung verschiedener Programmiersprachen und die Menschen, die sie entwickelt haben.

## Installation

Die Anwendung wurde erstellt mit 
Angular CLI: 13.2.6
Node: 16.14.0
Package Manager: npm 8.5.2
OS: win32 x64

Es wird [nodejs](https://nodejs.org/en/download/releases/) benötigt.
 
Nach der Installation kann bei Bedarf mit dem npm-Paketmanager auch das Angular-CLI installiert werden: 

```bash
npm install -g @angular/cli@13.2.6 
```

installiert die Version, mit der die Anwendung erstellt wurde. Mit anderen Versionen könnte es zu Problemen kommen.

Zusätzlich muss auf dem System [MongoDB](https://www.mongodb.com/docs/manual/installation/) installiert sein.  

Die entsprechende Datenbank und Collections werden automatisch erstellt. Um vorgenommene Änderungen dauerhaft in der DB zu speichern muss das Skript deaktiviert werden.

Nach dem Clonen des Repository in einer IDE oder einer Shell das Verzeichnis programmiersprachen_backend öffnen und  

```bash
npm run watch 
``` 
Anschließend das Verzeichnis bootstrapFrontend öffnen und starten. 

```bash
ng serve 
``` 

Die Anwendung lässt sich nun in einem Browser unter localhost:4200 aufrufen.

## Beschreibung


Auf der Landing Page ist derzeit noch nichts zu sehen.

Unter dem Menüpunkt Programmiersprachen findet sich eine Tabelle der bislang erfassten Sprachen mit dem Jahr ihrer Veröffentlichung und der Möglichkeit, einen Eintrag zu bearbeiten oder zu löschen.
Der Name der Sprache verlinkt zur Detailansicht, dort ist neben weiteren Informationen und dem Hello World-Code der jeweiligen Sprache auch ein Link zu externen Informationsressourcen, auch zu den beteiligten Entwickelnden, zu finden.
Nach dem Klicken auf das Bearbeitungssymbol wird auf ein Formular weitergeleitet, in dem Änderungen vorgenommen werden können. Nachdem der Aktualisieren-Button geclickt wurde, gelangt man wieder zur Übersichtstabelle.
Wird ein Eintrag gelöscht, lädt die Tabelle neu.

Unter Entwickelnde sind die an den bislang gelisteten Sprachen beteiligten Personen bzw. Organisationen gelistet, auch hier gibt es ggf. Links zu externen Informationen und die Möglichkeit zum Bearbeiten oder Löschen.

Neue Einträge lassen sich unter "Sprache bzw. Entwickelnde anlegen" erstellen, sowohl die Bestätigung als auch der Abbruch führen zur entsprechenden Tabelle zurück.



