/*
 *   Copyright (c) 2021.
 *   All rights reserved.
 */   
import addContext from "mochawesome/addContext";

const titleToFileName = (title) => title.replace(/[:\/]/g, '');
Cypress.on("test:after:run", (test, runnable) => {
  if (test.state === "failed") {
    const screenshot = `assets/${Cypress.spec.name}/${runnable.parent.title} -- ${test.title} (failed).png`;
    const video = `assets/${Cypress.spec.name}.mp4`;

    addContext({ test }, screenshot );
    addContext({ test }, video);
  }
});
