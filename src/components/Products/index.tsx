import React ,{useState, useEffect} from 'react';
import { IonContent, IonCol, IonRow, IonInput,IonButton, IonAvatar, IonInfiniteScroll, IonInfiniteScrollContent, 
    IonItem, IonLabel, IonList, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react'
import Product from '../../data/product';

export const Productos = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [productsAvailable, setProductsAvailable] = useState<Product[]>([]);
    const [itemsAvailable, setItemsAvailable] = useState(5);
    const itemsPerPage = 5;

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
        .then(((res) => res.json()))
        .then((data) => {
            setProducts(data);
            setProductsAvailable(data.slice(0, itemsAvailable));
        });
    }, []);

    const loadMoreProducts = () => {
        const newItemsAvailable = itemsAvailable + itemsPerPage;
        setProductsAvailable(products.slice(0, newItemsAvailable));
        setItemsAvailable(newItemsAvailable);
    }


    return (
        <IonContent>
            <IonRow>
                {productsAvailable.map((product) => (
                    <IonCol size='6' sizeSm='4' sizeXl='4'>
                        <IonCard key={product.id}>
                            <img alt='imagen del producto' src={product.image} />
                            <IonCardHeader>
                                <IonCardTitle>{product.title}</IonCardTitle>
                            </IonCardHeader>
                        </IonCard>
                    </IonCol>
                ))}
            </IonRow>
            <IonInfiniteScroll
                onIonInfinite={(event) => {
                    if(productsAvailable.length === products.length) {
                        event.target.complete();
                        event.target.disabled = true;
                        return;
                    }else{
                        loadMoreProducts();
                        setTimeout(() => event.target.complete(), 3000);
                    }
                }}
            >
            <IonInfiniteScrollContent loadingText="Please wait..." loadingSpinner="bubbles"></IonInfiniteScrollContent>
          </IonInfiniteScroll>
        </IonContent>
      );
}