import OurTeamMember from './OurTeamMember';
import OurTeamPageHeader from './OurTeamPageHeader';
import OurTeamMessage from './OurTeamMessage';
import OurValues from './OurValues';
import Footer from '../Footer'


export default function OurTeamPage(){
    return(
        <>
        <OurTeamPageHeader />
        <OurTeamMember />
        <OurValues />
        <OurTeamMessage />
        <Footer />
       
        </>
    )
}
