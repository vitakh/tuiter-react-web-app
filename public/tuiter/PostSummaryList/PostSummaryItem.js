const PostSummaryItem = (post) => {
    return(`
         <li class="list-group-item">
                     <div class="row d-flex align-items-center">
                     <div class="col-xxl-10 col-xl-10 col-lg-10 col-md-10 col-sm-9">
                         <div class="col text-muted">${post.topic}</div>
                         <div class="row">
                             <div class="col fw-bold">${post.userName} <i class="fas fa-check-circle"></i> <span class="text-muted fw-normal"> - ${post.time}</span></div>
                         </div>
                         <div class="col fw-bold">${post.title}</div>
                         ${post.tweets ? 
                           `<div class="col text-muted">${post.tweets} Tuits</div>` 
                                       : ""}
                         
                     </div>
                     <div class="col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-3"><img src=${post.image} class="wd-img float-end" width="90px" height="90px"></div>
                     </div>
                 </li>
    `);
}

export default PostSummaryItem;