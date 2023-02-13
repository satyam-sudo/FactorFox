import React from 'react'

const CompanyLogo = () => {
    const logourl = "./assets/images/fflogo.png";
    const slimlgo = "./assets/images/logo-slim.png";
      
  return (
    <div>
        <img
        src={logourl}
        className="img-fluid d-none d-sm-block"
        alt="company-logo"
        // height={}
      />
      <img
        src={slimlgo}
        className="img-fluid d-block d-sm-none"
        alt="company-logo"
        // height={}
      />
    </div>
  )
}

export default CompanyLogo