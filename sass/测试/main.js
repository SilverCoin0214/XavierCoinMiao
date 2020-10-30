if (process.env.NODE_ENV == "production")
  document
    .getElementsByTagName("body")[0]
    .style.setProperty("--width-primary", "0px");
