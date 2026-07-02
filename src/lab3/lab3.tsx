import { Image, Table, Button } from "antd";

function Lab3() {
  const columns = [
    {
      title: "ID",
      dataIndex: "id",
    },
    {
      title: "Name",
      dataIndex: "name",
    },
      {
      title: "Email",
      dataIndex: "email",
    },
      {
      title: "Status",
      dataIndex: "status",
    },
  {
            title: "Action",
           render: () => (
      <>
        <Button  htmlType="submit" type="primary">Edit</Button>
        <Button  htmlType="submit" danger>Delete</Button>
      </>
    ), 
        }
 
    
  ];
  const dataSource = [
    {
      key: 1,
      id: 1,
      name: "thanh",
      age: 20,
      email: "@gmail.com",
      status: "active",
    },
    {
      key: 2,
      id: 2,
      name: "thanh",
       email: "@gmail.com",
       status: "active",
    },
     {
      key: 3,
      id: 3,
      name: "thanh",
       email: "@gmail.com",
       status: "active",
    },
     {
      key: 4,
      id: 4,
      name: "thanh",
       email: "@gmail.com",
       status: "active",
    },
     {
      key: 5,
      id: 5,
      name: "thanh",
       email: "@gmail.com",
       status: "active",
    },

  ];

  return <Table columns={columns} dataSource={dataSource} />;
}

export default Lab3;