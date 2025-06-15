import express from 'express';
import type { Request, Response } from 'express';
import type {ICardProduct} from '../Types/Types';
import type { CategoryName } from '../Types/TypesSpec/MapSpec';



const app = express();
const port = 3000;

const GuitarConf: ICardProduct[] = [{id: 1, name: "YAMAHA F310 N", price:19990, img: "/akusticheskie-gitary/1", category: "akusticheskie-gitary"},
  {id: 2, name: "IBANEZ TCY10E-BK", price:28000, img: "/akusticheskie-gitary/2", category: "akusticheskie-gitary"}, 
  {id: 3, name: "IBANEZ V50NJP NATURAL", price:21490, img: "/akusticheskie-gitary/3", category: "akusticheskie-gitary"},
  {id: 4, name: "VESTON F-38/BK", price:8220, img: "/akusticheskie-gitary/4", category: "akusticheskie-gitary"},
  {id: 5, name: "FLIGHT F-230C NA", price:13260, img: "/akusticheskie-gitary/5", category: "akusticheskie-gitary"},
];

const ElectroConf: ICardProduct[] = [{id: 1, name: "IBANEZ GRG121DX-BKF", price:29000, img: "/elektrogitary/1", category: "elektrogitary"},
  {id: 2, name: "ROCKDALE Stars Black Limited Edition HSS BK", price:11800, img: "/elektrogitary/2", category: "elektrogitary"}, 
  {id: 3, name: "IBANEZ GRGR131EX-BKF", price:27450, img: "/elektrogitary/3", category: "elektrogitary"},
  {id: 4, name: "IBANEZ GRX70QA-TRB", price:25920, img: "/elektrogitary/4", category: "elektrogitary"},
  {id: 5, name: "IBANEZ GRGR221PA-AQB", price:33140, img: "/elektrogitary/5", category: "elektrogitary"},
];

const ClassicConf: ICardProduct[] = [{id: 1, name: "YAMAHA C40 классическая гитара", price:13990, img: "/klassicheskie-gitary/1", category: "klassicheskie-gitary"},
  {id: 2, name: "FLIGHT C-120 NA 3/4", price:13020, img: "/klassicheskie-gitary/2", category: "klassicheskie-gitary"}, 
  {id: 3, name: "VESTON C-45A BK", price:8440, img: "/klassicheskie-gitary/3", category: "klassicheskie-gitary"},
  {id: 4, name: "Cort AC100-SG", price:14140, img: "/klassicheskie-gitary/4", category: "klassicheskie-gitary"},
  {id: 5, name: "VESTON C-45A", price:8440, img: "/klassicheskie-gitary/5", category: "klassicheskie-gitary"},
];

const MapCategory = new Map<CategoryName, ICardProduct[]>([
        ["akusticheskie-gitary", GuitarConf],
        ["elektrogitary", ElectroConf],
        ["klassicheskie-gitary", ClassicConf]
    ]);

type Params = {
  category: CategoryName;
}

app.get('/products/:category', (req: Request<Params>, res: Response<ICardProduct[]>) => {
    const category: CategoryName = req.params.category;
    
    res.send(MapCategory.get(category));
});

app.listen(port, () => {
  console.log(`Сервер запущен: http://localhost:${port}`);
});