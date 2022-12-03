import Head from 'next/head'
import styles from '../styles/Home.module.css'
import clients from '../data/lista_clientes.json'
import products from '../data/lista_produtos.json'
import Layout from '../components/Layout'

export default function vendas() {
    const cliEscolhido = 2

    return (
        <div className={styles.container}>
            <Head>
                <title>Pedidos Bellomix</title>
                <meta name="description" content="Programa de vendas da Bellomix" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Layout titulo='Faça seu pedido'>
                <div className={styles.cla}>

                <table className={styles.tabela}>
                    <thead>
                        <tr>
                            <th width='10%'>Id</th>
                            <th width='40%'>Produto</th>
                            <th width='25%'>7d <br/>14d<br/>30d</th>
                            <th width='15%'>Estoque</th>
                            <th width='15%'>Troca</th>
                            <th width='15%'>Venda</th>
                        </tr>
                    </thead>
                    <tbody>
                        

                        {/* let sizes = cars.map(car => {
                        if (car.capacity <= 3){
                            return "small";
                        }
                        if (car.capacity <= 5){
                            return "medium";
                        }
                        return "large";
                        });
                        console.log(sizes); */}
                       
                        {console.log(clients.clientes.map((cli, ind) => {
                            if (cli.id === '1') {
                                return cli.produtos
                            }
                        }
                        ))}


                        {/* {console.log(clients.clientes.map((cli, ind) => (
                            cli.produtos
                        )))} */}

                        {products.produtos.map((pro, index) => (
                    <tr key={index} alignItems='center'>
                        <td>{pro.id}</td>
                        <td>{pro.descrição}</td>
                        <td>{pro.venda7d}<br/>{pro.venda15d}<br/>{pro.venda30d}</td>
                        <td><input type='text' placeholder="estoque" id='est'/></td>
                        <td><input type='text' placeholder="troca" id='tro'/></td>
                        <td><input type='text' placeholder="venda" id='ven'/></td>
                    </tr>

                ))}
                    </tbody>
                </table>
                </div>
            </Layout>
        </div>
    )
}
