import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./who.js"
const WhoToFollowList = () => {
    return(`
       <ul class="list-group mb-2">
           <li class="list-group-item fw-bold">Who to follow</li>
           ${who.map(one => WhoToFollowListItem(one)).join('')}
       </ul>
   `);
}
export default WhoToFollowList;