import { Row, Col } from "reactstrap";
import alimentacao from '../Imagens/alimentacao.jpg';
import exercicio from '../Imagens/exercicio.jpg';
import saudemental from '../Imagens/saudemental.jpg';
import BoasVindas from "../components/BoasVindas";
function Home() {
    return (
        <div>
            <Row>
                <Col className='text-center my-3 text-white'>
                <h1 class="display-4 text-center text-white">Bem-Vindos!</h1>
                </Col>
            </Row>

            <Row>
                <Col>
                 <BoasVindas titulo= 'Alimentacao' img={alimentacao} descricao='Aqui você aprenderá a comer de uma forma mais saudável.' />
                </Col>
                <Col>
                 <BoasVindas titulo= 'Exercicio' img={exercicio} descricao='Aqui você encontra os melhores exercicios para seu corpo.'/>
                </Col>
                <Col>
                 <BoasVindas titulo= 'Saude Mental' img={saudemental} descricao='Aqui você aprenderá a cuidar de forma mais saudável da sua saude mental' />
                </Col>
            </Row>

        </div>
    )
}

export default Home;


