describe('Cadastro', ()=>{

    it('Usuário deve se tornar um entregador', ()=>{
        cy.viewport(1440,900)
        cy.visit('https://buger-eats.vercel.app')

        cy.get('a[href="/deliver"]').click()
        cy.get('#page-deliver form h1').should('have.text', 'Cadastre-se para  fazer entregas')

        var delivery = {
            name: 'Ana Caroline',
            cpf: '00000001414',
            email: 'ana@gmail.com',
            whatsapp:'11989863523',
            address:{
                postalcode: '04534011',
                street: 'Rua Joaquim Floriano',
                number: '100',
                details: 'Ap 142',
                district: 'Itaim Bibi',
                city_state: 'São Paulo/SP',
            },
            delivery_method: 'Moto',
            cnh: 'cnh-digital.jpg'
        }

        cy.get('input[name="name"]').type(delivery.name)
        cy.get('input[name="cpf"]').type(delivery.cpf)
        cy.get('input[name="email"]').type(delivery.email)
        cy.get('input[name="whatsapp"]').type(delivery.whatsapp)

        cy.get('input[name="postalcode"]').type(delivery.address.postalcode)
        cy.get('input[type="button"][value="Buscar CEP"]').click()

        cy.get('input[name="address-number"]').type(delivery.address.number)
        cy.get('input[name="address-details"]').type(delivery.address.details)

        cy.get('input[name="address"]').should('have.value', delivery.address.street)
        cy.get('input[name="district"]').should('have.value', delivery.address.district)
        cy.get('input[name="city-uf"]').should('have.value', delivery.address.city_state)

        cy.contains('.delivery-method li', delivery.delivery_method).click()
        
        cy.get('input[accept^="image"]').attachFile('/images/' + delivery.cnh)
        cy.get('form button[type="submit"]').click()

        const expectedMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'
        cy.get('.swal2-html-container.swal2-html-container').should('have.text', expectedMessage)

    })
    
    it('Usuário informaCPF incorreto', ()=>{
        cy.viewport(1440,900)
        cy.visit('https://buger-eats.vercel.app')

        cy.get('a[href="/deliver"]').click()
        cy.get('#page-deliver form h1').should('have.text', 'Cadastre-se para  fazer entregas')

        var delivery = {
            name: 'Ana Caroline',
            cpf: '00000001414AA',
            email: 'ana@gmail.com',
            whatsapp:'11989863523',
            address:{
                postalcode: '04534011',
                street: 'Rua Joaquim Floriano',
                number: '100',
                details: 'Ap 142',
                district: 'Itaim Bibi',
                city_state: 'São Paulo/SP',
            },
            delivery_method: 'Moto',
            cnh: 'cnh-digital.jpg'
        }

        cy.get('input[name="name"]').type(delivery.name)
        cy.get('input[name="cpf"]').type(delivery.cpf)
        cy.get('input[name="email"]').type(delivery.email)
        cy.get('input[name="whatsapp"]').type(delivery.whatsapp)

        cy.get('input[name="postalcode"]').type(delivery.address.postalcode)
        cy.get('input[type="button"][value="Buscar CEP"]').click()

        cy.get('input[name="address-number"]').type(delivery.address.number)
        cy.get('input[name="address-details"]').type(delivery.address.details)

        cy.get('input[name="address"]').should('have.value', delivery.address.street)
        cy.get('input[name="district"]').should('have.value', delivery.address.district)
        cy.get('input[name="city-uf"]').should('have.value', delivery.address.city_state)

        cy.contains('.delivery-method li', delivery.delivery_method).click()
        
        cy.get('input[accept^="image"]').attachFile('/images/' + delivery.cnh)
        cy.get('form button[type="submit"]').click()

        cy.get('.alert-error').should('have.text', 'Oops! CPF inválido')
    })
})