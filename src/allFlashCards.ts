import { getNewId } from "./helpers/arrayHelpers";

export const allFlashCards = [
{
    title: 'React',
    description: 'React é uma biblioteca de JavaScript criada pelo Facebook que nos ajuda a construir interfaces de usuário, que são as partes de um site ou aplicativo que as pessoas veem e interagem.'
},
{
    title: 'Next.js',
    description: ' Next.js é como uma versão turbinada do React que torna mais fácil construir aplicações web grandes e complexas.'
},
{
    title: 'Prisma',
    description: ' Prisma é uma biblioteca de gerenciamento de banco de dados que nos ajuda a gerenciar nossos dados de forma eficiente e segura.'
},
{
    title: 'API',
    description: 'APIs são essenciais para permitir que diferentes sistemas de software interajam entre si, compartilhando dados e funcionalidades de maneira controlada e segura.'
},
{
    title: 'Condicional Ternário',
    description: ' é uma estrutura de controle condicional que nos permite executar um bloco de código de acordo com uma condição.'
},
{
    title: 'Flex flex row',
    description: 'Mantem o alinhamento horizontal dos itens.'
},
{
    title: 'Items-center',
    description: 'Alinha os compomentes ao centro.'
},
{
    title: '',
    description: ''
},
{
    title: '',
    description: ''
}
]
.map(item => {
    return {id: getNewId(), ...item, showTitle: true};
})
.sort((a, b) => a.title.localeCompare(b.title))



