import { useState } from "react";
import { Button } from "react-bootstrap";

const Contador = () => {
  const [numero, setNumero] = useState(0);
  return (
    <section className="text-center">
      <h3>Contador</h3>
      <h3>{numero}</h3>
      <Button variant="success" onClick={() => setNumero(numero + 1)}>
        +1
      </Button>
    </section>
  );
};
export default Contador;
