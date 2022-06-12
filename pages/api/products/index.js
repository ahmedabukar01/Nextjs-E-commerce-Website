import allProducts from '../../../productsData';

export default function handler(req,res){
    res.status(200).json(allProducts);
}