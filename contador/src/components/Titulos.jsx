const Titulos = ({ subtitulo, estadoNuevo }) => {
  // aqui agregamo toda la logica

  return (
    // aqui tambien puedo escribir un poco de logica (solo si es necesario)

    <section className="text-center">
      {/* aqui tambien se maqueta */}
      <h1 className="display-4">Proyecto contador con react</h1>
      <h2 className="display-6">
        {subtitulo}, estado: {estadoNuevo ? "Habilitado" : "Desabilitado"}
      </h2>
      <hr />
    </section>
  );
};

export default Titulos;
