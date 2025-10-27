// pages/ClientesPage.js
import React, { useEffect, useState } from 'react';
import { getClientes } from '../services/api';
import { Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Box } from '@mui/material';

function ClientesPage() {
  const [clientes, setClientes] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchClientes = async () => {
      try {
        const data = await getClientes();
        setClientes(data);
      } catch (err) {
        setError('Falha ao carregar os clientes. Verifique a conexão e se o servidor backend está rodando.');
      }
    };

    fetchClientes();
  }, []);

  return (
    <Paper sx={{ padding: 3, borderRadius: '10px', boxShadow: (theme) => theme.shadows[2] }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
        <Typography variant="h4">
          Clientes
        </Typography>
        <Button variant="contained" color="primary">
            Adicionar Cliente
        </Button>
      </Box>

      {error && <Typography color="error" sx={{ my: 2 }}>{error}</Typography>}

      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: 'bold' }}>Razão Social</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>CNPJ</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>Responsável</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>Email</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {clientes.map((cliente) => (
              <TableRow hover key={cliente.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell>{cliente.razao_social}</TableCell>
                <TableCell>{cliente.cnpj}</TableCell>
                <TableCell>{cliente.responsavel_nome}</TableCell>
                <TableCell>{cliente.responsavel_email}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}

export default ClientesPage;