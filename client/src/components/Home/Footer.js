import React from 'react';


const Footer =()=>{
    return(
       <footer className="site-footer">

  <div className="container">
    <div className="row">
      <div className="col-md-8 col-sm-6 col-xs-12">
        <p className="copyright-text">Copyright © CHELIMEN 
        </p>
      </div>
      <div className="col-md-4 col-sm-6 col-xs-12">
        <ul className="social-icons">
          <li><a className="facebook" href="#"><i className="fa fa-facebook"/></a></li>
          <li><a className="twitter" href="#"><i className="fa fa-twitter" /></a></li>
          <li><a className="dribbble" href="#"><i className="fa fa-dribbble" /></a></li>
          <li><a className="linkedin" href="#"><i className="fa fa-linkedin" /></a></li>   
        </ul>
      </div>
    </div>
  </div>
</footer>

    )
}
export default Footer ;


