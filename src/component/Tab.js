import React ,{useState} from 'react'
import { Tabs } from 'antd';

import AzureopenAI from './AzureopenAI';
function Tab() {
    const [activeTabKey, setActiveTabKey] = useState();
    const handleTabChange = (key) => {
        setActiveTabKey(key);
      };
        return (
    <div>
<Tabs activeKey={activeTabKey} onChange={handleTabChange}>
  <Tabs.TabPane tab="OpenAI" key="OpenAI">
  </Tabs.TabPane>
  <Tabs.TabPane tab="AzureopenAI" key="AzureopenAI">
    {/* {AzureopenAI} */}
  </Tabs.TabPane>
</Tabs>
    </div>
  )
}
export default Tab
