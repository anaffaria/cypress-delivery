import SignupPage from "../pages/SignupPage";

describe("Cadastro", () => {

  it("Usuário deve se tornar um entregador", () => {

    var deliver = {
      name: "Ana Caroline",
      cpf: "00000001414",
      email: "ana@gmail.com",
      whatsapp: "11989863523",
      address: {
        postalcode: "04534011",
        street: "Rua Joaquim Floriano",
        number: "100",
        details: "Ap 142",
        district: "Itaim Bibi",
        city_state: "São Paulo/SP",
      },
      delivery_method: "Moto",
      cnh: "cnh-digital.jpg",
    };

    

    var signup = new SignupPage();

    signup.go();
    signup.fillForm(deliver);
    signup.submit();

    const expectedMessage = "Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.";
    signup.modalContentShoulBe(expectedMessage);

  });

  it("Usuário informaCPF incorreto", () => {
    
    var deliver = {
      name: "Ana Caroline",
      cpf: "00000001414AA",
      email: "ana@gmail.com",
      whatsapp: "11989863523",
      address: {
        postalcode: "04534011",
        street: "Rua Joaquim Floriano",
        number: "100",
        details: "Ap 142",
        district: "Itaim Bibi",
        city_state: "São Paulo/SP",
      },
      delivery_method: "Moto",
      cnh: "cnh-digital.jpg",
    };
    
    var signup = new SignupPage();

    signup.go();
    signup.fillForm(deliver);
    signup.submit();
    signup.alertMessageShouldBe("Oops! CPF inválido")
    
  });
});
