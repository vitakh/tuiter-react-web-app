const NavigationSidebar = () => {
    return(`
   <ul class="list-group">
             <a href="/" class="list-group-item"><i class="fab fa-twitter"></i></a>
             <a href="../home.html" class="list-group-item"><i class="fas fa-home"></i> Home</a>
             <a href="../explore/index.html" class="list-group-item active"><i class="fas fa-hashtag"></i> Explore</a>
             <a href="../notifications.html" class="list-group-item"><i class="fas fa-bell"></i> Notifications</a>
             <a href="../messages.html" class="list-group-item"><i class="fas fa-envelope"></i> Messages</a>
             <a href="../bookmarks/index.html" class="list-group-item"><i class="fas fa-bookmark"></i> Bookmarks</a>
             <a href="#" class="list-group-item"><i class="fas fa-list"></i> Lists</a>
             <a href="../profile.html" class="list-group-item"><i class="fas fa-user"></i> Profile</a>
             <a href="#" class="list-group-item">
                 <span class="fa-stack wd-font-icon-more">
                     <i class="fas fa-circle fa-stack-2x"></i>
                     <i class="fas fa-ellipsis-h fa-stack-1x fa-inverse"></i>
                </span>More</a>
         </ul>
         <a href="../tuit.html" class="btn btn-primary btn-block rounded-pill w-100  mt-2">Tuit</a>
 `);
}
export default NavigationSidebar;