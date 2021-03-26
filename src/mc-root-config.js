import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@single-spa/welcome",
  app: () =>
    System.import(
      "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
    ),
  activeWhen: ["/"],
});

registerApplication({
  name: "@mc/react-single",
  app: () =>
    System.import(
      "@mc/react-single"
    ),
  activeWhen: ["/react-single"],
});


start({
  urlRerouteOnly: true,
});
