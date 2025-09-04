import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Projeto React com Cypress
        </h1>
        <div className="mb-6">
          <Button 
            onClick={() => setCount((count) => count + 1)}
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded"
          >
            Contador: {count}
          </Button>
        </div>
        <p className="text-gray-600">
          Este é um projeto React simples configurado com Cypress para testes E2E.
        </p>
      </div>
    </div>
  )
}

export default App
