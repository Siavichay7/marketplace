// import "./.css";

import {
  IonAccordion,
  IonAccordionGroup,
  IonButton,
  IonCard,
  IonCardSubtitle,
  IonCardTitle,
  IonCol,
  IonContent,
  IonFabButton,
  IonFooter,
  IonGrid,
  IonHeader,
  IonIcon,
  IonImg,
  IonItem,
  IonLabel,
  IonPage,
  IonRow,
  IonSkeletonText,
  IonText,
  IonTextarea,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import {
  chevronBackCircle,
  add,
  cart,
  addOutline,
  removeOutline,
} from "ionicons/icons";
import { useContext, useEffect, useRef, useState } from "react";
import { useHistory, useParams } from "react-router-dom";

import "./Detalle.css";
import { Producto } from "../../interfaces/ProductoInterface";
import { getProductoById } from "../../services/ProductoService";

const Detalle: React.FC = () => {
  const query = new URLSearchParams(window.location.search);

  const param = useParams<{ id: string }>();

  const [producto, setProducto] = useState<Producto | null>(null);

  const [isLoading, setIsLoading] = useState<boolean | null>(false);
  const swiperRef = useRef<any>(null);
  const history = useHistory();
  const [count, setCount] = useState(1);
  const [tipo, setTipo] = useState<string | null>("");

  useEffect(() => {
    if (!isLoading) {
      fetchProducto();
    }
  }, [isLoading]);

  const fetchProducto = async () => {
    try {
      const res: Producto = await getProductoById(parseInt(param.id));
      setProducto(res);
    } catch (error) {
      console.log("Error al obtener el local: ", error);
      // Manejo de errores
    }
  };

  return (
    <IonPage className="pagina-producto">
      <IonContent fullscreen>
        <IonImg className="img" src={producto?.imagen} />

        {/* TITULO Y DESCRIPCION DEL PRODUCTO O PROMOCION */}
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">
              {producto && producto?.descripcion}
            </IonTitle>
          </IonToolbar>
        </IonHeader>
        <div className="descripcion">
          <h4>Descripción</h4>
          <IonText>{producto && producto?.detalle}</IonText>
        </div>
        <br />
      </IonContent>
      <IonIcon
        color="light"
        size="large"
        icon={chevronBackCircle}
        onClick={() => history.goBack()}
        className="back"
      />
      <IonFooter>
        <IonToolbar>
          <IonGrid>
            <IonRow className="ion-justify-content-between">
              <IonCol size="6">
                <div className="auto">
                  <IonCardSubtitle>Precio</IonCardSubtitle>
                  <IonCardTitle className="titulo">
                    $ {producto && producto?.precio}
                  </IonCardTitle>
                </div>
              </IonCol>
              <IonCol size="6">
                <IonButton expand="block" color="dark" shape="round">
                  <IonIcon
                    slot="start"
                    color="light"
                    size="large"
                    icon={cart}
                  ></IonIcon>
                  Carrito
                </IonButton>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonToolbar>
      </IonFooter>
    </IonPage>
  );
};

export default Detalle;
