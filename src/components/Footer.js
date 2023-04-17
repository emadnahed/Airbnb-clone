import React from 'react'


export default function Footer(){
    return(
        <footer>
            <div className='fot'>
                <div className='section-1'>
                        <p>© 2023 Airbnb, Inc.</p>
                        <ul className='fl'>
                            <li><a href="#">Privacy</a></li>
                            <li><a href="#">Terms</a></li>
                            <li><a href="#">Sitemap</a></li>
                            <li><a href="#">Company details</a></li>
                            <li><a href="#">Destinations</a></li>
                        </ul>
                </div>

                <div className='section-2'>
                        <a href="#">🌐 English (IN)</a>
                        <a href="#">₹ INR</a>
                        <a href="#"> Support & resources ^</a>
                </div>
            </div>
        </footer>
    )
}