const WhoToFollowListItem = (who) => {
    return(`
<li class="list-group-item text-nowrap">
    <div class="row d-flex align-items-center">
        <div class="col-2"><img src="../../images/${who.avatarIcon}" class="rounded-circle" width="50px" height="50px"></div>
        <div class="col-7 float-start">
            <div class="col fw-bold">${who.userName} <i class="fas fa-check-circle"></i></div>
            <div class="col">@${who.handle}</div>
        </div>  
        <div class="col-3">
            <button class="btn btn-primary rounded-pill float-end">Follow</button>
        </div>
    </div>
</li>
    `);
}

export default WhoToFollowListItem;

