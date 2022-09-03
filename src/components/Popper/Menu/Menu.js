import PropTypes from "prop-types";
import Tippy from "@tippyjs/react/headless";
import styles from "./Menu.module.scss";
import classNames from "classnames/bind";
import { Wrapper as PopperWrapper } from "~/components/Popper";
import MenuItem from "./MenuItem";
import Header from "./Header";
import { useState } from "react";

const cx = classNames.bind(styles);
const fefaultFn = () => {};

function Menu({ children, items = [], onChange = fefaultFn }) {

  const [history, setHistory] = useState([{ data: items }]);

  console.log(history)
  const current = history[history.length - 1];

  const renderItem = () => {
    return current.data.map((item, index) => {
      const isParent = !!item.chirldren;
      return (
        <MenuItem
          key={index}
          data={item}
          onClick={() => {
            if (isParent) {
              setHistory((prev) => [...prev, item.chirldren]);
            } else {
              onChange(item.type);
            }
          }}
        />
      );
    });
  };

  const handleResetToFirstPage = () => {
    setHistory((prev) => prev.slice(0, 1));
  };
  const handleResetMenu = () => {
    setHistory((prev) => prev.slice(0, prev.length - 1));
  };

  return (
    <Tippy
      interactive
      hideOnClick={false}
      delay={[0, 500]}
      offset={[12, 8]}
      placement="bottom-end"
      render={(attrs) => (
        <div className={cx("menu-list")} tabIndex="-1" {...attrs}>
          <PopperWrapper className={cx("menu-wrapper")}>
            {history.length > 1 && (
              <Header title={current.title} onBack={handleResetMenu} />
            )}
            <div className={cx("menu-body")}>{renderItem()}</div>
          </PopperWrapper>
        </div>
      )}
      onHide={handleResetToFirstPage}
    >
      {children}
    </Tippy>
  );
}

Menu.propTypes = {
  children: PropTypes.node.isRequired,
  items: PropTypes.array,
  onChange: PropTypes.func,
};

export default Menu;
