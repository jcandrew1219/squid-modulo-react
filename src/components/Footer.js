import React from "react";

function Footer() {
	return (
		<footer className="row justify-content-center align-items-end p-2">
			<div className ="col-3 text-center">
				<a href="https://github.com/jcandrew1219">
                    <img src={require("../images/GitHub-Mark.png")} className="footer-img m-2" alt="GitHub Logo"/>
                </a>
                <a href="https://www.linkedin.com/in/jacob-andrew-111625257?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bm9XfOwFKTiCflx1Dd6wE1Q%3D%3D">
                    <img src={require("../images/LinkedIn-logo.webp")} className="footer-img m-2" alt="LinkIn Logo"/>
                </a>
                <a href="https://stackoverflow.com/users/22322166/jacob-andrew">
                    <img src={require("../images/StackOverflow-icon.png")} className="footer-img m-2" alt="GitHub Logo"/>
                </a>
            </div>
        </footer>
    )
}

export default Footer;