app.component('nav-section', {
    template:
    /*html*/
    ` 
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
      <a class="navbar-brand fs-1" href="#">Letter <br> Likho</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon "></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
         
        </ul>
        <ul class="navbar-nav me-auto mb-2 mb-lg-0 .col-auto">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">About Us</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Blog</a>
          </li>
          <li class="nav-item">
            <a class="btn btn-outline-success log" href="#">Login</a>
          </li>
          <li class="nav-item">
            <a class="btn btn-light sign" href="#">Sign Up</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

    `
})