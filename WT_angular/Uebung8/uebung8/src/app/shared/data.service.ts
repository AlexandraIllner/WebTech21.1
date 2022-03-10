import { Injectable } from '@angular/core';
// Interface importieren, beschreibt Struktur des Data-Objekts, wie es als JSON vorliegt/aussehen soll
import { Data } from './data';

@Injectable({
  providedIn: 'root' // Service kann von allen Elementen in root genutzt werden
})


export class DataService {
  data: Data[]; //Var für das Data-Array

  constructor() {
    // Befüllen des Data-Array mit den Objekten (aus dem Skript)
    this.data = [
      {
        id: 1,
        jahr: 1237,
        stadt: "Berlin",
        link: "http://de.wikipedia.org/wiki/Berlin",
        bild: "assets/images/berlin.png"
    },
    {
        id: 2,
        jahr: 1624,
        stadt: "New York",
        link: "http://de.wikipedia.org/wiki/New_York_City",
        bild: "assets/images/newyork.png"
    },
    {
        id: 3,
        jahr: 1252,
        stadt: "Stockholm",
        link: "http://de.wikipedia.org/wiki/Stockholm",
        bild: "assets/images/stockholm.png"
    },
    {
        id: 4,
        jahr: 1827,
        stadt: "Bremerhaven",
        link: "http://de.wikipedia.org/wiki/Bremerhaven",
        bild: "assets/images/bremerhaven.png"
    },
    {
        id: 5,
        jahr: 150,
        stadt: "Bremen",
        link: "http://de.wikipedia.org/wiki/Bremen",
        bild: "assets/images/bremen.png"
    },
    {
        id: 6,
        jahr: 1202,
        stadt: "Bernau",
        link: "http://de.wikipedia.org/wiki/Bernau_bei_Berlin",
        bild: "assets/images/bernau.png"
    },
    {
        id: 7,
        jahr: 929,
        stadt: "Brandenburg",
        link: "http://de.wikipedia.org/wiki/Brandenburg_an_der_Havel",
        bild: "assets/images/brandenburg.png"
    },
    {
        id: 8,
        jahr: 805,
        stadt: "Magdeburg",
        link: "http://de.wikipedia.org/wiki/Magdeburg",
        bild: "assets/images/magdeburg.png"
    },
    {
        id: 9,
        jahr: 1222,
        stadt: "Marburg",
        link: "http://de.wikipedia.org/wiki/Marburg",
        bild: "assets/images/marburg.png"
    },
    {
        id: 10,
        jahr: 766,
        stadt: "Mannheim",
        link: "http://de.wikipedia.org/wiki/Mannheim",
        bild: "assets/images/mannheim.png"
    },
    {
        id: 11,
        jahr: 782,
        stadt: "Mainz",
        link: "http://de.wikipedia.org/wiki/Mainz",
        bild: "assets/images/mainz.png"
    }
    ];
   }

   // gibt das ganze Array zurück, wird in cities.component.ts ausgeführt um dann in cities.comp.html die Tabelle zu befüllen
   getAll(): Data[] {
    return this.data;
  }

  // gibt einzelnes Data-Objekt zurück
  getOne(id: number): Data {
      return this.data[id-1]; //-1 notwendig, weil id mit 1 beginnt, nicht wie Index bei 0
  }
  /*um zu prüfen, ob es ein Objekt mit dem angegebenen Index gibt:
    getOne(id: number): Data {
    let index = id-1;
    index = index % this.data.length;
    return this.data[index];
  }

  */
}
