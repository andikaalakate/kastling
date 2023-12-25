import { useEffect, useRef } from "react";

const navItems = [
    { id: 'profil', title: 'Profil' },
    { id: 'aktivitas', title: 'Aktivitas' },
    { id: 'apresiasi', title: 'Apresiasi' },
    { id: 'game', title: 'Game' },
    { id: 'kesenian', title: 'Kesenian' },
    { id: 'laporan', title: 'Laporan' },
    { id: 'materi', title: 'Materi' },
    { id: 'waktu-bermain', title: 'Waktu Bermain' },
];

export default function Navbar() {
    const hamburgerRef = useRef(null);
    const navMenuRef = useRef(null);

    useEffect(() => {
        const hamburger = hamburgerRef.current;
        const navMenu = navMenuRef.current;

        function handleScroll() {
            const header = document.querySelector('header');
            const fixedNav = header.offsetTop;
        
            if (window.pageYOffset > fixedNav) {
                header.classList.add('navbar-fixed');
            } else {
                header.classList.remove('navbar-fixed');
            }
        }
        
        function handleHamburgerClick() {
            hamburger.classList.toggle('hamburger-active');
            navMenu.classList.toggle('hidden');
        }
        
        function handleOutsideClick(event) {
            if (!hamburgerRef.current.contains(event.target) && !navMenuRef.current.contains(event.target)) {
                hamburger.classList.remove('hamburger-active');
                navMenu.classList.add('hidden');
            }
        }

        hamburger.addEventListener('click', handleHamburgerClick);
        document.addEventListener('click', handleOutsideClick);
        
        window.addEventListener('scroll', handleScroll);
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
            hamburger.removeEventListener('click', handleHamburgerClick);
            document.removeEventListener('click', handleOutsideClick);
        };

    }, [hamburgerRef]);

    return (
        <>
            <header className="absolute top-0 w-full flex items-center justify-between max-w-sm" id="navbar">
                <div className="container px-4 max-w-sm">
                    <div className="flex items-center justify-between relative">
                        <div className="px-4">
                            <a href="#" className="font-bold text-lg text-primary block py-5 text-black">Andika Alakate</a>
                        </div>

                        <div className="flex items-center px-4">
                            <nav ref={navMenuRef} className="hidden absolute py-5 bg-white shadow-lg rounded-lg max-w-[250px] w-full right-4 top-full z-[9999] bg-opacity-75">
                                <ul className="block backdrop-blur-sm transition-all duration-500 ease-in-out text-black">
                                    {navItems.map((item) => (
                                        <li key={item.id} className="group">
                                            <a href={`#${item.id}`} className="text-base text-dark py-2 mx-8 flex group-hover:text-primary">
                                                {item.title}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </nav>
                        </div>

                        <button ref={hamburgerRef} name="hamburger" type="button" className="block absolute right-4">
                            <span className="hamburger-line transition duration-300 ease-in-out origin-top-left"></span>
                            <span className="hamburger-line transition duration-300 ease-in-out"></span>
                            <span className="hamburger-line transition duration-300 ease-in-out origin-bottom-left"></span>
                        </button>
                    </div>
                </div>
            </header>
        </>
    )
}
