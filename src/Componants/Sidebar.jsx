import './Sidebar.css'

function Sidebar() {

    const data = [
        {id:1, img:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/Home.png?raw=true", title:'Home'},{id: 2, img:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/Search.png?raw=true", title:'search'},{id:3, img:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/Search.png?raw=true", title:'Your Library'}
    ];

    return (

        <>

            <div className="container">
                <img src="https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/10.spotify-clone/assets/Spotify%20logo.png"
                    alt="" className="logo" />
            </div>

            {/* <div className="new"><img className="icons"
                src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/Home.png?raw=true"
                alt="" />
                <p className="text">Home</p>
            </div>


            <div className="new2">
                <img className="icons"
                    src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/Search.png?raw=true"
                    alt="" />
                <p className="text">search</p>
            </div>

            <div className="new3">
            <img className="icons"
                src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/Your%20library.png?raw=true"
                alt="" />
                <p className="text">Your Library</p>
            </div> */}

                {data.map((i)=>(
                    <>
                    <img className='icons' src={i.img} alt=""/>
                    <p className="text" >{i.title}</p>
                    </>
                ))}



            <div className="new4"><img className="icons"
                src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/Create.png?raw=true"
                alt="" />
                <p className="text">Create playlist</p>
            </div>

            <div className="new5"><img className="icons"
                src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/Liked.png?raw=true"
                alt="" />
                <p className="text">Liked Songs</p>
            </div>
            <div className="new6"><img className="icons"
                src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/your%20episodes.png?raw=true"
                alt="" />
                <p className="text">Your Episodes</p>
            </div>

            <div>
                <p className="new7 new8">FAV</p>
            </div>
            <div>
                <p className="new7">Daily Mix 1</p>
            </div>
            <div>
                <p className="new7">Discover weekly</p>
            </div>
            <div>
                <p className="new7">Malayalam</p>
            </div>
            <div>
                <p className="new7">Dance / Electronix mix</p>
            </div>
            <div>
                <p className="new7">EDM / Popular</p>
            </div>

            <div>
                <img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/grommet-icons_install-option.png?raw=true"
                    alt="" className="icons new9" />
                <p className="new10">Install App</p>
            </div>



        </>




    )
}

export default Sidebar