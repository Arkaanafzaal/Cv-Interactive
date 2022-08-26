<template>
    <header class="d-print-none">
      <div class="container text-center text-lg-left">
        <div class="pt-4 clearfix">
          <div class="site-nav"> 
            <nav role="navigation">
              <ul class="nav justify-content-center">
                <li class="nav-item"><RouterLink to="/">Personal</RouterLink>
                </li>
                <li class="nav-item"><RouterLink to="/skill">Skill</RouterLink>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
    <div class="shadow-1-strong bg-white my-5 p-5" id="skills">
    <div class="skills-section">
      <h2 class="h2 fw-light mb-3">Professional Skills</h2>
      <div class="row">
        <div class="col-md-6">
          <div class="mb-3"><span class="fw-bolder">HTML</span>
            <div class="progress my-2 rounded" style="height: 20px">
              <div class="progress-bar bg-info" role="progressbar" data-aos="zoom-in-right" data-aos-delay="100" data-aos-anchor=".skills-section" style="width: 75%;" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">75%</div>
            </div>
          </div>
          <div class="mb-3"><span class="fw-bolder">CSS</span>
            <div class="progress my-2 rounded" style="height: 20px">
              <div class="progress-bar bg-info" role="progressbar" data-aos="zoom-in-right" data-aos-delay="200" data-aos-anchor=".skills-section" style="width: 70%" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">70%</div>
            </div>
          </div>
          <div class="mb-3"><span class="fw-bolder">JavaScript</span>
            <div class="progress my-2 rounded" style="height: 20px">
              <div class="progress-bar bg-info" role="progressbar" data-aos="zoom-in-right" data-aos-delay="300" data-aos-anchor=".skills-section" style="width: 55%" aria-valuenow="55" aria-valuemin="0" aria-valuemax="100">55%</div>
            </div>
          </div>
          <div class="mb-3"><span class="fw-bolder">WordPress</span>
            <div class="progress my-2 rounded" style="height: 20px">
              <div class="progress-bar bg-info" role="progressbar" data-aos="zoom-in-right" data-aos-delay="300" data-aos-anchor=".skills-section" style="width: 65%" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100">65%</div>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="mb-3"><span class="fw-bolder">Adobe Photoshop</span>
            <div class="progress my-2 rounded" style="height: 20px">
              <div class="progress-bar bg-secondary" role="progressbar" data-aos="zoom-in-right" data-aos-delay="400" data-aos-anchor=".skills-section" style="width: 90%" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">90%</div>
            </div>
          </div>
          <div class="mb-3"><span class="fw-bolder">Figma</span>
            <div class="progress my-2 rounded" style="height: 20px">
              <div class="progress-bar bg-secondary" role="progressbar" data-aos="zoom-in-right" data-aos-delay="500" data-aos-anchor=".skills-section" style="width: 95%" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100">95%</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
