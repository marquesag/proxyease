import { LiaExternalLinkAltSolid } from "react-icons/lia";
import axios from "axios";
import { useState, useEffect } from "react";

export default function Header() {
    const [userInfo, setUserInfo] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    async function getData() {
        try {
            const res = await axios.get('https://ipapi.co/json/');
            setUserInfo(res.data);
        } catch (err) {
            setError('Ops... Connection error!');
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getData();
    }, []);

    if (loading) return <div className="flex justify-center items-center text-lg">Loading...</div>;
    if (error) return <div className="flex justify-center items-center text-lg">{error}</div>;

    const truncate = (str, maxLength) => {
        if (!str) return 'N/A';
        return str.length > maxLength ? str.substring(0, maxLength) + '...' : str;
    };

    return (
        <header className='flex justify-around items-center text-base py-6'>
            <div className='space-y-4'>
                <div className='flex space-x-16 items-center'>
                    <strong className='text-gray-400 font-semibold'>IP</strong>
                    <span>{userInfo?.ip || 'N/A'}</span>
                </div>
                <div className='flex space-x-14'>
                    <strong className='text-gray-400 font-semibold'>ISP</strong>
                    <span>{userInfo?.org || 'N/A'}</span>
                </div>
               <div className='flex text-green-400 items-center space-x-4'>
                    <span>Check my IP</span>
                    <LiaExternalLinkAltSolid size={"1.2rem"} />
                </div>
            </div>
            <div className="h-[5.5rem] text-center w-[1.2px] bg-gray-400/30"></div>
            <div className='space-y-4'>
                <div className='flex gap-12 justify-between'>
                    <strong className='text-gray-400 font-semibold'>Country</strong>
                    <span>{truncate(userInfo?.country_name, 7)}</span>
                </div>
                <div className='flex gap-12 justify-between'>
                    <strong className='text-gray-400 font-semibold'>Region</strong>
                    <span>{truncate(userInfo?.region, 7)}</span>
                </div>
                <div className='flex gap-12 justify-between'>
                    <strong className='text-gray-400 font-semibold'>City</strong>
                    <span>{truncate(userInfo?.city, 7)}</span>
                </div>
            </div>
        </header>
    );
}
