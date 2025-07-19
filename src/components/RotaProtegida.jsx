import React from "react";
import { Navigate } from "react-router-dom";

const RotaProtegida = ({ tipoPermitido, children }) => {
  const usuario = JSON.parse(localStorage.getItem("usuarioLogado"));

  if (!usuario || usuario.tipo !== tipoPermitido) {
    return <Navigate to={`/login-${tipoPermitido}`} replace />;
  }

  return children;
};

export default RotaProtegida;
