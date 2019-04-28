
main = () => {
  const container = document.getElementById("container");
  
  const isLoading = () => {
     return `<div id="preloader"></div>`   
  }
  container.innerHTML = isLoading;

  const product = async () => {
    try{
      const {
        imgPath,
        description,
        title,
        content,
      } = await callAPI();
      const productScreen =
        `
      <main>  
        <section class="top-section">
          <div class="top-section-img">
            <img src=${imgPath} alt="Girl drinking coffe with a laptop">
          </div>
          <div class="top-section-title">
            <h1>${title.toUpperCase()}</h1>
            <hr></hr>
          </div>
          <div class="top-section-description">
            <p>${description}</p>
          </div>
        </section>
        <section class="middle-section">
          <div>
            <img src="${content[0].imgPath}" alt="">
          </div>
          <div class="middle-section-text">
            <h2>${content[0].title.toUpperCase()}</h2>
            <p>${content[0].description}</p>        
          </div>        
        </section>
        <section class="bottom-section">
          <div class="bottom-section-text">
            <h2>${content[1].title.toUpperCase()}</h2>
            <p>${content[1].description}</p>
          </div>
          <div>
            <img src="${content[1].imgPath}" alt="">
          </div>
          </section>      
      </main> `;

      container.innerHTML = productScreen;
    } catch(error){ console.warn(error) };
  };

  product();
}

window.addEventListener("load", main)

