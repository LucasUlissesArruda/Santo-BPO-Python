import { useState, useEffect } from "react";

export default function ClienteForm({ onSave, clienteEditando, onCancel }) {
  const [cliente, setCliente] = useState({ nome: "", email: "", telefone: "" });

  useEffect(() => {
    if (clienteEditando) setCliente(clienteEditando);
  }, [clienteEditando]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCliente({ ...cliente, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(cliente);
    setCliente({ nome: "", email: "", telefone: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="nome" placeholder="Nome" value={cliente.nome} onChange={handleChange} required />
      <input name="email" type="email" placeholder="Email" value={cliente.email} onChange={handleChange} required />
      <input name="telefone" placeholder="Telefone" value={cliente.telefone} onChange={handleChange} required />
      <button type="submit">{clienteEditando ? "Atualizar" : "Cadastrar"}</button>
      {clienteEditando && <button onClick={onCancel}>Cancelar</button>}
    </form>
  );
}

