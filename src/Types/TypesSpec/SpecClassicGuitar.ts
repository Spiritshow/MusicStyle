
type Orientation = 'правосторонняя' | 'левосторонняя';

type ClassicalGuitarType = 'без звукоснимателя' | 'со звукоснимателем';

type TopMaterial =
  | 'агатис' | 'акация' | 'ель' | 'катальпа' | 'кедр' | 'коа'
  | 'красное дерево' | 'ламинат' | 'липа' | 'массив ели' | 'массив кедра'
  | 'меранти' | 'сапеле' | 'сосна';

type FingerboardMaterial =
  | 'амарант' | 'браунвуд' | 'железное дерево' | 'кабукалли' | 'клён' | 'композит'
  | 'красное дерево' | 'лавр' | 'ламинат' | 'монгой' | 'ованкол' | 'орех'
  | 'падук' | 'палисандр' | 'пао ферро' | 'пластик' | 'терминалия' | 'чёрное дерево';

type BodyMaterial =
  | 'агатис' | 'акация' | 'бокоте' | 'ель' | 'кайя' | 'катальпа' | 'клён' | 'композит'
  | 'красное дерево' | 'ламинат' | 'липа' | 'меранти' | 'нато' | 'окуме'
  | 'орех' | 'палисандр' | 'пао ферро' | 'сапеле';

type NeckMaterial =
  | 'берёза' | 'кайя' | 'катальпа' | 'кедр' | 'клён' | 'красное дерево'
  | 'липа' | 'меранти' | 'нато' | 'ньятон' | 'окуме' | 'ольха' | 'палисандр' | 'сапеле';

export interface ISpecsClassicalGuitar {
  strings: number; 
  neckMaterial: NeckMaterial; 
  bodyMaterial: BodyMaterial; 
  fingerboardMaterial: FingerboardMaterial; 
  topMaterial: TopMaterial; 
  orientation: Orientation; 
  classicalType: ClassicalGuitarType; 
}