import { products } from "../data/products";   

export const mockApi = {
    getProducts : () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const success = Math.random() > 0.1; 
                if(success){
                    resolve(products);
                } else {
                    reject(new Error('Failed to fetch products. Please try again.'));
                }
        }, 1000);
        });
    }
}