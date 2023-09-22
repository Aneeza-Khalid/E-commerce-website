import { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import ShopAll from './ShopAll';
import ShopEquipment from './ShopEquipment';
import ShopTechnology from './ShopTechnology';


export default function ShopBody(){
    const [key, setKey] = useState('home');

    return(
        <>
<Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mb-3 mt-4">
      <Tab eventKey="home" title="All">
             < ShopAll/>
      </Tab>
      <Tab eventKey="profile" title="Technology">
           
           <ShopTechnology/>
      </Tab>
      <Tab eventKey="detail" title="Equipments">
      <ShopEquipment/>
      </Tab>
      
    </Tabs>
        </>
    )

}
