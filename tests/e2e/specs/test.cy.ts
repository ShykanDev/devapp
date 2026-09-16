describe('DevApp smoke', () => {
  it('muestra la pantalla de inicio de sesión', () => {
    cy.visit('/login')
    cy.contains('DevApp')
    cy.contains('Continuar con Google')
  })

  it('navega a la enciclopedia', () => {
    cy.visit('/enciclopedia')
    cy.contains('Enciclopedia de programación')
    cy.contains('Explorar por categoría')
  })

  it('muestra el menú principal en la app', () => {
    cy.visit('/mis-secciones')
    cy.contains('Mis secciones')
  })
})
