export class CPF {
    public readonly id_cpf: string;

    public cpf: string;

    constructor(props: Omit<CPF, 'id_cpf'>, id_cpf?: string){
        Object.assign(this, props)
    }
}