// Este arquivo possui funções para realizar as operações do CRUD de Clientes
import axios from "axios";

export async function getClientes() {
  const response = await axios.get("http://localhost:3000/clientes");
  // Dentro de 'data' esta o JSON de resposta do back-end
  return response.data;
}

export async function addClientes(data) {
  // O segundo parametro do POST é o corpo da requisição (body == data)
  const response = await axios.post("http://localhost:3000/clientes", data);
  return response.data;
}

export async function deleteClientes(id) {
  const response = await axios.delete(`http://localhost:3000/clientes/${id}`);
  return response.data;
}

export async function getCliente(id) {
  const response = await axios.get(`http://localhost:3000/clientes/${id}`);
  return response.data;
}

export async function updateCliente(id, data) {
  const response = await axios.put(`http://localhost:3000/clientes/${id}`, data);
  return response.data
}
