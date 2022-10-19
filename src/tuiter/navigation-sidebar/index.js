import React from "react";
const NavigationSidebar = (
    {
        active = 'explore'
    }
) => {
    return (
        <div>
        <div className="list-group">
            <a href="/tuiter" className="list-group-item"><i className="bi bi-twitter"></i></a>
            <a href="../../tuiter/home.html" className={`list-group-item
                    ${active === 'home'?'active':''}`}>
                <i className="bi bi-house-fill"></i> Home
            </a>
            <a href="/explore" className={`list-group-item
                    ${active === 'explore'?'active':''}`}>
                <i className="bi bi-hash"></i> Explore
            </a>
            <a href="/notifications" className={`list-group-item
                    ${active === 'notifications'?'active':''}`}>
                <i className="bi bi-bell-fill"></i> Notifications
            </a>
            <a href="/messages" className={`list-group-item
                    ${active === 'messages'?'active':''}`}>
                <i className="bi bi-envelope-fill"></i> Messages
            </a>
            <a href="../../tuiter/bookmarks/index.html" className={`list-group-item
                    ${active === 'bookmarks'?'active':''}`}>
                <i className="bi bi-bookmark-fill"></i> Bookmarks
            </a>
            <a href="/lists" className={`list-group-item
                    ${active === 'lists'?'active':''}`}>
                <i className="bi bi-list-ul"></i> Lists
            </a>
            <a href="../../tuiter/profile.html" className={`list-group-item
                    ${active === 'profile'?'active':''}`}>
                <i className="bi bi-person-fill"></i> Profile
            </a>
            <a href="/more" className={`list-group-item
                    ${active === 'more'?'active':''}`}>
                <i className="bi bi-circle-fill bi-stack-2x"></i> More
            </a>
        </div>
            <a href="../../tuiter/tuit.html"
               className="btn btn-primary btn-block rounded-pill w-100  mt-2">Tuit</a>
        </div>


    );

};

export default NavigationSidebar;