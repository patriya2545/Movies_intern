function Detail(){
    return(
        
        <div>
            <div className="max-w-md  mx-auto bg-zinc-50 p-8  mt-11 text-center">
                <span className="text-xl text-red-300">Barbie Fairytopia</span>
                <p className="mt-4 text-fuchsia-400">2006</p>
                <div className=" flex items-center justify-center">
                    <img className=" w-[120px]  h-[160px] mt-4 border-4 border-white drop-shadow-lg"
                    src="https://images-na.ssl-images-amazon.com/images/I/51T6H6XFVSL._SY445_.jpg"/>
                </div>
                <h6 className="text-yellow-400 text-xs mt-4">9.3</h6>
            </div>

            <div className="max-w-md  mx-auto bg-zinc-100 p-8">

                <div className="text-fuchsia-400">Released on </div>
                <div>2006 </div>
                <div className="mt-4 text-fuchsia-400">Director</div>
                <div >Elise Allen , Diane Duane</div>
                <div className="mt-4 text-fuchsia-400">Stars</div>
                <div>Barbie</div>
                <div className="mt-4 text-fuchsia-400">Reviewer</div>
                <div>5,516 users</div>
                <button className="bg-gradient-to-r from-fuchsia-300 to-pink-400 hover:scale-105  shadow-cla-blue px-4 py-1 rounded-lg mt-7 ml-28">View</button>
                <button className="bg-gradient-to-r from-fuchsia-300  px-4 py-1 rounded-lg pl-6 ml-9">Back</button>

            </div>

            
        </div>
    );
}

export default Detail;