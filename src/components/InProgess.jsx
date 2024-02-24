import { useState } from "react";
import styles from "../styles/InProgess.module.scss";

function InProgress() {
  const [cynthiaPressed, setCynthiaPressed] = useState(false);
  const [serialBlagueurs, setSerialBlagueurs] = useState([]);

  return (
    <>
      <div className={styles.container}>
        {cynthiaPressed && serialBlagueurs.map((el) => el)}
        <span>Site en cours de construction 🚧</span>
        <span className={styles.patient}>
          Merci d'être patient, du lourd arrive !
        </span>
        <button
          className={styles.cynthia}
          onClick={() => {
            setCynthiaPressed(true);
            setSerialBlagueurs([
              ...serialBlagueurs,
              <div
                className={styles.serialBlagueur}
                key={serialBlagueurs.length}
              >
                Serial blagueur 🤪
              </div>,
            ]);
          }}
        >
          Coucou Cynthia 😘
        </button>
      </div>
    </>
  );
}

export default InProgress;
