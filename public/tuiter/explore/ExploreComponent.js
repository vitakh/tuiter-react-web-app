import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return(`
             <div class="row d-flex align-items-center">
                 <div class="col-11 position-relative">
                     <div class="input-group">
                         <input type="text"
                                class="form-control rounded-pill ps-5"
                                id="search"
                                placeholder="Search Tuiter">
                     </div>
                     <i class="fas fa-search position-absolute wd-search-icon"></i>
                 </div>
                 <div class="col-1">
                     <a href="explore-settings.html"><i class="fas fa-cog float-end wd-settings-icon text-primary"></i></a>
                 </div>
             </div>

             <ul class="nav nav-tabs mt-2">
                 <li class="nav-item">
                     <a class="nav-link active" aria-current="page" href="for-you.html">For you</a>
                 </li>
                 <li class="nav-item">
                     <a class="nav-link" href="trending.html">Trending</a>
                 </li>
                 <li class="nav-item">
                     <a class="nav-link" href="news.html">News</a>
                 </li>
                 <li class="nav-item">
                     <a class="nav-link" href="sports.html">Sports</a>
                 </li>
                 <li class="nav-item d-sm-none d-md-block">
                     <a class="nav-link" href="entertainment.html">Entertainment</a>
                 </li>
             </ul>
             <div class="position-relative mt-2">
                 <img src="../../images/starship.png" class="w-100">
                 <h1 class="position-absolute wd-text-image">SpaceX's Starship</h1>
             </div>
           ${PostSummaryList()}
    `);
}
export default ExploreComponent;
