document.addEventListener("DOMContentLoaded",async ()=>{

    const params=new URLSearchParams(window.location.search);
    const id =  params.get("id")
    console.log(id);
    const productDetails = await fetchData(id);
    Update(productDetails);

})
async function fetchData(id) {
  try {
    const res = await fetch(`https://dummyjson.com/products/${id}`); // Corrected URL with '/'
    if (!res.ok) {
      throw new Error("Error occurred while fetching"); // Throw an error if response is not ok
    }
    return await res.json(); 
  } catch (error) {
    console.error("Error occurred:", error); 
    throw error;
  }
}
function Update(details){
  const desCard = document.querySelector(".container1");

  const priceCard = document.querySelector(".container2");

  const ratingCard = document.querySelector(".container3");

  const discountCard = document.querySelector(".container4");

  const imageCard = document.querySelector(".container5");

  const description=document.createElement("p1")
  description.textContent=details.description;

  const price=document.createElement("p2")
  price.textContent=details.price+"$";

  const discount=document.createElement("p3");
  discount.textContent=details.discountPercentage+"%";

  const rating=document.createElement("p4");
  rating.textContent=details.rating;

  const image=document.createElement("img");
  image.src=details.thumbnail;

  desCard.appendChild(description);
  priceCard.appendChild(price);
  discountCard.appendChild(discount);
  ratingCard.appendChild(rating);
  imageCard.appendChild(image)
  console.log(description)
}