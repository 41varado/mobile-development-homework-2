import './detail.css'
import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonPage } from '@ionic/react';
import Product from '../../data/Product';
import { getProduct } from '../../constants/product';
import { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router';


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
                <h1 className='center'>Detalle del producto</h1>
                <IonCard key={product?.id}>
                    <img alt='producto' src={product?.image} className='img'/>
                    <IonCardHeader className='center'>
                        <IonCardTitle>{product!.title}</IonCardTitle>
                        <IonCardSubtitle>{product!.price}</IonCardSubtitle>
                    </IonCardHeader>
                    <IonCardContent className='center'>
                        {product!.description}
                    </IonCardContent>
                    <IonCardContent className='center'>
                        {product!.category}
                    </IonCardContent>
                    <IonCardContent className='center'>
                        Rating: {product!.rating.rate} con {product!.rating.count} votos
                    </IonCardContent>
                    <IonButton expand='full' className='button' onClick={() => handleRedirect()}>Retroceder</IonButton>
                </IonCard>
            </IonContent>
        </IonPage>
    )
}