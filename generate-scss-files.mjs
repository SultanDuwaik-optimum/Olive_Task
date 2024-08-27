import fs from "fs";
import path from "path";
import fetch from "node-fetch";

const jsonUrl = "http://localhost:3000/themes";

console.log(jsonUrl);

function generateScssContent(theme, index) {
  const palette = theme.palettes;
  const paletteKeys = [
    "primary",
    "secondary",
    "tertiary",
    "neutral",
    "neutral-variant",
    "error",
  ];

  let scssContent = `$palette: (\n`;

  paletteKeys.forEach((key) => {
    scssContent += `  ${key}: (\n`;
    const colors = palette[key];
    Object.keys(colors).forEach((shade) => {
      scssContent += `    ${shade}: ${colors[shade]},\n`;
    });
    scssContent += `  ),\n`;
  });

  scssContent += `);\n`;

  return scssContent;
}

const outputDir = "src/styles/palettes/";

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}

async function fetchAndGenerateScss() {
  try {
    const response = await fetch(jsonUrl);
    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.statusText}`);
    }
    const jsonData = await response.json();

    jsonData.themes.forEach((theme, index) => {
      const scssContent = generateScssContent(theme, index);
      fs.writeFileSync(
        path.join(outputDir, `_palette${index + 1}.scss`),
        scssContent
      );
    });

    console.log("SCSS files generated successfully.");
  } catch (error) {
    console.error("Error fetching or generating SCSS:", error);
  }
}

fetchAndGenerateScss();
