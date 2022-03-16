import { useEffect } from 'react';
import { PageHeader, Button, Input, Space, Badge } from 'antd';
import { ShoppingCartOutlined, MenuOutlined } from '@ant-design/icons';
import { useMoralis } from "react-moralis";
import { Link } from 'react-router-dom';
import './Header.css';
import AmazonLogo from '../images/logo.png';
import BookStore from '../images/bookstore.png';
import USA from '../images/usa.png';

const { Search } = Input;
const categories = ["Comics", "Dictionaries", "Novels", "Fantasy", "Horror", "Adventure"];

const Header = () => {
  const { authenticate, account } = useMoralis();

  return (
    <div className="site-page-header-ghost-wrapper">
      <PageHeader
        ghost={false}
        extra={[
          <>
            <Link to='/'>
              <img src={AmazonLogo} className='logo' />
            </Link>
            <img src={BookStore} className='logo' />
            <Search
              placeholder="Find product"
              enterButton
              className='searchBar'
            />
            {account ? <span className='login'>{`${account.slice(0, 4)}...`}</span>

              :
              <Button className='login' key="1" type="primary" onClick={() => authenticate()}>
                Login
              </Button>
            }

            <Space size={"large"}>
              <Badge count={0} showZero>
                <span className='header-buttons'>
                  <ShoppingCartOutlined className="header-icon">
                  </ShoppingCartOutlined>
                  Cart
                </span>
              </Badge>
              <Space className='header-buttons'>
                <img src={USA} alt="region" className="flag" />🢓
              </Space>
            </Space>
          </>
        ]}>
      </PageHeader>
      <div className='site-page-subheader-ghost-wrapper'>
        <Space size={"middle"}>
          <Space size={"small"} style={{ fontWeight: "bold" }}>
            <MenuOutlined />
            Categories
          </Space>
          {categories.map((category) => {
            return (
              <Link key={category} to='/categories' state={category} className="categories">
                {category}
              </Link>
            );
          })}
        </Space>
      </div>
    </div>
  )
}

export default Header;