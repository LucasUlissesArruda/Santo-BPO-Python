export default function ClientesList({ clientes, onEdit, onDelete }) {
  return (
    <table border="1">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nome</th>
          <th>Email</th>
          <th>Telefone</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        {clientes.map((c) => (
          <tr key={c.id}>
            <td>{c.id}</td>
            <td>{c.nome}</td>
            <td>{c.email}</td>
            <td>{c.telefone}</td>
            <td>
              <button onClick={() => onEdit(c)}>Editar</button>
              <button onClick={() => onDelete(c.id)}>Excluir</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

