import "../App.css";
import "../css/style.css";

export default function ProfileContainer() {
    return (
        <>
            <div className="container shadow-md border shadow-black border-black px-4 rounded-lg text-black max-w-sm mt-24 bg-white">
                <div className="flex flex-wrap">
                    <div className="self-center pt-4 px-2 w-1/2">
                        <div className="-left-24 pb-4 self-start drop-shadow-xl shadow-black">
                            <img src='/img/andika-alakate-3.webp' className="max-w-full rounded-3xl mx-auto drop-shadow-xl hover:scale-110 transition duration-500 hover:cursor-pointer" />
                        </div>
                    </div>

                    <div className="self-center p-4 pb-8 w-1/2">
                        <h1 className="text-sm">Andika Pratama</h1>
                        <a href="#contact" className="text-[8px] font-semibold text-white bg-sky-600 py-2 px-4 rounded-full hover:shadow-lg hover:text-white">Hubungi Saya</a>
                    </div>
                </div>
            </div>
        </>
    );
}
