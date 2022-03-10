// Interface dient der Gewährleistung der Typsicherheit
// hier Datenmodell eintragen
export interface Data {
    id: number, // damit nicht aus dem Array-index gelesen werden muss
    jahr: number,
    stadt: string,
    link: string,
    bild: string
}
