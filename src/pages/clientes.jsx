import Head from 'next/head'
import Layout from '../components/Layout'
import styles from '../styles/Home.module.css'
import clients from '../data/lista_clientes.json'

import users from '../data/lista_usuario.json'

{console.log(users.users.map((user) => (user.login)))}
export default function clientes() {

    // function isEqual(elem, index, array) {
    //     return elem === "login"
    // }

    // {console.log(clients.clientes.map((cli) => (cli.id)))}
    // console.log(users.users.maps((user) => (user.login
    // )))}


    return (
        <div className={styles.container}>
            <Head>
                <title>Pedidos Bellomix</title>
                <meta name="description" content="Programa de vendas da Bellomix" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Layout titulo='Escolha o cliente'>
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
                            <a placeholder='Vender' href={'/'}>Vender
                            </a>
                        </td>
                    </tr>

                ))}
                    </tbody>
                </table>
                </div>
            </Layout>
        </div>
    )
}
