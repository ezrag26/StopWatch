const isAtInitialState = () => {
  cy.get('tbody tr td').first().contains(/^000$/)
    .next().contains(/^00$/)
    .next().contains(/^00$/)
    .next().contains(/^00$/)
    .next().contains(/^000$/)
}

describe('stopwatch', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.get('tbody tr td').last().prev().as('secs')
  })

  it('starts at time 000:00:00:00:000', () => {
    isAtInitialState()
  })

  it('displays the time units', () => {
    cy.get('tfoot tr td').first().contains(/^DAYS$/)
      .next().contains(/^HOURS$/)
      .next().contains(/^MINS$/)
      .next().contains(/^SECS$/)
      .next().contains(/^MS$/)
  })

  it('has start and reset buttons', () => {
    cy.contains('Start')
    cy.contains('Reset')
  })

  it('changes start button to pause after clicking on start', () => {
    cy.contains('Start').click()
    cy.contains('Pause')
  })

  it('starts after clicking the start button', () => {
    cy.contains('Start').click()
    cy.get('@secs').contains(/^01$/)
  })

  it('pauses after clicking the pause button', () => {
    cy.contains('Start').click()
    cy.wait(1000)
    cy.contains('Pause').click()
    cy.wait(1000)
    cy.get('@secs').contains(/^01$/)
  })

  it('continues after unpausing', () => {
    cy.contains('Start').click()
    cy.wait(1000)
    cy.contains('Pause').click()

    cy.contains('Start').click()
    cy.wait(1000)
    cy.get('@secs').contains(/^02$/)
  })

  it('resets the clock after clicking the reset button', () => {
    cy.contains('Start').click()
    cy.wait(1000)
    cy.contains('Reset').click()

    isAtInitialState()
  })
})