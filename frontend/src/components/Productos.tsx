import {
  IonGrid,
  IonRow,
  IonCol,
  IonSegment,
  IonSegmentButton,
} from "@ionic/react";
import "./Productos.css";
import ProductoComponent from "./producto/Producto";
import { getProductos } from "../services/ProductoService";
import { useEffect, useState } from "react";
import { Producto } from "../interfaces/ProductoInterface";
import SkeletonProductoComponent from "./skeleton/Skeleton";

interface ContainerProps {}

const Productos: React.FC<ContainerProps> = () => {
  const [productos, setProductos] = useState<Producto[]>([]);
  const [loaded, setLoaded] = useState(false);
  const productosFake = [1, 2, 3, 4, 5, 6, 7, 8];

  useEffect(() => {
    if (productos.length == 0) {
      fetchProductos();
    }
  }, [productos]);

  const fetchProductos = async () => {
    try {
      const res: Producto[] = await getProductos();
      setProductos(res);
      setLoaded(true);
    } catch (error) {
      // Manejo de errores
    }
  };

  return (
    <div>
      {!loaded && (
        <IonGrid>
          <IonRow>
            {productosFake.map((producto: number) => (
              <IonCol size="6" key={producto}>
                <SkeletonProductoComponent />
              </IonCol>
            ))}
          </IonRow>
        </IonGrid>
      )}
      <IonGrid className="custom-grid">
        <IonRow className="custom-row">
          {productos.map((pro: Producto) => (
            <IonCol
              size="6"
              size-md="4"
              size-lg="2"
              className="ion-no-padding ion-no-margin"
              key={pro.idProducto}
            >
              {!!loaded && <ProductoComponent producto={pro} />}
            </IonCol>
          ))}
        </IonRow>
      </IonGrid>
    </div>
  );
};

export default Productos;
