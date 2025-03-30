import React ,{useState, useEffect} from 'react';
import { IonContent, IonCol, IonRow, IonInfiniteScroll, IonInfiniteScrollContent,
    IonButton,
    IonPage} from '@ionic/react'
import { getProduct } from '../Services/product';
import Product from '../../Model/Product';
import { useHistory } from 'react-router-dom';
import IndexProductCard from '../Components/indexProductCard';

export const Products = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [productsAvailable, setProductsAvailable] = useState<Product[]>([]);
    const [itemsAvailable, setItemsAvailable] = useState(5);
    const itemsPerPage = 5;
    const history = useHistory();

    useEffect(() => {
        getProduct()
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

    const handleRedirect = (idProduct: number) => {
        history.push(`/detail/${idProduct}`);
    }

    return (
        <IonPage>
            <IonContent>
                <IonRow>
                    {productsAvailable.map((product) => (
                        <IonCol size='6' sizeSm='4' sizeXl='4' key={product.id} className='Product'>
                            <IndexProductCard title={product.title} image={product.image} category={product.category} 
                            description={product.description} id={product.id} price={product.price} rating={product.rating}/>
                            <IonButton expand='full' onClick={() => handleRedirect(product.id)}>Ver Detalle</IonButton>
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
        </IonPage>
      );
}