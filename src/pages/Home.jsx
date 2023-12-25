// import Navbar from '../components/navbar';
import ProfileContainer from '../components/profile-container';
import Menu from '../components/menu';
import Footer from '../components/footer';
import '../css/style.css';

export default function Home() {
    return (
        <>
        <div className="mx-auto text-center max-w-sm p-4">
            <ProfileContainer />
            <Menu />
            <Footer />
        </div>
        </>
    );
}
