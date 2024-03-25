async function fetchData() {
  try {
    const res = await fetch(
      "https://dummyjson.com/products"
    );
    if (!res.ok) {
      throw new Error("Error occurred while fetching data");
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error occurred:", error);
    throw error;
  }
}

async function displayData() {
    const container = document.querySelector(".container");
  try {
    const data = await fetchData();
    data.products.forEach((element) => {

    
      const card = document.createElement("div");
      card.classList.add("card");

      const image = document.createElement("img");
      image.src = element.thumbnail;

      const names =document.createElement("h2");
      names.textContent=element.title

      card.appendChild(names);
      card.appendChild(image);
     
      container.appendChild(card);
    });
  } catch (error) {
    console.error("Error occurred:", error);
  }
}

displayData();
