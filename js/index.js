var elList = document.querySelector('.js-movies-list')

movies.forEach(function(movie) {
    var elLi = document.createElement("li")
    var elDiv = document.createElement('div')
    var link = movie.trailer.split("=");
    elDiv.className = 'card'
    elDiv.style.width = '270px '
    elDiv.style.height = '450px'
    elLi.style.marginBottom = '10px'
    elLi.style.listStyle = 'none'

    elDiv.innerHTML = `
            <img src=${movie.smallPoster} class="card-img-top" alt="...">
            
            <div class="card-body">
            <h3 class="card-title  text-bold">${movie.title.substr(0,17)}...</h3>
            <p class="movie__categories">${movie.categories}</p>
            <p class="movie__year mb-1 text-center font-weight-bold text-success mt-auto ">${movie.year}</p>

            <div class="d-flex align-items-center justify-content-center mb-3">
            <span class="star">★</span>
            <span class="movie__rating font-weight-bold">${movie.imdbRating}</span>
             </div>
            <a href=${movie.trailer} class="btn  btn-primary text-center">See More</a>
            </div>
      `

    elLi.appendChild(elDiv)
    elList.appendChild(elLi)

})