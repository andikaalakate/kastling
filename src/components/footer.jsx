export default function Footer() {
    return (
        <>
            <div className="container mt-8 pb-2 max-w-sm rounded-xl shadow-md shadow-black border border-black bg-sky-600">
                <div className="w-full flex flex-wrap justify-between gap-0">
                    <div className="p-4 max-w-sm w-28">
                        <h4 className="text-black p-2"><a href="#" className="text-black">Sekolah</a></h4>
                        <div className="overflow-hidden hover:scale-95 hover:border-4 transition duration-500 hover:border-black hover:rounded-full">
                            <a href="#">
                                <img src="/img/materi.png" alt="Admin Dashboard" className="object-cover hover:scale-110 transition duration-500" />
                            </a>
                        </div>
                        <h4 className="text-black p-2"><a href="#" className="text-black">Materi Pelajaran</a></h4>
                    </div>
                    <div className="p-4 max-w-sm w-28">
                        <h4 className="text-black p-2"><a href="#" className="text-black">Sekolah</a></h4>
                        <div className="overflow-hidden hover:scale-95 hover:border-4 transition duration-500 hover:border-black hover:rounded-full">
                            <a href="#">
                                <img src="/img/waktu-bermain.png" alt="Admin Dashboard" className="object-cover hover:scale-110 transition duration-500" />
                            </a>
                        </div>
                        <h4 className="text-black p-2"><a href="#" className="text-black">Materi Pelajaran</a></h4>
                    </div>
                </div>
            </div>
        </>
    )
}