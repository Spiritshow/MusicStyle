
type Orientation = 'правосторонняя' | 'левосторонняя';

type PickupConfiguration = 'H' | 'H-h' | 'H-h-h' | 'H-h-s' 
    | 'H-s' | 'H-s-h' | 'H-s-s' | 'S' | 'S-s' | 'S-s-h' | 'S-s-s' 
    | 'пьезо' ;

type NeckJoint = 'на болтах' | 'вкелеенный' | 'сквозной';

type Wood = 'агатис' | 'акация' | 'дао' | 'ель' | 'кайя' | 'катальпа' | 'кедр' | 'клён'
    | 'коа' | 'красное дерево' | 'лавр' | 'ламинат' | 'липа' | 'массив ели' | 'массив кедра'
    | 'меранти' | 'миртовое дерево' | 'нато' | 'ованкол' | 'окуме' | 'орех' | 'пластик'
    | 'сапеле' | 'сосна' | 'углепластик' | 'ясень' | 'бокоте' | 'зебрано' | 'зирикот' | 'манго' | 'ньятон';

type BodyShape = 'Stratocaster' | 'Superstrat' | 'Telecaster' | 'другая форма';

type BridgeType = 'фиксированный' | 'тремоло' | 'Floyd rose' | 'Tune-o-matic';

type ElectronicsType= 'пассивный' | 'активный';

type GuitarType= 'цельнокорпусная' | 'полуфкустическая';

type NeckMaterial = Wood;

type BodyMaterial = Wood;

type FingerboardMaterial = 
    'амарант' | 'браунвуд' | 'железное дерево' | 'кабукалли' | 'клён' | 'композит'
    | 'красное дерево' | 'лавр' | 'ламинат' | 'мербау' | 'ованкол' | 'окуме'
    | 'орех' | 'падук' | 'палисандр';

export interface ISpecElectricGuitar {
    brend: string;
    frets: number; 
    strings: number; 
    pickupConfiguration: PickupConfiguration;
    neckJoint: NeckJoint; 
    neckMaterial: NeckMaterial; 
    bodyMaterial: BodyMaterial;
    fingerboardMaterial: FingerboardMaterial; 
    orientation: Orientation; 
    bodyShape: BodyShape; 
    scaleLengthInches: number; 
    bridgeType: BridgeType; 
    electronicsType: ElectronicsType; 
    guitarType: GuitarType; 
    hasFretInlays: boolean; 
}