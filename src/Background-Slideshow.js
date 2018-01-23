import React, { Component } from 'react'
import './Background-Slideshow.css'
import BackgroundSlideshow from 'react-background-slideshow'



const image1 = 'https://s3-us-west-1.amazonaws.com/juke-joint/alice.jpg'
const image2 = 'https://s3-us-west-1.amazonaws.com/juke-joint/beachboys.jpg'
const image3 = 'https://s3-us-west-1.amazonaws.com/juke-joint/beatles.jpg'
const image4 = 'https://s3-us-west-1.amazonaws.com/juke-joint/wilco.jpg'
const image5 = 'https://s3-us-west-1.amazonaws.com/juke-joint/david-bowie.jpg'
const image6 = 'https://s3-us-west-1.amazonaws.com/juke-joint/metalica.jpg'
const image7 = 'https://s3-us-west-1.amazonaws.com/juke-joint/dylan.jpg'
const image8 = 'https://s3-us-west-1.amazonaws.com/juke-joint/rush.jpg'
const image9 = 'https://s3-us-west-1.amazonaws.com/juke-joint/janes.jpg'
const image10 = 'https://s3-us-west-1.amazonaws.com/juke-joint/marvin.jpg'
const image11 = 'https://s3-us-west-1.amazonaws.com/juke-joint/johnny.jpg'
const image12 = 'https://s3-us-west-1.amazonaws.com/juke-joint/neil.jpg'
const image13 = 'https://s3-us-west-1.amazonaws.com/juke-joint/lou.jpg'
const image14 = 'https://s3-us-west-1.amazonaws.com/juke-joint/lynott.jpg'
const image15 = 'https://s3-us-west-1.amazonaws.com/juke-joint/madonna.jpg'
const image16 = 'https://s3-us-west-1.amazonaws.com/juke-joint/jimi.jpg'
const image17 = 'https://s3-us-west-1.amazonaws.com/juke-joint/merle.jpg'
const image18 = 'https://s3-us-west-1.amazonaws.com/juke-joint/djr.jpg'
const image19 = 'https://s3-us-west-1.amazonaws.com/juke-joint/motorhead.jpg'
const image20 = 'https://s3-us-west-1.amazonaws.com/juke-joint/littlerichard.jpg'
const image21 = 'https://s3-us-west-1.amazonaws.com/juke-joint/nick.jpg'
const image22 = 'https://s3-us-west-1.amazonaws.com/juke-joint/nirvana.jpg'
const image23 = 'https://s3-us-west-1.amazonaws.com/juke-joint/oasis.jpg'
const image24 = 'https://s3-us-west-1.amazonaws.com/juke-joint/patsy.jpg'
const image25 = 'https://s3-us-west-1.amazonaws.com/juke-joint/pe.jpg'
const image26 = 'https://s3-us-west-1.amazonaws.com/juke-joint/pj.jpg'
const image27 = 'https://s3-us-west-1.amazonaws.com/juke-joint/queenbee.jpg'
const image28 = 'https://s3-us-west-1.amazonaws.com/juke-joint/roy.jpg'
const image29 = 'https://s3-us-west-1.amazonaws.com/juke-joint/byrds.jpg'
const image30 = 'https://s3-us-west-1.amazonaws.com/juke-joint/ryan.jpg'
const image31 = 'https://s3-us-west-1.amazonaws.com/juke-joint/clash.jpg'
const image32 = 'https://s3-us-west-1.amazonaws.com/juke-joint/stones.jpg'
const image33 = 'https://s3-us-west-1.amazonaws.com/juke-joint/stooges.jpg'
const image34 = 'https://s3-us-west-1.amazonaws.com/juke-joint/The-Beach-Boys-1.jpg'
const image35 = 'https://s3-us-west-1.amazonaws.com/juke-joint/theboss.jpg'
const image36 = 'https://s3-us-west-1.amazonaws.com/juke-joint/thekiller.jpg'
const image37 = 'https://s3-us-west-1.amazonaws.com/juke-joint/theking.jpg'
const image38 = 'https://s3-us-west-1.amazonaws.com/juke-joint/tompetty.jpg'
const image39 = 'https://s3-us-west-1.amazonaws.com/juke-joint/snoop.jpg'
const image40 = 'https://s3-us-west-1.amazonaws.com/juke-joint/willie.jpg'
const image41 = 'https://s3-us-west-1.amazonaws.com/juke-joint/zep.jpg'

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