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
                <div className="id-divs" id="div-1">
                    <h1 className="textos">
                        Objetivos
                    </h1>
                </div>
                {/* --------------------------------------------- */}
                <div className="id-divs" id="div-2">
                    <h1 className="textos">
                        Tecnologias
                    </h1>
                </div>
                {/* --------------------------------------------- */}                
                <div className="id-divs" id="div-3">
                    <h1 className="textos">
                        Projetos
                    </h1>
                </div>
            </section>

            <section className="itens-meio" id="id-section">

                <div className="id-divs" id="div-4">
                    <h1 className="textos">
                        João Gustavo
                    </h1>
                </div>
              
            </section>

            <section className="itens-inferiores">
                <div className="id-divs" id="div-5">
                    <h1 className="textos">
                        Formações
                    </h1>
                </div>

                {/* --------------------------------------------- */}
                <div className="id-divs" id="div-6">
                    <h1 className="textos">
                        Idiomas
                    </h1>
                </div>
                {/* --------------------------------------------- */}
                <div className="id-divs" id="div-7">
                    <h1 className="textos">
                        Contatos
                    </h1>
                </div>
            </section>
        </main>
    )
}

export default PaginaInicial