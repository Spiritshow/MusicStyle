import type { StringLiteralKeys } from "../components/PageProducts/component/SectorFilter/components/HelperType/StringLiteralKeys";
import type { FingerboardMaterial, ISpecsAcousticGuitar, Orientation, Wood } from "../Types/TypesSpec/SpecAccusticGitar";
import type { ISpecsClassicalGuitar } from "../Types/TypesSpec/SpecClassicGuitar";
import type { ISpecElectricGuitar } from "../Types/TypesSpec/SpecElectricGuitar";



type FilterOptionMap = {
  'akusticheskie-gitary': { [K in StringLiteralKeys<ISpecsAcousticGuitar>]: readonly ISpecsAcousticGuitar[K][] };
  'elektrogitary': { [K in StringLiteralKeys<ISpecElectricGuitar>]: readonly ISpecElectricGuitar[K][] };
  'klassicheskie-gitary': { [K in StringLiteralKeys<ISpecsClassicalGuitar>]: readonly ISpecsClassicalGuitar[K][] };
};

const wood: Wood[] = ['агатис', 'акация', 'дао', 'ель', 'кайя', 'катальпа', 'кедр', 'клён',
            'коа', 'красное дерево', 'лавр', 'ламинат', 'липа', 'массив ели', 'массив кедра', 
            'меранти', 'миртовое дерево', 'нато', 'ованкол', 'окуме', 'орех', 'пластик',
            'сапеле', 'сосна', 'углепластик', 'ясень', 'бокоте', 'зебрано', 'зирикот', 'манго', 'ньятон']

const fingerboardMaterial: FingerboardMaterial[] = ['амарант', 'браунвуд', 'железное дерево', 'кабукалли', 'клён', 'композит',
            'красное дерево', 'лавр', 'ламинат', 'мербау', 'ованкол', 'окуме','орех', 'падук', 'палисандр']

const orientation: Orientation[] = ['правосторонняя', 'левосторонняя']


const FilterConf: FilterOptionMap = {
    'akusticheskie-gitary': {
        neckMaterial: wood,
        bodyMaterial: wood,
        fingerboardMaterial: fingerboardMaterial,
        topMaterial: wood,
        orientation: orientation,
        bodyShape: ['Auditorium', 'Concert', 'Concert cutaway', 'Dreadnought', 'Folk',
            'Grand auditorium', 'Grand concert', 'Grand orchestra', 'Grand symphony',
            'Jumbo', 'Mini dreadnought', 'Mini jumbo', 'Orchestra', 'Parlor', 'вестерн'],
        acousticType: ['со звукоснимателем', 'без звукоснимателя']
    },
    "elektrogitary": {
        neckMaterial: wood,
        bodyMaterial: wood,
        fingerboardMaterial: fingerboardMaterial,
        orientation: orientation,
        bodyShape: ['Stratocaster', 'Superstrat', 'Telecaster', 'другая форма'],
        bridgeType: ['фиксированный', 'тремоло', 'Floyd rose', 'Tune-o-matic'],
        electronicsType: ['пассивный', 'активный'],
        guitarType: ['цельнокорпусная', 'полуфкустическая'], 
        pickupConfiguration: ['H', 'H-h', 'H-h-h', 'H-h-s',
            'H-s', 'H-s-h', 'H-s-s', 'S', 'S-s', 'S-s-h', 'S-s-s', 'пьезо'],
        neckJoint: ['на болтах', 'вкелеенный', 'сквозной']
    },
    "klassicheskie-gitary": {
        neckMaterial: ['берёза', 'кайя', 'катальпа', 'кедр', 'клён', 'красное дерево',
             'липа', 'меранти', 'нато', 'ньятон', 'окуме', 'ольха', 'палисандр', 'сапеле'], 
        bodyMaterial: ['агатис', 'акация', 'бокоте', 'ель', 'кайя', 'катальпа', 'клён', 'композит',
            'красное дерево', 'ламинат', 'липа', 'меранти', 'нато', 'окуме',
            'орех', 'палисандр', 'пао ферро', 'сапеле'],
        fingerboardMaterial: ['амарант', 'браунвуд', 'железное дерево', 'кабукалли', 'клён', 'композит',
            'красное дерево', 'лавр', 'ламинат', 'монгой', 'ованкол', 'орех',
            'падук', 'палисандр', 'пао ферро', 'пластик', 'терминалия', 'чёрное дерево'], 
        topMaterial: ['агатис', 'акация', 'ель', 'катальпа', 'кедр', 'коа',
             'красное дерево', 'ламинат', 'липа', 'массив ели', 'массив кедра',
             'меранти', 'сапеле', 'сосна'],
        orientation: orientation,
        classicalType: ['без звукоснимателя', 'со звукоснимателем'] 
    }
}

export default FilterConf;