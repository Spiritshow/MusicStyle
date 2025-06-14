import type { ISpecsAcousticGuitar } from "./SpecAccusticGitar";
import type { ISpecsClassicalGuitar } from "./SpecClassicGuitar";
import type { ISpecElectricGuitar } from "./SpecElectricGuitar";

export type CategoryName = 'akusticheskie-gitary' | 'elektrogitary' | 'klassicheskie-gitary'; /*| 'bas-gitary' | 'tyunery-i-metronomy' | 'struny' 
    | 'gitarnye-aksessuary-i-komplektuyushhie' | 'chehly-i-kejsy' | 'AccusticSustem' | 'sabvufery' | 'usiliteli-moshhnosti' 
    | 'kontrollery-akusticheskih-sistem' | 'mikshernye-pulty' | 'pribory-obrabotki-zvuka' | 'proigryvateli-rekordery' 
    | 'karaoke-mikrofony-i-sistemy' | 'aksessuary-i-komplektuyushhie-dlya-zvukovogo-oborudovaniya' | 'sintezatory' 
    | 'czifrovye-pianino' | 'czifrovye-organy' | 'akusticheskie-klavishnye-instrumenty' | 'midi-klaviatury' 
    | 'midi-kontrollery' | 'originalnye-aksessuary-dlya-klavishnyh-instrumentov' | 'ukulele' 
    | 'chehly-dlya-ukulele' | 'struny-dlya-ukulele' | 'remni-dlya-ukulele' | 'stojki-i-derzhateli-dlya-ukulele' 
    | 'kapodastry-dlya-ukulele' | 'sredstva-po-uhodu-za-ukulele' | 'drugie-akssesuary-i-komplektuyushhie-dlya-ukulele';*/

export type CategoryMap = {
    "akusticheskie-gitary": ISpecsAcousticGuitar;
    "elektrogitary": ISpecElectricGuitar;
    "klassicheskie-gitary": ISpecsClassicalGuitar;
};