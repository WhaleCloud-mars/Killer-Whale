import { Row, Col } from "antd";
import { connect } from "dva";
import { Tabs } from "antd-mobile";
import styles from "./index.less";
import LeftContent from "./components/LeftContent";
import LeftTitle from "./components/LeftTitle";
import CenterContent from "./components/CenterContent";
import CenterTitle from "./components/CenterTitle";
import RightContent from "./components/RightContent";
import RightTitle from "./components/RightTitle";
import DeleteDroppable from "../../components/DeleteDroppable";

const App = ({ global, dispatch }) => {
  const {
    hidevalue = "true",
    cneterscale = 100,
    sourceData,
    views,
    showPage,
    showItemData,
  } = global;

  const { components = [], name = "" } = views[showPage];
  const handleChange = value => dispatch({ type: "global/changeScale", payload: value });
  const handleHide = value => dispatch({ type: "global/changeHide", payload: value });
  const onAction = action => dispatch(action);

  const clickDrag = (item, e) => {
    e && e.stopPropagation && e.stopPropagation();
    dispatch({ type: "global/showItem", payload: item });
  };

  const changeItemProp = data => {
    dispatch({ type: "global/changeItemProp", payload: data });
  };

  const gPage = page => {
    dispatch({ type: "global/gPage", payload: page });
  };

  const dPage = page => {
    dispatch({ type: "global/dPage", payload: page });
  };
  const changeShowPage = page => {
    dispatch({ type: "global/changeShowPage", payload: page });
  };

  const tabs = [{ title: "组件库", sub: "1" }, { title: "页面库", sub: "2" }];

  return (
    <div className={styles.panel}>
      <Row className={styles.rowclass}>
        <Col span={6} className={styles.colclass}>
          <div>
            <LeftTitle />
            <Tabs tabs={tabs} initialPage={0}>
              <div style={{ backgroundColor: "#fff" }}>
                <LeftContent sourceData={sourceData} />
              </div>

              <div style={{ backgroundColor: "#fff" }}>
                <LeftContent
                  viewsData={views}
                  changeShowPage={changeShowPage}
                  showPage={views[showPage]}
                />
              </div>
            </Tabs>
            {/* <DeleteDroppable onDropAction={onAction} /> */}
          </div>
        </Col>
        <Col
          span={12}
          className={styles.colclass}
          style={{
            minWidth: "435px",
            background: "#EDF0F5",
            overflow: "hidden",
          }}
        >
          <CenterTitle
            changeShowPage={changeShowPage}
            handleChange={handleChange}
            views={views}
            showPage={showPage}
            handleHide={handleHide}
            hidevalue={hidevalue}
          />
          <CenterContent
            cneterscale={cneterscale}
            hidevalue={hidevalue}
            onDropAction={onAction}
            components={components}
            showItemData={showItemData}
            clickDrag={clickDrag}
          />
          <DeleteDroppable onDropAction={onAction} />
        </Col>
        <Col span={6} className={styles.colclass}>
          <RightTitle onAction={onAction} gPage={gPage} dPage={dPage} showPage={views[showPage]} />
          {showItemData && showItemData.id && (
            <RightContent showItemData={showItemData} changeItemProp={changeItemProp} />
          )}
        </Col>
      </Row>
    </div>
  );
};

export default connect(({ global }) => ({ global }))(App);
