import './index.css'

function PaginaInicial() {
    return(

        <main>
            <section className="section-linguagem" id="id-section">
                <div className="div-linguagem">
                    <h1 className="textos">English</h1>
                </div>
            </section>

            <section className="itens-superiores" id="id-section">
                <div className="id-divs" id="div-1">
                    <h1 className="textos">Objetivos</h1>
                </div>

                <div className="id-divs" id="div-2">
                    <h1 className="textos">Tecnologias</h1>
                </div>

                <div className="id-divs" id="div-3">
                    <h1 className="textos">Projetos</h1>
                </div>
            </section>

            <section className="section-setas">
                <img src="/images/1.png" alt="Seta 1" className="seta seta1" />
                <img src="/images/2.png" alt="Seta 2" className="seta seta2" />
                <img src="/images/3.png" alt="Seta 2" className="seta seta3" />

                <img src="/images/4.png" alt="Seta 4" className="seta seta4" />
                <img src="/images/5.png" alt="Seta 5" className="seta seta5" />
                <img src="/images/6.png" alt="Seta 6" className="seta seta6" />
            </section>

            <section className="itens-meio" id="id-section">
                <div className="id-divs" id="div-4">
                    <h1 className="textos">João Gustavo</h1>
                </div>
            </section>

            <section className="itens-inferiores">
                <div className="id-divs" id="div-5">
                    <h1 className="textos">Formações</h1>
                </div>

                <div className="id-divs" id="div-6">
                    <h1 className="textos">Idiomas</h1>
                </div>

                <div className="id-divs" id="div-7">
                    <h1 className="textos">Contatos</h1>
                </div>
            </section>
        </main>
    )
}

export default PaginaInicial