const menu = [
    {
        src: '/img/aktivitas.webp',
        alt: 'Aktivitas',
        link: '#',
        title: 'Aktivitas'
    },
    {
        src: '/img/apresiasi.webp',
        alt: 'Apresiasi',
        link: '#',
        title: 'Apresiasi'
    },
    
    {
        src: '/img/waktu-bermain.png',
        alt: 'Waktu Bermain',
        link: '#',
        title: 'Waktu Bermain'
    },
    
    {
        src: '/img/game.webp',
        alt: 'Game',
        link: '#',
        title: 'Game'
    },
    
    {
        src: '/img/kesenian.webp',
        alt: 'Kesenian',
        link: '#',
        title: 'Kesenian'
    },
    
    {
        src: '/img/laporan.webp',
        alt: 'Laporan',
        link: '#',
        title: 'Laporan'
    },
    
];

export default function Menu() {
    return (
        <>
            <div className="container my-8 max-w-sm border rounded-lg shadow-md shadow-black border-black bg-white">
                <div className="w-full flex flex-wrap gap-0 justify-center">
                    {menu.map((menu, index) => (
                        <div key={index} className="p-4 w-1/3" data-aos="fade-up" data-aos-anchor-placement="top-center">
                            <div className="overflow-hidden hover:scale-95 hover:border-4 transition duration-500 hover:border-black hover:rounded-full">
                                <a href={menu.link}>
                                    <img src={menu.src} alt={menu.alt} className="object-cover hover:scale-110 transition duration-500" />
                                </a>
                            </div>
                            <h4 className="text-black pt-2 text-sm"><a href={menu.link} className="text-black">{menu.title}</a></h4>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}