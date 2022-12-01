import Head from 'next/head'
import Layout from '../components/Layout'
import styles from '../styles/Home.module.css'
import clients from '../data/lista_clientes.json'


import {useRouter} from 'next/router'

export default function vendas() {
    const router = useRouter()
    return (
        <div className={styles.container}>
            <Head>
                <title>Pedidos Bellomix</title>
                <meta name="description" content="Programa de vendas da Bellomix" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div>Cliente = {router.query.filial}</div>
            <div>Cliente = {router.query.filial}</div>
            {/* <Layout titulo='Escolha o cliente'>
                <div className={styles.cla}>

                <table className='table'>
                    <thead>
                        <tr>
                            <th width='15%'>Id</th>
                            <th width='40%'>Nome</th>
                            <th width='25%'>Cidade</th>
                            <th width='15%'></th>
                        </tr>
                    </thead>
                    <tbody>
                        {console.log(clients.clientes.map((cli) => (cli.id)))}
                        {clients.clientes.map((client, index) => (
                    <tr key={index}>
                        <td>{client.id}</td>
                        <td>{client.nome}</td>
                        <td>{client.cidade}</td>
                        <td width='15%'>
                            <button type="submit">
                                <NavButtons destiny='/clientes/:id' text='Entrar' />
                            </button>
                        </td>
                    </tr>

                ))}
                    </tbody>
                </table>
                </div>
            </Layout> */}
        </div>
    )
}
