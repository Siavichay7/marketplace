import { useEffect, useState } from "react";
import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonImg,
} from "@ionic/react";
import "./Producto.css";
import { useHistory, useParams } from "react-router-dom";
import { Producto } from "../../interfaces/ProductoInterface";

interface ContainerProps {
  producto: Producto;
}

const ProductoComponent: React.FC<ContainerProps> = ({ producto }) => {
  const { name } = useParams<{ name: string }>();
  return (
    <div>
      <IonCard routerLink={`/detalle/${producto.idProducto}`}>
        <IonImg className="img-producto" src={producto.imagen} />

        <div className="auto">
          <IonCardTitle className="titulo">
            {producto?.descripcion}
          </IonCardTitle>
          <IonCardSubtitle>${producto?.precio}</IonCardSubtitle>
        </div>
      </IonCard>
    </div>
  );
};

export default ProductoComponent;
