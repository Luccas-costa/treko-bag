"use server";

import { sql } from "@vercel/postgres";

export async function insertBD({
  id,
  email,
  instagram,
  bairro,
  rua,
  complemento,
  nurmo,
  cidade,
  cep,
  itens,
  quantidade,
  datacompra,
}: {
  id: string;
  email: string;
  instagram: string;
  bairro: string;
  rua: string;
  complemento: string;
  nurmo: string;
  cidade: string;
  cep: string;
  itens: string;
  quantidade: string;
  datacompra: string;
}) {
  try {
    console.log("Enviando dados para o banco de dados...");
    await sql`INSERT INTO ClientesC (id, email, instagram, bairro, rua, complemento, nurmo, cidade, cep, itens, quantidade, datacompra) VALUES (${id}, ${email}, ${instagram}, ${bairro}, ${rua}, ${complemento}, ${nurmo}, ${cidade}, ${cep}, ${itens}, ${quantidade} , ${datacompra})`;
    console.log("Enviado com sucesso!");
  } catch (error) {
    console.log(error);
  }
}
