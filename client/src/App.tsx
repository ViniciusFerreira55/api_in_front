import React from 'react'
import { useState } from 'react'
import { useQuery } from 'react-query'

function App() {
  interface Livros {
    nome: string,
    autor: string,
    distribuidora: string,
  }
  interface ApiResult {
    message: Livros[]
  }

  const { data, isLoading, isError } = useQuery<ApiResult>("livros", () => fetch("http://127.0.0.1:3000/livros").then(res => res.json()))

  if (isLoading || data == undefined) return <div>Carregando</div>

  if (isError) return <div>Deu erro!!</div>

  return (
    <div className="App">
      {data.message.map(livro => livro.distribuidora)}
    </div>
  )
}

export default App
