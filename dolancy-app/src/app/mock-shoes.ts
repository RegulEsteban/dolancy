import { Shoes } from './shoes';

export const SHOES: Shoes[] = [
  { 
    id: 1, 
    color: 'Mr. Nice',
    modelo: '221 Miel',
    album: '/assets/images/catalogo/221-miel/',
    detail: ['1.jpg', '2.jpg', '3.jpg'],
    description: 'Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo. xxx',
    price: 455.00,
    properties: {
        piel: 'Ternera',
        forro: 'Flor de cerdo',
        suela: '100% cuero',
        tallas: '25 al 29'
    }
  },{ 
    id: 2, 
    color: 'Narco',
    modelo: '097 Negro',
    album: '/assets/images/catalogo/097-negro/',
    detail: ['1.jpg', '2.jpg', '3.jpg'],
    description: 'Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.',
    price: 455.00,
    properties: {
        piel: 'Ternera',
        forro: 'Flor de cerdo',
        suela: '100% cuero',
        tallas: '25 al 29'
    }
  }
];