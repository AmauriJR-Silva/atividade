import { Col, Row } from "reactstrap";
import LinhaDica from "../components/LinhaDica";
import dalimentacao from '../Imagens/dalimentacao.jpg';
import dexercicio from '../Imagens/dexercicio.jpg';
import dsaude from '../Imagens/dsaude.jpg';
import trabalho from '../Imagens/trabalho.jpg';
import descanso from '../Imagens/descanso.jpg';
function Dicas() {
    return (
        <div>
            <Row>
                <Col>
                    <h1 className="display-4 text-center text-white">Dicas!</h1>
                </Col>
            </Row>

            <Row>
                <Col className="text-white mt-5">
                 <LinhaDica titulo= 'Alimentacao' img={dalimentacao} descricao='Variedade de alimentos: Consumir uma ampla gama de alimentos de todos os grupos, como frutas, vegetais, grãos integrais, proteínas magras (como peixe, frango, leguminosas) e laticínios com baixo teor de gordura. Porções controladas: É importante não apenas escolher alimentos saudáveis, mas também controlar as porções para evitar excessos, mantendo um equilíbrio calórico.' />
                 <LinhaDica titulo= 'Exercícios Físicos ' img={dexercicio} descricao='Exercícios aeróbicos: Essas atividades aumentam a frequência cardíaca e a respiração, melhorando a saúde cardiovascular. Exemplos incluem caminhada, corrida, natação, ciclismo e dança. Exercícios de resistência: Esses exercícios visam fortalecer os músculos, melhorar a resistência e a densidade óssea. Incluem levantamento de peso, treinamento de '/>
                 <LinhaDica titulo= 'Saude Mental' img={dsaude} descricao='Equilíbrio emocional: Capacidade de reconhecer e compreender emoções, lidar com o estresse e regular as reações emocionais de maneira saudável. Resiliência: Capacidade de se adaptar a situações adversas, superar obstáculos e aprender com as experiências.' />
                 <LinhaDica titulo= 'Ergonomia No Trabalho' img={trabalho} descricao='Postura adequada: Manter uma postura correta ao sentar, ficar em pé ou realizar tarefas, alinhando a coluna, evitando posturas prolongadas que possam causar desconforto ou lesões, como a síndrome do túnel do carpo, lesões por esforço repetitivo (LER) e dores nas costas. Mobiliário e equipamentos ergonômicos: Utilização de cadeiras ajustáveis, mesas com altura adequada, teclados e mouse ergonômicos, iluminação adequada e telas posicionadas corretamente para reduzir o estresse visual.' />
                 <LinhaDica titulo= 'Técnicas De Descanso' img={descanso} descricao='Sono adequado: O sono é crucial para a recuperação do corpo e a consolidação da memória. Ter uma rotina regular de sono, com um número suficiente de horas de descanso por noite, é fundamental para a saúde geral. Pausas durante o trabalho: Tirar intervalos periódicos ao longo do dia de trabalho pode ajudar a evitar a fadiga, melhorar a concentração e a produtividade. É importante levantar-se, movimentar-se, alongar e descansar a mente durante essas pausas.' />
                </Col>

            </Row>

        </div>
    )
}

export default Dicas;