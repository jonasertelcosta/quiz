import questoes from "../bancoDeQuestoes"

const Func = (req,res) => {
    // recebe id pela url
    const idSelecionado = +req.query.id

    const unicaQuestaoOuNada = questoes.filter(questao => questao.id === idSelecionado)

    if(unicaQuestaoOuNada.length === 1){
        const questaoSelecoinada = unicaQuestaoOuNada[0].embaralharRespostas()
        res.status(200).json(questaoSelecoinada.converterParaObjeto())

    } else{
        res.status(204).send()
    }
}

export default Func