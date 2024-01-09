import React from "react";
import { Space } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
const Header = () => {
  return (
    <>
      <div class="icon">
        <div class="icon_1">
          <Link to="/">
            <img
              src="https://img.fragrancex.com/images/assets/logo/fragrancex_logo.svg?v=3"
              height="40px"
              width="200px"
            ></img>
          </Link>
        </div>
        <div class="icon_1">
          <div class="inputz">
            <button>
              <input type="text" placeholder="Search" />
              <FaSearch />
            </button>
          </div>
        </div>
        <div class="icon_1">
          <Link to="/login">Sign In</Link>
        </div>
        <div class="icon_1">
          <a
            class="link-6"
            href="/customerservice/customerservice.html"
            aria-label="Help"
          >
            Help
          </a>
        </div>
        <div class="icon_1">
          <select
            id=""
            name="aaa"
            onchange="$('#TopCurrencyAsyncForm').submit();"
          >
            <option value="USD">USD</option>
            <option value="USD">RSA</option>
            <option value="USD">CN</option>
            <option selected="selected" value="VND">
              VND
            </option>
          </select>
        </div>
        <div class="icon_1">
          <Link to="/">
            <Space>
              <ShoppingCartOutlined />
            </Space>

            <span>Cart</span>
          </Link>
        </div>
      </div>

      <div class="icon2">
        <div class="icon_2">
          <Link to="/"> Women's Pefume</Link>
        </div>
        <div class="icon_2">
          <Link to="/"> WMen's Cologne</Link>
        </div>
        <div class="icon_2">
          <Link to="/">Brands </Link>
        </div>
        <div class="icon_2">
          <Link to="/frshopping">FreShipping </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
