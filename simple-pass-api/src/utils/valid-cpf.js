export const validCPF = (cpf) => {
    const regexCPF = /^\d{3}\.?\d{3}\.?\d{3}-?\d{2}$/;
    return regexCPF.test(cpf);
};
