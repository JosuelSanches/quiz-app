import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <div className='container'>
        <h1>Quiz do balacubaco</h1>
        <link href='/quiz'>
          <button>Iniciar o Quiz</button>
        </link>
      </div>
    </main>
  )
}
