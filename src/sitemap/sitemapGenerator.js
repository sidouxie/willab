require("babel-register")({
    presets: ["es2015", "react"]
  });
   
  const routes = require("./routes").default;
  const Sitemap = require("react-router-sitemap").default;
  
  function generateSitemap() {
      return (
        new Sitemap(routes)
            .build("https://walidkhaladi.ml")
            .save("./public/sitemap.xml")
      );
  }
  
  generateSitemap();