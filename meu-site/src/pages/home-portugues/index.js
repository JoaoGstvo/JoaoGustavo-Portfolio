import './index.css'

function PaginaInicial() {
    return(
        <main>
            <section className="section-linguagem">
                <div>
                    <h1>
                        English
                    </h1>
                </div>
            </section>

            <section className="itens-superiores">
                <div className="div-1" id="id-divs">
                    <h1>
                        Objetivos
                    </h1>
                </div>
                {/* --------------------------------------------- */}
                <div className="div-2" id="id-divs">
                    <h1>
                        Tecnologias
                    </h1>
                </div>
                {/* --------------------------------------------- */}                
                <div className="div-3" id="id-divs">
                    <h1>
                        Projetos
                    </h1>
                </div>
            </section>

            <section className="itens-meio">
                <div className="div-4" id="id-divs">
                    <h1>
                        Idiomas
                    </h1>
                </div>
                {/* --------------------------------------------- */}
                <div className="div-5" id="id-divs">
                    <h1>
                        João Gustavo
                    </h1>
                </div>
                {/* --------------------------------------------- */}
                <div className="div-6" id="id-divs">
                    <h1>
                        Contatos
                    </h1>
                </div>
            </section>

            <section className="itens-inferiores">
                <div className="div-7" id="id-divs">
                    <h1>
                        Formações
                    </h1>
                </div>
                {/* --------------------------------------------- */}
                <div className="div-8" id="id-divs">
                    <h1>
                        Informações
                    </h1>
                </div>
                {/* --------------------------------------------- */}
                <div className="div-9" id="id-divs">
                    <h1>
                        Informações
                    </h1>
                </div>
            </section>
        </main>
    )
}

export default PaginaInicial