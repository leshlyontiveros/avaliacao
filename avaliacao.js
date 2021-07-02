// 1 - Pipoca – 10 segundos (padrão);
// 2 - Macarrão – 8 segundos (padrão);
// 3 - Carne – 15 segundos (padrão);
// 4 - Feijão – 12 segundos (padrão);
// 5 - Brigadeiro – 8 segundos (padrão); 

function microondas (comida, tempo) {
    switch (comida){

        case 'Pipoca': // Pipoca – 10 segundos (padrão);
            if (tempo >= 30){
                console.log('Kabumm')
            }
            else if (tempo >= 20 ){
                console.log('Comida queimou')
            }
            else if (tempo < 10) {
                console.log('Tempo insuficiente')
            }
            else {
                console.log('Prato pronto, bom apetite!')
            }
            break;

        case 'Macarrão': // Macarrão – 8 segundos (padrão);
            if (tempo >= 24){
                console.log('Kabumm')
            }
            else if (tempo >= 16){
                console.log('Comida queimou')
            }
            else if (tempo < 8) {
                console.log('Tempo insuficiente')
            }
            else {
                console.log('Prato pronto, bom apetite!')
            }
            break;

        case 'Carne': // Carne – 15 segundos (padrão);
            if (tempo >= 45){
                console.log('Kabumm')
            }
            else if (tempo >= 15){
                console.log('Comida queimou')
            }
            else if (tempo < 30) {
                console.log('Tempo insuficiente')
            }
            else {
                console.log('Prato pronto, bom apetite!')
            }
            break;

        case 'Feijão': // Feijão – 12 segundos (padrão);
            if (tempo >= 32){
                console.log('Kabumm')
            }
            else if (tempo >= 12){
                console.log('Comida queimou')
            }
            else if (tempo < 22) {
                console.log('Tempo insuficiente')
            }
            else {
                console.log('Prato pronto, bom apetite!')
            }
            break;

        case 'Brigadeiro': // Brigadeiro – 8 segundos (padrão); 
            if (tempo >= 24){
                console.log('Kabumm')
            }
            else if (tempo >= 8){
                console.log('Comida queimou')
            }
            else if (tempo < 16) {
                console.log('Tempo insuficiente')
            }
            else {
                console.log('Prato pronto, bom apetite!')
            }
            break;
        
        default : console.log('prato inexistente')
    }
}
microondas('Feijão', 15)