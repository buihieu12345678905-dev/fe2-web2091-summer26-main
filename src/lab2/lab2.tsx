import { Image,Table,Button } from "antd";
function Lab2() {
    const columns = [
        {
            title: "ID",
            dataIndex: "id"
        },
        {
            title: "Name",
            dataIndex: "name"
        },
        {
            title: "Avatar",
            dataIndex: "avatar",
            render: (value: string) => <Image src={value} />,
        },
        {
            title: "Action",
           render: () => (
      <>
        <Button  htmlType="submit" type="primary">Edit</Button>
        <Button  htmlType="submit" type="primary">Delete</Button>
      </>
    ), 
        }
    ];
    const dataSource = [
        {
            key: 1,
            id: 1,
            name: "hieubd",
            avatar: "https://i.pravatar.cc/150?img=1"


        },

        {
            key: 2,
            id: 2,
            name: "carot",
            avatar: "https://i.pravatar.cc/150?img=1"
        }
    ];

    return <Table columns={columns} dataSource={dataSource} />;

}
export default Lab2;