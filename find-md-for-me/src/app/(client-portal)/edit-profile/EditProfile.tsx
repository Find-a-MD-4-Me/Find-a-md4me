import ChangePassword from '@/components/ClientDashboard/Profile/ChangePassword';
import UserProfile from '@/components/ClientDashboard/Profile/UserProfile';
import { Tabs } from 'antd';
import React from 'react';

const EditProfile = () => { 
    const items = [
        {
          key: "1",
          label: "Edit Profile",
          children: <UserProfile  />,
        },
        {
          key: "2",
          label: "Change Password ",
          children: <ChangePassword    />,
        },
      ]; 

    return (
        <div className=" lg:p-10 p-4">
                <div
          style={{ marginBottom: "16px" }} > 
            <Tabs defaultActiveKey="1" items={items}  className="w-full"/> 
          </div>
          
        </div>
    );
};

export default EditProfile;