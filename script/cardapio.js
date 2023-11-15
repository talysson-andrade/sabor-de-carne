var btnBebidas = document.getElementById("btnBebidas");
var btnLanches = document.getElementById("btnLanches");
var btnSobremesas = document.getElementById("btnSobremesas");

var tabelaLanches = document.getElementById("tabelaLanches");
var tabelaBebidas = document.getElementById("tabelaBebidas");
var tabelaSobremesas = document.getElementById("tabelaSobremesas");

btnLanches.addEventListener("click", function(){
    tabelaLanches.scrollIntoView({ behavior: "smooth"});
});
btnBebidas.addEventListener("click", function(){
    tabelaBebidas.scrollIntoView({ behavior: "smooth"});
});
btnSobremesas.addEventListener("click", function(){
    tabelaSobremesas.scrollIntoView({ behavior: "smooth"});
});

var lanches = [
    
    {
        imagem:'images/lanche-00.jpg',
        nome:'Supremo Gourmet',
        descricao:'Pão levemente rústico e tostado, carne suculenta, queijos de personalidade e vegetais frescos se juntam em camadas generosas, os molhos, preparados de forma artesanal, adicionam o toque final, ressaltando os sabores naturais e elevando o conjunto a um patamar inesquecível. O Supremo Gourmet é mais que um lanche, Saboreie a autenticidade do Supremo Gourmet, onde a rusticidade se encontra com a sofisticação de uma forma que apenas a verdadeira culinária pode oferecer.',
        preco:'R$ 40,00'
    },    
    {
        imagem: 'images/Lanche-01.jpg',
        nome: 'Hambúguer Clássico',
        descricao: 'Este hambúrguer clássico é a escolha perfeita para os amantes da simplicidade.Um suculento hambúrguer de carne 100% bovina grelhado no ponto certo, servido em um pão macio de brioche. Ele é acompanhado de alface fresca, tomate maduro e cebola roxa, e regado com nosso molho especial de maionese e ketchup.Uma experiência autêntica que nunca sai de moda',
        preco: 'R$ 25,00'
    },
    {
        imagem: 'images/Lanche-02.jpg',
        nome: 'Hambúguer Gourmet de Queijo',
        descricao: 'Um suculento hambúrguer de carne 100% bovina grelhado no ponto certo, servido em um pão macio de brioche. Ele é acompanhado de alface fresca, tomate maduro e cebola roxa, e regado com nosso molho especial de maionese e ketchup. Uma experiência autêntica que nunca sai de moda',
        preco: 'R$ 25,00'
    },
    {
        imagem: 'images/Lanche-03.jpg',
        nome: 'Hambúguer Vegetariano Saboroso',
        descricao: 'Para os amantes de vegetais, oferecemos nosso hambúrguer vegetariano saboroso. Este hambúrguer à base de plantas é preparado com uma mistura especial de legumes, cogumelos e temperos, grelhado até ficar dourado. Ele é servido em um pão integral, acompanhado de alface crocante, tomate fresco, abacate cremoso e maionese vegana. Uma opção deliciosa e saudável',
        preco: 'R$ 30,00'
    },
    {
        imagem: 'images/Lanche-04.jpg',
        nome: 'Hambúguer Picante Mexicano',
        descricao: 'Prepare-se para uma explosão de sabores com nosso hambúrguer picante mexicano. Este hambúrguer de carne grelhada é coberto com queijo pepper jack derretido, guacamole caseiro e jalapeños em conserva, tudo isso entre um pão de milho levemente tostado. O tempero mexicano e a pimenta dão um toque de calor irresistível',
        preco: 'R$ 30,00'
    },
    {
        imagem: 'images/Lanche-05.jpg',
        nome: 'Hambúguer de Frango Grelhado',
        descricao:  'Se você prefere frango, não perca nosso hambúrguer de frango grelhado. Um peito de frango suculento é marinado em ervas e especiarias, grelhado até ficar macio e colocado em um pão de aveia. Para um toque de frescor, adicionamos alface, tomate e cebola roxa, juntamente com um molho de iogurte com ervas. Uma opção leve e saborosa',
        preco: 'R$ 25,00'
    },
    {
        imagem:'images/porcaobatata.jpg',
        nome:'Batata Frita',
        descricao:'Batatas fritas temperadas com uma pitada de sal marinho, realçando o sabor natural da batata.',
        preco:'R$ 15,00',
    },
    {
        imagem:'images/porcaocheddarebacon.jpg',
        nome:'Batata Frita com Cheddar e Bacon',
        descricao: 'Batata frita com generosas porções de bacon e uma camada de cheddar derretido',
        preco:'R$20,00',
    }
]

var bebidas = [

    {   
    imagem: 'images/refrigerante.jpg',
    nome: 'Refrigerante Lata 350ML',
    descricao: '',
    preco: 'R$ 10,00'
    },

    
    {   
    imagem: 'images/sucoabacaxi.jpg',
    nome: 'Suco de Abacaxi com hortelã',
    descricao: 'Suco de abacaxi com hortelã preparado com ingredientes frescos e naturais, é a escolha perfeita para quem busca uma bebida que equilibra doçura e frescor.',
    preco: 'R$ 14,99'
    },

    {
    imagem: 'images/sucolaranja.jpg',
    nome: 'Suco de Laranja',
    descricao: 'Suco de laranja frescamente espremido. Feito com laranjas maduras e suculentas, para refrescar o seu dia.',
    preco: 'R$ 14,99'
    },

    {
    imagem: 'images/sucolimao.jpg',
    nome: 'Suco de Limão',
    descricao: 'Feito com limões frescos espremidos na hora, este suco é a escolha perfeita para quem aprecia sabores intensos e acentuados',
    preco: 'R$ 14,99'
    },

    {
        imagem: 'images/agua.jpg',
        nome: 'Água Sem Gás',
        descricao: 'Água mineral sem gás, 500Ml',
        preco: 'R$ 8,00'
    },
    
    {
        imagem: 'images/agua.jpg',
        nome: 'Água Com Gás',
        descricao: 'Água mineral com gás, 500Ml',
        preco: 'R$ 8,00'
    }
    
    
]


var sobremesas= [ {
    imagem: 'images/milkshakechocolate.jpg',
    nome: 'Milkshake de Chocolate',
    descricao: 'Feito com sorvete de chocolate e leite, é uma mistura cremosa e rica que vai saciar seus desejos por chocolate. Uma delícia indulgente para os amantes de chocolate.',
    preco: 'R$ 20,00'
},

{
    imagem: 'images/milkshakemorango.jpg',
    nome: 'Milkshake de Morango',
    descricao: 'O Milkshake de Morango é uma opção refrescante e frutada. Feito com morangos frescos, sorvete de baunilha e leite, este milkshake oferece um sabor doce e natural. É uma escolha ideal para quem adora frutas e quer uma experiência de milkshake mais leve.',
    preco: 'R$ 20,00'
},

{
    imagem: 'images/milkshakebaunilha.jpg',
    nome: 'Milkshake de Baunilha',
    descricao: 'O Milkshake de Baunilha é a epítome da simplicidade e elegância. Feito com sorvete de baunilha e leite, possui um sabor suave e delicado. É a escolha perfeita para aqueles que apreciam a doçura clássica da baunilha.',
    preco: 'R$ 20,00'
}

]

function criarTabela(produtos, tabelaId) {
    var tabela = document.getElementById(tabelaId).getElementsByTagName('tbody')[0];

    for (var i = 0; i < produtos.length; i++) {
        var produto = produtos[i];
        var row = tabela.insertRow(i);

        var cell1 = row.insertCell(0);
        var img = document.createElement('img');
        img.src = produto.imagem;
        img.alt = produto.nome;
        cell1.appendChild(img);

        var cell2 = row.insertCell(1);
        cell2.innerHTML = '<h2>' + produto.nome + '</h2><p class="descricao">' + produto.descricao + '</p><p class="valor">' + produto.preco + '</p>';
    }
}

criarTabela(lanches, 'tabelaLanches')
criarTabela(bebidas, 'tabelaBebidas')
criarTabela(sobremesas, 'tabelaSobremesas')


