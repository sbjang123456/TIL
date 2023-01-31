import { Button, Space } from 'antd';
import { cssTestStyle } from './styles';

export default function AntdIndexPage() {
  return (
    <>
      <h1 className='text-3xl font-bold underline'>Hello, World!</h1>
      <Space>
        <Button type="primary" className="flex justify-center">
          Test Button
        </Button>
        <Button type="primary">
          Test Button
        </Button>
      </Space>
    </>
  );
}