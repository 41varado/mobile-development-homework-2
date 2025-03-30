import Product from '../../Model/Product';
import {IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent} from '@ionic/react';


const ProductCard: React.FC<Product> = ({ id, title, image, price, description, category, rating }) => {
    return (
        <IonCard key={id}>
        <img alt='producto' src={image} className='img'/>
        <IonCardHeader className='center'>
            <IonCardTitle>{title}</IonCardTitle>
            <IonCardSubtitle>{price}</IonCardSubtitle>
        </IonCardHeader>
        <IonCardContent className='center'>
            {description}
        </IonCardContent>
        <IonCardContent className='center'>
            {category}
        </IonCardContent>
        <IonCardContent className='center'>
            Rating: {rating.rate} con {rating.count} votos
        </IonCardContent>
    </IonCard>
    )
}

export default ProductCard;