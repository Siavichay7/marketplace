import {
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonSkeletonText,
} from "@ionic/react";
import "./Skeleton.css";

const SkeletonProductoComponent: React.FC = () => {
  return (
    <div>
      <IonCard>
        <IonSkeletonText animated={true} className="img"></IonSkeletonText>
        <IonCardHeader>
          <IonCardTitle className="titulo">
            {" "}
            <IonSkeletonText
              animated={true}
              style={{ width: "60%" }}
            ></IonSkeletonText>
          </IonCardTitle>
          <IonCardSubtitle>
            {" "}
            <IonSkeletonText
              animated={true}
              style={{ width: "30%" }}
            ></IonSkeletonText>
          </IonCardSubtitle>
        </IonCardHeader>
      </IonCard>
    </div>
  );
};

export default SkeletonProductoComponent;
