import {Router, Request, Response} from 'express';

const productRouter: Router = Router();

productRouter.get('/', (req:Request, res:Response)=>{
    res.send('Get a list of products');
});

productRouter.get('/:id', (req:Request, res:Response)=>{
    let id = req.params.id;
    res.send(`Get product ${id}`);
});

productRouter.post('/', (req:Request, res:Response)=>{
    let id = req.body.id;
    let title = req.body.title;
    let price = req.body.price;
    res.send(`Create product ${id} - ${title} - ${price}`);
});

productRouter.patch('/:id', (req:Request, res:Response) => {
    res.send(`Update the product ${req.params.id} with the values of ${req.body.title}, ${req.body.price}, and ${req.body.stock}`)
    }); 

productRouter.delete('/', (req:Request, res:Response)=>{
    let id = req.body.id;
    res.send(`Product deleted ${id}`);
});

export default productRouter;