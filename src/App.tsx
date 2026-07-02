import { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";
import { Form, Input, Button } from "antd";
import { Modal } from "antd";
import { useState } from "react";
import { Layout } from "antd";
import { Table } from "antd";
import Lab2 from "./lab2/lab2";
import Lab3 from "./lab3/lab3";

function App() {
  const { Header, Content, Footer } = Layout;
  
  const onFinish = (values: any) => {
    console.log(values);
  };

  const [open, setOpen] = useState(false);



  const columns = [
  { title: "Name", dataIndex: "name" },
  { title: "Email", dataIndex: "email" },
  { title: "Role", dataIndex: "role" },
];

const data = [
  { key: 1, name: "John", email: 251, role: "nh" },
  { key: 2, name: "Anna", email: 301, role: "nh" },
]
  

  return (
    <>
      <nav className="bg-blue-600 text-white shadow">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="#" className="text-xl font-semibold">
            <strong>WEB2091 App</strong>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="#" className="hover:text-gray-200">
              Trang chủ
            </Link>
            <Link to="/list" className="hover:text-gray-200">
              Danh sách
            </Link>
            <Link to="/add" className="hover:text-gray-200">
              Thêm mới
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <Link to="#" className="hover:text-gray-200">
              Đăng nhập
            </Link>
            <Link to="#" className="hover:text-gray-200">
              Đăng ký
            </Link>
          </div>
        </div>
      </nav>

      {/* MAIN CONTENT */}
      <div className="max-w-6xl mx-auto mt-10 px-4 text-center">
        <Lab2 />

        <Lab3 />

        
        <Button type="primary">Login</Button>
        <Button>Text</Button>
       <Form onFinish={onFinish}>
      <Form.Item
      label = "name"
        name="name"
        rules={[{ required: true, message: "Nhập Name" }]}
      >
        <Input placeholder="Name" />
      </Form.Item>

      <Form.Item
      label = "email"
        name="email"
        rules={[{ required: true, message: "Nhập email" }]}
      >
        <Input placeholder="Email" />
      </Form.Item>

      <Form.Item
      label = "password"
        name="password"
        rules={[{ required: true, message: "Nhập Password" }]}
      >
        <Input placeholder="Password" />
      </Form.Item>

      

      <Form.Item>
        <Button htmlType="submit" type="primary">
          Login
        </Button>
      </Form.Item>
    </Form>



    <Button onClick={() => setOpen(true)}>Add User</Button>

      <Modal
        open={open}
        onCancel={() => setOpen(false)}
        onOk={() => setOpen(false)}
      >
        Nội dung modal
      </Modal>


       <Layout>
      <Header style={{ color: "white" }}>Header</Header>
      <Content style={{ padding: 20 }}>Content</Content>
      <Footer>Sidebar</Footer>
    </Layout>


    <Table columns={columns} dataSource={data} />

        

      </div>

      <Toaster />
    </>
  );
}

export default App;
