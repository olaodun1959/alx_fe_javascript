const quotes = [
  { text: "Code never lies, comments sometimes do.", category: "Programming" },
  { text: "Dream big. Start small. Act now.", category: "Motivation" }
];

function getQuoteByCategory(cat) {
  return cat ? quotes.filter(q => q.category === cat) : quotes;
}

function showRandomQuote() {
  const category = document.getElementById("categorySelect")?.value;
  const filtered = getQuoteByCategory(category);
  const random = filtered[Math.floor(Math.random() * filtered.length)];
  document.getElementById("quoteDisplay").textContent = random
    ? `"${random.text}" (${random.category})`
    : "No quotes available.";
}

function addQuote() {
  const text = document.getElementById("newQuoteText").value.trim();
  const category = document.getElementById("newQuoteCategory").value.trim();

  if (!text || !category) {
    alert("Both fields are required.");
    return;
  }

  quotes.push({ text, category });
  updateDropdown();
  document.getElementById("newQuoteText").value = "";
  document.getElementById("newQuoteCategory").value = "";
  alert("Quote added!");
}

function updateDropdown() {
  const container = document.getElementById("categoryDropdownContainer");

  let select = document.getElementById("categorySelect");
  if (!select) {
    select = document.createElement("select");
    select.id = "categorySelect";
    select.onchange = showRandomQuote;
    container.appendChild(select);
  }

  const categories = [...new Set(quotes.map(q => q.category))];
  select.innerHTML = `<option value="">All</option>` +
    categories.map(cat => `<option>${cat}</option>`).join('');
}

// Init
document.getElementById("newQuote").addEventListener("click", showRandomQuote);
window.onload = updateDropdown;

console.log("JavaScript is connected and running!");
