{/* <reference types="cypress" /> */}

describe('User melakukan proses login pada SIAKAD Polinema', () => {
  it('User memasukkan username berupa NIM dan password yang terdaftar', () => {
    cy.visit('http://siakad.polinema.ac.id/')
    cy.get('#username').type('1831710160')
    cy.get('#password').type('addin2000')
    cy.get('.btn-success').click()
  })

  it('User memasukkan username berupa NIM dan password yang tidak terdaftar', () => {
    cy.visit('http://siakad.polinema.ac.id/')
    cy.get('#username').type('18')
    cy.get('#password').type('10')
    cy.get('.btn-success').click()
    cy.contains('Username / Password Salah')
  })

  it('User memasukkan nim dan tidak mengisi password', () => {
    cy.visit('http://siakad.polinema.ac.id/')
    cy.get('#username').type('1831710160')
    cy.get('.btn-success').click()
  })

  it('User memasukkan password dan tidak mengisi nim', () => {
    cy.visit('http://siakad.polinema.ac.id/')
    cy.get('#password').type('1831710160')
    cy.get('.btn-success').click()
  })


  it('User mengklik tombol lupa password', () => {
    cy.visit('http://siakad.polinema.ac.id/')
    cy.get('.forget-password').click()

  })






  

})