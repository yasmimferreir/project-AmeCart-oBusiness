import React from "react";
import "../contents/contents.css";
import vetor from "../../img/Vector.png";
import vetorCartão from "../../img/vetor.png";

function Content() {
    return (
        <div className="container-global">
            <div className="container-register">
                <img src={ vetor } alt="" className="vetor" />

                <div className="container--div">
                    <h2 className="title-div">CARTÃO BUSINESS</h2>
                    <p className="paragrafh--div">Um cartão de crédito criado especificamente para atender as necessidades das pequenas e médias empresas,
                        desde as despesas mais rotineiras como compra de insumos até e pagamentos aos fornecedores. Permite que a empresa faça gestão do fluxo de caixa e melhore o controle financeiro.</p>

                    <div className="container-cart">
                        <img src={ vetorCartão } alt="" />
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Content;