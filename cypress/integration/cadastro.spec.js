import signup from "../pages/SignupPage";

describe("Cadastro", () => {

  beforeEach(() =>{
    cy.fixture('deliver').then(function(d){
      this.deliver = d
    })
  })

  it("Usuário torna-se um entregador", function(){

    signup.go();
    signup.fillForm(this.deliver.signup);
    signup.submit();

    const expectedMessage = "Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.";
    signup.modalContentShoulBe(expectedMessage);

  });

  it("Usuário informa CPF incorreto", function(){
      signup.go();
      signup.fillForm(this.deliver.cpf_inv);
      signup.submit();
      signup.alertMessageShouldBe("Oops! CPF inválido")
  });
});
