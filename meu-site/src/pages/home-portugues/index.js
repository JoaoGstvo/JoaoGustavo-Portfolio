import './index.css'

function PaginaInicial() {
    return(
        <main>
            <section className="section-linguagem" id="id-section">
                <div className="div-linguagem">
                    <h1 className="textos">
                        English
                    </h1>
                </div>
            </section>

            <section className="itens-superiores" id="id-section">
                <div className="div-1" id="id-divs">
                    <h1 className="textos">
                        Objetivos
                    </h1>
                </div>
                {/* --------------------------------------------- */}
                <div className="div-2" id="id-divs">
                    <h1 className="textos">
                        Tecnologias
                    </h1>
                </div>
                {/* --------------------------------------------- */}                
                <div className="div-3" id="id-divs">
                    <h1 className="textos">
                        Projetos
                    </h1>
                </div>
            </section>

            <section className="itens-meio" id="id-section">
                <div className="div-4" id="id-divs">
                    <h1 className="textos">
                        Idiomas
                    </h1>
                </div>
                {/* --------------------------------------------- */}
                <div className="div-5" id="id-divs">
                    <h1 className="textos">
                        João Gustavo
                    </h1>
                </div>
                {/* --------------------------------------------- */}
                <div className="div-6" id="id-divs">
                    <h1 className="textos">
                        Contatos
                    </h1>
                </div>
            </section>

            <section className="itens-inferiores">
                <div className="div-7" id="id-divs">
                    <h1 className="textos">
                        Formações
                    </h1>
                </div>
                {/* --------------------------------------------- */}
                <div className="div-8" id="id-divs">
                    <h1 className="textos">
                        Informações
                    </h1>
                </div>
                {/* --------------------------------------------- */}
                <div className="div-9" id="id-divs">
                    <h1 className="textos">
                        Informações
                    </h1>
                </div>
            </section>
        </main>
    )
}

export default PaginaInicial