import PricingHeader from './PricingHeader';
import FaqPrice from './FaqPrice';
import PricingCard from'./PricingCard';
import Footer from '../Footer';
import LogosA from '../LogosA';
import './Pricing.css';

export default function Pricing(){
    return(
        <>
        <PricingHeader />
        <PricingCard />
        <hr className='section-line-pricing'></hr>
        <LogosA/>
        <FaqPrice />
        <Footer />
        </>
    )
}