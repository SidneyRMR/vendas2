import Head from 'next/head'
import Image from 'next/image'
import NavButtons from '../components/NavButtons'
import styles from '../styles/Home.module.css'


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>  
        <title>Pedidos Bellomix</title>
        <meta name="description" content="Programa de vendas da Bellomix" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.grid}>
          <div className={styles.card}>
            <Image src="/logo.png" alt="Bello Mix Logo" width={200} height={140} />
            <h2 >Faça login para vender</h2>
            <p><input type="text" placeholder='Usuário' /></p>
            <p><input type="password" placeholder='Senha'/></p>
            <button 
                type='submit' >
                <NavButtons destiny='/clientes' text='Entrar' />
            </button>
          </div>
        </div>
      </main>
    </div>
  )
}
