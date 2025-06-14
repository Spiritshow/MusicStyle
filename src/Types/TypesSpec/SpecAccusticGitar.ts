
type Orientation = 'правосторонняя' | 'левосторонняя';

type AcousticType = 'со звукоснимателем' | 'без звукоснимателя';

type BodyShape =
    'Auditorium' | 'Concert' | 'Concert cutaway' | 'Dreadnought' | 'Folk'
    | 'Grand auditorium' | 'Grand concert' | 'Grand orchestra' | 'Grand symphony'
    | 'Jumbo' | 'Mini dreadnought' | 'Mini jumbo' | 'Orchestra' | 'Parlor' | 'вестерн';

type Wood =
    'агатис' | 'акация' | 'дао' | 'ель' | 'кайя' | 'катальпа' | 'кедр' | 'клён'
    | 'коа' | 'красное дерево' | 'лавр' | 'ламинат' | 'липа' | 'массив ели' | 'массив кедра'
    | 'меранти' | 'миртовое дерево' | 'нато' | 'ованкол' | 'окуме' | 'орех' | 'пластик'
    | 'сапеле' | 'сосна' | 'углепластик' | 'ясень' | 'бокоте' | 'зебрано' | 'зирикот' | 'манго' | 'ньятон';

type FingerboardMaterial =
    'амарант' | 'браунвуд' | 'железное дерево' | 'кабукалли' | 'клён' | 'композит'
    | 'красное дерево' | 'лавр' | 'ламинат' | 'мербау' | 'ованкол' | 'окуме'
    | 'орех' | 'падук' | 'палисандр';

type NeckMaterial = Wood;

type BodyMaterial = Wood;

type TopMaterial = Wood;

export interface ISpecsAcousticGuitar {
    brend: string;
    frets: number; 
    strings: number; 
    neckMaterial: NeckMaterial; 
    bodyMaterial: BodyMaterial; 
    fingerboardMaterial: FingerboardMaterial; 
    topMaterial: TopMaterial; 
    orientation: Orientation; 
    bodyShape: BodyShape; 
    scaleLengthInches: number; 
    acousticType: AcousticType; 
}