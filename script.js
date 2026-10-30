function simularCompra() {
    // 1. Preços fixos correspondentes aos apresentados na página
    const precoAcai = 18.00;
    const precoWhey = 110.00;
    const precoCreatina = 75.00;
    const precoBarra = 10.00;

    // 2. Perguntar a quantidade de cada produto com prompt() e converter com Number()
    const qtdAcai = Number(prompt("Copo de Açaí 500ml (R$ 18,00)\nDigite a quantidade desejada (ou 0 para não comprar):"));
    const qtdWhey = Number(prompt("Whey Protein Concentrado 900g (R$ 110,00)\nDigite a quantidade desejada (ou 0 para não comprar):"));
    const qtdCreatina = Number(prompt("Creatina Monohidratada Pura 300g (R$ 75,00)\nDigite a quantidade desejada (ou 0 para não comprar):"));
    const qtdBarra = Number(prompt("Barra de Proteína (R$ 10,00)\nDigite a quantidade desejada (ou 0 para não comprar):"));

    // 3. Verificar se todas as quantidades são zero
    if (qtdAcai === 0 && qtdWhey === 0 && qtdCreatina === 0 && qtdBarra === 0) {
        alert("Nenhum produto foi selecionado. Que tal simular novamente?");
        return;
    }

    // 4. Calcular os valores individuais (preço × quantidade)
    const subtotalAcai = precoAcai * qtdAcai;
    const subtotalWhey = precoWhey * qtdWhey;
    const subtotalCreatina = precoCreatina * qtdCreatina;
    const subtotalBarra = precoBarra * qtdBarra;

    // 5. Calcular o valor total bruto da compra
    const totalBruto = subtotalAcai + subtotalWhey + subtotalCreatina + subtotalBarra;

    // 6. Verificar direito ao desconto (10% para compras a partir de R$ 150,00)
    let valorDesconto = 0;
    let totalFinal = totalBruto;

    if (totalBruto >= 150) {
        valorDesconto = totalBruto * 0.10;
        totalFinal = totalBruto - valorDesconto;
    }

    // 7. Montar o resumo e exibir com alert()
    let resumo = "=== RESUMO DA COMPRA ===\n\n";
    resumo += "Copo de Açaí 500ml: " + qtdAcai + " un. = R$ " + subtotalAcai.toFixed(2) + "\n";
    resumo += "Whey Protein 900g: " + qtdWhey + " un. = R$ " + subtotalWhey.toFixed(2) + "\n";
    resumo += "Creatina Pura 300g: " + qtdCreatina + " un. = R$ " + subtotalCreatina.toFixed(2) + "\n";
    resumo += "Barra de Proteína: " + qtdBarra + " un. = R$ " + subtotalBarra.toFixed(2) + "\n";
    resumo += "-----------------------------------\n";
    resumo += "Subtotal: R$ " + totalBruto.toFixed(2) + "\n";

    if (valorDesconto > 0) {
        resumo += "Desconto aplicado (10%): -R$ " + valorDesconto.toFixed(2) + "\n";
    } else {
        resumo += "Desconto: R$ 0.00 (Compras a partir de R$ 150,00 ganham 10%)\n";
    }

    resumo += "TOTAL A PAGAR: R$ " + totalFinal.toFixed(2);

    alert(resumo);
}
