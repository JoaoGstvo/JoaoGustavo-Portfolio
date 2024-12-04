import './index.css'

function PaginaInicial() {
    return(

        <main>
            
            <section className="section-linguagem">
                <div className="div-linguagem">
                    <h1 className="textos">English</h1>
                </div>
            </section>

            <section className="container-itens">
                <section className="itens-primeira-coluna">
                    <div className="divs-itens" id="a">
                        <h1 className="textos">Objetivos</h1>
                    </div>

                    <section className="section-setas-esquerda">
                        <img src="/images/Seta1.png" alt="Seta 1" className="seta1" />
                        <img src="/images/Seta5.png" alt="Seta 2" className="seta2" />
                    </section>

                    <div className="divs-itens" id="div-2">
                        <h1 className="textos">Tecnologias</h1>
                    </div>
                </section>


                <section className="itens-meio-coluna">
                    <div className="divs-itens" id="coluna-meio">
                        <h1 className="textos">Projetos</h1>
                    </div>

                    <div className="divs-itens" id="coluna-meio">
                        <h1 className="textos">João Gustavo</h1>
                    </div>

                    <div className="divs-itens">
                        <h1 className="textos">Contatos</h1>
                    </div>
                </section>


                <section className="itens-direita-coluna">
                    <div className="divs-itens" id="div-direita">
                        <h1 className="textos">Formações</h1>
                    </div>

                    <section className="section-setas-direita">
                        <img src="/images/Seta3.png" alt="Seta 1" className="seta3" />
                        <img src="/images/Seta2.png" alt="Seta 2" className="seta4" />
                    </section>

                    <div className="divs-itens" id="div-direita">
                        <h1 className="textos">Idiomas</h1>
                    </div>
                </section>

            </section>

        </main>
    )
}

export default PaginaInicial