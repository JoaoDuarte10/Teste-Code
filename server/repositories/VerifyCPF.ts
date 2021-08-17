export function verifyCPF(cpf: any) {
    if(
        cpf.length != 11 ||
        cpf == "00000000000" ||
        cpf == "11111111111" ||
        cpf == "22222222222" ||
        cpf == "33333333333" ||
        cpf == "44444444444" ||
        cpf == "55555555555" ||
        cpf == "66666666666" ||
        cpf == "77777777777" ||
        cpf == "88888888888" ||
        cpf == "99999999999"
    ) {
        return false;
    }

    let somaPrimeiroDigito = 0
    somaPrimeiroDigito += cpf[0] * 10;
    somaPrimeiroDigito += cpf[1] * 9;
    somaPrimeiroDigito += cpf[2] * 8;
    somaPrimeiroDigito += cpf[3] * 7;
    somaPrimeiroDigito += cpf[4] * 6;
    somaPrimeiroDigito += cpf[5] * 5;
    somaPrimeiroDigito += cpf[6] * 4;
    somaPrimeiroDigito += cpf[7] * 3;
    somaPrimeiroDigito += cpf[8] * 2;

    if( somaPrimeiroDigito == 10 || somaPrimeiroDigito == 11) somaPrimeiroDigito = 0;
    somaPrimeiroDigito = (somaPrimeiroDigito * 10) % 11;

    if(somaPrimeiroDigito != cpf[9]) {
        return false;
    }

    let somaSegundoDigito = 0;
    somaSegundoDigito += cpf[0] * 11;
    somaSegundoDigito += cpf[1] * 10;
    somaSegundoDigito += cpf[2] * 9;
    somaSegundoDigito += cpf[3] * 8;
    somaSegundoDigito += cpf[4] * 7;
    somaSegundoDigito += cpf[5] * 6;
    somaSegundoDigito += cpf[6] * 5;
    somaSegundoDigito += cpf[7] * 4;
    somaSegundoDigito += cpf[8] * 3;
    somaSegundoDigito += cpf[9] * 2;

    if(somaSegundoDigito == 10 || somaSegundoDigito == 11) somaSegundoDigito = 0;
    somaSegundoDigito = (somaSegundoDigito * 10) % 11;

    if(somaSegundoDigito != cpf[10]) {
        return false;
    }

    return true;
}