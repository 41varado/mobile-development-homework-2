import '../Components/detail.css'
import { IonButton, IonContent, IonPage } from '@ionic/react';
import Product from '../../Model/Product';
import { getProduct } from '../Services/product';
import { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router';
import ProductCard from '../Components/ProductCard';


export const ProductDetail = () =>{
    const [product, setProduct] = useState<Product | null>();
    const { id } = useParams<{ id: string }>();
    const history = useHistory();

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const data = await getProduct(id ? parseInt(id) : undefined);
                setProduct(data);
            } catch (error) {
                console.error("Error al cargar el producto:", error);
            }
        };
        fetchProduct();
    }, [id]);

    if (!product) {
        return <IonContent>Cargando detalles del producto...</IonContent>;
    }

    const handleRedirect = () => {
        history.push('/home');
    }

    return (
        <IonPage>
            <IonContent>
                <h1 className='center header'>Detalle del producto</h1>
                <ProductCard id={product.id} title={product.title} price={product.price} 
                description={product.description} category={product.category} image={product.image}
                rating={{
                    rate: product.rating.rate,
                    count: product.rating.count
                }}/>
                <IonButton expand='full' className='button' onClick={() => handleRedirect()}>Retroceder</IonButton>
            </IonContent>
        </IonPage>
    )
}