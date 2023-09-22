import ContactUsCard from './ContactUsCard';
import ContactUsHeader from './ContactUsHeader'
import ContactUsForm from './ContactUsForm';
import Footer from '../home/Footer';
import Logos from '../home/LogosA'

export default function ContactUs(){
    return(
        <>
        < ContactUsHeader />
        <ContactUsCard />
        < ContactUsForm />
        <Logos/>
        <Footer/>
        </>
    )
}