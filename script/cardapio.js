var produtos = [
    {
        imagem: '/images/Lanche-01.jpeg',
        nome: 'Hambúguer Bom',
        descricao: 'Hambúrguer bom, gostoso que só',
        preco: 'R$ 19,90'
    },
    {
        imagem: '/images/Lanche-02.jpeg',
        nome: 'Hambúguer Médio',
        descricao: 'Hamburguer médio, mais ou menos gostoso',
        preco: 'R$ 14,99'
    },
    {
        imagem: '/images/Lanche-03.jpeg',
        nome: 'Hambúguer Médio',
        descricao: 'Hamburguer médio, mais ou menos gostoso',
        preco: 'R$ 14,99'
    },
    {
        imagem: '/images/Lanche-04.jpeg',
        nome: 'Hambúguer Médio',
        descricao: 'Hamburguer médio, mais ou menos gostoso',
        preco: 'R$ 14,99'
    },
    {
        imagem: '/images/Lanche-05.jpeg',
        nome: 'Hambúguer Médio',
        descricao: 'Hamburguer médio, mais ou menos gostoso',
        preco: 'R$ 14,99'
    },
    {
        imagem: '/images/milkshake.jpeg',
        nome: 'Hambúguer Médio',
        descricao: 'Hamburguer médio, mais ou menos gostoso',
        preco: 'R$ 14,99'
    },

]

    var tabela = document.getElementById('tabelaProdutos').getElementsByTagName('tbody')[0];

    for (var i = 0; i < produtos.length; i++){
        var produto = produtos[i];
        var row = tabela.insertRow(i);
        var cell1 = row.insertCell(0);
        var img = document.createElement('img');
        img.src = produto.imagem;
        img.alt = produto.nome;
        cell1.appendChild(img);

        var cell2 = row.insertCell(1);
        cell2.innerHTML = '<h2>' + produto.nome + '</h2><p>'+produto.descricao + '</p><p>Preço: ' + produto.preco + '</p>';
    }

