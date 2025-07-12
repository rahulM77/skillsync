async function getRecommendations() {
  const input = document.getElementById("interestInput").value.toLowerCase();
  const resultDiv = document.getElementById("results");
  resultDiv.innerHTML = "";

  try {
    const res = await fetch("data/skills.json");
    const data = await res.json();

    if (data[input]) {
      const { skills, resources } = data[input];
      const skillList = skills.map(s => `<li>${s}</li>`).join("");
      const resList = resources.map(r => `<li><a href="\${r.link}" target="_blank">\${r.name}</a></li>`).join("");

      resultDiv.innerHTML = `
        <h3>Recommended Skills:</h3><ul>\${skillList}</ul>
        <h3>Resources:</h3><ul>\${resList}</ul>
      `;
    } else {
      resultDiv.innerHTML = `<p>No recommendations found for "\${input}". Try another area like 'frontend' or 'ui'.</p>`;
    }
  } catch (error) {
    resultDiv.innerHTML = `<p>Error loading recommendations.</p>`;
    console.error(error);
  }
}
