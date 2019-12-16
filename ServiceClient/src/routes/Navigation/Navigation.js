import React from 'react';
import { Col, Row } from 'antd';
import Logo from "../../assets/logo.png";
import IndexArrow from "../../assets/index_arrow.png";
import Order from "../../assets/order.svg";
import { Link } from 'dva/router';
import styles from './Navigation.css';
export default class Navigation extends React.Component {
    render() {
        return (<div className={styles.container}>
        <header className={styles.headerContainer}>
          <Row>
            <Col span={3}>
              <img src={Logo}/>
            </Col>
          </Row>
          <Row>
            <Col offset={7} span={10} className={styles.title}>
              中信银行自助填单系统
            </Col>
          </Row>
        </header>

        <section className={styles.section}>
          <header className={styles.sectionTitle}>信息登记/业务申请</header>
          <article>
            <Row>
              <Col offset={2} span={4} className={styles.documentContainer}>
                <Link to="/luruRegistration">
                  <Row className={styles.documentTitle}>个人客户信息登记表</Row>
                  <Row>
                    <Col span={6} className={styles.indexArrow}>
                      <img src={IndexArrow}/>
                    </Col>
                    <Col offset={2} span={16}>
                      <img src={Order}/>
                    </Col>
                  </Row>
                </Link>
              </Col>

              <Col span={4} className={styles.documentContainer}>
                <Link to="/luruDanweixinxidengjibiao">
                  <Row className={styles.documentTitle}>单位信息登记表</Row>
                  <Row>
                    <Col span={6} className={styles.indexArrow}>
                      <img src={IndexArrow}/>
                    </Col>
                    <Col offset={2} span={16}>
                      <img src={Order}/>
                    </Col>
                  </Row>
                </Link>
              </Col>
              
              <Col span={4} className={styles.documentContainer}>
                <Link to="/luruKailiApplyBook">
                  <Row className={styles.documentTitle}>开立单位银行结算账户申请书</Row>
                  <Row>
                    <Col span={6} className={styles.indexArrow}>
                      <img src={IndexArrow}/>
                    </Col>
                    <Col offset={2} span={16}>
                      <img src={Order}/>
                    </Col>
                  </Row>
                </Link>
              </Col>
              <Col span={4} className={styles.documentContainer}>
                <Link to="/luruBgyhjszhsqss">
                  <Row className={styles.documentTitle}>变更银行结算账户申请书</Row>
                  <Row>
                    <Col span={6} className={styles.indexArrow}>
                      <img src={IndexArrow}/>
                    </Col>
                    <Col offset={2} span={16}>
                      <img src={Order}/>
                    </Col>
                  </Row>
                </Link>
              </Col> 
              <Col span={4} className={styles.documentContainer}>
                <Link to="/luruJszhsqshu">
                  <Row className={styles.documentTitle}>撤销银行结算账户申请书</Row>
                  <Row>
                    <Col span={6} className={styles.indexArrow}>
                      <img src={IndexArrow}/>
                    </Col>
                    <Col offset={2} span={16}>
                      <img src={Order}/>
                    </Col>
                  </Row>
                </Link>
              </Col>
            </Row>
          </article>
        </section>



        <section className={styles.section}>
          <header className={styles.sectionTitle}>往来单据</header>
          <article>
            <Row>
              <Col offset={6} span={4} className={styles.documentContainer}>
                <Link to="/lurujiangzhangdan">
                  <Row className={styles.documentTitle}>进账单</Row>
                  <Row>
                    <Col span={6} className={styles.indexArrow}>
                      <img src={IndexArrow}/>
                    </Col>
                    <Col offset={2} span={16}>
                      <img src={Order}/>
                    </Col>
                  </Row>
                </Link>
              </Col>

              <Col span={4} className={styles.documentContainer}>
                <Link to="/luruXinjinjiaokuandan">
                  <Row className={styles.documentTitle}>现金交款单</Row>
                  <Row>
                    <Col span={6} className={styles.indexArrow}>
                      <img src={IndexArrow}/>
                    </Col>
                    <Col offset={2} span={16}>
                      <img src={Order}/>
                    </Col>
                  </Row>
                </Link>
              </Col>

              


              <Col span={4} className={styles.documentContainer}>
                <Link to="/luruYewujiesuanshenqingshu">
                  <Row className={styles.documentTitle}>结算业务申请书</Row>
                  <Row>
                    <Col span={6} className={styles.indexArrow}>
                      <img src={IndexArrow}/>
                    </Col>
                    <Col offset={2} span={16}>
                      <img src={Order}/>
                    </Col>
                  </Row>
                </Link>
              </Col>
            </Row>
          </article>
        </section>

        <section className={styles.section}>
          <header className={styles.sectionTitle}>代理授权</header>
          <article>
            <Row>
              <Col offset={2} span={4} className={styles.documentContainer}>
                <Link to="/lurushouquanshu">
                  <Row className={styles.documentTitle}>电子银行业务办理授权书</Row>
                  <Row>
                    <Col span={6} className={styles.indexArrow}>
                      <img src={IndexArrow}/>
                    </Col>
                    <Col offset={2} span={16}>
                      <img src={Order}/>
                    </Col>
                  </Row>
                </Link>
              </Col>

              <Col span={4} className={styles.documentContainer}>
                <Link to="/luruYwdlsqbiao">
                  <Row className={styles.documentTitle}>公司电子银行业务代理授权表</Row>
                  <Row>
                    <Col span={6} className={styles.indexArrow}>
                      <img src={IndexArrow}/>
                    </Col>
                    <Col offset={2} span={16}>
                      <img src={Order}/>
                    </Col>
                  </Row>
                </Link>
              </Col>

              <Col span={4} className={styles.documentContainer}>
                <Link to="/luruPowerbook">
                  <Row className={styles.documentTitle}>公司电子银行企业法定代表人授权书</Row>
                  <Row>
                    <Col span={6} className={styles.indexArrow}>
                      <img src={IndexArrow}/>
                    </Col>
                    <Col offset={2} span={16}>
                      <img src={Order}/>
                    </Col>
                  </Row>
                </Link>
              </Col>

              <Col span={4} className={styles.documentContainer}>
                <Link to="/luruShouqunweituoshu1">
                  <Row className={styles.documentTitle}>授权委托书（一）</Row>
                  <Row>
                    <Col span={6} className={styles.indexArrow}>
                      <img src={IndexArrow}/>
                    </Col>
                    <Col offset={2} span={16}>
                      <img src={Order}/>
                    </Col>
                  </Row>
                </Link>
              </Col>

              <Col span={4} className={styles.documentContainer}>
                <Link to="/luruShouqunweituoshu2">
                  <Row className={styles.documentTitle}>授权委托书（二）</Row>
                  <Row>
                    <Col span={6} className={styles.indexArrow}>
                      <img src={IndexArrow}/>
                    </Col>
                    <Col offset={2} span={16}>
                      <img src={Order}/>
                    </Col>
                  </Row>
                </Link>
              </Col>
            </Row>
          </article>
        </section>
      </div>);
    }
}
