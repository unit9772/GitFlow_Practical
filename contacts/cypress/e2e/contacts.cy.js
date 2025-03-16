// Тест на додавання контакту
describe('Adding a contact', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173');
  });

  it('should add a new contact', () => {
    cy.get('input[placeholder="Ім\'я"]').type('Ганна');
    cy.get('input[placeholder="Телефон"]').type('0668854495');
    cy.contains('Додати').click();
    
    cy.get('.contacts-list').should('contain', 'Ганна - 0668854495');
  });
});

// Тест на редагування контакту
describe('Editing a contact', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173');
  });

  it('should edit an existing contact', () => {
    cy.get('input[placeholder="Ім\'я"]').type('Володимир');
    cy.get('input[placeholder="Телефон"]').type('1234567890');
    cy.contains('Додати').click();

    cy.contains('Редагувати').click();
    cy.get('input[placeholder="Ім\'я"]').clear().type('Ганна');
    cy.get('input[placeholder="Телефон"]').clear().type('0987654321');
    cy.contains('Редагувати').click();
    
    cy.get('.contacts-list').should('contain', 'Ганна - 0987654321');
    cy.get('.contacts-list').should('not.contain', 'Володимир - 1234567890');
  });
});


// Тест на видалення контакту
describe('Deleting a contact', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173');
  });

  it('should delete a contact', () => {

    cy.get('input[placeholder="Ім\'я"]').type('Ганна');
    cy.get('input[placeholder="Телефон"]').type('1234567890');
    cy.contains('Додати').click();
    
    cy.contains('Видалити').click();
    
    cy.get('.contacts-list').should('not.contain', 'Ганна - 1234567890');
  });
});


// Тест на сортування контактів за іменем
describe('Sorting contacts by name', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173');
  });

  it('should sort contacts by name', () => {
    cy.get('input[placeholder="Ім\'я"]').type('Ганна');
    cy.get('input[placeholder="Телефон"]').type('1234567890');
    cy.contains('Додати').click();
    
    cy.get('input[placeholder="Ім\'я"]').type('Михайло');
    cy.get('input[placeholder="Телефон"]').type('0987654321');
    cy.contains('Додати').click();

    cy.contains('Сортувати за іменем').click();
    
    cy.get('.contacts-list li').eq(0).should('contain.text', 'Ганна');
    cy.get('.contacts-list li').eq(1).should('contain.text', 'Михайло');
  });
});


// Тест на сортування контактів за телефоном
describe('Sorting contacts by phone number', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173');
  });

  it('should sort contacts by phone number', () => {

    cy.get('input[placeholder="Ім\'я"]').type('Ганна');
    cy.get('input[placeholder="Телефон"]').type('1234567890');
    cy.contains('Додати').click();
    
    cy.get('input[placeholder="Ім\'я"]').type('Михайло');
    cy.get('input[placeholder="Телефон"]').type('0987654321');
    cy.contains('Додати').click();

    cy.contains('Сортувати за телефоном').click();
    
    cy.get('.contacts-list li').eq(0).should('contain.text', '1234567890');
    cy.get('.contacts-list li').eq(1).should('contain.text', '0987654321');
  });
});
