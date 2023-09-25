export interface Veiculo {
  id: number;
  marca: string;
  nome: string;
  ano: string;
  motor: string;
  combustivel: string;
  imagem: Array<string>; // TODO - Criar um Array
  cor: string;
  quilometragem: number;
}
