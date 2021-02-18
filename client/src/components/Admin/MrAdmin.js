import React from 'react';

export default function MrAdmin() {
    return ( <div class="admin-panel">
  
    <div class="slidebar">
        <ul>
            <li><a href="" name="tab1"><i class="fa fa-tachometer"></i>General</a></li>
            <li><a href="" name="tab2"><i class="fa fa-eyedropper"></i>Styling</a></li>
            <li><a href="" name="tab3"><i class="fa fa-pencil"></i>Typography</a></li>
            <li><a href="" name="tab4"><i class="fa fa-picture-o"></i>Portfolio</a></li>
            <li><a href="" name="tab5"><i class="fa fa-file-video-o"></i>Blog / News</a></li>
            <li><a href="" name="tab6"><i class="fa fa-wrench"></i>Advanced</a></li>
        </ul>
    </div>
  
    <div class="main">
         <div id="tab1"><h2 class="header">Dashboard</h2> </div>
         <div id="tab2"><h2 class="header">Styling</h2></div>
         <div id="tab3"><h2 class="header">Typography</h2></div>
         <div id="tab4"><h2 class="header">Portfolio</h2></div>
         <div id="tab5"><h2 class="header">Blog /news</h2></div>
         <div id="tab6"><h2 class="header">Advanced</h2></div>    
    </div>
  <script src="./Admin"></script>
  </div>)

}


