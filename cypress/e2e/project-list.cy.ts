import mockProjects from "../fixtures/projects.json";

describe("Project List", () => {
  beforeEach(() => {
    // Setup request mock with a delay to simulate a slow connection
    cy.intercept("GET", "https://prolog-api.profy.dev/project", {
      fixture: "projects.json",
      delay: 1000, // delay the response by 1000ms
    }).as("getProjects");

    cy.visit("http://localhost:3000/dashboard");
  });

  context("desktop resolution", () => {
    beforeEach(() => {
      cy.viewport(1025, 900);
    });


    it("displays an error message when data retrieval fails", () => {
      // Intercept the GET request and force it to fail
      cy.intercept("GET", "https://prolog-api.profy.dev/project", {
        statusCode: 400,
        body: "Bad Request",
      }).as("getProjectsFail");

      cy.visit("http://localhost:3000/dashboard");
      cy.wait("@getProjectsFail");

      cy.wait(7000);

      cy.get('[data-testid="error-fetching-project-data"]').should("exist");
    });

    it("shows a loading state before rendering the projects", () => {
      cy.get('[data-testid="loading-spinner"]').should("exist");
    });

    it("renders the projects", () => {
      const languageNames = ["React", "Node.js", "Python"];

      // Check if the LoadingAnimation component is not rendered anymore
      cy.get('[data-testid="loading-spinner"]').should("not.exist");

      cy.wait("@getProjects");

      // Get all project cards
      cy.get("main")
        .find("li")
        .should("have.length", mockProjects.length)
        .each(($el, index) => {
          // Check that project data is rendered
          cy.wrap($el).contains(mockProjects[index].name);
          cy.wrap($el).contains(languageNames[index]);
          cy.wrap($el).contains(mockProjects[index].numIssues);
          cy.wrap($el).contains(mockProjects[index].numEvents24h);
          cy.wrap($el).contains(mockProjects[index].displayedStatus);
          cy.wrap($el)
            .find("a")
            .should("have.attr", "href", "/dashboard/issues");
        });
    });
  });
});
