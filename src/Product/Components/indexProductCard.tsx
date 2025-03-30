import './indexProducCart.css'
import { IonCard, IonCardHeader, IonCardTitle } from "@ionic/react";
import Product from "../../Model/Product";

const IndexProductCard: React.FC<Product> = ({ title, image }) => {
    return (
        <IonCard className="ProductCard">
            <img className="ProductImage" alt='imagen del producto' src={image}/>
            <IonCardHeader>
                <IonCardTitle>{title}</IonCardTitle>
            </IonCardHeader>
        </IonCard>
    )
}

export default IndexProductCard;