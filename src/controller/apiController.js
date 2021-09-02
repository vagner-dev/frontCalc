//https://611e96c49771bf001785c54d.mockapi.io/api/v1/medicamentos
//https://611e96c49771bf001785c54d.mockapi.io/api/v1/marcas
const api = async () =>{
    const apiMarcas = await fetch('https://611e96c49771bf001785c54d.mockapi.io/api/v1/marcas')
    const apiMedimentos = await fetch('https://611e96c49771bf001785c54d.mockapi.io/api/v1/medicamentos')
    const apiResult = {
        apiMarcas: await apiMarcas.json(),
        apiMedimentos: await apiMedimentos.json()
    }
    return apiResult
}

export default api;

