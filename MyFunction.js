function ViewData(dataArr) {
  const result = dataArr.map((item, index) => {
    return `
         <div key=${index} id="view-data">
            <h2>${index + 1}: ${item.text}</h2>
            <div>
              <button onclick="Delete(${index})">Delete</button>
              <button onclick="Edite(${index})">Edite</button>
            </div>
         </div>
        `;
  });

  return (contener.innerHTML = result.join(""));
}
