import React, { Component } from 'react'
import './Background-Slideshow.css'
import BackgroundSlideshow from 'react-background-slideshow'



import image1 from './img/alice.jpg'
import image2 from './img/beachboys.jpg'
import image3 from './img/beatles.jpg'
import image4 from './img/wilco.jpg'
import image5 from './img/david-bowie.jpg'
import image6 from './img/metalica.jpg'
import image7 from './img/dylan.jpg'
import image8 from './img/rush.jpg'
import image9 from './img/janes.jpg'
import image10 from './img/marvin.jpg'
import image11 from './img/johnny.jpg'
import image12 from './img/neil.jpg'
import image13 from './img/lou.jpg'
import image14 from './img/lynott.jpg'
import image15 from './img/madonna.jpg'
import image16 from './img/jimi.jpg'
import image17 from './img/merle.jpg'
import image18 from './img/djr.jpg'
import image19 from './img/motorhead.jpg'
import image20 from './img/littlerichard.jpg'
import image21 from './img/nick.jpg'
import image22 from './img/nirvana.jpg'
import image23 from './img/oasis.jpg'
import image24 from './img/patsy.jpg'
import image25 from './img/pe.jpg'
import image26 from './img/pj.jpg'
import image27 from './img/queenbee.jpg'
import image28 from './img/roy.jpg'
import image29 from './img/byrds.jpg'
import image30 from './img/ryan.jpg'
import image31 from './img/clash.jpg'
import image32 from './img/stones.jpg'
import image33 from './img/stooges.jpg'
import image34 from './img/The-Beach-Boys-1.jpg'
import image35 from './img/theboss.jpg'
import image36 from './img/thekiller.jpg'
import image37 from './img/theking.jpg'
import image38 from './img/tompetty.jpg'
import image39 from './img/snoop.jpg'
import image40 from './img/willie.jpg'
import image41 from './img/zep.jpg'

export default class Slideshow extends Component {
    render() {
        return (
            <div className="BackgroundSlideshow">
                <BackgroundSlideshow images={[
                    image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12, image13, image14, image15, image16, image17, image18, image19, image20, image21, image22, image23, image24, image25, image26, image27, image28, image29, image30, image31, image32, image33, image34, image35, image36, image37, image38, image39, image40, image41
                ]} />
            </div>
        )
    }
}