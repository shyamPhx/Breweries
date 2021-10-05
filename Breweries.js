// window.addEventListener('DOMContentLoaded',getUserAsync, list);
/***********************************Fetch ***************************************************************************/
async function getUserAsync() {
  try {
    const response = await fetch(`https://api.openbrewerydb.org/breweries`);
    const data = await response.json();
    Brewlist(data);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}
getUserAsync();

function list(brewery) {
  const card = document.createElement("div", "card");
  card.classList.add("card");
  card.style.width = "25rem";
  card.style.display = "inline-block";
  card.style.marginRight = "15px";

  const heading = document.createElement("h5", "card-title");
  card.classList.add("card-title");
  heading.innerHTML = brewery.name;


  const cardBody = document.createElement("div", "cardBody");
  card.classList.add("card-Body");

  const Btype = document.createElement("p", "breweryType");
  Btype.innerHTML = "Brewery_type:";

  const breweryTypeName  = document.createElement("span");
  breweryTypeName.innerHTML = brewery.brewery_type;
  breweryTypeName.style.color = "black";
  breweryTypeName.style.borderRadius = "5px";
  breweryTypeName.style.display = "inline-block";
  breweryTypeName.style.padding = "5px 6px";
  breweryTypeName.style.margin = "1px 2px";
  breweryTypeName.style.textAlign = "center";
  Btype.append(breweryTypeName);

  const Baddress = document.createElement("p", "brewery_address");
  Baddress.innerHTML = "Brewery_address:";

  const brewery_street  = document.createElement("span");
  brewery_street.innerHTML = "<p>'"+`${brewery.street ? brewery.street : ''}`+"'</p>"
  brewery_street.style.color = "black";
  brewery_street.style.borderRadius = "5px";
  brewery_street.style.display = "inline-block";
  brewery_street.style.padding = "5px 6px";
  brewery_street.style.margin = "1px 2px";

  const brewery_state  = document.createElement("span");
  brewery_state.innerHTML =`${brewery.state ? brewery.state : ' '}` 
  brewery_state.style.color = "black";
  brewery_state.style.borderRadius = "5px";
  brewery_state.style.display = "inline-block";
  brewery_state.style.padding = "5px 6px";
  brewery_state.style.margin = "1px 2px";
  Baddress.append(brewery_street, brewery_state);

  const Bweb = document.createElement("p", "brewery_website");
  Bweb.innerHTML = "Brewery_website:";

  const brewery_website  = document.createElement("span");
  brewery_website.innerHTML = "<a  href='"+ `${brewery.website_url ? brewery.website_url : 'null.html' }`+"'>Visit Brewery</a>"
  brewery_website.style.color = "black";
  brewery_website.style.borderRadius = "5px";
  brewery_website.style.display = "inline-block";
  brewery_website.style.padding = "5px 6px";
  brewery_website.style.margin = "1px 2px";
  Bweb.append(brewery_website);

  const Bphone = document.createElement("p", "brewery_phone");
  Bphone.innerHTML = "Brewery_phone no:";

  const brewery_phone  = document.createElement("span");
  brewery_phone.innerHTML =  "<p>'"+`${brewery.phone ? brewery.phone :  'no number available'}`+"'</p>"
  brewery_phone.style.color = "black";
  brewery_phone.style.borderRadius = "5px";
  brewery_phone.style.display = "inline-block";
  brewery_phone.style.padding = "5px 6px";
  brewery_phone.style.margin = "1px 2px";
  Bphone.append(brewery_phone);

  

  
  cardBody.append(Btype,Baddress,Bweb,Bphone);
  card.append(heading, cardBody);
  return card;
}

function Brewlist(breweries) {
  const container = document.createElement("div", "container-fluid");
  container.classList.add("container-fluid");
  container.style.color = "#B5651D";
  const heading = document.createElement("div")
  heading.innerHTML = "<h1 style='text-align: center'>Breweries</h1>"
  const row = document.createElement("div", "row");
  row.classList.add("row");
  const column = document.createElement("div", "col-12 countries");
  column.classList.add("col-12");

  breweries.forEach((brewery) => {
    const card = list(brewery);
    column.append(card);
  });

  row.append(column);
  container.append(heading, row);
  document.body.append(container);
}
