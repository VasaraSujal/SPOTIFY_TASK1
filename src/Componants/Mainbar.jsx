import './Mainbar.css'

function Mainbar() {

    const data2 = [
        {img:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image4.png?raw=true", title:"Neffex Playlist"},{img:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image3.png?raw=true", title:"K/DA"},{img:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image1.png?raw=true", title:"Liked Songs"},{img:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image2.png?raw=true", title:"Dance/ Electronix mix"}
    ];


    const data3 = [
        {img:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image8.png?raw=true", title:"Meditation SELF"},{img:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image7.png?raw=true", title:"Words beyond act... "},{img:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image6.png?raw=true", title:"The Alexa Shows"},{img:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image5.png?raw=true", title:"The Stories of Ma..."},{img:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image10.png?raw=true", title:"Dance/ Electronix mix"}
    ];

    



    return (

        <>

            <div className="container2">
                <img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/User.png?raw=true"
                    alt="" className="images" />
                <img className="arrows"
                    src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/top%20arrow%20navigation.png?raw=true"
                    alt="" />
                <p className="Good">Good Morning</p>
            </div>

            <div className="container3">
                <div className="child">
                    <img className="images2"
                        src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/Liked.png?raw=true"
                        alt="" />
                    <p className="text2">Liked Songs</p>
                </div>
                {/* <div className="child">
                    <img className="images2"
                        src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image4.png?raw=true"
                        alt="" />
                    <p className="text2">Neffex Playlist</p>
                </div>
                <div className="child">
                    <img className="images2"
                        src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image3.png?raw=true"
                        alt="" />
                    <p className="text2">K/DA</p>
                </div>
                <div className="child">
                    <img className="images2"
                        src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image1.png?raw=true"
                        alt="" />
                    <p className="text2">Liked Songs</p>
                </div>
                <div className="child">
                    <img className="images2"
                        src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image2.png?raw=true"
                        alt="" />
                    <p className="text2">Dance/ Electronix mix</p>
                </div> */}

                    {data2.map((i)=>(
                        <>
                        <div className="child">
                        <img className="images2" src={i.img}/>
                        <p className='text2'>{i.title}</p>
                        </div>
                        </>
                    ))}


            </div>

            <p className="Shows">Shows You Might Like</p>

            <div className="container4">
                <div className="child2">
                    <img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image9.png?raw=true"
                        alt="" className="images3" />
                    <p className="text3">Weekly Motivatio...</p>
                </div>

                {/* <div className="child2"><img
                    src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image8.png?raw=true"
                    alt="" className="images3" />
                    <p className="text3">Meditation SELF</p>
                </div>

                <div className="child2"><img
                    src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image7.png?raw=true"
                    alt="" className="images3" />
                    <p className="text3">Words beyond act... </p>
                </div>

                <div className="child2"><img
                    src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image6.png?raw=true"
                    alt="" className="images3" />
                    <p className="text3">The Alexa Shows</p>
                </div>

                <div className="child2"><img
                    src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image5.png?raw=true"
                    alt="" className="images3" />
                    <p className="text3">The Stories of Ma...</p>
                </div>

                <div className="child2"><img
                    src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image10.png?raw=true"
                    alt="" className="images3" />
                    <p className="text3">Motivation Daily b...</p>
                </div> */}

                    {data3.map((i)=>(
                        <div className='child2'>
                            <img className='images3' src={i.img} alt="" />
                            <p className='text3'>{i.title}</p>
                        </div>
                    ))};



            </div>





        </>

    )
}

export default Mainbar