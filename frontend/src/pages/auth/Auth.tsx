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
  IonInput,
  IonItem,
  IonLabel,
  IonList,
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

import "./Auth.css";
import { Producto } from "../../interfaces/ProductoInterface";
import { getProductoById } from "../../services/ProductoService";

const Auth: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <IonList>
          <IonItem>
            <IonLabel>Correo: </IonLabel>
            <IonInput placeholder="Enter company name"></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel>Clave: </IonLabel>
            <IonInput placeholder="Enter company name"></IonInput>
          </IonItem>
        </IonList>
        <IonButton expand="block">Login</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Auth;
