import React from 'react'
import { useState } from 'react'

function App() {
  const [apiData, setApiData] = useState<ApiResult | undefined>(undefined)

  interface ApiData {
    nome: string,
    autor: string,
    distribuidora: string,
  }

  interface ApiResult {
    message: ApiData[]
  }

  React.useEffect(() => {
    fetch("http://127.0.0.1:3000/livros").then(res => res.json()).then(json => setApiData(json))
  }, [])

  if (apiData == undefined) return <div>teste</div>

  return (
    <div className="App">
      {apiData.message.map(livro => (
        <div>
          <p>{livro.nome}</p>
          <p>{livro.autor}</p>
          <p>{livro.distribuidora}</p>
        </div>
      ))}
    </div>
  )
}

export default App
