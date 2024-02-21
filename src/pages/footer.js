import { Link } from "react-router-dom";
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
    return (
        <div className="bg-gray-200 p-10 py-20">
            <div className="container flex justify-evenly">
                <div>
                    <div>
                        <p className="text-xl">Oh my glasses</p>
                        <a href="https://www.facebook.com/profile.php?id=100071227488710"><FacebookIcon></FacebookIcon></a>
                        <a href="https://www.instagram.com/oh_my.glasses/"><InstagramIcon></InstagramIcon></a>
                    </div>
                    <div className="mt-4">
                        <p className="text-xl">Oh my watch</p>
                        <a href="https://www.facebook.com/profile.php?id=61553341115467"><FacebookIcon></FacebookIcon></a>
                        <a href="https://www.instagram.com/oh_my_watch_/"><InstagramIcon></InstagramIcon></a>
                    </div>
                </div>
                <div>
                    <p className="text-2xl">Contact us</p>
                    <p className="my-4"><PhoneAndroidIcon></PhoneAndroidIcon> 01fbcbfrbdfb</p>
                    <p ><LocationOnIcon></LocationOnIcon> North Korea</p>
                </div>
                <div className="flex flex-col">
                    <Link  to='/'>Home</Link>
                    <Link className="my-4" to='/glasses'>Glasses</Link>
                    <Link className="" to='/watches'>Watches</Link>
                </div>
            </div>
        </div>
    );
}

export default Footer;