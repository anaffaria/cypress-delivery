import signup from '../pages/SignupPage';
import signupFactory from '../factories/SignupFactory';

describe('Cadastro', () => {

  // beforeEach(() => {
  //   cy.fixture('deliver').then(function (d) {
  //     this.deliver = d
  //   })
  // })

  it('User should be deliver', function () {

    var deliver = signupFactory.deliver();

    signup.go();
    signup.fillForm(deliver);
    signup.submit();

    const expectedMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.';
    signup.modalContentShoulBe(expectedMessage);

  });

  it('Incorret document', function () {
    
    var deliver = signupFactory.deliver();

    deliver.cpf = '000000141aaa'

    signup.go();
    signup.fillForm(deliver);
    signup.submit();
    signup.alertMessageShouldBe('Oops! CPF inválido')
  });

  it('Incorrect email', function () {

    var deliver = signupFactory.deliver();

    deliver.email = 'user.com.br'

    signup.go();
    signup.fillForm(deliver);
    signup.submit();
    signup.alertMessageShouldBe('Oops! Email com formato inválido.')
  });

});
