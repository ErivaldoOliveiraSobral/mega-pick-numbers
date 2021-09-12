import type { NextPage } from 'next'
import Main from '../components/Main';
import { useRouter } from 'next/router';

const Home: NextPage = () => {
    const router = useRouter();
    const { amount = 6 } = router.query;
    return <Main amount={+amount} />
};

export default Home
